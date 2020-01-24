class SetResponse {

    configResponse(status, error, info, response) {
        
        let data = {
            "status": status,
            "error": error,
            "info": info
        }
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = status;
        response.end(JSON.stringify(data));
    }
}

module.exports = new SetResponse();