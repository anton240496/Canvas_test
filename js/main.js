
(function () {
    // Находим ВСЕ элементы с классом work_numeric на странице
    const numberElements = document.querySelectorAll('.work_numeric');

    // Проходим по каждому элементу
    numberElements.forEach((element, index) => {
        // index + 1 потому что индекс начинается с 0
        // padStart(2, '0') добавляет ведущий ноль
        element.textContent = (index + 1).toString().padStart(2, '0');
    });
})();



$('.work_spisok').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
    // responsive: [
    //     {
    //         breakpoint: 891,
    //         settings: {
    //             arrows: false,
    //             dots: true
    //         }
    //     }
    // ]
});

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.questions_quet');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});


var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});

const menubtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu_spisok');

const menubtnact = document.querySelector('.menu_btn span');



menubtn.addEventListener('click', () => {
    menu.classList.toggle('menu_spisok_active');
    menubtnact.classList.toggle('menubtn_active');
})



