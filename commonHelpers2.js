import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-651d7991.js";const p=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]"),r=document.querySelector("[data-start]"),D=document.querySelector("#datetime-picker");r.addEventListener("click",M);let c="";const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onChange(t){c=t[0],console.log("data",c)},onClose(t){const e=t[0].getTime(),n=Date.now(),o=e-n;if(o<0)r.disabled=!0,y.warning({title:"Caution",message:"You forgot important data"});else{r.disabled=!1;const a=u(o);d(a)}}},w=h(D,q);w.selectedDates[0].getTime();function M(){console.log("data",c),setInterval(()=>{const t=Date.now(),e=c.getTime()-t;if(e<0)return;const n=u(e);d(n)},1e3)}function d(t){const{days:e,hours:n,minutes:o,seconds:a}=t;p.textContent=s(e),g.textContent=s(n),S.textContent=s(o),C.textContent=s(a)}function s(t){return String(t).padStart(2,0)}function u(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers2.js.map
