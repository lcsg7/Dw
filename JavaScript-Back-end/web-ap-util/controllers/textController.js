exports.processText = (req, res) => {
    const { action } = req.params;
    const { input } = req.body;

    let output;
    switch (action) {
        case 'lowercase':
            output = input.toLowerCase();
            break;
        case 'uppercase':
            output = input.toUpperCase();
            break;
        default:
            return res.status(400).json({ error: 'Ação inválida' });
    }

    res.json({ output });
};
