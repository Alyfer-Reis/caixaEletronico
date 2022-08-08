module.exports = app => {

    const { existsOrError } = app.src.config.validation

    const withdraw = async (req, res) => {

        const data = { ...req.body }
        let idClient

        try {
            existsOrError(data.money, 'Valor não informado.')
            existsOrError(Number.isInteger(data.money) , 'Formato de valor incorreto, informe um numero inteiro')

            await app.db.transaction()
            .query('SELECT balance, id FROM cm_client WHERE cpf = ?', [data.cpf])
            .query((r) => {
                if(r.length > 0) {
                    idClient = r[0].id
                    let balance = r[0].balance
                    existsOrError((balance > data.money), 'O valor do saque está acima do valor do saldo')
                    balance -= data.money
                    return ['UPDATE cm_client set balance = ? WHERE cpf = ?', [balance, data.cpf]]
                }
            })
            .rollback(err => res.status(502).send("Erro ao encontrar cliente" + err ))
            .commit()

            

            await app.db.query(
                'INSERT INTO cm_movement (id_client, type_moviment, value_moviment, date_moviment) VALUES (?, ?, ?, NOW())',
                [idClient, 2, data.money]
            )
            .then(_=> res.status(200).send("Saque realizado com sucesso"))
            .catch(err => res.status(502).send("Erro realizar o deposito" ))

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const deposit = async (req, res) => {

        const data = { ...req.body }
        let idClient
        
        try {
            existsOrError(data.money, 'Valor não informado.')
            existsOrError(Number.isInteger(data.money) , 'Formato de valor incorreto, informe um numero inteiro')

            await app.db.transaction()
            .query('SELECT balance, id FROM cm_client WHERE cpf = ?', [data.cpf])
            .query((r) => {
                if(r.length > 0) {
                    let balance = r[0].balance + data.money
                    idClient = r[0].id
                    return ['UPDATE cm_client set balance = ? WHERE id = ?', [balance, idClient]]
                }
            })
            .rollback(err => res.status(502).send("Erro ao encontrar cliente" + err ))
            .commit()

            await app.db.query(
                'INSERT INTO cm_movement (id_client, type_moviment, value_moviment, date_moviment) VALUES (?, ?, ?, NOW())',
                [idClient, 1, data.money]
            )
            .then(_=> res.status(200).send("Deposito realizado com sucesso"))
            .catch(err => res.status(502).send("Erro realizar o deposito" + err ))

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const extract = async (req, res) => {
        const cpf = req.body.cpf
        let idClient
        let balance
        
        await app.db.transaction()
        .query('SELECT id, balance FROM cm_client WHERE cpf = ?', [cpf])
        .query((r) => {
            if(r.length > 0) {
                idClient = r[0].id
                balance = r[0].balance
            }
        })
        .rollback(err => res.status(502).send("Erro ao encontrar cliente" + err ))
        .commit()

        await app.db.query('SELECT * FROM cm_movement WHERE id_client = ? ORDER BY date_moviment DESC', [idClient])
        .then(result=> res.status(200).json({balance, extract: result}))
        .catch(err => res.status(502).send("Erro ao buscar informações"))
        
    }

    return { withdraw, deposit, extract }
}