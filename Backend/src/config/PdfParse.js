const fs = require('fs');
const pdfParse = require('pdf-parse');

const readPdf = async (path) => {
    const buffer = fs.readFileSync(path);
    try {
        const data = await pdfParse(buffer);

        fs.unlinkSync(path);

        return data.text;

    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    readPdf
}