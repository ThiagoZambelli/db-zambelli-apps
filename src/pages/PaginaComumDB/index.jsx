
import ContainerDB from "componentes/ContainerDB"
import FooterDB from "componentes/FooterDB"
import HeaderDB from "componentes/HeaderDB"
import { Outlet } from "react-router-dom"

const PaginaComumDB = () => {
    return (
        <>
            <HeaderDB />
            <main>
                <ContainerDB>
                    <Outlet />
                </ContainerDB>
            </main>
            <FooterDB />
        </>
    )

}

export default PaginaComumDB