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
                spaceBetween: 32,
                grabCursor: true,
                pagination: {
                    el: ".s-links .slide-links .swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    // 320: {
                    //     slidesPerView: 1.5,
                    //     spaceBetween: 16,
                    // },
                    // 600: {
                    //     slidesPerView: 2.5,
                    //     spaceBetween: 15,
                    // },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    }
                }
            });
        },
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
        }
    });
})();