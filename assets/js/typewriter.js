document.addEventListener("DOMContentLoaded", function() {
    const text = "Web Developer";
    const typewriterText = document.getElementById("typewriter-text");

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust typing speed here
        } else {
            typewriterText.style.borderRight = 'none'; // Remove the cursor after typing
        }
    }

    typeWriter();
});
