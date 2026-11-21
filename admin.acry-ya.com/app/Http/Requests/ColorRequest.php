<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ColorRequest extends FormRequest
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
            'color_name' => 'required|string|max:32',
            'color_group_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            "required" => "必須項目のため入力して下さい。",
            "string" => "文字列で入力してください。",
            "color_name.max" => "32文字以内で入力してください。"
        ];
    }
}
