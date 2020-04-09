## logo
<!-- ![logo]() -->

## 项目名称

个人博客服务


## 目录

```
.
├── README.md
├── app.js                  // Koa 服务文件
├── bin                     
│   └── www                 // 服务入口
├── controllers             // 逻辑层
│   ├── category.js
│   └── index.js
├── ecosystem.config.js
├── index.js                // 入口文件
├── list.txt
├── logs                    // 自定义日志文件
│   └── service.log
├── middlewares             // 中间件
│   ├── cors.js             // cors
│   ├── jwt.js              // jsonwebtoken 鉴权
│   ├── logger.js           // 自定义日志模板
│   └── response.js         // 自定义响应体
├── models                  // 数据模型
│   ├── category.js
│   └── index.js
├── package.json        
├── pm2Logs                 // pm2 日志文件
│   ├── zhblog_error-5.log
│   ├── zhblog_out-5.log
│   └── zhblog_pid.log
├── public
├── routes                  // 路由文件
│   ├── private
│   │   └── index.js
│   └── public
│       └── index.js
├── services                // 数据层
│   ├── category.js
│   └── index.js
├── utils                   // 配置文件包
│   └── config.js
├── yarn-error.log
└── yarn.lock
```


## 项目描述

>本服务为个人博客提供接口服务，采用 Koa + MongoDB 进行开发

## 如何运行
- 开发环境配置

    `npm install`

    or

    `yarn`

- 开发过程

  1. 命令
        ``` bash
        # 开发
        `npm run dev`

        # 测试
        `npm run test`

        # 正式
        `npm run pro`

        # 停止服务
        `npm run stop`

        ```
  2. 代理配置

      >无需代理

- 发布

- 错误报警 & 监控

  1. 启用 PM2 进行日志管理，日志文件在 pm2Logs 文件夹中
  2. 自定义日志文件，在 logs 文件夹中

- 接口 API

    |url|描述|参数|
    |--|--|--|
    ||||

## 项目备注

>本地开发需要安装 PM2 管理工具