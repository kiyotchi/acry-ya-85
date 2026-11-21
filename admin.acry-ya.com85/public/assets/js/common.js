// JavaScript Document	
$(function () {

    //テキストリンクをクリックしたら
    $(document).on("click", ".modal-open", function () {
        //body内の最後に<div id="modal-bg"></div>を挿入
        $("body").append('<div id="modal-bg"></div>');

        var targetID = $(this).data('target');
        $("#" + targetID).addClass("current");

        //画面中央を計算する関数を実行
        modalResize();

        //モーダルウィンドウを表示
        $("#modal-bg,.modal-main.current").fadeIn("fast");

        //画面のどこかをクリックしたらモーダルを閉じる
        $("#modal-bg,.modal-close").click(function () {
            $(".modal-main.current,#modal-bg").fadeOut("fast", function () {
                //挿入した<div id="modal-bg"></div>を削除
                $('#modal-bg').remove();
                $('.modal-main.current').removeClass("current");
            });
        });

        //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
        $(window).resize(modalResize);

        function modalResize() {

            var w = $(window).width();
            var h = $(window).height();

            var cw = $(".modal-main.current").outerWidth();
            var ch = $(".modal-main.current").outerHeight();

            //取得した値をcssに追加する
            $(".modal-main.current").css({
                "left": ((w - cw) / 2) + "px",
                "top": ((h - ch) / 2) + "px"
            });
        }

        return false;
    });

    // フォーム入力値クリア
    $(document).on("click", ".singleCheck", function () {
        let inputName = $(this).attr('name');

        if ($(this).prop('checked')){
            // 一旦全てをクリアして再チェックする
            $("[name='"+inputName+"']").prop('checked', false);
            $(this).prop('checked', true);
        }
    });

    // タブ切り替え
    $('.tab-menu li').each(function (index, element) {
        if( $(element).hasClass('active') ) {
            let tabName = $(this).data('name');
            let tabBlock = $(this).parents('.tab-menu').next();
            $(tabBlock).children().hide();
            $('.'+tabName, tabBlock).show();
        }
    });

    $(document).on("click", ".tab-menu li", function () {
        let tabName = $(this).data('name');
        let tabMenu = $(this).parents('.tab-menu');
        let tabBlock = $(this).parents('.tab-menu').next();
        $(tabBlock).children().hide();
        $('.'+tabName, tabBlock).show();
        $(tabMenu).children().removeClass('active');
        $(this).addClass('active');
    });

    // フォーム入力値クリア
    $(document).on("click", ".btn-clear", function () {
        $(this.form).find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);
    });

    // 削除確認
    $(document).on("click", ".procArea-delete", function () {
        if (window.confirm("データを削除しますがよろしいですか？")) {
        } else {
            return false;
        }
    });
});
