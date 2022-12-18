window.addEventListener('DOMContentLoaded', () => {

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
                item.classList.remove('hidden');
            });
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });
    }

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

    bindModal('.btn-example', '.example-modal', '.example-modal .example-close');

    //Scroll
    const linkProf = document.querySelector('.menu-item .bio'),
          linkContact = document.querySelector('.menu-item .contact');

    linkProf.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('#basis').scrollIntoView({behavior: 'smooth'});
    });

    linkContact.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('#contact').scrollIntoView({behavior: 'smooth'});
    });
});