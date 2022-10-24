let i = 0;
const images_array = [];

// adding images to the array
images_array[0] = "images/animal_1.jpg";
images_array[1] = "images/animal_2.jpg";
images_array[2] = "images/animal_3.jpg";
images_array[3] = "images/animal_4.jpg";
images_array[4] = "images/animal_5.jpg";
images_array[5] = "images/animal_6.jpg";

function slideImage() {
    document.getElementById('slide').src = images_array[i];

    if (i < images_array.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImage()", 2500);
}

slideImage();