const imgDiv = document.querySelector('.inputBox');
const img = document.querySelector('.expert-img');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('.upload-button');



file.addEventListener('change', function () {
    
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();
        
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            document.querySelector('img').style.width = '300px';
            document.querySelector('img').style.height = '300px';
            document.querySelector('img').style.borderRadius = '50%';
        });

        reader.readAsDataURL(choosedFile);
    }
});