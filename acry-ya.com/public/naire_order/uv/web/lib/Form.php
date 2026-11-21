<?php

namespace web;

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

    public function selectContactType($name, $params1 = array(), $params2 = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE["contact_type"]) {
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

    public function textareaContactDetail($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<textarea name=\"{$name}[value]\" placeholder=\"{$placeholder}\">{$_COOKIE["contact_detail"]}</textarea>\n";
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

    public function inputCustomerType($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
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
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
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

    public function inputAddressee($name, $params1 = array(), $params2 = null)
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

    public function inputPhoneContactFromOur($name, $params1 = array(), $params2 = null)
    {
        $checked = "checked";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["phone_contact_from_our"])) {
                if ($value === $_COOKIE["phone_contact_from_our"]) {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            }
        }
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

    public function inputDeliveryName($name, $params = null,$placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
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

    public function inputProductionProduct($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["product"]}\">\n";
    }

    public function inputProductionApplication($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
    value=\"{$_COOKIE["application"]}\">\n";
    }

    public function inputProductionQuantity1($name, $params = null)
    {
        $params = $params !== null ? "," . $params : $params;
        echo "<input type=\"number\" id=\"number\" name=\"\" placeholder=\"0\" data-max=\"1000\" data-min=\"0\" onChange=\"num_change(this);\" >\n";
        echo "<input type=\"hidden\" name=\"{$name}[value]\" value=\"\">\n";

    }

    public function inputProductionSize($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" value=\"{$_COOKIE["delivery_size"]}\" class=\"isNumeric\">\n";
    }

    public function inputProductionDepth($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" value=\"{$_COOKIE["delivery_depth"]}\" class=\"isNumeric\">\n";
    }

    public function inputProductionheight($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\" value=\"{$_COOKIE["delivery_depth"]}\" class=\"isNumeric\">\n";
    }

    public function inputUsageEnvironment($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["printing_side"])) {
                if ($value === $_COOKIE["printing_side"]) {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" nameame=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            }
        }
    }

    public function inputProductionType($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["production_type"])) {
                if ($value === $_COOKIE["production_type"]) {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}></label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label data-target=\"{$key}\" class=\"form__radio js-formChange__trigger\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}>\n";
                    echo "<i class=\"radio__button\"></i><span>$value</span>\n";
                    echo "</label>\n";
                } else {
                    echo "<label data-target=\"{$key}\" class=\"form__radio js-formChange__trigger\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">\n";
                    echo "<i class=\"radio__button\"></i><span>$value</span>\n";
                    echo "</label>\n";
                }
            }
        }
    }

    public function selectProductionColor($name, $params1 = array(), $params2 = null, $id = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\" id=\"color_{$id}\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE["production_color"]) {
                    echo "<option value=\"{$value}\" selected>{$value}</option>";
                } else {
                    echo "<option value=\"{$value}\">{$value}</option>";
                }
            } else {
                echo "<option value=\"\">選択下さい</option>";
            }
        }
        echo "</select>";
    }

    public function selectProductionThickness($name, $params1 = array(), $params2 = null, $id = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        echo "<select name=\"{$name}[value]\" id=\"thickness_{$id}\">";
        foreach ($params1 as $key => $value) {
            if ($value !== "noValue") {
                if ($value == $_COOKIE["production_thickness"]) {
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

    public function inputProductionFinish($name, $params1 = array(), $params2 = null, $id = null)
    {
        $checked = "";
        $count = 5;
        foreach ($params1 as $key => $value) {
            echo "<div class=\"article__content\">\n";
            echo "<label class=\"form__radio--image\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">\n";
            echo "<i class=\"radio__button\"></i><img src=\"/assets/images/projects/full_order/web/img_0{$count}.jpg\" class=\" \"><span>$value</span>\n";
            echo "</label></div>\n";
            $count = $count + 1;
        }
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
    }

    public function inputPrintingSide($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["printing_side"])) {
                if ($value === $_COOKIE["printing_side"]) {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" nameame=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            }
        }
    }

    public function inputWhitePress($name, $params1 = array(), $params2 = null, $id = null)
    {
        $checked = "";
        $count = 21;
        foreach ($params1 as $key => $value) {
            echo "<div class=\"article__content\">\n";
            echo "<label class=\"form__radio--image\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\">\n";
            echo "<i class=\"radio__button\"></i><img src=\"/assets/images/projects/full_order/img_{$count}.jpg\" class=\" \"><span>$value</span>\n";
            echo "</label></div>\n";
            $count = $count + 1;
        }
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
    }
    
    public function inputWhitePressxxxxxxxxxxxxxxxxxxxxxx($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["white_press"])) {
                if ($value === $_COOKIE["white_press"]) {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" nameame=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            }
        }
    }

    public function inputProductionMethod($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["delivery_method"])) {
                if ($value === $_COOKIE["delivery_method"]) {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" nameame=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<labell class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>運送便</span></label>\n";
                } else {
                    echo "<label class=\"c-text--md-left form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>ご来社引取</span></label>\n";
                }
            }
        }
    }

    public function inputProductionBudget($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["production_budget"]}\">\n";
    }

    public function inputProductionMoon($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["production_moon"]}\">\n";
    }

    public function inputProductionDay($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\"
        value=\"{$_COOKIE["production_day"]}\">\n";
    }

    public function inputProductionPresence($name, $params1 = array(), $params2 = null)
    {
        $checked = "";
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params2}\">\n";
        foreach ($params1 as $key => $value) {
            if (isset($_COOKIE["production_presence"])) {
                if ($value === $_COOKIE["production_presence"]) {
                    echo "<label><input type=\"radio\" nameame=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                } else {
                    echo "<label><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>{$value}</span></label>\n";
                }
            } else {
                if ($key === 0) {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\" {$checked}><i class=\"radio__button\"></i><span>あり</span></label>\n";
                } else {
                    echo "<label class=\"form__radio\"><input type=\"radio\" name=\"{$name}[value]\" value=\"{$value}\"><i class=\"radio__button\"></i><span>なし</span></label>\n";
                }
            }
        }
    }

    public function inputProductionEstimate($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<input type=\"text\" name=\"{$name}[value]\" placeholder=\"{$placeholder}\">\n";
    }

    public function textareaProductionDetail($name, $params = null, $placeholder = null)
    {
        echo "<input type=\"hidden\" name=\"{$name}[params]\" value=\"{$params}\">\n";
        echo "<textarea name=\"{$name}[value]\" placeholder=\"{$placeholder}\"></textarea>\n";
    }

}
