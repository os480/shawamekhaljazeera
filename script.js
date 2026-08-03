   
   /*=========================Quantity Function===============*/
   
   document.addEventListener('DOMContentLoaded', () => {

 
    const quantityInput = document.getElementById('quantity');
    document.getElementById('decrease').addEventListener('click', () => {
      if (quantityInput.value > 1) {
        quantityInput.value--;
      }
    });
    document.getElementById('increase').addEventListener('click', () => {
      quantityInput.value++;
    });
  });

  /*=====================================================================*/
 
  // استهداف جميع أزرار المقاسات
const sizeButtons = document.querySelectorAll('.size-btn');

// إضافة حدث النقر لجميع الأزرار
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // إزالة الكلاس 'active' من جميع الأزرار
    sizeButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // إضافة الكلاس 'active' للزر الذي تم النقر عليه
    button.classList.add('active');



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











  
/*====================Logo Function==================*/

  window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) { 
        logo.style.width = '120px'; 
    } else {
        logo.style.width = '100px'; 
    }
   });
/*=====================================================*/


/*====================Filter Function=================*/
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

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function (event) {
if (!event.target.closest('.filter')) {
document.querySelectorAll('.filter.active').forEach(f => f.classList.remove('active'));
}
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




/*==================================*/



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






//============================================================
