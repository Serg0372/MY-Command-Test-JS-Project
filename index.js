import{A as m,S as l,N as w,a as g,E as b,b as h,c as f,K as y,i as v}from"./assets/vendor-li3fMhde.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const E=document.querySelector(".about-accordion-container");new m(E,{openOnInit:[0],showMultiple:!1,duration:500,elementClass:"about-ac",panelClass:"about-ac-panel",triggerClass:"about-ac-btn"});new l(".about-skills",{navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},grabCursor:!0,touchEventsTarget:"wrapper",slideClass:"about-skills-item",slideActiveClass:"about-skills-item-accent",wrapperClass:"about-skills-list",slidesPerView:2,loopedSlides:2,spaceBetween:1,loop:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:5,loopedSlides:5,spaceBetween:25}}});new l(".projects-swiper-container",{modules:[w,g,b],direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:10,mousewheel:!0,effect:"cards",grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".projects-swiper-btn-next",prevEl:".projects-swiper-btn-prev",disabledClass:"projects-swiper-btn-disabled"}});document.querySelector(".accordion-container");new m(".accordion",{openOnInit:[],showMultiple:!1,duration:800,easing:"ease-in-out",triggerClass:"btn-svg-opn",panelClass:"accordion-content",elementClass:"accordion-item"});const u=document.querySelectorAll(".btn-svg-opn");u.forEach(t=>{t.addEventListener("click",()=>{u.forEach(r=>{r!==t&&r.classList.remove("rotate")}),t.classList.toggle("rotate")})});const L=document.querySelector("#covers"),c=document.querySelector(".covers-wrapper");function S(t){t.forEach(r=>{r.isIntersecting?c.classList.add("animated"):c.classList.remove("animated")})}const C=new IntersectionObserver(S,{root:null,threshold:0});C.observe(L);function k(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const r=t.target.currentSrc,o=h.create(`<div class="covers-full-image-wrapper">
      <img
        src="${r}"
        alt="${t.target.alt}"
        class="covers-full-image"
      />
      <button class="covers-close-button"></button>
    </div>`,{onShow:e=>{window.addEventListener("keydown",n);const s=e.element().querySelector(".covers-close-button");s&&s.addEventListener("click",()=>{e.close()})},onClose:e=>{window.removeEventListener("keydown",n)}});o.show();function n(e){e.code==="Escape"&&o.close()}}c.addEventListener("click",k);const p=document.querySelector(".js-reviews-box-list");f.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function q(){try{return(await f.get("/reviews")).data}catch{v.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function j(){try{const t=await q();if(!t||t.length===0){p.innerHTML='<li class="reviews-list-card">Not Found</li>';return}const r=t.map(o=>`
          <li class="swiper-slide reviews-list-card">
            <img src="${o.avatar_url}" 
                 loading="lazy" 
                 alt="${o.author}" 
                 class="reviews-card-img" 
                 width="48" height="48">
            <div class="reviews-card-desc">
              <h3 class="reviews-card-subtitle">${o.author}</h3>
              <div class="reviews-card-text">${o.review}</div>
            </div>
          </li>
        `).join("");p.innerHTML=r}catch{v.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function P(){await j(),new l(".reviews-swiper",{modules:[w,y],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}P();const O=document.querySelector(".work-t-modal-container"),a=document.querySelector(".work-t-form"),d=document.querySelector(".work-t-modal-container"),I=document.querySelector(".work-t-input-email"),V=t=>{t.preventDefault();const r="https://portfolio-js.b.goit.study/api/requests";(e=>{const s={method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch(`${r}`,s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})})({email:"client@gmail.com",comment:"comments"}).then(e=>{O.classList.add("js-is-open"),a.reset(),console.log(e)}).catch(e=>{I.classList.add("js-input-email"),alert("Invalid Email"),console.log(e)});const n={email:a.elements.user_email.value.trim(),comments:a.elements.user_comments.value.trim()};console.log(n)},x=t=>{d.classList.add("disabled")},B=t=>{d.classList.add("disabled")};a.addEventListener("submit",V);d.addEventListener("click",x);document.addEventListener("keydown",t=>{t.key==="Escape"&&B()});
//# sourceMappingURL=index.js.map