/* ============================================================================
 * レビューシステム送信フォーム
 * ========================================================================= */
$(function(){


    // --------------------------------------------------------
    /**
     * 確認切り替え
     */
    $('[data-review-toggle]').on(
        'click',
        function(e){
            const execType = $(this).attr('data-review-toggle');
            switch( execType ){
                case 'comfirm':

                    for( var x = 0; x < $('[name^="review"]').length; x ++ ){
                        let name = $('[name^="review"]').eq(x).attr('name');
                        let val = $('[name^="review"]').eq(x).val();
                        $('[data-review-confirm="' + name + '"]').empty().append( val  );
                    }
                    if( $('[name="review[keyword1]"]:checked').length > 0 ){
                        let val  = $('[name="review[keyword1]"]:checked').val();
                        $('[data-review-confirm="review[keyword1]"]').empty().append( val );
                    }
                    else{ 
                        $('[data-review-confirm="review[keyword1]"]').empty();
                    }

                    let val = $('[name="file"]').val();
                    $('[data-review-confirm="file"]').empty().append( val );
                    
                    $('.review-input').addClass('hide');
                    $('.review-confirm').removeClass('hide');
                    break;
                case 'form':
                    $('.review-input').removeClass('hide');
                    $('.review-confirm').addClass('hide');
                    break;
                case 'send':
                    $('#contactForm').trigger('submit');
                    break;
            }
            let position = $('#review-reset').offset().top;
            $("html, body").animate({scrollTop:position}, 600, "swing");
        }
    );

    // --------------------------------------------------------



});
