<?php

namespace App\Services;

use App\Models\ProductsProductFeatureTag;
use App\Models\RelatedProduct;
use App\Models\SemiOrderHtmlContent;
use App\ValueObject\SizeType;
use Faker\Provider\Image;
use Illuminate\Support\Facades\DB;
use Log;
use SplFileObject;
use Illuminate\Database\QueryException;
use App\Models\Product;
use App\Models\ProductSetting;
use App\Models\ProductsProductHtmlPart;

use App\ValueObject\ProductType;

/**
 * 商品
 */
class ProductService
{
	const DELIVERIES_PATH = '/var/www/html/public/cgibin/listview/up/zaiko6.csv';

	/**
	 * 商品検索
	 *
	 * @param int $product_id
	 *
	 * @return array
	 */
	public function find( int $product_id )
	{
		return Product::find($product_id);
	}

	/**
	 * 商品一覧検索
	 *
	 * @param string $product_name
	 * @param string $product_code
	 * @param array $product_category_id
	 * @param string $product_type_code
	 *
	 * @return Collection
	 */
	public function findList( int $paging_count, ?string $product_name = null, ?string $product_code = null, array $product_category_ids = [], ?string $product_type_code = null )
	{
		// パラメーターがからの場合は全件検索する
		// 一つでもあれば条件検索
		$wheres = [];
		array_push($wheres, [ 'is_display', Product::IS_DISPLAY_TRUE ]);
		if( !is_null($product_name) ) {
			array_push($wheres, [ 'product_name', 'LIKE', "%{$product_name}%" ]);
		}
		if( !is_null($product_code) ) {
			array_push($wheres, [ 'product_code', 'LIKE', "%{$product_code}%" ]);
		}
		if( !is_null($product_type_code) ) {
			array_push($wheres, [ 'product_type_code', $product_type_code ]);
		}

		if( !empty($product_category_ids) ) {
			$products = Product::where(
				$wheres
			)->whereIn('product_category_id', $product_category_ids)
				->orderByRaw('display_order IS NULL ASC')
				->orderBy('display_order', 'asc')
				->orderBy('created_at', 'desc')
				->paginate($paging_count);
		} else {
			$products = Product::where(
				$wheres
			)
				->orderByRaw('display_order IS NULL ASC')
				->orderBy('display_order', 'asc')
				->orderBy('created_at', 'desc')
				->paginate($paging_count);
		}

		return $products;
	}

    /**
     * 商品フリーワード検索
     * @param int $paging_count
     * @param array|null $free_words
     * @param array $product_category_ids
     * @return mixed
     */
    public function findLitByFreeWord(
        int $paging_count,
        array $free_words = [],
        array $product_category_ids = []
    ) {

        if (!empty($product_category_ids)) {
            if (empty($free_words)) {
                $products =
                    Product::whereIn('products.product_category_id', $product_category_ids)
                        ->where('is_display', Product::IS_DISPLAY_TRUE)
                        ->select('products.*')
                        ->leftJoin('specification_detail_individuals', 'specification_detail_individuals.product_id',
                            '=', 'products.product_id')
                        ->leftJoin('sizes', 'sizes.size_id', '=', 'specification_detail_individuals.size_id')
                        ->orderByRaw('products.display_order IS NULL ASC')
                        ->orderBy('products.display_order', 'asc')
                        ->orderBy('products.created_at', 'desc')
                        ->groupBy('products.product_id')
                        ->paginate($paging_count);
            } else {
                // カテゴリー内でのフリーワード検索とする
                // カテゴリー and (フリーワード or ....) の条件で検索する
                $products =
                    Product::whereIn('products.product_category_id', $product_category_ids)
                        ->where('is_display', Product::IS_DISPLAY_TRUE)
                        ->where(function ($query) use ($free_words) {
                            foreach ($free_words as $free_word) {
                                $query->where('products.delivery_supplementations', 'LIKE', "%{$free_word}%");
                            }
                        })
                        ->select('products.*')
                        ->leftJoin('specification_detail_individuals', 'specification_detail_individuals.product_id',
                            '=', 'products.product_id')
                        ->leftJoin('sizes', 'sizes.size_id', '=', 'specification_detail_individuals.size_id')
                        ->groupBy('products.product_id')
                        ->orderByRaw('products.display_order IS NULL ASC')
                        ->orderBy('products.display_order', 'asc')
                        ->orderBy('products.created_at', 'desc')
                        ->paginate($paging_count);
            }
        } else {
            $products =
                Product::where('is_display', Product::IS_DISPLAY_TRUE)
                    ->where(function ($query) use ($free_words) {
                        foreach ($free_words as $free_word) {
                            $query->where('products.delivery_supplementations', 'LIKE', "%{$free_word}%");
                        }
                    })
                    ->select('products.*')
                        ->leftJoin('specification_detail_individuals', 'specification_detail_individuals.product_id',
                            '=', 'products.product_id')
                        ->leftJoin('sizes', 'sizes.size_id', '=', 'specification_detail_individuals.size_id')
                    ->groupBy('products.product_id')
                    ->orderByRaw('products.display_order IS NULL ASC')
                    ->orderBy('products.display_order', 'asc')
                    ->orderBy('products.created_at', 'desc')
                    ->paginate($paging_count);
        }
        return $products;
    }

	/**
	 * 全件検索
	 *
	 * @return Product[]|\Illuminate\Database\Eloquent\Collection
	 */
	public function findAll()
	{
		return Product::all();
	}

	/**
	 * 出荷目安を生成する
	 *
	 * var/www/html/public/cgibin/listview/up/zaiko6.csvからリストを生成する
	 *
	 * @return array
	 */
	public function generateDeliveries()
	{
		$file = new SplFileObject(config('acryya.deliveries_path'));
		$file->setFlags(SplFileObject::READ_CSV);
		$deliveries = [];
		foreach( $file as $line ) {
			if( !is_null($line[0]) ) {
				// SplFileObjectだと読み込み時にエンコードできないので、１行単位でエンコードする
				$encode_line = mb_convert_encoding($line, 'UTF-8', 'SJIS');
				$record = array(
					$encode_line[3] => $encode_line[4],
				);
				$deliveries = array_merge($deliveries, $record);
			}
		}

		return $deliveries;
	}

	/**
	 * 出荷目安日付リストを生成する
	 *
	 * var/www/html/public/cgibin/listview/up/zaiko6.csvからリストを生成する
	 *
	 * @return array
	 */
	public function generateDeliveryDates()
	{
		$file = new SplFileObject(config('acryya.deliveries_path'));
		$file->setFlags(SplFileObject::READ_CSV);
		$delivery_dates = [];
		foreach( $file as $line ) {
			if( !is_null($line[0]) ) {
				// SplFileObjectだと読み込み時にエンコードできないので、１行単位でエンコードする
				$encode_line = mb_convert_encoding($line, 'UTF-8', 'SJIS');
				$record = array(
					$encode_line[3] => $encode_line[5],
				);
				$delivery_dates = $delivery_dates + $record;
			}
		}

		return $delivery_dates;
	}

    /**
     * 在庫リストを生成する
     *
     * var/www/html/public/cgibin/listview/up/zaiko6.csvからリストを生成する
     *
     * @return array
     */
    public function generateStocks()
    {
        $file = new SplFileObject(config('acryya.deliveries_path'));
        $file->setFlags(SplFileObject::READ_CSV);
        $stocks = [];
        foreach( $file as $line ) {
            if( !is_null($line[0]) ) {
                // SplFileObjectだと読み込み時にエンコードできないので、１行単位でエンコードする
                $encode_line = mb_convert_encoding($line, 'UTF-8', 'SJIS');
                $record = array(
                    $encode_line[3] => ( !empty($encode_line[7]) ) ? $encode_line[7] : 0 ,
                );
                $stocks = $stocks + $record;
            }
        }

        return $stocks;
    }

	/**
	 * 商品HTMLパーツ選択状態IDリスト作成
	 *
	 * @param Product $product
	 *
	 * @return array
	 */
	public function selectedHtmlPartList( Product $product )
	{
		$tests = $product->productHtmlPart()->where('product_id', $product->product_id)->get();
		$selected_id_list = [];
		foreach( $tests as $part ) {
			$selected_id_list[$part['product_html_part_type_id']] = $part;
		}

		return $selected_id_list;
	}

	/**
	 * 商品詳細初期値設定
	 *
	 * @param Product $product
	 *
	 * @return array
	 */
	public function setInitValue( Product $product )
	{
		// カート商品名
		if( empty($product->product_name_displayed_cart) ) {
			$product->product_name_displayed_cart = $product->product_name;
		}

		if( $product->product_type_code === Product::PRODUCT_TYPE_CODE_STANDARD ) {
			// 表示項目名 初期値設定
			if( empty($product->productSetting->color_display_name) ) {
				$product->productSetting->color_display_name = 'カラー';
			}
			if( empty($product->productSetting->specification_size_numerical_display) ) {
				$product->productSetting->specification_size_numerical_display = 'サイズ';
			}
			if( empty($product->productSetting->specification_size_string_display) ) {
				$product->productSetting->specification_size_string_display = 'サイズ';
			}
			if( empty($product->productSetting->free_input_width_display) ) {
				$product->productSetting->free_input_width_display = '幅';
			}
			if( empty($product->productSetting->free_input_height_display) ) {
				$product->productSetting->free_input_height_display = '縦';
			}
			if( empty($product->productSetting->free_input_depth_display) ) {
				$product->productSetting->free_input_depth_display = '奥';
			}
			if( empty($product->productSetting->plate_thickness_display) ) {
				$product->productSetting->plate_thickness_display = '板厚';
			}

			// HMTLタグID 初期値設定
            if( empty($product->productSetting->form_html_tag_id) ) {
                $product->productSetting->form_html_tag_id = 'form1';
            }
			if( empty($product->productSetting->color_html_tag_id) ) {
				$product->productSetting->color_html_tag_id = 'color';
			}
			if( empty($product->productSetting->specification_size_numerical_html_tag_id) ) {
				$product->productSetting->specification_size_numerical_html_tag_id = 'size_s';
			}
			if( empty($product->productSetting->specification_size_string_html_tag_id) ) {
				$product->productSetting->specification_size_string_html_tag_id = 'size_s';
			}
			if( empty($product->productSetting->plate_thickness_html_tag_id) ) {
				$product->productSetting->plate_thickness_html_tag_id = 'thickness';
			}
			if( empty($product->productSetting->destination_html_tag_id) ) {
				$product->productSetting->destination_html_tag_id = 'souhu_info';
			}
			if( empty($product->productSetting->quantity_html_tag_id) ) {
				$product->productSetting->quantity_html_tag_id = 'suryo';
			}
			if( empty($product->productSetting->free_input_width_html_tag_id) ) {
				$product->productSetting->free_input_width_html_tag_id = 'width';
			}
			if( empty($product->productSetting->free_input_height_html_tag_id) ) {
				$product->productSetting->free_input_height_html_tag_id = 'height';
			}

			// オプション 初期値設定
			if( isset($product->productOption) ) {
				if( empty($product->productOption->option_name) ) {
					$product->productOption->option_name = 'オプション';
				}
				if( empty($product->productOption->html_tag_name) ) {
					$product->productOption->html_tag_name = 'option';
				}
				if( empty($product->productOption->html_tag_id) ) {
					$product->productOption->html_tag_id = 'option';
				}
			}
		}
	}


	public function getSpecificationData( $product_id, $color_id, $size_id, $thickness_id, $option_id )
	{
		// 商品に紐づく全規格を取得
		if( !isset($this->product_specifications) ) {
			$specification_detail_service = new SpecificationDetailService();
			$this->product_specifications = $specification_detail_service->findByProductId($product_id);
		}

		// 対象の規格が存在するか判別
		if( !empty($this->product_specifications) ) {
			foreach( $this->product_specifications as $specification ) {
				if( $color_id != 'ignore' && $color_id != $specification->color_id && !is_null($color_id) ) {
					continue;
				}

				if( $size_id != 'ignore' && $size_id != $specification->size_id && !is_null($size_id) ) {
					continue;
				}

				if( $thickness_id != 'ignore' && $thickness_id != $specification->plate_thickness_id && !is_null($thickness_id) ) {
					continue;
				}

				if( $option_id != 'ignore' && $option_id != $specification->product_option_content_id && !is_null($option_id) ) {
					continue;
				}

				return $specification;
			}
		}

		return [];
	}

	public function convertHtmlVariable( $product, $html_parts )
	{
		if( empty($html_parts) ) {
			return;
		}

		if( !empty($product->product_code) ) {
			$product_code = $product->product_code;
		}
		foreach( $html_parts as &$html_part ) {
			// 変数変換
			$convert_html_part = (string) $html_part->html_part;
			while( preg_match("/\{%(.*)\%}/U", $convert_html_part, $match) ) {
				if( isset(${$match[1]}) ) {
					$convert_text = ${$match[1]};
				} else {
					$convert_text = '';
				}
				$convert_html_part = preg_replace("/{$match[0]}/", $convert_text, $convert_html_part);
			}
			$html_part->html_part = $convert_html_part;
		}

		return $html_parts;
	}

	public function convertHtmlVariableSemiOrder( $product, $html_parts, $delivery_dates, $parts_settings )
	{
		if( empty($product->semiOrderHtmlContent->html) ) {
			return;
		}
		$semi_order_html = (string) $product->semiOrderHtmlContent->html;
		$product_feature = ( isset($html_parts[HtmlPartService::PART_TYPE_ID_FEATURE]) ) ? $html_parts[HtmlPartService::PART_TYPE_ID_FEATURE]->html_part : null ;
		$revision_history = $product->history;
		$product_title = view('products.components.product_title', compact('product'))->render();
		$relation_link = view('products.components.relation_link', compact('product','html_parts','parts_settings'))->render();
		$delivery_schedule = view('products.components.delivery_schedule', compact('product','delivery_dates'))->render();
		$enpou_parts = view('products.components.enpou_parts', compact('product'))->render();
		// 変数変換
		while( preg_match("/\{%(.*)\%}/U", $semi_order_html, $match) ) {
			if( isset(${$match[1]}) ) {
				$convert_text = ${$match[1]};
			} else {
				$convert_text = '';
			}
			$semi_order_html = preg_replace("/{$match[0]}/", $convert_text, $semi_order_html);
		}

		return $semi_order_html;
	}

}