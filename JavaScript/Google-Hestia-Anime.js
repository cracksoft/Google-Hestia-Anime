// ==UserScript==
// @name          Google Hestia (anime) version 3.6
// @icon          https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/icon2.0.png
// @description	  Hestia Dance on Google search engine 
// @namespace     https://github.com/cracksoft/Google-Hestia-Anime
// @author        tangxiadi
// @editor	  cracksoft
// @homepage      http://tangxiadi.cn
// @homepage      https://www.facebook.com/AnonQC.Yuuki
// @include       http://www.google*
// @include       http://images.google*
// @include       http://news.google*
// @include       http://blogsearch.google*
// @include       http://books.google*
// @include       http://209.85.165.104*
// @include       http://translate.google*
// @include       http://video.google*
// @include       https://translate.google*
// @include       https://encrypted.google*
// @include       https://www.google*
// @include       https://www.google*
// @include       https://images.google*
// @include       https://news.google*
// @include       https://blogsearch.google*
// @include       https://books.google*
// @include       https://209.85.165.104*
// @include       https://translate.google*
// @include       https://video.google*
// @include       https://www.google.com/_/chrome*
// @include       http://www.google.com/_/chrome*
// @include       https://www.google.ca/_/chrome*
// @include       http://www.google.ca/_/chrome*
// @include       http*://www.google.*/_/chrome*
// @grant         unsafeWindow
// @grant         GM_xmlhttpRequest
// @run-at        document-start
// @version       3.6
// @date          2018-12-22
// @license       http://creativecommons.org/licenses/by-nc-sa/3.0/
// ==/UserScript==

(function() {var css = [
	"img#hplogo {",
	"  box-sizing: border-box;",
	"  background: url(\"https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-home.gif\") center no-repeat !important;",
	"  padding-left: 521px;",
	"  bottom: 155px;",
    "  z-index: -999;",
	"  position: relative;",
	"  padding-bottom: 335px;",
	"  margin: auto;",
	"}",
	"#gt-src-wrap {",
	"  background: url(\"https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-translate.gif\") 44% 37% no-repeat;",
	"  background-attachment: fixed;",
	"}",
	"#hplogo > div {",
	"display:none;",
	"}",
	"div#hplogo[style] {",
	"position:relative;",
	"top: -213px;",
	"}",
	"#hplogo {text-indent: -9000px !important;white-space: nowrap;}",
	"textarea { color:#fff;}",
	".mw {",
	"background: url(\"https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-web.gif\") 80% 100% no-repeat;",
	"background-attachment: fixed;",
	"}",
	"#logo img {",
	"background: url(\"https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-logo.gif\") 17% 13% no-repeat !important;",
	"}",
	"div#hplogo {",
	" box-sizing: border-box;",
	" background: url(\"https://raw.githubusercontent.com/tangxiadi/Google-Hestia-Anime/master/Anime/hestia-home.gif\") center no-repeat !important;",
	"  padding-left: 521px;",
	"  bottom: 101px;",
    "  z-index: -999;",
	"  position: relative;",
	"  padding-bottom: 335px;",
	"  margin: auto;",
	"}",
	".sbibod, .jhp input[type=\"submit\"] {",
	"  opacity: 0.7;",
	"}"
].join("\n");

if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
