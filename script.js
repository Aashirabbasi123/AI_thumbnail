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

