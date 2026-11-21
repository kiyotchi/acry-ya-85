<?php


namespace App\Services;

use App\Models\Color;
use App\Models\PlateThickness;
use App\Models\ProductOption;
use App\Models\ProductOptionContent;
use App\Models\Size;
use App\Models\ProductSetting;
use App\ValueObject\SizeType;
use Illuminate\Database\QueryException;
use Log;
use App\Models\SpecificationDetailIndividual;
use Illuminate\Support\Facades\DB;

/**
 * 規格詳細サービス
 * Class SpecificationDetailService
 *
 * @package App\Services
 */
class SpecificationDetailService
{
	/**
	 * 主キー検索
	 *
	 * 1レコードの返却
	 *
	 * @param int $specification_detail_individual_id
	 *
	 * @return mixed
	 */
	public function find( int $specification_detail_individual_id )
	{
		return SpecificationDetailIndividual::find($specification_detail_individual_id);
	}

	/**
	 * 商品IDで検索
	 *
	 * @param int $product_id
	 *
	 * @return mixed
	 */
	public function findByProductId( int $product_id )
	{
		return SpecificationDetailIndividual::where('product_id', $product_id)->get();
	}

	/**
	 * デフォルト設定を取得
	 *
	 * @param int $product_id
	 *
	 * @return mixed
	 */
	public function findBySpecificationDefault( int $product_id )
	{
		return SpecificationDetailIndividual::where([
			'product_id' => $product_id,
			'is_default_display' => 1
		])->get()->first();
	}

	/**
	 * 規格情報で検索
	 *
	 * @param int $color_id
	 * @param int $size_id
	 * @param int $thickness_id
	 * @param int $option_id
	 *
	 * @return mixed
	 */
	public function findBySpecificationData( $product_id, $color_id, $size_id, $thickness_id, $option_id )
	{
		$search_query = [];
		if( !empty($product_id) ) $search_query['product_id'] = $product_id;
		if( !empty($color_id) ) $search_query['color_id'] = $color_id;
		if( !empty($size_id) ) $search_query['size_id'] = $size_id;
		if( !empty($thickness_id) ) $search_query['plate_thickness_id'] = $thickness_id;
		if( !empty($option_id) ) $search_query['product_option_content_id'] = $option_id;

		if( empty($search_query) ) return;

		return SpecificationDetailIndividual::where($search_query)->get()->first();
	}

	/**
	 * カラー情報取得
	 *
	 * 設定されたカラーIDと紐づくカラー名称を取得する
	 * 重複するIDはまとめる
	 *
	 * @param int $product_id
	 *
	 * @return array
	 */
	public function getColorData( int $product_id )
	{
		// 中間テーブルを作成する必要性もあまりないのでJOINする
		$specifications = SpecificationDetailIndividual::where('product_id', $product_id)
			->select([ 'specification_detail_individuals.color_id', 'color_name' ])
			->groupBy()
			->join('colors', 'colors.color_id', '=', 'specification_detail_individuals.color_id')
			->orderByRaw('colors.display_order IS NULL ASC')
			->orderBy('colors.display_order', 'asc')
			->orderBy('colors.color_id', 'asc')
			->get();
		$colors = [];
		foreach( $specifications as $item ) {
			$colors[$item->color_id] = [
				'color_id' => $item->color_id,
				'color_name' => $item->color_name,
			];
		}

		return $colors;
	}

	/**
	 * サイズ情報取得
	 *
	 * 設定されたサイズIDと紐づくサイズ名称を取得する
	 * 重複するサイズIDはまとめる
	 *
	 * @param int $product_id
	 *
	 * @return array
	 */
	public function getSizeData( int $product_id )
	{
		// 中間テーブルを作成する必要性もあまりないのでJOINする
		$specifications = SpecificationDetailIndividual::where('product_id', $product_id)
			->select([ 'specification_detail_individuals.size_id', 'size_type', 'size', 'width_size', 'height_size' ])
			->groupBy()
			->join('sizes', 'sizes.size_id', '=', 'specification_detail_individuals.size_id')
			->orderByRaw('sizes.display_order IS NULL ASC')
			->orderBy('sizes.display_order', 'asc')
			->orderBy('sizes.size_id', 'asc')
			->get();
		$sizes = [];
		foreach( $specifications as $item ) {
			$sizes[$item->size_id] = [
				'size_id' => $item->size_id,
				'size_name' => $this->generateSizeName($item),
				'size_code' => $this->generateSizeCode($item),
			];
		}

		return $sizes;
	}

	/**
	 * 板厚情報取得
	 *
	 * 設定された板厚IDと紐づく板厚を取得する
	 * 重複するIDはまとめる
	 *
	 * @param int $product_id
	 *
	 * @return array
	 */
	public function getPlateThicknesseData( int $product_id )
	{
		$specifications = SpecificationDetailIndividual::where('product_id', $product_id)
			->select([ 'specification_detail_individuals.plate_thickness_id', 'plate_thickness' ])
			->groupBy()
			->join('plate_thicknesses', 'plate_thicknesses.plate_thickness_id', '=', 'specification_detail_individuals.plate_thickness_id')
			->orderByRaw('plate_thicknesses.display_order IS NULL ASC')
			->orderBy('plate_thicknesses.display_order', 'asc')
			->orderBy('plate_thicknesses.plate_thickness_id', 'asc')
			->get();
		$plate_thickness = [];
		foreach( $specifications as $item ) {
			$plate_thickness[$item->plate_thickness_id] = [
				'plate_thickness_id' => $item->plate_thickness_id,
				'plate_thickness' => $item->plate_thickness,
			];
		}

		return $plate_thickness;
	}

	/**
	 * オプション情報取得
	 *
	 * 設定されたオプション情報を取得する
	 * 重複するオプションIDはまとめる
	 *
	 * @param int $product_id
	 *
	 * @return array
	 */
	public function getOptionData( int $product_id )
	{
		// 中間テーブルを作成する必要性もあまりないのでJOINする
		$specifications = SpecificationDetailIndividual::where('product_id', $product_id)
			->select([ 'specification_detail_individuals.product_option_content_id', 'display_name', 'value' ])
			->distinct()
			->join('product_option_contents', 'product_option_contents.product_option_content_id', '=', 'specification_detail_individuals.product_option_content_id')
			->get();
		$options = [];
		foreach( $specifications as $item ) {
			$options[$item->product_option_content_id] = [
				'product_option_content_id' => $item->product_option_content_id,
				'option_name' => $item->display_name,
				'value' => $item->value,
			];
		}

		return $options;
	}

	/**
	 * サイズサービスへ移植すること
	 *
	 * サイズの種別によって名称がことなる
	 *
	 * @param array $size_datum
	 *
	 * @return string
	 */
	public function generateSizeName( $size_datum )
	{
		if( $size_datum->size_type == 1 ) {
			// 数値
			$size_name = $size_datum->width_size . " × " . $size_datum->height_size;
		} else {
			// 文字列
			$size_name = $size_datum->size;
		}

		return $size_name;
	}

	/**
	 * サイズサービスへ移植すること
	 *
	 * サイズの種別によって名称がことなる
	 *
	 * @param array $size_datum
	 *
	 * @return string
	 */
	public function generateSizeCode( $size_datum )
	{
		if( $size_datum->size_type == 1 ) {
			// 数値
			$size_name = $size_datum->width_size . "x" . $size_datum->height_size;
		} else {
			// 文字列
			$size_name = $size_datum->size;
		}

		return $size_name;
	}

	/**
	 * カラーリストを取得
	 *
	 * @param int $product_id
	 *
	 * @return Color[]|null
	 */
	public function getColorList( int $product_id )
	{
		// １件しかないはずなのでfirstで取得する
		$product_setting = ProductSetting::where('product_id', $product_id)->first();
		if( $product_setting == null ) {
			return null;
		}
		if( $product_setting->is_color_valid != 1 ) {
			return null;
		}

		return Color::where('color_group_id', $product_setting->color_group_id)->get();
	}

	/**
	 * サイズリストを取得
	 *
	 * @param int $product_id
	 *
	 * @return array|null
	 */
	public function getSizeList( int $product_id )
	{
		// １件しかないはずなのでfirstで取得する
		$product_setting = ProductSetting::where('product_id', $product_id)->first();
		if( $product_setting == null ) {
			return null;
		}
		if( $product_setting->is_size_valid != 1 ) {
			return null;
		}

		// サイズグループ、サイズ指定(サイズ種別)でフィルタリングするが、自由入力の場合は種別関係なく取得
		$wheres = [];
		array_push($wheres, [ 'size_group_id', $product_setting->size_group_id ]);
		if( $product_setting->specify_size != SizeType::SIZE_OF_FREE ) {
			array_push($wheres, [ 'size_type', $product_setting->specify_size ]);
		}
		$sizes = Size::where($wheres)->get();

		// 表示用に変換
		$displays = [];
		foreach( $sizes as $size ) {
			if( $size->size_type == 1 ) {
				// 数値
				$value = $size->width_size . " × " . $size->height_size;
			} else {
				// 文字列
				$value = $size->size;
			}
			$displays[$size->size_id] = $value;
		}

		return $displays;
	}

	/**
	 * 板厚リストを取得
	 *
	 * @param int $product_id
	 *
	 * @return PlateThickness[]|\Illuminate\Database\Eloquent\Collection|null
	 */
	public function getPlateThicknessList( int $product_id )
	{
		// １件しかないはずなのでfirstで取得する
		$product_setting = ProductSetting::where('product_id', $product_id)->first();
		if( $product_setting == null ) {
			return null;
		}
		if( $product_setting->is_plate_thickness_valid != 1 ) {
			return null;
		}

		return PlateThickness::all();
	}

	/**
	 * オプションリストを取得
	 *
	 * @param int $product_id
	 *
	 * @return ProductOptionContent[]|\Illuminate\Database\Eloquent\Collection|null
	 */
	public function getOptionList( int $product_id )
	{
		// １件しかないはずなのでfirstで取得する
		$product_setting = ProductSetting::where('product_id', $product_id)->first();
		if( $product_setting == null ) {
			return null;
		}
		if( $product_setting->is_product_option_valid != 1 ) {
			return null;
		}
		// 1件しかないはずなのでfirstで取得する
		$product_option = ProductOption::where('product_id', $product_id)->first();
		if( $product_option == null ) {
			return null;
		}

		return ProductOptionContent::where('product_option_id', $product_option->product_option_id)->get();
	}
}