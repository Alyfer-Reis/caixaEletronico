import { Helmet } from "react-helmet";
import Error from "../Error";
import { StyledLayout } from "./style";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


export default function Layout(props) {
    const { pathname } = useLocation();

    return (
        <StyledLayout>
            <Helmet title={`Konv Mini Bank - ${props.head}`} />
            <header>
                <h1>Konv Mini Bank</h1>
                {pathname !== '/' && (
                    <div>
                        <p><Link to="/">Home</Link> / {props.head}</p>
                        <Error />
                        <Link to="/"><button>Voltar</button></Link>
                    </div>
                )}
            </header>
                {props.children}
            <footer>
                © 2022 Konv Mini Bank – Todos os direitos reservados – Desenvolvido por Alyfer Reis
            </footer>
        </StyledLayout>
    )
}