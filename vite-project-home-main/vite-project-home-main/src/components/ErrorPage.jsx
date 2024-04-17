import { Link } from "react-router-dom"


const ErrorPage = () =>{
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Erro 404</h1>
            <p>A página que você está procurando não foi encontrada.</p>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}
export default ErrorPage