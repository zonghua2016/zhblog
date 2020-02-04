/*
 * @Description  : 
 * @Author       : tongzonghua
 * @Date         : 2020-02-03 00:24:09
 * @LastEditTime : 2020-02-03 00:28:28
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
module.exports = {
    name: 'article',
    schema: {
        _id: String,
        state: Number,
        public: Number,
        origin: Number,
        categoryId: Number,
        tagIds: Array,
        cover: String,
        title: String,
        description: String,
        content: String,
        likes: Number,
        comments: Number,
        views: Number,
        type: Number,
        createTime: Date,
        updateTime: Date
    }
}