const detailsController = require('../Controllers/DetailsController');

const routes = [
    {
        method: 'GET',
        path: '/api/v1/details/showall',
        handler: detailsController.ShowAll.bind(detailsController)
    },
    {
        method: 'GET',
        path: /\/api\/v1\/details\/show\/([0-9])/,
        handler: detailsController.Show.bind(detailsController)
    }, 
    {
        method : 'DELETE',
        path: /\/api\/v1\/details\/remove\/([0-9])/,
        handler: detailsController.Remove.bind(detailsController)
    }
]

module.exports = routes;