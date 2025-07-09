window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});
document.querySelector("#btn").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Message sent successfully!");
        // Yahan backend connection bhi laga sakta hai if needed
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});