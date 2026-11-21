// ===== 設定 =====
const monthOffsets = [-1, 0, 1];

// ===== 状態 =====
let holidayCache = {};
let currentBaseDate = new Date();

// ===== 初期化 =====
init();

function init() {
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentBaseDate.setDate(1);
    currentBaseDate.setMonth(currentBaseDate.getMonth() - 1);
    render();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentBaseDate.setDate(1);
    currentBaseDate.setMonth(currentBaseDate.getMonth() + 1);
    render();
  });

  document.getElementById("todayBtn").addEventListener("click", () => {
    currentBaseDate = new Date();
    render();
  });

  render();
}

// ===== 描画 =====
async function render() {
  const container = document.getElementById("calendar");
  container.innerHTML = "";
  container.className = "calendar-grid";
  container.style.setProperty("--cols", monthOffsets.length);

  const fragment = document.createDocumentFragment();

  // ★ 先に必要な年を全部集める
  const years = new Set();

  for (let offset of monthOffsets) {
    const d = new Date(currentBaseDate);
    d.setDate(1);
    d.setMonth(d.getMonth() + offset);
    years.add(d.getFullYear());
  }

  // ★ 全年分まとめて取得
  await Promise.all([...years].map(y => fetchHolidays(y)));

  // ★ その後に描画
  for (let offset of monthOffsets) {
    const d = new Date(currentBaseDate);
    d.setDate(1);
    d.setMonth(d.getMonth() + offset);

    fragment.appendChild(createMonth(d));
  }

  container.appendChild(fragment);

  updateNavButtons();
}

// ===== 祝日取得（軽量版）=====
async function fetchHolidays(year) {
  if (holidayCache[year]) return;

  try {
    const res = await fetch(`https://holidays-jp.github.io/api/v1/${year}/date.json`);
    const data = await res.json();

    holidayCache[year] = Object.keys(data);

  } catch (e) {
    console.warn("祝日取得失敗:", e);
    holidayCache[year] = [];
  }
}
// ===== 月生成 =====
function createMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const wrapper = document.createElement("div");
  wrapper.className = "calendar-month";

  const title = document.createElement("h3");
  title.textContent = `${year}年${month + 1}月`;

  const table = document.createElement("table");
  table.className = "calendar-table";

  // ===== 曜日 =====
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  days.forEach((d, i) => {
    const th = document.createElement("th");
    th.textContent = d;
    if (i === 0) th.classList.add("sunday");
    if (i === 6) th.classList.add("saturday");
    trHead.appendChild(th);
  });

  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let tr = document.createElement("tr");

  // 前月空白
  for (let i = 0; i < firstDay; i++) {
    const td = document.createElement("td");
    td.classList.add("other-month");
    tr.appendChild(td);
  }

  // 当月
  for (let day = 1; day <= lastDate; day++) {
    const td = document.createElement("td");
    const current = new Date(year, month, day);

    const ymd = formatDate(current);
    const dow = current.getDay();

    td.textContent = day;
    td.dataset.date = ymd; // ★将来拡張用

    if (dow === 0) td.classList.add("sunday");
    if (dow === 6) td.classList.add("saturday");

    const isHoliday =
      dow === 0 ||
      dow === 6 ||
      manualHolidays.includes(ymd) ||
      (holidayCache[year] && holidayCache[year].includes(ymd));

    td.classList.add(isHoliday ? "holiday" : "business");

    // 今日
    if (formatDate(new Date()) === ymd) {
      td.classList.add("today");
    }

    tr.appendChild(td);

    if (tr.children.length === 7) {
      tbody.appendChild(tr);
      tr = document.createElement("tr");
    }
  }

  // 最終行埋め
  if (tr.children.length > 0) {
    while (tr.children.length < 7) {
      const td = document.createElement("td");
      td.classList.add("other-month");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  wrapper.appendChild(title);
  wrapper.appendChild(table);

  return wrapper;
}

// ===== 日付フォーマット =====
function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function updateNavButtons() {
  const nextBtn = document.getElementById("nextBtn");

  // 次へ押した後の基準月
  const nextMonth = new Date(currentBaseDate);
  nextMonth.setDate(1);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  nextBtn.disabled = nextMonth > maxDate;
}