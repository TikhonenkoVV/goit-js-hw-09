!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var s,a=o("dbdyf"),d=o("h6c0i"),r={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),dateInput:document.querySelector("#container__datetime-picker"),daysTens:document.querySelector("[data-days-tens]"),daysOnes:document.querySelector("[data-days-ones]"),hoursTens:document.querySelector("[data-hours-tens]"),hoursOnes:document.querySelector("[data-hours-ones]"),minutesTens:document.querySelector("[data-minutes-tens]"),minutesOnes:document.querySelector("[data-minutes-ones]"),secondsTens:document.querySelector("[data-seconds-tens]"),secondsOnes:document.querySelector("[data-seconds-ones]")};r.startButton.disabled=!0,r.stopButton.disabled=!0,d.Notify.init({position:"center-top"});var i=function(e){var t=6e4,n=36e5,o=24*n;return{days:Math.floor(e/o),hours:Math.floor(e%o/n),minutes:Math.floor(e%o%n/t),seconds:Math.floor(e%o%n%t/1e3)}},u=function(e,t){var n=e.querySelector(".top"),o=parseInt(n.textContent);if(t!==o){var s=e.querySelector(".bottom"),a=document.createElement("div");a.classList.add("top-flip");var d=document.createElement("div");d.classList.add("bottom-flip"),top.textContent=o,s.textContent=o,a.textContent=o,d.textContent=t,a.addEventListener("animationstart",(function(e){n.textContent=t})),a.addEventListener("animationend",(function(e){a.remove()})),d.addEventListener("animationend",(function(e){s.textContent=t,d.remove()})),e.append(a,d)}},c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){var t=(new Date).getTime(),n=e[0].getTime();n>t?r.startButton.disabled=!1:(d.Notify.failure("Please choose a date in the future"),r.startButton.disabled=!0)}};(0,a.default)("#container__datetime-picker",c),r.startButton.addEventListener("click",(function(e){e.target.disabled=!0,r.stopButton.disabled=!1,r.dateInput.disabled=!0;var t=new Date(r.dateInput.value).getTime();s=setInterval((function(){var e,n,o,a,c,l=(new Date).getTime(),f=t-l;f>=0?(n=i(e=f).seconds,o=i(e).minutes,a=i(e).hours,c=i(e).days,u(r.daysTens,Math.floor(c/10)),u(r.daysOnes,c%10),u(r.hoursTens,Math.floor(a/10)),u(r.hoursOnes,a%10),u(r.minutesTens,Math.floor(o/10)),u(r.minutesOnes,o%10),u(r.secondsTens,Math.floor(n/10)),u(r.secondsOnes,n%10)):(clearInterval(s),r.dateInput.disabled=!1,r.stopButton.disabled=!0,d.Notify.info("Сountdown is over!")),f}),250)})),r.stopButton.addEventListener("click",(function(e){e.target.disabled=!0,r.dateInput.disabled=!1,r.startButton.disabled=!1,clearInterval(s),u(r.daysTens,0),u(r.daysOnes,0),u(r.hoursTens,0),u(r.hoursOnes,0),u(r.minutesTens,0),u(r.minutesOnes,0),u(r.secondsTens,0),u(r.secondsOnes,0)}))}();
//# sourceMappingURL=flip-timer.ce037836.js.map
