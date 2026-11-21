function chbx1() {
  var newOrderCheckbox = document.getElementById("new_order");
  var designKeyElement = document.getElementById("designKey");
  var sections = ["step-02", "step-03", "step-04", "step-05"];

  if (newOrderCheckbox.checked) {
    document.getElementById("repeat_order").checked = false;
    designKeyElement.style.display = "none";
  } else {
    designKeyElement.style.display = "block";
  }

  // すべてのセクションを表示に設定
  for (var i = 0; i < sections.length; i++) {
    var section = document.getElementById(sections[i]);
    section.style.display = "block";
  }
}

function chbx2() {
  var repeatOrderCheckbox = document.getElementById("repeat_order");
  var designKeyElement = document.getElementById("designKey");
  var sections = ["step-02", "step-03", "step-04", "step-05"];

  if (repeatOrderCheckbox.checked) {
    document.getElementById("new_order").checked = false;
    designKeyElement.style.display = "block";
    
    // すべてのセクションを非表示に設定
    for (var i = 0; i < sections.length; i++) {
      var section = document.getElementById(sections[i]);
      section.style.display = "none";
    }
  } else {
    // すべてのセクションを表示に設定
    for (var i = 0; i < sections.length; i++) {
      var section = document.getElementById(sections[i]);
      section.style.display = "block";
    }
    designKeyElement.style.display = "none";
  }
}