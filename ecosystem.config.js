/*
 * @Description  : pm2 配置文件
 * @Author       : tongzonghua
 * @Date         : 2020-01-20 19:16:34
 * @LastEditTime : 2020-01-20 19:21:59
 * @LastEditors  : tongzonghua
 * @Email        : tongzonghua@gmail.com
 * @GitHub       : https://github.com/zonghua2016
 */
module.exports = {
    apps: [{
        name: 'zhblog',
        script: './bin/www',
        // args:'one two',
        instances: 1,
        autorestart: true,
        watch: true,
        ignore_watch: [
            'node_modules',
            'pm2Logs'
        ],
        max_memory_restart: '1G',
        min_uptime: '60s',
        max_restarts: 30,
        out_file: './pm2Logs/zhblog_out.log',
        pid_file: './pm2Logs/zhblog_pid.log',
        error_file: './pm2Logs/zhblog_error.log',
        env_pro: {
            'NODE_ENV': 'production',
            'REMOTE_ADDR': ''
        },
        env_dev: {
            'NODE_ENV': 'development',
            'REMOTE_ADDR': ''
        },
        env_test: {
            'NODE_ENV': 'test',
            'REMOTE_ADDR': ''
        }
    }]
}