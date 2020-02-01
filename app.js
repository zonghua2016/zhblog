/*
 * @Description  : Koa 服务
 * @Author       : tongzonghua
 * @Date         : 2020-01-20 19:23:09
 * @LastEditTime : 2020-02-01 22:12:13
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const staticCache = require('koa-static-cache');
const cors = require('koa2-cors');
const helmet = require('koa-helmet');

const {
    SERVICE
} = require('./utils/config.js');

const publicRouter = require('./routes/public');
const privateRouter = require('./routes/private');

// 日志中间件
const {
    loggerMiddleware
} = require('./middlewares/logger.js');

// 定制响应体中间件
const {
    errorHandler,
    responseHandler
} = require('./middlewares/response.js');

// cors 中间件
const {
    corsHandler
} = require('./middlewares/cors.js');


const app = new Koa();

// Logger
app.use(loggerMiddleware);

// Error Handler
app.use(errorHandler);

// Global Middlewares
app.use(bodyParser);
app.use(staticCache(SERVICE.PUBLIC_DIR));

// Routes
app.use(publicRouter.routes(), publicRouter.allowedMethods());
app.use(privateRouter.routes(), privateRouter.allowedMethods());

// Response
app.use(responseHandler);

// Cors
app.use(cors(corsHandler));

// Helmet
app.use(helmet());

module.exports = app;