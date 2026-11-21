<?php

namespace App\Http\Controllers\Reviews;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewFormRequest;
use App\Models\Review;
use Illuminate\Http\Request;
use Log;

/**
 * レビュー管理コントローラ
 */
class ReviewController extends Controller
{
    /**
     * @var Review
     */
    protected $reviewModel;

    public function __construct(
        Review $reviewModel
    ) {
        $this->reviewModel = $reviewModel;
    }

    /**
     * レビュー一覧.
     *
     * @param Request $request
     */
    public function index(Request $request)
    {
        $limit = (int) $request->input('limit', 20);
        if ($limit > 20) {
            $limit = 20;
        } elseif ($limit < 1) {
            $limit = 1;
        }

        $sort = strtolower((string) $request->input('sort', 'id'));
        $sortArray = [
            'id',
            'created_at',
            'updated_at',
            'star',
        ];

        $dir = strtolower((string) $request->input('dir', 'desc'));
        if (!in_array($dir, ['asc', 'desc'], true)) {
            $dir = 'desc';
        }

        $reviews = $this->reviewModel->search($request->input('s', []))
            ->orderBy($sort, $dir)
            ->paginate($limit);

        return view('reviews.index', [
            'reviews' => $reviews,
        ]);
    }

    /**
     * レビュー編集画面.
     *
     * @param Request $request
     */
    public function edit(Request $request)
    {
        $id = $request->route()->parameter('review');
        $review = $this->reviewModel->findOrFail($id);

        return view('reviews.edit', [
            'review' => $review,
        ]);
    }

    /**
     * レビュー更新処理.
     *
     * @param ReviewFormRequest $request
     */
    public function update(ReviewFormRequest $request)
    {
        $id = $request->route()->parameter('review');
        $review = $this->reviewModel->findOrFail($id);

        $review->fill($request->input('review'))->save();
        session()->flash('complete_message', '更新が完了しました。');

        return redirect()->back();
    }

    /**
     * レビュー削除処理(論理削除).
     *
     * @param Request $request
     */
    public function destroy(Request $request)
    {
        $id = $request->route()->parameter('review');
        $review = $this->reviewModel->findOrFail($id);
        $review->delete();

        session()->flash('complete_message', '削除が完了しました。');
        return redirect()->route('reviews.index');
    }
}
