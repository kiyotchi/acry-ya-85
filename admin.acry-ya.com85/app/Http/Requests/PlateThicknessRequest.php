<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlateThicknessRequest extends FormRequest
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
            'plate_thickness' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            "plate_thickness.required" => "板厚は必ず入力して下さい。",
            "plate_thickness.numeric" => "板厚は数値で入力して下さい。"
        ];
    }
}