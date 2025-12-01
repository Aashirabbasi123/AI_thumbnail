document.addEventListener('DOMContentLoaded', function () {
    const chooseBtn = document.getElementById('chooseBtn');
    const imageInput = document.getElementById('imageInput');
    // Create or select a preview image element
    let preview = document.getElementById('imagePreview');
    if (!preview) {
        preview = document.createElement('img');
        preview.id = 'imagePreview';
        preview.style.maxWidth = "200px";
        preview.style.marginTop = "10px";
        // Insert preview at the top of the upload box
        const uploadBox = document.querySelector('.upload-box');
        uploadBox.insertBefore(preview, uploadBox.firstChild);
    }

    chooseBtn.addEventListener('click', function () {
        imageInput.click();
    });

    imageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});