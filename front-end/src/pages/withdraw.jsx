import Layout from "../components/Layout";
import { StyledWithdraw } from "../styles/withdraw";
import { useState } from "react";
import Services from "../service";
import ReactInputMask from "react-input-mask";
import Bills from "../components/Bills";

export default function Withdraw() {
    const { SendWithdraw } = Services()
    const [cpf, setCpf] = useState('')
    const [money, setMoney] = useState(0)

    
    function handleForm(event) {
        event.preventDefault();
        const cpfClean = cpf.replaceAll(".", "").replace("-", "")
        SendWithdraw({cpf: cpfClean, money})

        setMoney(0)
        setCpf('')
    }

    return(
        <Layout head={"Saque"}>
            <StyledWithdraw>
                <h1>Saque</h1>
                <form onSubmit={handleForm}>
                    <input type="text" value={`R$ ${money},00`}  required/>
                    <ReactInputMask mask="999.999.999-99" className="cpf" placeholder="Digite seu CPF" value={cpf} onChange={env => setCpf(env.target.value)} required />
                    <button type="submit">Sacar</button>
                </form>
                <Bills money={money} setMoney={setMoney} />
            </StyledWithdraw>
        </Layout>
    )
}