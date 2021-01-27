const Document = require('../models/Document');

module.exports = {
    async index(req, res) {

        const document = await Document.find();

        return res.json(document);
    },

    async store(req, res) {
        const { title, content, pdf } = req.body;
        console.log(req.file);

        const document = await Document.create({
            title,
            content,
            pdf,
        });

        return res.json(document);
    }
    
};