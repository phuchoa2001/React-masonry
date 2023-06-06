import React from 'react';
import "./header.scss"

function Header(props) {
  return (
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
          <div class="header__logo-icon">
            <div class="header__logo-icon-letter">L</div>
          </div>
          <div class="header__logo-text">Lawliet</div>
        </div>
        <div class="header__action">
          <div class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-item"><a href="#">CONTACT</a></li>
              <li class="header__menu-item"><a href="#">TESTIMONIALS</a></li>
              <li class="header__menu-item"><a href="#">ABOUT</a></li>
              <li class="header__menu-item"><a href="#">TERMS</a></li>
            </ul>
          </div>
          {/* <div class="header__search-icon">
            <img src="search-icon.png" alt="Search" />
          </div> */}
        </div>
        <div class="header__mobile-menu">
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="header__menu-icon"></label>
          <div class="header__drawer">
            <ul class="header__drawer-list">
              <li class="header__drawer-item"><a href="#">CONTACT</a></li>
              <li class="header__drawer-item"><a href="#">TESTIMONIALS</a></li>
              <li class="header__drawer-item"><a href="#">ABOUT</a></li>
              <li class="header__drawer-item"><a href="#">TERMS</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;