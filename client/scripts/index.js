const menu = document.querySelector('.menu');
        const MenuItem = document.querySelector('.menuitems');
        const closeIcon = document.querySelector('.close-icon');

        menu.addEventListener('click', (e) => {
            MenuItem.style.display = 'block';
            closeIcon.style.display = 'block';
            menu.style.display = 'none';
        });

        closeIcon.addEventListener('click', (e) => {
            MenuItem.style.display = 'none';
            closeIcon.style.display = 'none';
            menu.style.display = 'block';
        });