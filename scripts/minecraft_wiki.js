// ==UserScript==
// @name         Minecraft Wiki界面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       extclp
// @match        https://minecraft.fandom.com/*
// @icon         https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/Site-favicon.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(".main-container{width:100%;margin:auto}.global-navigation,.fandom-sticky-header,.global-footer,.mcf-wrapper{display:none !important}");
