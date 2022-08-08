module.exports = app => {

    app.route('/deposito')
        .all(app.src.api.client.validateClient)
        .post(app.src.api.movement.deposit)


    app.route('/saque')
        .all(app.src.api.client.validateClient)
        .post(app.src.api.movement.withdraw)


    app.route('/extrato')
        .all(app.src.api.client.validateClient)
        .post(app.src.api.movement.extract)
}