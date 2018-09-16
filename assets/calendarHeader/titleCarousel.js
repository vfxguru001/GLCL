let calendarHeader = () => {
    let titleCarousel = document.getElementById('title-carousel');

    titleCarousel.classList.add("anotherclass");

    let title = document.getElementById('title');
    let titleSetter = (newtitle) => {
        title.innerHTML = newtitle;
    };
    titleSetter('September');
    let titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(titleArr[0]);
    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');
    let titleIndex = 8;
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

document.addEventListener('DOMContentLoaded', calendarHeader, false);
