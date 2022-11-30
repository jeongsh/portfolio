(() => {
    const section = document.querySelectorAll('section');
    const paint = document.querySelector('.paint');
    const nav = document.querySelector('nav');
    const navBtn = document.querySelectorAll('nav button');
    let sNum = 0;
    let canScroll = true;
    let scrollController = null;

    [].forEach.call(navBtn, function (col) {
        col.addEventListener('click', function () {
            for (let i = 0; i < navBtn.length; i++){
                navBtn[i].classList.remove('on')
            }
            col.classList.add('on');
        })
    });

    // function setCookie(name, value, expiredays) {
    //     var todayDate = new Date();
    //     todayDate.setDate(todayDate.getDate() + expiredays);
    //     todayDate.setHours(0, 0, 0, 0);
    //     document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    // }



    // function getCookie(name) {
    //     var nameOfCookie = name + "=";
    //     var x = 0;
    //     while (x <= document.cookie.length) {
    //         var y = (x + nameOfCookie.length);
    //         if (document.cookie.substring(x, y) == nameOfCookie) {
    //             if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
    //                 endOfCookie = document.cookie.length;
    //             return unescape(document.cookie.substring(y, endOfCookie));
    //         }
    //         x = document.cookie.indexOf(" ", x) + 1;
    //         if (x == 0)
    //             break;
    //     }
    //     return "";
    // }

    // history.scrollRestoration = "manual"
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // };
    // if (getCookie("closeCookie") == "to20180914") {
    //     paint.classList.add('on');
    //     nav.classList.add('on');
    //     section2.classList.add('on')
    //     section2.style.transition = "none";
    //     nav.classList.add('active')
    // } else {

    //     setTimeout(function () {
    //         paint.classList.add('on')
    //     }, 2500)
    //     setTimeout(function () {
    //         section2.classList.add('on')
    //     }, 3500)
    //     setTimeout(function () {
    //         nav.classList.add('on')
    //         nav.classList.add('active')
    //     }, 5000)
    //     setCookie("closeCookie", "to20180914", 1);

    // }
    setTimeout(function () {
        paint.classList.add('on')
    }, 2500)



    window.addEventListener("pageshow", function (event) {
        var historyTraversal = event.persisted ||
            (typeof window.performance != "undefined" &&
                window.performance.navigation.type === 2);
        if (historyTraversal) {
            // Handle page restore.
            window.location.reload(true);

        }
    });

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
})();