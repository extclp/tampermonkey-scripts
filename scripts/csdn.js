// ==UserScript==
// @name         CSDN 界面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       extclp
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(".article-search-tip{display: none}");