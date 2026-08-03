// الحصول على الزر
const scrollToTopBtn = document.getElementById("scrollToTop");

// إظهار الزر عند التمرير لمسافة أكبر من 6262px
window.addEventListener("scroll", () => {
  if (window.scrollY > 2966) {
    scrollToTopBtn.style.display = "flex"; // إظهار الزر
  } else {
    scrollToTopBtn.style.display = "none"; // إخفاء الزر
  }
});

// التمرير اليدوي السلس إلى الأعلى عند الضغط على الزر
scrollToTopBtn.addEventListener("click", () => {
  const scrollStep = 30; // عدد البيكسلات في كل خطوة
  const intervalSpeed = 15; // الزمن بين كل خطوة (بالملي ثانية)

  const interval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(interval); // إيقاف التمرير إذا وصلنا إلى الأعلى
    } else {
      window.scrollBy(0, -scrollStep); // التمرير تدريجيًا إلى الأعلى
    }
  }, intervalSpeed);
});



// JavaScript لإظهار/إخفاء القائمة


document.getElementById("menu-icon").addEventListener("click", function() {
    let menu = document.getElementById("mobile-nav");
    let menuIcon = document.getElementById("menu-icon");
    let closeMenu = document.getElementById("close-menu");
    let overlay = document.getElementById("overlay");

    menu.classList.add("active");
    menuIcon.style.display = "none"; 
    closeMenu.style.display = "block"; 
    overlay.style.display = "block"; // إظهار الشادو
});

document.getElementById("close-menu").addEventListener("click", function() {
    let menu = document.getElementById("mobile-nav");
    let menuIcon = document.getElementById("menu-icon");
    let closeMenu = document.getElementById("close-menu");
    let overlay = document.getElementById("overlay");

    menu.classList.remove("active");
    closeMenu.style.display = "none"; 
    menuIcon.style.display = "block"; 
    overlay.style.display = "none"; // إخفاء الشادو
});









