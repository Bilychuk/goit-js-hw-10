import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";const p="/goit-js-hw-10/assets/icon-f70f2538.svg";let s,a;const d=document.querySelector("#datetime-picker"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),o=document.querySelector("button[data-start]"),D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=new Date(t[0]),s<new Date?y.error({timeout:1e5,title:"Error",iconUrl:p,titleColor:"#fff",message:"Please choose a date in the future",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",progressBarColor:"#b51b1b"}):o.disabled=!1}};o.disabled=!0;h(d,D);function v(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function e(t){return t.toString().padStart(2,"0")}function E(){const n=s-new Date;if(n<=0){clearInterval(a);return}const{days:c,hours:u,minutes:i,seconds:r}=v(n);b.textContent=e(c),g.textContent=e(u),C.textContent=e(i),S.textContent=e(r)}o.addEventListener("click",q);function q(){clearInterval(a),a=setInterval(E,1e3),o.disabled=!0,d.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map
