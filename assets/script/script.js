document.querySelectorAll(".head").forEach( el => {
    el.addEventListener('click', evt => {
        evt.target.nextElementSibling.classList.toggle("closed")
    })
})

//modal x immagini
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".grid-image");

// click event open modal
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src; // set the modal image source to the clicked image's source
    });
});

//x close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// user clicks outside the image
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}

// esc modal closes
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the container that holds all the sections
    const worksContainer = document.querySelector('#works');

    // Get all the sections inside the works container
    const sections = Array.from(worksContainer.querySelectorAll('section'));

    // Iterate through each section to extract the year from the second <p> tag inside .micro-typography
    sections.forEach(section => {
        const yearTag = section.querySelector('.micro-typography p:nth-child(2)');
        if (yearTag) {
            const year = yearTag.textContent.trim(); // Get the year value and trim spaces
            section.setAttribute('data-year', year); // Set data-year attribute with the year value
        }
    });

    // Sort sections by the data-year attribute in descending order (most recent first)
    sections.sort((a, b) => {
        const yearA = parseInt(a.getAttribute('data-year'), 10);
        const yearB = parseInt(b.getAttribute('data-year'), 10);
        return yearB - yearA; // Sort in descending order (most recent first)
    });

    // Remove existing sections and append the sorted ones in the correct order
    sections.forEach(section => worksContainer.appendChild(section));
});
