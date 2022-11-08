// ==UserScript==
// @name         MDN界面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       extclp
// @match        https://developer.mozilla.org/*/docs/Web/*
// @icon         https://developer.mozilla.org/favicon-48x48.cbbd161b.png
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle("li:has(> .icon-deprecated){display:none !important}");
