<?php

namespace App\Providers;

use App\Services\NoticeService;
use App\Services\ProductCategoryService;
use App\Services\RepairPartGroupService;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
	private $request;

	/**
	 * Register services.
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}

	/**
	 * Bootstrap services.
	 *
	 * @return void
	 */
	public function boot( Request $request )
	{
		$this->request = $request;

		// ヘッダー
		view()->composer('common.header', function( $view ) {
			$search_category_id = $this->request->cat;
			$search_word = $this->request->word;

			$product_category_service = new ProductCategoryService();
			$categories = $product_category_service->findAll();

            //CGIが配置されたDIR
            $dir_path = public_path() . '/cgibin/memberadmin/';

            //クッキーを引数にCGIを起動
            $cgi_path = null;
            if(isset($_COOKIE["ACRY_EXPIRES_LOGIN"])) {
                //実行PATH
                $cgi_path = 'gadget_command.cgi ' . '"' . "{$_COOKIE["ACRY_EXPIRES_LOGIN"]}" . '"';

            }elseif(isset($_COOKIE["ACRY_MEMBER_SESSION"])) {
                //実行PATH
                $cgi_path = 'gadget_command.cgi ' . '"' . "{$_COOKIE["ACRY_MEMBER_SESSION"]}" . '"';
            }

            if(!empty($cgi_path)){
                chdir($dir_path);
                exec($dir_path.$cgi_path,$output,$return_ver);
                $user_info = ( !empty($output[0]) ) ? json_decode($output[0],true) : [] ;


                if( isset($user_info['isLogin']) && $user_info['isLogin'] == 1 && isset($user_info['memberData'])){
                    $memberData = $user_info['memberData'];
                    $user_name = $memberData['com'] . $memberData['name_a'] . $memberData['name_b'];

                    if(!empty($user_name)){
                        $login_status = "true";                  //ログイン表示用制御フラグ
                        $user_name = $user_name . "様";          //ユーザー名
                        if(!empty($memberData['point'])){
                            $user_point = $memberData['point'];   //ポイント
                        }else{
                            $user_point = 0;
                        }
                    }else{
                        $login_status = "false";
                        $user_name = "";
                        $user_point = "";
                    }
                } elseif( empty($user_info['isLogin']) ){ //初回画面表示時
                    $login_status = "false";
                    $user_name = "";
                    $user_point = "";
                }
            } else{ //初回画面表示時
                $login_status = "false";
                $user_name = "";
                $user_point = "";
            }

            return $view
                ->with('search_category_id', $search_category_id)
                ->with('search_word', $search_word)
                ->with('categories', $categories)
                ->with('login_status', $login_status)
                ->with('user_name', $user_name)
                ->with('user_point', $user_point);
		});

		// サイドバー
		view()->composer('common.sidemenu', function( $view ) {
			$product_category_service = new ProductCategoryService();
			$categories = $product_category_service->findAll();

			// 補修部品グループ一覧
			$repair_part_group_service = new RepairPartGroupService();
			$repair_part_groups = $repair_part_group_service->findMenu();

			$blog_categories = [];

			// アクリ屋ブログのカテゴリー取得
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, env('APP_URL')."/blog/wp-json/wp/v2/categories/");
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_TIMEOUT, 5);
			$result = curl_exec($ch);
			curl_close($ch);
			$blog_categories = ( !empty($result) ) ? json_decode($result,true) : [] ;

			return $view->with('categories', $categories)
				->with('repair_part_groups', $repair_part_groups)
				->with('blog_categories', $blog_categories);
		});

		// 告知情報
		view()->composer('common.notice', function( $view ) {
			$notice_service = new NoticeService();
			$common_notice = $notice_service->findNewRecord();
			return $view->with('common_notice', $common_notice);
		});
	}
}
