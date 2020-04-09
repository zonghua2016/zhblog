/*
 * @Description  : 
 * @Author       : tongzonghua
 * @Date         : 2020-01-23 21:28:44
 * @LastEditTime : 2020-01-23 21:40:44
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const Router = require('koa-router');
// const controllers = require('../../controllers');

const router = new Router();
router.prefix('/api');
// router.post('./login', controllers.user.login);

module.exports = router;