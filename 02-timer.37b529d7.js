var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var s=n("fbklV"),l=n("iQIUW");const r={startButton:document.querySelector("[data-start]"),dateInput:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};r.startButton.disabled=!0,(()=>{const e=document.querySelector("html");e.style.height="100vh",e.style.padding="0",e.style.margin="0",document.body.style.position="relative",document.body.style.height="100vh",document.body.style.margin="0",document.body.style.padding="0",document.body.style.backgroundColor="rgb(30, 90, 30)",document.body.style.transition="background-color 250ms";const t=document.body.firstElementChild;t.style.position="absolute",t.style.top="16px",t.style.left="16px",t.style.margin="0",t.style.padding="0";const o=document.body.firstElementChild.firstElementChild,n=document.createElement("span");n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.width="40px",n.style.backgroundColor="rgb(37, 33, 33)",n.style.border="2px solid #fff",n.style.borderRadius="50%",n.innerHTML='<svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path fill="#fff" d="M201.373 438.627l-160-160c-12.497-12.496-12.497-32.758 0-45.255l160-160c12.497-12.496 32.758-12.496 45.255 0s12.497 32.758 0 45.255l-105.373 105.373h306.745c17.673 0 32 14.327 32 32s-14.327 32-32 32h-306.745l105.373 105.373c6.248 6.248 9.372 14.438 9.372 22.627s-3.124 16.379-9.372 22.627c-12.497 12.497-32.758 12.497-45.255 0z"></path></svg>',n.style.backgroundImage="url(../img/icon-back.svg)",o.style.display="flex",o.style.gap="10px",o.style.padding="5px 0",o.style.fontSize="24px",o.style.lineHeight="1.6667",o.style.textDecoration="none",o.style.color="#fff",o.style.transition="transform 250ms",o.prepend(n),o.addEventListener("mouseover",(e=>{e.currentTarget.style.transform="translateX(-10px)"})),o.addEventListener("mouseout",(e=>{e.currentTarget.style.transform="translateX(0)"}))})(),(()=>{document.body.style.display="grid",document.body.style.alignItems="center",document.body.style.justifyContent="center",document.body.style.gridTemplateColumns="250px 100px",document.body.style.gridAutoRows="minmax(25px, auto)",document.body.style.gap="10px";const e=document.querySelector("#datetime-picker");e.style.padding="10px",e.style.marginTop="auto";const t=document.querySelector("[data-start]");t.style.height="39px",t.style.marginTop="auto";const o=document.querySelector(".timer");o.style.gridColumnStart="1",o.style.gridColumnEnd="3",o.style.display="flex",o.style.justifyContent="space-between",o.style.marginBottom="auto";document.querySelectorAll(".field").forEach((e=>{e.style.textAlign="center",e.style.borderRadius="5px",e.style.padding="5px",e.style.backgroundImage="linear-gradient(rgb(248, 248, 248), rgb(161, 161, 161))"}));document.querySelectorAll(".value").forEach((e=>{e.style.display="block",e.style.fontSize="60px"}));document.querySelectorAll(".label").forEach((e=>{e.style.display="block",e.style.backgroundColor="rgb(206, 206, 206)",e.style.borderRadius="3px"}))})();const d=e=>{const t=6e4,o=36e5,n=24*o;return{days:i(Math.floor(e/n)),hours:i(Math.floor(e%n/o)),minutes:i(Math.floor(e%n%o/t)),seconds:i(Math.floor(e%n%o%t/1e3))}},a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=(new Date).getTime(),o=e[0].getTime();o>t?r.startButton.disabled=!1:(l.Notify.failure("Please choose a date in the future"),r.startButton.disabled=!0)}},i=e=>String(e).padStart(2,"0");(0,s.default)("#datetime-picker",a);r.startButton.addEventListener("click",(e=>{e.target.disabled=!0,r.dateInput.disabled=!0;const t=new Date(r.dateInput.value).getTime(),o=setInterval((()=>{const e=(new Date).getTime(),n=t-e;n>=0?(r.seconds.textContent=d(n).seconds,r.minutes.textContent=d(n).minutes,r.hours.textContent=d(n).hours,r.days.textContent=d(n).days):(clearInterval(o),r.dateInput.disabled=!1,l.Notify.info("Сountdown is over!"))}),1e3)}));
//# sourceMappingURL=02-timer.37b529d7.js.map
