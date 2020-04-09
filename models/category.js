/*
 * @Description  : 分类模型
 * @Author       : tongzonghua
 * @Date         : 2020-02-01 23:51:55
 * @LastEditTime : 2020-02-03 00:23:03
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
module.exports = {
    name: 'category',
    schema: {
        _id: String,
        name: String,
        description: String,
        createTime: Date,
        updateTime: Date
    }
}