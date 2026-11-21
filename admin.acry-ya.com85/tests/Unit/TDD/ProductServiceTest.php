<?php

namespace Tests\Unit\TDD;

use App\Models\Product;
use Log;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use App\Services\ProductService;

class ProductServiceTest extends TestCase
{

    private $product_service;
    //use RefreshDatabase;
    public function setUp(): void
    {
        parent::setUp();
        $this->product_service = new ProductService();
    }

    public function testFindList()
    {
        $this->markTestSkipped();
        $this->seed('ProductTypeTableSeeder');
        $this->seed('TDDProductCategoryTableSeeder');
        $this->seed('TDDProductTableSeeder');
        $product_service = new ProductService();
        $product_name = "テスト";
        $product_code = "99999";
        $category_id = 1;
        $type_code = 'standard';
        $products = $product_service->findList($product_name, $product_code, $category_id, $type_code);
        foreach ($products as $value) {
            print $value;
            print "\n" . $value->productType;
            print "\n" . $value->productCategory;
        }
        $this->assertTrue(TRUE);
    }

    public function testFindListNonPara()
    {
        $this->markTestSkipped();
        $product_service = new ProductService();
        $products = $product_service->findList();
        $this->assertEmpty($products);
    }

    public function testFind()
    {
        $product_service = new ProductService();
        $data = $product_service->find(1);
        print_r($data, true);
        $this->assertEquals(1, $data->product_id);
    }

    public function testRegister()
    {
        #$this->markTestSkipped();
        #$this->seed('ProductTypeTableSeeder');
        #$this->seed('TDDProductCategoryTableSeeder');
        $insert_data = array(
            'product_code' => '123456',
            'product_type_code' => 'standard',
            'product_name' => 'test商品',
            'product_name_displayed_cart' => 'テスト商品',
            'product_category_id' => '1',
            'product_tag' => 'test1,test2',
            'is_display' => '1',
            'maker_name' => 'テストメーカー',
            'picture_id' => '1',
            'price' => '999999',
            'delivery_schedule_id' => '1',
            'history' => '2019/04/01 新規作成',
            'specify_size' => 1,
            'size_group_id_of_number' => 1,
            'related_product_option' => 0,
            'related_product_id' => null,
        );
        $product_service = new ProductService();
        $product_id = $product_service->register($insert_data);
        $product = $this->product_service->find($product_id);
        print($product->product_id);
        $this->assertTrue(TRUE);
    }

    public function testGenerateDeliveries()
    {
        $this->markTestSkipped();
        $value = Config::get('filesystems.disks');
        var_dump($value);
        $deliveris = $this->product_service->generateDeliveries();
        foreach ($deliveris as $item) {
            print $item;
        }
        $this->assertTrue(true);
    }


    public function testDelete()
    {
        $this->markTestSkipped();
        $this->product_service->delete(1);

    }
    public function testFindHtmlPart()
    {

        $product = $this->product_service->find(1);
        $selected_id_list = $this->product_service->generateSelectedHtmlPartIdList($product);

        if (isset($selected_id_list)) {
            $this->assertTrue(true);
        }
    }

    public function testCustomRegister()
    {
        $this->markTestSkipped();
        $insert_data = array(
            'product_code' => '123456',
            'product_name' => 'test商品',
            'product_name_displayed_cart' => 'テスト商品',
            'product_category_id' => '1',
            'is_display' => '1',
            'maker_name' => 'テストメーカー',
            'product_summary' => 'これはテスト用の概要です',
            'html' => '

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta name="description" content="アクリル板の加工をその場で簡単自動見積り。ご希望サイズでのカットや複雑な加工からDIY用途まで。図面確認機能で安心注文。">
<meta name="keywords" content="アクリル,アクリル板,アクリルプレート,アクリルシート,加工,セミオーダー,販売">
<title>アクリル板加工＜セミオーダー＞｜アクリ屋ドットコム</title>
<link rel="shortcut icon" href="/acry-ya_new/img/top_img/acry-icon2.ico">
<link rel="shortcut icon" href="/acry-ya_new/img/top_img/acry-icon2.ico">
<link rel="apple-touch-icon" href="/acry-ya_new/img/top_img/acry-icon.png">
<link rel="apple-touch-icon" href="/acry-ya_new/img/top_img/acry-icon.png">
<link rel="stylesheet" type="text/css" href="/acry-ya_new/resource/lightbox.css" media="screen,tv" />
<link href="../css/newccs.css" rel="stylesheet" type="text/css">
<link href="../css/btn.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width = 100%,   user-scalable=yes" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache, no-store" />
<meta http-equiv="Expires" content="0">
<script type="text/javascript" charset="UTF-8" src="/acry-ya_new/resource/lightbox_plus.js"></script>
<script language="JavaScript" type="text/javascript" src="/js/jquery.js"></script>
<script language="JavaScript" type="text/javascript" src="/js/item_form.js"></script>
<script type="text/javascript" src="/js/haisou_ini.js"></script>
<script language="JavaScript" type="text/javascript" src="java/ita_common.js"></script>
<script language="JavaScript" type="text/javascript" src="java/definition_a.js"></script>
<script language="JavaScript" type="text/javascript" src="java/ita_semi.js"></script>
<script language="JavaScript" type="text/javascript" src="java/ita_calc.js"></script>
<script language="JavaScript" type="text/javascript" src="java/discount_display.js"></script>
<script language="JavaScript" type="text/javascript" src="java/ita_semiorder_global.js"></script>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
//-->
</script>
<meta http-equiv="Cache-control" content="max-age=7200">
<script>
  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');

  ga(\'create\', \'UA-3172569-1\', \'auto\');
  ga(\'send\', \'pageview\');

</script>

</head>
<body bgcolor="#f8f8ff" leftmargin="1" topmargin="1" marginwidth="0" marginheight="0" onload="Form_Reset();global_weight();Chg(0);">
<table width="765" border="0" align="center" cellpadding="0" cellspacing="0">
<tr>
  <td valign="top" bgcolor="#FFFFFF" align="center"><!-- #BeginLibraryItem "/Library/header1-spc2.lbi" --><link href="../css/newccs.css" rel="stylesheet" type="text/css">
<table width="765" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="100%" colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td background="../img/sheard_item/header02.jpg"><a href="/"><img src="../img/sheard_item/header01.jpg" alt="アクリ屋ドットコム" width="196" height="45" border="0"></a></td>
        <td width="546" height="45" align="right" background="../img/sheard_item/header02.jpg"><a href="/"><strong><font color="#FFFFFF" class="caption-12white" size="7">アクリル材料加工とアクリル製品の&quot;アクリ屋ドットコム&quot;</font></strong></a></td>
        <td background="../img/sheard_item/header02.jpg"><img src="../img/sheard_item/header03.jpg" width="23" height="45"></td>
        </tr>
          <tr>
	<td colspan="3">
	<script type="text/javascript" src="/cgibin/memberadmin/gadget.cgi"></script>
	<script type="text/javascript">
	function logout(){
	var returnURL = encodeURIComponent( location.href );
	location.href = \'/cgibin/memberadmin/member.cgi?mode=gadgetLogout&U=\' + returnURL;
	}
	function login(){
	var returnURL = encodeURIComponent( location.href );
	location.href = \'/cgibin/memberadmin/register.cgi?U=\' + returnURL;
	}
	</script>
	</td>
	</tr>
	</table>
	</td>
    </tr>
    <tr>
    <td height="21" colspan="2" align="center" bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td width="10">&nbsp;</td>
          <td align="center"><font size="1"><a href="/acry-ya_new/html/howtoorder_top/htm/howtoorder.htm" class="caption-10gray">ご購入ガイド</a></font></td>
          <td width="5" align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td width="40" align="center"><font size="1"><a href="/acry-ya_new/htm2/htm/situmon.html" class="caption-10gray">Q&amp;A</a></font></td>
          <td width="5" align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td align="center"><font size="1"><a href="/acry-ya_new/htm2/htm/itemlist.htm" class="caption-10gray">商品一覧</a></font></td>
          <td align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td align="center"><font size="1"><a href="/acry-ya_new/html/contact_top/htm/contact.htm" class="caption-10gray">お問い合わせ</a></font></td>
          <td width="5" align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td align="center"><font size="1"><a href="/acry-ya_new/html/example_top/htm/example.htm" class="caption-10gray">お客様活用事例</a></font></td>
          <td width="5" align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td align="center"><font size="1"><a href="/acry-ya_new/sitemap.html" class="caption-10gray">サイトマップ</a></font></td>
          <td width="5" align="center" class="caption-10gray"><font size="1">｜</font></td>
          <td align="center"><font size="1"><a href="/cgibin/cart-n/ex/cart.cgi" class="caption-10gray">カートを見る</a></font></td>
          <td width="5">&nbsp;</td>
          <td width="16%" align="right" valign="bottom" nowrap>
                <form action="http://www.frame-acry-ya.com/search-a.html" method="get" id="srch">
                  <input type="text" name="p" id="srchInput" size="15" maxlength="25">
                  <input type="image" name="search" src="/acry-ya_new/img/sheard_item/kensaku-orange.gif" border="0" width="40" height="19" alt="サイト検索" id="srchBtn">
                  <br>
                  <input type="hidden" id="fr" name="fr" value="cse">
                  <input type="hidden" id="ei" name="ei" value="Shift_JIS">
                  <input type="hidden" id="csid" name="csid" value="bnZLO3dcDrOqllfysUZ57LKkI8eGMEk-">
                  <input type="hidden" name="vs" value="www.acry-ya.com" id="yjInsite">
                </form>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table><!-- #EndLibraryItem --><table width="100%" border="0" cellspacing="0" cellpadding="4">
        <tr>
          <td align="left" valign="middle"><img src="../img/sheard_item/separate_cccccc560.gif" alt="" width="756" height="1"></td>
        </tr>
        <tr>
          <td align="left" valign="middle"><a href="/" class="caption-12gray"><u>トップページ</u></a>　<span class="caption-12gray">＞</span>　<a href="/acry-ya_new/html/diy_top/htm/diy.htm" class="caption-12green"><u>アクリルDIY（加工/材料/パイプ)</u></a><span class="caption-12gray">　＞　アクリル板加工＜セミオーダー＞</span></td>
        </tr>
        <tr>
          <td align="left" valign="middle"><img src="../img/sheard_item/separate_cccccc560.gif" alt="" width="756" height="1"></td>
        </tr>
        <tr>
          <td align="left" valign="middle"><!-- #BeginLibraryItem "/Library/zairyo-navi-2.lbi" -->
          <table width="763" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td><a href="../html/tokucyo/htm/tokucyo2.htm"><img src="../img/top_img/kakouhouhou165.jpg" alt="アクリル＆ポリカーボネート加工方法" width="165" height="35" border="0"></a></td>
              <td><a href="../html/diy/htm/zairyo-navi/zairyo-navi.html"><img src="../img/top_img/zairyo-navi_banner598x35.jpg" alt="アクリル＆ポリカーボネート材料選びナビゲーション" width="598" height="35" border="0"></a></td>
            </tr>
          </table>
          <!-- #EndLibraryItem --></td>
        </tr>
        <tr>
          <td align="left" valign="middle"><h1 class="h1_b">アクリル板加工＜セミオーダー＞</h1></td>
        </tr>
        </table>
<table width="750" border="0" cellspacing="0" cellpadding="3">
  <tr>
    <td width="57%" align="left"><img src="ita-img/sample.gif" alt="板カラー" width="400" height="100"></td>
    <td width="43%"><img src="ita-img/ita_img2.gif" alt="板加工" width="200" height="107"></td>
  </tr>
  <tr>
    <td height="40" colspan="2"><span class="title-11pt-gray">アクリル板の簡単見積・簡単オーダーページ。入力した加工内容を図面確認できます。</span></td>
  </tr>
</table>
<form method="post" action="/cgibin/cart-n/ex/cart.cgi" name="form_semiorder" id="form_semiorder" onsubmit="return false;">
  <table width="740"  border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center"><a name="mitumo1" id="mitumo1"></a>
            <script type="text/javascript">document.write(\'<input type="hidden" name="url" id="url" value="\' + location.href + \'" />\');</script>
            <input type="hidden" name="plate_type" id="plate_type" value="a">
            <input type="hidden" name="itemno" id="itemno">
            <input name="itemna" type="hidden" id="itemna">
            <input type="hidden" name="opt1" id="opt1">
            <input type="hidden" name="opt2" id="opt2">
            <input type="hidden" name="opt3" id="opt3">
            <input type="hidden" name="opt4" id="opt4">
            <input type="hidden" name="opt5" id="opt5">
            <input type="hidden" name="opt6" id="opt6">
            <input type="hidden" name="opt7" id="opt7">
            <input type="hidden" name="opt8" id="opt8">
            <input type="hidden" name="opt9" id="opt9">
            <input type="hidden" name="opt10" id="opt10">
            <input type="hidden" name="opt11" id="opt11">
            <input type="hidden" name="opt12" id="opt12">
            <input type="hidden" name="opt13" id="opt13">
            <input type="hidden" name="opt14" id="opt14">
            <input type="hidden" name="opt15" id="opt15">
            <input type="hidden" name="opt16" id="opt16">
            <input type="hidden" name="opt17" id="opt17">
            <input type="hidden" name="opt18" id="opt18">
            <input type="hidden" name="opt19" id="opt19">
            <input type="hidden" name="opt20" id="opt20">
            <input type="hidden" name="opt21" id="opt21">
            <input type="hidden" name="opt22" id="opt22">
            <input name="suryo" type="hidden" id="suryo" value="">
            <input type="hidden" name="sipri" id="sipri" value="::0">

            <script type="text/javascript">document.write(\'<input type="hidden" name="url" id="url" value="\' + location.href + \'" />\');</script>
            <input name="itemno" type="hidden" id="itemno" value="TBH">
            <input name="itemna" type="hidden" id="itemna" value="">
            <input name="suryo" type="hidden" id="suryo" value="">
            <input type="hidden" name ="sipri" id="sipri" value="::0">
 
            <script type="text/javascript">document.write(\'<input type="hidden" name="url" id="url" value="\' + location.href + \'" />\');</script>
            <input name="itemno" type="hidden" id="itemno" value="EPH">
            <input name="itemna" type="hidden" id="itemna" value="">
            <input name="suryo" type="hidden" id="suryo" value="">
            <input type="hidden" name ="sipri" id="sipri" value="::0">
           </td>
        </tr>
        <tr>
          <td align="center">&nbsp;</td>
        </tr>
        <tr>
          <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="30" align="left" valign="middle"><h2 class="h2_g">見積・注文　― アクリル板加工の価格と図面確認 ―</h2></td>
            </tr>
            <tr>
              <td align="center" valign="top"><img src="../img/sheard_item/co_line560.gif" alt="" width="740" height="1"></td>
              </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                <tr>
                  <td width="85%" class="title-12pt-green2">&nbsp;</td>
                  <td width="15%" align="right"><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83A%83N%83%8A%83%8B%94%C2" target="_blank"><img src="../img/sheard_item/button-q-and-a.gif" alt="Q＆A" width="106" height="17" border="0"></a></td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><a href="/form_folder/html_form/htm/full-order_s.htm?order_ita_form" target="_blank"><img src="../img/sheard_item/zumen-banner740.gif" alt="問合せ" width="740" height="80" border="0"></a></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" valign="top"><table width="100%" border="0" cellspacing="1" cellpadding="2" bgcolor="#CCCCCC">
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step1.gif" alt="no1" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">お届け先を選択</h2></td>
                    </tr>
                  </table></td>
                </tr>
                <tr>
                  <td height="80" align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td class="caption-12gray">お届け先が個人のお客様は、配送の都合上、縦＋横＝2350より大きいサイズは販売できません。</td>
                      </tr>
                    </table></td>
                  <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center"><span class="caption-12gray">
                        <select name="souhu_info" size="1" id="souhu_info" onChange="Chg(0)">
                          <option value="個人">個人宅</option>
                          <option value="法人">法人宛</option>
                          </select>
                        </span></td>
                      </tr>
                    </table></td>
                </tr>
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step2.gif" alt="no2" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">アクリル板の色を選択</h2></td>
                      </tr>
                    </table></td>
                </tr>
                <tr bgcolor="#CCCCCC">
                  <td width="65%" align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="3%" align="left" valign="top">■</td>
                          <td width="97%" align="left" valign="top">板の製法「押出/キャスト」は <a href="ita-img/seiho-caution.jpg" rel="lightbox"><u class="caption-12orange">アクリル板製法(色別)</u></a> 参照、<br>
                            更に詳しい情報は <a href="../html/tokucyo/htm/tokucyo.htm" target="_blank"><u class="caption-12orange">アクリルの種類（製法上の違い）</u></a> 参照。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">■</td>
                          <td align="left" valign="top">「ノングレア」や「耐擦傷」などの特殊な板の特長は<a href="caution-sozai.html" target="_blank"><u class="caption-12orange">特殊アクリル板の特性・注意
</u></a> 参照。</td>
                          </tr>
                        <tr>
                          <td colspan="2" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                            <tr>
                              <td width="23%" align="left"><a href="../img/color_sample/color.htm" target="_blank"><img src="../img/sheard_item/button-iro-mihon.gif" alt="色見本" width="106" height="17" border="0"></a></td>
                              <td width="23%" align="left"><input type="button" value="無料サンプル ご請求" class="sample_order" onclick="window.open(\'https://pro.form-mailer.jp/fms/0205d50535194\')"></td>
                              <td width="54%" align="left">&nbsp;</td>
                              </tr>
                            </table></td>
                        </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                          </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">「ミラー」は反りや歪みがあります。注意事項は <a href="/acry-ya_new/html/diy/htm/mirror.htm" target="_blank"><u class="caption-12orange">アクリルミラー使用上のご注意</u></a> 参照。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td align="left" valign="top">「カーマイン」「オレンジ」はサイズにより色味が若干異なる場合があります。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td align="left" valign="top">同じ色でも厚みによって色味が若干異なる場合があります。</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top">【変更履歴】</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">□</td>
                          <td align="left" valign="top">クリアーノングレア（低反射）を <a href="/acry-ya_new/html/diy/htm/non-glare.htm" target="_blank"><u class="caption-12orange">No.1 から 76300</u></a> に変更（2016/8/31）</td>
                          </tr>
                        <tr>
                          <td width="2%" align="left" valign="top">□</td>
                          <td width="98%" align="left" valign="top">「オレンジ」「スカイブルー」「レモン」の色合いを変更（2014/12/20）</td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td width="35%" align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><select name="iro" size="1" id="iro" style="font-size: 9pt" onChange="Chg(0)">
                        <option value="クリアー" selected>クリアー</option>
                        <option value="ブラック">ブラック</option>
                        <option value="ホワイト">ホワイト</option>
                        <option value="グレースモーク">グレースモーク</option>
                        <option value="ブラウンスモーク">ブラウンスモーク</option>
                        <option value="クリアー両面マット">クリアー両面マット</option>
                        <option value="ブラック両面マット">ブラック両面マット</option>
                        <option value="ホワイト両面マット">ホワイト両面マット</option>
                        <option value="オパール">オパール</option>
                        <option value="ガラスエッジ">ガラスエッジ</option>
                        <option value="ピンクエッジ">ピンクエッジ</option>
                        <option value="ブルーエッジ">ブルーエッジ</option>
                        <option value="蛍光ピンクエッジ">蛍光ピンクエッジ</option>
                        <option value="蛍光オレンジエッジ">蛍光オレンジエッジ</option>
                        <option value="蛍光グリーンエッジ">蛍光グリーンエッジ</option>
                        <option value="蛍光バイオレットエッジ">蛍光バイオレットエッジ</option>
                        <option value="カーマイン">カーマイン</option>
                        <option value="オレンジ">オレンジ</option>
                        <option value="スカイブルー">スカイブルー</option>
                        <option value="レモン">レモン</option>
                        <option value="ミラー">ミラー</option>
                        <option value="ハーフミラー(MRH001T30)">ハーフミラー(MRH001T30)</option>
                        <option value="UVカットクリアー">UVカットクリアー</option>
                        <option value="集光ピンク">集光ピンク</option>
                        <option value="集光オレンジ">集光オレンジ</option>
                        <option value="集光グリーン">集光グリーン</option>
                        <option value="集光レッド">集光レッド</option>
                        <option value="集光バイオレット">集光バイオレット</option>
                        <option value="クリアー耐擦傷(両面)MR">クリアー耐擦傷(両面)MR</option>
                        <option value="クリアーノングレア(片面)76300">クリアーノングレア(片面)76300</option>
                        <option value="クリアー制電(両面)SC">クリアー制電(両面)SC</option>
                        </select></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><img src="ita_color_a/clear.jpg" alt="板色" name="iro_img" width="140" height="105" border="0" align="absmiddle" id="iro_img"></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step3.gif" alt="no3" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">厚みを選択・サイズを入力</h2></td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="3%" align="center" valign="top">■</td>
                          <td width="97%" align="left" valign="top">色により厚みが異なります。選択できる厚みが取り扱いの厚みになります。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">■</td>
                          <td align="left" valign="top">板厚の寸法許容公差は <a href="../html/tokucyo/htm/tokucyo4.htm#acry_ita" target="_blank"><u class="caption-12orange">アクリル板の板厚許容公差</u></a> 参照。</td>
                          </tr>
                        <tr>
                          <td align="center" valign="top">■</td>
                          <td align="left" valign="top">最小サイズは「横・縦共に10mm」になります。</td>
                          </tr>
                        <tr>
                          <td align="center" valign="top">■</td>
                          <td align="left" valign="top">「1mm単位」で入力でき、小数点以下は「0.5ミリ単位」で入力できます。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">■</td>
                          <td align="left" valign="top"> 加工の寸法許容公差は <a href="../html/tokucyo/htm/tokucyo4.htm#kakou-kosa" target="_blank"><u class="caption-12orange">寸法公差表</u></a> 参照。</td>
                          </tr>
                        <tr>
                          <td align="center" valign="top">■</td>
                          <td align="left" valign="top">お得な押出材の規格サイズ「450x300mm ～ 2000x1000mm」は <a href="../html/diy/htm/teijakuzai_k.htm" target="_blank"><u class="caption-12orange">アクリル押出板＜フリーカット＞</u></a> をご利用下さい。</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%"  border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                        <tr align="center" bgcolor="#FFFFFF">
                          <td width="70%" height="25" bgcolor="#DADADA">色別の板の最大サイズ</td>
                          <td width="15%" bgcolor="#DADADA">横 (mm)</td>
                          <td width="15%" bgcolor="#DADADA">縦 (mm)</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td>クリアー1mm/集光全色</td>
                          <td>1000</td>
                          <td>1000</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td>ハーフミラー/クリアー耐擦傷</td>
                          <td>1300</td>
                          <td>1100</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td>スカイブルー/レモン/ハーフミラー/クリアー耐擦傷を除く<br>
                            横・縦共に1000mm以上の全色</td>
                          <td>1300</td>
                          <td>1100</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td>マット全色/エッジ全色/クリアーノングレア</td>
                          <td>1830</td>
                          <td>915</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td><p>上記以外の全色（※クリア・ブラック・ホワイトほか）</p></td>
                          <td>2000</td>
                          <td>1000</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                        </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">板のサイズが大きい場合、板に反りがでます。</td>
                        </tr>
                        <tr>
                          <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td align="left" valign="top">板の上に荷重が掛かる場合、<a href="../html/tokucyo/htm/tokucyo4.htm#tawami" target="_blank"><span class="caption-12orange"><u>たわみ量計算</u></span></a>（推奨板厚計算）をご確認下さい。</td>
                        </tr>
                        </table></td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                  <td width="15%"><a href="../img/sheard_item/yamato_caution.gif" rel="lightbox"><img src="../img/sheard_item/dan2.gif" alt="大型便" width="65" height="22" border="0"></a></td>
                                  <td width="85%"><span class="caption-12orange">【配送に関する注意事項】</span></td>
                                </tr>
                              </tbody>
                          </table></td>
                        </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">「縦＋横＝1350mm以上」の場合、代金引換と到着時間の指定が利用できません。</td>
                        </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center"><img src="ita-img/image_size.jpg" alt="板サイズ" width="250" height="180" border="0"></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="33%" align="right"><strong>厚み</strong></td>
                          <td width="34%" align="center"><select name="atu" size="1" id="atu" style="font-size: 9pt" onChange="Chg(1)">
                            </select></td>
                          <td width="33%" align="left">mm</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray" >
                        <tr>
                          <td colspan="3" align="center"><!-- #BeginLibraryItem "/Library/sunpo-mm2.lbi" -->
                            <link href="../css/newccs.css" rel="stylesheet" type="text/css">
                            <font size="2" class="caption-10gray">※寸法入力は全てmm(ミリ)単位です</font>　<a href="javascript:;" onClick="MM_openBrWindow(\'../img/sheard_item/caution-mm.gif\',\'\',\'width=420,height=420\')"><u class="caption-10orange">詳細</u></a><!-- #EndLibraryItem --></td>
                          </tr>
                        <tr>
                          <td width="33%" height="30" align="right"><strong>横 (長辺)</strong></td>
                          <td width="34%" align="center"><input name="yoko" type="text" id="yoko" style="text-align:center;" size="6" maxlength="6" onChange="Chg(0);global_weight();"></td>
                          <td width="33%" align="left">mm</td>
                          </tr>
                        <tr>
                          <td height="30" align="right"><strong>縦 (短辺)</strong></td>
                          <td align="center"><input name="tate" type="text" id="tate" style="text-align:center;" size="6" maxlength="6" onChange="Chg(0);global_weight();"></td>
                          <td align="left">mm</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="33%" align="right">重量 約</td>
                          <td width="34%" align="center"><input name="juryo" type="text" id="juryo" style="background-color: #EFEFEF; border:0; text-align: center; color:#333333;" tabindex="-1" size="12" maxlength="12" readonly></td>
                          <td width="33%" align="left">&nbsp;</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step4.gif" alt="no4" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">切断端面の仕上を選択</h2></td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td><table width="100%"  border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="25" valign="middle" bgcolor="#DADADA"><strong>カットのみ</strong></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td width="33%" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                            <tr>
                              <td width="33%" align="center" valign="top"><a href="ita-img/t-cut500.jpg" rel="lightbox"><img src="ita-img/t-cut185.jpg" alt="カットのみ" width="185" height="76" border="0"></a></td>
                              <td width="67%" align="center"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                <tr>
                                  <td width="3%" align="left" valign="top">■</td>
                                  <td width="97%" align="left" valign="top">電動ノコギリで切断したままの状態</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">角が鋭利でギザギザ</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">手で触れる用途に不向き</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">糸面取り無し</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        <tr bgcolor="#FFFFFF">
                          <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>細目仕上</strong></td>
                          </tr>
                        <tr bgcolor="#FFFFFF">
                          <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                            <tr>
                              <td width="33%" align="center" valign="top"><a href="ita-img/t-saime500.jpg" rel="lightbox"><img src="ita-img/t-saime185.jpg" alt="細目仕上" width="185" height="76" border="0"></a></td>
                              <td width="67%" align="center"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                <tr>
                                  <td width="3%" align="left" valign="top">■</td>
                                  <td width="97%" align="left" valign="top">切断面を滑らかにした状態</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">刃物跡のある艶消し調</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">糸面取り済み</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                  <td align="left" valign="top">「横＋縦＝100mm未満」は糸面取り無し</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        <tr bgcolor="#FFFFFF">
                          <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>磨き仕上</strong></td>
                          </tr>
                        <tr bgcolor="#FFFFFF">
                          <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                            <tr>
                              <td width="33%" align="center" valign="top"><a href="ita-img/t-migaki500.jpg" rel="lightbox"><img src="ita-img/t-migaki185.jpg" alt="磨き仕上" width="185" height="76" border="0"></a></td>
                              <td width="67%" align="center"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                <tr>
                                  <td width="3%" align="left" valign="top">■</td>
                                  <td width="97%" align="left" valign="top">切断面を平滑で光沢にした状態</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">接着面や装飾向き</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">「横・縦共に20mm以上」から選択可能</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                  <td align="left" valign="top">厚み1mmのみ「横・縦共に30mm以上」</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">厚み8mm以上は若干刃物跡あり</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top">■</td>
                                  <td align="left" valign="top">糸面取り済み</td>
                                  </tr>
                                <tr>
                                  <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                  <td align="left" valign="top">「横＋縦＝100mm未満」は糸面取り無し</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center"><img src="ita-img/image_tanmen.jpg" alt="切断端面" width="250" height="180" border="0"></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><select name="fraise" size="1" id="fraise" style="font-size: 9pt" onChange="Chg(0)">
                        <option value="カットのみ" selected>カットのみ</option>
                        <option value="細目仕上">細目仕上</option>
                        <option value="磨き仕上">磨き仕上</option>
                        </select></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step5next.gif" alt="no5" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">数量を入力・金額を確認</h2></td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2"><table width="100%"  border="0" cellpadding="4" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                            <tr align="center" bgcolor="#FFFFFF">
                              <td bgcolor="#DADADA">割引率の目安</td>
                              </tr>
                            </table></td>
                          </tr>
                        <tr>
                          <td width="50%"><table width="100%"  border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                            <tr align="center" bgcolor="#FFFFFF">
                              <td width="22%" height="23" bgcolor="#DADADA">数量</td>
                              <td width="39%" bgcolor="#DADADA">単価</td>
                              <td width="39%" bgcolor="#DADADA">割引率</td>
                              </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">1</td>
                              <td><input name="pr1" type="text" id="pr1" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis1" type="text" id="dis1" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">2</td>
                              <td><input name="pr2" type="text" id="pr2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis2" type="text" id="dis2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">3</td>
                              <td><input name="pr3" type="text" id="pr3" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis3" type="text" id="dis3" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">5</td>
                              <td><input name="pr5" type="text" id="pr5" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis5" type="text" id="dis5" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">10</td>
                              <td><input name="pr10" type="text" id="pr10" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis10" type="text" id="dis10" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                            </tr>
                            </table></td>
                          <td width="50%"><table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                            <tr align="center" bgcolor="#FFFFFF">
                              <td width="22%" height="23" bgcolor="#DADADA">数量</td>
                              <td width="39%" bgcolor="#DADADA">単価</td>
                              <td width="39%" bgcolor="#DADADA">割引率</td>
                            </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">30</td>
                              <td><input name="pr30" type="text" id="pr30" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis30" type="text" id="dis30" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                            </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">50</td>
                              <td><input name="pr50" type="text" id="pr50" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis50" type="text" id="dis50" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                            </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">100</td>
                              <td><input name="pr100" type="text" id="pr100" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis100" type="text" id="dis100" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                            </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">400</td>
                              <td><input name="pr400" type="text" id="pr400" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                              <td><input name="dis400" type="text" id="dis400" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                            </tr>
                            <tr align="center" bgcolor="#FFFFFF">
                              <td height="23" bgcolor="#DADADA">401～</td>
                              <td colspan="2"><a href="../html/full_order/htm/full_order.html?order_ita_form" target="_blank"><u class="caption-12orange">別途問い合わせ</u></a></td>
                              </tr>
                            </table></td>
                          </tr>
                        <tr>
                          <td colspan="2"><table width="100%" border="0" cellpadding="2" cellspacing="0">
                            <tr>
                              <td width="23%" align="left"><a href="javascript:;" onClick="MM_openBrWindow(\'/acry-ya_new/html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou\',\'\',\'\')"><img src="../img/sheard_item/button-konpou-souryo5000.gif" alt="梱包送料" width="106" height="17" border="0"></a></td>
                              <td width="23%" align="left"><a href="javascript:;" onClick="MM_openBrWindow(\'caution.html\',\'\',\'width=505,height=450\')"><img src="../img/sheard_item/button-mitumori-fudou.gif" alt="見積が動かない場合" width="106" height="17" border="0"></a></td>
                              <td width="54%" align="left">&nbsp;</td>
                              </tr>
                            </table></td>
                          </tr>
                        <tr>
                          <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                          <td colspan="2"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                            <tr>
                              <td width="98%" align="left" valign="top">【価格改定】　2017/6/16</td>
                              </tr>
                            <tr>
                              <td align="left" valign="top">【価格改定】　2018/10/10</td>
                            </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="caption-12gray">
                    <tr>
                      <td width="22%" align="right">&nbsp;</td>
                      <td width="78%" align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="right"><strong>数量</strong></td>
                      <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="33%">&nbsp;</td>
                          <td width="34%" align="center"><input name="suu" type="text" id="suu" style="text-align:center " onChange="Chg(0);global_weight();" size="4" maxlength="3"></td>
                          <td width="33%" align="left" class="caption-12gray"> 枚</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center"><img src="../img/sheard_item/mitumori-button2.gif" alt="見積計算" width="109" height="21" onClick="Chg()"></td>
                    </tr>
                    <tr>
                      <td height="30" align="right">単価</td>
                      <td align="center"><input name="tanka" type="text" id="tanka" style="background-color:#EFEFEF; border:0; text-align: center; color:#333333; font-weight:bold;" tabindex="-1" value="0" size="22" readonly></td>
                    </tr>
                    <tr>
                      <td height="30" align="right">合計</td>
                      <td align="center"><input name="goukei" type="text" id="goukei" style="background-color: #EFEFEF; border:0; text-align: center; color:#333333; font-weight:bold;" tabindex="-1" value="0" size="22" readonly></td>
                      </tr>
                    <tr>
                      <td height="30" align="right">割引率</td>
                      <td align="center"><input name="disp_dis" type="text" id="disp_dis" style="background-color: #EFEFEF; border:0; text-align: center; color:#FF0000; font-weight:bold;" tabindex="-1" value="0" size="22" readonly></td>
                      </tr>
                    <tr>
                      <td colspan="2" align="right"><table width="100%" border="0" cellpadding="2" cellspacing="1" id="global">
                        <tr>
                          <td align="center"><a href="../img/sheard_item/yamato_caution.gif" rel="lightbox"><img src="../img/sheard_item/dan1.gif" alt="大型便" width="65" height="22" border="0"></a></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td colspan="2" align="right"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="haisou">
                        <tr>
                          <td align="center" class="caption-12gray"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="kojin_deliver">
                            <tr>
                              <td align="center"><table width="100%" border="0" cellpadding="1" cellspacing="1">
                                <tr>
                                  <td width="50%" align="center"><a href="../img/sheard_item/kojin_caution.gif" rel="lightbox"><img src="../img/sheard_item/kojin_deliver.gif" alt="個人宛送料" width="60" height="33" border="0"></a></td>
                                  <td width="50%" rowspan="2"><input name="haisou_cost" type="text"  class="hyoji_haisou_semi" id="haisou_cost" tabindex="-1" onChange="Chg(0)" size="20" maxlength="20"></td>
                                  </tr>
                                <tr>
                                  <td align="center"><a href="../html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou" target="_blank"><u class="caption-10orange">個人宅配送料とは</u></a></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" id="area_deliver">
                              <tr>
                                <td align="center"><table width="100%" border="0" cellspacing="1" cellpadding="1">
                                  <tr>
                                    <td width="50%" align="center"><a href="../img/sheard_item/enpo_caution.gif" rel="lightbox"><img src="../img/sheard_item/enpo_deliver.gif" alt="遠方送料" width="60" height="33" border="0"></a></td>
                                    <td width="0%" rowspan="2"><input name="area_cost" type="text"  class="hyoji_haisou_semi" id="area_cost" tabindex="-1" onChange="Chg(0)" size="20" maxlength="20"></td>
                                    </tr>
                                  <tr>
                                    <td align="center"><a href="../html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou" target="_blank"><u class="caption-10orange">遠方配送料とは</u></a></td>
                                    </tr>
                                  </table></td>
                                </tr>
                              </table></td>
                          </tr>
                      </table></td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td height="30" align="center"><img src="../img/sheard_item/order-button-clear.gif" alt="オールクリア" width="109" height="21" border="0" onClick="Form_Reset();Chg(1);"></td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                <tr bgcolor="#CCCCCC">
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step6-end.gif" alt="no6" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">図面を確認・カートに入れる</h2></td>
                      </tr>
                    </table></td>
                </tr>
                <tr bgcolor="#CCCCCC">
                  <td height="60" align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="3%" align="left" valign="top">■</td>
                          <td width="97%" align="left" valign="top">[2D図面確認]ボタンをクリックすると、入力した内容を図面で確認できます。図面は新規ウィンドウ（または新規タブ）で表示されます。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">■</td>
                          <td align="left" valign="top">加工内容が異なる板をご注文の場合は、[カートに入れる]ボタンをクリックして一度ショッピングカートに入れた後、再度別の加工内容をご入力の上、[カートに入れる]ボタンをクリックしてショッピングカートに追加して下さい。</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                          </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">加工がない場合は、右の[カートに入れる]ボタンをクリックして下さい。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td align="left" valign="top">加工がある場合は、<strong>STEP.6</strong> を入力した後、<strong>STEP.8</strong> の[カートに入れる]ボタンをクリックして下さい。</td>
                          </tr>
                        </table></td>
                      </tr>
                    </table>
                      <script type="text/javascript" src="../java/txt_o.js"></script><table width="100%"  border="0" cellpadding="2" cellspacing="1" bgcolor="#999999" class="caption-10gray-hight">
                      <tr bgcolor="#EFEFEF">
                        <td width="40%" align="center" valign="middle" bgcolor="#EFEFEF">出荷目安（切断端面の仕上まで）</td>
                        <td colspan="2" rowspan="2" align="left" valign="middle" bgcolor="#FFFFFF"><span class="caption-10gray">出荷目安は、正式注文後、土日祭日と弊社休業日を除いた出荷までの日数目安です。
数がまとまる場合は日数が異なります。<a href="javascript:;" onclick="MM_openBrWindow(\'/acry-ya_new/htm2/htm/nouki-caution.html\',\'\',\'width=650,height=620\')"><u class="caption-10orange">詳細</u></a><br>
（万が一の場合には、予定通りに出荷出来なくなる場合があります）</span></td>
                      </tr>
                      <tr bgcolor="#EFEFEF">
                        <td align="center" valign="middle" bgcolor="#EFEFEF"><iframe name="uri" SRC="/cgibin/listview/list33.cgi?action=search&DATA=ita_semiorder" WIDTH="120" HEIGHT="13" SCROLLING="no" FRAMEBORDER="0" BORDER="0"></iframe></td>
                      </tr>
                      </table></td>
                  <td height="60" align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><input type="button" value="2D図面確認" class="zumenn" onclick="h_graf(1)"></td>
                      </tr>
                    <tr>
                      <td align="center"><table width="100%" border="0" cellpadding="3" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="60%" align="right"><strong>確認チェック</strong></td>
                          <td width="40%" align="left"><input name="drawing_check2" type="checkbox" id="drawing_check2" value="1" disabled>
                            <input name="zumen_kakunin2" type="hidden" id="zumen_kakunin2"></td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><input type="button" class="cart" onclick="Check(1)" value="カートに入れる"></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                    </tr>
                    </table></td>
                </tr>
                </table></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td height="20" align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                <tbody>
                  <tr>
                    <td width="53%" align="right" class="title-11pt-gray">追加加工を入力する場合は</td>
                    <td width="7%"><span class="title-12pt-white"><img src="../img/sheard_item/step7.gif" alt="no7へ" width="50" height="20" border="0"></span></td>
                    <td width="40%" align="left" class="title-11pt-gray">へ進む</td>
                  </tr>
                </tbody>
              </table></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><img src="../img/sheard_item/scroll.jpg" width="80" height="30" alt=""/></td>
            </tr>
            <tr>
              <td height="40" align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellspacing="1" cellpadding="2" bgcolor="#CCCCCC">
                <tbody>
                  <tr>
                    <td align="center" valign="middle"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="9%" align="center"><span class="title-12pt-white"><img src="../img/sheard_item/step7.gif" alt="no7" width="50" height="20" border="0"></span></td>
                        <td width="91%"><h2 class="h2_b12">アクリル板の加工を入力</h2></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><table width="100%"  border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                      <tr>
                        <td align="left" valign="top">■</td>
                        <td width="48%" align="left" valign="top">「ミラー」「ノングレア」は表側からご指定下さい。</td>
                        <td width="2%" align="left" valign="top">■</td>
                        <td width="48%" align="left" valign="top"> 加工の寸法許容公差は <a href="../html/tokucyo/htm/tokucyo4.htm#kakou-kosa" target="_blank"><u class="caption-12orange">寸法公差表</u></a> 参照。</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">■</td>
                        <td align="left" valign="top">円形状は <a href="../html/diy/htm/enban_semi_order.htm"><u class="caption-12orange">アクリル円板＜セミオーダー＞</u></a> をご利用下さい。</td>
                        <td align="left" valign="top">■</td>
                        <td align="left" valign="top">加工が複雑な場合は <a href="../html/full_order/htm/full_order.html?order_ita_form"><u class="caption-12orange">フルオーダー</u></a> からお問い合わせ下さい。</td>
                      </tr>
                      <tr>
                        <td colspan="4" align="left" valign="top">&nbsp;</td>
                      </tr>
                      <tr>
                        <td width="2%" align="left" valign="top">■</td>
                        <td colspan="3" align="left" valign="top">各加工の詳細を入力した後、[2D図面表示][3D形状表示]ボタンをクリックすると、入力した内容が確認できます。</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                        <td colspan="3" align="left" valign="top">3D形状は一部正確に表示できない場合があります。選択した色は反映されません。</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                        <td colspan="3" align="left" valign="top">ブラウザによっては[2D図面表示][3D形状表示]機能が利用できません。その場合は <a href="../html/full_order/htm/full_order.html?order_ita_form"><u class="caption-12orange">フルオーダー</u></a> からお問い合わせ下さい。</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">&nbsp;</td>
                        <td align="left" valign="top"><table width="100%" border="0" cellpadding="2" cellspacing="0">
                          <tbody>
                            <tr>
                              <td width="19%"><input type="button" value="2D図面表示" class="zumenn"></td>
                              <td width="19%"><input type="button" value="3D形状表示" class="d_zumenn"></td>
                              <td width="62%">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table></td>
                        <td align="left" valign="top">&nbsp;</td>
                        <td align="left" valign="top">&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="4" align="left" valign="top">&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="4" align="left" valign="top" class="caption-12orange">【注意事項】</td>
                      </tr>
                      <tr>
                        <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                        <td align="left" valign="top">加工して切り取られた部分（端材）は同梱できません。</td>
                        <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                        <td align="left" valign="top">加工によっては注文後にお断りさせて頂く場合があります。<br>
                          <a href="ita-img/itakako-ng600x300.gif" rel="lightbox"><u class="caption-12orange">ご注文をお断りさせていただく加工、追加料金が掛かる加工</u></a>。</td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="9%" align="center"><img src="../img/sheard_item/step7-1.gif" alt="no7.1" width="50" height="20" border="0"></td>
                        <td width="91%"><h2 class="h2_b12">角の処理「丸め（R)／斜めカット」を入力</h2></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="49%" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="20%">&nbsp;</td>
                                <td width="70%" height="189" align="center" valign="middle"><a href="ita-img/image_kadomaru_800.jpg" rel="lightbox"><img src="ita-img/image_kadomaru_250.jpg" alt="角丸め加工" width="250" height="188" border="0"></a></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="3" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="20%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                        </tr>
                                      <tr>
                                        <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                        </tr>
                                      <tr>
                                        <td height="19" align="center" valign="middle"><input name="tate_r" type="text" id="tate_r" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                        </tr>
                                      <tr>
                                        <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                        </tr>
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                        </tr>
                                      </table></td>
                                    <td width="70%" align="center" valign="middle"><img src="ita-img/image_kadomaru_shitei.gif" alt="角丸め指定" width="250" height="170" border="0"></td>
                                    <td width="10%">&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_r" type="text" id="yoko_r" style="background-color: #ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td align="center" valign="middle"><a href="ita-img/image_kadomaru_shitei_example.jpg" rel="lightbox">
                                      <input type="button" class="kakou" value="丸め(R) 入力例">
                                      </a></td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  </table></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" >
                              <tr>
                                <td colspan="2" align="right"><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                                  <tr>
                                    <td width="11%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>A D<br>
                                      B C</strong></td>
                                    <td width="89%" height="25" bgcolor="#EFEFEF"><table width="100%"  border="0" cellpadding="2" cellspacing="0">
                                      <tr>
                                        <td width="77%" align="center" class="caption-12gray"><strong>半径</strong>
                                          <input name="kado_r_all" type="text" id="kado_r_all" style="text-align:center" size="5" maxlength="4">
                                          mm</td>
                                        <td width="23%" align="right"><input type="button" value="一括設定" onClick="all_input(0);Chg(0)"></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>A</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><strong>半径</strong>
                                      <input name="kado_r_a" type="text" id="kado_r_a" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                      mm</td>
                                  </tr>
                                </table></td>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>D</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><strong>半径</strong>
                                      <input name="kado_r_d" type="text" id="kado_r_d" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>B</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><strong>半径</strong>
                                      <input name="kado_r_b" type="text" id="kado_r_b" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                      mm</td>
                                  </tr>
                                </table></td>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>C</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><strong>半径</strong>
                                      <input name="kado_r_c" type="text" id="kado_r_c" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                              <tr>
                                <td width="19%" align="left" valign="top"><input type="button" value="2D図面表示" class="zumenn" onclick="Check(2)"></td>
                                <td width="19%" align="left" valign="top"><input type="button" value="3D形状表示" class="d_zumenn" onclick="h_graf3d()"></td>
                                <td width="62%" align="right" valign="top"><img src="../img/sheard_item/order-button-clear_s.gif" alt="クリア" width="54" height="21" onclick="r_clear()"></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                              <tr>
                                <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                              </tr>
                              <tr>
                                <td width="4%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td width="96%" align="left" valign="top">半径10mm以下は「3mm/5mm」のみ指定できます。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">半径の最大は「550mm」になります。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">切断端面の処理で選択した仕上と同様になります。</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                        <td width="2%" align="center"><img src="../img/sheard_item/separate_vertical_cccccc50.jpg" width="1" height="780"></td>
                        <td width="49%" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="20%">&nbsp;</td>
                                <td width="70%" height="189" align="center" valign="middle"><a href="ita-img/image_kadonaname_800.jpg" rel="lightbox"><img src="ita-img/image_kadonaname_250.jpg" alt="角斜めカット" width="250" height="188" border="0"></a></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="3" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="20%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                        </tr>
                                      <tr>
                                        <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                        </tr>
                                      <tr>
                                        <td height="19" align="center" valign="middle"><input name="tate_c" type="text" id="tate_c" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" tabindex="-1" size="6" maxlength="6"></td>
                                        </tr>
                                      <tr>
                                        <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                        </tr>
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                        </tr>
                                      </table></td>
                                    <td width="70%" align="center" valign="middle"><img src="ita-img/image_kadonaname_shitei.gif" alt="角斜めカット指定" width="250" height="170" border="0"></td>
                                    <td width="10%">&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_c" type="text" id="yoko_c" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" tabindex="-1" size="6" maxlength="6"></td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td align="center" valign="middle"><a href="ita-img/image_kadonaname_shitei_example.jpg" rel="lightbox">
                                      <input type="button" class="kakou" value="斜めカット 入力例">
                                      </a></td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    </tr>
                                  </table></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" >
                              <tr>
                                <td colspan="2" align="right"><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                                  <tr>
                                    <td width="11%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>A D<br>
                                      B C</strong></td>
                                    <td width="89%" height="25" bgcolor="#EFEFEF"><table width="100%"  border="0" cellpadding="2" cellspacing="0">
                                      <tr>
                                        <td width="38%" align="center" class="caption-12gray"><strong>X</strong>
                                          <input name="cut_x_all" type="text" id="cut_x_all" size="5" maxlength="4" style="text-align:center">
                                          mm</td>
                                        <td width="2%" align="right" class="caption-12gray">&nbsp;</td>
                                        <td width="38%" align="center" class="caption-12gray"><strong>Y</strong>
                                          <input name="cut_y_all" type="text" id="cut_y_all" size="5" maxlength="4" style="text-align:center">
                                          mm</td>
                                        <td width="22%" align="right"><input type="button" value="一括設定" onClick="all_input(1);Chg(0)"></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>A</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td align="center"><strong>X</strong>
                                          <input name="cut_x_a" type="text" id="cut_x_a" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                      <tr>
                                        <td align="center"><strong>Y</strong>
                                          <input name="cut_y_a" type="text" id="cut_y_a" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>D</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td align="center"><strong>X</strong>
                                          <input name="cut_x_d" type="text" id="cut_x_d" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                      <tr>
                                        <td align="center"><strong>Y</strong>
                                          <input name="cut_y_d" type="text" id="cut_y_d" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>B</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td align="center"><strong>X</strong>
                                          <input name="cut_x_b" type="text" id="cut_x_b" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                      <tr>
                                        <td align="center"><strong>Y</strong>
                                          <input name="cut_y_b" type="text" id="cut_y_b" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                                <td><table width="100%"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                                  <tr bgcolor="#FFFFFF">
                                    <td width="22%" height="60" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>C</strong></td>
                                    <td width="78%" align="center" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td align="center"><strong>X</strong>
                                          <input name="cut_x_c" type="text" id="cut_x_c" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                      <tr>
                                        <td align="center"><strong>Y</strong>
                                          <input name="cut_y_c" type="text" id="cut_y_c" style="text-align:center" onChange="Chg(0)" size="5" maxlength="5">
                                          mm</td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                              <tr>
                                <td width="19%" align="left" valign="top"><input type="button" value="2D図面表示" class="zumenn" onclick="Check(2)"></td>
                                <td width="19%" align="left" valign="top"><input type="button" value="3D形状表示" class="d_zumenn" onclick="h_graf3d()"></td>
                                <td width="62%" align="right" valign="top"><img src="../img/sheard_item/order-button-clear_s.gif" alt="クリア" width="54" height="21" onclick="c_clear()"></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                              <tr>
                                <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                              </tr>
                              <tr>
                                <td width="4%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td width="96%" align="left" valign="top">10mm未満は「45度カット」のみ指定できます。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">角が極端に鋭角になる場合は注文できません。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">切断端面の処理で選択した仕上と同様になります。</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="9%" align="center"><img src="../img/sheard_item/step7-2.gif" alt="no7.2" width="50" height="20" border="0"></td>
                        <td width="91%"><h2 class="h2_b12">穴あけを入力</h2></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                      <tr>
                        <td align="center"><table width="100%" border="0" cellpadding="1" cellspacing="0">
                          <tr>
                            <td align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="21%">&nbsp;</td>
                                <td width="69%" align="center"><a href="ita-img/image_ana_800.jpg" rel="lightbox"><img src="ita-img/image_ana_250.jpg" alt="穴あけ加工" width="250" height="188" border="0"></a></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="3" align="right"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="21%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                      </tr>
                                      <tr>
                                        <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                      </tr>
                                      <tr>
                                        <td height="19" align="center" valign="middle"><input name="tate_a" type="text" id="tate_a" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" tabindex="-1" size="6" maxlength="6"></td>
                                      </tr>
                                      <tr>
                                        <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                      </tr>
                                      <tr>
                                        <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                      </tr>
                                    </table></td>
                                    <td width="69%" align="center" valign="middle"><img src="ita-img/image_ana_shitei.gif" alt="穴あけ指定" width="250" height="170"></td>
                                    <td width="10%">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_a" type="text" id="yoko_a" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" tabindex="-1" size="6" maxlength="6"></td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td align="center"><a href="ita-img/image_ana_shitei_example.jpg" rel="lightbox">
                                      <input type="button" class="kakou" value="穴あけ 入力例">
                                    </a></td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="50%" align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                              <tr>
                                <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>丸穴（貫通穴）</strong></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                                  <tr>
                                    <td width="14%" align="left" valign="top"><a href="ita-img/image_ana-kiri_800.jpg" rel="lightbox"><img src="ita-img/image_ana-kiri_100.jpg" alt="丸穴" width="100" height="100" border="0"></a></td>
                                    <td width="14%" align="left" valign="top"><img src="ita-img/blank.jpg" alt="" width="100" height="100"></td>
                                    <td width="72%" align="left" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td width="3%" align="left" valign="top">■</td>
                                        <td width="97%" align="left" valign="top">ストレートの貫通穴<br>
                                          （※キリ穴）</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">■</td>
                                        <td align="left" valign="top">直径は1～960mm、小数点第1位まで入力可能<br>
                                          例）&phi;4.2、&phi;8.7など</td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>タップ穴（ネジ穴）</strong></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                                  <tr>
                                    <td width="14%" align="left" valign="top"><a href="ita-img/image_ana-tap_800.jpg" rel="lightbox"><img src="ita-img/image_ana-tap_100.jpg" alt="タップ穴" width="100" height="100" border="0"></a></td>
                                    <td width="14%" align="left" valign="top"><img src="ita-img/tap100.jpg" alt="ナベネジ" width="100" height="100"></td>
                                    <td width="72%" align="left" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td width="3%" align="left" valign="top">■</td>
                                        <td width="97%" align="left" valign="top">ネジを固定できるメスネジ山付きの貫通穴</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">■</td>
                                        <td align="left" valign="top">M3～M8まで入力可能</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">&nbsp;</td>
                                        <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                                          <tbody>
                                            <tr>
                                              <td align="left"><a href="ita-img/image_ana-tap_caution.jpg" rel="lightbox"><img src="../img/sheard_item/button-big-syousai-sunpo.gif" alt="詳細寸法" width="106" height="17" border="0"></a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>サラザグリ（皿穴）</strong></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                                  <tr>
                                    <td width="14%" align="left" valign="top"><a href="ita-img/image_ana-sara_800.jpg" rel="lightbox"><img src="ita-img/image_ana-sara_100.jpg" alt="皿ザグリ" width="100" height="100" border="0"></a></td>
                                    <td width="14%" align="left" valign="top"><img src="ita-img/sara100.jpg" alt="皿ネジ" width="100" height="100"></td>
                                    <td width="72%" align="left" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td width="3%" align="left" valign="top">■</td>
                                        <td width="97%" align="left" valign="top">サラネジの頭を板の平面に合わせて平らに固定する貫通穴</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">■</td>
                                        <td align="left" valign="top">M3～M8まで入力可能</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">&nbsp;</td>
                                        <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                                          <tbody>
                                            <tr>
                                              <td align="left"><a href="ita-img/image_ana-sara_caution.jpg" rel="lightbox"><img src="../img/sheard_item/button-big-syousai-sunpo.gif" alt="詳細寸法" width="106" height="17" border="0"></a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td height="25" align="center" valign="middle" bgcolor="#DADADA"><strong>キャップボルトザグリ（平ザグリ）</strong></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                                  <tr>
                                    <td width="14%" align="left" valign="top"><a href="ita-img/image_ana-cap_800.jpg" rel="lightbox"><img src="ita-img/image_ana-cap_100.jpg" alt="キャップボルトザグリ" width="100" height="100" border="0"></a></td>
                                    <td width="14%" align="left" valign="top"><img src="ita-img/cup100.jpg" alt="キャップボルト" width="100" height="100"></td>
                                    <td width="86%" align="left" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                                      <tr>
                                        <td width="3%" align="left" valign="top">■</td>
                                        <td width="97%" align="left" valign="top">キャップボルトの頭を板に埋没させる段付き貫通穴</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">■</td>
                                        <td align="left" valign="top">M3～M8まで入力可能</td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top">&nbsp;</td>
                                        <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                                          <tbody>
                                            <tr>
                                              <td align="left"><a href="ita-img/image_ana-cap_caution.jpg" rel="lightbox"><img src="../img/sheard_item/button-big-syousai-sunpo.gif" alt="詳細寸法" width="106" height="17" border="0"></a></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td align="center"><table width="100%"  border="0" cellpadding="1" cellspacing="0">
                          <tr>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>１</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type1" size="1" id="ana_m_type11"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei1" size="1" id="ana_m_kei1" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open1">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei1" type="text" id="ana_kei1" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm</td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu1" size="1" id="ana_m_suu1" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x1" type="text" id="ana_m_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y1" type="text" id="ana_m_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>２</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type2" size="1"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei2" size="1" id="ana_m_kei2" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open2">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei2" type="text" id="ana_kei2" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm</td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu2" size="1" id="ana_m_suu2" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x2" type="text" id="ana_m_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y2" type="text" id="ana_m_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>３</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type3" size="1"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei3" size="1" id="ana_m_kei3" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open3">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei3" type="text" id="ana_kei3" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm</td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu3" size="1" id="ana_m_suu3" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x3" type="text" id="ana_m_x3" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y3" type="text" id="ana_m_y3" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>４</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type4" size="1"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei4" size="1" id="ana_m_kei4" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open4">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei4" type="text" id="ana_kei4" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm</td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu4" size="1" id="ana_m_suu4" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x4" type="text" id="ana_m_x4" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y4" type="text" id="ana_m_y4" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>５</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type5" size="1"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei5" size="1" id="ana_m_kei5" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open5">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei5" type="text" id="ana_kei5" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm </td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu5" size="1" id="ana_m_suu5" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x5" type="text" id="ana_m_x5" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y5" type="text" id="ana_m_y5" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%" align="center"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>６</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_type6" size="1"  style="font-size: 9pt" onChange="Chg(0)">
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td height="35" align="center" valign="middle"><select name="ana_m_kei6" size="1" id="ana_m_kei6" style="font-size: 9pt" onChange="Chg(0)">
                                    </select>
                                      <table id="ana_open6">
                                        <tr>
                                          <td class="caption-12gray"><strong>直径</strong>
                                            <input name="ana_kei6" type="text" id="ana_kei6" onChange="Chg(0)" size="3" maxlength="4" style="text-align:center">
                                            mm</td>
                                        </tr>
                                      </table></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><select name="ana_m_suu6" size="1" id="ana_m_suu6" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>X</strong>
                                      <input name="ana_m_x6" type="text" id="ana_m_x6" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="middle"><strong>Y</strong>
                                      <input name="ana_m_y6" type="text" id="ana_m_y6" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                          <tr>
                            <td width="19%" align="center" valign="top"><input type="button" value="2D図面表示" class="zumenn" onclick="Check(2)"></td>
                            <td width="19%" align="center" valign="top"><input type="button" value="3D形状表示" class="d_zumenn" onclick="h_graf3d()"></td>
                            <td width="62%" align="right" valign="top"><img src="../img/sheard_item/order-button-clear_s.gif" alt="クリア" width="54" height="21" onclick="h_clear()"></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td align="center">&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                          <tr>
                            <td colspan="4" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                          </tr>
                          <tr>
                            <td width="2%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td width="48%" align="left" valign="top">穴の淵が端面から近い場合は指定できません。</td>
                            <td width="2%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td width="48%" align="left" valign="top">板の厚みが1mmの場合、丸穴以外は指定できません。</td>
                          </tr>
                          <tr>
                            <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td align="left" valign="top">選択できない使用ネジサイズは指定できません。</td>
                            <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td align="left" valign="top">穴の断面は細目仕上になります（磨き仕上は不可）。</td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="9%" align="center"><img src="../img/sheard_item/step7-3.gif" alt="no7.3" width="50" height="20" border="0"></td>
                        <td width="91%"><h2 class="h2_b12">角抜き／切欠きを入力</h2></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                      <tr>
                        <td width="50%" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="21%">&nbsp;</td>
                            <td width="69%" align="center" valign="middle"><a href="ita-img/image_kakunuki_800.jpg" rel="lightbox"><img src="ita-img/image_kakunuki_250.jpg" alt="角抜き加工" width="250" height="188" border="0"></a></td>
                            <td width="10%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td colspan="3" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="21%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                  <tr>
                                    <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                  </tr>
                                  <tr>
                                    <td height="19" align="center" valign="middle"><input name="tate_n" type="text" id="tate_n" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                  </tr>
                                  <tr>
                                    <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                  </tr>
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                </table></td>
                                <td width="69%" align="center" valign="middle"><img src="ita-img/image_kakunuki_shitei.gif" alt="角抜き指定" width="250" height="170" border="0"></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_n" type="text" id="yoko_n" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td align="right" valign="middle">&nbsp;</td>
                                <td align="center" valign="middle"><a href="ita-img/image_kakunuki_shitei_example.jpg" rel="lightbox">
                                  <input type="button" class="kakou" value="角抜き 入力例">
                                </a></td>
                                <td align="center" valign="middle">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                        <td width="50%" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="21%">&nbsp;</td>
                            <td width="69%" align="center" valign="middle"><a href="ita-img/image_kirikaki_800.jpg" rel="lightbox"><img src="ita-img/image_kirikaki_250.jpg" alt="切欠き加工" width="250" height="188" border="0"></a></td>
                            <td width="10%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td align="center" valign="middle">&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td colspan="3" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="21%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                  <tr>
                                    <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                  </tr>
                                  <tr>
                                    <td height="19" align="center" valign="middle"><input name="tate_k" type="text" id="tate_k" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                  </tr>
                                  <tr>
                                    <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                  </tr>
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                </table></td>
                                <td width="69%" align="center" valign="middle"><img src="ita-img/image_kirikaki_shitei.gif" alt="切欠き指定" width="250" height="170" border="0"></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_k" type="text" id="yoko_k" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td align="center" valign="middle"><a href="ita-img/image_kirikaki_shitei_example.jpg" rel="lightbox">
                                  <input type="button" class="kakou" value="切欠き 入力例">
                                </a></td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td colspan="2" align="center"><table width="100%"  border="0" cellspacing="0" cellpadding="1">
                          <tr align="center">
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>１</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu1" size="1" id="nuki_suu1" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki1_x1" type="text" id="nuki1_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki1_y1" type="text" id="nuki1_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki1_x2" type="text" id="nuki1_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki1_y2" type="text" id="nuki1_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r1"  id="nuki_r1" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>２</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu2" size="1" id="nuki_suu2" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki2_x1" type="text" id="nuki2_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki2_y1" type="text" id="nuki2_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki2_x2" type="text" id="nuki2_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki2_y2" type="text" id="nuki2_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r2"  id="nuki_r2" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>３</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu3" size="1" id="nuki_suu3" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki3_x1" type="text" id="nuki3_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki3_y1" type="text" id="nuki3_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki3_x2" type="text" id="nuki3_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki3_y2" type="text" id="nuki3_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r3"  id="nuki_r3" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>４</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu4" size="1" id="nuki_suu4" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki4_x1" type="text" id="nuki4_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki4_y1" type="text" id="nuki4_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki4_x2" type="text" id="nuki4_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki4_y2" type="text" id="nuki4_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r4"  id="nuki_r4" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>５</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu5" size="1" id="nuki_suu5" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki5_x1" type="text" id="nuki5_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki5_y1" type="text" id="nuki5_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki5_x2" type="text" id="nuki5_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki5_y2" type="text" id="nuki5_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r5"  id="nuki_r5" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                            <td width="16%"><table width="100%" height="165"  border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                              <tr bgcolor="#FFFFFF">
                                <td height="25" align="center" bgcolor="#DADADA" class="caption-13gray"><strong>６</strong></td>
                              </tr>
                              <tr bgcolor="#FFFFFF">
                                <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                                  <tr>
                                    <td align="center"><select name="nuki_suu6" size="1" id="nuki_suu6" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>位置選択</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="AB">AB</option>
                                      <option value="AC">AC</option>
                                      <option value="AD">AD</option>
                                      <option value="BC">BC</option>
                                      <option value="BD">BD</option>
                                      <option value="DC">DC</option>
                                      <option value="ABC">ABC</option>
                                      <option value="ABD">ABD</option>
                                      <option value="ACD">ACD</option>
                                      <option value="BCD">BCD</option>
                                      <option value="ABCD">ABCD</option>
                                    </select></td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X1</strong>
                                      <input name="nuki6_x1" type="text" id="nuki6_x1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y1</strong>
                                      <input name="nuki6_y1" type="text" id="nuki6_y1" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>X2</strong>
                                      <input name="nuki6_x2" type="text" id="nuki6_x2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><strong>Y2</strong>
                                      <input name="nuki6_y2" type="text" id="nuki6_y2" onChange="Chg(0)" size="4" maxlength="5" style="text-align:center">
                                      mm</td>
                                  </tr>
                                  <tr>
                                    <td align="center"><select name="nuki_r6" id="nuki_r6" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>内角R選択</option>
                                      <option value="R5">R5</option>
                                      <option value="R2">R2</option>
                                    </select></td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td colspan="2" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                          <tr>
                            <td width="19%" align="center" valign="top"><input type="button" value="2D図面表示" class="zumenn" onclick="Check(2)"></td>
                            <td width="19%" align="center" valign="top"><input type="button" value="3D形状表示" class="d_zumenn" onclick="h_graf3d()"></td>
                            <td width="62%" align="right" valign="top"><img src="../img/sheard_item/order-button-clear_s.gif" alt="クリア" width="54" height="21" onclick="s_clear()"></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td colspan="2" align="center">&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="2" align="center"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                          <tr>
                            <td colspan="4" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                          </tr>
                          <tr>
                            <td width="2%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td width="48%" align="left" valign="top">小数点以下は「0.5ミリ単位」で入力できます。</td>
                            <td width="2%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td width="48%" align="left" valign="top">加工部分の最小サイズは「10mm」になります。</td>
                          </tr>
                          <tr>
                            <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td align="left" valign="top">残る部分が極端に少ない場合は注文できません。</td>
                            <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                            <td align="left" valign="top">加工部分の断面は細目仕上になります（磨き仕上は不可）。</td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="9%" align="center"><img src="../img/sheard_item/step7-4.gif" alt="no7.4" width="50" height="20" border="0"></td>
                        <td width="91%"><h2 class="h2_b12">テーパーを選択</h2></td>
                      </tr>
                    </table></td>
                    </tr>
                  <tr>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="50%" align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="21%" class="caption-12gray">&nbsp;</td>
                            <td width="69%" align="center" valign="middle"><a href="ita-img/image_taper_800.jpg" rel="lightbox"><img src="ita-img/image_taper_250.jpg" alt="テーパー加工" width="250" height="188" border="0"></a></td>
                            <td width="10%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td class="caption-12gray">&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td colspan="3" align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="21%" align="right" valign="middle"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                  <tr>
                                    <td height="50" align="center" valign="top"><img src="ita-img/image_dimensionline_tate_t.gif" alt="" width="7" height="50"></td>
                                  </tr>
                                  <tr>
                                    <td height="19" align="center" valign="middle"><input name="tate_t" type="text" id="tate_t" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" size="6" maxlength="6" tabindex="-1"></td>
                                  </tr>
                                  <tr>
                                    <td height="49" align="center" valign="bottom"><img src="ita-img/image_dimensionline_tate_b.gif" alt="" width="7" height="49"></td>
                                  </tr>
                                  <tr>
                                    <td align="right"><img src="ita-img/image_dimensionline_tate_v.gif" alt="" width="45" height="1"></td>
                                  </tr>
                                </table></td>
                                <td width="69%" align="center" valign="middle"><img src="ita-img/image_taper_shitei.gif" alt="テーパー指定" width="250" height="170" border="0"></td>
                                <td width="10%">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td height="73" align="center" valign="middle" background="ita-img/image_dimensionline_yoko.gif"><input name="yoko_t" type="text" id="yoko_t" style="background-color:#ffffff; border:0; text-align:center; color:#333333;" tabindex="-1" size="6" maxlength="6"></td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td align="right" valign="middle" class="caption-12gray">&nbsp;</td>
                                <td align="center" valign="middle"><a href="ita-img/image_taper_shitei_example.jpg" rel="lightbox">
                                  <input type="button" class="kakou" value="テーパー 入力例">
                                </a></td>
                                <td align="center" valign="middle">&nbsp;</td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                        <td width="50%" align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="0">
                          <tr>
                            <td align="center" valign="middle"><table width="100%"  border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                              <tr align="center" bgcolor="#FFFFFF">
                                <td width="50%" height="25" bgcolor="#DADADA"><strong>４５度</strong></td>
                                <td width="50%" bgcolor="#DADADA"><strong>３０度</strong></td>
                              </tr>
                              <tr align="center" bgcolor="#FFFFFF">
                                <td><img src="ita-img/image_taper-45.gif" alt="テーパー45度" width="170" height="110" border="0"></td>
                                <td><img src="ita-img/image_taper-30.gif" alt="テーパー30度" width="170" height="110" border="0"></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="middle"><table width="100%" border="0" cellspacing="1" cellpadding="1" bgcolor="#CCCCCC">
                              <tr>
                                <td valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray" >
                                  <tr>
                                    <td width="34%" align="center">&nbsp;</td>
                                    <td width="32%" align="center"><select name="taper_suu" size="1" id="select5" style="font-size: 9pt" onChange="Chg(0)">
                                      <option selected>辺の位置選択</option>
                                    </select></td>
                                    <td width="34%" align="center">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td align="center">&nbsp;</td>
                                    <td align="center"><select name="taper" size="1" id="taper" style="font-size: 9pt" onChange="Chg(0)">
                                      <option value="" selected>角度選択</option>
                                      <option value="45度">45度</option>
                                      <option value="30度">30度</option>
                                    </select></td>
                                    <td align="center">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td align="right"><strong>Y</strong></td>
                                    <td align="center"><select name="taper_y" size="1" id="taper_y" style="font-size: 9pt" onChange="Chg(0)">
                                      <option selected>選択</option>
                                    </select></td>
                                    <td align="left"> mm</td>
                                  </tr>
                                  <tr>
                                    <td align="right">X</td>
                                    <td align="center"><input name="taper_x" type="text" id="taper_x"  style="background-color: #EFEFEF; border:0; text-align: center; color:#333333;" size="8" maxlength="9" tabindex="-1"></td>
                                    <td align="left">mm</td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                              <tr>
                                <td width="19%" align="center" valign="top"><input type="button" value="2D図面表示" class="zumenn" onclick="Check(2)"></td>
                                <td width="19%" align="center" valign="top"><input type="button" value="3D形状表示" class="d_zumenn" onclick="h_graf3d()"></td>
                                <td width="62%" align="right" valign="top"><img src="../img/sheard_item/order-button-clear_s.gif" alt="クリア" width="54" height="21" onclick="t_clear()"></td>
                              </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td align="center" valign="middle">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" valign="middle"><table width="100%" border="0" cellpadding="2" cellspacing="0" class="caption-12gray">
                              <tr>
                                <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                              </tr>
                              <tr>
                                <td width="2%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td width="98%" align="left" valign="top">「角の処理（丸め/斜めカット）」と「切欠き」にテーパーは入りません。詳細はこちら（<a href="ita-img/image_taper-caution_kadomaru_800.jpg" rel="lightbox"><u class="caption-12orange">丸め加工</u></a>/<a href="ita-img/image_taper-caution_kadonaname_800.jpg" rel="lightbox"><u class="caption-12orange">斜めカット加工</u></a>/<a href="ita-img/image_taper-caution_kirikaki_800.jpg" rel="lightbox"><u class="caption-12orange">切欠き加工</u></a>）。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">加工できる最少サイズは「100mm」になり、1辺でも100mm未満の場合は指定できません。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top">板の厚みは必ず1mm以上残る為、切断端面の処理は「磨き仕上」をご指定下さい。</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                                <td align="left" valign="top"> 板の厚みが1mmの場合、選択できません。</td>
                              </tr>
                            </table></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                    </tr>
                </tbody>
              </table></td>
            </tr>
            <tr>
              <td align="center" valign="top"><table width="100%" border="0" cellspacing="1" cellpadding="2" bgcolor="#CCCCCC">
                <tr>
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step8-next.gif" alt="no8" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">金額を確認</h2></td>
                      </tr>
                    </table></td>
                  </tr>
                <tr>
                  <td width="65%" align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                    <tr>
                      <td colspan="2" align="center"><table width="100%"  border="0" cellpadding="4" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                        <tr align="center" bgcolor="#FFFFFF">
                          <td bgcolor="#DADADA">割引率の目安</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td width="50%"><table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                        <tr align="center" bgcolor="#EFEFEF">
                          <td width="22%" height="23" bgcolor="#DADADA">数量</td>
                          <td width="39%" bgcolor="#DADADA">単価</td>
                          <td width="39%" bgcolor="#DADADA">割引率</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">1</td>
                          <td><input name="pr1_2" type="text" id="pr1_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis1_2" type="text" id="dis1_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">2</td>
                          <td><input name="pr2_2" type="text" id="pr2_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis2_2" type="text" id="dis2_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">3</td>
                          <td><input name="pr3_2" type="text" id="pr3_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis3_2" type="text" id="dis3_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">5</td>
                          <td><input name="pr5_2" type="text" id="pr5_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis5_2" type="text" id="dis5_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">10</td>
                          <td><input name="pr10_2" type="text" id="pr10_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis10_2" type="text" id="dis10_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        </table></td>
                      <td width="50%"><table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC" class="caption-12gray">
                        <tr align="center" bgcolor="#EFEFEF">
                          <td width="22%" height="23" bgcolor="#DADADA">数量</td>
                          <td width="39%" bgcolor="#DADADA">単価</td>
                          <td width="39%" bgcolor="#DADADA">割引率</td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">30 </td>
                          <td><input name="pr30_2" type="text" id="pr30_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis30_2" type="text" id="dis30_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">50</td>
                          <td><input name="pr50_2" type="text" id="pr50_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis50_2" type="text" id="dis50_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">100</td>
                          <td><input name="pr100_2" type="text" id="pr100_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis100_2" type="text" id="dis100_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">400</td>
                          <td><input name="pr400_2" type="text" id="pr400_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          <td><input name="dis400_2" type="text" id="dis400_2" style="background-color: #ffffff; border:0; text-align: center; font-size: 9pt;" size="8" maxlength="9" readonly tabindex="-1"></td>
                          </tr>
                        <tr align="center" bgcolor="#FFFFFF">
                          <td height="23" bgcolor="#DADADA">401～</td>
                          <td colspan="2"><a href="../html/full_order/htm/full_order.html?order_ita_form" target="_blank"><u class="caption-12orange">別途問い合わせ</u></a></td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td colspan="2"><table width="100%" border="0" cellpadding="2" cellspacing="0">
                        <tr>
                          <td width="23%" align="left"><a href="javascript:;" onClick="MM_openBrWindow(\'/acry-ya_new/html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou\',\'\',\'\')"><img src="../img/sheard_item/button-konpou-souryo5000.gif" alt="梱包送料" width="106" height="17" border="0"></a></td>
                          <td width="23%" align="left"><a href="javascript:;" onClick="MM_openBrWindow(\'caution.html\',\'\',\'width=505,height=450\')"><img src="../img/sheard_item/button-mitumori-fudou.gif" alt="見積が動かない場合" width="106" height="17" border="0"></a></td>
                          <td width="54%" align="left">&nbsp;</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="2"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                        </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">数量を変更する場合は、<strong>STEP.4</strong> へ戻って入力し直して下さい。</td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="2"><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="98%" align="left" valign="top">【価格改定】　2017/6/16</td>
                        </tr>
                        <tr>
                          <td align="left" valign="top">【価格改定】　2018/10/10</td>
                        </tr>
                      </table></td>
                      </tr>
                    </table></td>
                  <td width="35%" align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="caption-12gray">
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="right">数量</td>
                      <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td width="33%">&nbsp;</td>
                            <td width="34%" align="center"><input name="suu2" type="text" id="suu2" style="background-color: #EFEFEF; border:0; text-align: center; color:#333333; font-weight:bold;" tabindex="-1" onChange="Chg(0)" size="4" maxlength="3" readonly></td>
                            <td width="33%" align="left" class="caption-12gray">枚</td>
                          </tr>
                        </tbody>
                      </table></td>
                    </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                    </tr>
                    <tr>
                      <td width="22%" align="right">&nbsp;</td>
                      <td width="78%" align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center"><img src="../img/sheard_item/mitumori-button2.gif" alt="見積計算" width="109" height="21" border="0" OnClick="Chg()"></td>
                    </tr>
                    <tr>
                      <td height="30" align="right">単価</td>
                      <td width="78%" align="center"><input name="tanka2" type="text" id="tanka2" style="background-color: #EFEFEF; border:0; text-align: center; color:#333333; font-weight:bold;" tabindex="-1" onChange="Chg(0)" value="0" size="22" readonly></td>
                    </tr>
                    <tr>
                      <td height="30" align="right">合計</td>
                      <td align="center"><input name="goukei2" type="text" id="goukei2" style="background-color: #EFEFEF; border:0; text-align: center; color:#333333; font-weight:bold;" tabindex="-1" onChange="Chg(0)" value="0" size="22" readonly></td>
                      </tr>
                    <tr>
                      <td height="30" align="right">割引率</td>
                      <td align="center"><input name="disp_dis2" type="text" id="disp_dis2" style="background-color: #EFEFEF; border:0; text-align: center; color:#FF0000; font-weight:bold;" tabindex="-1" onChange="Chg(0)" value="0" size="22" readonly></td>
                      </tr>
                    <tr>
                      <td height="30" align="right">&nbsp;</td>
                      <td align="center"><table width="100%" border="0" cellpadding="2" cellspacing="1" id="global2">
                        <tr>
                          <td align="center"><a href="../img/sheard_item/yamato_caution.gif" rel="lightbox"><img src="../img/sheard_item/dan1.gif" alt="大型便" width="65" height="22" border="0"></a></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="30" colspan="2" align="right"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="haisou2">
                        <tr>
                          <td align="center" class="caption-12gray"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="kojin_deliver2">
                            <tr>
                              <td align="center"><table width="100%" border="0" cellspacing="1" cellpadding="1">
                                <tr>
                                  <td width="50%" align="center"><a href="../img/sheard_item/kojin_caution.gif" rel="lightbox"><img src="../img/sheard_item/kojin_deliver.gif" alt="個人宛送料" width="60" height="33" border="0"></a></td>
                                  <td width="50%" rowspan="2"><input name="haisou_cost2" type="text"  class="hyoji_haisou_semi" id="haisou_cost2" tabindex="-1" onChange="Chg(0)" size="20" maxlength="20"></td>
                                  </tr>
                                <tr>
                                  <td align="center"><a href="../html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou" target="_blank"><u class="caption-10orange">個人宅配送料とは</u></a></td>
                                </tr>
                                </table></td>
                              </tr>
                            </table>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" id="area_deliver2">
                              <tr>
                                <td align="center"><table width="100%" border="0" cellspacing="1" cellpadding="1">
                                  <tr>
                                    <td width="50%" align="center"><a href="../img/sheard_item/enpo_caution.gif" rel="lightbox"><img src="../img/sheard_item/enpo_deliver.gif" alt="遠方送料" width="60" height="33" border="0"></a></td>
                                    <td width="50%" rowspan="2"><input name="area_cost2" type="text"  class="hyoji_haisou_semi" id="area_cost2" tabindex="-1" onChange="Chg(0)" size="20" maxlength="20"></td>
                                    </tr>
                                  <tr>
                                    <td align="center"><a href="../html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou" target="_blank"><u class="caption-10orange">遠方配送料とは</u></a></td>
                                  </tr>
                                  </table></td>
                                </tr>
                              </table></td>
                          </tr>
                      </table></td>
                      </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td height="30" align="center"><img src="../img/sheard_item/order-button-clear.gif" alt="オールクリア" width="109" height="21" border="0" onClick="Form_Reset();Chg(1);"></td>
                    </tr>
                    <tr>
                      <td align="right">&nbsp;</td>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                <tr>
                  <td colspan="2" align="center" valign="middle" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="9%" align="center"><img src="../img/sheard_item/step9.gif" alt="no9" width="50" height="20" border="0"></td>
                      <td width="91%"><h2 class="h2_b12">図面を確認・カートに入れる</h2></td>
                      </tr>
                    </table></td>
                  </tr>
                <tr>
                  <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="1">
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="3%" align="left" valign="top">■</td>
                          <td width="97%" align="left" valign="top">[2D図面確認]ボタンをクリックすると、入力した内容を図面で確認できます。図面は新規ウィンドウ（または新規タブ）で表示されます。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top">■</td>
                          <td align="left" valign="top">加工内容が異なる板をご注文の場合は、[カートに入れる]ボタンをクリックして一度ショッピングカートに入れた後、再度別の加工内容をご入力の上、[カートに入れる]ボタンをクリックしてショッピングカートに追加して下さい。</td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td>&nbsp;</td>
                      </tr>
                    <tr>
                      <td><table width="100%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td colspan="2" align="left" valign="top"><span class="caption-12orange">【注意事項】</span></td>
                          </tr>
                        <tr>
                          <td width="3%" align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td width="97%" align="left" valign="top">図面でエラーが表示された場合、カートに入れる事ができません。</td>
                          </tr>
                        <tr>
                          <td align="left" valign="top"><span class="caption-12orange">□</span></td>
                          <td align="left" valign="top">図面でエラーが表示されても、内容によっては製作可能な場合があります。<br>
                            <a href="../html/full_order/htm/full_order.html?order_ita_form" target="_blank"><u class="caption-12orange">フルオーダー</u></a> からお問い合わせ下さい。</td>
                          </tr>
                        </table>
                        <script type="text/javascript" src="../java/txt_o.js"></script><table width="100%"  border="0" cellpadding="2" cellspacing="1" bgcolor="#999999" class="caption-10gray-hight">
                          <tr bgcolor="#EFEFEF">
                            <td width="40%" align="center" valign="middle" bgcolor="#EFEFEF">出荷目安（加工あり）</td>
                            <td colspan="2" rowspan="2" align="left" valign="middle" bgcolor="#FFFFFF"><span class="caption-10gray">出荷目安は、正式注文後、土日祭日と弊社休業日を除いた出荷までの日数目安です。
                              数がまとまる場合は日数が異なります。<a href="javascript:;" onclick="MM_openBrWindow(\'/acry-ya_new/htm2/htm/nouki-caution.html\',\'\',\'width=650,height=620\')"><u class="caption-10orange">詳細</u></a><br>
                              （万が一の場合には、予定通りに出荷出来なくなる場合があります）</span></td>
                          </tr>
                          <tr bgcolor="#EFEFEF">
                            <td align="center" valign="middle" bgcolor="#EFEFEF"><iframe name="uri" SRC="/cgibin/listview/list33.cgi?action=search&DATA=ita2_semiorder" WIDTH="120" HEIGHT="13" SCROLLING="no" FRAMEBORDER="0" BORDER="0"></iframe></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td align="center" valign="middle" bgcolor="#EFEFEF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><input type="button" value="2D図面確認" class="zumenn" onclick="h_graf(1)"></td>
                      </tr>
                    <tr>
                      <td align="center"><table width="100%" border="0" cellpadding="3" cellspacing="0" class="caption-12gray">
                        <tr>
                          <td width="60%" align="right"><strong>確認チェック</strong></td>
                          <td width="40%" align="left"><input name="drawing_check" type="checkbox" id="drawing_check" value="1" disabled>
                            <input name="zumen_kakunin" type="hidden" id="zumen_kakunin"></td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    <tr>
                      <td align="center"><input type="button" class="cart" onclick="Check(1)" value="カートに入れる"></td>
                      </tr>
                    <tr>
                      <td align="center">&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td height="60" align="center"><table width="100%"  border="0" cellpadding="4" cellspacing="1" bgcolor="#CCCCCC">
                <tr align="center" bgcolor="#FFFFFF">
                  <td bgcolor="#FFFFFF"><table width="100%"  border="0" cellpadding="2" cellspacing="0">
                    <tr>
                      <td width="2%" align="center" class="caption-12green">&nbsp;</td>
                      <td width="98%" align="left" class="caption-12green"><strong>1度のお買い上げ金額合計が10,000円（税込）以上は送料無料、10,000円（税込）未満は送料864円（税込）</strong><span class="caption-10green">※一部を除く</span>　<a href="/acry-ya_new/html/howtoorder_top/htm/howtoorder-soryohoka.htm#sou" target="_blank"><u class="caption-12orange">詳細</u></a></td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center" class="caption-12green"><img src="../html/howtoorder_top/img/kessai-icon-long.gif" alt="決済方法" width="725" height="30" align="middle"></td>
                    </tr>
                  </table></td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td height="90" align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellpadding="3" cellspacing="1" bgColor="#CCCCCC">
                <tr>
                  <td height="30" colspan="4" align="center"  bgColor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td width="33%">&nbsp;</td>
                      <td width="34%" align="center"><h2 class="h2_b12">お客様活用事例</h2></td>
                      <td width="33%" align="right"><table width="100%" border="0" cellspacing="0" cellpadding="2">
                        <tbody>
                          <tr>
                            <td width="76%" align="right"><a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&group=&word=アクリル板&method=AND" target="_blank"><img src="../img/sheard_item/button-katuyo-jirei.gif" alt="お客様活用事例" width="106" height="17" border="0" align="baseline"></a></td>
                            <td width="24%" align="right"><a href="https://pro.form-mailer.jp/fms/c5e38c3932682" target="_blank"><img src="../img/sheard_item/button-mini-oubo.gif" alt="応募" width="58" height="17" border="0" align="baseline"></a></td>
                            </tr>
                          </tbody>
                      </table>                      </td>
                    </tr>
                  </table></td>
                </tr>
                <tr>
                  <td width="50%" align="center" valign="top" bgcolor="#FFFFFF"><table width="99%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                    <tbody>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/kazukun.htm" target="_blank"><img src="../html/example/img/diy/kazukun/kazukun175.jpg" alt="江戸切子ディスプレー台" width="175" height="131" border="0"></a></td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle">■かずくん さま<br>
                          ＜江戸切子ディスプレー台＞</td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/kazukun.htm" target="_blank"><u class="caption-12orange">ご紹介ページ</u></a></td>
                        </tr>
                    </tbody>
                  </table>                    </td>
                  <td width="50%" align="center" valign="top" bgcolor="#FFFFFF"><table width="99%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                    <tbody>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/cinnachocomarro.htm" target="_blank"><img src="../html/example/img/diy/cinnachocomarro/cinnachocomarro175.jpg" alt="カーゴバイク風防ガラス" width="175" height="131" border="0"></a></td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle">■シナショコマロ さま<br>
                          ＜カーゴバイク風防ガラス＞</td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/cinnachocomarro.htm" target="_blank"><u class="caption-12orange">ご紹介ページ</u></a></td>
                        </tr>
                    </tbody>
                  </table>                    </td>
                  <td width="50%" align="center" valign="top" bgcolor="#FFFFFF"><table width="99%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                    <tbody>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/o_take.htm" target="_blank"><img src="../html/example/img/diy/o_take/o_take175.jpg" alt="iPad Proキャリングケース" width="175" height="130" border="0"></a></td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle">■O竹 さま<br>
                          ＜iPad Proキャリングケース＞</td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/o_take.htm" target="_blank"><u class="caption-12orange">ご紹介ページ</u></a></td>
                        </tr>
                    </tbody>
                  </table>                    </td>
                  <td width="50%" align="center" valign="top" bgcolor="#FFFFFF"><table width="99%" border="0" cellpadding="1" cellspacing="0" class="caption-12gray">
                    <tbody>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/osada.htm" target="_blank"><img src="../html/example/img/diy/osada/osada175.jpg" alt="アクリルアート作品" width="175" height="130" border="0"></a></td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle">■おさだ さま<br>
                          ＜アクリルアート作品＞</td>
                        </tr>
                      <tr>
                        <td align="center" valign="middle"><a href="../html/example/htm/diy/osada.htm" target="_blank"><u class="caption-12orange">ご紹介ページ</u></a></td>
                        </tr>
                    </tbody>
                  </table>                    </td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
                <tr>
                  <td height="30" align="center" bgcolor="#CCCCCC"><table width="100%" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                      <td align="center"><h2 class="h2_b12">お客様の声 （製品ご使用後の感想）</h2></td>
                      </tr>
                    </table></td>
                </tr>
                <tr>
                  <td bgcolor="#FFFFFF"><script type="text/javascript">
if( (navigator.userAgent.indexOf(\'iPhone\') > 0 ||
	navigator.userAgent.indexOf(\'iPad\') > 0 || 
	navigator.userAgent.indexOf(\'iPod\') > 0 ) || 
	navigator.userAgent.indexOf(\'Android\') > 0)
 {
document.write(\'<IFRAME NAME="uri" SRC="/cgibin/pickup/datapickup.php?a=2&c=tx13&d=free&e=QA1&f=アクリル板&h=5" WIDTH=725 HEIGHT=220 SCROLLING="yes" FRAMEBORDER=0></IFRAME>\');
}else{
document.write(\'<IFRAME NAME="uri" SRC="/cgibin/pickup/datapickup.php?a=2&c=tx13&d=free&e=QA1&f=アクリル板" WIDTH=725 HEIGHT=220 SCROLLING="yes" FRAMEBORDER=0></IFRAME>\');
}
              </script></td>
                </tr>
              </table></td>
              </tr>
            <tr>
              <td height="60" align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><!-- #BeginLibraryItem "/Library/full-order.lbi" -->
              <table width="740" height="25"  border="0" cellpadding="5" cellspacing="1" bgcolor="#666666">
                <tr>
                  <td bgcolor="#E3E3E3"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="caption-12gray" onClick="location.href=\'../html/full_order/htm/full_order.html\'" style="cursor:hand;">
                    <tr>
                      <td width="17%" align="center" valign="middle"><a href="../html/full_order/htm/full_order.html"><strong><img src="../img/sheard_item/order-button-fullorder.gif" alt="" width="109" height="21" border="0"></strong></a></td>
                      <td width="83%">セミオーダーでご希望の仕様が指定できない場合、フルオーダーにてお問い合わせ下さい。 ＞ <u>詳細</u></td>
                    </tr>
                  </table></td>
                </tr>
              </table>
              <!-- #EndLibraryItem --></td>
            </tr>
            <tr>
              <td height="60" align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td height="30" align="left" valign="middle" class="title-12pt-green2">関連商品</td>
                  </tr>
                <tr>
                  <td align="center" valign="top"><img src="../img/sheard_item/co_line560.gif" alt="" width="740" height="1"></td>
                  </tr>
                <tr>
                  <td align="center" valign="top">&nbsp;</td>
                  </tr>
                <tr>
                  <td align="center" valign="top"><table width="100%" border="0" cellpadding="1" cellspacing="1" bgcolor="#FFFFFF">
                    <tr align="center" valign="top">
                      <td width="15%"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/enban_semi_order.htm"><img src="../html/diy/img/enban/enban70.jpg" alt="アクリル円板加工＜セミオーダー＞" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/enban_semi_order.htm" class="caption-10gray"><u>アクリル円板加工<br>
                            ＜セミオーダー＞</u></a></td>
                          </tr>
                        </table></td>
                      <td width="14%"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="order_pipe_form.htm"><img src="../html/diy_top/img/pipe70.jpg" alt="パイプ丸棒角棒＜セミオーダー＞" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="order_pipe_form.htm" class="caption-10gray"><u>パイプ丸棒角棒<br>
                            ＜セミオーダー＞</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/teijakuzai_k.htm"><img src="../html/diy/img/teijaku/teijaku70.jpg" alt="アクリル押出板（規格サイズ）" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/teijakuzai_k.htm" class="caption-10gray"><u>アクリル押出板<br>
                            （規格サイズ）</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top" class="caption-10gray"><a href="../html/diy/htm/teijakuzai_f.htm"><img src="../html/diy/img/teijaku/teijaku_f70.jpg" alt="アクリル押出板（フリーカット）" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top" class="caption-10gray"><a href="../html/diy/htm/teijakuzai_f.htm" class="caption-10green"><u>アクリル押出板 <br>
                            （フリーカット）</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/standard_plate.htm"><img src="../html/diy/img/standard/cast-material70.jpg" alt="アクリルキャスト材（規格サイズ）" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/standard_plate.htm" class="caption-10gray"><u>アクリルキャスト材<br>
                            （規格サイズ）</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/standard_plate_f.htm"><img src="../html/diy/img/teijaku/standard_plate_f70.jpg" alt="アクリルキャスト材（フリーカット）" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/standard_plate_f.htm" class="caption-10gray"><u>アクリルキャスト材<br>
                            （フリーカット）</u></a></td>
                          </tr>
                        </table></td>
                      <td width="15%"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/cyokoku/htm/order_cyokoku.html" target="_blank"><img src="../html/cyokoku/img/silk-img70.jpg" alt="名入れオーダー 彫刻／印刷" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/cyokoku/htm/order_cyokoku.html" target="_blank" class="caption-10gray"><u>名入れオーダー<br>
                            彫刻／印刷</u></a></td>
                          </tr>
                        </table></td>
                      </tr>
                    <tr align="center" valign="top">
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/olfa-cutter-s.htm"><img src="../html/diy/img/diy/olfa-cutter-s70.jpg" alt="アクリルカッターS型" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/olfa-cutter-s.htm" class="caption-10gray"><u>アクリルカッター<br>
                            S型</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top" class="caption-10gray"><a href="../html/diy/htm/item-detail/genbaya.htm"><img src="../html/diy/img/diy/genbaya70.jpg" alt="アクリル専用鋸" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top" class="caption-10gray"><a href="../html/diy/htm/item-detail/genbaya.htm" class="caption-10green"><u>現場屋<br>
                            アクリル専用鋸</u></a></td>
                          </tr>
                        </table></td>
                      <td height="100"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-drillbit.htm"><img src="../html/diy/img/diy/asbit70.jpg" alt="アクリサンデードリルビット" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-drillbit.htm" class="caption-10gray"><u>アクリサンデー<br>
                            ドリルビット</u></a></td>
                          </tr>
                        </table></td>
                      <td height="100"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-glue.htm"><img src="../html/diy/img/diy/acrysanday_secyaku70.jpg" alt="アクリサンデー接着剤" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-glue.htm" class="caption-10gray"><u>アクリサンデー<br>
                            アクリル接着剤</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/injection.htm"><img src="../html/diy/img/diy/cyusyaki70.jpg" alt="アクリル接着剤用注射器" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/injection.htm" class="caption-10gray"><u>アクリル接着剤用<br>
                            注射器</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-polycare.htm"><img src="../html/diy/img/diy/polycare70.jpg" alt="アクリサンデー静電気防止ポリケア" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-polycare.htm" class="caption-10gray"><u>アクリサンデー<br>
                            静電気防止ポリケア</u></a></td>
                          </tr>
                        </table></td>
                      <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
                        <tr>
                          <td height="25" align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-wellsee.htm"><img src="../html/diy/img/diy/wellsee70.jpg" alt="アクリサンデーウェルシーA" width="70" height="70" border="0"></a></td>
                          </tr>
                        <tr>
                          <td align="center" valign="top"><a href="../html/diy/htm/item-detail/acrysunday-wellsee.htm" class="caption-10gray"><u>アクリサンデー<br>
                            ウェルシーA</u></a></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
            </tr>
            </table></td>
        </tr>
        <tr>
          <td height="60" align="center">&nbsp;</td>
        </tr>
        </table>
</form></td>
  </tr>
  <tr>
    <td valign="top" height="7"><!-- #BeginLibraryItem "/Library/footer6.lbi" --><script language="JavaScript" type="text/JavaScript">
<!--
function MM_popupMsg(msg) { //v1.0
  alert(msg);
}
//-->
</script>
<link href="../css/newccs.css" rel="stylesheet" type="text/css">
<table width="765" border="0" cellpadding="5" cellspacing="1" bgcolor="#999999">
  <tr>
    <td align="center" bgcolor="#FFFFFF"><table width="650" border="0" cellpadding="0" cellspacing="0">
        <tr>
         <td colspan="11" align="center"><a href="/"><strong><font size="2">アクリル材料加工とアクリル製品の&quot;アクリ屋ドットコム&quot;</font></strong></a></td>
        </tr>
        <tr>
          <td colspan="11" align="center" nowrap>
		  <a href="javascript:;" onClick="MM_popupMsg(\'『著作権について』このWebサイト上の文章、写真、図、映像などは個人的な利用を目的とした場合を除き複製、使用することは著作権法により禁止されていますので、複製、使用は事前に当社にご連絡の上、許諾を得て頂くようお願い致します。\r\r\r『商標について』「アクリ屋」の名称及び類似する商標の使用に関する権利は当社に帰属します。これを当社の許諾を得ることなく使用等する行為は商標法等により禁止されていますので、事前に当社にご連絡の上、許諾を得て頂くようお願い致します。\')">
          <span class="caption-09gray">Copyright (C)  acry-ya.com. All rights reserved.　「アクリ屋」は株式会社さくら樹脂の登録商標です。</span></a><br>
		  <span class="caption-10gray-hight"><strong>株式会社さくら樹脂 〒222-0001神奈川県横浜市港北区樽町4-13-2</strong></span></td>
        </tr>
      </table>
      <table width="350" border="0" cellpadding="0" cellspacing="0" class="caption-10gray">
        <tr>
          <td align="center"><font size="1">|</font></td>
          <td align="center"><a href="/" class="caption-12green"><font size="1">トップページ</font></a></td>
          <td align="center"><font size="1">|</font></td>
          <td align="center"><a href="/acry-ya_new/htm2/htm/itemlist.htm" class="caption-12green"><font size="1">商品一覧</font></a></td>
          <td align="center"><font size="1">|</font></td>
          <td align="center"><a href="/acry-ya_new/html/acry_ya_top/htm/acry_ya.htm" class="caption-12green"><font size="1">会社概要</font></a></td>
          <td align="center"><font size="1">|</font></td>
          <td align="center"><a href="/acry-ya_new/htm2/htm/privacy_policy.html" class="caption-12green"><font size="1">プライバシーポリシー</font></a></td>
          <td align="center"><font size="1">|</font></td>
          <td align="center"><a href="/acry-ya_new/html/contact_top/htm/contact.htm" class="caption-12green"><font size="1">お問い合わせ</font></a></td>
          <td align="center"><font size="1">|</font></td>
        </tr>
      </table>
    </td>
  </tr>
</table><!-- #EndLibraryItem --></td>
  </tr>
</table>
<map name="Map">
  <area shape="rect" coords="175,-1,239,35" href="ita-img/kakou_ita_rei.html#kakunuki" target="_blank">
</map>
</body>
</html>
            ',
        );
        $this->product_service->customRegister($insert_data);
    }
}
