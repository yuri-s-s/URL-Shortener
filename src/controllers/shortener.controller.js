const shortenerService = require("../services/shortener.service")

const create = async(req, res) => {
    try {

        const { url } = req.body;

        if(!url) {
            return res.status(400).json({message: "A url deve ser passada"})
        }

        const shortener = await shortenerService.create(url)

        if(!shortener){
            return res.status(400).json({message: "Não foi possível criar nova url"})
        }

        return res.status(201).json(shortener)
        
    } catch (err) {
        return res.status(500).json({message: `${err.message}`})
    }
}

const getByShortUrl = async(req, res) => {
    try {

        const { shortUrl } = req.params;

        if(!shortUrl) {
            return res.status(400).json({message: "A url deve ser passada"})
        }

        const shortener = await shortenerService.getByShortUrl(shortUrl)

        if(!shortener){
            return res.status(400).json({message: "Url não encontrada"})
        }

        return res.status(200).json({url: shortener})
        
    } catch (err) {
        return res.status(500).json({message: `${err.message}`})
    }
}

const getByShortUrlDetails = async(req, res) => {
    try {

        const { shortUrl } = req.params;

        if(!shortUrl) {
            return res.status(400).json({message: "A url deve ser passada"})
        }

        const shortener = await shortenerService.getByShortUrlDetails(shortUrl)

        if(!shortener){
            return res.status(400).json({message: "Url não encontrada"})
        }

        return res.status(201).json(shortener)
        
    } catch (err) {
        return res.status(500).json({message: `${err.message}`})
    }
}


module.exports = {
    create,
    getByShortUrl,
    getByShortUrlDetails
}