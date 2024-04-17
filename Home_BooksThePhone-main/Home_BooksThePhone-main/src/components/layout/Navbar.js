import {Link} from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';

import logo from '../../img/favicon.ico';


function Navbar(){
    return(
        <nav className = {styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt="Livros" />
            </Link>
            <ul className = {styles.list}>
                <li className = {styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className = {styles.item}>
                    <Link to="/Destaques">Destaques</Link>
                </li>
                <li className = {styles.item}>
                    <Link to="/Biblioteca">Biblioteca</Link>
                </li>
                <li className = {styles.item}>
                    <Link to="/Carrinho_de_compras">Carrinho</Link>
                </li>
                <li className = {styles.item}>
                    <Link to="/Menu">Menu</Link>
                </li>
            </ul>
        </Container>
      </nav>
    )
}

export default Navbar;