/*
 * @Description  : 聚合 controllers
 * @Author       : tongzonghua
 * @Date         : 2020-02-01 23:36:57
 * @LastEditTime : 2020-02-02 02:21:45
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
const fs = require('fs');
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

const controllers = {};
for (const file of files) {
    if (file.toLocaleLowerCase().endsWith('js')) {
        const controller = require(`./${file}`);
        controllers[`${file.replace(/\.js/, '')}`] = controller;
    }
}

module.exports = controllers;