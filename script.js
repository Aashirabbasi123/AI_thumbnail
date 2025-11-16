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
    let timerSpan = document.querySelector(".timer");

    // ٹائمر کا وقت (13 گھنٹے 10 منٹ 3 سیکنڈ)
    let endTime = new Date().getTime() +
        (13 * 60 * 60 * 1000) +
        (10 * 60 * 1000) +
        (3 * 1000);

    function updateTimer() {
        let now = new Date().getTime();
        let remaining = endTime - now;

        if (remaining <= 0) {
            timerSpan.innerText = "Offer Ended";
            return;
        }

        let d = Math.floor(remaining / (1000 * 60 * 60 * 24));
        let h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((remaining % (1000 * 60)) / 1000);

        timerSpan.innerText = `${d}d ${h}h ${m}m ${s}s`;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

