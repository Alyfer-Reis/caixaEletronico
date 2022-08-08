import { useState } from "react";
import ReactInputMask from "react-input-mask";
import Layout from "../components/Layout";
import Icon from "../icons";
import Services from "../service";
import { StyledExtract } from "../styles/extract";


function formatDate(element) {
    const date = new Date(element)
    const dey = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    const month = date.getMonth()+1  > 9 ? date.getMonth()+1  : `0${date.getMonth()+1 }`
    const year = date.getFullYear()
    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    const minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

    return `${dey}/${month}/${year} as ${hours}:${minute}`
}

export default function Extract() {
    const { GetExtract } = Services()
    const [cpf, setCpf] = useState('')
    const [extract, setExtract] = useState({balance: 0, extract:[]})

    
    function handleForm(event) {
        event.preventDefault();
        const cpfClean = cpf.replaceAll(".", "").replace("-", "")
        GetExtract(setExtract, {cpf: cpfClean})
    }


    return(
        <Layout head={"Extrato"}>
            <StyledExtract>
                <h1>Extrato</h1>
                <form onSubmit={handleForm}>
                    <ReactInputMask mask="999.999.999-99" value={cpf} onChange={env => setCpf(env.target.value)} />
                    <button type="submit">Gerar o extrato</button>
                </form>
                <div className="extract">
                   <div>
                        <div className={"line total"}>
                            <p>Saldo Total</p>
                            <p>R$ {extract.balance},00</p>
                        </div>
                        {extract.extract.length > 0 ? extract.extract.map((data, i) => (
                             <div key={`extract${i}`} className={"line " + (data.type_moviment === 1 ? "plus" : "")}>
                                <p>{formatDate(data.date_moviment)}</p>
                                <p className="money">
                                    {data.type_moviment === 1 ? <Icon.Plus /> : <Icon.Minus />}
                                    R$ {data.value_moviment},00
                                </p>
                            </div>
                        )) : (
                            <p>Nenhum registro</p>
                        )}
                    </div>
                </div>
            </StyledExtract>
        </Layout>
    )
}