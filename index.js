import{A as p,S as l,N as m,a as g,E as v,b as w,K as b,i as f}from"./assets/vendor-PY9CkTNr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=document.querySelector(".about-accordion-container");new p(y,{openOnInit:[0],showMultiple:!1,duration:500,elementClass:"about-ac",panelClass:"about-ac-panel",triggerClass:"about-ac-btn"});new l(".about-skills",{navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},grabCursor:!0,touchEventsTarget:"wrapper",slideClass:"about-skills-item",slideActiveClass:"about-skills-item-accent",wrapperClass:"about-skills-list",slidesPerView:2,loopedSlides:2,spaceBetween:1,loop:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:5,loopedSlides:5,spaceBetween:25}}});new l(".projects-swiper-container",{modules:[m,g,v],direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:10,mousewheel:!0,effect:"cards",grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".projects-swiper-btn-next",prevEl:".projects-swiper-btn-prev",disabledClass:"projects-swiper-btn-disabled"}});document.querySelector(".accordion-container");new p(".accordion",{openOnInit:[],showMultiple:!1,duration:800,easing:"ease-in-out",triggerClass:"btn-svg-opn",panelClass:"accordion-content",elementClass:"accordion-item"});const d=document.querySelectorAll(".btn-svg-opn");d.forEach(t=>{t.addEventListener("click",()=>{d.forEach(r=>{r!==t&&r.classList.remove("rotate")}),t.classList.toggle("rotate")})});const u=document.querySelector(".js-reviews-box-list");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function h(){try{return(await w.get("/reviews")).data}catch{f.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function E(){try{const t=await h();if(!t||t.length===0){u.innerHTML='<li class="reviews-list-card">Not Found</li>';return}const r=t.map(o=>`
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
        `).join("");u.innerHTML=r}catch{f.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function L(){await E(),new l(".reviews-swiper",{modules:[m,b],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}L();const C=document.querySelector(".work-t-modal-container"),a=document.querySelector(".work-t-form"),c=document.querySelector(".work-t-modal-container"),S=document.querySelector(".work-t-input-email"),j=t=>{t.preventDefault();const r="https://portfolio-js.b.goit.study/api/requests";(e=>{const s={method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch(`${r}`,s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})})({email:"client@gmail.com",comment:"comments"}).then(e=>{C.classList.add("js-is-open"),a.reset(),console.log(e)}).catch(e=>{S.classList.add("js-input-email"),alert("Invalid Email"),console.log(e)});const n={email:a.elements.user_email.value.trim(),comments:a.elements.user_comments.value.trim()};console.log(n)},P=t=>{c.classList.add("disabled")},k=t=>{c.classList.add("disabled")};a.addEventListener("submit",j);c.addEventListener("click",P);document.addEventListener("keydown",t=>{t.key==="Escape"&&k()});
//# sourceMappingURL=index.js.map