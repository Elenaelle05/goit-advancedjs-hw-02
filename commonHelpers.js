import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let o;function n(){const e=a();document.body.style.backgroundColor=e}function a(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}t.addEventListener("click",()=>{t.disabled=!0,o=setInterval(()=>{n()},1e3)});r.addEventListener("click",()=>{clearInterval(o),t.disabled=!1});
//# sourceMappingURL=commonHelpers.js.map