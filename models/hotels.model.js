const getAllHotels = () => {
    return db.query('SELECT * FROM hotels')
}

const getHotelById = (hotelId) => {
    return db.query('SELECT * FROM hotels WHERE idhotel = ?', [hotelId])
}

const getHotelByName = (hotelName) => {
    return db.query('SELECT * FROM hotels WHERE name = ?', [hotelName])
}

const createHotel = ({ name, address, city, star, description, taxe }) => {
    return db.query(
        'INSERT INTO hotels (name, address, city, star, description, taxe) VALUES (?, ?, ?, ?, ?, ?)', [name, address, city, star, description, taxe])
}

const updateHotel = (hotelId, { name, address, city, star, description, taxe }) => {
    return db.query(
        'UPDATE hotels SET name = ?, address = ?, city = ?, star = ?, description = ?, taxe = ? WHERE idHotel = ?', [name, address, city, star, description, taxe, hotelId]
    )
}

const deleteHotel = (hotelId) => {
    return db.query('DELETE FROM hotels WHERE idhotel = ?', [hotelId])
}


module.exports = { getAllHotels, getHotelById, createHotel, updateHotel, deleteHotel, getHotelByName }