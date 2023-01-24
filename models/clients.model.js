const getAllClients = () => {
    return db.query('SELECT * FROM clients');
}

const getClientById = (clientId) => {
    return db.query('SELECT * FROM clients WHERE idClient = ?', [clientId])
}

const createClient = ({ name, surname, address, phone, birthdate, email, dni }) => {
    return db.query(
        'INSERT INTO clients (name, surname, address, phone, birthdate, email, dni) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, surname, address, phone, birthdate, email, dni]
    );
}

const updateClient = (clientId, { name, surname, address, phone, birthdate, email, dni }) => {
    return db.query(
        'UPDATE clients SET name = ?, surname = ?, address = ?, phone = ?, birthdate = ?, email = ?, dni = ? WHERE idClient = ?', [name, surname, address, phone, birthdate, email, dni, clientId]
    )
}

const deleteClient = (clientId) => {
    return db.query('DELETE FROM clients WHERE idClient = ?', [clientId])
}

module.exports = {
    getAllClients, getClientById, createClient, updateClient, deleteClient
}