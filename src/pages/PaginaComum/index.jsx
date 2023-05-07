import Container from "componentes/Container"
import Footer from "componentes/Footer"
import Header from "componentes/Header"
import { Outlet } from "react-router-dom"

const PaginaComum = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    )

}

export default PaginaComum