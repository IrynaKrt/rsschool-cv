window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const main = document.querySelector("main");
    //Burger
    function bindBurger(btnSelector, imgSelector, menuSelector, linkSelector, closeSelector) {
        const btn = document.querySelector(btnSelector),
              img = document.querySelector(imgSelector),
              menu = document.querySelector(menuSelector),
              links = document.querySelectorAll(linkSelector),
              close = document.querySelector(closeSelector);


        btn.addEventListener('click', () => {
            menu.style.width = "100%";
            main.style.maxHeight = "100vh";
            main.style.overflow = "hidden";
            close.style.display = "block";
        });

        document.addEventListener('click', (e) => {
            if(e.target !== menu && e.target !== btn && e.target !== img) {
                menu.style.width = "0";
                main.style.maxHeight = "";
                main.style.overflow = "";
                setTimeout(() => {
                    close.style.display = "none";
                }, 450)

                if(document.scrollHeight !== document.offsetHeight) {
                    document.body.style.overflow = "";
                    document.body.style.marginRight = `0px`;
                }
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.style.width = "0";
                main.style.maxHeight = "";
                main.style.overflow = "";
                setTimeout(() => {
                    close.style.display = "none";
                }, 450)


            if(document.scrollHeight !== document.offsetHeight) {
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
            })
        });

        close.addEventListener('click', () => {
            menu.style.width = "0";
            main.style.maxHeight = "";
            main.style.overflow = "";
            setTimeout(() => {
                close.style.display = "none";
            }, 450)

            if(document.scrollHeight !== document.offsetHeight) {
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }
    bindBurger('.btn-burger', '.img-burger', '.burger-menu', '.burger-item', '.burger-menu .close');


    const label = document.getElementById('slider');

     // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.body.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.getElementById('slider').checked = false;
        } else {
            setTheme('theme-light');
            document.getElementById('slider').checked = true;
        }
    })();

    label.addEventListener('click', toggleTheme);

    //Modal
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        modal.style.display = 'none';

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                body.style.overflow = "";
                body.style.maxWidth = "";
            }
        });

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if(destroy) {
                    item.remove();
                }
    
                modal.style.display = "block";
                body.style.overflow = "hidden";
                body.style.maxWidth = "100vw";
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.add('hidden');
                item.style.display = 'none';
            });
            body.style.overflow = "";
            body.style.maxWidth = "";
        });
    }

    bindModal('.btn-example', '.example-modal', '.example-modal .example-close');

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

});