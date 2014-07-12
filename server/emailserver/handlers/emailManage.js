var emailManage = {};
var email = require("mailer");
emailManage.send = function (data, response) {
    response.asynchronous = 1;
    email.send(
        {
            ssl: true,
            host: "smtp.exmail.qq.com",//发送 smtp.qq.com，接收 pop.qq.com
            domain: "[xxx.xxx.xxx.xxx]",//可以在浏览器中输入 http://ip.qq.com/ 得到
            to: "xxx@qq.com",
            from: "xxx@xxx.com",
            subject: "myemail test email",
//            reply_to: "xxx@xxx.com",
            body: "Hello! This is a test of the myemail.",
            authentication: "login",
            username: "xxx@xxx.com",
            password: "xxx",
            debug: false
        },
        function (err, result) {
            if (err) {
                console.log("the err:" + err);
                response.write(JSON.stringify({
                    "提示信息": "发送失败",
                    "失败原因": "数据异常"
                }));
                response.end();
            } else {
                if (result) {
                    console.log("发送成功");
                    response.write(JSON.stringify({
                        "提示信息": "发送成功"
                    }));
                    response.end();
                } else {
                    response.write(JSON.stringify({
                        "提示信息": "发送失败",
                        "失败原因": "数据异常"
                    }));
                    response.end();
                }
            }
        }
    );
}
module.exports = emailManage;