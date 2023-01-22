const { Sequelize, DataTypes, Model } = require ('sequelize');
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// DEPENDENCIES
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome To Playlist Creator'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Jammin' on port: ${process.env.PORT}`)
})

const testSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testSequelize();

export default supabase;
