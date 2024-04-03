// ==UserScript==
// @name         MineBBS 界面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       extclp
// @match        https://www.minebbs.com/*
// @icon         https://www.minebbs.com/data/assets/logo/MB1-.png
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(".message-cell{font-size:16px;}.uix_sidebarNavList__listItem{animation: unset !important;}");
