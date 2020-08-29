require('dotenv').config();

const { Shortener } = require("../models");

const getById = async(id) => {
    let shortener = await Shortener.findByPk(id)

    if(!shortener) {
        return null
    }

    const newShort = `${process.env.BASE_URL}/shortener/${shortener.dataValues.shortUrl}`

    shortener.dataValues.shortUrl = newShort

    return shortener
}

const create = async(url) => {
    try {

        const shortener = await Shortener.findOne({
            where: {
                originalUrl: url
            }
        })

 
        if(shortener) {
            return getById(shortener.dataValues.id)
        }

        const shortUrl = `YU${new Date().valueOf()}`

        const newShortener = await Shortener.create({
            originalUrl: url,
            shortUrl
        })

        if(!newShortener){
            return null
        }

        return getById(newShortener.dataValues.id)
        
    } catch (err) {
        throw new Error(err.message)
    }
}

const getByShortUrl = async(shortUrl) => {
    try {

        const shortener = await Shortener.findOne({
            where: {
                shortUrl
            }
        })

        if(!shortener) {
            return null
        }

        const click = shortener.dataValues.click + 1

        await shortener.update({
            click
        })

        return getById(shortener.dataValues.id)
        
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = {
    create,
    getByShortUrl
}