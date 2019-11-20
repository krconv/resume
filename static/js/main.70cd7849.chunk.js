(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(58)},46:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=(n(46),n(74)),l=n(76),s=n(72),m=n(37),u=n(60),d=n(75),p=n(71),h=n(73),g=Object(p.a)(function(e){return{paper:{padding:e.spacing(1)},title:{}}});var f=function(e){var t=e.title,n=e.children,a=g();return r.a.createElement(s.a,{className:a.paper},r.a.createElement(h.a,{variant:"h2",gutterBottom:!0},t),r.a.createElement(l.a,{children:n}))},E=n(35),w={overrides:{h1:{component:function(e){return r.a.createElement(h.a,Object.assign({gutterBottom:!0,variant:"h3"},e))}},h2:{component:function(e){return r.a.createElement(h.a,Object.assign({gutterBottom:!0,variant:"h4"},e))}},h3:{component:function(e){return r.a.createElement(h.a,Object.assign({gutterBottom:!0,variant:"h5"},e))}},h4:{component:function(e){return r.a.createElement(h.a,Object.assign({gutterBottom:!0,variant:"h6"},e))}},p:{component:function(e){return r.a.createElement(h.a,Object.assign({variant:"body1"},e))}},a:{component:n(77).a},li:{component:function(e){return r.a.createElement("li",null,r.a.createElement(h.a,Object.assign({component:"span"},e)))}}}};function y(e){return r.a.createElement(E.a,Object.assign({options:w},e))}var b=Object(p.a)(function(e){return{grid:{marginTop:e.spacing(1)},title:{display:"inline"},space:{marginRight:"3px"},where:{display:"inline"},short:{display:"inline"}}});var v=function(e){var t,n=e.title,a=e.where,o=e.when,i=void 0===o?{}:o,l=e.short,s=void 0!==l&&l,m=e.content,u=b();return i.from&&i.to?t="".concat(i.from," to ").concat(i.to):i.to&&(t=i.to),r.a.createElement(c.a,{container:!0,className:u.grid},r.a.createElement(c.a,{item:!0},r.a.createElement(h.a,{className:u.title,variant:"h3"},n),r.a.createElement("span",{className:u.space},"\xa0"),s?r.a.createElement(y,{className:u.short},m):r.a.createElement(h.a,{className:u.where,variant:"body1"},a)),r.a.createElement(c.a,{item:!0,xs:!0}),r.a.createElement(c.a,{item:!0},r.a.createElement(h.a,{className:u.when,variant:"body1"},t)),!s&&r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(y,null,m)))};var k=function(){return r.a.createElement(f,{title:"Education"},r.a.createElement(v,{title:"Computer Science",where:"Worcester Polytechnic Institute in Worcester, MA",when:{from:"Aug '15",to:"May '18"},content:"\n*Bachelor of Science in Computer Science*, 3.95 GPA \n\nResident Advisor, Pep Band, Student Support Network, Manufacturing Shop, Flag Football, Upsilon Pi Epsilon\n      "}))},S=Object(p.a)(function(e){return{title:{textAlign:"center",marginBottom:"4px"},subtitle:{textAlign:"center"}}});var A=function(){var e=S();return r.a.createElement(l.a,null,r.a.createElement(h.a,{className:e.title,variant:"h1"},"Kodey Converse"),r.a.createElement(h.a,{className:e.subtitle,variant:"subtitle1"},"kodey@krconv.com | github.com/krconv | linkedin.com/in/krconv"))};var P=function(){return r.a.createElement(f,{title:"Jobs"},r.a.createElement(v,{title:"Software Engineer",where:"128 Technology in Burlington, MA",when:{from:"May '18",to:"present"},content:"\nFull-time software engineer, currently on the Analytics team using primarily C++. \n\n- Led a multi-team project to upgrade the CentOS dependency and resolve security vulnerabilities\n- Setup a continuously-building Jenkins pipeline to address build problems 24 hours sooner than before\n- Wrote an Analytics stack framework for integration tests, now used by 50% of tests\n- Created and evaluated a concrete direction for the Analytics team that is shaping the team's future\n- Distributed tooling around ELK for recording performance metrics history during critical scaling effort\n        "}),r.a.createElement(v,{title:"IT Lead",where:"Come Alive Communications in West Grove, PA (Remote)",when:{from:"Dec '18",to:"present"},content:"\nPart-time technical consultant for a translation company.\n\n- Setup Plunet (a translation management system) in AWS EC2 for company training\n- Built features on top of Plunet to customize registration and include company brand\n- Currently designing and developing a client portal for facilitating orders and automating workflows\n        "}),r.a.createElement(v,{title:"Software Intern",where:"WPI UXDM Lab in Worcester, MA",when:{from:"Apr '17",to:"May '18"},content:"\nPart-time intern for a user-experience research lab specializing in eye-tracking.\n\n- Worked towards creating tools that would bring eye tracking into the WPI classroom\n-\tWrote an eye movement recording and analysis tool using C#, Vuejs and Tobii hardware SDK \n- Collaborated with researchers to gather feedback and continue to iterate on the software\n-\tManaged sprints, features, and testing using GitLab issues with CI to improve communication and consistency\n- Showed off eye-tracking tools and games at Dell EMC Eureka! to spark ideas with local middle-school students\n        "}),r.a.createElement(v,{title:"Software Intern",where:"Minim in Manchester, NH",when:{from:"Dec '17",to:"Jan '18"},content:"\nFull-time intern for a few weeks during a school winter break with a 7-person startup.\n\n- Developed a feature to capture additional network behavior data now used to identify new types of devices\n- Added a new router to the existing flashing tool using PhantomJS to support additional customer deployments\n        "}),r.a.createElement(v,{title:"Software Intern",where:"Jacobs Engineering in Nashua, NH",when:{from:"May '16",to:"Mar '17"},content:"\nFull-time intern on a team of 6 engineers building aerial mission planning software.\n\n- Operated autonomously to design, implement and test product code with C#, C++, WPF, and TFS\n-\tDesigned and built a standalone tool for determining whether compiled mission files were up to date\n       "}))};var C=function(){return r.a.createElement(f,{title:"Projects"},r.a.createElement(v,{title:"128T Dropped Packets",when:{to:"Jul '19"},content:"\nA tool in 128T for debugging routing decisions that cause packets to be dropped\n        ",short:!0}),r.a.createElement(v,{title:"LED Desk Sign",when:{to:"Aug '18"},content:"\nA 9x5 RGB sign that shows animations for the weather, notifications for lunch and more\n        ",short:!0}),r.a.createElement(v,{title:"Poverty Stoplight App",when:{to:"May '18"},content:"\nAn Android application for PS social workers to help families in poverty\n        ",short:!0}),r.a.createElement(v,{title:"RECFISH",when:{to:"May '18"},content:"\nA CFI protection instrumented at compile-time using LLVM for ARM real-time systems\n        ",short:!0}))},j=Object(u.a)(function(e){return{box:{padding:e.spacing(2,3)}}});var M=function(){var e=j();return r.a.createElement(l.a,{className:e.box},r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(A,null)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(k,null)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(P,null)),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(C,null))))},x=Object(m.a)({typography:{fontFamily:["Open Sans","Calibri","sans-serif"].join(","),h1:{fontSize:"2.8rem",fontWeight:"100"},h2:{fontSize:"1.5rem",fontWeight:"400"},h3:{fontSize:"1.1rem",fontWeight:"500"},body1:{fontWeight:"300"}},shape:{borderRadius:"1px"}}),N=Object(u.a)({page:{width:"8.5in"}});var O=function(){var e=N();return r.a.createElement(d.a,{theme:x},r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(l.a,{display:"none",displayPrint:"block"},r.a.createElement(M,{className:e.resume})),r.a.createElement(l.a,{display:"block",displayPrint:"none"},r.a.createElement(s.a,{className:e.page,display:"block",displayPrint:"none"},r.a.createElement(M,{className:e.resume})))))};i.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.70cd7849.chunk.js.map