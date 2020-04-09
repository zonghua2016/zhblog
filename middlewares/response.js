/*
 * @Description  : 自定义响应体信息
 * @Author       : tongzonghua
 * @Date         : 2020-01-23 20:04:03
 * @LastEditTime : 2020-02-01 22:11:15
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const {
    logger
} = require('./logger.js');

// 用于 ctx.result 中的内容最终返回给客户端
const responseHandler = ctx => {
    if (ctx.result !== undefined) {
        ctx.type = 'json';
        ctx.body = {
            code: 200,
            msg: ctx.msg || '',
            data: ctx.result
        }
    }
}

// 这个 middleware 处理在其他中间件中出现的异常，在 next() 后吗进行异常捕获，出现异常直接进入这个中间件进行处理
const errorHandler = (ctx, next) => {
    return next().catch(err => {
        if (err.code == null) {
            logger.error(err.stack);
        }
        ctx.body = {
            code: err.code || -1,
            data: null,
            msg: err.message.trim()
        }
        // 保证返回状态是 200
        ctx.status = 200;
        return Promise.resolve();
    })
}

module.exports = {
    responseHandler,
    errorHandler
}