// ==UserScript==
// @name         Minecraft Wiki 美化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Minecraft Wiki 美化
// @author       extclp
// @match        https://zh.minecraft.wiki/w/*
// @icon         https://zh.minecraft.wiki/images/Wiki.png
// @grant        GM_registerMenuCommand
// ==/UserScript==


GM_registerMenuCommand("隐藏基岩版信息", () => {
    const titles = document.querySelectorAll("dl dt")
    for (const title of titles) {
        if (title.textContent !== "基岩版") {
            continue
        }
        const parnet = title.parentElement;
        parnet.style.display = "none"

        let next = parnet.nextElementSibling
        while (next != null) {
            if (next.tagName == "DL" && next.children[0].textContent == "Java版") {
                break
            }
            next.style.display = "none"
            next = next.nextElementSibling
        }
    }
})
