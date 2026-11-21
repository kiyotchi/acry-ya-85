<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaxRequest extends FormRequest
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
            'tax' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            "tax.required" => "消費税は必ず入力して下さい。",
            "tax.numeric" => "消費税は数値で入力して下さい。"
        ];
    }
}
