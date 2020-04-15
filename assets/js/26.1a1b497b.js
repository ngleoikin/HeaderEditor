(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{352:function(t,_,e){"use strict";e.r(_);var v=e(19),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),e("p",[t._v("HE本身并不具备任何功能，它只是提供了管理和编写规则的能力。您需要通过编写规则，来实现相应的功能。")]),t._v(" "),e("h3",{attrs:{id:"匹配类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匹配类型"}},[t._v("#")]),t._v(" 匹配类型")]),t._v(" "),e("p",[t._v("规则会应用到满足相应匹配条件的URL上。")]),t._v(" "),e("ul",[e("li",[t._v("全部：对应所有URL，包括Header Editor自身。")]),t._v(" "),e("li",[t._v("正規表示式：\n"),e("ul",[e("li",[t._v("支援標準的JS正規表示式。例如你輸出的正規表示式是"),e("code",[t._v("str")]),t._v("，那麼，實際上，程式內部就會使用"),e("code",[t._v("new RegExp(str)")]),t._v("初始化正規表示式。")]),t._v(" "),e("li",[t._v("如果對應規則是正規表示式，則變更結果（目前包括重新導向至）支援使用形似"),e("code",[t._v("$1")]),t._v("的預留位置。")]),t._v(" "),e("li",[t._v("在"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mozilla Developer Network"),e("OutboundLink")],1),t._v("上了解更多关于正则表达式的内容")])])]),t._v(" "),e("li",[t._v("網址首碼：包括"),e("code",[t._v("http://")]),t._v("在內的網址首碼。")]),t._v(" "),e("li",[t._v("域名：包含子域名在內的完整的域名。")]),t._v(" "),e("li",[t._v("網址：包括“?”及之後的所有內容的完整位址。")])]),t._v(" "),e("h3",{attrs:{id:"排除规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排除规则"}},[t._v("#")]),t._v(" 排除规则")]),t._v(" "),e("p",[t._v("不论是否满足匹配规则，只要满足了排除规则，那么此条均不会对当前URL生效")]),t._v(" "),e("h3",{attrs:{id:"自定义函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义函数"}},[t._v("#")]),t._v(" 自定义函数")]),t._v(" "),e("p",[t._v("通过自定义函数实现更灵活的功能，具体使用请参见"),e("RouterLink",{attrs:{to:"/zh-TW/custom-function.html"}},[t._v("此处")])],1),t._v(" "),e("h2",{attrs:{id:"其他特殊功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他特殊功能"}},[t._v("#")]),t._v(" 其他特殊功能")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用功能“修改请求头”或“修改响应头”时，将头内容设置为"),e("code",[t._v("_header_editor_remove_")]),t._v("将会移除此头（自3.0.5起有效）")])]),t._v(" "),e("li",[e("p",[t._v("使用功能“重定向请求”且使用自定义函数时，返回"),e("code",[t._v("_header_editor_cancel_")]),t._v("将阻止此请求（自4.0.3开始有效）")])])]),t._v(" "),e("h2",{attrs:{id:"其他注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),e("ul",[e("li",[t._v("将头内容设置为空，不同浏览器对此处理方式不同。Chrome将会保留此头信息，但其内容为空。Firefox则会移除此头信息")])]),t._v(" "),e("h2",{attrs:{id:"常见功能示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见功能示例"}},[t._v("#")]),t._v(" 常见功能示例")]),t._v(" "),e("p",[t._v("下面的例子不保证均有效，只作为示例，用于帮助用户熟悉Header Editor的规则编写")]),t._v(" "),e("h4",{attrs:{id:"反-防盗链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反-防盗链"}},[t._v("#")]),t._v(" 反-防盗链")]),t._v(" "),e("p",[t._v("使用说明：将URL匹配至图片域名，功能为“修改请求头”，将头内容Referer修改为任意可显示图片的网址。下列有一些常用的规则：")]),t._v(" "),e("p",[t._v("前缀为"),e("code",[t._v("http://imgsrc.baidu.com/")]),t._v("，修改Referer为"),e("code",[t._v("http://tieba.baidu.com")])]),t._v(" "),e("p",[t._v("正则表达式为"),e("code",[t._v("http://(\\w?\\.?)hiphotos\\.baidu\\.com/")]),t._v("，修改Referer为"),e("code",[t._v("http://tieba.baidu.com")])]),t._v(" "),e("h4",{attrs:{id:"重定向请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向请求"}},[t._v("#")]),t._v(" 重定向请求")]),t._v(" "),e("p",[t._v("例如，将Google公共库重定向至中科大的镜像上：")]),t._v(" "),e("p",[t._v("正则表达式为"),e("code",[t._v("^http(s?)://(ajax|fonts)\\.googleapis\\.com/(.*)")]),t._v("，重定向至"),e("code",[t._v("https://$2.proxy.ustclug.org/$3")])]),t._v(" "),e("p",[t._v("将所有对"),e("code",[t._v("sale.jd.com")]),t._v("、"),e("code",[t._v("item.jd.com")]),t._v("、"),e("code",[t._v("www.jd.com")]),t._v("的HTTP请求重定向到HTTPS：")]),t._v(" "),e("p",[t._v("正则表达式为"),e("code",[t._v("http://(sale|item|www).jd.com")]),t._v("，重定向至"),e("code",[t._v("https://$1.jd.com")])]),t._v(" "),e("p",[t._v("将所有维基百科的HTTP请求重定向至HTTPS：")]),t._v(" "),e("p",[t._v("正则表达式为"),e("code",[t._v("^http://([^\\/]+\\.wikipedia\\.org/.+)")]),t._v("，重定向至"),e("code",[t._v("https://$1")])]),t._v(" "),e("h4",{attrs:{id:"伪装ua"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪装ua"}},[t._v("#")]),t._v(" 伪装UA")]),t._v(" "),e("p",[t._v("修改请求头的User-Agent即可，但功能只能影响服务器判断UA的能力，对于在本地通过JS判断的，无法伪装")])])}),[],!1,null,null,null);_.default=a.exports}}]);