const getAll = () => {
    return db.query('SELECT * FROM clients');
}

const getById = (clientId) => {
    return db.query('SELECT * FROM clients WHERE idClient = ?', [clientId])
}

const createClient = ({ name, surname, address, phone, birthdate, email, dni }) => {
    return db.query(
        'INSERT INTO clients (name, surname, address, phone, birthdate, email, dni) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, surname, address, phone, birthdate, email, dni]
    );
}

module.exports = {
    getAll, getById, createClient
}