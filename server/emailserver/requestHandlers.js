var requestHandlers = {};
var emailManage = require('./handlers/emailManage.js');

requestHandlers.emailManage = function (request, response, pathObject, data) {

    if (data == null) {
        return;
    }
    var operation = pathObject["operation"];
    if (operation == "send") {
        emailManage.send(data, response);
    }
};
module.exports = requestHandlers;