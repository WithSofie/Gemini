// ==UserScript==
// @name         Click Thinking
// @namespace    http://tampermonkey.net/
// @version      2026-01-29
// @description  automatically click "Thinking" in Gemini
// @author       cflowe1357@gmail.com
// @match        https://gemini.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        const spans = document.querySelectorAll('span');
        const matches = Array.from(spans).filter(span => span.textContent.includes('Fast'));

        false && console.log(`Found ${matches.length} matches:`, matches); // Optional: print

        matches.some(el => {
            el.click();
            document.querySelector('#mat-menu-panel-5 > div > div > button:nth-child(4) > span > div > div > div > span.mode-title.gds-label-l').click();
            return true;
        });
    }, 1000);
})();