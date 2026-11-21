<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MaterialRequest extends FormRequest
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
            'material_code' => 'max:255',
            'material_name' => 'required|string|max:255',
            'maker_name' => 'string|nullable',
            'cost_price' => 'numeric|nullable',
            'square_meter_unit_price' => 'numeric|nullable',
            'color_id' => 'numeric|nullable',
            'width_size' => 'numeric|nullable',
            'height_size' => 'numeric|nullable',
            'plate_thickness_id' => 'numeric|nullable',
            'history' => 'string|nullable'
        ];
    }

    public function messages()
    {
        return [
            "required" => "必須項目のため入力して下さい。",
            "numeric" => "数値で入力してください。",
            "string" => "文字列で入力してください。",
            "max" => "文字数制限を超えています"
        ];
    }
}
