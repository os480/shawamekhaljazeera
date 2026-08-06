/*==================================================
                    HEADER LOADED
==================================================*/

alert("header loaded");


/*==================================================
                    ELEMENTS
==================================================*/

const headerInner = document.querySelector(".header-inner");

const navLinks = document.querySelectorAll(".nav-link[href^='#']");
const indicator = document.querySelector(".nav-indicator");
const navMenu = document.querySelector(".nav-menu");

const sections = document.querySelectorAll("section[id]");

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileClose = document.querySelector(".mobile-close");

const overlay = document.querySelector(".mobile-overlay");


/*==================================================
                FLOATING HEADER
==================================================*/

let headerScrolled = false;

function updateHeader() {

    const shouldScroll = window.scrollY > 25;

    if (shouldScroll !== headerScrolled) {

        headerInner.classList.toggle("scrolled", shouldScroll);

        headerScrolled = shouldScroll;

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/*==================================================
            NAVIGATION INDICATOR
==================================================*/

function moveIndicator(link) {

    if (!link || !indicator || !navMenu) return;

    const menuRect = navMenu.getBoundingClientRect();

    const text = link.querySelector("span");

    const textRect = text.getBoundingClientRect();

    indicator.style.width = `${textRect.width}px`;

    indicator.style.transform =
    `translateX(${textRect.left - menuRect.left}px)`;

}


/*==================================================
                ACTIVE LINK
==================================================*/

function setActiveLink(link) {

    if (!link) return;

    navLinks.forEach(item => {

        item.classList.remove("active");

    });

    link.classList.add("active");

    moveIndicator(link);

}


/*==================================================
            INITIAL ACTIVE LINK
==================================================*/

function initActiveLink() {

    let currentLink = navLinks[0];

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            const id = section.getAttribute("id");

            const match = document.querySelector(`.nav-link[href="#${id}"]`);

            if (match) currentLink = match;

        }

    });

    setActiveLink(currentLink);

}


/*==================================================
                    SCROLL SPY
==================================================*/

function updateActiveOnScroll() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }

    });

    if (currentSection) {

        const active = document.querySelector(

            `.nav-link[href="#${currentSection}"]`

        );

        if (active && !active.classList.contains("active")) {

            setActiveLink(active);

        }

    }

}

window.addEventListener("scroll", updateActiveOnScroll);


/*==================================================
                HOVER EFFECT
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        moveIndicator(link);

    });

});


/*==================================================
            RETURN INDICATOR
==================================================*/

if (navMenu) {

    navMenu.addEventListener("mouseleave", () => {

        const active = document.querySelector(".nav-link.active");

        if (active) {

            moveIndicator(active);

        }

    });

}


/*==================================================
                WINDOW RESIZE
==================================================*/

window.addEventListener("resize", () => {

    const active = document.querySelector(".nav-link.active");

    if (active) {

        moveIndicator(active);

    }

});


/*==================================================
                SMOOTH SCROLL
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        const targetId = link.getAttribute("href");

        if (!targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const headerOffset = 100;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

        setActiveLink(link);

    });

});


/*==================================================
                LANGUAGE SWITCH
==================================================*/

const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        langButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


/*==================================================
    MOBILE MENU
==================================================*/



if (menuToggle && mobileMenu && overlay) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.add("active");
        mobileMenu.classList.add("active");
        overlay.classList.add("active");

    });

    overlay.addEventListener("click", closeMobileMenu);

    if (mobileClose) {
        mobileClose.addEventListener("click", closeMobileMenu);
    }

}

function closeMobileMenu() {

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

}

/*==================================================
    CLOSE MENU AFTER CLICK
==================================================*/

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/*==================================================
                INITIALIZE
==================================================*/

window.addEventListener("load", () => {

    initActiveLink();

});


/*==================================================
        TRUSTED SECTION ANIMATION
==================================================*/

const trustedSection = document.querySelector(".trusted-section");

if (trustedSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            /*==============================
                LEFT CONTENT
            ==============================*/

            const trustedLeft = document.querySelector(".trusted-left");

            if (trustedLeft) {

                trustedLeft.classList.add("show");

            }

            /*==============================
                RIGHT CONTENT
            ==============================*/

            setTimeout(() => {

                const trustedRight = document.querySelector(".trusted-right");

                if (trustedRight) {

                    trustedRight.classList.add("show");

                }

            }, 180);

            /*==============================
                LOGOS STAGGER
            ==============================*/

            const logos = document.querySelectorAll(".trusted-logo");

            logos.forEach((logo, index) => {

                setTimeout(() => {

                    logo.classList.add("show");

                }, 380 + (index * 120));

            });

            /*==============================
                STOP OBSERVER
            ==============================*/

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.25

    });

    observer.observe(trustedSection);

}


/*==================================
    Function Anemation About Section
    =================================*/
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

document.querySelectorAll(
'.about-left,.about-right,.about-feature'
).forEach((el)=>{
  observer.observe(el);
});



/*==================================================
            GLOBAL SCROLL REVEAL
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            // لو العنصر Service List
            if (entry.target.classList.contains("services-list")) {

                const items = entry.target.querySelectorAll(".service-item");

                items.forEach((item, index) => {

                    setTimeout(() => {

                        item.classList.add("show");

                    }, index * 120);

                });

            }

            // لو العنصر Process Grid
            else if (entry.target.classList.contains("process-grid")) {

                const items = entry.target.querySelectorAll(".process-item");

                items.forEach((item, index) => {

                    setTimeout(() => {

                        item.classList.add("show");

                    }, index * 180);

                });

            }

            // أي عنصر عادي
            else {

                entry.target.classList.add("show");

            }

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.2

    });

    // جميع العناصر العادية
    document.querySelectorAll(".reveal").forEach((el) => {

        if (
            !el.classList.contains("service-item") &&
            !el.classList.contains("process-item")
        ) {

            observer.observe(el);

        }

    });

    // Services List
    const servicesList = document.querySelector(".services-list");

    if (servicesList) {

        observer.observe(servicesList);

    }

    // Process Grid
    const processGrid = document.querySelector(".process-grid");

    if (processGrid) {

        observer.observe(processGrid);

    }

});

/*==================================================
            PROJECT REVEAL
==================================================*/

const projectCards=document.querySelectorAll(".reveal-image");

const projectObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.18
});

projectCards.forEach((card,index)=>{

card.style.transitionDelay=`${index*180}ms`;

projectObserver.observe(card);

});

/*==================================================
            TEXT REVEAL
==================================================*/

const projectTexts=document.querySelectorAll(".reveal-text");

const textObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add("show");

},220);

}

});

},{
threshold:.2
});

projectTexts.forEach((item)=>{

textObserver.observe(item);

});

/*==================================================
            WORK REVEAL
==================================================*/

const workItems=document.querySelectorAll(".reveal-left");

const workObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

workItems.forEach((item,index)=>{

item.style.transitionDelay=`${index*120}ms`;

workObserver.observe(item);

});

/*==================================================
            COUNTER
==================================================*/

const counters = document.querySelectorAll(".stat-number");

/*=========================================
    Convert English Numbers to Arabic
=========================================*/

function toArabicNumbers(number) {
    return number.toString().replace(/\d/g, digit => "٠١٢٣٤٥٦٧٨٩"[digit]);
}

/*=========================================
    Detect Arabic Page
=========================================*/

const isArabic =
    document.documentElement.dir === "rtl" ||
    document.documentElement.lang === "ar";

/*=========================================
    Counter Observer
=========================================*/

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        const duration = 2300; // مدة العداد بالملي ثانية (2.5 ثانية)
        let startTime = null;

        function updateCounter(timestamp) {

            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);

            const currentValue = Math.floor(progress * target);

            counter.textContent = isArabic
                ? toArabicNumbers(currentValue)
                : currentValue;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = isArabic
                    ? toArabicNumbers(target)
                    : target;

            }

        }

        requestAnimationFrame(updateCounter);

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/*==================================================
            REVEAL ANIMATION
==================================================*/

const revealUps = document.querySelectorAll(".reveal-up");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

revealUps.forEach((item, index) => {

    if (item.classList.contains("catalog-item")) {

        item.style.transitionDelay = `${index * 90}ms`;

    } else {

        item.style.transitionDelay = `${index * 150}ms`;

    }

    revealObserver.observe(item);

});

/*==================================================
              PARTNERS REVEAL
==================================================*/

const partnerLogos = document.querySelectorAll(".reveal-logo");

const partnerObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

partnerLogos.forEach((logo, index) => {

    logo.style.transitionDelay = `${index * 120}ms`;

    partnerObserver.observe(logo);

});

/*==============================
    partners-logos
==============================*/

const logos = document.querySelectorAll(".partners-logos");

logos.forEach((logo, index) => {

    setTimeout(() => {

        logo.classList.add("show");

    }, 380 + (index * 120));

});

/*==================================================
        ABOUT NUMBER RESPONSIVE SCROLL
==================================================*/

(() => {

    const number = document.querySelector(".about-number");

    if (!number) return;


    let currentY = 0;
    let targetY = 0;


    const smooth = 0.30;


    let scrollStart;
    let scrollEnd;
    let downMove;
    let upMove;


    function setSettings() {


        const width = window.innerWidth;


        //==============================
        // MOBILE
        // 390px
        //==============================

        if (width < 640) {

            scrollStart = 1400;
            scrollEnd   = 1800;

            downMove = 180;
            upMove   = 250;

        }


        //==============================
        // TABLET
        // 640px - 1024px
        //==============================

        else if (width < 1025) {

            scrollStart = 0; // نعدلها بعد القياس
            scrollEnd   = 0;

            downMove = 150;
            upMove   = 200;

        }


        //==============================
        // DESKTOP
        // 1025px+
        //==============================

        else {

            scrollStart = 0; // نعدلها بعد القياس
            scrollEnd   = 0;

            downMove = 120;
            upMove   = 170;

        }

    }


    function update() {


        let progress =
            (window.scrollY - scrollStart) /
            (scrollEnd - scrollStart);


        progress = Math.max(0, Math.min(progress, 1));


        targetY =
            downMove -
            (progress * (downMove + upMove));


    }


    function animate() {


        currentY +=
            (targetY - currentY) * smooth;


        number.style.transform =
            `translate3d(0, ${currentY}px, 0)`;


        requestAnimationFrame(animate);

    }


    window.addEventListener("resize", () => {

        setSettings();
        update();

    });


    window.addEventListener(
        "scroll",
        update,
        {passive:true}
    );


    setSettings();
    update();
    animate();


})();

/* =========================================
   HERO TITLE ANIMATION
   English: Letter by letter
   Arabic: Word by word
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const heroTitles = document.querySelectorAll(".hero-title");

    heroTitles.forEach((title) => {

        // معرفة اتجاه الصفحة
        const isRTL = document.documentElement.dir === "rtl";

        /* =====================================
           RTL — ARABIC
           نحافظ على اتصال الحروف
        ===================================== */

        if (isRTL) {

            const arabicLines = title.querySelectorAll(".hero-title-line");

            let wordIndex = 0;

            // زمن التأخير بين كل كلمة والتي تليها
            const wordDelay = 0.5;

            arabicLines.forEach((line) => {

                /*
                 * لو السطر يحتوي على عنصر داخلي
                 * مثل text-gradient-flame
                 */
                const target =
                    line.querySelector(".font-display") || line;

                /*
                 * حذف المسافات والأسطر الزائدة
                 */
                const text = target.textContent.trim();

                // مسح النص القديم
                target.textContent = "";

                /*
                 * تقسيم النص إلى كلمات
                 * وليس حروف
                 */
                const words = text.split(/\s+/);

                words.forEach((word) => {

                    const wordSpan = document.createElement("span");

                    wordSpan.className = "title-word";

                    wordSpan.textContent = word;

                    /*
                     * تأخير ظهور كل كلمة
                     */
                    wordSpan.style.animationDelay =
                        `${wordIndex * wordDelay}s`;

                    target.appendChild(wordSpan);

                    /*
                     * إضافة مسافة بين الكلمات
                     */
                    target.appendChild(
                        document.createTextNode(" ")
                    );

                    wordIndex++;

                });

            });

            // نوقف باقي كود الإنجليزي
            return;
        }

        /* =====================================
           LTR — ENGLISH
           حرف وراء حرف
        ===================================== */

        const lines =
            title.querySelectorAll(
                ".title-line-1, .title-line-2"
            );

        let letterIndex = 0;

        lines.forEach((line) => {

            /*
             * حذف المسافات والأسطر
             * الموجودة قبل وبعد النص
             */
            const text = line.textContent.trim();

            // حذف النص القديم
            line.textContent = "";

            /*
             * إنشاء عنصر لكل حرف
             */
            [...text].forEach((character) => {

                const letter = document.createElement("span");

                letter.className = "title-letter";

                /*
                 * الحفاظ على المسافة
                 * بين الكلمات
                 */
                if (character === " ") {

                    letter.innerHTML = "&nbsp;";

                } else {

                    letter.textContent = character;

                }

                /*
                 * تأخير ظهور الحروف
                 */
                letter.style.animationDelay =
                    `${letterIndex * 0.055}s`;

                line.appendChild(letter);

                letterIndex++;

            });

        });

    });

});