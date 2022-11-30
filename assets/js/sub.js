(()=>{
    const nav = document.querySelector('nav');
        const menu = document.querySelector('.menu');
        const menuA = document.querySelectorAll('.menu a');
        const menuBg = document.querySelector('.menuBg');
        const menuButton = document.querySelector('button');
        const menuText = document.querySelectorAll('.menuText img');
        const web = document.querySelectorAll('.web > div');
        const webContent = document.querySelectorAll('.webContent');
        const down = document.querySelectorAll('.down');
        let menuToggle = 0;
        history.scrollRestoration = "manual"
        

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };

        menuButton.addEventListener('click', function () {
            if (menuToggle == 0) {
                menuButton.classList.add('on');
                menu.classList.add('on');
                nav.classList.add('menuOn');
                nav.classList.add('active');
                menuToggle++;
            } else {
                menuButton.classList.remove('on');
                menu.classList.remove('on');
                nav.classList.remove('menuOn');
                nav.classList.remove('active');
                menuToggle = 0;
            }

        });

        for (let i = 0; i < menuA.length; i++) {
            (function (index) {
                menuA[index].addEventListener('mouseover', function () {
                    for (let i = 0; i < menuA.length; i++) {
                        menuA[i].classList.remove('on')
                        menuText[i].classList.remove('on')
                    }
                    menuA[index].classList.add('on')
                    menuText[index].classList.add('on')
                    menuBg.dataset.bg = index;
                })
            })(i)

        };

        for (let i = 0; i < web.length; i++) {
            (function (index) {
                web[index].addEventListener('click', function () {
                    for (let i = 0; i < web.length; i++) {
                        web[i].classList.add('off')
                    }
                    web[index].classList.add('on');
                    webContent[index].classList.add('on');
                });

                down[index].addEventListener('click', function () {
                    webContent[i].classList.remove('on')
                    web[index].classList.remove('on')
                    for (let i = 0; i < web.length; i++) {
                        web[i].classList.remove('off')
                    }
                })
            })(i);
        }

})();