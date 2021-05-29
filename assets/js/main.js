$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false
    });

    $('.shop-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });

});


window.addEventListener('online', function(e) {
    document.body.style.filter = 'grayscale(0)';
}, false);

window.addEventListener('offline', function(e) {
    console.log("You are offline");
    document.body.style.filter = 'grayscale(1)';
}, false);

let brand = document.querySelector('.brand-name')
brand.addEventListener('click', function() {
    window.location.href = 'index.html';
})


function shareProduct() {
    if (navigator.share) {
        navigator.share({
                title: "Kmart | Agartala's Best Online Store",
                text: "Check out Agartala's best online grocery",
                url: location.href
            })
            .then(() => console.log("Share Successfull"))
            .catch(err => console.error(err));
    }
}

let tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active');
        target.classList.add('active')
    })
})


let counterUpButtons = document.querySelectorAll('.add'),
    counterDownButtons = document.querySelectorAll('.sub');

if (counterUpButtons) {

    counterUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            let inputBox = button.previousElementSibling;
            inputBox.value = parseInt(++inputBox.value);
        })
    })

    counterDownButtons.forEach(button => {
        button.addEventListener('click', () => {
            let inputBox = button.nextElementSibling;
            (inputBox.value > 1) ? inputBox.value = parseInt(--inputBox.value): inputBox.value = 1;
        })
    })
}

let toggleButton = document.querySelector('.output button'),
    timingsTable = document.querySelector('.timings'),
    hourElems = Array.from(timingsTable.querySelectorAll('tr')),
    today = new Date().getDay();

toggleButton.addEventListener('click', function() {
    timingsTable.classList.toggle('d-none');
    hourElems[today - 1].classList.add('fw-bold')
    console.log(today)
})