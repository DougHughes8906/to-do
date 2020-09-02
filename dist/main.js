!function(e){var t={};function n(d){if(t[d])return t[d].exports;var l=t[d]={i:d,l:!1,exports:{}};return e[d].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(d,l,function(t){return e[t]}.bind(null,l));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=()=>{let e=document.body,t=document.createElement("H1");t.appendChild(document.createTextNode("Task Manager")),e.appendChild(t);let n=document.createElement("div");n.classList.add("Nav");let d=document.createElement("div");n.appendChild(d);let l=document.createElement("div");l.appendChild(document.createTextNode("Home")),l.id="NavHome",n.appendChild(l);let o=document.createElement("div");o.appendChild(document.createTextNode("Projects")),o.id="NavProjects",n.appendChild(o);let i=document.createElement("div");i.appendChild(document.createTextNode("New Project")),i.id="NavNewProject",i.classList.add("openAddProject"),n.appendChild(i);let a=document.createElement("div");n.appendChild(a),e.appendChild(n);let c=document.createElement("div");c.classList.add("modal");let r=document.createElement("div");r.classList.add("modal-content");let m=document.createElement("div"),s=document.createElement("span");s.appendChild(document.createTextNode("Item Title: ")),m.appendChild(s);let p=document.createElement("input");p.type="text",p.id="itemTitleInput",m.appendChild(p);let u=document.createElement("div");u.appendChild(document.createTextNode("Description:"));let g=document.createElement("textArea");g.id="itemDescription",m.appendChild(u),m.appendChild(g);let h=document.createElement("div");h.appendChild(document.createTextNode("Due Date: "));let I=document.createElement("input");I.type="datetime-local",I.id="dueDateInput",m.appendChild(h),m.appendChild(I);let v=document.createElement("div");v.appendChild(document.createTextNode("Add Item")),v.id="addItem",m.appendChild(v),r.appendChild(m),c.appendChild(r),e.appendChild(c);let C=document.createElement("div");C.classList.add("Content"),e.appendChild(C)};var l=e=>{let t="New item",n="",d="",l=1,o=!1,i=e;return{changeTitle:e=>{t=e},changeDesc:e=>{n=e},changeDueDate:e=>{d=e},changePriority:e=>{if("number"==typeof e){let n=e%1;0===n?(e<1?(console.log(`Entered priority of ${e} is below the minimum priority of 1`),e=1):e>10&&(console.log(`Entered priority of ${e} is above the maximum priority of 10`),e=10),l=e,console.log(`Priority for the ${t} task changed to ${l}.`)):isNaN(n)?console.log(`NaN, Infinity or -Infinity was entered. Priority for the ${t} task unchanged.`):console.log(`A floating number was not entered. Priority for the ${t} task unchanged.`)}else console.log(`A number was not entered. Priority for the ${t} task unchanged.`)},setComplete:()=>{o=!0},setIncomplete:()=>{o=!1},getTitle:()=>t,getDescription:()=>n,getDueDate:()=>d,getPriority:()=>l,isComplete:()=>o,getOrder:()=>i}};var o=()=>{let e=[],t=!1,n=0,d="New Project",o=0;return{addItem:()=>{e.push(l(o)),o++},removeItem:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the item list`):e.splice(t,1)},completeItem:d=>{d<0||d>=e.length?console.log(`Index ${d} is not a valid index of the item list`):e[d].isComplete()||(e[d].setComplete(),n++,n===e.length&&(t=!0))},incompleteItem:d=>{d<0||d>=e.length?console.log(`Index ${d} is not a valid index of the item list`):e[d].isComplete()&&(e[d].setIncomplete(),n--,t&&(t=!1))},isComplete:()=>t,sortBy:t=>{"title"===t?e.sort((function(e,t){let n=e.getTitle(),d=t.getTitle();return n<d?-1:n>d?1:0})):"due date"===t?e.sort((function(e,t){let n=e.getDueDate(),d=t.getDueDate();return n<d?-1:n>d?1:0})):"priority"===t?e.sort((function(e,t){let n=e.getPriority(),d=t.getPriority();return n<d?-1:n>d?1:0})):e.sort((function(e,t){let n=e.getOrder(),d=t.getOrder();return n<d?-1:n>d?1:0}))},filterByComplete:()=>e.filter(e=>e.isComplete()),filterByIncomplete:()=>e.filter(e=>!e.isComplete()),getTitle:()=>d,changeTitle:e=>{d=e},getItem:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the item list`)},getNumItems:()=>e.length}};var i=()=>{let e=[],t=-1,n=-1,d=-1,l=!1,i=!1,a=!1;const c=()=>{if(-1!==n)return e[n]};return{addProject:()=>(e.push(o()),1===e.length&&(t=0,n=0),e[e.length-1]),removeProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):e.splice(t,1)},getHomeIndex:()=>t,setHomeIndex:n=>{n<0||n>=e.length?console.log(`Index ${n} is not a valid index of the project list`):t=n},getProject:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the project list`)},selectProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):n=t},getSelection:c,selectItem:e=>{-1===n?console.log("No project currently selected"):d=e},getItemSelection:()=>c().getItem(d),setAddItem:()=>{l=!l},getAddItem:()=>l,setUpdateItem:()=>{i=!i},getUpdateItem:()=>i,projTitleActive:()=>a,setProjTitleActive:()=>{a=!a},getNumProjects:()=>e.length}};var a=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.createElement("h2");n.appendChild(document.createTextNode(e.getTitle())),n.id="projTitle",t.appendChild(n);let d=document.createElement("div"),l=e.getNumItems();for(let t=0;t<l;t++){let n=e.getItem(t),l=document.createElement("div");l.classList.add("itemContainer");let o=document.createElement("div"),i=document.createElement("input");i.setAttribute("type","checkbox"),o.appendChild(i),l.appendChild(o);let a=document.createElement("div");a.appendChild(document.createTextNode(n.getTitle())),a.id="item"+t,a.classList.add("itemTitle"),l.appendChild(a),d.appendChild(l)}let o=document.createElement("div");o.appendChild(document.createTextNode("+ Add Item")),o.classList.add("openAddItem"),d.appendChild(o),d.classList.add("itemsDiv"),t.appendChild(d)};var c=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.createElement("h2");n.appendChild(document.createTextNode("Projects")),n.id="projListTitle",t.appendChild(n);let d=document.createElement("div");d.id="projectContainer";let l=e.getNumProjects();for(let t=0;t<l;t++){let n=e.getProject(t),l=document.createElement("div");l.classList.add("projectLine");let o=document.createElement("div");o.appendChild(document.createTextNode(n.getTitle())),o.id="project"+t,o.classList.add("projTitle"),l.appendChild(o),d.appendChild(l)}let o=document.createElement("div");o.appendChild(document.createTextNode("+ Add Project")),o.classList.add("openAddProject"),d.appendChild(o),t.appendChild(d)};const r=e=>{document.getElementsByClassName("modal")[0].style.display="block";let t=document.getElementById("itemTitleInput"),n=document.getElementById("addItem"),d=document.getElementById("itemDescription"),l=document.getElementById("dueDateInput");void 0!==e?(t.value=e.getTitle(),d.value=e.getDescription(),l.value=e.getDueDate(),n.textContent="Update Item"):n.textContent="Add Item",t.focus()},m=()=>{document.getElementsByClassName("modal")[0].style.display="none"};var s=e=>{let t=document.getElementById("itemTitleInput");e.changeTitle(t.value);let n=document.getElementById("itemDescription");e.changeDesc(n.value);let d=document.getElementById("dueDateInput");e.changeDueDate(d.value)};var p=()=>{document.getElementById("itemTitleInput").value="",document.getElementById("itemDescription").value="",document.getElementById("dueDateInput").value=""};const u=e=>{s(e),p(),m()},g=e=>{let t=e.getSelection();t.addItem(),u(t.getItem(t.getNumItems()-1))};var h=e=>{let t=document.getElementById("projTitleInput").value,n=e.getSelection();n.changeTitle(t),a(n),e.setProjTitleActive()};var I=e=>{document.addEventListener("click",(function(t){if(e.projTitleActive()&&!t.target.matches("#projTitleInput")&&h(e),t.target.matches(".openAddItem")&&(e.setAddItem(),r()),t.target.matches(".itemTitle")){let n=t.target.id;n=parseInt(n.slice(4)),e.selectItem(n),e.setUpdateItem(),r(e.getItemSelection())}if(t.target.matches("#addItem")&&(g(e),e.setAddItem(),a(e.getSelection())),t.target.matches(".updateItem")){let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}if((t.target.matches(".modal")||t.target.matches(".closeItemModal"))&&(p(),e.getAddItem()?e.setAddItem():e.setUpdateItem(),m()),t.target.matches("#projTitle")){let n=t.target.textContent;"New Project"===n&&(n="");let d=document.getElementsByClassName("Content")[0];d.removeChild(t.target);let l=document.createElement("input");l.type="text",l.id="projTitleInput",l.value=n;let o=document.getElementsByClassName("itemsDiv")[0];d.removeChild(o),d.appendChild(l),d.appendChild(o),l.focus(),e.setProjTitleActive()}if(t.target.matches(".projTitle")){let n=parseInt(t.target.id.slice(7));e.selectProject(n),a(e.getSelection())}if(t.target.matches(".openAddProject")){let t=e.addProject();e.selectProject(e.getNumProjects()-1),a(t)}if(t.target.matches("#NavProjects")&&c(e),t.target.matches("#NavHome")){e.selectProject(e.getHomeIndex());let t=e.getSelection();a(t)}}),!1),document.addEventListener("keypress",(function(t){if("Enter"===t.key)if(e.getAddItem())g(e),e.setAddItem(),a(e.getSelection());else if(e.getUpdateItem()){let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}else e.projTitleActive()&&h(e)}),!1)};let v=(()=>JSON.parse(localStorage.getItem("userData")))();null===v&&(v=i(),v.addProject()),d();let C=v.getProject(v.getHomeIndex());a(C),I(v)}]);