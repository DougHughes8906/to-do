!function(e){var t={};function n(l){if(t[l])return t[l].exports;var d=t[l]={i:l,l:!1,exports:{}};return e[l].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(l,d,function(t){return e[t]}.bind(null,d));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=document.body,t=document.createElement("H1");t.appendChild(document.createTextNode("Task Manager")),e.appendChild(t);let n=document.createElement("div");n.classList.add("Nav");let l=document.createElement("div");n.appendChild(l);let d=document.createElement("div");d.appendChild(document.createTextNode("Home")),d.id="NavHome",n.appendChild(d);let o=document.createElement("div");o.appendChild(document.createTextNode("Projects")),o.id="NavProjects",n.appendChild(o);let i=document.createElement("div");i.appendChild(document.createTextNode("New Project")),i.id="NavNewProject",n.appendChild(i);let a=document.createElement("div");n.appendChild(a),e.appendChild(n);let r=document.createElement("div");r.classList.add("modal");let c=document.createElement("div");c.classList.add("modal-content");let m=document.createElement("div"),s=document.createElement("span");s.appendChild(document.createTextNode("Item Title: ")),m.appendChild(s);let p=document.createElement("input");p.type="text",p.id="itemTitleInput",m.appendChild(p);let u=document.createElement("div");u.appendChild(document.createTextNode("Add Item")),u.id="addItem",m.appendChild(u),c.appendChild(m),r.appendChild(c),e.appendChild(r);let g=document.createElement("div");g.classList.add("Content"),e.appendChild(g)};var d=e=>{let t="New item",n="",l="",d=1,o=!1,i=e;return{changeTitle:e=>{t=e},changeDesc:e=>{n=e},changeDueDate:e=>{l=e},changePriority:e=>{if("number"==typeof e){let n=e%1;0===n?(e<1?(console.log(`Entered priority of ${e} is below the minimum priority of 1`),e=1):e>10&&(console.log(`Entered priority of ${e} is above the maximum priority of 10`),e=10),d=e,console.log(`Priority for the ${t} task changed to ${d}.`)):isNaN(n)?console.log(`NaN, Infinity or -Infinity was entered. Priority for the ${t} task unchanged.`):console.log(`A floating number was not entered. Priority for the ${t} task unchanged.`)}else console.log(`A number was not entered. Priority for the ${t} task unchanged.`)},setComplete:()=>{o=!0},setIncomplete:()=>{o=!1},getTitle:()=>t,getDescription:()=>n,getDueDate:()=>l,getPriority:()=>d,isComplete:()=>o,getOrder:()=>i}};var o=()=>{let e=[],t=!1,n=0,l="New Project",o=0;return{addItem:()=>{e.push(d(o)),o++},removeItem:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the item list`):e.splice(t,1)},completeItem:l=>{l<0||l>=e.length?console.log(`Index ${l} is not a valid index of the item list`):e[l].isComplete()||(e[l].setComplete(),n++,n===e.length&&(t=!0))},incompleteItem:l=>{l<0||l>=e.length?console.log(`Index ${l} is not a valid index of the item list`):e[l].isComplete()&&(e[l].setIncomplete(),n--,t&&(t=!1))},isComplete:()=>t,sortBy:t=>{"title"===t?e.sort((function(e,t){let n=e.getTitle(),l=t.getTitle();return n<l?-1:n>l?1:0})):"due date"===t?e.sort((function(e,t){let n=e.getDueDate(),l=t.getDueDate();return n<l?-1:n>l?1:0})):"priority"===t?e.sort((function(e,t){let n=e.getPriority(),l=t.getPriority();return n<l?-1:n>l?1:0})):e.sort((function(e,t){let n=e.getOrder(),l=t.getOrder();return n<l?-1:n>l?1:0}))},filterByComplete:()=>e.filter(e=>e.isComplete()),filterByIncomplete:()=>e.filter(e=>!e.isComplete()),getTitle:()=>l,changeTitle:e=>{l=e},getItem:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the item list`)},getNumItems:()=>e.length}};var i=()=>{let e=[],t=-1,n=-1,l=-1,d=!1,i=!1,a=!1;const r=()=>{if(-1!==n)return e[n]};return{addProject:()=>{e.push(o()),1===e.length&&(t=0,n=0)},removeProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):e.splice(t,1)},getHomeIndex:()=>t,setHomeIndex:n=>{n<0||n>=e.length?console.log(`Index ${n} is not a valid index of the project list`):t=n},getProject:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the project list`)},selectProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):n=t},getSelection:r,selectItem:e=>{-1===n?console.log("No project currently selected"):l=e},getItemSelection:()=>r().getItem(l),setAddItem:()=>{d=!d},getAddItem:()=>d,setUpdateItem:()=>{i=!i},getUpdateItem:()=>i,projTitleActive:()=>a,setProjTitleActive:()=>{a=!a},getNumProjects:()=>e.length}};var a=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.createElement("h2");n.appendChild(document.createTextNode(e.getTitle())),n.id="projTitle",t.appendChild(n);let l=document.createElement("div"),d=e.getNumItems();for(let t=0;t<d;t++){let n=e.getItem(t),d=document.createElement("div");d.classList.add("itemContainer");let o=document.createElement("div"),i=document.createElement("input");i.setAttribute("type","checkbox"),o.appendChild(i),d.appendChild(o);let a=document.createElement("div");a.appendChild(document.createTextNode(n.getTitle())),a.id="item"+t,d.appendChild(a),l.appendChild(d)}let o=document.createElement("div");o.appendChild(document.createTextNode("+ Add Item")),o.classList.add("openAddItem"),l.appendChild(o),l.classList.add("itemsDiv"),t.appendChild(l)};var r=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.createElement("h2");n.appendChild(document.createTextNode("Projects")),n.id="projListTitle",t.appendChild(n);let l=document.createElement("div");l.id="projectContainer";let d=e.getNumProjects();for(let t=0;t<d;t++){let n=e.getProject(t),d=document.createElement("div");d.classList.add("projectLine");let o=document.createElement("div");o.appendChild(document.createTextNode(n.getTitle())),o.id="project"+t,d.appendChild(o),l.appendChild(d)}let o=document.createElement("div");o.appendChild(document.createTextNode("+ Add Project")),o.classList.add("openAddProject"),l.appendChild(o),t.appendChild(l)};const c=e=>{document.getElementsByClassName("modal")[0].style.display="block",document.getElementById("itemTitleInput").focus()},m=()=>{document.getElementsByClassName("modal")[0].style.display="none"};var s=e=>{let t=document.getElementById("itemTitleInput");e.changeTitle(t.value)};var p=()=>{document.getElementById("itemTitleInput").value=""};const u=e=>{s(e),p(),m()},g=e=>{let t=e.getSelection();t.addItem(),u(t.getItem(t.getNumItems()-1))};var h=e=>{let t=document.getElementById("projTitleInput").value,n=e.getSelection();n.changeTitle(t),a(n),e.setProjTitleActive()};var f=e=>{document.addEventListener("click",(function(t){if(e.projTitleActive()&&!t.target.matches("#projTitleInput")&&h(e),t.target.matches(".openAddItem")&&(e.setAddItem(),c()),t.target.matches(".openUpdateItem")){let n=t.target.id;n=parseInt(n.slice(4)),e.selectItem(n),e.setUpdateItem(),c(e.getItemSelection())}if(t.target.matches("#addItem")&&(g(e),e.setAddItem(),a(e.getSelection())),t.target.matches(".updateItem")){let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}if((t.target.matches(".modal")||t.target.matches(".closeItemModal"))&&(p(),e.getAddItem()?e.setAddItem():e.setUpdateItem(),m()),t.target.matches("#projTitle")){let n=t.target.textContent;"New Project"===n&&(n="");let l=document.getElementsByClassName("Content")[0];l.removeChild(t.target);let d=document.createElement("input");d.type="text",d.id="projTitleInput",d.value=n;let o=document.getElementsByClassName("itemsDiv")[0];l.removeChild(o),l.appendChild(d),l.appendChild(o),d.focus(),e.setProjTitleActive()}if(t.target.matches("#NavProjects")&&r(e),t.target.matches("#NavHome")){let t=e.getSelection();a(t)}}),!1),document.addEventListener("keypress",(function(t){if("Enter"===t.key)if(e.getAddItem())g(e),e.setAddItem(),a(e.getSelection());else if(e.getUpdateItem()){let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}else e.projTitleActive()&&h(e)}),!1)};let v=(()=>JSON.parse(localStorage.getItem("userData")))();null===v&&(v=i(),v.addProject()),l();let I=v.getProject(v.getHomeIndex());a(I),f(v)}]);