/*
 * @Description  : cors 中间件
 * @Author       : tongzonghua
 * @Date         : 2020-01-23 20:50:36
 * @LastEditTime : 2020-01-23 21:16:14
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const corsHandler = {
    origin: ctx => {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}

module.exports = {
    corsHandler
}