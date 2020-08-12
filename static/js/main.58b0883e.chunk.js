(this.webpackJsonpprim=this.webpackJsonpprim||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),l=a.n(i),c=(a(11),a(1)),o=a(2),s=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)([1,0]),s=Object(c.a)(o,2),m=s[0],u=s[1],b=Object(n.useState)(0),f=Object(c.a)(b,2),h=f[0],d=f[1],p=Object(n.useState)(2),E=Object(c.a)(p,2),g=E[0],v=E[1];return Object(n.useEffect)((function(){l(!0)}),[e.num]),Object(n.useEffect)((function(){if(i){v(e.num);var t=performance.now(),a=function(e){e=BigInt(e);for(var t=BigInt(2);t*t<=e;t++)if(e%t===0n)return[t,e/t];return[1,e]}(e.num),n=performance.now();u(a),d(n-t),l(!1)}}),[i]),r.a.createElement("div",null,r.a.createElement("h4",null,"Deterministic Check"),i?r.a.createElement("div",null,"working..."):r.a.createElement("div",null,g.toString()," is...",r.a.createElement("br",null),m[0]>1?"COMPOSITE":"PRIME",m[0]>1?r.a.createElement("p",{class:"my-2"},"Factors found: ",m[0].toString()," x ",m[1].toString()):r.a.createElement("p",{class:"my-2"},"Could not factorize."),"Time taken: ",h.toFixed(3)," ms"))},m=function(e,t,a){var n=BigInt(e);n%=a=BigInt(a);for(var r=BigInt(1);t>0n;)1n===(1n&t)&&(r=r*n%a),n=n*n%a,t>>=1n;return Number(r)},u=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(2),s=Object(c.a)(o,2),u=s[0],b=s[1],f=Object(n.useState)([1,0]),h=Object(c.a)(f,2),d=h[0],p=h[1],E=Object(n.useState)(0),g=Object(c.a)(E,2),v=g[0],y=g[1];return Object(n.useEffect)((function(){l(!0)}),[e.num,e.iterations]),Object(n.useEffect)((function(){if(i){b(e.num);var t=performance.now(),a=function(e,t){if(e>2){var a=new Set;for(a.add(1);t--;){for(var n=1;a.has(n);)(n=BigInt(Math.floor(Math.random()))*e)<2n&&(n=2n);var r=m(n,e-1n,e);if(1!==r)return[n,r]}}return[1,0]}(e.num,e.iterations),n=performance.now();p(a),y(n-t),l(!1)}}),[i]),r.a.createElement("div",null,r.a.createElement("h4",null,"Fermat's Check (Probabilistic)"),i?r.a.createElement("div",null,"working..."):r.a.createElement("div",null,u.toString()," is...",r.a.createElement("br",null),d[0]>1?"COMPOSITE":"PRIME"," ",r.a.createElement("br",null),"Iterations: ",e.iterations,", Confidence:"," ",d[0]>1?100:100*(1-Math.pow(2,-1*e.iterations))," %",d[0]>1?r.a.createElement("p",{class:"my-2"},d[0].toString(),r.a.createElement("sup",null,e.num.toString(),"-1")," \u2261 ",d[1].toString()," (mod"," ",e.num.toString(),")"):r.a.createElement("br",null),r.a.createElement("div",{class:"my-2"},"Time taken: ",v.toFixed(3)," ms")))},b=[5109463,5109479,5109491,5109497,5109509,5109529,5109541,5109547,6345803,6345821,6345827,6345839,6345851,6345853,6345877,6345883,7580999,7581001,7581017,7581037,7581043,7581047,7581061,7581073,15485557,15485567,15485581,15485609,15485611,15485621,15485651,15485653,12389681,12389687,12389693,12389723,12389737,12389747,12389759,12389761,10505291,10505317,10505351,10505353,10505377,10505387,10505401,10505413],f=[0x81764eb29cf5,0x81764eb29cff,0x81764eb29d0d,0xc223bc87c875,0xc223bc87c89f,0xc223bc87c8a1,312545126975687,312545126975693,312545126975701,412374512589973,412374512590003,412374512590037,541234512987799,541234512987869,541234512987893,741245236587451,741245236587677,741245236587683],h=[642708001,652969351,744866305,745864945,836515681,839275921],d=function(){var e=Object(n.useState)(BigInt("115297905820819")),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)("115297905820819"),m=Object(c.a)(l,2),d=m[0],p=m[1],E=Object(n.useState)(99.9),g=Object(c.a)(E,2),v=g[0],y=g[1],O=Object(n.useState)(4),w=Object(c.a)(O,2),j=w[0],S=w[1],k=Object(n.useState)(!1),C=Object(c.a)(k,2),M=C[0],x=C[1],I=function(){try{var e=BigInt(d.toString().replace(/,/g,""));x(!1),i(e),S(Math.ceil(Math.log2(100/(100-v))))}catch(t){x(!0)}};return r.a.createElement("div",{class:"text-center"},r.a.createElement("h2",null,"Primality test"),r.a.createElement("h3",null,"Deterministic vs Probabilistic algorithms"),r.a.createElement("a",{href:"https://github.com/kanishk509/prime-determ-vs-prob",target:"_blank",rel:"noopener noreferrer"},"(view source code)"),r.a.createElement("div",{class:"my-4"},r.a.createElement("div",{class:"my-2"},"Number:"," ",r.a.createElement("input",{type:"text",value:d,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){13===e.charCode&&I()}})," ",M?r.a.createElement("i",{class:"text-danger"},"(Enter an integer \u2265 2)"):null),r.a.createElement("div",{class:"my-2"},r.a.createElement(o.a,{variant:"secondary",size:"sm",onClick:function(){p(f[Math.floor(Math.random()*f.length)])}},"Try a big prime")," ",r.a.createElement(o.a,{variant:"secondary",size:"sm",onClick:function(){var e=b[Math.floor(Math.random()*b.length)],t=b[Math.floor(Math.random()*b.length)];p(e*t)}},"Try a non-prime with big prime factors")," ",r.a.createElement(o.a,{variant:"secondary",size:"sm",onClick:function(){p(h[Math.floor(Math.random()*h.length)])}},"Try a Carmichael number (see note 4)")),r.a.createElement("div",{class:"my-2"},"Min. Confidence % (for probabilistic algo.):"," ",r.a.createElement("input",{type:"text",value:v,style:{width:"10%"},onChange:function(e){return y(e.target.value)},onKeyPress:function(e){13===e.charCode&&I()}})," ","%"),r.a.createElement(o.a,{variant:"primary",size:"sm",onClick:I},"Is this a prime?")),r.a.createElement("div",{class:"container-fluid row"},r.a.createElement("div",{class:"col"},r.a.createElement(s,{num:a})),r.a.createElement("div",{class:"col"},r.a.createElement(u,{num:a,iterations:j}))),r.a.createElement("br",null),r.a.createElement("p",{class:"text-left"},r.a.createElement("b",{class:"ml-4"},"Notes."),r.a.createElement("ol",null,r.a.createElement("li",null,"The deterministic test will finish very fast if the given number has even one very small factor. For example 14266523201 (= 7 * 2038074743).",r.a.createElement("br",null),"In such cases, the perfomance advantage of the probabilistic algorithm is not apparent."),r.a.createElement("li",null,"The performance advantage of the probabilistic algorithm over the deterministic one can be clearly seen when the number is a big prime or a product of two or more big primes. For example 115297905820819 (= 7445521 * 15485539)."),r.a.createElement("li",null,"Fermat's primality test is based on"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Fermat%27s_little_theorem",target:"_blank",rel:"noopener noreferrer"},"Fermat's little theorem"),". If it finds some suitable base A (1 < A < N-1) such that A",r.a.createElement("sup",null,"N-1")," \u2262 1 (mod N), then it can declare with 100% confidence that n is composite.",r.a.createElement("br",null),"However, if it doesn't find any such base, it declares N as a prime, but with a margin of error. The probability of a false positive declaration as prime is bounded by 2",r.a.createElement("sup",null,"-K")," (assuming N is not a Carmichael number) where K is the number of iterations of the algorithm."),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Carmichael_number",target:"_blank",rel:"noopener noreferrer"},"Carmichael numbers")," ","are composite numbers with very high probability of being misclassified as a prime by the Fermat's test. (This is because, for a Carmichael number C, all values of A with gcd(A, C) = 1 also satisfy A",r.a.createElement("sup",null,"C-1")," \u2261 1 (mod C)).",r.a.createElement("br",null),"This is one of the biggest flaws of the Fermat's primality test and the reason why in practice, more robust probabilistic tests (like the"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test",target:"_blank",rel:"noopener noreferrer"},"Miller\u2013Rabin test)")," ","are used."))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.58b0883e.chunk.js.map