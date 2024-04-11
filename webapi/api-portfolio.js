// api-portfolio.js
function currentDate(req, res) {
    console.log('currentDate');
    const currentDateTime = new Date().toISOString();
    res.json({ currentDateTime });
}

function add(req, res) {
    console.log('add');
    const { Numero1, Numero2 } = req.body;
    const result = Number(Numero1) + Number(Numero2);
    res.json({ result });
}

module.exports = {
    currentDate,
    add
};
