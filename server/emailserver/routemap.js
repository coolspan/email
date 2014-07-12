
var requestHandlers = require("./requestHandlers");

var routemap = {
    "get": {
        "/api2/email/:operation": requestHandlers.emailManage
    },
    "post": {
        "/api2/email/:operation": requestHandlers.emailManage
    }
};

module.exports = routemap;