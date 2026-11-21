<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DiscountRateRequest extends FormRequest
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
            'discount_rate_title' => 'required',
            'number_of_lower_limit' => 'present',
            'number_of_upper_limit' => 'present',
            'discount_rate' => 'present',
            'number_of_lower_limit.*' => 'required|numeric',
            'number_of_upper_limit.*' => 'required|numeric',
            'discount_rate.*' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            "required" => "タイトルは必ず入力して下さい。",
            "number_of_lower_limit.present" => "個数下限は必ず入力して下さい。",
            "number_of_upper_limit.present" => "個数上限は必ず入力して下さい。",
            "discount_rate.present" => "割引率は必ず入力して下さい。",
            "number_of_lower_limit.*.required" => "個数下限は必ず入力して下さい。",
            "number_of_upper_limit.*.required" => "個数上限は必ず入力して下さい。",
            "discount_rate.*.required" => "割引率は必ず入力して下さい。",
            "number_of_lower_limit.*.numeric" => "個数下限は数値で入力して下さい。",
            "number_of_upper_limit.*.numeric" => "個数上限は数値で入力して下さい。",
            "discount_rate.*.numeric" => "割引率は数値で入力して下さい。"
        ];
    }
}