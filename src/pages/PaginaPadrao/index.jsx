import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrao.module.scss';
import Nav from 'componentes/Nav';

export default function PaginaPadrao() {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
            <div className={styles.container}>
                <Outlet />
            </div>
        </main>
        </>
    )
}
