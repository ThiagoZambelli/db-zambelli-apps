import conteudoDB from "assets/db/dbProjeto.json"
import { useParams } from "react-router-dom"

export const usePaginaAtual = () => { 
    
    const paginaAtual = useParams()

    const conteudo = conteudoDB.find((e) => {
        return e.id === Number(paginaAtual.id)
    })
    
    return conteudo
}