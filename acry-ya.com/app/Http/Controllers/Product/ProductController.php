<?php

namespace App\Http\Controllers\Product;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Services\ColorService;
use App\Services\DiscountRateItemService;
use App\Services\DiscountRateService;
use App\Services\HtmlPartService;
use App\Services\ImageService;
use App\Services\ProductCategoryService;
use App\Services\ProductFeatureTagService;
use App\Services\ProductService;
use App\Services\RepairPartGroupService;
use App\Services\SizeService;
use App\Services\SpecificationDetailService;
use App\Services\TaxService;
use App\ValueObject\SizeType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Review;


class ProductController extends Controller
{
    /**
     * ProductController constructor.
     *
     * @param ProductService $product_service
     * @param ProductCategoryService $product_category_service
     * @param ProductFeatureTagService $product_feature_tag_service
     * @param HtmlPartService $html_part_service
     * @param DiscountRateService $discount_rate_service
     * @param ColorService $color_service
     * @param SizeService $size_service
     */
    public function __construct(
        ProductService           $product_service,
        ProductCategoryService   $product_category_service,
        ProductFeatureTagService $product_feature_tag_service,
        HtmlPartService          $html_part_service,
        DiscountRateService      $discount_rate_service,
        DiscountRateItemService  $discount_rate_item_service,
        ColorService             $color_service,
        SizeService              $size_service,
        ImageService             $image_service,
        TaxService               $tax_service
    )
    {
        $this->product_service = $product_service;
        $this->product_category_service = $product_category_service;
        $this->product_feature_tag_service = $product_feature_tag_service;
        $this->html_part_service = $html_part_service;
        $this->discount_rate_service = $discount_rate_service;
        $this->discount_rate_item_service = $discount_rate_item_service;
        $this->color_service = $color_service;
        $this->size_service = $size_service;
        $this->image_service = $image_service;
        $this->tax_service = $tax_service;
    }

    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function detail(Request $request)
    {
        if (empty($request->id) || !is_numeric($request->id)) {
            abort('404');
        }
        $product_id = $request->id;
        $product = $this->product_service->find($product_id);
        if (empty($product) || $product->is_display == 0) {
            abort('404');
        }

        $current_uri = substr($_SERVER['REQUEST_URI'], 0, strcspn($_SERVER['REQUEST_URI'], '?'));
        if (!preg_match("/\/$/", $current_uri)) {
            $redirect_url = url()->current();
            if (!empty($_SERVER['QUERY_STRING'])) {
                $redirect_url .= '?' . $_SERVER['QUERY_STRING'];
            }
            return redirect($redirect_url);
        }


        $product_categories = $this->product_category_service->findAll();
        $product_feature_tags = $this->product_feature_tag_service->findAll();
        $deliveries = $this->product_service->generateDeliveries();
        $size_groups_of_number = $this->size_service->generateSizeGroupListOfNumberType();
        $size_groups_of_string = $this->size_service->generateSizeGroupListOfStringType();

        $html_parts = $this->product_service->selectedHtmlPartList($product);

        // 出荷目安
        $delivery_dates = $this->product_service->generateDeliveryDates();

        // 在庫数
        $stocks = $this->product_service->generateStocks();

        // 補修部品グループ取得
        $repair_part_group_service = new RepairPartGroupService();
        $parts_settings = $repair_part_group_service->findProductRepairPartSetting($product_id);

        if ($product->product_type_code === Product::PRODUCT_TYPE_CODE_SEMI_ORDER) {
            // セミオーダーの処理

            // タイトル作成
            $title = $product->product_name;

            // 変数変換
            $html_parts = $this->product_service->convertHtmlVariable($product, $html_parts);
            $semi_order_html = $this->product_service->convertHtmlVariableSemiOrder($product, $html_parts, $delivery_dates, $parts_settings);
        } else {
            // 標準商品の処理

            $color_id = $request->color;
            $size_id = $request->size;
            $thickness_id = $request->thickness;
            $option_id = $request->option;

            //$related_products = $this->product_service->getRelatedProduct($product);

            // 各規格別のリストを取得
            $specification_detail_service = new SpecificationDetailService();
            $product_colors = $specification_detail_service->getColorData($product_id);
            $product_sizes = $specification_detail_service->getSizeData($product_id);
            $product_plate_thicknesses = $specification_detail_service->getPlateThicknesseData($product_id);
            $product_options = $specification_detail_service->getOptionData($product_id);

            $colors = [];
            $sizes = [];
            $plate_thicknesses = [];
            $options = [];
            $other_colors = [];
            $other_sizes = [];
            $other_plate_thicknesses = [];
            $other_options = [];
            // 指定が無い場合はデフォルト設定にリダイレクト
            if (empty($color_id) && empty($size_id) && empty($thickness_id) && empty($option_id)) {
                $default_specification = $specification_detail_service->findBySpecificationDefault($product_id);
                if (!empty($default_specification)) {
                    $redirect_param = [];
                    if (!empty($product->productSetting->is_color_valid)) {
                        $redirect_param[] = 'color=' . $default_specification->color_id;
                    }
                    if (!empty($product->productSetting->is_size_valid) && $product->productSetting->specify_size !== SizeType::SIZE_OF_FREE) {
                        $redirect_param[] = 'size=' . $default_specification->size_id;
                    }
                    if (!empty($product->productSetting->is_plate_thickness_valid)) {
                        $redirect_param[] = 'thickness=' . $default_specification->plate_thickness_id;
                    }
                    if (!empty($product->productSetting->is_product_option_valid) && !empty($product_options)) {
                        $redirect_param[] = 'option=' . $default_specification->product_option_content_id;
                    }
                    if (!empty($redirect_param)) {
                        $redirect_param_str = '?' . implode('&', $redirect_param);

                        return redirect(route('products.detail', ['id' => $product_id]) . $redirect_param_str);
                    }
                }
            } else {
                $is_first_specification = true;

                // 規格情報設定 カラー
                if (!empty($product_colors)) {
                    foreach ($product_colors as $key => $data) {
                        $tmp_specification_data = $data;
                        // 規格存在チェック
                        $specification_data = $this->product_service->getSpecificationData($product_id, $data['color_id'], 'ignore', 'ignore', 'ignore');
                        if (!empty($specification_data) || $is_first_specification) {
                            $tmp_specification_data['class_available'] = 'available';
                        } else {
                            $tmp_specification_data['class_available'] = 'unavailable';
                        }
                        $tmp_specification_data['selected'] = ($data['color_id'] == $color_id) ? 'selected' : '';
                        $colors[$key] = $tmp_specification_data;
                    }
                    $other_colors = $colors;
                    if (isset($other_colors[$color_id])) unset($other_colors[$color_id]);
                    $is_first_specification = false;
                }

                // 規格情報設定 板厚
                if (!empty($product_plate_thicknesses)) {
                    foreach ($product_plate_thicknesses as $key => $data) {
                        $tmp_specification_data = $data;
                        // 規格存在チェック
                        $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, 'ignore', $data['plate_thickness_id'], 'ignore');
                        if (!empty($specification_data) || $is_first_specification) {
                            $tmp_specification_data['class_available'] = 'available';
                        } else {
                            $tmp_specification_data['class_available'] = 'unavailable';
                        }
                        $tmp_specification_data['selected'] = ($data['plate_thickness_id'] == $thickness_id) ? 'selected' : '';
                        $plate_thicknesses[$key] = $tmp_specification_data;
                    }
                    $other_plate_thicknesses = $plate_thicknesses;
                    if (isset($other_plate_thicknesses[$thickness_id])) unset($other_plate_thicknesses[$thickness_id]);
                    $is_first_specification = false;
                }

                // 規格情報設定 サイズ
                if (!empty($product_sizes)) {
                    foreach ($product_sizes as $key => $data) {
                        $tmp_specification_data = $data;
                        // 規格存在チェック
                        $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, $data['size_id'], $thickness_id, 'ignore');
                        if (!empty($specification_data) || $is_first_specification) {
                            $tmp_specification_data['class_available'] = 'available';
                        } else {
                            $tmp_specification_data['class_available'] = 'unavailable';
                        }
                        $tmp_specification_data['selected'] = ($data['size_id'] == $size_id) ? 'selected' : '';
                        $sizes[$key] = $tmp_specification_data;
                    }
                    $other_sizes = $sizes;
                    if (isset($other_sizes[$size_id])) unset($other_sizes[$size_id]);
                    $is_first_specification = false;
                }

                // 規格情報設定 オプション
                if (!empty($product_options)) {
                    foreach ($product_options as $key => $data) {
                        $tmp_specification_data = $data;
                        // 規格存在チェック
                        $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, $size_id, $thickness_id, $data['product_option_content_id']);
                        if (!empty($specification_data) || $is_first_specification) {
                            $tmp_specification_data['class_available'] = 'available';
                        } else {
                            $tmp_specification_data['class_available'] = 'unavailable';
                        }
                        $tmp_specification_data['selected'] = ($data['product_option_content_id'] == $option_id) ? 'selected' : '';
                        $options[$key] = $tmp_specification_data;
                    }
                    $other_options = $options;
                    if (isset($other_options[$option_id])) unset($other_options[$option_id]);
                    $is_first_specification = false;
                }

                // 規格毎のデータを取得
                $specification = $specification_detail_service->findBySpecificationData($product_id, $color_id, $size_id, $thickness_id, $option_id);
                if (!empty($specification)) {
                    if (!empty($specification->product_code)) $product->product_code = $specification->product_code;
                    if (!empty($specification->price)) {
                        $tax = $this->tax_service->findNewRecord();
                        $product->price = $specification->price;
                        $product->tax_price = round($product->price * (100 + $tax->tax) / 100);
                    }
                    if (!empty($specification->product_name_displayed_cart)) $product->product_name_displayed_cart = $specification->product_name_displayed_cart;
                    if (!empty($specification->delivery_schedule_id)) $product->delivery_schedule_id = $specification->delivery_schedule_id;
                    $product->productSetting->is_destination_valid = $specification->is_destination_valid;
                    $product->productSetting->is_delivery_charge_valid = $specification->is_delivery_charge_valid;
                    $product->productSetting->is_large_delivery_valid = $specification->is_large_delivery_valid;
                    if (count($specification->productFeatureTag) > 0) $product->productFeatureTag = $specification->productFeatureTag;
                } else {

                    // 規格が存在しない場合のリダイレクト処理
                    if (!empty($product->productSetting->is_product_option_valid) && !empty($product_options)) {
                        foreach ($product_options as $data) {
                            // 規格存在チェック
                            $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, $size_id, $thickness_id, $data['product_option_content_id']);
                            if (!empty($specification_data)) {
                                $redirect_specification = [
                                    'color_id' => $specification_data['color_id'],
                                    'size_id' => $specification_data['size_id'],
                                    'thickness_id' => $specification_data['plate_thickness_id'],
                                    'option_id' => $specification_data['product_option_content_id']
                                ];
                                break;
                            }
                        }
                    }

                    if (empty($redirect_specification) && !empty($product->productSetting->is_size_valid) && $product->productSetting->specify_size !== SizeType::SIZE_OF_FREE && !empty($product_sizes)) {
                        foreach ($product_sizes as $data) {
                            // 規格存在チェック
                            $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, $data['size_id'], $thickness_id, 'ignore');
                            if (!empty($specification_data)) {
                                $redirect_specification = [
                                    'color_id' => $specification_data['color_id'],
                                    'size_id' => $specification_data['size_id'],
                                    'thickness_id' => $specification_data['plate_thickness_id'],
                                    'option_id' => $specification_data['product_option_content_id']
                                ];
                                break;
                            }
                        }
                    }

                    if (empty($redirect_specification) && !empty($product->productSetting->is_plate_thickness_valid) && !empty($product_plate_thicknesses)) {
                        foreach ($product_plate_thicknesses as $data) {
                            // 規格存在チェック
                            $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, 'ignore', $data['plate_thickness_id'], 'ignore');
                            if (!empty($specification_data)) {
                                $redirect_specification = [
                                    'color_id' => $specification_data['color_id'],
                                    'size_id' => $specification_data['size_id'],
                                    'thickness_id' => $specification_data['plate_thickness_id'],
                                    'option_id' => $specification_data['product_option_content_id']
                                ];
                                break;
                            }
                        }
                    }

                    if (empty($redirect_specification) && !empty($product->productSetting->is_color_valid) && !empty($product_colors)) {
                        foreach ($product_colors as $data) {
                            // 規格存在チェック
                            $specification_data = $this->product_service->getSpecificationData($product_id, $color_id, 'ignore', 'ignore', 'ignore');
                            if (!empty($specification_data)) {
                                $redirect_specification = [
                                    'color_id' => $specification_data['color_id'],
                                    'size_id' => $specification_data['size_id'],
                                    'thickness_id' => $specification_data['plate_thickness_id'],
                                    'option_id' => $specification_data['product_option_content_id']
                                ];
                                break;
                            }
                        }
                    }

                    if (!empty($redirect_specification)) {
                        $redirect_param = [];
                        if (!empty($product->productSetting->is_color_valid)) {
                            $redirect_param[] = 'color=' . $redirect_specification['color_id'];
                        }
                        if (!empty($product->productSetting->is_size_valid) && $product->productSetting->specify_size !== SizeType::SIZE_OF_FREE) {
                            $redirect_param[] = 'size=' . $redirect_specification['size_id'];
                        }
                        if (!empty($product->productSetting->is_plate_thickness_valid)) {
                            $redirect_param[] = 'thickness=' . $redirect_specification['thickness_id'];
                        }
                        if (!empty($product->productSetting->is_product_option_valid) && !empty($product_options)) {
                            $redirect_param[] = 'option=' . $redirect_specification['option_id'];
                        }
                        if (!empty($redirect_param)) {
                            $redirect_param_str = '?' . implode('&', $redirect_param);

                            return redirect(route('products.detail', ['id' => $product_id]) . $redirect_param_str);
                        }
                    } else {
                        abort('404');
                    }
                }
            }

            // 画像
            if (!empty($product->productSetting->picture_priority)) {
                if ($product->productSetting->picture_priority === 1) {
                    $color_image_data = $this->image_service->getColorImage($request->id);
                    $color_image = null;
                    foreach ($color_image_data as $img) {
                        if ($img['color_id'] != $color_id) continue;
                        $color_image = $img['image_data'];
                    }
                    $target_image = $color_image;
                }
                if ($product->productSetting->picture_priority === 2) {
                    $size_image_data = $this->image_service->getSizeImage($request->id);
                    $size_image = null;
                    foreach ($size_image_data as $img) {
                        if ($img['size_id'] != $size_id) continue;
                        $size_image = $img['image_data'];
                    }
                    $target_image = $size_image;
                }
                if ($product->productSetting->picture_priority === 3) {
                    $option_image_data = $this->image_service->getOptionImage($request->id);
                    $option_image = null;
                    foreach ($option_image_data as $img) {
                        if ($img['product_option_content_id'] != $option_id) continue;
                        $option_image = $img['image_data'];
                    }
                    $target_image = $option_image;
                }

                $pictures = [];
                for ($i = 0; $i < 7; $i++) {
                    $picture = null;
                    if (!empty($product->picture)) {
                        foreach ($product->picture as $img) {
                            if ($img->pivot["display_order"] == $i) {
                                $picture = $img;
                                break;
                            }
                        }
                    }
                    if (!empty($target_image)) {
                        foreach ($target_image as $img) {
                            if ($img->pivot["display_order"] == $i) {
                                $picture = $img;
                                break;
                            }
                        }
                    }
                    if (!empty($picture)) {
                        $pictures[] = $picture;
                    }
                }
                $product->picture = $pictures;
            }

            // タイトル作成
            $title = $product->product_name;
            if (!empty($colors[$color_id])) $title .= ' ' . $colors[$color_id]['color_name'];
            if (!empty($plate_thicknesses[$thickness_id])) $title .= ' ' . $plate_thicknesses[$thickness_id]['plate_thickness'];
            if (!empty($sizes[$size_id])) $title .= ' ' . $sizes[$size_id]['size_name'];
            if (!empty($options[$option_id])) $title .= ' ' . $options[$option_id]['option_name'];

            // 変数変換
            $html_parts = $this->product_service->convertHtmlVariable($product, $html_parts);
        }

        // お客様の声（PC）
        if (!empty($product->customer_feedback_pc_word)) {
            $product->customer_feedback_url_pc = '/cgibin/pickup/datapickup.php?a=2&c=tx12&d=free&e=QA1';
            $product->customer_feedback_url_pc .= '&f=' . $product->customer_feedback_pc_word;
            if (!empty($product->number_of_customer_feedback_pc_word)) {
                $product->customer_feedback_url_pc .= '&h=' . $product->number_of_customer_feedback_pc_word;
            }
        }

        // お客様の声（SP）
        if (!empty($product->customer_feedback_sp_word)) {
            $product->customer_feedback_url_sp = '/cgibin/pickup/datapickup.php?a=2&c=tx12&d=free&e=QA1';
            $product->customer_feedback_url_sp .= '&f=' . $product->customer_feedback_sp_word;
            if (!empty($product->number_of_customer_feedback_sp_word)) {
                $product->customer_feedback_url_sp .= '&h=' . $product->number_of_customer_feedback_sp_word;
            }
        }

        //初期レビュー
        $reviews = Review::pageInfoList($product->customer_feedback_pc_word);
        $reviews['firstPage'] = $this->attachGood($reviews['firstPage']);


        // 初期値設定
        $this->product_service->setInitValue($product);

        // タグ設定
        // 関連商品がタグから表示の場合

        if ($product->related_product_option === Product::RELATED_PRODUCT_OPTION_TAG) {
            $tags = [];
            foreach ($product->productTag as $tag) {
                $tags[] = $tag->tag_id;
            }
            $product->relatedProduct = Product::select('products.*')->join('products_tags', 'products.product_id', '=', 'products_tags.product_id')
                ->where('products.product_id', '<>', $product->product_id)
                ->whereIn('products_tags.tag_id', $tags)->distinct()->get();


        }
        //関連商品の評価を取得
        $relatedReview = [];
        foreach ($product->relatedProduct as $product1) {
            $relatedReview[$product1->customer_feedback_pc_word] =
                Review::pageInfoList($product1->customer_feedback_pc_word);
        }

        // 遷移先のパスをcookieに保存
        setcookie('product_id', $product_id, 0, "/");

        // 遷移元と遷移先のパスが異なる場合、oookieを削除
        if (isset($_COOKIE["product_id"]) && $product_id != $_COOKIE["product_id"]) {
            setcookie('souhu_info', '');
            setcookie('width', '');
            setcookie('height', '');
            setcookie('suu', '');
            $cookie = [];
        } else {
            $cookie = $_COOKIE;
        }


        // 現在のページのURL取得
        $current_url = url('/') . $_SERVER["REQUEST_URI"];

        ///// カート内復元機能
        $reproductionSelectors = null;
        if (!empty($request->input('reproductionSelectors'))) {

            $reproductionSelectors = $request->input('reproductionSelectors');
            $reproductionSelectors = str_replace('.', '', $reproductionSelectors);
            $reproductionSelectors = str_replace('/', '', $reproductionSelectors);
            $file = __DIR__ . '/../../../../public/cgibin/rebuild/datas/' . $reproductionSelectors . '.cgi';
            if (file_exists($file)) {
                $reproductionSelectors = file_get_contents($file);
                unlink($file);
            } else {
                $reproductionSelectors = null;
            }
        }

        ///// UvPost
        $UvPost = $this->getPrint( $request );


        ///// view処理
        if ($product->product_type_code === Product::PRODUCT_TYPE_CODE_SEMI_ORDER) {
            return view('products.semi_order')
                ->with('request', $request)
                ->with('title', isset($title) ? $title : null)
                ->with('semi_order_html', $semi_order_html)
                ->with('product', isset($product) ? $product : null)
                ->with('product_categories', $product_categories)
                ->with('product_feature_tags', $product_feature_tags)
                ->with('deliveries', $deliveries)
                ->with('html_parts', $html_parts)
                ->with('related_categories', $product_categories)
                ->with('delivery_dates', $delivery_dates)
                ->with('parts_settings', $parts_settings)
                ->with('stocks', $stocks)
                ->with('cookie', $cookie)
                ->with('reviews', $reviews)
                ->with('relatedReview', $relatedReview)
                ->with('UvPost', $UvPost )
                ->with('reproductionSelectorsSend', $reproductionSelectors);
        } else {
            return view('products.detail')
                ->with('request', $request)
                ->with('current_url', $current_url)
                ->with('title', isset($title) ? $title : null)
                ->with('product', isset($product) ? $product : null)
                ->with('product_categories', $product_categories)
                ->with('product_feature_tags', $product_feature_tags)
                ->with('deliveries', $deliveries)
                ->with('size_groups_of_number', $size_groups_of_number)
                ->with('size_groups_of_string', $size_groups_of_string)
                ->with('html_parts', $html_parts)
                ->with('related_categories', $product_categories)
                ->with('colors', $colors)
                ->with('sizes', $sizes)
                ->with('plate_thicknesses', $plate_thicknesses)
                ->with('options', $options)
                ->with('other_colors', $other_colors)
                ->with('other_sizes', $other_sizes)
                ->with('other_plate_thicknesses', $other_plate_thicknesses)
                ->with('other_options', $other_options)
                ->with('delivery_dates', $delivery_dates)
                ->with('parts_settings', $parts_settings)
                ->with('stocks', $stocks)
                ->with('cookie', $cookie)
                ->with('reviews', $reviews)
                ->with('UvPost', $UvPost )
                ->with('reproductionSelectorsSend', $reproductionSelectors);
        }
    }

    /**
     * UVPOSTチェック
     * @param Request $request
     * @return array
     */
    protected function getPrint( Request $request )
    {
        $return = [
            'UvPost' => false,
            'UvPostType' => '',
            'UvPostParams' => [
                'dummy' => ''
            ],
            //'post' => $_POST,
        ];

        $typeBox = [
            'type',
            'key',
            'code',
            'suu',
            'pcost',
            'price',
            'body_thickness',
            'pedestal_type',
            'pedestal_thickness',
            'body_color',
            'pedestal_color',
            'body_rear_mirror',
            'pedestal_upper_mirror',
            'repeat_flag',
            'Orders_URL',
            '3d_URL',
            'width_f',
            'tate_f',
            'X1_f',
            'Y1_f',
            'X2_f',
            'Y2_f',
            'full_f',
            'white_f',
            'full_white_f',
            'pre_f',
            'side_f',
            'disabled_f',
            'yobi_f',
            'image_URL_f',
            'white_URL_f',
            'width_l',
            'tate_l',
            'X1_l',
            'Y1_l',
            'X2_l',
            'Y2_l',
            'full_l',
            'white_l',
            'full_white_l',
            'pre_l',
            'side_l',
            'disabled_l',
            'yobi_l',
            'image_URL_l',
            'white_URL_l',
            'width_b',
            'tate_b',
            'X1_b',
            'Y1_b',
            'X2_b',
            'Y2_b',
            'full_b',
            'white_b',
            'full_white_b',
            'pre_b',
            'side_b',
            'disabled_b',
            'yobi_b',
            'image_URL_b',
            'white_URL_b',
            'width_r',
            'tate_r',
            'X1_r',
            'Y1_r',
            'X2_r',
            'Y2_r',
            'full_r',
            'white_r',
            'full_white_r',
            'pre_r',
            'side_r',
            'disabled_r',
            'yobi_r',
            'image_URL_r',
            'white_URL_r',
            'width_t',
            'tate_t',
            'X1_t',
            'Y1_t',
            'X2_t',
            'Y2_t',
            'full_t',
            'white_t',
            'full_white_t',
            'pre_t',
            'side_t',
            'disabled_t',
            'yobi_t',
            'image_URL_t',
            'white_URL_t',
            'width_d_bo',
            'tate_d_bo',
            'X1_d_bo',
            'Y1_d_bo',
            'X2_d_bo',
            'Y2_d_bo',
            'full_d_bo',
            'white_d_bo',
            'full_white_d_bo',
            'pre_d_bo',
            'side_d_bo',
            'disabled_d_bo',
            'yobi_d_bo',
            'image_URL_d_bo',
            'white_URL_d_bo',
            'width_d_fr',
            'tate_d_fr',
            'X1_d_fr',
            'Y1_d_fr',
            'X2_d_fr',
            'Y2_d_fr',
            'full_d_fr',
            'white_d_fr',
            'full_white_d_fr',
            'pre_d_fr',
            'side_d_fr',
            'disabled_d_fr',
            'yobi_d_fr',
            'image_URL_d_fr',
            'white_URL_d_fr',
            'hinmei',
        ];

        $typeCube = [
            'type',
            'key',
            'code',
            'suu',
            'pcost',
            'price',
            'thickness',
            'body_color',
            'repeat_flag',
            'width_f',
            'tate_f',
            'X1_f',
            'Y1_f',
            'X2_f',
            'Y2_f',
            'full_f',
            'white_f',
            'full_white_f',
            'pre_f',
            'side_f',
            'disabled_f',
            'yobi_f',
            'image_URL_f',
            'white_URL_f',
            'width_l',
            'tate_l',
            'X1_l',
            'Y1_l',
            'X2_l',
            'Y2_l',
            'full_l',
            'white_l',
            'full_white_l',
            'pre_l',
            'side_l',
            'disabled_l',
            'yobi_l',
            'image_URL_l',
            'white_URL_l',
            'width_b',
            'tate_b',
            'X1_b',
            'Y1_b',
            'X2_b',
            'Y2_b',
            'full_b',
            'white_b',
            'full_white_b',
            'pre_b',
            'side_b',
            'disabled_b',
            'yobi_b',
            'image_URL_b',
            'white_URL_b',
            'width_r',
            'tate_r',
            'X1_r',
            'Y1_r',
            'X2_r',
            'Y2_r',
            'full_r',
            'white_r',
            'full_white_r',
            'pre_r',
            'side_r',
            'disabled_r',
            'yobi_r',
            'image_URL_r',
            'white_URL_r',
            'width_t',
            'tate_t',
            'X1_t',
            'Y1_t',
            'X2_t',
            'Y2_t',
            'full_t',
            'white_t',
            'full_white_t',
            'pre_t',
            'side_t',
            'disabled_t',
            'yobi_t',
            'image_URL_t',
            'white_URL_t',
            'width_s',
            'tate_s',
            'X1_s',
            'Y1_s',
            'X2_s',
            'Y2_s',
            'full_s',
            'white_s',
            'full_white_s',
            'pre_s',
            'side_s',
            'disabled_s',
            'yobi_s',
            'image_URL_s',
            'white_URL_s',
            'hinmei',
        ];

        $typeIta = [
            'type',
            'key',
            'code',
            'suu',
            'pcost',
            'price',
            'thickness',
            'body_color',
            'width_f',
            'tate_f',
            'X1_f',
            'Y1_f',
            'X2_f',
            'Y2_f',
            'full_f',
            'white_f',
            'full_white_f',
            'pre_f',
            'side_f',
            'disabled_f',
            'yobi_f',
            'image_URL_f',
            'white_URL_f',
            'fraise',
            'repeat_flag',
            'hinmei',
        ];


        /////箱チェック
        $check = 0;
        foreach( $typeBox as $key ){
            if( isset($_POST[$key]) ){
                $check ++;
            }
        }
        if( count( $typeBox ) == $check ){
            $return['UvPost'] = true;
            $return['UvPostType'] = 'case';
            $return['UvPostParams'] = [];
            foreach( $typeBox as $key ){
                $return['UvPostParams'][ $key ] = $_POST[$key];
            }
            return $return;
        }


        ///// キューブチェック
        $check = 0;
        foreach( $typeCube as $key ){
            if( isset($_POST[$key]) ){
                $check ++;
            }
        }
        if( count( $typeCube ) == $check ){
            $return['UvPost'] = true;
            $return['UvPostType'] = 'block';
            $return['UvPostParams'] = [];
            foreach( $typeCube as $key ){
                $return['UvPostParams'][ $key ] = $_POST[$key];
            }
            return $return;
        }


        ///// 板チェック
        $check = 0;
        foreach( $typeIta as $key ){
            if( isset($_POST[$key]) ){
                $check ++;
            }
        }
        if( count( $typeIta ) == $check ){
            $return['UvPost'] = true;
            $return['UvPostType'] = 'plate';
            $return['UvPostParams'] = [];
            foreach( $typeIta as $key ){
                $return['UvPostParams'][ $key ] = $_POST[$key];
            }
            return $return;
        }

        return $return;
    }


    /**
     * @return mixed
     */
    public function constJs()
    {
        $tax = $this->tax_service->findNewRecord();
        $tax_rate = $tax->tax;

        // 出荷目安
        $delivery_dates = $this->product_service->generateDeliveryDates();

        return view('products.const_js')
            ->with('tax_rate', $tax_rate)
            ->with('delivery_dates', $delivery_dates);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function dynamicJs(Request $request)
    {
        if (empty($request->id)) {
            abort('404');
        }
        $product_id = $request->id;
        $product = $this->product_service->find($product_id);
        if (empty($product) || $product->is_display == 0) {
            abort('404');
        }

        // 初期値設定
        $this->product_service->setInitValue($product);

        $discount_rates = $this->discount_rate_item_service->findByDiscountRateId($product->discount_rate_id);

        $tax = $this->tax_service->findNewRecord();
        $tax_rate = $tax->tax;

        // 出荷目安
        $delivery_dates = $this->product_service->generateDeliveryDates();

        return view('products.dynamic_js')
            ->with('request', $request)
            ->with('product', isset($product) ? $product : null)
            ->with('tax_rate', $tax_rate)
            ->with('delivery_dates', $delivery_dates)
            ->with('discount_rates', $discount_rates);
    }


    /*
     * 参考になったを反映
     */
    protected function attachGood($list)
    {
        $ajax_cookie = request('cookie_code_ajax');
        if ($ajax_cookie != '') {
            $cookie_code = $ajax_cookie;
        } else {
            $cookie_code = $_COOKIE["acryya_review"] ?? null;
            if (empty($cookie_code)) {
                $cookie_code = sha1(time() . '-' . rand(0, 10000));
            }
            setcookie("acryya_review", $cookie_code, time() + 86400 * 730, '/'); //2年間//延長も
        }

        $return = [];
        foreach ($list as $v) {
            $v->good = $cookie_code ? $v->is_already_good($cookie_code) : false;
            $v->good_count = $v->goods()->count();
            $v->ajax_cookie = $ajax_cookie;
            $return[] = $v;
        }

        return $return;
    }
}
