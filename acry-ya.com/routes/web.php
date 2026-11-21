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

Route::get('/', function () {
	return view('index');
});


Route::get('/head_start.php', 'Parts\PartsController@head_start')->name('common.head_start');
Route::get('/body_end.php', 'Parts\PartsController@body_end')->name('common.body_end');
Route::get('/header.php', 'Parts\PartsController@header')->name('common.header');
Route::get('/footer.php', 'Parts\PartsController@footer')->name('common.footer');
Route::get('/sidemenu.php', 'Parts\PartsController@sidemenu')->name('common.sidemenu');
Route::get('/notice.php', 'Parts\PartsController@notice')->name('common.notice');

// 商品関連
Route::group(['prefix' => 'products'], function () {
	// 商品一覧
	Route::get('/list/{category_id?}/', 'Product\ProductListController@index')->name('products.list');

	// 商品検索
	Route::get('/search', 'Product\ProductListController@search')->name('products.search');

	// 商品詳細
	Route::get('/detail/{id}/', 'Product\ProductController@detail')->name('products.detail');
	Route::post('/detail/{id}/', 'Product\ProductController@detail')->name('products.detail_post'); // データ復元用

	// 補修部品一覧
	Route::get('/detail/{id}/parts/', 'RepairPart\RepairPartGroupController@product')->name('products.detail.parts');

    // 定数定義javascript
    Route::get('/const.js', 'Product\ProductController@constJs')->name('products.const_js');

	// 動的javascript
	Route::get('/detail/{id}/product.js', 'Product\ProductController@dynamicJs')->name('products.dynamic_js');
});

// 補修部品関連
Route::group(['prefix' => 'parts'], function () {
	// 補修部品一覧
	Route::get('/', 'RepairPart\RepairPartGroupController@index')->name('parts.index');
	// 補修部品詳細
	Route::get('/{id}/', 'RepairPart\RepairPartGroupController@detail')->name('parts.detail');
});

// お客様の声関連
Route::group(['prefix' => 'voices'], function () {
    // ご購入時
    Route::get('/current', 'Voice\VoiceController@current')->name('voices.current');
    // ご使用後
    Route::get('/after', 'Voice\VoiceController@after')->name('voices.after');
});

// よくあるご質問関連
Route::group(['prefix' => 'faq'], function () {
    // よくあるご質問一覧
    Route::get('/', 'Faq\FaqController@list')->name('faq.list');
});

// レビュー関連
Route::group(['prefix' => 'review'], function () {
    // guest じゃないと POST が弾かれる...
    Route::middleware('guest')->group(function () {
        // レビュー投稿画面
        Route::get('create', 'Review\ReviewController@create')->name('review.create');
        // レビュー投稿処理
        Route::post('/', 'Review\ReviewController@store')->name('review.store');
        // レビュー投稿後画面および投稿済みページ
        Route::get('thanks', 'Review\ReviewController@thanks')->name('review.thanks');
        // 参考になった処理
        Route::post('good', 'Review\ReviewController@good')->name('review.good');
    });

    // レビュー取得API (AJAX で制限)
    Route::get('/', 'Review\ReviewController@index')->name('review.index');
});
