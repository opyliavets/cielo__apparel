window.onload = function total() {
    hideAllTabs();
    quickView();
    openingMenu();
// FUNCTION HIDE ALL TABS - EXECUTIVE FOR HIDING OF SHOWING TABS LOGIC
    function hideAllTabs() {
        let tab; // заголовок вкладки
        let tabContent; // блок содержащий контент вкладки
        let footerMenutab;
        tab = document.querySelectorAll('.menu__item');
        tabContent = document.querySelectorAll('.tab');
        footerMenuTab = document.querySelectorAll('.footer__list');
        let body = document.querySelector('body');
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
        tabContent[0].classList.add('show'); 
       
        document.getElementById('idMenu').onclick = (event) => {
            let target = event.target;
            if (target.classList.contains('menu__item')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        showTabsContent(i);
                        break;
                    }
                }
            }
        }
    
        document.getElementById('idFooterMenu').onclick = (event) => {
            let target = event.target;
            if (target.classList.contains('footer__list')) {
                for (let i = 0; i < footerMenuTab.length; i++) {
                    if (target == footerMenuTab[i]) {
                        showTabsContent(i);
                        break;
                    }
                }
            }
        }
    
        function hideTabsContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add("hide");
            }
        }
    
        function showTabsContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                hideTabsContent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    }
// FUNCTION QUICK VIEW - EXECUTIVE FOR SHOVING ANIMATION "QUICK VIEW" OF PART WITH NEW ARRIVALS
    function quickView () {
        let block = document.querySelector('.home__blocks3');
        let items = document.querySelectorAll('.home__goods > div');
        let pointingBlock = [items[0], items[3], items[6], items[9]];
        let item = [items[1], items[4], items[7], items[10]];
        for (let y = 0; y < items.length; y++) {
            items[y].classList.add('pointing__blocks');
        };
        for (let x = 0; x < item.length; x++) {
            item[x].textContent = 'Quick View';
        };    
            
        block.onmouseover = (event) => {
            let target = event.target;
            if (target.classList.contains('pointing__blocks')) {
                for (let i = 0; i < pointingBlock.length; i++) {
                    if (target === pointingBlock[i]) {
                        item[i].classList.add('coverage');
                        break;
                    }
                }
            }
        };
        
        block.onmouseout = (event) => {
            let target = event.target;
            if (target.classList.contains('pointing__blocks')) {
                for (let i = 0; i < pointingBlock.length; i++) {
                    if (target === pointingBlock[i]) {
                        item[i].classList.remove('coverage');
                        break;
                    }
                }
            }
        };
    }
// HERE WILL BE FUNCTION FOR SHOWING AND HIDING MENU ITEMS ON PAGE SHOP
    function openingMenu() {
        let titleItem = document.querySelector('.catalogue__collection-block');
        let body = document.querySelector('body');
        body.onclick = (event) => {
            let target = event.target;
            console.log(target);
        }        
    }
}    


