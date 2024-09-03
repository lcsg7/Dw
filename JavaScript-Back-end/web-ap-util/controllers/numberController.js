exports.processNumber = (req, res) => {
    const { action } = req.params;
    const input = req.query.input.split(',').map(Number);

    let output;
    switch (action) {
        case 'minimum':
            output = Math.min(...input);
            break;
        case 'maximum':
            output = Math.max(...input);
            break;
        default:
            return res.status(400).json({ error: 'Ação inválida' });
    }

    res.json({ output });
};
