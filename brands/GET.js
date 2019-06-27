function GET(req, res) {
    res.end(JSON.stringify({
        success: true,
        error: null,
        data: brands
    }));
}

module.exports = GET;