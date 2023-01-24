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

const updateClient = (clientId, { name, surname, address, phone, birthdate, email, dni }) => {
    return db.query(
        'UPDATE clients set name = ?, surname = ?, address = ?, phone = ?, birthdate = ?, email = ?, dni = ? WHERE idClient = ?', [name, surname, address, phone, birthdate, email, dni, clientId]
    )
}

const deleteClient = (clientId) => {
    return db.query('DELETE FROM clients where idClient = ?', [clientId])
}

module.exports = {
    getAll, getById, createClient, updateClient, deleteClient
}