function add_unsplash_credit(){var e=document.querySelector("#site-main > div > article > figure > img");if(e&&e.src){var n=/(.*)\/([\w-]+)-@([\w]+)-([a-zA-Z0-9]+)-unsplash\.jpg/g,t=e.src.replace(n,"$2"),r=`\n            <div style="text-align: right; font-size: x-small; background-color: white;">\n                photo credit: <a href="https://unsplash.com/@${e.src.replace(n,"$3")}" target="_blank" rel="noopener noreferrer" title="Photo courtesy of ${t} on Unsplash"><span style="display:inline-block;padding:2px 3px;">${t}</span></a>\n            </div>\n        `;e.insertAdjacentHTML("beforebegin",r)}}window.addEventListener("DOMContentLoaded",add_unsplash_credit,!1);
//# sourceMappingURL=unsplash-credit.js.map