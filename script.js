/* =====================================================
   3VER Website
   script.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Smooth scrolling
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       Navbar background
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            header.style.background = "rgba(20,20,20,0.92)";
            header.style.transition = "0.4s";

        } else {

            header.style.background = "rgba(20,20,20,0.55)";

        }

    });

    /* ==========================================
       Fade-in animation on scroll
    ========================================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";

        observer.observe(section);

    });

    /* ==========================================
       Active navigation menu
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       Gallery Lightbox
    ========================================== */

    const images = document.querySelectorAll(".gallery img");

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.style.position = "fixed";
    lightbox.style.left = "0";
    lightbox.style.top = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,.95)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.cursor = "zoom-out";
    lightbox.style.zIndex = "9999";

    document.body.appendChild(lightbox);

    images.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.innerHTML = "";

            const img = document.createElement("img");

            img.src = image.src;

            img.style.maxWidth = "90%";
            img.style.maxHeight = "90%";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "0 0 40px rgba(255,255,255,.2)";

            lightbox.appendChild(img);

            lightbox.style.display = "flex";

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    /* ==========================================
       Back to top button
    ========================================== */

    const button = document.createElement("button");

    button.innerHTML = "▲";

    button.style.position = "fixed";
    button.style.right = "25px";
    button.style.bottom = "25px";
    button.style.width = "48px";
    button.style.height = "48px";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.background = "#f18f01";
    button.style.color = "white";
    button.style.fontSize = "20px";
    button.style.cursor = "pointer";
    button.style.display = "none";
    button.style.boxShadow = "0 6px 20px rgba(0,0,0,.25)";
    button.style.zIndex = "1000";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});