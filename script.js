function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
    document.getElementById("hamburger").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const titleEl = document.getElementById("hero-title");
    const subEl = document.getElementById("hero-sub");

    const titleText = "Hey, I'm Lawanson Toluwani.";
    const subText = "I'm a Creative Front-End Developer.....";

    let typingInterval;

    function typeText(element, text, speed = 80, callback) {
        let i = 0;
        element.textContent = ""; // clear before typing
        element.classList.add("typing-cursor");

        typingInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(typingInterval);
                element.classList.remove("typing-cursor");
                if (callback) callback();
            }
        }, speed);
    }

    function startTyping() {
        clearInterval(typingInterval);
        titleEl.textContent = "";
        subEl.textContent = "";
        typeText(titleEl, titleText, 80, () => {
            typeText(subEl, subText, 80);
        });
    }

    // Observe when hero is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startTyping();
                } else {
                    clearInterval(typingInterval);
                }
            });
        }, { threshold: 0.8 } // trigger when 60% of hero is visible
    );

    observer.observe(hero);
});