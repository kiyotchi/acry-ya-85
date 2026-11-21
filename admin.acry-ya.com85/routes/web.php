<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/', function () {
    return view('welcome');
});
*/

Auth::routes();

Route::get('logout', 'Auth\LoginController@logout');

Route::group(['middleware' => 'auth:web'], function () {

    Route::get('/', 'Auth\LoginController@showLoginForm');
    Route::get('/home', 'HomeController@index')->name('home');

    // カテゴリ関係のルーティング
	Route::group(['prefix' => 'product/category'], function () {
        // リスト表示
        Route::get('/list', 'ProductCategories\ProductCategoryListController@index')->name('product.category.list');
        // カテゴリ編集画面へ遷移
        Route::get('/edit', 'ProductCategories\ProductCategoryController@index')->name('product.category.new');
        Route::get('/edit/{id}', 'ProductCategories\ProductCategoryController@index')->name('product.category.edit');
        //カテゴリ作成
        Route::post('/edit', 'ProductCategories\ProductCategoryController@register')->name('product.category.register');
        // カテゴリ更新
        Route::post('/edit/{id}', 'ProductCategories\ProductCategoryController@update')->name('product.category.update');
        // カテゴリ削除
        Route::post('/delete/{id}', 'ProductCategories\ProductCategoryController@delete')->name('product.category.delete');
    });

    // 商品に付随する
    Route::group(['prefix' => 'product'], function () {
        // 商品一覧
        Route::get('/list', 'Product\ProductListController@index')->name('product.list');
        // 標準商品
        Route::group(['prefix' => 'standard'], function () {
            // 新規登録
            Route::get('/edit', 'Product\ProductController@index')->name('product.standard.new');
            Route::post('/edit', 'Product\ProductController@register')->name('product.standard.register');
            // 編集
            Route::get('/edit/{id}', 'Product\ProductController@index')->name('product.standard.edit');
            Route::post('/edit/{id}', 'Product\ProductController@update')->name('product.standard.update');
            // 削除
            Route::post('/delete/{id}', 'Product\ProductController@delete')->name('product.standard.delete');
        });
        // セミオーダー商品
        Route::group(['prefix' => 'custom'], function () {
            // 新規登録
            Route::get('/edit', 'Product\CustomProductController@index')->name('product.custom.new');
            Route::post('/edit', 'Product\CustomProductController@register')->name('product.custom.register');
            // 編集
            Route::get('/edit/{id}', 'Product\CustomProductController@index')->name('product.custom.edit');
            Route::post('/edit/{id}', 'Product\CustomProductController@update')->name('product.custom.update');
            // 削除
            Route::post('/delete/{id}', 'Product\CustomProductController@delete')->name('product.custom.delete');
        });
        // 規格詳細個別
        Route::group(['prefix' => 'specification'], function () {
            //
            Route::get('/{id}', 'Product\SpecificationDetailController@index')->name('specification');
            Route::post('/{id}', 'Product\SpecificationDetailController@update')->name('specification.update');
            // 規格詳細個別商品タグ
            Route::group(['prefix' => 'feature/tag'], function () {
                Route::get('/{id}', 'Product\SpecificationDetailProductFeatureTagController@index')->name('specification.feature.tag');
                Route::post('/{id}', 'Product\SpecificationDetailProductFeatureTagController@update')->name('specification.feature.tag.update');
            });
        });
        
    
        // 商品特徴タグ
        Route::group(['prefix' => 'feature/tag'], function () {
            // リスト表示
            Route::get('/list', 'ProductFeatureTags\ProductFeatureTagListController@index')->name('feature.tag.list');
            // 商品特徴タグ編集画面へ遷移
            Route::get('/edit', 'ProductFeatureTags\ProductFeatureTagController@index')->name('feature.tag.new');
            Route::get('/edit/{id}', 'ProductFeatureTags\ProductFeatureTagController@index')->name('feature.tag.edit');
            // 商品特徴タグ作成
            Route::post('/edit',
                'ProductFeatureTags\ProductFeatureTagController@register')->name('feature.tag.register');
            // 商品特徴タグ更新
            Route::post('/edit/{id}',
                'ProductFeatureTags\ProductFeatureTagController@update')->name('feature.tag.update');
            // 商品特徴タグ削除
            Route::post('/delete/{id}',
                'ProductFeatureTags\ProductFeatureTagController@delete')->name('feature.tag.delete');
        });

        // 補修部品設定
        Route::group(['prefix' => 'repair/part'], function () {
            Route::get('/setting/{id}', 'RepairPart\RepairPartSettingController@index')->name('repair.part.setting');
            Route::post('/setting/{id}', 'RepairPart\RepairPartSettingController@register')->name('repair.part.setting.register');
        });
    });
    // オプションが無いので一旦こっち
    // カラー別画像設定
    Route::get('/option/image/setting/{id}', 'Option\OptionImageSettingController@index')->name('option.image.setting');
    Route::post('/option/image/setting/{id}',
        'Option\OptionImageSettingController@register')->name('option.image.setting.register');

    // カラー関係のルーティング
    Route::group(['prefix' => 'color'], function () {
        // カラー一覧へ遷移
        Route::get('/list', 'Colors\ColorListController@index')->name('color.list');
        // カラー編集画面へ遷移
        Route::get('/edit', 'Colors\ColorController@index')->name('color.new');
        Route::get('/edit/{id}', 'Colors\ColorController@index')->name('color.edit');
        // カラー作成
        Route::post('/edit', 'Colors\ColorController@register')->name('color.register');
        // カラー更新
        Route::post('/edit/{id}', 'Colors\ColorController@update')->name('color.update');
        // カラー削除
        Route::post('/delete/{id}', 'Colors\ColorController@delete')->name('color.delete');

        Route::group(['prefix' => 'image'], function () {
            // カラー別画像設定
            Route::get('/setting/{id}', 'Colors\ColorImageSettingController@index')->name('color.image.setting');
            Route::post('/setting/{id}',
                'Colors\ColorImageSettingController@register')->name('color.image.setting.register');
        });
    });

    // サイズ
    Route::group(['prefix' => 'size'], function () {
        // サイズ関係のルーティング
        Route::get('/list', 'Sizes\SizeListController@index')->name('size.list');
        // サイズ編集画面へ遷移
        Route::get('/edit', 'Sizes\SizeController@index')->name('size.new');
        Route::get('/edit/{id}', 'Sizes\SizeController@index')->name('size.edit');
        // サイズ作成
        Route::post('/edit', 'Sizes\SizeController@register')->name('size.register');
        // サイズ更新
        Route::post('/edit/{id}', 'Sizes\SizeController@update')->name('size.update');
        // サイズ削除
        Route::post('/delete/{id}', 'Sizes\SizeController@delete')->name('size.delete');

        Route::group(['prefix' => 'image'], function () {
            // サイズ別画像設定
            Route::get('/setting/{id}', 'Sizes\SizeImageSettingController@index')->name('size.image.setting');
            Route::post('/setting/{id}',
                'Sizes\SizeImageSettingController@register')->name('size.image.setting.register');
        });
    });

    // 板厚
    Route::group(['prefix' => 'plate/thickness'], function () {
        // 板厚関係のルーティング.
        Route::get('/list', 'PlateThicknesses\PlateThicknessListController@index')->name('plate.thickness.list');
        // 板厚編集画面へ遷移
        Route::get('/edit', 'PlateThicknesses\PlateThicknessController@index')->name('plate.thickness.new');
        Route::get('/edit/{id}', 'PlateThicknesses\PlateThicknessController@index')->name('plate.thickness.edit');
        // 板厚作成
        Route::post('/edit', 'PlateThicknesses\PlateThicknessController@register')->name('plate.thickness.register');
        // 板厚更新
        Route::post('/edit/{id}', 'PlateThicknesses\PlateThicknessController@update')->name('plate.thickness.update');
        // 板厚削除
        Route::post('/delete/{id}', 'PlateThicknesses\PlateThicknessController@delete')->name('plate.thickness.delete');
    });

    // 素材関係のルーティング
    Route::group(['prefix' => 'material'], function () {
        // リスト表示
        Route::get('/list', 'Materials\MaterialListController@index')->name('material.list');
        // 素材編集画面へ遷移
        Route::get('/edit', 'Materials\MaterialController@index')->name('material.new');
        Route::get('/edit/{id}', 'Materials\MaterialController@index')->name('material.edit');
        //素材作成
        Route::post('/edit', 'Materials\MaterialController@register')->name('material.register');
        // 素材更新
        Route::post('/edit/{id}', 'Materials\MaterialController@update')->name('material.update');
        // 素材削除
        Route::post('/delete/{id}', 'Materials\MaterialController@delete')->name('material.delete');
    });

    // 消費税関係のルーティング
    Route::group(['prefix' => 'tax'], function () {
        // 消費税設定画面へ遷移
        Route::get('/setting', 'Taxes\TaxController@index')->name('tax.setting');
        // 消費税更新
        Route::post('/setting', 'Taxes\TaxController@register')->name('tax.register');
    });

    // 告知情報関係のルーティング
    Route::group(['prefix' => 'notice'], function () {
        // 告知情報設定へ遷移
        Route::get('/setting', 'Notices\NoticeController@index')->name('notice.setting');
        // 告知情報更新
        Route::post('/setting', 'Notices\NoticeController@register')->name('notice.register');
    });

    // HTMLパーツ
    Route::group(['prefix' => 'html/part'], function () {
        // 一覧画面
        Route::get('/list', 'HtmlPart\HtmlPartListController@index')->name('html.part.list');
        // 新規登録画面
        Route::get('/edit', 'HtmlPart\HtmlPartController@index')->name('html.part.new');
        Route::post('/edit', 'HtmlPart\HtmlPartController@register')->name('html.part.register');
        // 編集画面
        Route::get('/edit/{id?}', 'HtmlPart\HtmlPartController@index')->name('html.part.edit');
        Route::post('/edit/{id}', 'HtmlPart\HtmlPartController@update')->name('html.part.update');
        // 削除
        Route::post('/delete/{id}', 'HtmlPart\HtmlPartController@delete')->name('html.part.delete');
    });

    // オプション設定
    Route::group(['prefix' => 'option'], function () {
        Route::get('/setting/{id}', 'Option\OptionSettingController@index')->name('option.setting');
        Route::post('/setting/{id}', 'Option\OptionSettingController@update')->name('option.setting.update');
    });

    // 割引率関係のルーティング
    Route::group(['prefix' => 'discount/rate'], function () {
        // 割引率一覧へ遷移
        Route::get('/list', 'DiscountRates\DiscountRateListController@index')->name('discount.rate.list');
        // 割引率編集画面へ遷移
        Route::get('/edit', 'DiscountRates\DiscountRateController@index')->name('discount.rate.new');
        Route::get('/edit/{id}', 'DiscountRates\DiscountRateController@index')->name('discount.rate.edit');
        // 割引率作成
        Route::post('/edit', 'DiscountRates\DiscountRateController@register')->name('discount.rate.register');
        // 割引率更新
        Route::post('/edit/{id}', 'DiscountRates\DiscountRateController@update')->name('discount.rate.update');
        // 割引率削除
        Route::post('/delete/{id}', 'DiscountRates\DiscountRateController@delete')->name('discount.rate.delete');
    });

    // 補修部品関係のルーティング
    Route::group(['prefix' => 'repair/part'], function () {
        // 補修部品一覧
        Route::get('/list', 'RepairPart\RepairPartListController@index')->name('repair.part.list');
        // 補修部品作成
        Route::get('/edit', 'RepairPart\RepairPartController@index')->name('repair.part.new');
        Route::post('/edit', 'RepairPart\RepairPartController@register')->name('repair.part.register');
        // 補修部品編集画面
        Route::get('/edit/{id}', 'RepairPart\RepairPartController@index')->name('repair.part.edit');
        Route::post('/edit/{id}', 'RepairPart\RepairPartController@update')->name('repair.part.update');
        // 補修部品削除
        Route::post('/delete/{id}', 'RepairPart\RepairPartController@delete')->name('repair.part.delete');

        // 補修部品グループのルーティング
        Route::group(['prefix' => 'group'], function () {
            // 補修部品グループ一覧
            Route::get('/list', 'RepairPart\RepairPartGroupListController@index')->name('repair.part.group.list');
            // 補修部品グループ作成
            Route::get('/edit', 'RepairPart\RepairPartGroupController@index')->name('repair.part.group.new');
            Route::post('/edit', 'RepairPart\RepairPartGroupController@register')->name('repair.part.group.register');
            // 補修部品グループ編集
            Route::get('/edit/{id}', 'RepairPart\RepairPartGroupController@index')->name('repair.part.group.edit');
            Route::post('/edit/{id}', 'RepairPart\RepairPartGroupController@update')->name('repair.part.group.update');
            // 補修部品グループ削除
            Route::post('/delete/{id}', 'RepairPart\RepairPartGroupController@delete')->name('repair.part.group.delete');
        });
    });

	// リソース管理
	Route::group(['prefix' => 'resource'], function () {
		Route::get('/image', 'Resource\ImageController@index')->name('resource.image');
	});

    // レビュー管理
    Route::resource('reviews', 'Reviews\ReviewController', ['except' => ['show', 'create', 'store']]);

});
