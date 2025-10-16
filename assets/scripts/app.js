"use strict";

const faqItem = document.getElementsByClassName('faq-body')[0];

(function () {
    faqItem.addEventListener('click', function (event) {
        const faqHeader = event.target.closest('.faq-item-header');

        if (!faqHeader) return;

        faqHeader.nextElementSibling.classList.toggle('faq-open');
        faqHeader.nextElementSibling.classList.contains('faq-open')
            ? faqHeader.querySelector('img').src = 'assets/images/icon-minus.svg'
            : faqHeader.querySelector('img').src = 'assets/images/icon-plus.svg';
    });
})();