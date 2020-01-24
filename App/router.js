const getResponse = require('../Config/Response'); 

module.exports = async (req, res, routes) => { 

    // Find a matching route
    const route = routes.find((route) => {
        const methodMatch = route.method === req.method;
        let pathMatch = false;

        if (typeof route.path === 'object') {
            pathMatch = req.url.match(route.path);
        }
        else {
            pathMatch = route.path === req.url;
        }

        return pathMatch && methodMatch;
    });
 
    let param = null;

    if (route && typeof route.path === 'object') {
        param = req.url.match(route.path)[1];
    }

    if (route) {
        return route.handler(req, res, param);
    }
    else {
        return getResponse.configResponse(404, true, "Endpoint not found", res)
    }
};