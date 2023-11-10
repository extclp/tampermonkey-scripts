// ==UserScript==
// @name         Minecraft Wiki 自动跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动从minecraft.fandom.com跳转到minecraft.wike
// @author       extclp
// @match        https://minecraft.fandom.com/*
// @icon         https://zh.minecraft.wiki/images/Wiki.png
// @run-at       document-start
// ==/UserScript==

const path = location.pathname.split("/")

if(path[1] == 'wiki') {
    location.href = `https://minecraft.wiki/w/${path[2]}`
} else {
    location.href = `https://${path[1]}.minecraft.wiki/w/${path[3]}`
}
