$(document).ready(function () {
  iro = document.form1.iro.value;
  size_s = document.form1.size_s.value;
  let productimage = new Image();

  $("dl.order__item").hide();
  $("#delivery_schedule.order__item").show();
  if (iro == "型板ルミネーティングK1" && size_s == "450x300") {
    productimage.src = "/storage/images/acrylic/acry_kataita/acry_kataitaK1W.jpg";
    $("#product_caption_0").text("型板ルミネーティングK1 450x300");
  } else if (iro == "型板ルミネーティングK1" && size_s == "300x450") {
    productimage.src = "/storage/images/acrylic/acry_kataita/acry_kataitaK1H.jpg";
    $("#product_caption_0").text("型板ルミネーティングK1 300x450");
  } else {
    productimage.src = "/storage/images/acrylic/acry_kataita/acry_kataita_3.jpg";
    $("#product_caption_0").text("型板ダイヤモンドK5 450x300");
  }
  $("#product_pic_0").attr("src", productimage.src);
});
