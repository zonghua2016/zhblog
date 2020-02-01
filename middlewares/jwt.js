/*
 * @Description  : jwt 中间件
 * @Author       : tongzonghua
 * @Date         : 2020-01-23 20:50:31
 * @LastEditTime : 2020-01-23 21:10:57
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */

const jwt = require('jsonwebtoken');
const {
    SERVICE
} = require('../utils/config.js');

module.exports = (ctx, next) => {
    // 将 token 中的数据解密后存到 ctx 中
    try {
        const token = ctx.request.body.authorization || ctx.request.query.authorization || ctx.request.headers.authorization;
        if (typeof token === 'string') {
            ctx.jwtData = jwt.verify(token, SERVICE.SECRET);
            return next();
        } else {
            throw {
                code: 401,
                message: 'no authorization'
            }
        }
    } catch (err) {
        throw {
            code: 402,
            message: err.message
        }
    }
    next();
}