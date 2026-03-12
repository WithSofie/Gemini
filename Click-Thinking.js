// ==UserScript==
// @name         Click Thinking
// @namespace    http://tampermonkey.net/
// @version      2026-01-29
// @description  automatically click "Thinking" in Gemini
// @author       WithSofie
// @match        https://gemini.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const $ = (selector) => document.querySelector(selector);

    function getSpanLabeled(text) {
        const spans = document.querySelectorAll('span');
        const matches = (
            Array
                .from(spans)
                .filter(span => span.textContent.includes(text))
        );

        false && console.log(`Found ${matches.length} matches:`, matches); // Optional: print

        return matches.at(0)
    }

    function clickThinking() {
        getSpanLabeled('Fast').click()
        $( // click 'Thinking' option
            '#mat-menu-panel-5 > div > div > button:nth-child(4) > span > div > div > div > span.mode-title.gds-label-l'
        ).click();
    }

    function clickThinkingTimeout(timeout) {
        return () => {
            setTimeout(clickThinking, timeout);
        }
    }

    const loaded = () => {
        setTimeout(() => {
            clickThinking();
        }, 1000);

        setTimeout(() => {
            getSpanLabeled('New chat').addEventListener('click', clickThinkingTimeout(500));
        }, 1000);
    };

    if (document.readyState == 'complete') {
        loaded();
    } else {
        window.addEventListener('load', loaded);
    }
})();
