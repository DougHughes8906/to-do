!function(e){var t={};function d(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,d),l.l=!0,l.exports}d.m=e,d.c=t,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)d.d(n,l,function(t){return e[t]}.bind(null,l));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d(d.s=0)}([function(e,t,d){"use strict";d.r(t);var n=()=>{let e=document.body,t=document.createElement("H1");t.appendChild(document.createTextNode("Task Manager")),e.appendChild(t);let d=document.createElement("div");d.classList.add("Nav");let n=document.createElement("div");d.appendChild(n);let l=document.createElement("div");l.appendChild(document.createTextNode("Home")),l.id="NavHome",d.appendChild(l);let i=document.createElement("div");i.appendChild(document.createTextNode("Projects")),i.id="NavProjects",d.appendChild(i);let o=document.createElement("div");o.appendChild(document.createTextNode("New Project")),o.id="NavNewProject",o.classList.add("openAddProject"),d.appendChild(o);let a=document.createElement("div");d.appendChild(a),e.appendChild(d);let c=document.createElement("div");c.classList.add("modal");let r=document.createElement("div");r.classList.add("modal-content");let m=document.createElement("div"),p=document.createElement("span");p.appendChild(document.createTextNode("Item Title: ")),m.appendChild(p);let s=document.createElement("input");s.type="text",s.id="itemTitleInput",m.appendChild(s);let u=document.createElement("div");u.appendChild(document.createTextNode("Description:"));let g=document.createElement("textArea");g.id="itemDescription",m.appendChild(u),m.appendChild(g);let h=document.createElement("div");h.appendChild(document.createTextNode("Due Date: "));let I=document.createElement("input");I.type="datetime-local",I.id="dueDateInput",m.appendChild(h),m.appendChild(I);let v=document.createElement("div");v.appendChild(document.createTextNode("Set Priority: "));let C=document.createElement("select");C.id="priorityInput";let f=document.createElement("option");f.value="",f.appendChild(document.createTextNode("")),C.appendChild(f);let E=document.createElement("option");E.value="Low",E.id="lowOption",E.appendChild(document.createTextNode("Low")),C.appendChild(E);let y=document.createElement("option");y.value="Medium",y.id="mediumOption",y.appendChild(document.createTextNode("Medium")),C.appendChild(y);let j=document.createElement("option");j.value="High",j.id="highOption",j.appendChild(document.createTextNode("High")),C.appendChild(j),v.appendChild(C),m.appendChild(v);let T=document.createElement("div");T.appendChild(document.createTextNode("Add Item")),T.id="addItem",m.appendChild(T),r.appendChild(m),c.appendChild(r),e.appendChild(c);let x=document.createElement("div");x.classList.add("Content"),e.appendChild(x)};var l=e=>{let t="New item",d="",n="",l="",i=!1,o=e;return{changeTitle:e=>{t=e},changeDesc:e=>{d=e},changeDueDate:e=>{n=e},changePriority:e=>{l=e},setComplete:()=>{i=!0},setIncomplete:()=>{i=!1},getTitle:()=>t,getDescription:()=>d,getDueDate:()=>n,getPriority:()=>l,isComplete:()=>i,getOrder:()=>o}};var i=()=>{let e=[],t=!1,d=0,n="New Project",i=0;return{addItem:()=>{e.push(l(i)),i++},removeItem:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the item list`):e.splice(t,1)},completeItem:n=>{n<0||n>=e.length?console.log(`Index ${n} is not a valid index of the item list`):e[n].isComplete()||(e[n].setComplete(),d++,d===e.length&&(t=!0))},incompleteItem:n=>{n<0||n>=e.length?console.log(`Index ${n} is not a valid index of the item list`):e[n].isComplete()&&(e[n].setIncomplete(),d--,t&&(t=!1))},isComplete:()=>t,sortBy:t=>{"title"===t?e.sort((function(e,t){let d=e.getTitle(),n=t.getTitle();return d<n?-1:d>n?1:0})):"due date"===t?e.sort((function(e,t){let d=e.getDueDate(),n=t.getDueDate();return d<n?-1:d>n?1:0})):"priority"===t?e.sort((function(e,t){let d=e.getPriority(),n=t.getPriority();return d<n?-1:d>n?1:0})):e.sort((function(e,t){let d=e.getOrder(),n=t.getOrder();return d<n?-1:d>n?1:0}))},filterByComplete:()=>e.filter(e=>e.isComplete()),filterByIncomplete:()=>e.filter(e=>!e.isComplete()),getTitle:()=>n,changeTitle:e=>{n=e},getItem:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the item list`)},getNumItems:()=>e.length}};var o=()=>{let e=[],t=-1,d=-1,n=-1,l=!1,o=!1,a=!1;const c=()=>{if(-1!==d)return e[d]};return{addProject:()=>(e.push(i()),1===e.length&&(t=0,d=0),e[e.length-1]),removeProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):e.splice(t,1)},getHomeIndex:()=>t,setHomeIndex:d=>{d<0||d>=e.length?console.log(`Index ${d} is not a valid index of the project list`):t=d},getProject:t=>{if(!(t<0||t>=e.length))return e[t];console.log(`Index ${t} is not a valid index of the project list`)},selectProject:t=>{t<0||t>=e.length?console.log(`Index ${t} is not a valid index of the project list`):d=t},getSelection:c,selectItem:e=>{-1===d?console.log("No project currently selected"):n=e},getItemSelection:()=>c().getItem(n),setAddItem:()=>{l=!l},getAddItem:()=>l,setUpdateItem:()=>{o=!o},getUpdateItem:()=>o,projTitleActive:()=>a,setProjTitleActive:()=>{a=!a},getNumProjects:()=>e.length}};var a=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let d=document.createElement("h2");d.appendChild(document.createTextNode(e.getTitle())),d.id="projTitle",t.appendChild(d);let n=document.createElement("div"),l=e.getNumItems();for(let t=0;t<l;t++){let d=e.getItem(t),l=document.createElement("div");l.classList.add("itemContainer");let i=document.createElement("div"),o=document.createElement("input");o.setAttribute("type","checkbox"),i.appendChild(o),l.appendChild(i);let a=document.createElement("div");a.appendChild(document.createTextNode(d.getTitle())),a.id="item"+t,a.classList.add("itemTitle"),l.appendChild(a),n.appendChild(l)}let i=document.createElement("div");i.appendChild(document.createTextNode("+ Add Item")),i.classList.add("openAddItem"),n.appendChild(i),n.classList.add("itemsDiv"),t.appendChild(n)};var c=e=>{let t=document.getElementsByClassName("Content")[0];for(;t.firstChild;)t.removeChild(t.lastChild);let d=document.createElement("h2");d.appendChild(document.createTextNode("Projects")),d.id="projListTitle",t.appendChild(d);let n=document.createElement("div");n.id="projectContainer";let l=e.getNumProjects();for(let t=0;t<l;t++){let d=e.getProject(t),l=document.createElement("div");l.classList.add("projectLine");let i=document.createElement("div");i.appendChild(document.createTextNode(d.getTitle())),i.id="project"+t,i.classList.add("projTitle"),l.appendChild(i),n.appendChild(l)}let i=document.createElement("div");i.appendChild(document.createTextNode("+ Add Project")),i.classList.add("openAddProject"),n.appendChild(i),t.appendChild(n)};const r=e=>{document.getElementsByClassName("modal")[0].style.display="block";let t=document.getElementById("itemTitleInput"),d=document.getElementById("addItem"),n=document.getElementById("itemDescription"),l=document.getElementById("dueDateInput"),i=document.getElementById("priorityInput");if(void 0!==e){t.value=e.getTitle(),n.value=e.getDescription(),l.value=e.getDueDate(),d.textContent="Update Item";let o=i.options,a=-1,c=0;for(;-1===a&&c<o.length;)o[c].value===e.getPriority()&&(a=c),c++;i.selectedIndex=a}else d.textContent="Add Item";t.focus()},m=()=>{document.getElementsByClassName("modal")[0].style.display="none"};var p=e=>{let t=document.getElementById("itemTitleInput");e.changeTitle(t.value);let d=document.getElementById("itemDescription");e.changeDesc(d.value);let n=document.getElementById("dueDateInput");e.changeDueDate(n.value);let l=document.getElementById("priorityInput");e.changePriority(l.value)};var s=()=>{document.getElementById("itemTitleInput").value="",document.getElementById("itemDescription").value="",document.getElementById("dueDateInput").value="",document.getElementById("priorityInput").selectedIndex=0};const u=e=>{p(e),s(),m()},g=e=>{let t=e.getSelection();t.addItem(),u(t.getItem(t.getNumItems()-1))};var h=e=>{let t=document.getElementById("projTitleInput").value,d=e.getSelection();d.changeTitle(t),a(d),e.setProjTitleActive()};var I=e=>{document.addEventListener("click",(function(t){if(e.projTitleActive()&&!t.target.matches("#projTitleInput")&&h(e),t.target.matches(".openAddItem")&&(e.setAddItem(),r()),t.target.matches(".itemTitle")){let d=t.target.id;d=parseInt(d.slice(4)),e.selectItem(d),e.setUpdateItem(),r(e.getItemSelection())}if(t.target.matches("#addItem"))if(e.getAddItem())g(e),e.setAddItem(),a(e.getSelection());else{let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}if((t.target.matches(".modal")||t.target.matches(".closeItemModal"))&&(s(),e.getAddItem()?e.setAddItem():e.setUpdateItem(),m()),t.target.matches("#projTitle")){let d=t.target.textContent;"New Project"===d&&(d="");let n=document.getElementsByClassName("Content")[0];n.removeChild(t.target);let l=document.createElement("input");l.type="text",l.id="projTitleInput",l.value=d;let i=document.getElementsByClassName("itemsDiv")[0];n.removeChild(i),n.appendChild(l),n.appendChild(i),l.focus(),e.setProjTitleActive()}if(t.target.matches(".projTitle")){let d=parseInt(t.target.id.slice(7));e.selectProject(d),a(e.getSelection())}if(t.target.matches(".openAddProject")){let t=e.addProject();e.selectProject(e.getNumProjects()-1),a(t)}if(t.target.matches("#NavProjects")&&c(e),t.target.matches("#NavHome")){e.selectProject(e.getHomeIndex());let t=e.getSelection();a(t)}}),!1),document.addEventListener("keypress",(function(t){if("Enter"===t.key)if(e.getAddItem())g(e),e.setAddItem(),a(e.getSelection());else if(e.getUpdateItem()){let t=e.getItemSelection();u(t),e.setUpdateItem(),a(e.getSelection())}else e.projTitleActive()&&h(e)}),!1)};let v=(()=>JSON.parse(localStorage.getItem("userData")))();null===v&&(v=o(),v.addProject()),n();let C=v.getProject(v.getHomeIndex());a(C),I(v)}]);