function GET() {
    res.end(JSON.stringify({
        success: true,
        error: null,
        data: cars
    }));
}

module.exports = GET;