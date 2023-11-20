import{g as Lt,s as Se,c as W,u as z,d as j,e as G,f as st,h as me,i as be,j as Ot,n as rt}from"../chunks/scheduler.c9e353ad.js";import{S as xe,i as Le,g as k,s as Q,h as T,j as D,c as J,f as P,k as v,a as H,x as M,d as E,p as K,t as O,b as Z,l as He,y as Pt,m as at,n as ct,r as ft,u as ut,v as dt,w as ht,z as gt}from"../chunks/index.21be2d91.js";import{w as mt,r as kt}from"../chunks/index.e5fa37f8.js";const Tt=mt(void 0),Ee={};function Me(t){return t==="local"?localStorage:sessionStorage}function Oe(t,e,n){const o=(n==null?void 0:n.serializer)??JSON,s=(n==null?void 0:n.storage)??"local";function l(i,r){Me(s).setItem(i,o.stringify(r))}if(!Ee[t]){const i=mt(e,d=>{const b=Me(s).getItem(t);b&&d(o.parse(b));{const g=w=>{w.key===t&&d(w.newValue?o.parse(w.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:r,set:a}=i;Ee[t]={set(d){l(t,d),a(d)},update(d){const b=d(Lt(i));l(t,b),a(b)},subscribe:r}}return Ee[t]}Oe("modeOsPrefers",!1);Oe("modeUserPrefers",void 0);Oe("modeCurrent",!1);const bt="(prefers-reduced-motion: reduce)";function Dt(){return window.matchMedia(bt).matches}kt(Dt(),t=>{{const e=o=>{t(o.matches)},n=window.matchMedia(bt);return n.addEventListener("change",e),()=>{n.removeEventListener("change",e)}}});const Ft=t=>({}),Ve=t=>({}),Ht=t=>({}),Be=t=>({}),Mt=t=>({}),Ie=t=>({});function Ne(t){let e,n,o;const s=t[22].lead,l=W(s,t,t[21],Ie);return{c(){e=k("div"),l&&l.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=D(e);l&&l.l(r),r.forEach(P),this.h()},h(){v(e,"class",n="app-bar-slot-lead "+t[4])},m(i,r){H(i,e,r),l&&l.m(e,null),o=!0},p(i,r){l&&l.p&&(!o||r&2097152)&&z(l,s,i,i[21],o?G(s,i[21],r,Mt):j(i[21]),Ie),(!o||r&16&&n!==(n="app-bar-slot-lead "+i[4]))&&v(e,"class",n)},i(i){o||(E(l,i),o=!0)},o(i){O(l,i),o=!1},d(i){i&&P(e),l&&l.d(i)}}}function We(t){let e,n,o;const s=t[22].trail,l=W(s,t,t[21],Be);return{c(){e=k("div"),l&&l.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=D(e);l&&l.l(r),r.forEach(P),this.h()},h(){v(e,"class",n="app-bar-slot-trail "+t[2])},m(i,r){H(i,e,r),l&&l.m(e,null),o=!0},p(i,r){l&&l.p&&(!o||r&2097152)&&z(l,s,i,i[21],o?G(s,i[21],r,Ht):j(i[21]),Be),(!o||r&4&&n!==(n="app-bar-slot-trail "+i[2]))&&v(e,"class",n)},i(i){o||(E(l,i),o=!0)},o(i){O(l,i),o=!1},d(i){i&&P(e),l&&l.d(i)}}}function ze(t){let e,n,o;const s=t[22].headline,l=W(s,t,t[21],Ve);return{c(){e=k("div"),l&&l.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=D(e);l&&l.l(r),r.forEach(P),this.h()},h(){v(e,"class",n="app-bar-row-headline "+t[5])},m(i,r){H(i,e,r),l&&l.m(e,null),o=!0},p(i,r){l&&l.p&&(!o||r&2097152)&&z(l,s,i,i[21],o?G(s,i[21],r,Ft):j(i[21]),Ve),(!o||r&32&&n!==(n="app-bar-row-headline "+i[5]))&&v(e,"class",n)},i(i){o||(E(l,i),o=!0)},o(i){O(l,i),o=!1},d(i){i&&P(e),l&&l.d(i)}}}function Vt(t){let e,n,o,s,l,i,r,a,d,b,g=t[8].lead&&Ne(t);const w=t[22].default,u=W(w,t,t[21],null);let h=t[8].trail&&We(t),p=t[8].headline&&ze(t);return{c(){e=k("div"),n=k("div"),g&&g.c(),o=Q(),s=k("div"),u&&u.c(),i=Q(),h&&h.c(),a=Q(),p&&p.c(),this.h()},l(c){e=T(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var f=D(e);n=T(f,"DIV",{class:!0});var _=D(n);g&&g.l(_),o=J(_),s=T(_,"DIV",{class:!0});var S=D(s);u&&u.l(S),S.forEach(P),i=J(_),h&&h.l(_),_.forEach(P),a=J(f),p&&p.l(f),f.forEach(P),this.h()},h(){v(s,"class",l="app-bar-slot-default "+t[3]),v(n,"class",r="app-bar-row-main "+t[6]),v(e,"class",d="app-bar "+t[7]),v(e,"data-testid","app-bar"),v(e,"role","toolbar"),v(e,"aria-label",t[0]),v(e,"aria-labelledby",t[1])},m(c,f){H(c,e,f),M(e,n),g&&g.m(n,null),M(n,o),M(n,s),u&&u.m(s,null),M(n,i),h&&h.m(n,null),M(e,a),p&&p.m(e,null),b=!0},p(c,[f]){c[8].lead?g?(g.p(c,f),f&256&&E(g,1)):(g=Ne(c),g.c(),E(g,1),g.m(n,o)):g&&(K(),O(g,1,1,()=>{g=null}),Z()),u&&u.p&&(!b||f&2097152)&&z(u,w,c,c[21],b?G(w,c[21],f,null):j(c[21]),null),(!b||f&8&&l!==(l="app-bar-slot-default "+c[3]))&&v(s,"class",l),c[8].trail?h?(h.p(c,f),f&256&&E(h,1)):(h=We(c),h.c(),E(h,1),h.m(n,null)):h&&(K(),O(h,1,1,()=>{h=null}),Z()),(!b||f&64&&r!==(r="app-bar-row-main "+c[6]))&&v(n,"class",r),c[8].headline?p?(p.p(c,f),f&256&&E(p,1)):(p=ze(c),p.c(),E(p,1),p.m(e,null)):p&&(K(),O(p,1,1,()=>{p=null}),Z()),(!b||f&128&&d!==(d="app-bar "+c[7]))&&v(e,"class",d),(!b||f&1)&&v(e,"aria-label",c[0]),(!b||f&2)&&v(e,"aria-labelledby",c[1])},i(c){b||(E(g),E(u,c),E(h),E(p),b=!0)},o(c){O(g),O(u,c),O(h),O(p),b=!1},d(c){c&&P(e),g&&g.d(),u&&u.d(c),h&&h.d(),p&&p.d()}}}const Bt="flex flex-col",It="grid items-center",Nt="",Wt="flex-none flex justify-between items-center",zt="flex-auto",jt="flex-none flex items-center space-x-4";function Gt(t,e,n){let o,s,l,i,r,a,{$$slots:d={},$$scope:b}=e;const g=st(d);let{background:w="bg-surface-100-800-token"}=e,{border:u=""}=e,{padding:h="p-4"}=e,{shadow:p=""}=e,{spacing:c="space-y-4"}=e,{gridColumns:f="grid-cols-[auto_1fr_auto]"}=e,{gap:_="gap-4"}=e,{regionRowMain:S=""}=e,{regionRowHeadline:x=""}=e,{slotLead:y=""}=e,{slotDefault:A=""}=e,{slotTrail:C=""}=e,{label:m=""}=e,{labelledby:L=""}=e;return t.$$set=R=>{n(23,e=me(me({},e),be(R))),"background"in R&&n(9,w=R.background),"border"in R&&n(10,u=R.border),"padding"in R&&n(11,h=R.padding),"shadow"in R&&n(12,p=R.shadow),"spacing"in R&&n(13,c=R.spacing),"gridColumns"in R&&n(14,f=R.gridColumns),"gap"in R&&n(15,_=R.gap),"regionRowMain"in R&&n(16,S=R.regionRowMain),"regionRowHeadline"in R&&n(17,x=R.regionRowHeadline),"slotLead"in R&&n(18,y=R.slotLead),"slotDefault"in R&&n(19,A=R.slotDefault),"slotTrail"in R&&n(20,C=R.slotTrail),"label"in R&&n(0,m=R.label),"labelledby"in R&&n(1,L=R.labelledby),"$$scope"in R&&n(21,b=R.$$scope)},t.$$.update=()=>{n(7,o=`${Bt} ${w} ${u} ${c} ${h} ${p} ${e.class??""}`),t.$$.dirty&114688&&n(6,s=`${It} ${f} ${_} ${S}`),t.$$.dirty&131072&&n(5,l=`${Nt} ${x}`),t.$$.dirty&262144&&n(4,i=`${Wt} ${y}`),t.$$.dirty&524288&&n(3,r=`${zt} ${A}`),t.$$.dirty&1048576&&n(2,a=`${jt} ${C}`)},e=be(e),[m,L,a,r,i,l,s,o,g,w,u,h,p,c,f,_,S,x,y,A,C,b,d]}class Xt extends xe{constructor(e){super(),Le(this,e,Gt,Vt,Se,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Yt=t=>({}),je=t=>({}),Ut=t=>({}),Ge=t=>({}),qt=t=>({}),Xe=t=>({}),Qt=t=>({}),Ye=t=>({}),Jt=t=>({}),Ue=t=>({}),Kt=t=>({}),qe=t=>({});function Qe(t){let e,n,o;const s=t[19].header,l=W(s,t,t[18],qe);return{c(){e=k("header"),l&&l.c(),this.h()},l(i){e=T(i,"HEADER",{id:!0,class:!0});var r=D(e);l&&l.l(r),r.forEach(P),this.h()},h(){v(e,"id","shell-header"),v(e,"class",n="flex-none "+t[8])},m(i,r){H(i,e,r),l&&l.m(e,null),o=!0},p(i,r){l&&l.p&&(!o||r&262144)&&z(l,s,i,i[18],o?G(s,i[18],r,Kt):j(i[18]),qe),(!o||r&256&&n!==(n="flex-none "+i[8]))&&v(e,"class",n)},i(i){o||(E(l,i),o=!0)},o(i){O(l,i),o=!1},d(i){i&&P(e),l&&l.d(i)}}}function Je(t){let e,n;const o=t[19].sidebarLeft,s=W(o,t,t[18],Ue);return{c(){e=k("aside"),s&&s.c(),this.h()},l(l){e=T(l,"ASIDE",{id:!0,class:!0});var i=D(e);s&&s.l(i),i.forEach(P),this.h()},h(){v(e,"id","sidebar-left"),v(e,"class",t[7])},m(l,i){H(l,e,i),s&&s.m(e,null),n=!0},p(l,i){s&&s.p&&(!n||i&262144)&&z(s,o,l,l[18],n?G(o,l[18],i,Jt):j(l[18]),Ue),(!n||i&128)&&v(e,"class",l[7])},i(l){n||(E(s,l),n=!0)},o(l){O(s,l),n=!1},d(l){l&&P(e),s&&s.d(l)}}}function Ke(t){let e,n,o;const s=t[19].pageHeader,l=W(s,t,t[18],Ye),i=l||Zt();return{c(){e=k("header"),i&&i.c(),this.h()},l(r){e=T(r,"HEADER",{id:!0,class:!0});var a=D(e);i&&i.l(a),a.forEach(P),this.h()},h(){v(e,"id","page-header"),v(e,"class",n="flex-none "+t[5])},m(r,a){H(r,e,a),i&&i.m(e,null),o=!0},p(r,a){l&&l.p&&(!o||a&262144)&&z(l,s,r,r[18],o?G(s,r[18],a,Qt):j(r[18]),Ye),(!o||a&32&&n!==(n="flex-none "+r[5]))&&v(e,"class",n)},i(r){o||(E(i,r),o=!0)},o(r){O(i,r),o=!1},d(r){r&&P(e),i&&i.d(r)}}}function Zt(t){let e;return{c(){e=at("(slot:header)")},l(n){e=ct(n,"(slot:header)")},m(n,o){H(n,e,o)},d(n){n&&P(e)}}}function Ze(t){let e,n,o;const s=t[19].pageFooter,l=W(s,t,t[18],Xe),i=l||$t();return{c(){e=k("footer"),i&&i.c(),this.h()},l(r){e=T(r,"FOOTER",{id:!0,class:!0});var a=D(e);i&&i.l(a),a.forEach(P),this.h()},h(){v(e,"id","page-footer"),v(e,"class",n="flex-none "+t[3])},m(r,a){H(r,e,a),i&&i.m(e,null),o=!0},p(r,a){l&&l.p&&(!o||a&262144)&&z(l,s,r,r[18],o?G(s,r[18],a,qt):j(r[18]),Xe),(!o||a&8&&n!==(n="flex-none "+r[3]))&&v(e,"class",n)},i(r){o||(E(i,r),o=!0)},o(r){O(i,r),o=!1},d(r){r&&P(e),i&&i.d(r)}}}function $t(t){let e;return{c(){e=at("(slot:footer)")},l(n){e=ct(n,"(slot:footer)")},m(n,o){H(n,e,o)},d(n){n&&P(e)}}}function $e(t){let e,n;const o=t[19].sidebarRight,s=W(o,t,t[18],Ge);return{c(){e=k("aside"),s&&s.c(),this.h()},l(l){e=T(l,"ASIDE",{id:!0,class:!0});var i=D(e);s&&s.l(i),i.forEach(P),this.h()},h(){v(e,"id","sidebar-right"),v(e,"class",t[6])},m(l,i){H(l,e,i),s&&s.m(e,null),n=!0},p(l,i){s&&s.p&&(!n||i&262144)&&z(s,o,l,l[18],n?G(o,l[18],i,Ut):j(l[18]),Ge),(!n||i&64)&&v(e,"class",l[6])},i(l){n||(E(s,l),n=!0)},o(l){O(s,l),n=!1},d(l){l&&P(e),s&&s.d(l)}}}function et(t){let e,n,o;const s=t[19].footer,l=W(s,t,t[18],je);return{c(){e=k("footer"),l&&l.c(),this.h()},l(i){e=T(i,"FOOTER",{id:!0,class:!0});var r=D(e);l&&l.l(r),r.forEach(P),this.h()},h(){v(e,"id","shell-footer"),v(e,"class",n="flex-none "+t[2])},m(i,r){H(i,e,r),l&&l.m(e,null),o=!0},p(i,r){l&&l.p&&(!o||r&262144)&&z(l,s,i,i[18],o?G(s,i[18],r,Yt):j(i[18]),je),(!o||r&4&&n!==(n="flex-none "+i[2]))&&v(e,"class",n)},i(i){o||(E(l,i),o=!0)},o(i){O(l,i),o=!1},d(i){i&&P(e),l&&l.d(i)}}}function en(t){let e,n,o,s,l,i,r,a,d,b,g,w,u,h,p,c=t[10].header&&Qe(t),f=t[10].sidebarLeft&&Je(t),_=t[10].pageHeader&&Ke(t);const S=t[19].default,x=W(S,t,t[18],null);let y=t[10].pageFooter&&Ze(t),A=t[10].sidebarRight&&$e(t),C=t[10].footer&&et(t);return{c(){e=k("div"),c&&c.c(),n=Q(),o=k("div"),f&&f.c(),s=Q(),l=k("div"),_&&_.c(),i=Q(),r=k("main"),x&&x.c(),d=Q(),y&&y.c(),g=Q(),A&&A.c(),w=Q(),C&&C.c(),this.h()},l(m){e=T(m,"DIV",{id:!0,class:!0,"data-testid":!0});var L=D(e);c&&c.l(L),n=J(L),o=T(L,"DIV",{class:!0});var R=D(o);f&&f.l(R),s=J(R),l=T(R,"DIV",{id:!0,class:!0});var I=D(l);_&&_.l(I),i=J(I),r=T(I,"MAIN",{id:!0,class:!0});var F=D(r);x&&x.l(F),F.forEach(P),d=J(I),y&&y.l(I),I.forEach(P),g=J(R),A&&A.l(R),R.forEach(P),w=J(L),C&&C.l(L),L.forEach(P),this.h()},h(){v(r,"id","page-content"),v(r,"class",a="flex-auto "+t[4]),v(l,"id","page"),v(l,"class",b=t[1]+" "+tt),He(l,"scrollbar-gutter",t[0]),v(o,"class","flex-auto "+nn),v(e,"id","appShell"),v(e,"class",t[9]),v(e,"data-testid","app-shell")},m(m,L){H(m,e,L),c&&c.m(e,null),M(e,n),M(e,o),f&&f.m(o,null),M(o,s),M(o,l),_&&_.m(l,null),M(l,i),M(l,r),x&&x.m(r,null),M(l,d),y&&y.m(l,null),M(o,g),A&&A.m(o,null),M(e,w),C&&C.m(e,null),u=!0,h||(p=Pt(l,"scroll",t[20]),h=!0)},p(m,[L]){m[10].header?c?(c.p(m,L),L&1024&&E(c,1)):(c=Qe(m),c.c(),E(c,1),c.m(e,n)):c&&(K(),O(c,1,1,()=>{c=null}),Z()),m[10].sidebarLeft?f?(f.p(m,L),L&1024&&E(f,1)):(f=Je(m),f.c(),E(f,1),f.m(o,s)):f&&(K(),O(f,1,1,()=>{f=null}),Z()),m[10].pageHeader?_?(_.p(m,L),L&1024&&E(_,1)):(_=Ke(m),_.c(),E(_,1),_.m(l,i)):_&&(K(),O(_,1,1,()=>{_=null}),Z()),x&&x.p&&(!u||L&262144)&&z(x,S,m,m[18],u?G(S,m[18],L,null):j(m[18]),null),(!u||L&16&&a!==(a="flex-auto "+m[4]))&&v(r,"class",a),m[10].pageFooter?y?(y.p(m,L),L&1024&&E(y,1)):(y=Ze(m),y.c(),E(y,1),y.m(l,null)):y&&(K(),O(y,1,1,()=>{y=null}),Z()),(!u||L&2&&b!==(b=m[1]+" "+tt))&&v(l,"class",b),L&1&&He(l,"scrollbar-gutter",m[0]),m[10].sidebarRight?A?(A.p(m,L),L&1024&&E(A,1)):(A=$e(m),A.c(),E(A,1),A.m(o,null)):A&&(K(),O(A,1,1,()=>{A=null}),Z()),m[10].footer?C?(C.p(m,L),L&1024&&E(C,1)):(C=et(m),C.c(),E(C,1),C.m(e,null)):C&&(K(),O(C,1,1,()=>{C=null}),Z()),(!u||L&512)&&v(e,"class",m[9])},i(m){u||(E(c),E(f),E(_),E(x,m),E(y),E(A),E(C),u=!0)},o(m){O(c),O(f),O(_),O(x,m),O(y),O(A),O(C),u=!1},d(m){m&&P(e),c&&c.d(),f&&f.d(),_&&_.d(),x&&x.d(m),y&&y.d(),A&&A.d(),C&&C.d(),h=!1,p()}}}const tn="w-full h-full flex flex-col overflow-hidden",nn="w-full h-full flex overflow-hidden",tt="flex-1 overflow-x-hidden flex flex-col",on="flex-none overflow-x-hidden overflow-y-auto",ln="flex-none overflow-x-hidden overflow-y-auto";function sn(t,e,n){let o,s,l,i,r,a,d,b,{$$slots:g={},$$scope:w}=e;const u=st(g);let{scrollbarGutter:h="auto"}=e,{regionPage:p=""}=e,{slotHeader:c="z-10"}=e,{slotSidebarLeft:f="w-auto"}=e,{slotSidebarRight:_="w-auto"}=e,{slotPageHeader:S=""}=e,{slotPageContent:x=""}=e,{slotPageFooter:y=""}=e,{slotFooter:A=""}=e;function C(m){Ot.call(this,t,m)}return t.$$set=m=>{n(21,e=me(me({},e),be(m))),"scrollbarGutter"in m&&n(0,h=m.scrollbarGutter),"regionPage"in m&&n(1,p=m.regionPage),"slotHeader"in m&&n(11,c=m.slotHeader),"slotSidebarLeft"in m&&n(12,f=m.slotSidebarLeft),"slotSidebarRight"in m&&n(13,_=m.slotSidebarRight),"slotPageHeader"in m&&n(14,S=m.slotPageHeader),"slotPageContent"in m&&n(15,x=m.slotPageContent),"slotPageFooter"in m&&n(16,y=m.slotPageFooter),"slotFooter"in m&&n(17,A=m.slotFooter),"$$scope"in m&&n(18,w=m.$$scope)},t.$$.update=()=>{n(9,o=`${tn} ${e.class??""}`),t.$$.dirty&2048&&n(8,s=`${c}`),t.$$.dirty&4096&&n(7,l=`${on} ${f}`),t.$$.dirty&8192&&n(6,i=`${ln} ${_}`),t.$$.dirty&16384&&n(5,r=`${S}`),t.$$.dirty&32768&&n(4,a=`${x}`),t.$$.dirty&65536&&n(3,d=`${y}`),t.$$.dirty&131072&&n(2,b=`${A}`)},e=be(e),[h,p,b,d,a,r,i,l,s,o,u,c,f,_,S,x,y,A,w,g,C]}class rn extends xe{constructor(e){super(),Le(this,e,sn,en,Se,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}const re=Math.min,oe=Math.max,pe=Math.round,ge=Math.floor,te=t=>({x:t,y:t}),an={left:"right",right:"left",bottom:"top",top:"bottom"},cn={start:"end",end:"start"};function Ae(t,e,n){return oe(t,re(e,n))}function ue(t,e){return typeof t=="function"?t(e):t}function le(t){return t.split("-")[0]}function de(t){return t.split("-")[1]}function pt(t){return t==="x"?"y":"x"}function Pe(t){return t==="y"?"height":"width"}function we(t){return["top","bottom"].includes(le(t))?"y":"x"}function ke(t){return pt(we(t))}function fn(t,e,n){n===void 0&&(n=!1);const o=de(t),s=ke(t),l=Pe(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(i=_e(i)),[i,_e(i)]}function un(t){const e=_e(t);return[Ce(t),e,Ce(e)]}function Ce(t){return t.replace(/start|end/g,e=>cn[e])}function dn(t,e,n){const o=["left","right"],s=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?l:i;default:return[]}}function hn(t,e,n,o){const s=de(t);let l=dn(le(t),n==="start",o);return s&&(l=l.map(i=>i+"-"+s),e&&(l=l.concat(l.map(Ce)))),l}function _e(t){return t.replace(/left|right|bottom|top/g,e=>an[e])}function gn(t){return{top:0,right:0,bottom:0,left:0,...t}}function _t(t){return typeof t!="number"?gn(t):{top:t,right:t,bottom:t,left:t}}function ve(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function nt(t,e,n){let{reference:o,floating:s}=t;const l=we(e),i=ke(e),r=Pe(i),a=le(e),d=l==="y",b=o.x+o.width/2-s.width/2,g=o.y+o.height/2-s.height/2,w=o[r]/2-s[r]/2;let u;switch(a){case"top":u={x:b,y:o.y-s.height};break;case"bottom":u={x:b,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:g};break;case"left":u={x:o.x-s.width,y:g};break;default:u={x:o.x,y:o.y}}switch(de(e)){case"start":u[i]-=w*(n&&d?-1:1);break;case"end":u[i]+=w*(n&&d?-1:1);break}return u}const mn=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:l=[],platform:i}=n,r=l.filter(Boolean),a=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:b,y:g}=nt(d,o,a),w=o,u={},h=0;for(let p=0;p<r.length;p++){const{name:c,fn:f}=r[p],{x:_,y:S,data:x,reset:y}=await f({x:b,y:g,initialPlacement:o,placement:w,strategy:s,middlewareData:u,rects:d,platform:i,elements:{reference:t,floating:e}});if(b=_??b,g=S??g,u={...u,[c]:{...u[c],...x}},y&&h<=50){h++,typeof y=="object"&&(y.placement&&(w=y.placement),y.rects&&(d=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):y.rects),{x:b,y:g}=nt(d,w,a)),p=-1;continue}}return{x:b,y:g,placement:w,strategy:s,middlewareData:u}};async function vt(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:l,rects:i,elements:r,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:b="viewport",elementContext:g="floating",altBoundary:w=!1,padding:u=0}=ue(e,t),h=_t(u),c=r[w?g==="floating"?"reference":"floating":g],f=ve(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(c)))==null||n?c:c.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(r.floating)),boundary:d,rootBoundary:b,strategy:a})),_=g==="floating"?{...i.floating,x:o,y:s}:i.reference,S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(r.floating)),x=await(l.isElement==null?void 0:l.isElement(S))?await(l.getScale==null?void 0:l.getScale(S))||{x:1,y:1}:{x:1,y:1},y=ve(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:S,strategy:a}):_);return{top:(f.top-y.top+h.top)/x.y,bottom:(y.bottom-f.bottom+h.bottom)/x.y,left:(f.left-y.left+h.left)/x.x,right:(y.right-f.right+h.right)/x.x}}const bn=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:s,rects:l,platform:i,elements:r,middlewareData:a}=e,{element:d,padding:b=0}=ue(t,e)||{};if(d==null)return{};const g=_t(b),w={x:n,y:o},u=ke(s),h=Pe(u),p=await i.getDimensions(d),c=u==="y",f=c?"top":"left",_=c?"bottom":"right",S=c?"clientHeight":"clientWidth",x=l.reference[h]+l.reference[u]-w[u]-l.floating[h],y=w[u]-l.reference[u],A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let C=A?A[S]:0;(!C||!await(i.isElement==null?void 0:i.isElement(A)))&&(C=r.floating[S]||l.floating[h]);const m=x/2-y/2,L=C/2-p[h]/2-1,R=re(g[f],L),I=re(g[_],L),F=R,ce=C-p[h]-I,V=C/2-p[h]/2+m,X=Ae(F,V,ce),Y=!a.arrow&&de(s)!=null&&V!=X&&l.reference[h]/2-(V<F?R:I)-p[h]/2<0,q=Y?V<F?V-F:V-ce:0;return{[u]:w[u]+q,data:{[u]:X,centerOffset:V-X-q,...Y&&{alignmentOffset:q}},reset:Y}}}),pn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:l,rects:i,initialPlacement:r,platform:a,elements:d}=e,{mainAxis:b=!0,crossAxis:g=!0,fallbackPlacements:w,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...c}=ue(t,e);if((n=l.arrow)!=null&&n.alignmentOffset)return{};const f=le(s),_=le(r)===r,S=await(a.isRTL==null?void 0:a.isRTL(d.floating)),x=w||(_||!p?[_e(r)]:un(r));!w&&h!=="none"&&x.push(...hn(r,p,h,S));const y=[r,...x],A=await vt(e,c),C=[];let m=((o=l.flip)==null?void 0:o.overflows)||[];if(b&&C.push(A[f]),g){const F=fn(s,i,S);C.push(A[F[0]],A[F[1]])}if(m=[...m,{placement:s,overflows:C}],!C.every(F=>F<=0)){var L,R;const F=(((L=l.flip)==null?void 0:L.index)||0)+1,ce=y[F];if(ce)return{data:{index:F,overflows:m},reset:{placement:ce}};let V=(R=m.filter(X=>X.overflows[0]<=0).sort((X,Y)=>X.overflows[1]-Y.overflows[1])[0])==null?void 0:R.placement;if(!V)switch(u){case"bestFit":{var I;const X=(I=m.map(Y=>[Y.placement,Y.overflows.filter(q=>q>0).reduce((q,xt)=>q+xt,0)]).sort((Y,q)=>Y[1]-q[1])[0])==null?void 0:I[0];X&&(V=X);break}case"initialPlacement":V=r;break}if(s!==V)return{reset:{placement:V}}}return{}}}};async function _n(t,e){const{placement:n,platform:o,elements:s}=t,l=await(o.isRTL==null?void 0:o.isRTL(s.floating)),i=le(n),r=de(n),a=we(n)==="y",d=["left","top"].includes(i)?-1:1,b=l&&a?-1:1,g=ue(e,t);let{mainAxis:w,crossAxis:u,alignmentAxis:h}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return r&&typeof h=="number"&&(u=r==="end"?h*-1:h),a?{x:u*b,y:w*d}:{x:w*d,y:u*b}}const vn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,s=await _n(e,t);return{x:n+s.x,y:o+s.y,data:s}}}},wn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:l=!0,crossAxis:i=!1,limiter:r={fn:c=>{let{x:f,y:_}=c;return{x:f,y:_}}},...a}=ue(t,e),d={x:n,y:o},b=await vt(e,a),g=we(le(s)),w=pt(g);let u=d[w],h=d[g];if(l){const c=w==="y"?"top":"left",f=w==="y"?"bottom":"right",_=u+b[c],S=u-b[f];u=Ae(_,u,S)}if(i){const c=g==="y"?"top":"left",f=g==="y"?"bottom":"right",_=h+b[c],S=h-b[f];h=Ae(_,h,S)}const p=r.fn({...e,[w]:u,[g]:h});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function ne(t){return wt(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ee(t){var e;return(e=(wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wt(t){return t instanceof Node||t instanceof B(t).Node}function $(t){return t instanceof Element||t instanceof B(t).Element}function U(t){return t instanceof HTMLElement||t instanceof B(t).HTMLElement}function ot(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof B(t).ShadowRoot}function he(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function yn(t){return["table","td","th"].includes(ne(t))}function Te(t){const e=De(),n=N(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Rn(t){let e=ae(t);for(;U(e)&&!ye(e);){if(Te(e))return e;e=ae(e)}return null}function De(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(t){return["html","body","#document"].includes(ne(t))}function N(t){return B(t).getComputedStyle(t)}function Re(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(t){if(ne(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ot(t)&&t.host||ee(t);return ot(e)?e.host:e}function yt(t){const e=ae(t);return ye(e)?t.ownerDocument?t.ownerDocument.body:t.body:U(e)&&he(e)?e:yt(e)}function fe(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=yt(t),l=s===((o=t.ownerDocument)==null?void 0:o.body),i=B(s);return l?e.concat(i,i.visualViewport||[],he(s)?s:[],i.frameElement&&n?fe(i.frameElement):[]):e.concat(s,fe(s,[],n))}function Rt(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=U(t),l=s?t.offsetWidth:n,i=s?t.offsetHeight:o,r=pe(n)!==l||pe(o)!==i;return r&&(n=l,o=i),{width:n,height:o,$:r}}function Fe(t){return $(t)?t:t.contextElement}function se(t){const e=Fe(t);if(!U(e))return te(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:l}=Rt(e);let i=(l?pe(n.width):n.width)/o,r=(l?pe(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!r||!Number.isFinite(r))&&(r=1),{x:i,y:r}}const En=te(0);function Et(t){const e=B(t);return!De()||!e.visualViewport?En:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function An(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==B(t)?!1:e}function ie(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),l=Fe(t);let i=te(1);e&&(o?$(o)&&(i=se(o)):i=se(t));const r=An(l,n,o)?Et(l):te(0);let a=(s.left+r.x)/i.x,d=(s.top+r.y)/i.y,b=s.width/i.x,g=s.height/i.y;if(l){const w=B(l),u=o&&$(o)?B(o):o;let h=w.frameElement;for(;h&&o&&u!==w;){const p=se(h),c=h.getBoundingClientRect(),f=N(h),_=c.left+(h.clientLeft+parseFloat(f.paddingLeft))*p.x,S=c.top+(h.clientTop+parseFloat(f.paddingTop))*p.y;a*=p.x,d*=p.y,b*=p.x,g*=p.y,a+=_,d+=S,h=B(h).frameElement}}return ve({width:b,height:g,x:a,y:d})}function Cn(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=U(n),l=ee(n);if(n===l)return e;let i={scrollLeft:0,scrollTop:0},r=te(1);const a=te(0);if((s||!s&&o!=="fixed")&&((ne(n)!=="body"||he(l))&&(i=Re(n)),U(n))){const d=ie(n);r=se(n),a.x=d.x+n.clientLeft,a.y=d.y+n.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-i.scrollLeft*r.x+a.x,y:e.y*r.y-i.scrollTop*r.y+a.y}}function Sn(t){return Array.from(t.getClientRects())}function At(t){return ie(ee(t)).left+Re(t).scrollLeft}function xn(t){const e=ee(t),n=Re(t),o=t.ownerDocument.body,s=oe(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=oe(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+At(t);const r=-n.scrollTop;return N(o).direction==="rtl"&&(i+=oe(e.clientWidth,o.clientWidth)-s),{width:s,height:l,x:i,y:r}}function Ln(t,e){const n=B(t),o=ee(t),s=n.visualViewport;let l=o.clientWidth,i=o.clientHeight,r=0,a=0;if(s){l=s.width,i=s.height;const d=De();(!d||d&&e==="fixed")&&(r=s.offsetLeft,a=s.offsetTop)}return{width:l,height:i,x:r,y:a}}function On(t,e){const n=ie(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,l=U(t)?se(t):te(1),i=t.clientWidth*l.x,r=t.clientHeight*l.y,a=s*l.x,d=o*l.y;return{width:i,height:r,x:a,y:d}}function lt(t,e,n){let o;if(e==="viewport")o=Ln(t,n);else if(e==="document")o=xn(ee(t));else if($(e))o=On(e,n);else{const s=Et(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return ve(o)}function Ct(t,e){const n=ae(t);return n===e||!$(n)||ye(n)?!1:N(n).position==="fixed"||Ct(n,e)}function Pn(t,e){const n=e.get(t);if(n)return n;let o=fe(t,[],!1).filter(r=>$(r)&&ne(r)!=="body"),s=null;const l=N(t).position==="fixed";let i=l?ae(t):t;for(;$(i)&&!ye(i);){const r=N(i),a=Te(i);!a&&r.position==="fixed"&&(s=null),(l?!a&&!s:!a&&r.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||he(i)&&!a&&Ct(t,i))?o=o.filter(b=>b!==i):s=r,i=ae(i)}return e.set(t,o),o}function kn(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?Pn(e,this._c):[].concat(n),o],r=i[0],a=i.reduce((d,b)=>{const g=lt(e,b,s);return d.top=oe(g.top,d.top),d.right=re(g.right,d.right),d.bottom=re(g.bottom,d.bottom),d.left=oe(g.left,d.left),d},lt(e,r,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Tn(t){return Rt(t)}function Dn(t,e,n){const o=U(e),s=ee(e),l=n==="fixed",i=ie(t,!0,l,e);let r={scrollLeft:0,scrollTop:0};const a=te(0);if(o||!o&&!l)if((ne(e)!=="body"||he(s))&&(r=Re(e)),o){const d=ie(e,!0,l,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else s&&(a.x=At(s));return{x:i.left+r.scrollLeft-a.x,y:i.top+r.scrollTop-a.y,width:i.width,height:i.height}}function it(t,e){return!U(t)||N(t).position==="fixed"?null:e?e(t):t.offsetParent}function St(t,e){const n=B(t);if(!U(t))return n;let o=it(t,e);for(;o&&yn(o)&&N(o).position==="static";)o=it(o,e);return o&&(ne(o)==="html"||ne(o)==="body"&&N(o).position==="static"&&!Te(o))?n:o||Rn(t)||n}const Fn=async function(t){let{reference:e,floating:n,strategy:o}=t;const s=this.getOffsetParent||St,l=this.getDimensions;return{reference:Dn(e,await s(n),o),floating:{x:0,y:0,...await l(n)}}};function Hn(t){return N(t).direction==="rtl"}const Mn={convertOffsetParentRelativeRectToViewportRelativeRect:Cn,getDocumentElement:ee,getClippingRect:kn,getOffsetParent:St,getElementRects:Fn,getClientRects:Sn,getDimensions:Tn,getScale:se,isElement:$,isRTL:Hn};function Vn(t,e){let n=null,o;const s=ee(t);function l(){clearTimeout(o),n&&n.disconnect(),n=null}function i(r,a){r===void 0&&(r=!1),a===void 0&&(a=1),l();const{left:d,top:b,width:g,height:w}=t.getBoundingClientRect();if(r||e(),!g||!w)return;const u=ge(b),h=ge(s.clientWidth-(d+g)),p=ge(s.clientHeight-(b+w)),c=ge(d),_={rootMargin:-u+"px "+-h+"px "+-p+"px "+-c+"px",threshold:oe(0,re(1,a))||1};let S=!0;function x(y){const A=y[0].intersectionRatio;if(A!==a){if(!S)return i();A?i(!1,A):o=setTimeout(()=>{i(!1,1e-7)},100)}S=!1}try{n=new IntersectionObserver(x,{..._,root:s.ownerDocument})}catch{n=new IntersectionObserver(x,_)}n.observe(t)}return i(!0),l}function Bn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:r=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,d=Fe(t),b=s||l?[...d?fe(d):[],...fe(e)]:[];b.forEach(f=>{s&&f.addEventListener("scroll",n,{passive:!0}),l&&f.addEventListener("resize",n)});const g=d&&r?Vn(d,n):null;let w=-1,u=null;i&&(u=new ResizeObserver(f=>{let[_]=f;_&&_.target===d&&u&&(u.unobserve(e),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{u&&u.observe(e)})),n()}),d&&!a&&u.observe(d),u.observe(e));let h,p=a?ie(t):null;a&&c();function c(){const f=ie(t);p&&(f.x!==p.x||f.y!==p.y||f.width!==p.width||f.height!==p.height)&&n(),p=f,h=requestAnimationFrame(c)}return n(),()=>{b.forEach(f=>{s&&f.removeEventListener("scroll",n),l&&f.removeEventListener("resize",n)}),g&&g(),u&&u.disconnect(),u=null,a&&cancelAnimationFrame(h)}}const In=(t,e,n)=>{const o=new Map,s={platform:Mn,...n},l={...s.platform,_c:o};return mn(t,e,{...s,platform:l})};function Nn(t){let e;const n=t[0].default,o=W(n,t,t[1],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,l){o&&o.m(s,l),e=!0},p(s,l){o&&o.p&&(!e||l&2)&&z(o,n,s,s[1],e?G(n,s[1],l,null):j(s[1]),null)},i(s){e||(E(o,s),e=!0)},o(s){O(o,s),e=!1},d(s){o&&o.d(s)}}}function Wn(t){let e,n="TM GUesser";return{c(){e=k("a"),e.textContent=n,this.h()},l(o){e=T(o,"A",{href:!0,class:!0,"data-svelte-h":!0}),gt(e)!=="svelte-1tj7ylt"&&(e.textContent=n),this.h()},h(){v(e,"href","/tmguesser"),v(e,"class","text-xl font-bold uppercase")},m(o,s){H(o,e,s)},p:rt,d(o){o&&P(e)}}}function zn(t){let e,n="GitHub";return{c(){e=k("a"),e.textContent=n,this.h()},l(o){e=T(o,"A",{class:!0,href:!0,target:!0,rel:!0,"data-svelte-h":!0}),gt(e)!=="svelte-u4i67h"&&(e.textContent=n),this.h()},h(){v(e,"class","btn btn-sm variant-ghost-surface"),v(e,"href","https://github.com/rampen88/TMGuesser"),v(e,"target","_blank"),v(e,"rel","noreferrer")},m(o,s){H(o,e,s)},p:rt,d(o){o&&P(e)}}}function jn(t){let e,n;return e=new Xt({props:{$$slots:{trail:[zn],lead:[Wn]},$$scope:{ctx:t}}}),{c(){ft(e.$$.fragment)},l(o){ut(e.$$.fragment,o)},m(o,s){dt(e,o,s),n=!0},p(o,s){const l={};s&2&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){O(e.$$.fragment,o),n=!1},d(o){ht(e,o)}}}function Gn(t){let e,n;return e=new rn({props:{$$slots:{header:[jn],default:[Nn]},$$scope:{ctx:t}}}),{c(){ft(e.$$.fragment)},l(o){ut(e.$$.fragment,o)},m(o,s){dt(e,o,s),n=!0},p(o,[s]){const l={};s&2&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){O(e.$$.fragment,o),n=!1},d(o){ht(e,o)}}}function Xn(t,e,n){let{$$slots:o={},$$scope:s}=e;return Tt.set({computePosition:In,autoUpdate:Bn,flip:pn,shift:wn,offset:vn,arrow:bn}),t.$$set=l=>{"$$scope"in l&&n(1,s=l.$$scope)},[o,s]}class Qn extends xe{constructor(e){super(),Le(this,e,Xn,Gn,Se,{})}}export{Qn as component};
