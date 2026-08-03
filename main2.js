/*----------- Fire Fighting Slider ------------*/
let currentSlide = 0;
let allCards = document.querySelectorAll('.card2, .card3, .card6'); // حساب جميع أنواع الكروت
let cardsPerPage = 1; // يتم تحديثه بناءً على الشاشة

function checkScreenSize() {
  if (window.innerWidth <= 640) {
    cardsPerPage = 1; // في الجوال كارت لكل صفحة
    totalSlides = 27; // عدد الصفحات في الجوال
  } else {
    cardsPerPage = 2; // في الكمبيوتر كارت لكل صفحة
    totalSlides = 22; // عدد الصفحات في الكمبيوتر
  }
  updateSlider();
}

function updateSlider() {
  const wrapper = document.querySelector('.card-wrapper-fighting');
  const slideWidth = allCards[0].offsetWidth; // عرض الكارت

  wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // تحريك الكروت

  // تحديث رقم الصفحة
  document.querySelector('.page-number-fighting').textContent = currentSlide + 1;
  document.querySelector('.total-pages').textContent = totalSlides;

  // تعطيل أو تفعيل الأزرار حسب الحالة
  const nextButton = document.querySelector('.arrow.right');
  const prevButton = document.querySelector('.arrow.left');

  nextButton.disabled = currentSlide >= totalSlides - 1;
  prevButton.disabled = currentSlide <= 0;

  nextButton.classList.toggle('disabled', nextButton.disabled);
  prevButton.classList.toggle('disabled', prevButton.disabled);
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

// تشغيل عند تحميل الصفحة أو عند تغيير حجم الشاشة
document.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);






/*----------- Fire Alarm Slider ------------*/
let currentSlide1 = 0;
let allCards1 = document.querySelectorAll('.card3, .card2, .card4'); // جميع أنواع الكروت الخاصة بالـ Fire Alarm
let cardsPerPage1 = 1; // عدد الكروت في كل صفحة (يتم تحديثه بناءً على حجم الشاشة)


function checkScreenSize2() {
  if (window.innerWidth <= 640) {
    cardsPerPage1 = 1; // في الجوال كارت لكل صفحة
    totalSlides1 = 27; // عدد الصفحات في الجوال
  } else {
    cardsPerPage1 = 1; // في الكمبيوتر كارت لكل صفحة
    totalSlides1 = 22; // عدد الصفحات في الكمبيوتر
  }
  updateSlider2();
}

function updateSlider2() {
  const wrapper = document.querySelector('.card-wrapper-alarm');
  const slideWidth = allCards1[0].offsetWidth; // عرض الكارت الواحد

  // تحريك الكروت باستخدام translateX
  wrapper.style.transform = `translateX(-${currentSlide1 * slideWidth}px)`;

  // تحديث رقم الصفحة
  document.querySelector('.page-number-alarm').textContent = currentSlide1 + 1;
  document.querySelector('.total-pages-alarm').textContent = totalSlides1;

  // تعطيل أو تفعيل الأزرار حسب الحالة
  const nextButton = document.querySelector('.arrow-alarm.right');
  const prevButton = document.querySelector('.arrow-alarm.left');

  nextButton.disabled = currentSlide1 >= totalSlides1 - 1;
  prevButton.disabled = currentSlide1 <= 0;

  nextButton.classList.toggle('disabled', nextButton.disabled);
  prevButton.classList.toggle('disabled', prevButton.disabled);
}

function nextSlide2() {
  if (currentSlide1 < totalSlides1 - 1) {
    currentSlide1++;
    updateSlider2();
  }
}

function prevSlide2() {
  if (currentSlide1 > 0) {
    currentSlide1--;
    updateSlider2();
  }
}

// تشغيل عند تحميل الصفحة أو عند تغيير حجم الشاشة
document.addEventListener('DOMContentLoaded', checkScreenSize2);
window.addEventListener('resize', checkScreenSize2);




/*----------- Life Safety Slider ------------*/
let currentSlide2 = 0;
let allCards2 = document.querySelectorAll('.card2, .card6'); // جميع أنواع الكروت الخاصة بـ Life Safety
let cardsPerPage2 = 1; // عدد الكروت في كل صفحة (يتم تحديثه بناءً على حجم الشاشة)


function checkScreenSize3() {
  if (window.innerWidth <= 640) {
    cardsPerPage2 = 1; // في الجوال كارت لكل صفحة
    totalSlides2 = 24; // عدد الصفحات في الجوال
  } else {
    cardsPerPage2 = 1; // في الكمبيوتر كارت لكل صفحة
    totalSlides2 = 19; // عدد الصفحات في الكمبيوتر
  }
  updateSlider3();
}

function updateSlider3() {
  const wrapper = document.querySelector('.card-wrapper-Life');
  const slideWidth = allCards2[1].offsetWidth; // عرض الكارت الواحد

  // تحريك الكروت باستخدام translateX
  wrapper.style.transform = `translateX(-${currentSlide2 * slideWidth}px)`;

  // تحديث رقم الصفحة
  document.querySelector('.page-number-Life').textContent = currentSlide2 + 1;
  document.querySelector('.total-pages-Life').textContent = totalSlides2;

  // تعطيل أو تفعيل الأزرار حسب الحالة
  const nextButton = document.querySelector('.arrow-Life.right');
  const prevButton = document.querySelector('.arrow-Life.left');

  nextButton.disabled = currentSlide2 >= totalSlides2 - 1;
  prevButton.disabled = currentSlide2 <= 0;

  nextButton.classList.toggle('disabled', nextButton.disabled);
  prevButton.classList.toggle('disabled', prevButton.disabled);
}

function nextSlide3() {
  if (currentSlide2 < totalSlides2 - 1) {
    currentSlide2++;
    updateSlider3();
  }
}

function prevSlide3() {
  if (currentSlide2 > 0) {
    currentSlide2--;
    updateSlider3();
  }
}

// تشغيل عند تحميل الصفحة أو عند تغيير حجم الشاشة
document.addEventListener('DOMContentLoaded', checkScreenSize3);
window.addEventListener('resize', checkScreenSize3);
























/*-----------------------------------------*/

window.addEventListener('scroll', function () {
  const logo = document.querySelector('.logo');
  if (window.scrollY > 50) {
    logo.style.width = '120px';
  } else {
    logo.style.width = '100px';
  }
});

      //========================Filters Function===========================//
      document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', function () {
          // احصل على العنصر الرئيسي "filter"
          const filter = this.closest('.filter');
          
          // إغلاق أي قوائم أخرى مفتوحة
          document.querySelectorAll('.filter').forEach(f => {
            if (f !== filter) {
              f.classList.remove('active');
            }
          });
      
          // تبديل حالة العرض
          filter.classList.toggle('active');
        });
      });

// تحديد حالة المنتجات
let product1InStock = false; // المنتج الأول غير متوفر
let product2InStock = false;  // المنتج الثاني متوفر
let product3InStock = false;  // المنتج الثالث متوفر
let product4InStock = false; // المنتج الرابع غير متوفر
let product5InStock = false;  // المنتج الخامس متوفر

// تحديث المنتجات بناءً على الحالة
function updateProductStatus(badgeId, buttonId, inStock) {
  const badge = document.getElementById(badgeId);
  const button = document.getElementById(buttonId);
  if (!inStock) {
    badge.style.display = "block";
    button.textContent = "Sold Out";
    button.classList.add("sold-out");
    button.disabled = true;
  } else {
    badge.style.display = "none";
  }
}

updateProductStatus("badge1", "add-to-cart-btn1", product1InStock);
updateProductStatus("badge2", "add-to-cart-btn2", product2InStock);
updateProductStatus("badge3", "add-to-cart-btn3", product3InStock);
updateProductStatus("badge4", "add-to-cart-btn4", product4InStock);
updateProductStatus("badge5", "add-to-cart-btn5", product5InStock);



document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.card-wrapper');
  const cards = document.querySelectorAll('.card-wrapper > div'); // جلب جميع الكروت
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // عرض الكارت (مع حساب الهامش إذا كان موجودًا)
  const cardWidth = cards[0].offsetWidth; // عرض الكارت
  const margin = parseInt(window.getComputedStyle(cards[0]).marginRight); // هامش الكارت
  const slideWidth = cardWidth + margin; // العرض الكلي للكارت (بما في ذلك الهامش)

  const totalSlides = cards.length; // إجمالي عدد الكروت
  const cardsPerPage = Math.floor(wrapper.offsetWidth / slideWidth); // عدد الكروت لكل صفحة
  const maxSlides = totalSlides - cardsPerPage; // أقصى عدد من الشرائح

  let currentSlide = 0; // الشريحة الحالية

  // تحديث الإزاحة بناءً على الشريحة الحالية
  function updateTransform() {
    wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // زر السابق
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateTransform();
    }
  });

  // زر التالي
  nextBtn.addEventListener('click', () => {
    if (currentSlide < maxSlides) {
      currentSlide++;
      updateTransform();
    }
  });

  // لتصحيح الأخطاء أو التحقق
  console.log('Card Width:', cardWidth);
  console.log('Margin:', margin);
  console.log('Slide Width:', slideWidth);
  console.log('Total Slides:', totalSlides);
  console.log('Cards Per Page:', cardsPerPage);
  console.log('Max Slides:', maxSlides);
});


  // استهداف جميع أزرار المقاسات
  const sizeButtons = document.querySelectorAll('.size-btn');

  // إضافة حدث النقر لجميع الأزرار
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // إزالة التنسيق (active style) من جميع الأزرار
        sizeButtons.forEach(btn => {
            btn.style.backgroundColor = ''; // إزالة الخلفية النشطة
            btn.style.color = ''; // إزالة لون النص النشط
        });
  
        // إضافة التنسيق النشط للزر الذي تم النقر عليه
        button.style.backgroundColor = 'black'; // تغيير الخلفية إلى الأسود
        button.style.color = 'white'; // تغيير النص إلى الأبيض
  
        // جلب القيم من الزر النشط
        const oldPrice = button.getAttribute('data-old-price'); // السعر القديم
        const newPrice = button.getAttribute('data-new-price'); // السعر الجديد
        const installment = button.getAttribute('data-installment'); // قيمة القسط
  
        // تحديث عناصر الأسعار في الصفحة
        const originalPriceElement = document.getElementById('original-price'); // عنصر السعر القديم
        const newPriceElement = document.getElementById('new-price'); // عنصر السعر الجديد
        const tabbyPriceElement = document.getElementById('tabby-price'); // عنصر القسط
  
        // تحديث النصوص داخل العناصر
        if (originalPriceElement) {
            originalPriceElement.textContent = `${oldPrice} SAR`; // عرض السعر القديم
        }
  
        if (newPriceElement) {
            newPriceElement.textContent = `${newPrice} SAR`; // عرض السعر الجديد
        }
  
        if (tabbyPriceElement) {
            tabbyPriceElement.innerHTML = installment; // عرض القسط
        }
    });
  });


