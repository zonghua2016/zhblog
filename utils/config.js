/*
 * @Description  : 配置文件
 * @Author       : tongzonghua
 * @Date         : 2020-01-20 19:05:58
 * @LastEditTime : 2020-02-02 01:11:12
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const path = require('path');

exports.SERVICE = {
    PORT: 9889,
    SECRET: 'secret',
    PUBLIC_DIR: path.resolve(__dirname, './public'),
    LOG_PATH: path.resolve(__dirname, '../logs/service.log')
}

exports.MONGODB = {
    // DATABASE: 'db_video',
    // USERNAME: 'admin',
    // PASSWORD: 'admin',
    // HOST: '47.105.144.108',
    // PORT: 3717,
    DATABASE: 'blog',
    USERNAME: 'root',
    PASSWORD: 'root',
    HOST: '127.0.0.1',
    PORT: 27017
}

exports.MYSQL = {
    DATABASE: 'blog',
    USERNAME: 'root',
    PASSWORD: '123456',
    HOST: '127.0.0.1',
    PORT: 3306
}