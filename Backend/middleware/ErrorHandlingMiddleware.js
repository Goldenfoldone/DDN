const ApiError = require('../erorr/ApiError')

module.exports = function (err, req, res, next){
    if (err instanceof ApiError){
        return res.status(err.status).json({messege: err.message});
    }
    return res.status(500).json({messege: 'Ne predvidennai erorr'});
}