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
            'review.name' => ['max:100', 'required'],
            'review.title' => ['max:200'],
            'review.content' => ['max:1000', 'required'],
            'review.star' => ['integer', 'required'],
            'review.status' => ['integer', 'required'],
            'review.note' => ['max:1000'],
            'review.keyword1' => ['required', 'max:100'],
            'review.keyword2' => ['sometimes', 'max:100'],
            'review.keyword3' => ['sometimes', 'max:100'],
            'review.keyword4' => ['sometimes', 'max:100'],
            'review.keyword5' => ['sometimes', 'max:100'],
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'review.name.required' => 'ニックネームを入力してください',
            'review.name.max' => 'ニックネームは100文字以内で入力してください',
            'review.title.required' => 'タイトルを入力してください',
            'review.title.max' => 'タイトルは100文字以内で入力してください',
            'review.content.required' => 'レビュー内容を入力してください',
            'review.content.max' => 'レビュー内容は1000文字以内で入力してください',
            'review.star.required' => '評価を選択してください',
            'review.star.integer' => '評価が不正です',
            'review.status.required' => '公開設定は必須です',
            'review.status.integer' => '公開設定が不正です',
            'review.note.max' => '社内メモは1000文字以内で入力してください',
            'review.keyword1.required' => '商品キーワードを入力してください',
            'review.keyword1.max' => '商品キーワードは100文字以内で入力してください',
            'review.keyword2.max' => 'キーワードは100文字以内で入力してください',
            'review.keyword3.max' => 'キーワードは100文字以内で入力してください',
            'review.keyword4.max' => 'キーワードは100文字以内で入力してください',
            'review.keyword5.max' => 'キーワードは100文字以内で入力してください',
        ];
    }
}
