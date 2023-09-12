(function () {
    window.theme = {
        ...window.theme,

        menuFixed: function() {
            const header = document.getElementById('js-header');
        
            function fixedMenu() {
                if(window.pageYOffset > 80) {
                    header.classList.add('fixed-menu');
                } else {
                    header.classList.remove('fixed-menu');
                }
            }
            
            document.addEventListener('scroll', fixedMenu);
        },

        linksSlides: function() {
            const swiper = new Swiper(".slide-links", {
                slidesPerView: 3,
                spaceBetween: 15,
                grabCursor: true,
                allowSlideClick: true,
                pagination: {
                    el: ".s-links .slide-links .swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    390: {
                        slidesPerView: 1.2,
                    },
                    420: {
                        slidesPerView: 1.3,
                        spaceBetween: 15,
                    },
                    540: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    830: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    1030: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    }
                }
            });
        },

        scrollToTopSmoothly: function() {
            const logo = document.getElementById("logo");

            logo.addEventListener("click", (event) => {
                event.preventDefault()
                
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    };

    // Execução de Funções após o carregamento do documento
    window.addEventListener('DOMContentLoaded', function () {
        const htmlElement = document.querySelector('html');

        if (htmlElement.classList.contains('page-home')) {
            /*=== AOS Animation ===*/
            AOS.init({
                duration: 1000
            });

            theme.menuFixed();
            theme.linksSlides();
            theme.scrollToTopSmoothly();
        }
    });
})();
