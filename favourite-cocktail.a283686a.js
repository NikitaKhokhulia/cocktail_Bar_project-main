!function(){const e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};if(e.any()){document.body.classList.add("_touch");let e=document.querySelector(".menu__navbar-link-favourite");e.addEventListener("click",(function(t){e.parentElement.classList.toggle("_active")}))}else document.body.classList.add("_pc");const t=document.querySelector(".menu-icon");if(t){const e=document.querySelector(".header__menu");t.addEventListener("click",(()=>{document.body.classList.toggle("_lock"),t.classList.toggle("_active"),e.classList.toggle("_active")}))}}();
//# sourceMappingURL=favourite-cocktail.a283686a.js.map