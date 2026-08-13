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





/*==================================================
        ABOUT SECTION ANIMATION
==================================================*/

const aboutImage = document.querySelector(".about-image");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            /*==================================
                ADD SHOW TO CURRENT ELEMENT
            ==================================*/

            entry.target.classList.add("show");

            /*==================================
                ABOUT IMAGE
                DESKTOP ONLY
            ==================================*/

            if (
                entry.target.classList.contains("about-left") &&
                aboutImage &&
                window.innerWidth >= 640
            ) {

                setTimeout(() => {

                    aboutImage.classList.add("show");

                }, 800);

            }

            /*==================================
                STOP OBSERVING
            ==================================*/

            aboutObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.15
    }
);


/*==================================================
        ABOUT LEFT + RIGHT + FEATURES
==================================================*/

document
    .querySelectorAll(
        ".about-left, .about-right, .about-feature"
    )
    .forEach((element) => {

        aboutObserver.observe(element);

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
        SECTION NUMBER SMOOTH PARALLAX
==================================================*/

function createSmoothParallax(
    sectionSelector,
    numberSelector,
    maxMove = 220,
    smooth = 0.08
) {

    const section = document.querySelector(sectionSelector);
    const number = document.querySelector(numberSelector);

    if (!section || !number) return;

    /*=========================================
                ANIMATION VALUES
    =========================================*/

    let currentY = 0;
    let targetY = 0;


    /*=========================================
                UPDATE TARGET
    =========================================*/

    function updateTarget() {

        const rect = section.getBoundingClientRect();

        const vh = window.innerHeight;

        /*
            حساب نسبة دخول الـ Section
        */

        let progress =
            (vh - rect.top) /
            (vh + rect.height * 0.65);


        /*
            منع القيمة من النزول
            تحت 0 أو فوق 1
        */

        progress = Math.max(
            0,
            Math.min(progress, 1)
        );


        /*
            تحديد مكان الرقم
        */

        targetY = progress * maxMove;

    }


    /*=========================================
                SMOOTH ANIMATION
    =========================================*/

    function animate() {

        /*
            الحركة الناعمة
        */

        currentY +=
            (targetY - currentY) * smooth;


        /*
            تحريك الرقم لأعلى
        */

        number.style.transform =
            `translate3d(0, -${currentY}px, 0)`;


        requestAnimationFrame(animate);

    }


    /*=========================================
                    EVENTS
    =========================================*/

    window.addEventListener(
        "scroll",
        updateTarget,
        { passive: true }
    );


    window.addEventListener(
        "resize",
        updateTarget
    );


    /*=========================================
                INITIALIZE
    =========================================*/

    updateTarget();

    animate();

}


/*==================================================
                    STORE NUMBER
==================================================*/

createSmoothParallax(
    ".store-section",
    ".store-number",
    220,
    0.08
);


/*==================================================
                    CONTACT NUMBER
==================================================*/

createSmoothParallax(
    ".contact-section",
    ".contact-bg-number",
    260,
    0.08
);

/*==================================================*
        ABOUT NUMBER RESPONSIVE SCROLL
==================================================*/

(() => {

    const number = document.querySelector(".about-number");

    if (!number) return;


    /*==================================================
                    VARIABLES
    ==================================================*/

    let currentY = 0;
    let targetY = 0;

    const smooth = 0.30;

    let scrollStart = 0;
    let scrollEnd = 0;
    let downMove = 0;
    let upMove = 0;

    let animationEnabled = false;


    /*==================================================
                    SET SETTINGS
    ==================================================*/

    function setSettings() {

        const width = window.innerWidth;


        /*==============================================
                    MOBILE
                390px - 416px
        ==============================================*/

        if (width >= 390 && width < 417) {

            animationEnabled = true;

            scrollStart = 1360;
            scrollEnd   = 1780;

            downMove = 60;
            upMove   = 40;

            return;
        }

        /*==============================================
                    Medium size
                418px - 639px
        ==============================================*/

        if (width >= 418 && width < 639) {

            animationEnabled = true;

            scrollStart = 1360;
            scrollEnd   = 1760;

            downMove = 80;
            upMove   = 40;

            return;
        }


        /*==============================================
                    TABLET
                640px - 1024px
        ==============================================*/

        else if (width >= 640 && width < 1025) {

            animationEnabled = true;

            scrollStart = 1400;
            scrollEnd   = 1767;

            downMove = 60;
            upMove   = 60;

            return;
        }


        /*==============================================
                    DESKTOP
                    1025px+
        ==============================================*/

        else if (width >= 1025) {

            animationEnabled = true;

            scrollStart = 1627;
            scrollEnd   = 1947;

            downMove = 0;
            upMove   = 120;

            return;
        }


        /*==============================================
                    OTHER SIZES
        ==============================================*/

        animationEnabled = false;

        scrollStart = 0;
        scrollEnd   = 0;

        downMove = 0;
        upMove   = 0;

    }


    /*==================================================
                    UPDATE
    ==================================================*/

    function update() {

        if (!animationEnabled) {

            targetY = 0;

            return;

        }


        let progress =
            (window.scrollY - scrollStart) /
            (scrollEnd - scrollStart);


        progress = Math.max(
            0,
            Math.min(progress, 1)
        );


        targetY =
            downMove -
            (
                progress *
                (downMove + upMove)
            );

    }


    /*==================================================
                    SMOOTH ANIMATION
    ==================================================*/

    function animate() {

        currentY +=
            (targetY - currentY) *
            smooth;


        number.style.transform =
            `translate3d(0, ${currentY}px, 0)`;


        requestAnimationFrame(animate);

    }


    /*==================================================
                    RESIZE
    ==================================================*/

    window.addEventListener("resize", () => {

        setSettings();

        update();

    });


    /*==================================================
                    SCROLL
    ==================================================*/

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );


    /*==================================================
                    INITIALIZE
    ==================================================*/

    setSettings();

    update();

    animate();

})();


/*===============================================================*/


/*==================================================*
        SERVICE NUMBER RESPONSIVE SCROLL
==================================================*/

(() => {

    const number = document.querySelector(".services-number");

    if (!number) return;


    /*==================================================
                    VARIABLES
    ==================================================*/

    let currentY = 0;
    let targetY = 0;

    const smooth = 0.30;

    let scrollStart = 0;
    let scrollEnd = 0;
    let downMove = 0;
    let upMove = 0;

    let animationEnabled = false;


    /*==================================================
                    SET SETTINGS
    ==================================================*/

    function setSettings() {

        const width = window.innerWidth;


        /*==============================================
                    MOBILE
                390px - 416px
        ==============================================*/

        if (width >= 390 && width < 417) {

            animationEnabled = true;

            scrollStart = 2500;
            scrollEnd   = 2912;

            downMove = 28;
            upMove   = 88;

            return;
        }

        /*==============================================
                    Medium size
                418px - 639px
        ==============================================*/

        if (width >= 418 && width < 639) {

            animationEnabled = true;

            scrollStart = 2628;
            scrollEnd   = 2988;

            downMove = 40;
            upMove   = 51;

            return;
        }


        /*==============================================
                    TABLET
                640px - 1024px
        ==============================================*/

        else if (width >= 640 && width < 1025) {

            animationEnabled = true;

            scrollStart = 2480;
            scrollEnd   = 2840;

            downMove = 30;
            upMove   = 80;

            return;
        }


        /*==============================================
                    DESKTOP
                    1025px+
        ==============================================*/

        else if (width >= 1025) {

            animationEnabled = true;

            scrollStart = 2667;
            scrollEnd   = 3040;

            downMove = 60;
            upMove   = 50;

            return;
        }


        /*==============================================
                    OTHER SIZES
        ==============================================*/

        animationEnabled = false;

        scrollStart = 0;
        scrollEnd   = 0;

        downMove = 0;
        upMove   = 0;

    }


    /*==================================================
                    UPDATE
    ==================================================*/

    function update() {

        if (!animationEnabled) {

            targetY = 0;

            return;

        }


        let progress =
            (window.scrollY - scrollStart) /
            (scrollEnd - scrollStart);


        progress = Math.max(
            0,
            Math.min(progress, 1)
        );


        targetY =
            downMove -
            (
                progress *
                (downMove + upMove)
            );

    }


    /*==================================================
                    SMOOTH ANIMATION
    ==================================================*/

    function animate() {

        currentY +=
            (targetY - currentY) *
            smooth;


        number.style.transform =
            `translate3d(0, ${currentY}px, 0)`;


        requestAnimationFrame(animate);

    }


    /*==================================================
                    RESIZE
    ==================================================*/

    window.addEventListener("resize", () => {

        setSettings();

        update();

    });


    /*==================================================
                    SCROLL
    ==================================================*/

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );


    /*==================================================
                    INITIALIZE
    ==================================================*/

    setSettings();

    update();

    animate();

})();

/*==================================================*
        Process NUMBER RESPONSIVE SCROLL
==================================================*/

(() => {

    const number = document.querySelector(".process-bg-number");

    if (!number) return;


    /*==================================================
                    VARIABLES
    ==================================================*/

    let currentY = 0;
    let targetY = 0;

    const smooth = 0.30;

    let scrollStart = 0;
    let scrollEnd = 0;
    let downMove = 0;
    let upMove = 0;

    let animationEnabled = false;


    /*==================================================
                    SET SETTINGS
    ==================================================*/

    function setSettings() {

        const width = window.innerWidth;


        /*==============================================
                    MOBILE
                390px - 416px
        ==============================================*/

        if (width >= 390 && width < 417) {

            animationEnabled = true;

            scrollStart = 3262;
            scrollEnd   = 3622;

            downMove = 46;
            upMove   = 56;

            return;
        }

        /*==============================================
                    Medium size
                418px - 639px
        ==============================================*/

        if (width >= 418 && width < 639) {

            animationEnabled = true;

            scrollStart = 2662;
            scrollEnd   = 2988;

            downMove = 100;
            upMove   = 500;

            return;
        }


        /*==============================================
                    TABLET
                640px - 1024px
        ==============================================*/

        else if (width >= 640 && width < 1025) {

            animationEnabled = true;

            scrollStart = 2480;
            scrollEnd   = 2840;

            downMove = 30;
            upMove   = 80;

            return;
        }


        /*==============================================
                    DESKTOP
                    1025px+
        ==============================================*/

        else if (width >= 1025) {

            animationEnabled = true;

            scrollStart = 4190;
            scrollEnd   = 4590;

            downMove = -10;
            upMove   = 70;

            return;
        }


        /*==============================================
                    OTHER SIZES
        ==============================================*/

        animationEnabled = false;

        scrollStart = 0;
        scrollEnd   = 0;

        downMove = 0;
        upMove   = 0;

    }


    /*==================================================
                    UPDATE
    ==================================================*/

    function update() {

        if (!animationEnabled) {

            targetY = 0;

            return;

        }


        let progress =
            (window.scrollY - scrollStart) /
            (scrollEnd - scrollStart);


        progress = Math.max(
            0,
            Math.min(progress, 1)
        );


        targetY =
            downMove -
            (
                progress *
                (downMove + upMove)
            );

    }


    /*==================================================
                    SMOOTH ANIMATION
    ==================================================*/

    function animate() {

        currentY +=
            (targetY - currentY) *
            smooth;


        number.style.transform =
            `translate3d(0, ${currentY}px, 0)`;


        requestAnimationFrame(animate);

    }


    /*==================================================
                    RESIZE
    ==================================================*/

    window.addEventListener("resize", () => {

        setSettings();

        update();

    });


    /*==================================================
                    SCROLL
    ==================================================*/

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );


    /*==================================================
                    INITIALIZE
    ==================================================*/

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