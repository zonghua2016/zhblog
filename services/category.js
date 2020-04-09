/*
 * @Description  : 分类 service
 * @Author       : tongzonghua
 * @Date         : 2020-02-02 00:13:31
 * @LastEditTime : 2020-02-02 16:11:01
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */

const categoryModel = require('../models').getModel('category');

class CategoryService  {
    static async getCategoryList() {
        return await categoryModel.find({});
    }
}

module.exports = CategoryService;