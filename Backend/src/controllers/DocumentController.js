const Document = require('../models/Document');
const PdfParse = require('../config/PdfParse');

module.exports = {
    async index(req, res) {

        const document = await Document.find();

        return res.json(document);
    },

    async store(req, res) {        
        const { title } = req.body;
        let { content } = req.body;
        const pdfContent = "";

        if(req.file){
            content = await PdfParse.readPdf('././temp/temp.pdf'); 
        }

        if(pdfContent){
            content = pdfContent;
        }

        const document = await Document.create({
            title,
            content
        });

        return res.json(document);
    }
    
};