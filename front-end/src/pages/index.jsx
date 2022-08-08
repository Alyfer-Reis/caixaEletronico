import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { StyledHome } from "../styles";

export default function Home() {

    return(
       <Layout head={"Home"}>
            <StyledHome>
                <h3>Selecione uma opção:</h3>
                <Link to="/deposito">
                    <button>Deposito</button>
                </Link>
                <Link to="/saque">
                    <button>Saque</button>
                </Link>
                <Link to="/extrato">
                    <button>Extrato</button>
                </Link>
        </StyledHome>
       </Layout>
    )
}