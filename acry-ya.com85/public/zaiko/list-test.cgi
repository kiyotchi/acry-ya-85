#!/usr/local/bin/perl
#       ↑あなたが加入しているプロバイダの｢perl｣言語が使用できる
#         パスを指定します。一般的に｢#!/usr/local/bin/perl｣で大丈夫

#=======================================================================================
#		  CSV ListView Version 1.07
#
#	      Copyright(C) 2001 Club HIRO by hiro
#
#		 E-Mail kerberos@nissin.ne.jp
#		 URL http://www.nissin.ne.jp/~demo/listview/
#
# <使用上の注意>
#	データファイルの形式は[---,---,---,---,---]のCSV形式です。
#	サンプル付属のデータファイル(data.csv)を参考にしてください。
#	商品の追加はいくつでも可能です。設定で最大登録数を指定してください。
#	商品についての項目数は商品名を含んで５項目までです。
#	基本的に当スクリプトの使用、改造はフリーです。
#	但し著作権保持の為、コピーライトだけは書き換えないで下さい。
#	商用目的の場合は、上記宛先までメールください。
#
# <新規作成>-2001/10/10
# <改変履歴>-v1.00 - 2001/10/10 新規作成 
#	     v1.01 - 2001/10/20 商品名の背景色をWEBから変更できるように修正。 
#	     v1.02 - 2001/10/20 i-Modeに対応いたしました。 
#	     v1.03 - 2002/01/18 商品検索を追加。 
#	     v1.04 - 2002/01/19 i-Mode用ページに検索機能を追加。 
#	     v1.05 - 2002/08/20 入力項目の改行を許可。 
#	     v1.06 - 2003/07/11 i-Mode用ページに編集機能を追加。 
#	     v1.07 - 2003/07/17 - 更新日入力を自動化。
#
#=======================================================================================
#日本語コード変換モジュール
require 'jcode.pl';

#---------------------------------------
#このCGIファイルの名前
$cgi = 'list-test.cgi';
#---------------------------------------
#メッセージを格納するデータベースファイル
$datafile = 'zaiko6.csv';
#---------------------------------------
#戻り先(ログオフ時)のアドレス
$back_page = './list-test.cgi';
#=======================================
#コピーライト (著作権保持の為、書き換えないで下さい。)
#どうしても書き換えたいときは、作者(hiro)までメールを下さい。
#PC用
$copyright = '<font size="2"><a href="/"><u>アクリ屋ドットコム</u></a></font><br><font size="1">Copyright(C) 2001 <a href=http://www.nissin.ne.jp/demo/listview/>internet Club HIRO</a> by hiro</font>';
#i-Mode用
$copyright_i = '(C)2001 Club HIRO';
#---------------------------------------
#バックグランドの画像ファイル
$bg_gif = '';
#---------------------------------------
#編集者削除モードのパスワード
$password = 'zaiko7';
#---------------------------------------
#掲示板の名前
#PC用
$title = '発送予定日の目安TEST';
#i-Mode用
$title_i = '発送予定日の目安';
#---------------------------------------
#バックグランドカラー
$bg_color = '#FFFFFF';
#テキストの文字色
$text_color = '#333333';
#リンク文字色
$link_color = '#333333';
#Ｖリンク文字色
$vlink_color = '#333333';
#Ａリンク文字色
$alink_color = '#333333';
#題名の文字色
$subject_color = '#333333';
#ベース文字の文字サイズ
$base_text_size = '2';
#タイトル文字の文字サイズ
$title_text_size = '2';
#データ文字の文字サイズ
$data_text_size = '2';
#i-Mode用文字色
$text_color_i = '#000000';
#---------------------------------------
#データテーブルの枠の色
$table_border_color = '#999999';
#データテーブルのセルの背景色
$cell_bg_color = '#FFFFFF';
#---------------------------------------
#データファイルの項目名
#PC用
$data_text_01 = '分類';
$data_text_02 = '品番';
$data_text_03 = '品名';
$data_text_04 = '<font size=1>土日祭日及び弊社<br>休業日を除いた</font><br><font color=#ccoooo>弊社発送<br>予定(日後)</font>';


#i-Mode用
$data_text_01_i = '分類';
$data_text_02_i = '品番';
$data_text_03_i = '品名';
$data_text_04_i = '<font size=1>土日祭日及び弊社<br>休業日を除いた</font><br>弊社発送<br>予定(日後)';


#---------------------------------------
#項目名のセルの背景色
$data_color = '#FFFFFF';
#---------------------------------------
#データセルの表示縦位置を個別に指定
$cell_valign_data01 = 'center';
$cell_valign_data02 = 'center';
$cell_valign_data03 = 'center';
$cell_valign_data04 = 'center';

#---------------------------------------
#データセルの表示横位置を個別に指定
$cell_align_data01 = 'center';
$cell_align_data02 = 'left';
$cell_align_data03 = 'left';
$cell_align_data04 = 'center';

#---------------------------------------
#商品登録・修正欄の長さ指定
$input_text_size_01 = '10';
$input_text_size_02 = '10';
$input_text_size_03 = '70';
$input_text_size_04 = '10';

#---------------------------------------
#時計表示のコメント
$text_time_info = '- 現在 -';
#時計表示のコメントの文字色
$text_color_time_info = '#ffffff';
#時計表示の時刻の文字色
$text_color_time = '#ffffff';
#---------------------------------------
#<STYLE>タグの使用時
$style = '
	BODY,TD,TH{ font-family:"ＭＳ Ｐゴシック, Osaka, ヒラギノ角ゴ Pro W3, sans-serif"; font-size:10pt; }
	input,textarea,select{
	font-family     :ＭＳ Ｐゴシック, Osaka, ヒラギノ角ゴ Pro W3, sans-serif;   /* 文字フォント*/
	font-size       :10pt;            /* 文字サイズ  */
	color           :#333333;         /*   文字色    */
	background-color:#FFFFFF;         /*   背景色    */
	border          :1 solided #333333;/* 線の太さ、色*/
	}
	A:link     {text-decoration:none}
	A:visited  {text-decoration:none}
	A:hover    {text-decoration:none}
        body {

';
#登録可能な商品数（極端に多くするとパフォーマンスが低下します）
$max = 600;
#---------------------------------------
#1ページに表示する商品の数
#PC用
$pagevew = 400;
#i-Mode用
$pagevew_i = 5;
#---------------------------------------
#タグの使用　'yes' / 'no'
$tag = 'yes';
#---------------------------------------
#編集者登録用ボタンの表示　'yes' / 'no'
$mntbutton = 'yes';
#=======================================================================================
#			初期設定が必要なのはここまでです。
#=======================================================================================
$ENV{'TZ'} = "JST-9"; 
($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
	$year += 1900;
	$month = sprintf("%02d",$mon + 1);
	$mday = sprintf("%02d",$mday);
	$hour = sprintf("%02d",$hour);
	$min = sprintf("%02d",$min);
	$sec = sprintf("%02d",$sec);
	#日付時刻のフォーマットを整えます
	$youbi = ('日','月','火','水','木','金','土') [$wday];
	$date_now = "$year年$month月$mday日($youbi) $hour:$min:$sec";
	$date_refresh = "$year/$month/$mday";

$agent = $ENV{'HTTP_USER_AGENT'};
$agent =~ s/\,//g;

$textwidth = 60;
if ($agent =~ /MSIE\ 3/i) { $textwidth = $textwidth * 1.5; }
if ($ENV{'REQUEST_METHOD'} eq "POST") {
	read(STDIN, $formdata, $ENV{'CONTENT_LENGTH'});
} else { $formdata = $ENV{'QUERY_STRING'}; }
@pairs = split(/&/,$formdata);
foreach $pair (@pairs) {
	($name, $value) = split(/=/, $pair);
	$value =~ tr/+/ /;
	$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
	if ($tag eq 'no') {
		$value =~ s/</&lt;/g;
		$value =~ s/>/&gt;/g;
	}
	$value =~ s/\n//g;
	$value =~ s/\,/，/g;
	&jcode'convert(*value,'sjis');
	$FORM{$name} = $value;
}

if (!open(NOTE,"$datafile")) { &error(bad_file); }
@DATA = <NOTE>;
close(NOTE);

#押されたボタンや、呼び出しに対しての分岐
if (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'search' && $FORM{'DATA'} ne '') { &html_search_i; }
elsif (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
#elsif (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'sub' && $FORM{'password'} eq $password) { &edit_sub_html_i; }
elsif (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'regist') { &regist; &edit_html_i; }
elsif (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'regist' && $FORM{'button'} eq '削除') { &delete; &edit_html_i; }
elsif (index($agent, "DoCoMo/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
elsif (index($agent, "DoCoMo/") == 0 ) { &html_i; }
elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'search' && $FORM{'DATA'} ne '') { &html_search_i; }
elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
#elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'sub' && $FORM{'password'} eq $password) { &edit_sub_html_i; }
elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'regist') { &regist; &edit_html_i; }
elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'regist' && $FORM{'button'} eq '削除') { &delete; &edit_html_i; }
elsif (index($agent, "J-PHONE/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
elsif (index($agent, "J-PHONE/") == 0 ) { &html_i; }
elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'search' && $FORM{'DATA'} ne '') { &html_search_i; }
elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
#elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'sub' && $FORM{'password'} eq $password) { &edit_sub_html_i; }
elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'regist') { &regist; &edit_html_i; }
elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'regist' && $FORM{'button'} eq '削除') { &delete; &edit_html_i; }
elsif (index($agent, "UP.Browser/") == 0 && $FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html_i; }
elsif (index($agent, "UP.Browser/") == 0 ) { &html_i; }
elsif ($FORM{'action'} eq 'search' && $FORM{'DATA'} ne '') { &html_search; }
elsif ($FORM{'action'} eq 'regist') { &regist; &edit_html; }
elsif ($FORM{'action'} eq 'regist' && $FORM{'button'} eq '削除') { &delete; &edit_html; }
elsif ($FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { &edit_html; }
else { &html; }
#=======================================================================================
sub html_i {
	print "Content-type: text/html\n\n";
	print "<html><head><title>$title</title>\n";
	print "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=x-sjis\">\n";
	print "</head>\n";
	print "<body><font color=$text_color_i size=2>\n";
	print "<center>$title_i</center><BR>\n";
	print "<form action=$cgi method=POST>\n";
	print "<input type=hidden name=action value=search>\n";
	print "<input type=text name=DATA size=8>\n";
	print "<input type=submit value=検索>\n";
	print "</form>\n";
	print "<hr size=1 color=#000000>\n";
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$end_data = @DATA - 1;
	$page_end = $pline + ($pagevew_i - 1);
	if ($page_end >= $end_data) { $page_end = $end_data; }
	foreach ($pline .. $page_end) {
		($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$DATA[$_]);
		$data01 =~ s/\r/<br>&nbsp;/g;
		$data02 =~ s/\r/<br>&nbsp;/g;
		$data03 =~ s/\r/<br>&nbsp;/g;
		$data04 =~ s/\r/<br>&nbsp;/g;
				if ($color eq Yellow) { print "<font color=#FFFF99>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Red) { print "<font color=#FF0000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Blue) { print "<font color=#0000FF>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Green) { print "<font color=#00FF00>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				else { print "<font color=#000000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
			print "$data_text_02_i>$data02<br>\n";
			print "$data_text_03_i>$data03<br>\n";
			print "$data_text_04_i>$data04<br>\n";
			
	print "<hr size=1 color=#000000>\n";
	}
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$page_back = $pline - $pagevew_i;
	if ($page_back < 0) { $back_line = 0; }
	else { $back_line = $page_back; }
	if ($FORM{'pline'} > ($pagevew_i - 1)) {
		print "<form method=POST action=$cgi>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $back_line . ">\n";
			print "<input type=submit value=前頁>\n";
	}
	else { print "&nbsp;&nbsp;&nbsp;&nbsp;\n"; }
	$next_line = $page_end + 1;
	if ($page_end ne $end_data) {
		print "<form method=POST action=$cgi>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $next_line . ">\n";
			print "<input type=submit value=次頁>\n";
		print "</form>\n";
	}
	else { print "&nbsp;&nbsp;&nbsp;&nbsp;<br>\n"; }

	if ($mntbutton eq 'yes') {
		print "<form method=POST action=$cgi>\n";
			print "<input type=hidden name=action value=edit>\n";
			print "<input type=password size=8 name=password>\n";
			print "<input type=submit value=編集><br>\n";
		print "</form>\n";
	}

	print "<center>$copyright_i</center>\n";
	print "</font></body></html>\n";
	exit;
}
#=======================================================================================
sub html_search_i {
	print "Content-type: text/html\n\n";
	print "<html><head><title>$title</title>\n";
	print "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=x-sjis\">\n";
	print "</head>\n";
	print "<body><font color=$text_color_i size=2>\n";
	print "<center>$title_i</center><BR>\n";
	print "<form action=$cgi method=POST>\n";
	print "<input type=hidden name=action value=search>\n";
	print "<input type=text name=DATA size=8>\n";
	print "<input type=submit value=検索>\n";
	print "</form>\n";
	print "<hr size=1 color=#000000>\n";
	if ($FORM{'DATA'} ne "") {

		$word = $FORM{'DATA'};
		$word =~ s/　/ /g;
		$word =~ s/\t/ /g;
		@pairs = split(/ /,$word);

		open(IN,"$datafile") || &error("Open Error : $datafile","no");
		$i=0;
		while ($_ = <IN>) {
			$flag = 0;
			foreach $pair (@pairs) {
				if (index($_,$pair) >= 0) {
					$flag=1;
				}
			}
			if ($flag == 0) { next; }

			$i++;
			($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$_);
		$data01 =~ s/\r/<br>&nbsp;/g;
		$data02 =~ s/\r/<br>&nbsp;/g;
		$data03 =~ s/\r/<br>&nbsp;/g;
		$data04 =~ s/\r/<br>&nbsp;/g;
				if ($color eq Yellow) { print "<font color=#FFFF99>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Red) { print "<font color=#FF0000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Blue) { print "<font color=#0000FF>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Green) { print "<font color=#00FF00>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				else { print "<font color=#000000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
			print "$data_text_02_i>$data02<br>\n";
			print "$data_text_03_i>$data03<br>\n";
			print "$data_text_04_i>$data04<br>\n";
			
	print "<hr size=1 color=#000000>\n";
		}
		close(IN);
	}
		print "- <b>$i</b>件 -<BR>\n";
	print "<form action=$cgi method=POST>\n";
	print "<input type=submit value=一覧表\示>\n";
	print "</form>\n";
	print "<hr size=1 color=#000000>\n";
	print "<center>$copyright_i</center>\n";
	print "</font></body></html>\n";
	exit;
}
#=======================================================================================
sub edit_html_i {

	print "Content-type: text/html\n\n";
	print "<html><head><title>$title</title>\n";
	print "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=x-sjis\">\n";
	print "</head>\n";
	print "<body><font color=$text_color_i size=2>\n";
	print "<center>$title_i</center><BR>\n";
	print "<form action=$cgi method=POST><input type=hidden name=action value=search><input type=submit value=一覧表\示></form>\n";
#	print "<form action=$cgi method=POST>\n";
#	print "<input type=hidden name=code value=$FORM{'code'}>\n";
#	print "<input type=hidden name=action value=sub>\n";
#	print "<input type=hidden name=password value=$FORM{'password'}>\n";
#	print "<input type=submit value=追加></form>\n";

	if ($FORM{'code'} < 1) { $data01 = ''; $data02 = ''; $data03 = ''; $data04 = '';}
	else {
		foreach $line (@DATA) {
			($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$line);
			if ($FORM{'code'} == $code) { last; }
		}
	}

	print "<div align=left>\n";
	print "<form name=inputform action=$cgi method=POST>\n";
		print "<input type=hidden name=action value=regist>\n";
		print "<input type=hidden name=code value=$FORM{'code'}>\n";
		print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "&nbsp;$data_text_01_i:<textarea rows=1 cols=10 name=data01>$data01</textarea><br>\n";
			print "&nbsp;文字色:<select name=color><option value=$color selected>$color<option value=Yellow>Yellow<option value=Red>Red<option value=Blue>Blue<option value=Green>Green</select><br>\n";
			print "&nbsp;$data_text_02_i:<textarea rows=1 cols=10 name=data02>$data02</textarea><br>\n";
			print "&nbsp;$data_text_03_i:<textarea rows=1 cols=10 name=data03>$data03</textarea><br>\n";
			print "&nbsp;$data_text_04_i:<textarea rows=1 cols=10 name=data04>$data04</textarea><br>\n";
		
			print "※スペースは[全角]で<br>\n";

			print "<input type=submit name=button value=登録>\n";
		if ($FORM{'code'} > 0) { print "　　　<input type=submit name=button value=削除>\n"; }
	print "</form>\n";
	print "</div>\n";

	print "<hr size=1 color=#000000>\n";
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$end_data = @DATA - 1;
	$page_end = $pline + ($pagevew_i - 1);
	if ($page_end >= $end_data) { $page_end = $end_data; }
	foreach ($pline .. $page_end) {
		($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$DATA[$_]);
		$data01 =~ s/\r/<br>&nbsp;/g;
		$data02 =~ s/\r/<br>&nbsp;/g;
		$data03 =~ s/\r/<br>&nbsp;/g;
		$data04 =~ s/\r/<br>&nbsp;/g;
			print "<form action=$cgi method=POST>\n";
			print "<input type=hidden name=action value=edit>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=code value=$code>\n";
				if ($color eq Yellow) { print "<font color=#FFFF99>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Red) { print "<font color=#FF0000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Blue) { print "<font color=#0000FF>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				elsif ($color eq Green) { print "<font color=#00FF00>-&nbsp;$data01&nbsp;-</font><br>\n"; }
				else { print "<font color=#000000>-&nbsp;$data01&nbsp;-</font><br>\n"; }
			print "$data_text_02_i>$data02<br>\n";
			print "$data_text_03_i>$data03<br>\n";
			print "$data_text_04_i>$data04<br>\n";

				if ($FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { print "<input type=submit value=編集>\n"; }
			print "</form>\n";
	print "<hr size=1 color=#000000>\n";
	}
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$page_back = $pline - $pagevew_i;
	if ($page_back < 0) { $back_line = 0; }
	else { $back_line = $page_back; }
	if ($FORM{'pline'} > ($pagevew_i - 1)) {
		print "<form method=POST action=$cgi>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $back_line . ">\n";
			print "<input type=submit value=前頁>\n";
	}
	else { print "&nbsp;&nbsp;&nbsp;&nbsp;\n"; }
	$next_line = $page_end + 1;
	if ($page_end ne $end_data) {
		print "<form method=POST action=$cgi>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $next_line . ">\n";
			print "<input type=submit value=次頁>\n";
		print "</form>\n";
	}
	else { print "&nbsp;&nbsp;&nbsp;&nbsp;<br>\n"; }

	print "<center>$copyright_i</center>\n";
	print "</font></body></html>\n";
	exit;
}
#=======================================================================================
sub edit_sub_html_i {

	print "Content-type: text/html\n\n";
	print "<html><head><title>$title</title>\n";
	print "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=x-sjis\">\n";
	print "</head>\n";
	print "<body><font color=$text_color_i size=2>\n";
	print "<center>$title_i</center><BR>\n";
	print "<form action=$cgi method=POST><input type=hidden name=action value=search><input type=submit value=一覧表\示></form>\n";

	if ($FORM{'code'} < 1) { $data01 = ''; $data02 = ''; $data03 = ''; $data04 = '';}
	else {
		foreach $line (@DATA) {
			($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$line);
			if ($FORM{'code'} == $code) { last; }
		}
	}

	print "<div align=left>\n";
	print "<form name=inputform action=$cgi method=POST>\n";
		print "<input type=hidden name=action value=regist>\n";
		print "<input type=hidden name=code value=$FORM{'code'}>\n";
		print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "&nbsp;$data_text_01_i:<textarea rows=1 cols=10 name=data01>$data01</textarea><br>\n";
			print "&nbsp;文字色:<select name=color><option value=$color selected>$color<option value=Yellow>Yellow<option value=Red>Red<option value=Blue>Blue<option value=Green>Green</select><br>\n";
			print "&nbsp;$data_text_02_i:<textarea rows=1 cols=10 name=data02>$data02</textarea><br>\n";
			print "&nbsp;$data_text_03_i:<textarea rows=1 cols=10 name=data03>$data03</textarea><br>\n";
			print "&nbsp;$data_text_04_i:<textarea rows=1 cols=10 name=data04>$data04</textarea><br>\n";
			print "&nbsp;$data_text_05_i:<input type=text size=10 name=data05 value=$date_refresh><br>\n";
			print "※スペースは[全角]で<br>\n";

			print "<input type=submit name=button value=登録>\n";
		if ($FORM{'code'} > 0) { print "　　　<input type=submit name=button value=削除>\n"; }
	print "</form>\n";
	print "</div>\n";

	print "<center>$copyright_i</center>\n";
	print "</font></body></html>\n";
	exit;
}
#=======================================================================================
sub html_head {
	print "Content-type: text/html\n\n";
	print "<html><head><title>$title</title>\n";
	print "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=x-sjis\">\n";

	print <<"EOF";
	<STYLE>
	<!--
	$style
	-->
	</STYLE>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
</script>





<center>

<TABLE cellPadding=5 width=765 align=center>
  <TBODY>
  <TR>
    <TD bgColor=#ffffff height=25><FONT size=2><A 
      href=""><U>TOPページへ戻る</U></A> &gt; 
  \発\送\予\定\の\目安</FONT></TD></TR>
  <TR>
    <TD vAlign=top width="100%" bgColor=#ffffff colSpan=2 height=22>
      <TABLE cellSpacing=1 cellPadding=3 width="100%" border=0>
        <TBODY>
        <TR>
          <TD align=left bgColor=#3acdb1 height=25><STRONG><FONT color=#ffffff 
            size=3>\発\送\予\定\日\の\目安</FONT></STRONG></TD></TR>
        <TR>
          <TD align=middle bgColor=#ffffff><table width="100%"  border="0" cellspacing="1" cellpadding="1">
              <tr>
                <td colspan="2"><FONT size=3><STRONG>\下\予\定\表\の<font color="#FF0000">土日祭日および弊社休業日を除いた</font>日数後、弊社発送となります。</STRONG></FONT></td>
                <td width="53%" rowspan="3"><TABLE width="100%" border=0 cellPadding=3 cellSpacing=1 bgcolor="#999999">
                  <TBODY>
                    <TR>
                      <TD align=center bgColor=#999999 height=25><STRONG><FONT 
                        color=#ffffff size=2>正式注文について</FONT></STRONG></TD>
                    </TR>
                    <TR>
                      <TD bgColor=#ffffff><table width="100%"  border="0" cellpadding="3" cellspacing="1" bgcolor="#999999">
                          <tr>
                            <td height="20" bgcolor="#E1E1E1"><font 
                        size=2><strong>銀行振込・郵便振替・コンビニ支払いの場合</strong></font></td>
                          </tr>
                        </table>
                          <FONT 
                        size=2>お客様のお振込みを弊社にて確認した時点が<STRONG>【正式注文】</STRONG>です。<BR>
                          <BR>
                          </FONT>
                          <table width="100%"  border="0" cellpadding="3" cellspacing="1" bgcolor="#999999">
                            <tr>
                              <td height="20" bgcolor="#E1E1E1"><font 
                        size=2><font 
                        size=2><strong>メール注文等ショッピングカート以外のご注文の場合</strong></font></font></td>
                            </tr>
                          </table>
                          <FONT 
                        size=2><FONT 
                        size=2>ご注文後、弊社からお送りする「オーダー確認メール」をお客様にて返信して頂いた時点が<STRONG>【正式注文】</STRONG>です。<BR>
                          <BR>
        ■状況やご注文数によって、\表\示\予\定\よ\り早めにお送りできる場合や日数を頂く場合があります。<br>
        （\表\示\の日程はご注文数が少ない場合になります。数が多い場合は\表\示\と異なります。）<BR>
        <BR>
        ■発送\予\定\日は確約ではございません。万が一の場合には、\予\定\通\りに発送が出来ない場合があります。</FONT></FONT></TD>
                    </TR>
                  </TBODY>
                </TABLE></td>
              </tr>
              <tr>
                <td width="24%" valign="top"><TABLE cellSpacing=1 cellPadding=1 width="100%" 
                  bgColor=#cccccc border=0>
                  <TBODY>
                    <TR align=middle bgColor=#999999>
                      <TD vAlign=center colSpan=8 height=25><FONT 
                        color=#ffffff 
                        size=2><STRONG>\発\送\予\定\が３～５日の<br>
                        製品の例</STRONG></FONT></TD>
                    </TR>
                    <TR align=center>
                      <TD height=25 bgColor=#FFFFFF><FONT 
                      size=2>&nbsp;</FONT></TD>
                      <TD colSpan=2 bgColor=#FFCCCC><FONT size=2>休業</FONT></TD>
                      <TD colSpan=5 bgColor=#FFFFFF><FONT 
                      size=2>弊社営業日</FONT></TD>
                    </TR>
                    <TR align=center bgColor=#ffffcc>
                      <TD height=25 bgColor=#ffffff><FONT 
                        size=2>金</FONT></TD>
                      <TD bgColor=#FFCCCC><FONT size=2>土</FONT></TD>
                      <TD bgColor=#FFCCCC><FONT size=2>日</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>月</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>火</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>水</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>木</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>金</FONT></TD>
                    </TR>
                    <TR align=center bgColor=#ffffff>
                      <TD height=25 bgColor=#ffffff><FONT size=2>日数後</FONT></TD>
                      <TD bgColor=#FFCCCC>&nbsp;</TD>
                      <TD bgColor=#FFCCCC>&nbsp;</TD>
                      <TD><FONT size=2>1</FONT></TD>
                      <TD><FONT size=2>2</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>3<BR>
                      </FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>4</FONT></TD>
                      <TD bgColor=#ffffff><FONT size=2>5</FONT></TD>
                    </TR>
                    <TR align=center bgColor=#ffffff>
                      <TD height=25 bgColor=#33ffff><FONT 
                        size=2><STRONG>正式<BR>
                        注文</STRONG></FONT></TD>
                      <TD bgColor=#FFCCCC>&nbsp;</TD>
                      <TD bgColor=#FFCCCC>&nbsp;</TD>
                      <TD>&nbsp;</TD>
                      <TD>&nbsp;</TD>
                      <TD colSpan=3 bgColor=#33ffff><FONT 
                        size=2><STRONG>弊社発送</STRONG></FONT></TD>
                    </TR>
                  </TBODY>
                </TABLE>
                  
                  <TABLE cellSpacing=3 cellPadding=3 width="100%" border=0>
                    <TBODY>
                      <TR>
                        <TD bgColor=#a6ffff><FONT 
                        size=2>上\表\の\日\数\は例です。実際の日数は下の\商\品\別\表\に\表\記\された日数後になります。</FONT></TD>
                      </TR>
                    </TBODY>
                  </TABLE></td>
                <td width="23%" valign="top"><div align="center"><span class="caption-12gray">--- 弊社営業日</span> ---<br>
                        <iframe src="/cgibin/cal4118/index.html" width="180" height="215" frameborder="0" scrolling="no"></iframe>
                      </iframe>
                      </div></td>
              </tr>
              <tr>
                <td colspan="2" valign="top"><INPUT onclick="MM_openBrWindow('/cgibin/listview/todokebi-meyasu.htm','','width=650,height=300')" type=submit value=弊社発送後のお届け日程はこちら name=Submit></td>
                </tr>
            </table>
            
            </TD>
        </TR></TBODY></TABLE><BR>
      <TABLE cellSpacing=1 cellPadding=1 width=300 bgColor=#999999 border=0>
        <TBODY>
        <TR>
          <TD bgColor=#ffffff><FONT 
            size=2>＜品番検索について＞<BR>品番の全てを入力して該当が\表\示\されない時は、<BR>最初の２又は３桁のアルファベットを入力して下さい。<BR><BR>例：品番SGTCC-45B 
            → 品番SGTで検索</FONT></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
	<table border=0 cellPadding=3 cellSpacing=5>
	<tr><form action=$back_page method=POST TARGET=_parent>
	  <td align=center>&nbsp;</td>
	</form>
	<form action=$cgi method=POST>
	<input type=hidden name=action value=search>
	<td align=center><input type=submit value=一覧表\示></td>
	<td align=center><table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td><input type=hidden name=action value=search></td>
      <td align=right>&nbsp;&nbsp;
          <input type=text name=DATA size=20>
          <input type=submit value=検索>
      </td>
      </tr>
    </table></td>
	<td align=center><input type=submit value=戻る>　　　　　　　<IFRAME NAME="uri" SRC="date.shtml" WIDTH=300 HEIGHT=28 SCROLLING="no" FRAMEBORDER=0 BORDER=0></IFRAME>
</td>
	</form></tr>
  </table>
    <table border=0 cellPadding=3 cellSpacing=0>
	<tr><td align=center><!--
	<FONT color=$text_color_time_info size=$base_text_size>$text_time_info</FONT></td>
	<td align=center>
	<font size=$base_text_size color=$text_color_time>$date_now</font>--></td>
EOF
	if ($FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) {  }
	else {
	print <<"EOF";
	</body>
EOF
	}
	print " </tr>\n";
	print "	</table>\n";
}
#=======================================================================================
sub comment_form {
#	if ($FORM{'code'} > 0) { 
	print "<div align=left>\n";
	print "<form name=inputform action=$cgi method=POST>\n";
		print "<input type=hidden name=action value=regist>\n";
		print "<input type=hidden name=code value=$FORM{'code'}>\n";
		print "<input type=hidden name=password value=$FORM{'password'}>\n";
		print "<table border=0 cellpadding=1 cellspacing=1 bgcolor=#FFF0DF>\n";
			print "<tr><td align=right bgcolor=$data_color><font size=$data_text_size>&nbsp;$data_text_01:</font></td><td bgcolor=#FFF0DF><font size=$data_text_size><textarea rows=2 cols=$input_text_size_01 name=data01>$data01</textarea></font></td></tr>\n";
			print "<tr><td align=right bgcolor=$data_color><font size=$data_text_size>&nbsp;色の指定:</font></td><td bgcolor=#FFF0DF><font size=$data_text_size><select name=color><option value=$color selected>$color<option value=white>white<option value=Yellow>Yellow<option value=Red>Red<option value=Blue>Blue<option value=Green>Green</select></font></td></tr>\n";
			print "<tr><td align=right bgcolor=$data_color><font size=$data_text_size>&nbsp;$data_text_02:</font></td><td bgcolor=#FFF0DF><font size=$data_text_size><textarea rows=2 cols=$input_text_size_02 name=data02>$data02</textarea></font></td></tr>\n";
			print "<tr><td align=right bgcolor=$data_color><font size=$data_text_size>&nbsp;$data_text_03:</font></td><td bgcolor=#FFF0DF><font size=$data_text_size><textarea rows=2 cols=$input_text_size_03 name=data03>$data03</textarea></font></td></tr>\n";
			print "<tr><td align=right bgcolor=$data_color><font size=$data_text_size>&nbsp;$data_text_04:</font></td><td bgcolor=#FFF0DF><font size=$data_text_size><textarea rows=2 cols=$input_text_size_04 name=data04>$data04</textarea></font></td></tr>\n";

			print "<tr><td colspan=2 bgcolor=$bg_color><font size=$data_text_size>※注意　スペースは[全角/かな]で入力してください。</font></td></tr>\n";
		print "</table>\n";

			print "<input type=submit name=button value=登録>\n";
		if ($FORM{'code'} > 0) { print "　　　<input type=submit name=button value=削除>\n"; }
	print "</form>\n";
	print "</div>\n";
#	}
}
#=======================================================================================
sub html {
	&html_head;
	print "<div align=center>\n";
	&listvew;
	print "</div>\n";
	print "<div align=right>\n";
	if ($mntbutton eq 'yes') {
		print "<form action=$cgi method=POST>\n";
			print "<input type=hidden name=action value=edit>\n";
			print "<input type=password size=10 name=password>\n";
			print "<input type=submit value=編集><br>\n";
		print "</form>\n";
	}
	print "</div>\n";
	print "</td></tr></table>\n";
	print "<br><font size=$base_text_size>$copyright</font>\n";
	print "</center>\n";
	print "</body></html>\n";
	exit;
}
#=======================================================================================
sub html_search {
	&html_head;
	print "<div align=center>\n";
	&listvew_search;
	print "</div>\n";
	print "<div align=right>\n";
	if ($mntbutton eq 'yes') {
		print "<form action=$cgi method=POST>\n";
			print "<input type=hidden name=action value=edit>\n";
			print "<input type=password size=10 name=password>\n";
			print "<input type=submit value=編集><br>\n";
		print "</form>\n";
	}
	print "</div>\n";
	print "</td></tr></table>\n";
	print "<br><font size=$base_text_size>$copyright</font>\n";
	print "</center>\n";
	print "</body></html>\n";
	exit;
}
#=======================================================================================
sub listvew_search {
		print "<table border=0 cellpadding=1 cellspacing=1 bgcolor=$table_border_color>\n";
		print "<tr>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_01&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_02&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_03&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_04&nbsp;</font></td>\n";

		print "</tr>\n";

	if ($FORM{'DATA'} ne "") {

		$word = $FORM{'DATA'};
		$word =~ s/　/ /g;
		$word =~ s/\t/ /g;
		@pairs = split(/ /,$word);

		open(IN,"$datafile") || &error("Open Error : $datafile","no");
		$i=0;
		while ($_ = <IN>) {
			$flag = 0;
			foreach $pair (@pairs) {
				if (index($_,$pair) >= 0) {
					$flag=1;
				}
			}
			if ($flag == 0) { next; }

			$i++;
			($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$_);
		$data01 =~ s/\r/<br>&nbsp;/g;
		$data02 =~ s/\r/<br>&nbsp;/g;
		$data03 =~ s/\r/<br>&nbsp;/g;
		$data04 =~ s/\r/<br>&nbsp;/g;
			print "<tr>\n";
				if ($color eq white) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#F4FFFD nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Yellow) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#FFFF99 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Red) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#FFC8C8 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Blue) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#E6E6FF nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Green) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#C8FFC8 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				else { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
			print "<td valign=$cell_valign_data02 align=$cell_align_data02 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data02&nbsp;</font></td>\n";
			print "<td valign=$cell_valign_data03 align=$cell_align_data03 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data03&nbsp;</font></td>\n";
			print "<td valign=$cell_valign_data04 align=$cell_align_data04 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data04&nbsp;</font></td>\n";
			print "</tr>\n";
		}
		close(IN);
	}
		print "</table>\n";
		print "検索結果は <b>$i</b>件です。\n";
}
#=======================================================================================
sub edit_html {
	&html_head;
	print "<div align=center>\n";
	if ($FORM{'code'} < 1) { $data01 = ''; $data02 = ''; $data03 = ''; $data04 = '';}
	else {
		foreach $line (@DATA) {
			($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$line);
			if ($FORM{'code'} == $code) { last; }
		}
	}
	&comment_form;
	&listvew;
	print "</div>\n";
	print "</td></tr></table>\n";
	print "<br><font size=$base_text_size>$copyright</font>\n";
	print "</center>\n";
	print "</body></html>\n";
	exit;
}
#=======================================================================================
sub listvew {
		print "<table border=0 cellpadding=1 cellspacing=1 bgcolor=$table_border_color>\n";
		print "<tr>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_01&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_02&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_03&nbsp;</font></td>\n";
		print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>&nbsp;$data_text_04&nbsp;</font></td>\n";
	
			if ($FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { print "<td align=center bgcolor=$data_color nowrap><font size=$data_text_size>編集</font></td>"; }
		print "</tr>\n";
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$end_data = @DATA - 1;
	$page_end = $pline + ($pagevew - 1);
	if ($page_end >= $end_data) { $page_end = $end_data; }
	foreach ($pline .. $page_end) {
		($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$DATA[$_]);
		$data01 =~ s/\r/<br>&nbsp;/g;
		$data02 =~ s/\r/<br>&nbsp;/g;
		$data03 =~ s/\r/<br>&nbsp;/g;
		$data04 =~ s/\r/<br>&nbsp;/g;
			print "<tr><form action=$cgi method=POST>\n";
			print "<input type=hidden name=action value=edit>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=code value=$code>\n";
				if ($color eq white) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#FFFFFF nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Yellow) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#FFFF99 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Red) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#FFC8C8 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Blue) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#E6E6FF nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				elsif ($color eq Green) { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=#C8FFC8 nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
				else { print "<td valign=$cell_valign_data01 align=$cell_align_data01 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data01&nbsp;</font></td>\n"; }
			print "<td valign=$cell_valign_data02 align=$cell_align_data02 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data02&nbsp;</font></td>\n";
			print "<td valign=$cell_valign_data03 align=$cell_align_data03 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data03&nbsp;</font></td>\n";
			print "<td valign=$cell_valign_data04 align=$cell_align_data04 bgcolor=$cell_bg_color nowrap><font size=$data_text_size>&nbsp;$data04&nbsp;</font></td>\n";
				if ($FORM{'action'} eq 'edit' && $FORM{'password'} eq $password) { print "<td align=center bgcolor=$cell_bg_color nowrap><input type=submit value=編集></td>\n"; }
			print "</form></tr>\n";
	}
		print "</table>\n";
	print "<table border=0 cellPadding=3 cellSpacing=0><tr>\n";
	if ($FORM{'pline'} eq '') { $pline = 0; } else { $pline = $FORM{'pline'}; }
	$page_back = $pline - $pagevew;
	if ($page_back < 0) { $back_line = 0; }
	else { $back_line = $page_back; }
	if ($FORM{'pline'} > ($pagevew - 1)) {
		print "<form method=POST action=$cgi>\n";
		print "<td align=center width=100>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $back_line . ">\n";
			print "<input type=submit value=前のページ>\n";
		print "</td>\n";
		print "</form>\n";
	}
	else { print "<td align=center width=100><font size=$data_text_size>&nbsp;</font></td>\n"; }
	$next_line = $page_end + 1;
	if ($page_end ne $end_data) {
		print "<form method=POST action=$cgi>\n";
		print "<td align=center width=100>\n";
			print "<input type=hidden name=action value=$FORM{'action'}>\n";
			print "<input type=hidden name=password value=$FORM{'password'}>\n";
			print "<input type=hidden name=pline value=" . $next_line . ">\n";
			print "<input type=submit value=次のページ>\n";
		print "</td>\n";
		print "</form>\n";
	}
	else { print "<td align=center width=100><font size=$data_text_size>&nbsp;</font></td>\n"; }
	print "</table>\n";
}
#=======================================================================================
sub regist {
	if ($FORM{'data01'} ne '') {
		if ($FORM{'code'} > 0) {
			$i = 0;
			foreach $line (@DATA) {
				($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$line);
				if ($FORM{'code'} == $code) {
					if ($FORM{'button'} eq '削除') {
						splice(@DATA,$i,1);
					} else {
						$line = "$code\,$FORM{'color'}\,$FORM{'data01'}\,$FORM{'data02'}\,$FORM{'data03'}\,$FORM{'data04'}\n";
					}
					last;
				}
				$i++;
			}
		} else {
			$count = @DATA;
			if ($count >= $max) { pop(@DATA); }
			if ($count < 1) {
				$new_code = 1;
			} else {
				($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$DATA[0]);
				$new_code = $code + 1;
			}
			$value = "$new_code\,$FORM{'color'}\,$FORM{'data01'}\,$FORM{'data02'}\,$FORM{'data03'}\,$FORM{'data04'}\n";
			unshift(@DATA,$value);
		}
		if (!open(NOTE,">$datafile")) { &error(bad_file); }
		print NOTE @DATA;
		close(NOTE);
		$FORM{'action'} = 'edit'; $FORM{'code'} = 0;
	}
}
#=======================================================================================
sub delete {
	$i = 0;
	foreach $line (@DATA) {
		($code,$color,$data01,$data02,$data03,$data04) = split(/\,/,$line);
		if ($FORM{'code'} == $code) {
			splice(@DATA,$i,1);
			last;
		}
		$i++;
	}
	if (!open(DB,">$datafile")) { &error(bad_file); }
	print DB @DATA;
	close(DB);
	print "Location: $reload?\n\n";
}
#=======================================================================================
sub error {
	$error = $_[0];
	if ($error eq 'bad_file') { $msg = 'ファイルのオープン、入出力に失敗しました。'; }
	else { $msg = '原因不明のエラーで処理を継続できません。'; }
	&html_head;
	print "<br><br><center><font size=$base_text_size color=#FF8080><b>- ERROR !-</b></font><br><br>\n";
	print "<table border=0 cellpadding=5 cellspacing=1 bgcolor=$table_border_color width =70%><tr>\n";
		print "<td align=center bgcolor=$cell_bg_color><center><br><br>\n";
		print "<font size=$base_text_size color=#FF8080><b>$msg</b></font><br><br><br></td>\n";
	print "</tr></table>\n";
	print "</center></td></tr></table><br><br><br>\n";
	print "<font size=$base_text_size>$copyright</font>\n";
	print "</center></body></html>\n";
	exit;
}
