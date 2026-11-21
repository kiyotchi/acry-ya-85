<?php

namespace order;

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

    public function inputCustomerType($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["customer_type"])) {
                if ($value === $_COOKIE["customer_type"]) {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}>{$value}</label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">{$value}</label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}>{$value}</label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">{$value}</label>\n";
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
        echo "<input class=\"num_only\" type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
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
        echo "<input type=\"text\" name=\"{$name}[value]\"
    value=\"{$_COOKIE["fax"]}\">\n";
    }

    public function inputPhoneContactFromOur($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["phone_contact_from_our"])) {
                if ($value === $_COOKIE["phone_contact_from_our"]) {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}>{$value}</label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">{$value}</label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}>{$value}</label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">{$value}</label>\n";
                }
            }
        }
    }

    public function inputOrderConfirmation($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        if (isset($_COOKIE[""])) {
            echo "<label class=\"check__checkbox form__checkbox\"><input type=\"checkbox\" class=\"js-disabledSwitch__trigger\" name=\"{$name}[value]\" value=\"確認済み\" {$checked}><i class=\"checkbox__button\"></i>{$params1}</label>\n";
        } else {
            echo "<label class=\"check__checkbox form__checkbox\"><input type=\"checkbox\" class=\"js-disabledSwitch__trigger\" name=\"{$name}[value]\" value=\"確認済み\"><i class=\"checkbox__button\"></i>{$params1}</label>\n";
        }
    }

    public function inputProductNum($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" id=\"\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" value=\"{$_COOKIE[""]}\" maxlength=\"8\" minlength=\"8\" class=\"isNumeric\">";
    }

    public function inputProductName($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE[""]}\">\n";
    }

    public function inputProductionNumber($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" class=\"notZero\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function selectSculptureSize($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE[""]) {
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

    public function inputSculptureDirection($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";

        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE[""]) {
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

    public function selectSculptureColor($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE[""]) {
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

    public function selectManuscriptType($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE[""]) {
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

    public function inputImage1($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE[""]}\"><br>";
    }

    public function inputImage2($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE[""]}\"><br>";
    }

    public function inputImage3($name, $params = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"file\" name=\"{$name}\"
    value=\"{$_COOKIE[""]}\"><br>";
    }

    public function inputImageNumber($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"1\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";
    }

    public function inputLogoPositionSpecification1($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification2($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification3($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification4($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification5($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification6($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
    }

    public function inputLogoPositionSpecification7($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" class=\"isFloat\" >\n";
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
