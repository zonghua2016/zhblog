/*
 * @Description  : 连接数据库 && 导出所有模型
 * @Author       : tongzonghua
 * @Date         : 2020-02-01 23:37:37
 * @LastEditTime : 2020-02-02 03:22:36
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const {
    MONGODB
} = require('../utils/config.js');
const {
    logger
} = require('../middlewares/logger.js');
// 默认 mongo 账号不需要添加 username 和 pwd： ${MONGODB.USERNAME}:${MONGODB.PASSWORD}@
const url = `mongodb://${MONGODB.HOST}:${MONGODB.PORT}/${MONGODB.DATABASE}`;
let mongo = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = {
    mongoose,
    mongo,
    models: {}
}

// 错误
mongo.on('error', err => {
    logger.error(new Error(err));
});

// 开启
mongo.once('open', () => {
    logger.info('mongo is opened!');
});

// 整合 models 文件夹下其他 js 文件
fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(file => {
    let modelFile = require(path.join(__dirname, file));
    let schema = new mongoose.Schema(modelFile.schema);
    // 第三个参数指定表明，否则可能会查询不出数据：https://my.oschina.net/weijuer/blog/1944908
    db.models[modelFile.name] = mongo.model(modelFile.name, schema, modelFile.name);
});

db.getModel = name => {
    return db.models[name];
}

module.exports = db;