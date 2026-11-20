// Carousel Selection

document.addEventListener("DOMContentLoaded", function () {

    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("mainProductImage");

    thumbnails.forEach(function (thumbnail) {

        thumbnail.addEventListener("click", function () {

            const newImage = this.dataset.image;

            // Change main image
            mainImage.style.opacity = "0";

            setTimeout(function () {

                mainImage.src = newImage;
                mainImage.style.opacity = "1";

            }, 150);

            // Remove active class
            thumbnails.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class
            this.classList.add("active");

        });

    });

});


// Color Selection

const colorButtons = document.querySelectorAll(".color-btn");
const colorInput = document.getElementById("product-color");

colorButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active state
        colorButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate selected color
        this.classList.add("active");

        // Update selected color value
        colorInput.value = this.dataset.color;

    });

});

// Menu Selection

    // SIZE SELECTION
    const sizeButtons = document.querySelectorAll(".size-btn");
    const sizeInput = document.getElementById("product-size");

    sizeButtons.forEach(button => {

        button.addEventListener("click", function () {

            sizeButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            sizeInput.value = this.dataset.size;

        });

    });


    // QUANTITY
    const quantityInput = document.getElementById("product-quantity");

    document.getElementById("decrease-quantity")
        .addEventListener("click", function () {

            let quantity = parseInt(quantityInput.value) || 1;

            if (quantity > 1) {
                quantityInput.value = quantity - 1;
            }

        });

    document.getElementById("increase-quantity")
        .addEventListener("click", function () {

            let quantity = parseInt(quantityInput.value) || 1;

            quantityInput.value = quantity + 1;

        });