(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const o={startBtn:document.querySelector(".start-btn"),container:document.querySelector(".container"),result:document.querySelector(".result")};function l(i){return new Promise((s,n)=>{setTimeout(()=>{Math.random()>.5?s("😍"):n("🍌")},i)})}o.startBtn.addEventListener("click",()=>{const i=[];o.result.textContent="";for(let t=0;t<3;t++){o.container.children[t].textContent="";const s=l((t+1)*1e3);s.then(n=>{o.container.children[t].textContent=n}).catch(n=>{o.container.children[t].textContent=n}),i.push(s)}setTimeout(()=>{Promise.all(i).then(()=>{o.result.textContent="You won"}).catch(()=>{o.result.textContent="Try again"})},2500)});
//# sourceMappingURL=index.js.map
