<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoticeRequest extends FormRequest
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
            'notice' => 'required_if:is_display,1',
            'is_display' => 'required'
        ];
    }

    public function messages()
    {
        return [
            "notice.required_if" => "表示設定に\"表示する\"を指定している場合、告知情報は必ず指定してください。",
            "is_display.required" => "表示設定は必ず指定してください。"
        ];
    }
}
