/*
 * @Description  : 聚合 service 
 * @Author       : tongzonghua
 * @Date         : 2020-02-01 23:37:02
 * @LastEditTime : 2020-02-02 00:06:08
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const fs = require('fs');
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

const services = {};
for (const file of files) {
    if (file.toLocaleLowerCase().endsWith('js')) {
        const service = require(`./${file}`);
        services[`${file.replace(/\.js/, '')}`] = service;
    }
}

module.exports = services;