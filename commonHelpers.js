import{a as m,S as g,i as p}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function b(r,t){const{data:i}=await m(r,{params:t});return i}function v(r){return r.hits.map(({webformatURL:t,largeImageURL:i,tags:c,likes:e,views:o,comments:a,downloads:y})=>`
        <li class="search-item">
            <a class="search-link" href="${i}">
                <img src="${t}" alt="${c}">
            </a>
            <div class="search-item-text-wrap">
                <div class="search-item-text">
                    <h2>Likes</h2>
                    <p>${e}</p>
                </div>
                <div class="search-item-text">
                    <h2>Views</h2>
                    <p>${o}</p>
                </div>
                <div class="search-item-text">
                    <h2>Comments</h2>
                    <p>${a}</p>
                </div>
                <div class="search-item-text">
                    <h2>Downloads</h2>
                    <p>${y}</p>
                </div>
            </div>
        </li>
    `).join("")}const L="44071126-68094a25e5e927b0ae90eca12",w="https://pixabay.com/api/",S=document.querySelector(".search-form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),s=document.querySelector(".load-btn"),x=new g(".gallery a",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",q);s.addEventListener("click",$);let l=1,u="",h=0;function q(r){r.preventDefault(),u=r.target.query.value.trim(),u!==""&&(d.innerHTML="",l=1,h=0,s.style.display="none",n.style.display="block",f())}function $(){l+=1,n.style.display="block",s.disabled=!0,f()}function f(){const r=new URLSearchParams({key:L,q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:15});b(w,r).then(t=>{if(t.hits.length===0&&l===1){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),n.style.display="none";return}l===1&&(h=t.totalHits),d.insertAdjacentHTML("beforeend",v(t)),x.refresh(),n.style.display="none",s.disabled=!1,d.children.length>=h?(s.style.display="none",p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",messageColor:"white"})):s.style.display="block",C()}).catch(t=>{console.log(t),n.style.display="none",s.disabled=!1})}function C(){const{height:r}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
