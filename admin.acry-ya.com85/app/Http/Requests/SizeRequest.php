<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SizeRequest extends FormRequest
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
            'size_group_id' => 'required',
            'size_type' => 'required',
            'width_size' => 'required_if:size_type,1|nullable|numeric',
            'height_size' => 'required_if:size_type,1|nullable|numeric',
            'size' => 'required_if:size_type,2'
        ];
    }

    public function messages()
    {
        return [
            "size_group_id.required" => "サイズグループは必ず入力して下さい。",
            "size_type.required" => "種別は必ず入力して下さい。",
            "width_size.required_if" => "種別が数値の場合、横サイズは必ず入力して下さい。",
            "height_size.required_if" => "種別が数値の場合、縦サイズは必ず入力して下さい。",
            "width_size.numeric" => "横サイズは数値で入力して下さい。",
            "height_size.numeric" => "縦サイズは数値で入力して下さい。",
            "size.required_if" => "種別が文字列の場合、サイズは必ず入力して下さい。"
        ];
    }
}
