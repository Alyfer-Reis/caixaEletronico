module.exports = app => {

    const { existsOrError, validateCPF } = app.src.config.validation

    const validateClient = async (req, res, next) => {
        const cpf = req.body.cpf

        try {
            existsOrError(cpf, 'CPF não informado')
            existsOrError(validateCPF(cpf), 'CPF invalido.')

            await app.db.transaction()
            .query('SELECT cpf FROM cm_client WHERE cpf = ?', [cpf])
            .query((r) => {
                if(!(r.length > 0)) {
                    return ['INSERT INTO cm_client (cpf) values (?)', [cpf]]
                }
            })
            .rollback(err => res.status(502).send("Erro ao cadastrar o CPF" + err ))
            .commit()
            
        } catch (msg) {
            return res.status(400).send(msg)
        }

        next()
    }

    return { validateClient }
}