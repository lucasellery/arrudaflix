import React from 'react';
import { Link } from 'react-router-dom';
import LogoMainArrudaflix from '../../assets/img/LogoMainArrudaflix.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={LogoMainArrudaflix} alt="ArrudaFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;