const targetColor = { r: 255, g: 255, b: 255 };
const replaceColor = { r: 255, g: 0, b: 0 };

const imageInput = document.getElementById('imageInput');
const dropZone = document.getElementById('dropZone');
const result = document.getElementById('result');
const downloadLink = document.getElementById('downloadLink');
const clearButton = document.getElementById('clearButton');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const previewImage = document.getElementById('previewImage');

/* クリックでファイル選択 */
dropZone.addEventListener('click', () => imageInput.click());

/* Drag & Drop */
dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.style.background = "#f0f7ff";
});
dropZone.addEventListener('dragleave', () => {
	dropZone.style.background = "transparent";
});
dropZone.addEventListener('drop', (e) => {
	e.preventDefault();
	dropZone.style.background = "transparent";
	const file = e.dataTransfer.files[0];
	if (file) processImage(file);
});

/* ファイル選択 */
imageInput.addEventListener('change', (e) => {
	if (e.target.files[0]) processImage(e.target.files[0]);
});

/* クリア処理 */
clearButton.addEventListener('click', () => {
	imageInput.value = "";
	result.textContent = "";
	downloadLink.classList.add('hidden');
	previewImage.src = "";
	previewImage.classList.add('hidden');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const preinfo = document.getElementById("preinfo");
	if (preinfo) preinfo.style.display = "";
});

/* メイン処理 */
function processImage(file) {
	const img = new Image();
	const reader = new FileReader();

	reader.onload = (e) => (img.src = e.target.result);
	reader.readAsDataURL(file);

	img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0);

		try {
			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			const data = imageData.data;

			let pixelCount = 0;

			/* 白または完全透過ピクセル数を数える */
			for (let i = 0; i < data.length; i += 4) {

				const isWhite =
					data[i] === 255 &&
					data[i + 1] === 255 &&
					data[i + 2] === 255;

				const isTransparent = data[i + 3] === 0;

				if (isWhite || isTransparent) {
					pixelCount++;
				}
			}

			if (pixelCount === 0) {
				result.textContent = "100%白・透過部分は含まれていません";
				previewImage.classList.add("hidden");
				downloadLink.classList.add("hidden");
				return;
			}

			/* 白または透過 → 赤 */
			for (let i = 0; i < data.length; i += 4) {

				const isWhite =
					data[i] === 255 &&
					data[i + 1] === 255 &&
					data[i + 2] === 255;

				const isTransparent = data[i + 3] === 0;

				if (isWhite || isTransparent) {
					data[i] = 255;
					data[i + 1] = 0;
					data[i + 2] = 0;
					data[i + 3] = 255; // 完全不透明
				}
			}

			ctx.putImageData(imageData, 0, 0);

			result.textContent = `100%白・透過部分が ${pixelCount}px 含まれます`;

			const png = canvas.toDataURL("image/png");

			downloadLink.href = png;
			downloadLink.download = "converted.png";
			downloadLink.classList.remove("hidden");

			previewImage.src = png;
			previewImage.classList.remove("hidden");

			const preinfo = document.getElementById("preinfo");
			if (preinfo) preinfo.style.display = "none";

		} catch (e) {
			console.error(e);
			result.textContent = "画像を処理できませんでした（CORS制限の可能性）";
		}
	};
}