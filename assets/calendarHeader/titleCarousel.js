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

    let titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');
    let titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));

    titleSetter(titleArr[titleIndex]);

    leftArrow.addEventListener('click', () => {
        if (titleIndex > 0) {
            titleIndex--;
            titleSetter(titleArr[titleIndex]);
        }
    });
    rightArrow.addEventListener('click', () => {
        if (titleIndex < titleArr.length - 1) {
            titleIndex++;
            titleSetter(titleArr[titleIndex]);
        }
    });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
