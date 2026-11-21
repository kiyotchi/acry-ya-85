/* =============================================================================
 * フォーム送信禁止
 * ========================================================================== */
(function($, window, document, undefined){$(document).bind('ready',function(){
	
	$("input[type=text]").keypress(function(ev) {
		if ((ev.which && ev.which === 13) ||
			(ev.keyCode && ev.keyCode === 13)) {
			return false;
		}
		else {
			return true;
		}
	});
	
});})(jQuery, this, this.document);