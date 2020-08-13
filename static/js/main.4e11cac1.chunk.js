(this.webpackJsonpprim=this.webpackJsonpprim||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),c=(a(16),a(1)),o=a(6),s=a(8),m=function(e){return r.a.createElement("div",null,e.num.toString()," is...",r.a.createElement("br",null),e.isPrime?r.a.createElement("h4",null,r.a.createElement(s.a,{pill:!0,variant:"success"},"PRIME")):r.a.createElement("h4",null,r.a.createElement(s.a,{pill:!0,variant:"danger"},"COMPOSITE")))},u=a(7),b=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)([1,0]),s=Object(c.a)(o,2),b=s[0],f=s[1],h=Object(n.useState)(0),p=Object(c.a)(h,2),E=p[0],d=p[1],g=Object(n.useState)(2),v=Object(c.a)(g,2),y=v[0],O=v[1];return Object(n.useEffect)((function(){l(!0)}),[e.num]),Object(n.useEffect)((function(){if(i){O(e.num);var t=performance.now(),a=function(e){e=BigInt(e);for(var t=BigInt(2);t*t<=e;t++)if(e%t===0n)return[t,e/t];return[1,e]}(e.num),n=performance.now();f(a),d(n-t),l(!1)}}),[i]),r.a.createElement("div",null,r.a.createElement("h4",null,"Deterministic Check"),i?r.a.createElement(u.a,{animation:"grow"}):r.a.createElement("div",null,r.a.createElement(m,{num:y,isPrime:b[0]<2}),b[0]>1?r.a.createElement("p",{class:"my-2"},"Factors found: ",b[0].toString()," x ",b[1].toString()):r.a.createElement("p",{class:"my-2"},"Could not factorize."),"Time taken: ",E.toFixed(3)," ms"))},f=function(e,t,a){var n=BigInt(e);n%=a=BigInt(a);for(var r=BigInt(1);t>0n;)1n===(1n&t)&&(r=r*n%a),n=n*n%a,t>>=1n;return Number(r)},h=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(2),s=Object(c.a)(o,2),b=s[0],h=s[1],p=Object(n.useState)([1,0]),E=Object(c.a)(p,2),d=E[0],g=E[1],v=Object(n.useState)(0),y=Object(c.a)(v,2),O=y[0],j=y[1];return Object(n.useEffect)((function(){l(!0)}),[e.num,e.iterations]),Object(n.useEffect)((function(){if(i){h(e.num);var t=performance.now(),a=function(e,t){if(e>2){var a=new Set;for(a.add(1);t--;){for(var n=1;a.has(n);)(n=BigInt(Math.floor(Math.random()))*e)<2n&&(n=2n);var r=f(n,e-1n,e);if(1!==r)return[n,r]}}return[1,0]}(e.num,e.iterations),n=performance.now();g(a),j(n-t),l(!1)}}),[i]),r.a.createElement("div",null,r.a.createElement("h4",null,"Fermat's Check (Probabilistic)"),i?r.a.createElement(u.a,{animation:"border"}):r.a.createElement("div",null,r.a.createElement(m,{num:b,isPrime:d[0]<2}),"Iterations: ",e.iterations,", Confidence:"," ",d[0]>1?100:100*(1-Math.pow(2,-1*e.iterations))," %",d[0]>1?r.a.createElement("p",{class:"my-2"},d[0].toString(),r.a.createElement("sup",null,e.num.toString(),"-1")," \u2261 ",d[1].toString()," (mod"," ",e.num.toString(),")"):r.a.createElement("br",null),r.a.createElement("div",{class:"my-2"},"Time taken: ",O.toFixed(3)," ms")))},p=[5109463,5109479,5109491,5109497,5109509,5109529,5109541,5109547,6345803,6345821,6345827,6345839,6345851,6345853,6345877,6345883,7580999,7581001,7581017,7581037,7581043,7581047,7581061,7581073,15485557,15485567,15485581,15485609,15485611,15485621,15485651,15485653,12389681,12389687,12389693,12389723,12389737,12389747,12389759,12389761,10505291,10505317,10505351,10505353,10505377,10505387,10505401,10505413],E=[174659235533,174659235539,174659235589,241534851319,241534851329,241534851407,312458261431,312458261491,312458261497,412345861957,412345862003,412345862063,541234587563,541234587583,541234587601,645123458803,645123458831,645123458893,784512364609,784512364631,784512364637,945125475221,945125475227,945125475251,841234521581,841234521599,841234521649],d=[642708001,652969351,744866305,745864945,836515681,839275921],g=function(){var e=Object(n.useState)(BigInt("115297905820819")),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)("115297905820819"),s=Object(c.a)(l,2),m=s[0],u=s[1],f=Object(n.useState)(99.9),g=Object(c.a)(f,2),v=g[0],y=g[1],O=Object(n.useState)(4),j=Object(c.a)(O,2),w=j[0],S=j[1],k=Object(n.useState)(!1),C=Object(c.a)(k,2),M=C[0],I=C[1],x=function(){try{var e=BigInt(m.toString().replace(/,/g,""));e<2?I(!0):(I(!1),i(e),S(Math.ceil(Math.log2(100/(100-v)))))}catch(t){I(!0)}};return r.a.createElement("div",{class:"text-center"},r.a.createElement("h2",null,"Primality test"),r.a.createElement("h3",null,"Deterministic vs Probabilistic algorithms"),r.a.createElement("a",{href:"https://github.com/kanishk509/prime-determ-vs-prob",target:"_blank",rel:"noopener noreferrer"},"(view source code)"),r.a.createElement("div",{class:"my-4"},r.a.createElement("div",{class:"my-2"},"Number:"," ",r.a.createElement("input",{type:"text",value:m,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){13===e.charCode&&x()}})," ",M?r.a.createElement("i",{class:"text-danger"},"(Enter an integer \u2265 2)"):null),r.a.createElement("div",{class:"my-2"},r.a.createElement(o.a,{bsPrefix:"btn btn-secondary btn-sm m-1",onClick:function(){u(E[Math.floor(Math.random()*E.length)])}},"Try a big prime"),r.a.createElement(o.a,{bsPrefix:"btn btn-secondary btn-sm m-1",onClick:function(){var e=p[Math.floor(Math.random()*p.length)],t=p[Math.floor(Math.random()*p.length)];u(e*t)}},"Try a non-prime with big prime factors"),r.a.createElement(o.a,{bsPrefix:"btn btn-secondary btn-sm m-1",onClick:function(){u(d[Math.floor(Math.random()*d.length)])}},"Try a Carmichael number (see note 4)")),r.a.createElement("div",{class:"my-2"},"Min. Confidence % (for probabilistic algo.):"," ",r.a.createElement("input",{type:"text",value:v,style:{width:"10%"},onChange:function(e){return y(e.target.value)},onKeyPress:function(e){13===e.charCode&&x()}})," ","%"),r.a.createElement(o.a,{variant:"primary",size:"sm",onClick:x},"Is this a prime?")),r.a.createElement("div",{class:"container-fluid row"},r.a.createElement("div",{class:"col"},r.a.createElement(b,{num:a})),r.a.createElement("div",{class:"col"},r.a.createElement(h,{num:a,iterations:w}))),r.a.createElement("br",null),r.a.createElement("p",{class:"text-left"},r.a.createElement("b",{class:"ml-4"},"Notes."),r.a.createElement("ol",null,r.a.createElement("li",null,"The deterministic test will finish very fast if the given number has even one very small factor. For example 14266523201 (= 7 * 2038074743).",r.a.createElement("br",null),"In such cases, the perfomance advantage of the probabilistic algorithm is not apparent."),r.a.createElement("li",null,"The performance advantage of the probabilistic algorithm over the deterministic one can be clearly seen when the number is a big prime or a product of two or more big primes. For example 115297905820819 (= 7445521 * 15485539)."),r.a.createElement("li",null,"Fermat's primality test is based on"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Fermat%27s_little_theorem",target:"_blank",rel:"noopener noreferrer"},"Fermat's little theorem"),". If it finds some suitable base A (1 < A < N-1) such that A",r.a.createElement("sup",null,"N-1")," \u2262 1 (mod N), then it can declare with 100% confidence that n is composite.",r.a.createElement("br",null),"However, if it doesn't find any such base, it declares N as a prime, but with a margin of error. The probability of a false positive declaration as prime is bounded by 2",r.a.createElement("sup",null,"-K")," (assuming N is not a Carmichael number) where K is the number of iterations of the algorithm."),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Carmichael_number",target:"_blank",rel:"noopener noreferrer"},"Carmichael numbers")," ","are composite numbers with very high probability of being misclassified as a prime by the Fermat's test. (This is because, for a Carmichael number C, all values of A with gcd(A, C) = 1 also satisfy A",r.a.createElement("sup",null,"C-1")," \u2261 1 (mod C)).",r.a.createElement("br",null),"This is one of the biggest flaws of the Fermat's primality test and the reason why in practice, more robust probabilistic tests (like the"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test",target:"_blank",rel:"noopener noreferrer"},"Miller\u2013Rabin test)")," ","are used."))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4e11cac1.chunk.js.map