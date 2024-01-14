// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes Shorts from YouTube
// @author       GuardianN06
// @match        *://*.youtube.com*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove() {
        var short = document.querySelectorAll('.ytd-rich-section-renderer');

        var short1 = document.querySelectorAll('.rich-section-content');

        var short2 = document.querySelectorAll('.ytd-reel-shelf-renderer');

        var all = Array.from(short).concat(Array.from(short1)).concat(Array.from(short2));

        all.forEach(function(element) {
            var parentDiv = element.closest('div');
            if (parentDiv) {
                parentDiv.remove();
            }
        });
    }
    removeElements();
    window.scrollTo(0, 0);

    setInterval(removeElements, 1000);
})();