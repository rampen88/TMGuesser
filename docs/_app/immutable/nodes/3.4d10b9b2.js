import{s as He,l as ae,m as be,n as Ve,r as Ae,o as Be}from"../chunks/scheduler.c9e353ad.js";import{S as Le,i as qe,g as _,s as H,m as F,h as g,j as E,f,c as A,n as K,z as Ue,k as i,a as J,x as r,A as ne,y as ue,o as fe,B as Ee,C as ce,D as we}from"../chunks/index.21be2d91.js";function oe(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ke(l){return l[Math.floor(Math.random()*l.length)]}function ze(l,t,a){const o=l.slice();return o[26]=t[a],o}function Pe(l,t,a){const o=l.slice();return o[29]=t[a],o}function Se(l,t,a){const o=l.slice();return o[32]=t[a],o}function Ne(l){let t,a=l[32]+"",o,h;return{c(){t=_("option"),o=F(a),this.h()},l(n){t=g(n,"OPTION",{});var c=E(t);o=K(c,a),c.forEach(f),this.h()},h(){t.__value=h=l[32],ce(t,t.__value)},m(n,c){J(n,t,c),r(t,o)},p(n,c){c[0]&1&&a!==(a=n[32]+"")&&fe(o,a),c[0]&1&&h!==(h=n[32])&&(t.__value=h,ce(t,t.__value))},d(n){n&&f(t)}}}function Re(l){let t,a=l[29]+"",o,h;return{c(){t=_("option"),o=F(a),this.h()},l(n){t=g(n,"OPTION",{});var c=E(t);o=K(c,a),c.forEach(f),this.h()},h(){t.__value=h=l[29],ce(t,t.__value)},m(n,c){J(n,t,c),r(t,o)},p(n,c){c[0]&2&&a!==(a=n[29]+"")&&fe(o,a),c[0]&2&&h!==(h=n[29])&&(t.__value=h,ce(t,t.__value))},d(n){n&&f(t)}}}function Ge(l){let t,a=l[26]+"",o,h;return{c(){t=_("option"),o=F(a),this.h()},l(n){t=g(n,"OPTION",{});var c=E(t);o=K(c,a),c.forEach(f),this.h()},h(){t.__value=h=l[26],ce(t,t.__value)},m(n,c){J(n,t,c),r(t,o)},p(n,c){c[0]&4&&a!==(a=n[26]+"")&&fe(o,a),c[0]&4&&h!==(h=n[26])&&(t.__value=h,ce(t,t.__value))},d(n){n&&f(t)}}}function Ye(l){let t,a,o,h,n,c,P,B,L,S,y,N,R,k,v,O,q,G,I,Q,W,re,T,x,$,ie,V,he,X,j,w,p,Z,D,pe,C,ve,U,Ie="Guess",me,Oe,ee=oe(l[0]),m=[];for(let e=0;e<ee.length;e+=1)m[e]=Ne(Se(l,ee,e));let le=oe(l[1]),d=[];for(let e=0;e<le.length;e+=1)d[e]=Re(Pe(l,le,e));let se=oe(l[2]),b=[];for(let e=0;e<se.length;e+=1)b[e]=Ge(ze(l,se,e));return{c(){t=_("div"),a=H(),o=_("div"),h=_("div"),n=_("h2"),c=F("Round: "),P=F(l[12]),B=H(),L=_("div"),S=_("h2"),y=F("Points: "),N=F(l[11]),R=H(),k=_("div"),v=_("div"),O=_("img"),G=H(),I=_("img"),re=H(),T=_("img"),ie=H(),V=_("button"),he=F("Hint"),X=H(),j=_("div"),w=_("div"),p=_("select");for(let e=0;e<m.length;e+=1)m[e].c();Z=H(),D=_("select");for(let e=0;e<d.length;e+=1)d[e].c();pe=H(),C=_("select");for(let e=0;e<b.length;e+=1)b[e].c();ve=H(),U=_("button"),U.textContent=Ie,this.h()},l(e){t=g(e,"DIV",{class:!0}),E(t).forEach(f),a=A(e),o=g(e,"DIV",{class:!0});var u=E(o);h=g(u,"DIV",{});var s=E(h);n=g(s,"H2",{class:!0});var M=E(n);c=K(M,"Round: "),P=K(M,l[12]),M.forEach(f),s.forEach(f),B=A(u),L=g(u,"DIV",{});var Te=E(L);S=g(Te,"H2",{class:!0});var de=E(S);y=K(de,"Points: "),N=K(de,l[11]),de.forEach(f),Te.forEach(f),u.forEach(f),R=A(e),k=g(e,"DIV",{class:!0});var _e=E(k);v=g(_e,"DIV",{class:!0});var Y=E(v);O=g(Y,"IMG",{src:!0,class:!0,alt:!0}),G=A(Y),I=g(Y,"IMG",{src:!0,class:!0,alt:!0}),re=A(Y),T=g(Y,"IMG",{src:!0,class:!0,alt:!0}),ie=A(Y),V=g(Y,"BUTTON",{class:!0});var je=E(V);he=K(je,"Hint"),je.forEach(f),Y.forEach(f),X=A(_e),j=g(_e,"DIV",{class:!0});var ge=E(j);w=g(ge,"DIV",{class:!0});var te=E(w);p=g(te,"SELECT",{class:!0,size:!0});var De=E(p);for(let z=0;z<m.length;z+=1)m[z].l(De);De.forEach(f),Z=A(te),D=g(te,"SELECT",{class:!0,size:!0});var Ce=E(D);for(let z=0;z<d.length;z+=1)d[z].l(Ce);Ce.forEach(f),pe=A(te),C=g(te,"SELECT",{class:!0,size:!0});var Me=E(C);for(let z=0;z<b.length;z+=1)b[z].l(Me);Me.forEach(f),te.forEach(f),ve=A(ge),U=g(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Ue(U)!=="svelte-l1947b"&&(U.textContent=Ie),ge.forEach(f),_e.forEach(f),this.h()},h(){i(t,"class","h-1/6"),i(n,"class","h2"),i(S,"class","h2"),i(o,"class","row-start-3 col-start-3 w-full pb-8 flex flex-col place-items-center gap-2"),ae(O.src,q=l[5])||i(O,"src",q),i(O,"class",""),i(O,"alt","no cheating"),ae(I.src,Q=l[6])||i(I,"src",Q),i(I,"class",W=l[3]?"":"blur-lg"),i(I,"alt","no cheating"),ae(T.src,x=l[7])||i(T,"src",x),i(T,"class",$=l[4]?"":"blur-lg"),i(T,"alt","no cheating"),i(V,"class","btn variant-ghost row-start-2 col-start-2"),V.disabled=l[4],i(v,"class","grid col-span-3 col-start-2 grid-cols-3 gap-4"),i(p,"class","select p-0"),i(p,"size","4"),l[8]===void 0&&be(()=>l[16].call(p)),i(D,"class","select p-0"),i(D,"size","4"),l[9]===void 0&&be(()=>l[17].call(D)),i(C,"class","select"),i(C,"size","4"),l[10]===void 0&&be(()=>l[18].call(C)),i(w,"class","flex flex-row w-full gap-4 shrink-0"),i(U,"class","btn variant-filled-primary"),i(j,"class","row-start-2 col-span-3 col-start-2 h-full w-full flex flex-col place-items-center gap-4 shrink-0"),i(k,"class","grid h-full w-full grid-cols-5 grid-rows-4 gap-4")},m(e,u){J(e,t,u),J(e,a,u),J(e,o,u),r(o,h),r(h,n),r(n,c),r(n,P),r(o,B),r(o,L),r(L,S),r(S,y),r(S,N),J(e,R,u),J(e,k,u),r(k,v),r(v,O),r(v,G),r(v,I),r(v,re),r(v,T),r(v,ie),r(v,V),r(V,he),r(k,X),r(k,j),r(j,w),r(w,p);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(p,null);ne(p,l[8],!0),r(w,Z),r(w,D);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(D,null);ne(D,l[9],!0),r(w,pe),r(w,C);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(C,null);ne(C,l[10],!0),r(j,ve),r(j,U),me||(Oe=[ue(V,"click",l[15]),ue(p,"change",l[16]),ue(D,"change",l[17]),ue(C,"change",l[18]),ue(U,"click",l[19])],me=!0)},p(e,u){if(u[0]&4096&&fe(P,e[12]),u[0]&2048&&fe(N,e[11]),u[0]&32&&!ae(O.src,q=e[5])&&i(O,"src",q),u[0]&64&&!ae(I.src,Q=e[6])&&i(I,"src",Q),u[0]&8&&W!==(W=e[3]?"":"blur-lg")&&i(I,"class",W),u[0]&128&&!ae(T.src,x=e[7])&&i(T,"src",x),u[0]&16&&$!==($=e[4]?"":"blur-lg")&&i(T,"class",$),u[0]&16&&(V.disabled=e[4]),u[0]&1){ee=oe(e[0]);let s;for(s=0;s<ee.length;s+=1){const M=Se(e,ee,s);m[s]?m[s].p(M,u):(m[s]=Ne(M),m[s].c(),m[s].m(p,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=ee.length}if(u[0]&257&&ne(p,e[8]),u[0]&2){le=oe(e[1]);let s;for(s=0;s<le.length;s+=1){const M=Pe(e,le,s);d[s]?d[s].p(M,u):(d[s]=Re(M),d[s].c(),d[s].m(D,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=le.length}if(u[0]&514&&ne(D,e[9]),u[0]&4){se=oe(e[2]);let s;for(s=0;s<se.length;s+=1){const M=ze(e,se,s);b[s]?b[s].p(M,u):(b[s]=Ge(M),b[s].c(),b[s].m(C,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=se.length}u[0]&1028&&ne(C,e[10])},i:Ve,o:Ve,d(e){e&&(f(t),f(a),f(o),f(R),f(k)),Ee(m,e),Ee(d,e),Ee(b,e),me=!1,Ae(Oe)}}}function Fe(l,t,a){let o=[],h=[],n=[],c,P,B,L,S,y,N,R,k,v,O,q,G=0,I=1;Be(async()=>{console.log("Fetching images.json"),c=await(await fetch("/images.json")).json(),console.log("data:",c),await re(),W()});function Q(){N==v&&a(11,G+=1),R==O&&a(11,G+=1),k==q&&(B?a(11,G+=1):P?a(11,G+=2):a(11,G+=3)),a(12,I++,I),a(8,N=""),a(9,R=""),a(10,k=""),a(3,P=!1),a(4,B=!1),W()}async function W(){const X=Object.keys(c);v=ke(X);const j=Object.keys(c[v]);O=ke(j);const w=c[v][O],p=Object.keys(w);q=ke(p);const Z=w[q];a(5,L=Z.replace("%s","1")),a(6,S=Z.replace("%s","2")),a(7,y=Z.replace("%s","3"))}async function re(){const j=await(await fetch("/campaigns.json")).json();a(0,o=j.years),a(1,h=j.seasons);const w=[];for(let p=1;p<=25;p++)w.push(p);a(2,n=w)}function T(){P?a(4,B=!0):a(3,P=!0)}const x=()=>T();function $(){N=we(this),a(8,N),a(0,o)}function ie(){R=we(this),a(9,R),a(1,h)}function V(){k=we(this),a(10,k),a(2,n)}return[o,h,n,P,B,L,S,y,N,R,k,G,I,Q,T,x,$,ie,V,()=>Q()]}class Qe extends Le{constructor(t){super(),qe(this,t,Fe,Ye,He,{},null,[-1,-1])}}export{Qe as component};
