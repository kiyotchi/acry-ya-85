<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OptionSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'option_name' => 'required',
            'html_tag_name' => 'required',
            'value' => 'present',
            'display_name' => 'present',
            'value.*' => 'required',
            'display_name.*' => 'required'
        ];
    }

    public function messages()
    {
        return [
            "option_name.required" => "オプション名は必ず指定してください。",
            "html_tag_name.required" => "HTMLタグ nameは必ず指定してください。",
            "value.present" => "valueは必ず指定してください。",
            "display_name.present" => "表示名は必ず指定してください。",
            "value.*.required" => "valueは必ず指定してください。",
            "display_name.*.required" => "表示名は必ず指定してください。"
        ];
    }
}
