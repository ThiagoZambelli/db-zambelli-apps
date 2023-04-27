import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {

    const localizacao = useLocation();
  return (
    <nav className={styles.navBar}>
        <Link className={`
        ${styles.link}
        ${localizacao.pathname === '/' ? styles.linkAtivo : ''}`} 
        to='/'>Testes de CSS</Link>        
    </nav>
  )
}
