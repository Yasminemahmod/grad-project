// function showPreview(event) {
//     if (event.target.files.length > 0) {
//         var src = URL.createObjectURL(event.target.files[0]);
//         var preview = document.getElementById("user-picture-preview");
//         preview.style.display = "block"
//     }
// }


const inpImage = document.getElementById("user-picture");
const previewContainer = document.getElementById("imagePreview");
const previewImage = document.getElementById("user-picture-preview");

inpImage.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage.style.display = "none";

        reader.addEventListener("load", function () {
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});