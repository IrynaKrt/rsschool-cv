window.addEventListener('DOMContentLoaded', () => {

    //Burger
    function bindBurger(btnSelector, imgSelector, menuSelector, linkSelector, closeSelector) {
        const btn = document.querySelector(btnSelector),
              img = document.querySelector(imgSelector),
              menu = document.querySelector(menuSelector),
              links = document.querySelectorAll(linkSelector),
              close = document.querySelector(closeSelector);

        btn.addEventListener('click', () => {
            menu.style.display = "block";

            if(document.scrollHeight !== document.offsetHeight) {
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
        });

        document.addEventListener('click', (e) => {
            if(e.target !== menu && e.target !== btn && e.target !== img) {
                menu.style.display = "none";

                if(document.scrollHeight !== document.offsetHeight) {
                    document.body.style.overflow = "";
                    document.body.style.marginRight = `0px`;
                }
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.style.display = "none";


            if(document.scrollHeight !== document.offsetHeight) {
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
            })
        });

        close.addEventListener('click', () => {
            menu.style.display = "none";

            if(document.scrollHeight !== document.offsetHeight) {
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }
    bindBurger('.btn-burger', '.btn-burger>img', '.burger-menu', '.burger-item', '.burger-menu .close')

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
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
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
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.add('hidden');
                item.style.display = 'none';
            });
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
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