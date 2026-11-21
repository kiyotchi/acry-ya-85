// --------------------------------------------------------
/**
 * 共通設定
 */
const rebuildProducConfig = {
  "rebuildTargetArea": ".reduild-target-area",
  "submitToCartlag": false,
};


// --------------------------------------------------------
/**
 * アコーディオン項目の復元
 */
const accordionElementConf = {
  blockSelector: '.js-accordion',
  trigger: '.js-accordion__trigger',
  accordionContent: '.js-accordion__content',
  targetDefined: 'data-target'
};
const accordionCurrentStatusList = () => {
  let accordionList = {};
  for( let x = 0; x  < $(accordionElementConf.blockSelector).length; x ++ ){
    const currentContent = $(accordionElementConf.blockSelector).eq(x);
    const target = $( currentContent ).find( accordionElementConf.trigger ).attr( accordionElementConf.targetDefined );

    if( currentContent.find( accordionElementConf.trigger  ).hasClass('is-active') ){
      accordionList[ target ] = true;
    } else {
      accordionList[ target ] = false;
    }
  }
  return JSON.stringify( accordionList );
};

const rebuildAccordion = (json) => {
  json = JSON.parse( json );
  for( const key in json ){
    if( key == 'undefined'){
      continue;
    }
    const selector = accordionElementConf.blockSelector
            + ' ' + accordionElementConf.trigger
            + '[' + accordionElementConf.targetDefined + '="' +  key + '"]'
            ;
    if(
      (json[key]  == true && !$( selector ).hasClass('is-active') )
      ||(json[key]  == false && $( selector ).hasClass('is-active') )
    ){
      $( selector ).trigger('click');
    }
  }
};


// --------------------------------------------------------
/**
 * 繰り返しフィールド
 */
const repeatFieldDefined = {
  blockSelector: '.js-addContent',
  maxDefinedAttribue: 'data-max',
  repeatBlockSelector: '.js-addContent__content',
  addTriggerButton: '.js-addContent__trigger--add'
};
const repeatFieldCurrentList = () => {
  const list = {};
  for( let x = 0; x < $(repeatFieldDefined.blockSelector).length; x ++ ){
    const currentSelector = $(repeatFieldDefined.blockSelector).eq(x);
    const id = $( currentSelector ).attr( 'id' );
    list[ id ] = $( currentSelector ).find( repeatFieldDefined.repeatBlockSelector+'.is-active' ).length;
  }
  return JSON.stringify( list );
};
const reBuildRepeatFiled = ( json ) => {
  json = JSON.parse( json );
  for( const id in json ){
    const selector = repeatFieldDefined.blockSelector + '[id="' + id + '"]';
    const currentDisplayCount = $( selector ).find( repeatFieldDefined.repeatBlockSelector+'.is-active' ).length;
    for( let count = 0; count < ( json[id] - currentDisplayCount ); count ++ ){
      $( selector ).find( repeatFieldDefined.addTriggerButton ).trigger('click');
    }
  }
};

// --------------------------------------------------------
/**
 * カート追加実行
 * @returns {boolean}
 */
var addToCartExec = function(){

  // 変数が設定されていない場合はそのまま抜ける
  if (!reproductionSelectors) {
    return true;
  }

  //DOM状態の取得
  const accodionData = accordionCurrentStatusList();
  const repeatAreaData = repeatFieldCurrentList();


  //フォーム復元要素
  let data = [];
    // フォームの要素を取得して復元用のデータを抽出
    for (let i = 0; i < reproductionSelectors.inputTarget.length; i++) {
      const $el = $(reproductionSelectors.inputTarget[i]);
      if( $el.length > 0 ){

        if( $el.attr('type') == 'checkbox' ){
          data.push({
            'exists': true,
            'selector': reproductionSelectors.inputTarget[i],
            'isCheckbox': true,
            'isChecked': $el.get(0).checked,
            'value': $el.val(),
          });
        } else {
          data.push({
            'exists': true,
            'selector': reproductionSelectors.inputTarget[i],
            'isCheckbox': false,
            'isChecked': false,
            'value': $el.val(),
          });
        }

      } else {
        data.push({
          'exists': false,
          'selector': reproductionSelectors.inputTarget[i],
          'isCheckbox': false,
          'isChecked': false,
          'value': false,
        });
      }
    }


    // itemno 要素の直前に挿入
    const html = $( '<input id="reproductionSelectors" type="hidden" name="reproductionSelectors" value="">' );
    const setData = {
      'accordion': JSON.parse( accodionData ),
      'repeat': JSON.parse( repeatAreaData ),
      'input': data,
      'qty':  $('#suryo').val(),
      'definedData': reproductionSelectors
    };
    $(html).val( JSON.stringify(setData) );


    // 念のため存在していたら削除しておく
    $('#reproductionSelectors').remove();
    $('#itemno').before(html);

    if( reproductionSelectors.submitToCartlag == true ){
      $(reproductionSelectors.toCartSelector ).get(0).submit();
    }

    return true;
}


$(reproductionSelectors.toCartSelector ).on('submit', function(e){
  return addToCartExec();
});



// --------------------------------------------------------
/**
 * 再構築
 * @type {null}
 */
var afterResetProductFormReset = null;
if ( reproductionSelectorsSend != null) {
  afterResetProductFormReset = function(){
    if(!reproductionSelectors){ return; }

    if( reproductionSelectors.version != reproductionSelectorsSend.definedData.version ){
      console.log('バージョン違いによって抜ける' + reproductionSelectors.version + ':' + reproductionSelectorsSend.definedData.version);
      return;
    }
    rebuildRender( JSON.stringify( reproductionSelectorsSend ) );
    console.log( afterResetProductFormAddFunction );
    if( afterResetProductFormAddFunction != null ){
      console.log('リセット実行');
      afterResetProductFormAddFunction();
    }

  }
} else {
  afterResetProductFormReset = () => {
    console.log( afterResetProductFormAddFunction );
    if( afterResetProductFormAddFunction != null ){
      console.log('リセット実行');
      afterResetProductFormAddFunction();
    }
    return;
  }
};


// --------------------------------------------------------
/**
 * submitの代替
 */
window.submitToCart = () => {
  reproductionSelectors.submitToCartlag = true;
  $(reproductionSelectors.toCartSelector ).trigger('submit');
  reproductionSelectors.submitToCartlag = false;
};

// --------------------------------------------------------
/**
 * 復元実行
 */
const rebuildRender = ( json ) => {
  json = JSON.parse( json );
  const accordionData  = json.accordion;
  const repeatData  = json.repeat;
  const inputData = json.input;
  const configData = json.definedData;
  const qty = json.qty;

  rebuildAccordion( JSON.stringify( accordionData ) );
  reBuildRepeatFiled( JSON.stringify( repeatData ) );
  for( let x = 0; x < inputData.length; x ++ ){
    const target = inputData[x];
    if( target.exists == false ){ continue; }

    if(  target.isCheckbox == undefined || target.isCheckbox == false ){
      $( target.selector ).val( target.value );
      $( target.selector ).trigger( 'change' );
    } else {
      $( target.selector ).get(0).checked = target.isChecked;
    }
  }

  if( $('#suu').length > 0 ){
    $('#suu').val( qty );
    $('#suu').trigger('change');
  }
  if( $('[name="suryo"]').length > 0 ){
    $('[name="suryo"]').val( qty );
    $('[name="suryo"]').trigger('change');
  }

};
// --------------------------------------------------------
