/*
 * @Description  : 私有路由
 * @Author       : tongzonghua
 * @Date         : 2020-01-23 21:28:41
 * @LastEditTime : 2020-02-02 03:03:33
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const Router = require('koa-router');
const categoryController = require('../../controllers').category;

const router = new Router();
router.prefix('/api');

router.get('/users', categoryController.getCategoryList)

module.exports = router;