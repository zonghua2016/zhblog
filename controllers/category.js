/*
 * @Description  : 分类控制器
 * @Author       : tongzonghua
 * @Date         : 2020-02-02 00:18:51
 * @LastEditTime : 2020-02-02 03:23:19
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */

const categoryService = require('../services').category;

const categoryController = {
    async getCategoryList(ctx, next) {
        const categoryList = await categoryService.getCategoryList();
        ctx.result = {
            categoryList
        };
        return next();
    }
}

module.exports = categoryController;