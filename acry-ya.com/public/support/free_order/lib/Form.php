<?php

namespace free_order;

class Form
{

    public function create()
    {
        echo "<form id=\"contactForm\" class=\"l-form--contact c-form\" action=\"./confirmation.php\" method=\"post\" enctype=\"multipart/form-data\">\n";
    }

    public function end($value = '確認')
    {
        echo "<button type=\"send\" class=\"c-button--xl-primary js-disabledSwitch__content\">{$value}</button>\n";
    }

    public function inputProduct1($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputQuantity1($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" value=\"1\">\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";

    }

    public function inputProduct2($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputQuantity2($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputProduct3($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" >\n";
    }

    public function inputQuantity3($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputProduct4($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputQuantity4($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputProduct5($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputQuantity5($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputImage1($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE["image1"]}\"><br>";
    }

    public function inputImage2($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE["image2"]}\"><br>";
    }

    public function inputImage3($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE["image3"]}\"><br>";
    }

    public function inputDrowingNumber($name, $params = null) {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputCustomerType($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["customer_type"])) {
                if ($value === $_COOKIE["customer_type"]) {
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

    public function inputName($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"名前\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["name"]}\">\n";
    }

    public function inputNameKana($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["name_kana"]}\">\n";
    }

    public function inputCorporateName($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["corporate_name"]}\">\n";
    }

    public function inputCorporateNameKana($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["corporate_name_kana"]}\">\n";
    }

    public function inputCorporateDepartment($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["corporate_department"]}\">\n";
    }

    public function inputMail($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"メール\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["mail_address"]}\">\n";
    }

    public function inputMailCheck($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"再入力\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\"placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["mail_address_check"]}\">\n";
    }

    public function inputZip($name, $params = null, $placeholder = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"郵便番号{$params}\">\n";
        echo "<input class=\"zip_num\" type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["postal_code"]}\">\n";
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
    value=\"{$_COOKIE["address"]}\">\n";
    }

    public function inputTel($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"電話番号{$params}\">\n";
        echo "<input class=\"tel_num\" type=\"text\" name=\"{$name}[value]\"
    value=\"{$_COOKIE["phone_number"]}\">\n";
    }

    public function inputFax($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"FAX{$params}\">\n";
        echo "<input class=\"tel_num\" type=\"text\" name=\"{$name}[value]\"
    value=\"{$_COOKIE["fax"]}\">\n";
    }

    public function inputComment($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"コメント{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\"
    value=\"{$_COOKIE["comment"]}\">\n";
    }

    public function selectDeposit($name, $params1 = array(), $params2 = null)
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

    public function inputPhoneContactFromOur($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["customer_type"])) {
                if ($value === $_COOKIE["customer_type"]) {
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

    public function inputDeliveryName($name, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"\">\n";
    }

    public function inputDeliveryNameKana($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"\">\n";
    }

    public function inputDeliveryZip($name, $params = null, $placeholder = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"郵便番号{$params}\">\n";
        echo "<input class=\"zip_num\" type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"\">\n";
    }

    public function selectDeliveryPrefectures($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                echo "<option value=\"{$value}\">{$value}</option>";
            } else {
                echo "<option value=\"\">{$key}</option>";
            }
        }
        echo "</select>";
    }


    public function inputDeliveryAddress($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"\">\n";
    }

    public function inputDeliveryTel($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"電話番号{$params}\">\n";
        echo "<input class=\"tel_num\" type=\"text\" name=\"{$name}[value]\"
    value=\"\">\n";
    }

    public function inputInformationSave($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        if (isset($_COOKIE["information_save"])) {
            echo "<label class=\"check__checkbox form__checkbox\"><input type=\"checkbox\" class=\"js-disabledSwitch__trigger\" name=\"{$name}[value]\" value=\"1\" {$checked}><i class=\"checkbox__button\"></i>{$params1}</label>\n";
        } else {
            echo "<label class=\"check__checkbox form__checkbox\"><input type=\"checkbox\" class=\"js-disabledSwitch__trigger\" name=\"{$name}[value]\" value=\"1\"><i class=\"checkbox__button\"></i>{$params1}</label>\n";
        }
    }

}
