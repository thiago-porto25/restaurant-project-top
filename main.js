(()=>{"use strict";const e=function(){const e=document.querySelector("#content");return{loadNav:()=>{const t=document.createElement("div");t.setAttribute("id","nav");const n=document.createElement("div");n.setAttribute("id","navLogo"),n.setAttribute("class","logo");const d=document.createElement("div");d.setAttribute("id","navListContainer");const c=document.createElement("header");c.textContent="Summer ";const o=document.createElement("span");o.textContent="Cakes";const a=document.createElement("ul");a.setAttribute("id","navList");const i=document.createElement("li");i.setAttribute("id","liHome"),i.setAttribute("class","navItem"),i.textContent="Home";const l=document.createElement("li");l.setAttribute("id","liMenu"),l.setAttribute("class","navItem"),l.textContent="Menu";const m=document.createElement("li");m.setAttribute("id","liContact"),m.setAttribute("class","navItem"),m.textContent="Contact Us",e.appendChild(t),t.appendChild(n),t.appendChild(d),n.appendChild(c),c.appendChild(o),d.appendChild(a),a.appendChild(i),a.appendChild(l),a.appendChild(m)},loadHome:()=>{const t=document.createElement("div");t.setAttribute("id","homeBody");const n=document.createElement("div");n.setAttribute("id","homeContentContainer");const d=document.createElement("h1");d.textContent="Come visit the best bakery in the world!";const c=document.createElement("p");c.textContent="Cakes made with love and care.";const o=document.createElement("br"),a=document.createElement("a");a.setAttribute("href","https://github.com/thiago-porto25");const i=document.createElement("button");i.setAttribute("class","button"),i.setAttribute("id","homeButton"),i.textContent="Order Now!",e.appendChild(t),t.appendChild(n),n.appendChild(d),n.appendChild(c),n.appendChild(o),n.appendChild(a),a.appendChild(i)},unloadHome:()=>{const t=document.querySelector("#homeBody");e.removeChild(t)}}}(),t=function(){const e=document.querySelector("#content");return{load:()=>{const t=document.createElement("div");t.setAttribute("id","menuBody");const n=document.createElement("div");n.setAttribute("class","headerContainer");const d=document.createElement("h1");d.textContent="Menu";const c=document.createElement("div");c.setAttribute("id","menuContainer"),c.setAttribute("class","templateContainer");const o=document.createElement("div");o.setAttribute("class","menuItem");const a=document.createElement("div");a.setAttribute("id","chocolateCake"),a.setAttribute("class","menuImage");const i=document.createElement("p");i.textContent="Chocolate Cake";const l=document.createElement("sub");l.textContent="R$ 6,00 a piece";const m=document.createElement("div");m.setAttribute("class","menuItem");const s=document.createElement("div");s.setAttribute("id","lemonCake"),s.setAttribute("class","menuImage");const u=document.createElement("p");u.textContent="Lemon Cake";const r=document.createElement("sub");r.textContent="R$ 5,00 a piece";const p=document.createElement("div");p.setAttribute("class","menuItem");const C=document.createElement("div");C.setAttribute("id","strawberryCake"),C.setAttribute("class","menuImage");const h=document.createElement("p");h.textContent="Strawberry Cake";const b=document.createElement("sub");b.textContent="R$ 6,00 a piece";const E=document.createElement("div");E.setAttribute("class","menuItem");const A=document.createElement("div");A.setAttribute("id","coconutCake"),A.setAttribute("class","menuImage");const v=document.createElement("p");v.textContent="Coconut Cake";const x=document.createElement("sub");x.textContent="R$ 5,00 a piece";const k=document.createElement("div");k.setAttribute("class","menuItem");const I=document.createElement("div");I.setAttribute("id","peanutCake"),I.setAttribute("class","menuImage");const y=document.createElement("p");y.textContent="Peanut Cake";const g=document.createElement("sub");g.textContent="R$ 5,00 a piece";const S=document.createElement("div");S.setAttribute("class","menuItem");const q=document.createElement("div");q.setAttribute("id","carrotCake"),q.setAttribute("class","menuImage");const H=document.createElement("p");H.textContent="Brazilian Carrot Cake";const B=document.createElement("sub");B.textContent="R$ 4,00 a piece",e.appendChild(t),t.appendChild(n),n.appendChild(d),t.appendChild(c),c.appendChild(o),o.appendChild(a),o.appendChild(i),o.appendChild(l),c.appendChild(m),m.appendChild(s),m.appendChild(u),m.appendChild(r),c.appendChild(p),p.appendChild(C),p.appendChild(h),p.appendChild(b),c.appendChild(E),E.appendChild(A),E.appendChild(v),E.appendChild(x),c.appendChild(k),k.appendChild(I),k.appendChild(y),k.appendChild(g),c.appendChild(S),S.appendChild(q),S.appendChild(H),S.appendChild(B)},unload:()=>{const t=document.querySelector("#menuBody");e.removeChild(t)}}}();e.loadNav(),t.load();const n=document.querySelector("#liHome"),d=document.querySelector("#liMenu");document.querySelector("#liContact"),n.addEventListener("click",(()=>{t.unload(),e.loadHome()})),d.addEventListener("click",(()=>{e.unloadHome(),t.load()}))})();