const Document = require('../models/Document');

module.exports = {
    async index(req, res) {

        const document = await Document.find();

        return res.json(document);
    },

    async store(req, res) {
        const { title, content } = req.body;

        const document = await Document.create({
            title,
            content
        });

        return res.json(document);
    }
    
};