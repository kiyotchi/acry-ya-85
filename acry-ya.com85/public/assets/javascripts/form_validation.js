function is_kana(str) {
  str = (str == null) ? "" : str;
  if (str.match(/^[\u3040-\u309f-　\-\ー]*$/)) { //"ー"の後ろの文字は全角スペースです。
    return true;
  } else {
    return false;
  }
}

var files = '.form__file';


$(function() {
  if ($(files).length) {
    var file = '.form__file';
    var fileEvent = (function() {
      $('input[type="file"]').each(function() {
        var fileValue = $(this).prop('files')[0];
        var fileValue_flag = fileValue != (undefined || null);
        if (fileValue_flag) {
          $(this).closest(files).find('.file__name').html(fileValue.name);
        }
      });
    }());
  }
});

$(function() {
  var num = $('form#contactForm').find('input[type="number"]');
  num.each(function() {
    var t = $(this);
    var hid = t.parent().find('input[type="hidden"]');
    if(t.val() != hid.val() ) {
      hid.val(t.val());
    }
  });
});

$(function() {

  var required = $('.is-required').not('.noValid').next().find('input[type="text"], textarea');
  var radio = $('.is-required').not('.noValid').parent().find('.radio_group');
  var num_only = $('.num_only');
  var zip = $('.zip_num');
  var tel = $('.tel_num');
  var isNumeric = $('.isNumeric');
  var isFloat = $('.isFloat');
  var number = $('.is-required').not('.noValid').next().find('input[type="number"]');
  var mail = $('#mail_form').find('input[type="text"], input[type="email"]');
  var mail_again = $('#mail_form_again').find('input[type="text"], input[type="email"]');
  var kana = $('.kana_form').find('input[type="text"]');
  var date = $('.date_form').find('input[type="text"]');
  var product = $('.product_input').find('input[type="text"]:first, input[type="number"]:first');
  var file = $('.file_input').find('input[type="file"]');
  var file_type = $('form#contactForm').find('input[type="file"]');
  var file_size = $('form#contactForm').find('input[type="file"]');
  var select = $('.is-required').not('.noValid').next().find('select');

  $('form#contactForm').submit(function() {
    var flag = false;
    var mail_flag1 = false;
    var mail_flag2 = false;
    var date_flag = false;
    var product_flag = false;
    var file_flag = false;
    var type_flag = false;

    var error_msg = $('p.table__note.c-text--sm-danger');
    var error_class = $('.is-error');
    error_msg.remove('p.table__note.c-text--sm-danger');
    error_class.removeClass('is-error');

    // 入力必須
    required.each(function() {
      if (
        $(this).hasClass('num_only') ||
        $(this).hasClass('tel_num') ||
        $(this).hasClass('zip_num') ||
        $(this).parent().is('#mail_form, #mail_form_again') ||
        $(this).parent().hasClass('kana_form') ||
        $(this).parents('.c-text--md-left').hasClass('products_form') ||
        $(this).parents('.c-text--md-left').hasClass('date_form')) {
        return true;
      } else {
        if ($(this).val() == "") {
          $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
          flag = true;
        }
      }
    });

    // 必須数値
    number.each(function() {
      if ($(this).hasClass('notZero')) {
        if ($(this).val() == "" || $(this).val() == 0) {
          flag = true;
          $(this).parents('.form__number').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
        }
      } else {
        if ($(this).val() == "") {
          flag = true;
          $(this).parents('.form__number').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
        }
      }
    });

    // ファイル
    file.each(function() {
      if ($(this).val() == "") {
        flag = true;
        file_flag = true;
        $(this).parent().find('.file__name').addClass('is-error');
        $(this).parents('.file_form').children('span').last().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
      } else {
        if (typeof type !== 'null' && typeof type !== 'undefined') {
          var i = 0;
          var this_el = $(this);
          var val = this_el.val();
          var valsp = val.split('.');
          var ft = valsp[valsp.length - 1].toLowerCase()

          $.each(type, function(index, el) {
            if (el == ft) {
              i++;
            }
          });

          if (i !== 1) {
            file_flag = true;
            $(this).parent().find('.file__name').addClass('is-error');
            $(this).parents('.file_form').children('span').last().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            flag = true;
          }
        }
      }
    });

    if (typeof type !== 'null' && typeof type !== 'undefined') {
      file_type.each(function() {
        var this_el = $(this);

        if (this_el.parent().hasClass('file_input')) {
          return true;
        }
        if (this_el.val() == "") {
          return true;
        }

        var i = 0;
        var val = $(this).val();
        var valsp = val.split('.');
        var ft = valsp[valsp.length - 1].toLowerCase()

        $.each(type, function(index, elem) {
          if (elem == ft) {
            i = 1;
          }
        });

        if (i !== 1) {
          type_flag = true;
          if (!this_el.parent().find('.file__name').hasClass('is-error')) {
            this_el.parent().find('.file__name').addClass('is-error');
          }
        }
      });
      if (type_flag == true && file_flag == false) {
        $('.file_form').children('span').last().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        flag = true;
      }
    }

    if (typeof size !== 'null' && typeof size !== 'undefined') {
      var sum = 0;
      file_size.each(function() {
        var el = $(this);
        if (el.val() == "") {
          return true;
        }
        var s = el[0].files[0].size;
        sum += s;
      });

      if (size < sum) {
        flag = true;
        file_size.each(function() {
          $(this).parent().find('.file__name').addClass('is-error');
        });
        $('.file_form').children('span').last().after('<p class="table__note c-text--sm-danger">ファイル容量が超えています</p>');
      }
    }

    // セレクトボックス(選択してください用)
    select.each(function() {
      if ($(this).val() == "" || $(this).val() == "選択してください") {
        flag = true;
        $(this).addClass('is-error');
        $(this).parent().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
      }
    });

    // 商品記入
    product.each(function() {
      if ($(this).attr('type') == 'text') {
        if ($(this).val() == "") {
          if (product_flag == false) {
            $('.products_form').append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          }
          $(this).addClass('is-error');
          product_flag = true;
          flag = true;
        }
      }
      if ($(this).attr('type') == 'number') {
        if ($(this).val() <= 0 || $(this).val() == "") {
          if (product_flag == false) {
            $('.products_form').append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          }
          $(this).addClass('is-error');
          product_flag = true;
          flag = true;
        }
      }
    });

    // 日付フォーム
    date.each(function() {
      if ($(this).val() == "" || $(this).val() >= 32 || $(this).val() <= 0) {
        if (date_flag == true) {
          $(this).addClass('is-error');
          return true;
        } else {
          $(this).parents('.c-text--md-left').append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
          date_flag = true;
          flag = true;
          return true;
        }
      } else {
        return true;
      }
    });

    // 入力必須&ラジオボタン
    radio.each(function() {
      var radio_name = $(this).find('input[type="radio"]').attr('name');
      // if (!$(this).find(`input:radio[name='${radio_name}']:checked`).val()) {
      if (!$(this).find('input:radio[name="' + radio_name + '"]:checked').val()) {
        $(this).append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        $(this).find('i.radio__button').addClass('is-error');
        flag = true;
      }
    });

    // 数字のみ
    num_only.each(function() {
      var num = $(this).val();
      num = num.replace(/[０-９\-\ー]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $(this).val(num);
      if (!$(this).val().match(/^[0-9\-]+$/) || $(this).val() == "") {
        if ($(this).closest('.u-display--flex-center').length >= 1) {
          $(this).parents('.u-display--flex-center').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
        } else {
          $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
        }
        flag = true;
      }
    });

    // 郵便番号
    zip.each(function() {
      var zip_num = $(this).val().replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '-');
      zip_num = zip_num.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      zip_num2 = zip_num;
      zip_num = zip_num.replace(/[*\-]/gi, "");
      $(this).val(zip_num2);
      if ($(this).parents('tr').find('.is-required').length >= 1) {
        if (!zip_num.match(/^([0-9]{7})$/) || zip_num == "") {
          if ($(this).closest('.u-display--flex-center').length >= 1) {
            $(this).parents('.u-display--flex-center').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          } else {
            $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          }
          flag = true;
        }
      } else {
        if (!zip_num.match(/^([0-9]{7})$/) && zip_num != "") {
          if ($(this).closest('.u-display--flex-center').length >= 1) {
            $(this).parents('.u-display--flex-center').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          } else {
            $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          }
          flag = true;
        }
      }
    });


    // 電話番号
    tel.each(function() {
      var tel_num = $(this).val().replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '-');
      tel_num = tel_num.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      tel_num2 = tel_num;
      tel_num = tel_num.replace(/[*\-]/gi, "");
      $(this).val(tel_num2);
      if ($(this).parents('tr').find('.is-required').length >= 1) {
        if ((!tel_num.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/) && tel_num !== '電話不可') || tel_num == "") {
          if ($(this).closest('.u-display--flex-center').length >= 1) {
            $(this).parents('.u-display--flex-center').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          } else {
            $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          }
          flag = true;
        }
      } else {
        if ((!tel_num.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/) && tel_num !== '電話不可') && tel_num != "") {
          if ($(this).closest('.u-display--flex-center').length >= 1) {
            $(this).parents('.u-display--flex-center').after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          } else {
            $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
            $(this).addClass('is-error');
          }
          flag = true;
        }
      }
    });

    // 数値のみ
    isNumeric.each(function() {
      var num = $(this).val();
      num = num.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $(this).val(num);
      if (!$(this).val().match(/^[0-9\-]+$/) && $(this).val() != "") {
        $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        $(this).addClass('is-error');
        flag = true;
      }
    });

    // 数値（小数点含む）のみ
    isFloat.each(function() {
      var num = $(this).val();
      num = num.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $(this).val(num);
      if (!$(this).val().match(/^([1-9]\d*|0)(\.\d+)?$/) && $(this).val() != "") {
        $(this).after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        $(this).addClass('is-error');
        flag = true;
      }
    });

    // メールアドレス
    if (mail.length > 0 && mail_again.length > 0) {
      if (mail.val() == "" && mail_again.val() == "") {
        mail.addClass('is-error');
        mail_again.addClass('is-error');
        mail.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        mail_again.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        mail_flag1 = true;
        mail_flag2 = true;
        flag = true;
      } else if (mail_again.val() == "") {
        mail_again.addClass('is-error');
        mail_again.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        flag = true;
        mail_flag2 = true;
      } else if (mail.val() == "") {
        mail.addClass('is-error');
        mail.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
        mail_flag1 = true;
        flag = true;
      } else {
        if (!mail_again.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
          mail_again.addClass('is-error');
          mail_again.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          flag = true;
          mail_flag2 = true;
        }
        if (!mail.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
          mail.addClass('is-error');
          mail.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          mail_flag1 = true;
          flag = true;
        }
      }
      if (mail_flag1 != true && mail_flag2 != true) {
        if (mail.val() != mail_again.val()) {
          mail.addClass('is-error');
          mail_again.addClass('is-error');
          mail.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          mail_again.after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          flag = true;
        }
      }
    }

    // ふりがなチェック
    kana.each(function() {
      var str = $(this).val();
      str = String(str);
      if (str == "") {
        if ($(this).parents('.c-text--md-left').prev().hasClass('is-required')) {
          $(this).parent().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
          flag = true;
          return true;
        }
      } else {
        if (is_kana(str)) { //"ー"の後ろの文字は全角スペースです。
          return true;
        } else {
          $(this).parent().after('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
          $(this).addClass('is-error');
          flag = true;
        }
      }
    });


    // 処理を中断
    if (flag == true) {
      var position = $('.is-error:first').parents('tr').offset().top;
      $("html, body").animate({
        scrollTop: position
      }, 200, "swing");
      return false;
    }
  });
});
