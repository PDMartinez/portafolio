// =======================================
// PORTAFOLIO - Pedro Danilo Martínez Silva
// app.js
// =======================================

// ---------- Scroll suave ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });
});

// ---------- Navbar ----------
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add(
            "shadow-xl",
            "shadow-blue-900/20",
            "border-blue-900/20"
        );

    } else {

        header.classList.remove(
            "shadow-xl",
            "shadow-blue-900/20",
            "border-blue-900/20"
        );

    }

});

// ---------- Animaciones ----------
const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.remove(
                "opacity-0",
                "translate-y-8"
            );

            entry.target.classList.add(
                "opacity-100",
                "translate-y-0"
            );

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(section => {

    section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
    );

    observer.observe(section);

});

// ---------- Botón volver arriba ----------

const boton = document.createElement("button");

boton.innerHTML = "↑";

boton.className = `
fixed
bottom-6
right-6
w-12
h-12
rounded-full
bg-blue-600
text-white
text-xl
shadow-lg
hidden
hover:bg-blue-700
transition
`;

document.body.appendChild(boton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        boton.classList.remove("hidden");

    } else {

        boton.classList.add("hidden");

    }

});

boton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ---------- Efecto Hover en proyectos ----------

document.querySelectorAll("#projects .bg-slate-800").forEach(card => {

    card.classList.add(
        "transition",
        "duration-300",
        "cursor-pointer"
    );

    card.addEventListener("mouseenter", () => {

        card.classList.add(
            "scale-105",
            "shadow-2xl",
            "shadow-blue-500/20"
        );

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove(
            "scale-105",
            "shadow-2xl",
            "shadow-blue-500/20"
        );

    });

});

console.log("%cPortafolio cargado correctamente 🚀",
"color:#3b82f6;font-size:16px;font-weight:bold;");

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});