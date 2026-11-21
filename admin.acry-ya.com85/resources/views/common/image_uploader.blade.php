<section id="image_uploader">
    <h3>画像選択</h3>
    <ul class="tab-menu">
        <li data-name="upload" class="tab-upload">アップロード</li>
        <li data-name="library" class="tab-library active">ライブラリ</li>
    </ul>
    <div class="tab-block">
        <div class="upload">
            <form method="post">
                <div class="upload-directory">
                    アップロード先のディレクトリ：<input type="text" name="directory" value=""/>
                </div>
                <div class="upload-ui" ondragover="onDragOver(event)" ondrop="onDrop(event)">
                    <h4>アップロードするファイルをドロップ</h4>
                    <p class="mgb10">または</p>
                    <div class="file btn mgb10">
                        ファイルを選択
                        <input type="file" name="image"/>
                    </div>
                    <p class="font10">最大アップロードサイズ: 2 MB</p>
                </div>
            </form>
        </div>
        <div class="library">
            <div class="body">
                <div class="main">
                    <div class="search">
                        ディレクトリ：<input type="text" name="directory"/>
                        <button type="button" class="btn-search btn-min">検索</button>
                    </div>
                    <ul class="image-list">
                    </ul>
                </div>
                <div class="sub">

                </div>
            </div>
            <div class="footer">
                <div class="information">
                    <div class="thumbnail">
                        <img src="/assets/images/noimage.png">
                    </div>
                    <div class="notes">
                        <p>画像パス:<span class="path"></span></p>
                        <p class="procArea-delete"><a class="image-delete">削除する</a></p>
                    </div>
                </div>
                <button type="button" class="btn-select">選択</button>
            </div>
        </div>
    </div>
    <div class="close-modal">×</div>
</section>
<script>
    let selectImageId;
    let selectImageSrc;
    let selectImageRootUrl;
    let targetRecodeID;
    let processType;
    let imageRootPath = '/{{ env('DISPLAY_IMAGE_PATH') }}';
    let imagePath = '{{ env('SITE_URL') }}'+imageRootPath;
    let bearerToken = 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136';
    $(function () {
        $(document).on('click', '.image-selector', function () {
			targetRecodeID = $(this).data('target');
			processType = $(this).data('type');
            openModal();
            displayInformation();
            displayImageList();
        });

        $(document).on('click', '#image_uploader .library .btn-select', function () {
            imageSelectedProcess();
        });

        $(document).on('click', '.image-clear', function () {
            targetRecodeID = $(this).data('target');
            $('#' + targetRecodeID + ' img').attr('src', '/assets/images/noimage.png');
            $('#' + targetRecodeID + ' .picture_id').val('');
            $(this).hide();
            $(this).next('.image-url').hide();
            $(this).next('.image-url').children('.url').html("");
        });

        $('.image-clear').each(function (index, element) {
            let recodeID = $(element).data('target');
            let pictureID = $('#' + recodeID + ' .picture_id').val();
            if (!pictureID) {
                $(element).hide();
                $(element).next('.image-url').hide();
            }
        });

        $(document).on('click', '#image_uploader .tab-menu .tab-library', function () {
            // displayImageList();
        });

        $(document).on('click', '#image_uploader .library .search .btn-search', function () {
            displayImageList();
        });

        $(document).on('click', '#image_uploader .image-list li', function () {
            $('#image_uploader .image-list li').removeClass('select');
            $(this).addClass('select');
            selectImageId = $(this).data('id');
            selectImageSrc = $(this).children('img').attr('src');
            selectImageRootUrl = $(this).children('img').data('root_url');
            console.log(selectImageRootUrl);
            $('#image_uploader .information .thumbnail img').attr('src', selectImageSrc);
            $('#image_uploader .information .notes .path').text(selectImageSrc);
            displayInformation();
        });

        $(document).on('dblclick', '#image_uploader .image-list li', function () {
            selectImageId = $(this).data('id');
            selectImageSrc = $(this).children('img').attr('src');
            selectImageRootUrl = $(this).children('img').data('root_url');
            imageSelectedProcess();
        });

        $(document).on('click', '#modal-bg, #image_uploader .close-modal', function () {
            closeModal();
        });

        $(document).on('click', '#image_uploader .image-delete', function () {
            deleteImage();
        });
    });

    function displayInformation() {
        if (selectImageId) {
            $('#image_uploader .information').show();
        } else {
            $('#image_uploader .information').hide();
        }
		if( typeof targetRecodeID != 'undefined' && targetRecodeID != "") {
			$('#image_uploader .library .btn-select').show();
		} else {
			$('#image_uploader .library .btn-select').hide();
		}
    }

    function openModal() {
        $('#image_uploader').show(100);
        $('body').append('<div id="modal-bg"></div>');
    }

    function closeModal() {
        $('#image_uploader .library .image-list').html('');
        $('#image_uploader').hide(100);
        $('#modal-bg').remove();
    }

    function imageSelectedProcess() {
        if( processType == 'html' ) {
            let insertHtml = $('#' + targetRecodeID).val();
            if( insertHtml.length > 0 ) insertHtml += "\n";
            insertHtml += '<img src="'+selectImageRootUrl+'" />';
            $('#' + targetRecodeID).val(insertHtml);
        } else {
            $('#' + targetRecodeID + ' img').attr('src', selectImageSrc);
            $('#' + targetRecodeID + ' .picture_id').val(selectImageId);
        }
        $('#' + targetRecodeID + ' .image-clear').show();
        $('#' + targetRecodeID + ' .image-url').show();
        $('#' + targetRecodeID + ' .image-url').children('.url').html(selectImageSrc);
        closeModal();
    }
    // File APIに対応していない場合はエリアを隠す
    if (!window.File) {
        document.getElementById('#image_uploader .upload-ui').style.display = "none";
    }

    // ブラウザ上でファイルを展開する挙動を抑止
    function onDragOver(event) {
        event.preventDefault();
    }

    // Drop領域にドロップした際のファイルのプロパティ情報読み取り処理
    function onDrop(event) {
        // ブラウザ上でファイルを展開する挙動を抑止
        event.preventDefault();

        // ドロップされたファイルのfilesプロパティを参照
        var files = event.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
            // 一件ずつアップロード
            let result = imageFileUpload(files[i]);
            if( result == false ) return false;
        }
        setTimeout(() => {
                displayImageList();
                $('#image_uploader .tab-menu .tab-library').click();
            },
            500);
    }

    $('#image_uploader .upload form').on('change', 'input[type="file"]', function (e) {
        var file = e.target.files[0];
        let result = imageFileUpload(file);
        if( result == false ) return false;
        setTimeout(() => {
                displayImageList();
                $('#image_uploader .tab-menu .tab-library').click();
            },
            500);
    });

    // ファイルアップロード
    function imageFileUpload(f, mode) {

        var formData = new FormData();
        formData.append('image', f);
        formData.append('directory', $('#image_uploader .upload [name=directory]').val());
        if( mode == 'overwrite' ) {
            formData.append('is_overwrite', '1');
        }

        if (f.size >= {{ $post_max_size }} ) {
            alert(f.name + '：ファイルサイズがアップロード可能なサイズを超過しています。ファイルを分割してアップロードしてください。');
            return;
        }

        $.ajax({
            headers: {
                'Authorization': bearerToken
            },
            type: 'POST',
            contentType: false,
            processData: false,
            url: '{{ route('api.images.upload') }}',
            data: formData,
            dataType: 'json',
            async: true,
            success: function (data) {
                if (typeof data.error === "undefined") {
                    console.log('upload success:'+f.name);
                    $('#uploadResultBlock').show();
                    $('#image_uploader .library [name=directory]').val('');
                } else {
                    console.log(data.error);
                    switch (data.error.code) {
                        case 303:
                            let result = confirm("同じファイル名の画像が存在します。上書きしますか？");
                            if( result ) {
                                imageFileUpload(f, 'overwrite');
                            }
                            break;
                    }
                    return false;
                }
                return true;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax通信に失敗しました");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
                alert("エラーが発生しました。");
            }
        });
    }

    // 画像一覧表示
    function displayImageList() {
        let apiUrl = '{{ route('api.images.search') }}';
        if ($('#image_uploader .library [name=directory]').val()) {
            apiUrl += '?directory=' + $('#image_uploader .library [name=directory]').val();
        }

        $('#image_uploader .library .main').append('<div class="loading"></div>');

        $.ajax({
            headers: {
                'Authorization': bearerToken
            },
            type: 'GET',
            contentType: false,
            processData: false,
            url: apiUrl,
            dataType: 'json',
            async: true,
            success: function (data) {
                if (typeof data.error === "undefined") {
                    $('#image_uploader .library .image-list').html('');
                    for (let i = 0; data.images.length > i; i++) {
                        let image = data.images[i];
                        let line = $('<li></li>');
                        line.attr('data-id', image.picture_id);
                        let imageUrl = imagePath;
                        let imageRootUrl = imageRootPath;
                        if (image.directory) {
                            imageUrl += image.directory + '/' + image.picture_path;
                            imageRootUrl += image.directory + '/' + image.picture_path;
                        } else {
                            imageUrl += image.picture_path;
                            imageRootUrl += image.picture_path;
                        }
                        line.append('<img class="lazyload" data-src="' + imageUrl + '" data-root_url="'+imageRootUrl+'"/>');
                        $('#image_uploader .library .image-list').append(line);
                    }
                } else {
                    console.log(data.error);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax通信に失敗しました");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
            }
        })
            .always((data) => {
                $('#image_uploader .library .main .loading').remove();
            });
    }

    // 画像削除
    function deleteImage() {
        let apiUrl = '{{ route('api.images.delete') }}';
        if (selectImageId) {
            apiUrl += '?picture_id=' + selectImageId;
        } else {
            alert('画像の指定がありません。');
            return;
        }

        $.ajax({
            headers: {
                'Authorization': bearerToken
            },
            type: 'GET',
            contentType: false,
            processData: false,
            url: apiUrl,
            dataType: 'json',
            async: true,
            success: function (data) {
                console.log(data);
                if (typeof data.error === "undefined") {
                    displayImageList();
                } else {
                    console.log(data.error);
                    switch (data.error.code) {
                        case 409:
                            alert("画像が使用されているため削除できません。");
                            break;
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax通信に失敗しました");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
            }
        });
    }
</script>