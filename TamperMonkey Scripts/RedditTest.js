// ==UserScript==
// @name         Reddit Test
// @namespace    eltrovReddit
// @version      0.3
// @description  Removed promoted posts on Reddit
// @author       eltrov
// @match        https://www.reddit.com/*
// @grant        none
// @run-at       document-body
// @downloadURL  https://raw.githubusercontent.com/eltrov/TampermonkeyStuff/master/RedditTest.js
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// GM_addStyle('.link.promotedlink { background: pink }');
GM_addStyle('.link.promotedlink { display:none; }');

GM_addStyle('#siteTable_organic[style], .link.promotedlink, .link.promotedlink.external, .link.promotedlink.promoted, .organic-listing .link, .organic-listing .link.compressed, .organic-listing .link.promotedlink, .organic-listing .promoted { display:none; }');