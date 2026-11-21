/* ============================================================================
 * レビューシステム
 * ========================================================================= */
$(function(){

    /////共通利用変数
    var currentPage = 1;
    var currentSelectStar = '';
    var sortType = '新着順';
    var sortTypeList = {
        '新着順': {
            'field': 'created_at',
            'dir': 'desc',
            'photoonly': false
        },
        '古い順': {
            'field': 'created_at',
            'dir': 'asc',
            'photoonly': false
        },
        '評価が高い順': {
            'field': 'star',
            'dir': 'desc',
            'photoonly': false
        },
        '評価が低い順': {
            'field': 'star',
            'dir': 'asc',
            'photoonly': false
        },
        '写真付': {
            'field': 'created_at',
            'dir': 'desc',
            'photoonly': true
        },
    };
    
    // --------------------------------------------------------
    /**
     * 初期処理
     */
    if(typeof(reviewPageRequest) != 'undefined' && reviewPageRequest != null){

        
        ///// 現在表示のスター
        if( "star" in reviewPageRequest && reviewPageRequest['star'] != null ){
            currentSelectStar =  reviewPageRequest['star'];
        }
        if( currentSelectStar == '' ){
            $('[data-current-start]').empty().append('全て表示');
            $('[data-star-reset]').addClass('rating-hidden');
        }
        else {
            $('[data-current-start]').empty().append(currentSelectStar);
            $('[data-star-reset]').removeClass('rating-hidden');
        }
    }

    if( typeof(reviewPageRequest) != 'undefined' ){
        /////ソート順
        if( sortRequest == 'created_at' && dirRequest == 'asc' ){
            sortType = '古い順';
        }
        else if( sortRequest == 'star' && dirRequest == 'desc' ){
            sortType = '評価が高い順';
        }
        else if( sortRequest == 'star' && dirRequest == 'asc' ){
            sortType = '評価が低い順';
        }
        else if( sortRequest == 'star' && dirRequest == 'asc' ){
            sortType = '評価が低い順';
        }
        else if( photoonlyRequest == 1 ){
            sortType = '写真付';
        }
        else {
            sortType = '新着順';
        }
        $('.review-sort-select').val( sortType );
        $('[data-current-sort]').empty().append( sortType );

    }
    /// /review用たたむ
    for( var x = 0; x < $('.review-page.customer-review-item').length; x ++ ){
        (function(cnt){
            var foldTarget = $('.review-page.customer-review-item').eq(cnt);
            var foldTargetContent = $(foldTarget).find('.review-content-full');
            var foldTargetMore = $(foldTarget).find('.fold-btn');
            lineSpecFold( foldTargetContent, foldTargetMore, 3 );
        })(x);
    }


    // --------------------------------------------------------
    /**
     * 選択解除
     */
     $('[data-star-reset]').on(
        'click',
        function(e){
            currentSelectStar = '';
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + currentSelectStar;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }
            callUrl( url );
        }
     );

    // --------------------------------------------------------
    /**
     * セミオーダー
     */
    if( $('.semiorder-star-area').length > 0 ){
        var cln = $('.star-avarage').clone(true);
        $(cln)
            .find('.count')
            .css({ cursor: 'pointer'})
            .on(
                'click',
                function(e){
                    //window.location.hash = 'reviews-area';
                    var position = $('#reviews-area').offset().top;
                    var speed = 200;
                    $("html,body").animate({scrollTop:position},speed);
                }
            );
        $('.semiorder-star-area').append(
            $('<div class="customer-review-header"></div>').append(
                cln
            )
        );
    }
    // --------------------------------------------------------
    /**
     * 並べ替え
     */
    $('.review-sort-select').on(
        'change',
        function(e){
            sortType = $('.review-sort-select').val();
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + currentSelectStar;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }
            callUrl( url );
        }
    );

    // --------------------------------------------------------
    /**
     * 星での絞り込み
     */
    $('.star-list .count').css({cursor: 'pointer'});
    $('.star-list .count').on(
        'click',
        function(e){
            let target = $(this).attr('data-target-point');
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + target;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }

            currentSelectStar = target;
            callUrl( url );
        }
    );

    // --------------------------------------------------------
    /**
     * まえつぎ
     */
    $('.rating-pagination .pagenation__prev').on(
        'click',
        function(e){
            const toPage = currentPage - 1;
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + currentSelectStar + '&page='+toPage;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }
            callUrl( url );
        }
    );
    $('.rating-pagination .pagenation__next').on(
        'click',
        function(e){
            const toPage = currentPage + 1;
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + currentSelectStar + '&page='+toPage;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }
            callUrl( url );
        }
    );

    // --------------------------------------------------------
    /**
     * ページへ行く
     */
    $('[data-revire-to-page]').on(
        'click',
        function(e){
            const toPage = $(this).attr('data-revire-to-page');
            let url = '/review?s[keyword]=' + customer_feedback_pc_word + '&s[star]=' + currentSelectStar + '&page='+toPage;
            url += '&sort=' + sortTypeList[sortType]['field'];
            url += '&dir=' + sortTypeList[sortType]['dir'];
            if( sortTypeList[sortType]['photoonly'] == true ){
                url += '&photoonly=1';
            }
            callUrl( url );
        }
    );
    
    // --------------------------------------------------------
    /**
     * 参考になったクリック
     */
    $('[data-send-good]').on(
        'click',
        function(e){
            var id = $(this).attr('data-send-good');
            let data = {
                'review_id': id
            };
            $.ajax({
                url: '/review/good',
                data: data,
                dataType: 'json',
                type: 'post'
            })
            .then(function( data ){
                if( data.result_type == true ){
                    $('[data-send-good="' + id + '"]')
                        .removeClass('review-good-enable')
                        .addClass('review-good-disabled');
                }
                else {
                    $('[data-send-good="' + id + '"]')
                        .addClass('review-good-enable')
                        .removeClass('review-good-disabled');
                }
                if( data.count == 0 ){
                    $('[data-good-count-area="' + id + '"]')
                            .addClass('rating-hidden');
                }
                else {
                    $('[data-good-count-area="' + id + '"]')
                            .removeClass('rating-hidden');
                }
                $('[data-good-count="' + id +'"]').empty().append( data.count );
            });
        }
    );
    
    // --------------------------------------------------------
    /**
     * テンプレートデータ
     */
     const reviewTemplate = $('.customer-review-list .customer-review-item').eq(0).clone(true);
     const reviewPaginationActive = $('.rating-pagination .rating-pagination-active').eq(0).clone(true);
     const reviewPaginationNum = $('.rating-pagination .rating-pagination-num').eq(0).clone(true);


    // --------------------------------------------------------
    /**
     * 初期状態のページネーションを取得する
     */
    function initPagination(){
        let url = '/review?s[keyword]=' + customer_feedback_pc_word;
        createPagination(url);

    }
    initPagination();

    // --------------------------------------------------------
    /**
     * ページネーションクリック
     */
    function createPagination( url ){
        $.ajax({
            url: url+'&format=pagination',
            type: 'get'
        })
        .then(function(data2){
            const regex = /\&amp\;format=pagination/ig;
            //data2 = data2.replaceAll( regex, '' );
            data2 = data2.replace(regex, '');
            

            $('.rating-pagination').empty().append( data2 );
            $('.rating-pagination').find('a').on(
                'click',
                function(e){
                    const url = $(this).attr('href');
                    callUrl( url );
                    return false;
                }
            );
        });
    }
    
    
    // --------------------------------------------------------
    /**
     * URLコールして書き換え
     * @param string url
     */
    function callUrl( url ){

        if( typeof(isReviewPage) != 'undefined' && isReviewPage == true ){
            location.href = url;
            return;
        }


        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json'
        })
        .then(function(data){

            ///// 全体に影響のあるものを代入
            currentPage = data['current_page'];
            
            ///// アイテムをループ
            $('.customer-review-list').empty();
            for( let x = 0; x < data.data.length; x ++ ){
                let row = data.data[x];
                let setReviewTemplate = $(reviewTemplate).clone(true);
                $(setReviewTemplate).find('[data-revire-val="name"]').empty().append( row.name + '様' );
                $(setReviewTemplate).find('[data-revire-val="title"]').empty().append( row.title );
                let setContent = row.content;
                //setContent = setContent.replaceAll( /\n/g, '<br>' );
                setContent = setContent.replace( /\n/g, '<br>');

                $(setReviewTemplate).find('[data-revire-val="content"]').empty().append( setContent );

                let dateCheck = row['created_at'].split( ' ' );
                dateCheck = dateCheck[0].split('-');
                dateCheck = dateCheck[0]+'年'+dateCheck[1]+'月'+dateCheck[2]+'日';
                $(setReviewTemplate).find('.review-date').empty().append( dateCheck );
                
                
                $(setReviewTemplate)
                        .find('[data-send-good]')
                        .attr( 'data-send-good', row.id );
                $(setReviewTemplate)
                        .find('[data-good-count]')
                        .attr( 'data-good-count', row.id );
                $(setReviewTemplate)
                        .find('[data-review-count]')
                        .attr( 'data-review-count', row.id );
                
                
                if( row.good ){
                    $(setReviewTemplate)
                        .find('[data-send-good]')
                        .removeClass('review-good-enable')
                        .addClass('review-good-disabled');
                
                }
                else {
                    $(setReviewTemplate)
                        .find('[data-send-good]')
                        .addClass('review-good-enable')
                        .removeClass('review-good-disabled');
                }
                $(setReviewTemplate)
                    .find('[data-good-count]')
                    .empty()
                    .append( row.good_count );
                
                
                $(setReviewTemplate)
                        .find('[data-good-count-area]')
                        .attr( 'data-good-count-area', row.id );
                if( row.good_count == 0 ){
                    $(setReviewTemplate)
                        .find('[data-good-count-area]')
                            .addClass('rating-hidden');
                }
                else {
                    $(setReviewTemplate)
                        .find('[data-good-count-area]')
                            .removeClass('rating-hidden');
                }
                
                
                
                if( row.file != undefined ){
                    let filePath = '/storage/reviewimages' + row.file;
                    $(setReviewTemplate)
                        .find('.review-img-area')
                        .removeClass('rating-hidden');
                    $(setReviewTemplate)
                        .find('.review-img')
                        .attr( 'src', filePath );
                }
                else {
                    $(setReviewTemplate)
                        .find('.review-img-area')
                        .addClass('rating-hidden');
                }
                $('.customer-review-list').append( setReviewTemplate );
                let foldTargetElement = $(setReviewTemplate).find('.review-content');
                let foldMoreBtnElement = $(setReviewTemplate).find('.fold-btn');
                lineSpecFold( foldTargetElement, foldMoreBtnElement, 3 );

                $( setReviewTemplate ).find('.review-rating').rateYo({
                    rating: Number( row['star'] ),
                    starWidth: "14px",
                    normalFill: "#dcdcdc",
                    ratedFill: "#fbc83b",
                    readOnly: true
                });
            }

            ///// 件数など
            $('[data-allpagecount]').empty().append( data['last_page'] );
            if( currentSelectStar == '' ){
                $('[data-current-start]').empty().append('全て表示');
                $('[data-star-reset]').addClass('rating-hidden');
            }
            else {
                $('[data-current-start]').empty().append(currentSelectStar);
                $('[data-star-reset]').removeClass('rating-hidden');
            }
            $('[data-current-sort]').empty().append(sortType);



            ///// ページネーションを構築
            createPagination(url);
        });
    }

    // --------------------------------------------------------
    /**
     * 最初で表示分をたたむ
     */
    for( let x = 0; x < $('.customer-review-list .customer-review-item').length; x ++ ){
        if( $('.customer-review-list .customer-review-item').eq(x).hasClass('review-page') ){
            continue;
        }
        let foldTargetElement = $('.customer-review-list .customer-review-item').eq(x).find('.review-content');
        let foldMoreBtnElement = $('.customer-review-list .customer-review-item').eq(x).find('.fold-btn');
        lineSpecFold( foldTargetElement, foldMoreBtnElement, 3 );
    }

    // --------------------------------------------------------
    /**
     * 必要行数以上でたたむ
     * @param targetElement コンテンツを表示しているエレメントのjQueryオブジェクト
     * @param moreBtnElement 続きを読むのエレメントのjQueryオブジェクト
     * @param rows 何行か？
     */
    function lineSpecFold( targetElement, moreBtnElement, rows ){
        var textHeight = $(targetElement).height();//テキスト全文の高さ
        var lineHeight = parseFloat($(targetElement).css('line-height'));//line-height
        var textNewHeight = lineHeight * rows;//指定した行数までのテキストの高さ
        /////こえていればたたむ
        if (textHeight > textNewHeight) {
            //CSSでたたむ
            $(targetElement).css({
                height: textNewHeight,
                overflow: 'hidden',
            });
            //ボタンの動作定義
            $( moreBtnElement ).on(
                'click',
                function(e){
                    var currentStatus = $(this).attr('data-fold-status');
                    if( currentStatus != 'all' ){
                        $(targetElement).css({
                            'height': textHeight,
                            'overflow': 'visible',
                        });
                        $( moreBtnElement ).empty().append('▲閉じる');
                        $( moreBtnElement ).attr( 'data-fold-status', 'all' );
                    }
                    else {
                        $(targetElement).css({
                            height: textNewHeight,
                            overflow: 'hidden',
                        });
                        $( moreBtnElement ).empty().append('▼続きを読む');
                        $( moreBtnElement ).attr( 'data-fold-status', 'fold' );
                    }
                    return false;
                }
            );
        }
        /////関係なければそのまま
        else {
            $(moreBtnElement).hide();
        }

    }

});
