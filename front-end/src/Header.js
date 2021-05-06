import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs'


function Header() {
    return (
        <header className="masthead mb-auto justify-content-center">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link" href="#"><AboutUs /></a>
                <p>&nbsp;|&nbsp;</p>
              <a className="nav-link" href="http://umer.site">Перейти в магазин</a>
                <p>&nbsp;|&nbsp;</p>
              <a className="nav-link" href="#">Выбрать памятник</a>
                <p>&nbsp;|&nbsp;</p>
              <a className="nav-link" href="#">Ритуальный сертификат</a>
                <p>&nbsp;|&nbsp;</p>
              <a className="nav-link" href="#">Выбрать венок</a>
                <p>&nbsp;|&nbsp;</p>
              <a className="nav-link active" href="#">Заказать печать траурной ленты</a>
            </nav>
          </div>
      </header>
    );
}

export default Header;

