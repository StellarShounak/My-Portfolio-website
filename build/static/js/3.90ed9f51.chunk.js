(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-11.b5eb595d.png"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-22.cd199b46.png"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-11.113bece5.png"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-22.fdc4dae0.png"},45:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-11.bbe95170.png"},46:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-22.39f75abd.png"},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return g}));var r=a(8),i=a(1),s=a(41),c=a(42),n=a(43),o=a(44),l=a(45),d=a(46),m=[{id:1,title:"WhatsApp Chat Analyzer",category:"Machine learning Application",img:c.a,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Disney+ Hotstar Clone",category:"Movie Steaming Website",img:o.a},{id:3,title:"Personalised Travel Website",category:"Frontend Application",img:l.a},{id:4,title:"My Portfolio Webpage",category:"React js Based Porfolio",img:d.a},{id:5,title:"Barclays Winner predictor ",category:"Machine Learning based prediction model",img:n.a},{id:6,title:"Photography Portfolio",category:"Hobby",img:s.a}],j=a(2),x=Object(i.createContext)(),g=function(e){var t=Object(i.useState)(m),a=Object(r.a)(t,2),s=a[0],c=a[1],n=Object(i.useState)(""),o=Object(r.a)(n,2),l=o[0],d=o[1],g=Object(i.useState)(""),b=Object(r.a)(g,2),u=b[0],p=b[1],y=s.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),h=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(j.jsx)(x.Provider,{value:{projects:s,setProjects:c,searchProject:l,setSearchProject:d,searchProjectsByTitle:y,selectProject:u,setSelectProject:p,selectProjectsByCategory:h},children:e.children})}},48:function(e,t,a){"use strict";var r=a(1),i=a(6),s=a(39),c=a(13),n=a(2),o=function(e){var t=e.title,a=e.category,r=e.image;return Object(n.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(c.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(47),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(r.useContext)(l.a),t=e.projects,a=e.searchProject,s=e.setSearchProject,c=e.searchProjectsByTitle,d=e.selectProject,j=e.setSelectProject,x=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:j})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?x.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):a?c.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},56:function(e,t,a){"use strict";a.r(t);var r=a(13),i=a(8),s=a(23),c=a(6),n=a.p+"static/media/developer.ef097afb.svg",o=a.p+"static/media/developer-dark.3f07bd13.svg",l=a(39),d=a(2),m=function(){var e=Object(s.a)(),t=Object(i.a)(e,1)[0];return Object(d.jsxs)(l.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(l.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, Iam Shounak"}),Object(d.jsx)(l.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full-Stack Developer & Machine Learning Enthusiast"}),Object(d.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"Shounak-Resume.pdf",href:"/files/Shounak Chattopadhyay resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(c.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(d.jsx)(l.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:"dark"===t?n:o,alt:"Developer"})})]})},j=a(48),x=a(47),g=a(18);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(x.b,{children:Object(d.jsx)(j.a,{})}),Object(d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(d.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(d.jsx)(g.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.90ed9f51.chunk.js.map