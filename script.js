// Category active effect
const buttons = document.querySelectorAll('.scroll-content button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.getElementById('generateBtn').addEventListener('click', () => {
    alert('Generating Thumbnails...');
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".arrow");

    question.addEventListener("click", () => {

        // Close all other items first
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherArrow = otherItem.querySelector(".arrow");

                otherAnswer.style.maxHeight = null;
                otherArrow.classList.remove("rotate");
            }
        });

        // Toggle current item
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            arrow.classList.remove("rotate");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            arrow.classList.add("rotate");
        }
    });
});
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("open");
}
const imageInput = document.getElementById("imageInput");
const chooseBtn = document.getElementById("chooseBtn");
const uploadBoxInner = document.getElementById("uploadBoxInner");
const imagePreview = document.getElementById("imagePreview");
const uploadIconBg = document.getElementById("uploadIconBg");

chooseBtn.addEventListener("click", () => imageInput.click());

uploadBoxInner.addEventListener("click", (e) => {
    if (e.target !== chooseBtn) imageInput.click();
});

imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block";

        uploadIconBg.style.display = "none";
        document.querySelector(".upload-box-text-main").style.display = "none";
        document.querySelector(".upload-box-text-support").style.display = "none";
        chooseBtn.style.display = "none";
    };

    reader.readAsDataURL(file);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Running!");

    const buttons = document.querySelectorAll(".cat-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".cat-btn.active")?.classList.remove("active");
            btn.classList.add("active");

            console.log("Clicked:", btn.dataset.cat);
        });
    });
});
