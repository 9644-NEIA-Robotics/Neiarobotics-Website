// SMOOTH SCROLLING
document.querySelectorAll('.top-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth', // Add smooth scrolling behavior
            duration: 500 // Set the animation duration (milliseconds)
        });
    });
});





// TYPEWRITER EFFECT
const words = ["Create", "Develop", "Engineer", "Innovate"];
const preface = " ";
const typeSpeed = 150; // Adjust the typing speed as needed (in milliseconds)
const deleteSpeed = 150; // Adjust the deleting speed as needed (in milliseconds)
const startDelay = 500; // Adjust the delay before typing starts (in milliseconds)
const endDelay = 2000; // Adjust the delay before typing starts (in milliseconds)

let wordIndex = 0;
let isDeleting = false;
let text = "";
let delay = 100;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        text = currentWord.substring(0, text.length - 1);
    } else {
        text = currentWord.substring(0, text.length + 1);
    }

    document.getElementById("text").textContent = preface + text;

    let delay = typeSpeed;
    if (isDeleting) {
        delay = deleteSpeed;
    }

    if (!isDeleting && text === currentWord) {
        isDeleting = true;
        delay = endDelay; // Delay before starting to delete the word
    } else if (isDeleting && text === "") {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = startDelay; // Delay before starting to type the next word
    }

    setTimeout(type, delay);
}

type(); // Start the typing animation