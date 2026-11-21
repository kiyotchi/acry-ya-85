<?php

namespace recycle;

class Form
{

    public function create()
    {
        echo "<form id=\"contactForm\" class=\"l-form--content c-form\" action=\"./confirmation.php\" method=\"post\" enctype=\"multipart/form-data\">\n";
    }

    public function end($value = '確認')
    {
        echo "<button type=\"send\" class=\"c-button--xl-primary js-disabledSwitch__content\">{$value}</button>\n";
    }

    public function inputProductNum($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" id=\"\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" value=\"{$_COOKIE["orderNum"]}\" maxlength=\"8\" minlength=\"8\" class=\"isNumeric\">";
    }

    public function inputName($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"名前\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["name"]}\" maxlength=\"100\">\n";
    }

    public function inputCorporateName($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["corporate_name"]}\" maxlength=\"100\">\n";
    }
    
    public function inputMail($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"メール\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["mail_address"]}\" maxlength=\"100\">\n";
    }

    public function inputMailCheck($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"再入力\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\"placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["mail_address_check"]}\" maxlength=\"100\">\n";
    }
    
    public function inputZip($name, $params = null, $placeholder = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"郵便番号{$params}\">\n";
        echo "<input class=\"zip_num\" type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["postal_code"]}\" maxlength=\"8\">\n";
    }
    
    public function selectPrefectures($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE["prefectures"]) {
                    echo "<option value=\"{$value}\" selected>{$value}</option>";
                } else {
                    echo "<option value=\"{$value}\">{$value}</option>";
                }
            } else {
                echo "<option value=\"\">{$key}</option>";
            }
        }
        echo "</select>";
    }

    public function inputAddress($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["address"]}\" maxlength=\"200\">\n";
    }

    public function inputTel($name, $params = null, $placeholder = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"電話番号{$params}\">\n";
        echo "<input class=\"tel_num\" type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["phone_number"]}\" maxlength=\"15\">\n";
    }

    public function inputProductsRecycled($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["products_recycled"]}\" maxlength=\"100\">\n";
    }

    public function inputRecycleCount($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["recycle_count"]}\" maxlength=\"50\">\n";
    }

    public function inputDeliveryMethod($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["delivery_method"])) {
                if ($value === $_COOKIE["delivery_method"]) {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            }
        }
    }


    public function inputDeliveryDate($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"年月日1\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    	value=\"{$_COOKIE["delivery_date"]}\" maxlength=\"50\">\n";
    }

}
