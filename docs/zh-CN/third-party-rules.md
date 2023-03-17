{
	"request": [
		{
			"enable": true,
			"name": "bing-cn-to-www",
			"ruleType": "redirect",
			"matchType": "prefix",
			"pattern": "https://cn.bing.com",
			"exclude": "",
			"group": "bing-redirect",
			"isFunction": false,
			"action": "redirect",
			"to": "https://www.bing.com"
		}
	],
	"sendHeader": [
		{
			"enable": true,
			"name": "bing",
			"ruleType": "modifySendHeader",
			"matchType": "regexp",
			"pattern": "^http(s?)://www\\.bing\\.com/(.*)",
			"exclude": "",
			"group": "bing-direct",
			"isFunction": false,
			"action": {
				"name": "x-forwarded-for",
				"value": "8.8.8.8"
			}
		}
	],
	"receiveHeader": [],
	"receiveBody": []
}---
title: 第三方规则
lang: zh-CN
---

## 注意

下面的规则由第三方维护，Header Editor不保证规则的时效性、安全性，若出现问题请联系规则维护者

## 列表

* [dupontjoy](https://github.com/dupontjoy/customization/tree/master/Rules/HeaderEditor) 主要为中文站点

## 提交规则

如果您希望您维护的规则出现在此处，请[提交issue](https://github.com/FirefoxBar/HeaderEditor/issues/new)
