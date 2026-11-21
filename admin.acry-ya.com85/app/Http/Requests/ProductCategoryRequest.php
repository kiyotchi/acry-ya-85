<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCategoryRequest extends FormRequest
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
            'product_category_name' => 'string|max:64|nullable',
            'parent_category_id' => 'numeric|digits_between:0,20|nullable',
            'display_order' => 'numeric|digits_between:0,20|nullable'
        ];
    }

    public function messages()
    {
        return [
            "string" => "文字列で入力してください。",
            "numeric" => "数値で入力してください。",
            "size.max" => "64文字以内で入力してください。",
            "width_size.digits_between" => "18桁以内で入力してください。",
            "height_size.digits_between" => "18桁以内で入力してください。"
        ];
    }
}
