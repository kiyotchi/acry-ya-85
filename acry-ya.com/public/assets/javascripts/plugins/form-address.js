$(function () {
	$('#zip').jpostal({
		click : '#btn',
		postcode : [
			'#zip'
		],
		address : {
      '#pref'  : '%3',
			'#address' : '%4%5'
		}
	});
});

// $(function () {
// 	$('#zip').jpostal({
// 		postcode : [
// 			'#zip'
// 		],
// 		address : {
// 			'#pref'  : '%3',
// 			'#address'  : '%4%5'
// 		}
// 	});
// });
