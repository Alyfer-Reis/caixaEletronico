import { useState } from "react";
import ReactInputMask from "react-input-mask";
import Bills from "../components/Bills";
import Layout from "../components/Layout";
import Services from "../service";
import { StyledDeposit } from "../styles/deposit";

export default function Deposit() {
    const { SendDeposit } = Services()
    const [cpf, setCpf] = useState('')
    const [money, setMoney] = useState(0)

    
    function handleForm(event) {
        event.preventDefault();
        const cpfClean = cpf.replaceAll(".", "").replace("-", "")
        SendDeposit({cpf: cpfClean, money})

        setMoney(0)
        setCpf('')
    }

    return(
        <Layout head={"Deposito"}>
            <StyledDeposit>
                <h1>Deposito</h1>
                <form onSubmit={handleForm}>
                    <input type="text" value={`R$ ${money},00`}  required/>
                    <ReactInputMask mask="999.999.999-99" className="cpf" placeholder="Digite seu CPF" value={cpf} onChange={env => setCpf(env.target.value)} required />
                    <button type="submit">Depositar</button>
                </form>
                <Bills money={money} setMoney={setMoney} />
            </StyledDeposit>
        </Layout>
    )
}