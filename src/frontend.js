document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.gw-mm');
    const plainMenus = document.querySelectorAll('.gw-pm');

    function setDropdownsPosition(menus) {
        menus.forEach(menu => {
            if (menu.classList.contains('is-mobile')) {
                menu.querySelectorAll('.gw-mm-item__dropdown-wrapper').forEach(dropdown => {
                    dropdown.style.left = '';
                    dropdown.style.width = '';
                    dropdown.style.maxWidth = '';
                });
                return;
            }

            const dropdowns = menu.querySelectorAll('.gw-mm-item__dropdown-wrapper');
            const menuCoords = menu.getBoundingClientRect();
            const maxWidth = menu.dataset.dropdownWidth ? parseInt(menu.dataset.dropdownWidth) : null;
            const windowWidth = window.innerWidth;
            const width = menu.classList.contains('has-full-width-dropdown') ? windowWidth : menu.offsetWidth;
            let left = menu.classList.contains('has-full-width-dropdown') ? -menuCoords.left : 0;

            if (maxWidth && maxWidth < width) {
                left = left + (width - maxWidth) / 2;
            }

            dropdowns.forEach(dropdown => {
                dropdown.style.left = left + 'px';
                dropdown.style.width = width + 'px';
                dropdown.style.maxWidth = maxWidth ? maxWidth + 'px' : '';
            });
        });
    }

    function setDropdownsContentWidth(menus) {
        menus.forEach(menu => {
            const contentWidth = menu.dataset.dropdownContentWidth;
            if (contentWidth) {
                menu.querySelectorAll('.gw-mm-item__dropdown-content').forEach(content => {
                    content.style.maxWidth = contentWidth + 'px';
                });
            }
        });
    }

    function showMenuToggleButton(menus) {
        menus.forEach(menu => {
            if (!menu.classList.contains('is-collapsible')) {
                return;
            }
            const breakpoint = parseInt(menu.dataset.responsiveBreakpoint);
            const toggleButtonWrapper = menu.querySelector('.gw-mm__toggle-wrapper');
            const windowWidth = window.innerWidth;

            if (breakpoint >= windowWidth) {
                toggleButtonWrapper.classList.remove('is-hidden');
                menu.classList.add('is-mobile');
            } else {
                toggleButtonWrapper.classList.add('is-hidden');
                menu.classList.remove('is-mobile', 'is-opened');
            }
        });
    }

    function attachToggleActionToButtons(menus) {
        menus.forEach(menu => {
            menu.addEventListener('click', function (event) {
                const target = event.target;
                if (target.classList.contains('gw-mm__toggle')) {
                    toggleMobileMenu(target, menu);
                }
                if (target.classList.contains('gw-mm-item__toggle')) {
                    const dropdown = target.closest('.gw-mm-item').querySelector('.gw-mm-item__dropdown-wrapper');
                    toggleMobileMenu(target, dropdown);
                }
            });
        });
    }

    function toggleMobileMenu(toggle_button, menu) {
        toggle_button.classList.toggle('is-opened');
        menu.classList.toggle('is-opened');
    }

    function setMobileMenuPosition(menus) {
        menus.forEach(menu => {
            const dropdown = menu.querySelector('.gw-mm__content-wrapper');
            if (!menu.classList.contains('is-mobile')) {
                if (dropdown) {
                    dropdown.style.left = '';
                    dropdown.style.width = '';
                }
                return;
            }
            const menuCoords = menu.getBoundingClientRect();
            const left = -menuCoords.left;
            if (dropdown) {
                dropdown.style.left = left + 'px';
                dropdown.style.width = window.innerWidth + 'px';
            }
        });
    }

    function setPlainMenusDropdownPosition(menus) {
        menus.forEach(menu => {
            const dropdowns = menu.querySelectorAll('.gw-pm-item__dropdown');
            const isInsideMegaMenu = !!menu.closest('.gw-mm');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('toleft');
                const rect = dropdown.getBoundingClientRect();
                const rightEdgePosition = rect.left + rect.width;
                let rootWidth;
                if (isInsideMegaMenu) {
                    const wrapper = menu.closest('.gw-mm-item__dropdown-wrapper');
                    const wrapperRect = wrapper.getBoundingClientRect();
                    rootWidth = wrapperRect.left + wrapperRect.width;
                } else {
                    rootWidth = window.innerWidth;
                }
                let isLeft = false;
                if (rightEdgePosition >= rootWidth) {
                    isLeft = true;
                }
                if (isLeft) {
                    dropdown.classList.add('toleft');
                }
            });
        });
    }

    showMenuToggleButton(menus);
    attachToggleActionToButtons(menus);
    setDropdownsPosition(menus);
    setDropdownsContentWidth(menus);
    setMobileMenuPosition(menus);
    setPlainMenusDropdownPosition(plainMenus);

    window.addEventListener('resize', function () {
        showMenuToggleButton(menus);
        setDropdownsPosition(menus);
        setMobileMenuPosition(menus);
        setPlainMenusDropdownPosition(plainMenus);
    });
});