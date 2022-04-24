



// Start of paginatio
var i;
var inc = 0;
const btn = document.querySelectorAll(".btn");
const img = document.querySelectorAll(".images");
const button = document.querySelectorAll(".button");
const act = document.querySelectorAll(".active");

function pagnationToImage(clicked_id) {
    for (i = 0; i < btn.length; i++) {
        img[i].style.display = "none";
        btn[i].style.backgroundColor = "#808080bf";
        btn[i].style.color = "#fff";
    }
    act[0].style.backgroundColor = "fff";
    img[clicked_id].style.display = "block";
    btn[clicked_id].style.backgroundColor = "#darkcyan";
    btn[clicked_id].style.color = "#fff";
    inc = clicked_id;
}

button[0].onclick = function () {
    if (inc != 0) {
        inc = inc - 1;
    } else {
        inc = 0;
    }
    for (i = 0; i < btn.length; i++) {
        img[i].style.display = "none";
        btn[i].style.backgroundColor = "#808080bf";
        btn[i].style.color = "#fff";
        act[0].style.backgroundColor = "000";
    }
    img[inc].style.display = "block";
    btn[inc].style.backgroundColor = "#darkcyan";
    btn[inc].style.color = "#fff";
};

button[1].onclick = function () {
    inc++;
    if (inc == 6) {
        inc = 5;
    }
    for (i = 0; i < btn.length; i++) {
        img[i].style.display = "none";
        btn[i].style.backgroundColor = "#808080bf";
        btn[i].style.color = "#fff";
        act[0].style.backgroundColor = "fff";
    }
    img[inc].style.display = "block";
    btn[inc].style.backgroundColor = "#darkcyan";
    btn[inc].style.color = "#fff";
};
// End of paginatio
