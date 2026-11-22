//STEP5 角穴ABCDで加工数表示
function updateQuantity(index) {
    let select = document.getElementById("nuki_suu" + index);
    let quantity = document.getElementById("quantity" + index);
    let value = select.value;
    let length = value ? value.length : 0;
    quantity.textContent = length;
}

//クリアボタン　リセット用
function kirikakisuuclear() {
    for (i = 1 ;i < 7; i++){
      document.getElementById("quantity" + i).textContent = "0";
    }
}
