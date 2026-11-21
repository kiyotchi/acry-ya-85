<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewFormRequest extends FormRequest
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
        $rules = [
            'review.keyword1' => ['required'],
            'review.name' => ['max:100', 'required'],
            'review.title' => ['max:200'],
            'review.content' => ['max:1000', 'required'],
            'review.star' => ['integer', 'required'],
            'review.sns' => ['max:10', 'required'],
            'file' => ['sometimes', 'mimes:jpg,jpeg,png'],
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'review.keyword1.required' => 'お求め頂きました商品を選択してください',
            'review.name.required' => 'ニックネームを入力してください',
            'review.name.max' => 'ニックネームは100文字以内で入力してください',
            'review.title.required' => 'タイトルを入力してください',
            'review.title.max' => 'タイトルは100文字以内で入力してください',
            'review.content.required' => 'ご感想内容を入力してください',
            'review.content.max' => 'ご感想内容は1000文字以内で入力してください',
            'review.star.required' => '評価を選択してください',
            'review.star.integer' => '評価が不正です',
            'review.sns.required' => 'SNSを選択してください',
            'file.mimes' => '画像ファイルの形式は jpg または png のみです',
        ];
    }
}
