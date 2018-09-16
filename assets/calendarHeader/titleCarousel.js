let titleCarouselWrapper = () => {
    let titleCarousel = document.getElementById('title-carousel');

    const elementBuilder = (elementType, elementID, appendTo, classes) => {
        let el = document.createElement(elementType);
        if (classes) {
            el.classList.add(...classes);
        }
        el.id = elementID;
        appendTo.appendChild(el);
    }

    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

    let title = document.getElementById('title');
    let titleSetter = (newtitle) => {
        title.innerHTML = newtitle;
    };
    titleSetter('September');
    let monthArr = JSON.parse(titleCarousel.getAttribute('title-arr'));

    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');
    let titleIndex = 8;
    leftArrow.addEventListener('click', () => {
        if (titleIndex > 0) {
            titleIndex--;
            titleSetter(monthArr[titleIndex]);
        }
    });
    rightArrow.addEventListener('click', () => {
        if (titleIndex < monthArr.length - 1) {
            titleIndex++;
            titleSetter(monthArr[titleIndex]);
        }
    });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
