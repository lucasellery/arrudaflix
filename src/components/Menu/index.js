import React from 'react';
import LogoMainArrudaflix from '../../assets/img/LogoMainArrudaflix.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={LogoMainArrudaflix} alt="ArrudaFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;