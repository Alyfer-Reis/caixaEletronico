import { useError } from "../context/useError"

export default function Services() {

    const { showMsg } = useError()
    const baseUrl = "http://localhost:3001"

    const SendDeposit = async (body) => {

        try {
            const res = await fetch(`${baseUrl}/deposito`, 
            {
                body: JSON.stringify(body),
                method: 'POST', 
                headers: new Headers({'content-type': 'application/json'})
            })

            
            if(res.status == 200) {
                const response = await res.text()
                showMsg(response)
            }else {
                const response = await res.text()
                showMsg(response, true)
            }

        } catch (e) {
            showMsg("Erro no serividor, por favor tente mais tarde", true)
        }

    }

    const SendWithdraw = async (body) => {
        try {
            const res = await fetch(`${baseUrl}/saque`, 
            {
                body: JSON.stringify(body),
                method: 'POST', 
                headers: new Headers({'content-type': 'application/json'})
            })

            
            if(res.status == 200) {
                const response = await res.text()
                showMsg(response)
            }else {
                const response = await res.text()
                showMsg(response, true)
            }

        } catch (e) {
            showMsg("Erro no serividor, por favor tente mais tarde", true)
        }

    }

    const GetExtract = async (set, body) => {
        try {
            const res = await fetch(`${baseUrl}/extrato`, 
            {
                body: JSON.stringify(body),
                method: 'POST', 
                headers: new Headers({'content-type': 'application/json'})
            })

            
            if(res.status == 200) {
                const data = await res.json()
                set(data)
            }else {
                const response = await res.text()
                showMsg(response, true)
            }

        } catch (e) {
            showMsg("Erro no serividor, por favor tente mais tarde", true)
        }

    }

    return { SendDeposit, SendWithdraw, GetExtract }
}