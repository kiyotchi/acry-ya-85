<?php

namespace App\Http\Controllers\Review;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewFormRequest;
use App\Models\Review;
use App\Models\ReviewGood;
use Exception;
use Illuminate\Http\Request;
use Mail;
use Log;
use Storage;
use Str;
use Throwable;




/**
 * レビュー関連
 *
 * Class ReviewController
 * @package App\Http\Controllers\Review
 */
class ReviewController extends Controller
{
    const STORAGE_PATH = '/storage/reviewimages/';

    /**
     * @var Review
     */
    protected $reviewModel;

    /**
     * @param Review $reviewModel
     */
    public function __construct(
        Review $reviewModel
    ) {
        $this->reviewModel = $reviewModel;
    }

    /**
     * レビュー取得 API.
     *
     * @param Request $request
     */
    public function index(Request $request)
    {
        $pageMax = 5;
        $limit = (int) $request->input('limit', $pageMax);
        if ($limit > $pageMax) {
            $limit = $pageMax;
        } elseif ($limit < 1) {
            $limit = 1;
        }

        $sort = strtolower((string) $request->input('sort', 'created_at'));
        $sortArray = [
            'id',
            'created_at',
            'updated_at',
            'star',
        ];

        $dir = strtolower((string) $request->input('dir', 'desc'));
        if (!in_array($dir, ['asc', 'desc'], true)) {
            $dir = 'desc';
        }

        if( $request->input('photoonly', '0')  == 1){
            $reviews = $this->reviewModel->searchApi($request->input('s', []))
                ->whereRaw( "file <> ''" )
                ->orderBy($sort, $dir)
                ->paginate($limit);
        }
        else if( $sort == 'star' ){
            $reviews = $this->reviewModel->searchApi($request->input('s', []))
                ->orderBy($sort, $dir)
                ->orderBy('created_at', 'desc' )
                ->paginate($limit);
        }
        else {
            $reviews = $this->reviewModel->searchApi($request->input('s', []))
                ->orderBy($sort, $dir)
                ->paginate($limit);
        }

        // 平均など
        $keyword = $request->input('s');
        $keyword = ((isset($keyword['keyword']))?$keyword['keyword']:'');
        $pageInfoList = Review::pageInfoList( $keyword );


        // Ajax の場合は JSON を返す.
        if ($request->input('format') === 'pagination') {
            ob_start();
            echo $reviews->appends(request()->input())->onEachSide(2)->links();
            $pagination = ob_get_clean();
            return $pagination;
        }
        if ($request->input('format') === 'static') {
            ob_start();
            echo $reviews->appends(request()->input())->onEachSide(2)->links();
            $pagination = ob_get_clean();
            
            $res = [
                'pagination' => $pagination,
                'reviews' => $this->attachGood($reviews),
                'pageInfoList' => $pageInfoList,
            ];

            return response()->json($res);

        }
        if ($request->ajax() || $request->input('format') === 'json') {
            $returnJson = json_decode( $reviews->toJson() );
            $returnJson->data = $this->attachGood($reviews);
            return response()->json($returnJson);
        }


        return view('review.index', [
            'reviews' => $reviews,
            'reviews_array' => $this->attachGood($reviews),
            'pageInfoList' => $pageInfoList,
        ]);
    }

    /**
     * レビュー投稿画面.
     *
     * @param Request $requst
     */
    public function create(Request $request)
    {
        if (!$this->isValidRequest($request)) {
            return redirect()->route('review.thanks')->withErrors(['already' => 'すでに投稿済みです']);
        }
        ///// 暗号化チェック
        /*
        //https://test.acry-ya.com/review/create/?inputkey=366104086150565
        $inputkey = $request->input('inputkey');
        if( mb_strlen($inputkey) != 15 ){
            return redirect()->route('review.thanks')->withErrors(['already' => '不正なキーです:1']);
        }
        $inputCheck = [];
        $inputkeyArr = str_split( $inputkey );
        $inputCheck[] = array_splice( $inputkeyArr, 10, 1 )[0];
        $inputCheck[] = array_splice( $inputkeyArr, 3, 1 )[0];
        $inputCheck[] = array_splice( $inputkeyArr, 1, 1 )[0];
        $inputCheck = array_reverse( $inputCheck );
        $inputkey = implode( '', $inputkeyArr );

        $secretKey1 = '926974534184';
        $secretKey1Arr = str_split( $secretKey1 );
        $secretKey2 = '481';
        $secretKey2Arr = str_split( $secretKey2 );
        $checkLine1 = [];
        $kakezan = 7;
        for( $x = 0; $x < count( $secretKey1Arr ); $x ++ ){
            $set = $inputkeyArr[$x] + $secretKey1Arr[$x];
            if( $set > 9 ){
                $set -= 10;
            }
            $checkLine1[] = $set * $kakezan;
            $kakezan -- ;
            if( $kakezan < 2 ){
                $kakezan = 7;
            }
        }
        $checkLine2 = str_split( array_sum( $checkLine1 ) );
        $checkSum = [];
        for( $x = 0; $x < count( $secretKey2Arr ); $x ++ ){
            $set = $secretKey2Arr[$x] + $checkLine2[$x];
            if( $set > 9 ){
                $set -= 10;
            }
            $checkSum[$x] = $set;
        }
        $finalCheck = true;
        for( $x = 0; $x < count( $checkSum ); $x ++ ){
            if( $checkSum[$x] != $inputCheck[$x] ){
                $finalCheck = false;
            }
        }
        if(! $finalCheck ){
            //echo '本番号:' . $inputkey . '<br>';
            //echo '暗号キー1:' . $secretKey1 . '<br>';
            //echo '暗号キー2:' . $secretKey2 . '<br>';
            //echo 'パラメータインプットチェックサムキー:' . implode( ' ', $inputCheck ) . '<br>';
            //echo '各桁掛け算:' . implode( ' ', $checkLine1 ) . '<br>';
            //echo '合計分離:' . implode( ' ', $checkLine2 ) . '<br>';
            //echo 'チェックサム変換:' . implode( ' ', $checkSum ) . '<br>';
            return redirect()->route('review.thanks')->withErrors(['already' => '不正なキーです:2']);
        }
        */

        return view('review.create');
    }

    /**
     * レビュー投稿処理.
     *
     * @param ReviewFormRequest $request
     */
    public function store(ReviewFormRequest $request)
    {
        if (!$this->isValidRequest($request)) {
            return redirect()->route('review.thanks')->withErrors(['already' => 'すでに投稿済みです']);
        }

        if ($this->hasNgWords($request)) {
            return redirect()->back()->withInput()->withErrors(['review.name' => 'ニックネーム・タイトル・ご感想内容のいずれかに不適切な表現が含まれています']);
        }

        $inputkey = $request->input('inputkey');
        // LBやWAF配下の場合はIPがとれないため HTTP_X_FORWARDED_FOR があればそちらを優先する
        $ip = empty(with($val = data_get($_SERVER, 'HTTP_X_FORWARDED_FOR'))) ? $request->ip() : $val;
        try {
            $host = gethostbyaddr($ip);
        } catch (Throwable $e) {
            $host = data_get($_SERVER, 'REMOTE_HOST');
        }
        $ua = $request->header('User-Agent');

        $attr = $request->input('review');
        $attr['inputkey'] = $inputkey;
        $attr['ip'] = $ip;
        $attr['host'] = $host;
        $attr['user_agent'] = $ua;

        $file = $request->file('file');
        if (!empty($file)) {
            try {
                $path = $this->saveFile($file);
                $attr['file'] = $path;
            } catch(Exception $e) {
                Log::error($e->getMessage() . ':' . PHP_EOL . $e->getTraceAsString());
            }
        }

        if (empty($this->reviewModel->create($attr))) {
            Log::error('送信に失敗しました : ' . PHP_EOL . print_r($attr, true));
            return redirect()->back()->withInput()->withErrors(['review.name' => '送信に失敗しました。しばらくしてから再度お試しください。']);
        }

        /////メール送信
        $dataForMail['attr'] = $attr;
        Mail::send(
            ['text' =>'review.mail'],
            $dataForMail,
            function($message){
    	        $message
                    ->to( config('review.mailto'), 'お客様アンケート')
                    ->from( config('review.mailto'), 'お客様アンケート' )
                    ->subject( config('review.subject') );
        	}
        );
        return redirect()->route('review.thanks');
    }

    /**
     * レビュー投稿後画面.
     */
    public function thanks(Request $request)
    {
        return view('review.thanks');
    }

    /**
     * 参考になった
     */
    public function good()
    {
        $review_id = request('review_id');
        $cookie_code = $_COOKIE["acryya_review"] ?? null;
        if(empty($cookie_code)){
            $cookie_code = sha1( time() . '-' . rand( 0, 10000 ) );
        }
        setcookie("acryya_review", $cookie_code, time() + 86400 * 730, '/'); //2年間//延長も
        

        $good = ReviewGood::query()
                ->where('review_id', $review_id)
                ->where('cookie_code', $cookie_code)
                ->first();
        $result_type = false;
        if($good){
            $good->delete();
            $result_type = false; //取り消し
        }else{
            $good = new ReviewGood();
            $good->review_id = $review_id;
            $good->cookie_code = $cookie_code;
            $good->save();
            $result_type = true; //作成
        }

        $review = Review::where('id', $review_id )->first();
        $returnCount = $review->goods()->count();

        return response()->json([
            'result' => true,
            'result_type' => $result_type,
            'count' => $returnCount,

        ]);
    }

    /**
     * 投稿済みでないかなどリクエストの妥当性チェック.
     *
     * @param mixed $request
     * @return bool
     */
    protected function isValidRequest($request)
    {
        $inputkey = $request->input('inputkey');

        if (empty($inputkey)) {
            return false;
        }

        if ($this->reviewModel->where('inputkey', $inputkey)->exists()) {
            return false;
        }

        return true;
    }

    /**
     * NGワードが含まれていないかを確認.
     *
     * @param mixed $request
     * @return bool
     */
    protected function hasNgWords($request)
    {
        $words = [];
        $path = storage_path('app/ngwords.php');
        if (file_exists($path)) {
            try {
                $words = include($path);
                if (!is_array($words)) {
                    throw new Exception('設定ファイルが配列ではありません:' . print_r($words, true));
                }
            } catch (Throwable $e) {
                Log::error($e->getMessage() . PHP_EOL . $e->getTraceAsString());
                $words = [];
            }
        }

        $targets = [
            $request->input('review.name', ''),
            $request->input('review.title', ''),
            $request->input('review.content', ''),
        ];

        foreach ($targets as $str) {
            $str = preg_replace('/\s+/', '', (string)$str);
            foreach ($words as $word) {
                if (mb_stripos($str, (string) $word) !== false) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * 画像処理
     *
     * @param mixed (UploadedFile) $file
     * @return string 保存したパス
     */
    protected function saveFile($file)
    {
        $dir = self::STORAGE_PATH . date('Ym') . '/';
        @mkdir(public_path($dir), 0777, true);
        $ext = $file->guessClientExtension();

        // 縦・横どちらかが 800px を超えていた場合リサイズする
        list($w, $h, $type) = getimagesize($file);
        if ($w > 800 || $h > 800) {
            if ($w > $h) {
                $newW = 800;
                $newH = floor($h * 800 / $w);
            } else {
                $newW = floor($w * 800 / $h);
                $newH = 800;
            }

            // JPG / PNG のみ対応（の指示仕様）
            // GIF や BMP などが必要な場合ここを拡張
            switch ($type) {
                case IMAGETYPE_JPEG: {
                    $image = imagecreatefromjpeg($file);
                    break;
                }
                case IMAGETYPE_PNG: {
                    $image = imagecreatefrompng($file);
                    break;
                }
                default: {
                    throw new Exception('対応していないファイル形式です: ' . print_r($type, true));
                }
            }

            $canvas = imagecreatetruecolor($newW, $newH);
            imagecopyresampled($canvas, $image, 0, 0, 0, 0, $newW, $newH, $w, $h);

            $path = $this->generateSavePath($dir, $ext);

            switch ($type) {
                case IMAGETYPE_JPEG:
                    imagejpeg($canvas, public_path($path));
                    break;
                case IMAGETYPE_PNG:
                    imagepng($canvas, public_path($path), 9);
                    break;
            }

            imagedestroy($image);
            imagedestroy($canvas);

            return str_replace(self::STORAGE_PATH, '/', $path);
        }

        $path = $this->generateSavePath($dir, $ext);
        if (!$file->move(public_path(dirname($path)), $path)) {
            throw new Exception('アップロードファイルの保存に失敗しました:' . $path);
        }

        return str_replace(self::STORAGE_PATH, '/', $path);
    }

    protected function generateSavePath($dir, $ext)
    {
        $count = 0;
        $hash = Str::random(40);
        while ($count < 10) {
            if ($count > 0) {
                $hash = str_replace('_' . ($count - 1), '', $hash);
                $hash = $hash . '_' . $count;
            }
            if (file_exists(public_path(rtrim($dir, '/') . '/' . $hash . '.' . $ext))) {
                $count++;
                continue;
            }

            return rtrim($dir, '/') . '/' . $hash . '.' . $ext;
        }

        throw new Exception('保存パスが生成できませんでした: ' . "{$dir}{$hash}.{$ext}");
    }
    
    /*
     * 参考になったを反映
     */
    protected function attachGood($list)
    {
        $ajax_cookie = request( 'cookie_code_ajax' );
        if( $ajax_cookie != '' ){
            $cookie_code = $ajax_cookie;
        }
        else {
            $cookie_code = $_COOKIE["acryya_review"] ?? null;
            if(empty($cookie_code)){
                $cookie_code = sha1( time() . '-' . rand( 0, 10000 ) );
            }
            setcookie("acryya_review", $cookie_code, time() + 86400 * 730, '/'); //2年間//延長も
        }

        $return = [];
        foreach($list as $v){
            $v->good = $cookie_code ? $v->is_already_good($cookie_code) : false;
            $v->good_count = $v->goods()->count();
            $v->ajax_cookie = $ajax_cookie;
            $return[] = $v;
        }

        return $return;
    }
}
