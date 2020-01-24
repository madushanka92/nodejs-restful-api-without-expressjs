const connection = require('../Config/DBConnect');
const getResponse = require('../Config/Response');

class DetailsController {

    async ShowAll(request, response) {
        connection.query("SELECT * FROM details ORDER BY id", (err, rows, fields) => {
            if (!err) {
                getResponse.configResponse(200, false, rows, response);
            }
            else {
                getResponse.configResponse(400, true, err, response);
            }
        });
    }

    async Show(request, response, params) {
        connection.query("SELECT * FROM details WHERE id=" + params, (err, rows, fields) => {
            if (!err) {
                getResponse.configResponse(200, false, rows, response);
            }
            else {
                getResponse.configResponse(400, true, err, response);
            }
        });

    }

    async Remove(request, response, params) {
        
        connection.query("SELECT * FROM details WHERE id=" + params, (err, rows, fields) => {
            if (!err) {
                if (rows.length == 0) {
                    getResponse.configResponse(200, false, "Record not found", response);
                }
                else {
                    connection.query("DELETE FROM details WHERE id=" + params, (err, rows, fields) => {
                        if (!err) {
                            getResponse.configResponse(200, false, "Record Removed", response);
                        }
                        else {
                            getResponse.configResponse(400, true, err, response);
                        }
                    });
                }
            }
            else {
                getResponse.configResponse(400, true, err, response);
            }
        });

    }
}
module.exports = new DetailsController();