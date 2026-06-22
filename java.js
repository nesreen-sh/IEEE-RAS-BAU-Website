/* ==========================================================================
   1. تأثيرات الحركة عند فتح الصفحة (Hero Section Animation)
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    // جلب عناصر الواجهة الرئيسية
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.btn-link'); // تم تحديث الكلاس ليتوافق مع التعديل الجديد

    // نتحقق أولاً إذا كانت العناصر موجودة بالصفحة الحالية (عشان ما يعطي خطأ بالصفحات الثانية)
    if (heroTitle && heroText && heroBtn) {
        // إخفاء العناصر مبدئياً وتجهيزها للحركة الإنسيابية
        [heroTitle, heroText, heroBtn].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 1s cubic-bezier(0.25, 1, 0.5, 1)';
        });

        // إظهار العنوان أولاً بعد 300 مللي ثانية
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);

        // إظهار النص الفرعي بعد 600 مللي ثانية
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 600);

        // إظهار زر التفاعل بعد 900 مللي ثانية
        setTimeout(() => {
            heroBtn.style.opacity = '1';
            heroBtn.style.transform = 'translateY(0)';
        }, 900);
    }
});


/* ==========================================================================
   2. تأثير ظهور العناصر عند التمرير لأسفل (Scroll Reveal Animation)
   ========================================================================== */
function revealElements() {
    // جلب جميع العناصر التي تحمل كلاس reveal في أي صفحة
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight; // ارتفاع شاشة المتصفح
        const elementTop = element.getBoundingClientRect().top; // مسافة العنصر من أعلى الشاشة
        const elementVisible = 100; // المسافة بالبكسل التي يبدأ عندها التأثير بالظهور

        // إذا اقترب العنصر ودخل في نطاق الرؤية، قم بتفعيل الحركة
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// تشغيل الدالة فوراً عند التمرير (Scroll) أو تحميل الصفحة
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);