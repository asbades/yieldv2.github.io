(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{891:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var c=n(2),r=n.n(c),a=n(6),i=n(93),s=n.n(i),o=n(80),u=function(e,t){return new(new s.a(e).eth.Contract)(o,t)},l=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},893:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x}));var c=n(2),r=n.n(c),a=n(6),i=n(19),s=n(0),o=n(8),u=n.n(o),l=n(51),d=n(237),j=n(54),b=n(891),h=n(31),f=n(162),O=function(){var e=Object(f.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.a)(d,Object(h.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},x=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],d=Object(l.j)(),j=d.account,h=d.ethereum,O=Object(f.a)().slowRefresh;return Object(s.useEffect)((function(){j&&h&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(h,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,o(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[j,h,e,O]),c};t.a=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],d=Object(l.j)(),j=d.account,h=d.ethereum,O=Object(f.a)().fastRefresh;return Object(s.useEffect)((function(){j&&h&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(h,e,j);case 2:n=t.sent,o(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[j,h,e,O]),c}},903:function(e,t,n){"use strict";var c=3600,r=86400,a=2629800,i=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=i&&(n.years=Math.floor(t/i),t-=n.years*i),t>=a&&(n.months=Math.floor(t/a),t-=n.months*a),t>=r&&(n.days=Math.floor(t/r),t-=n.days*r),t>=c&&(n.hours=Math.floor(t/c),t-=n.hours*c),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}},904:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var c=n(2),r=n.n(c),a=n(6),i=n(19),s=n(0),o=n(8),u=n.n(o),l=n(51),d=n(39),j=n(891),b=function(){var e=Object(s.useState)(new u.a(0)),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(l.j)().account,b=Object(d.e)(),h=Object(d.b)();return Object(s.useEffect)((function(){var e=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(h,b,o);case 2:t=e.sent,c(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o&&h&&h&&e();var t=setInterval(e,1e4);return function(){return clearInterval(t)}}),[o,h,b]),n},h=function(e,t,n){var c=Object(l.j)().account,o=Object(s.useState)(null),d=Object(i.a)(o,2),j=d[0],b=d[1];return Object(s.useEffect)((function(){(function(){var n=Object(a.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(c,t).call();case 3:a=n.sent,b(new u.a(a)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),b(null);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}),[c,t,e,n]),j}},937:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s,o,u,l,d,j,b,h,f,O,x,p,m,g,v,y,w,k,S,A,T,C=n(0),B=n(37),N=n(239),D=n(13),E=n(3),F=n(62),I=n(14),z=n(1),L=E.e.div(c||(c=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),U=function(){var e=Object(B.i)(),t=e.url,n=e.isExact;return Object(z.jsx)(L,{children:Object(z.jsxs)(I.i,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(z.jsx)(I.j,{as:F.b,to:"".concat(t),children:"Next IFO"}),Object(z.jsx)(I.j,{as:F.b,to:"".concat(t,"/history"),children:"Past IFOs"})]})})},M=n(38),Y=Object(E.e)(I.z).attrs({as:"h1",size:"xl"})(r||(r=Object(D.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondary})),P=Object(E.e)(I.T)(a||(a=Object(D.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),R=E.e.div(i||(i=Object(D.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),W=function(){var e=Object(M.a)();return Object(z.jsx)(R,{children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(Y,{children:e(500,"IFO: Initial Farm Offerings")}),Object(z.jsx)(P,{children:e(502,"Buy new tokens with a brand new token sale model.")})]})})},H=n(235),_=n(2),G=n.n(_),Q=n(6),J=n(19),q=n(51),V=n(8),Z=n.n(V),X=n(240),K=n(156),$=n(39),ee=n(234),te=Object(E.e)(I.y)(s||(s=Object(D.a)(["\n  & > div {\n    flex: 1;\n  }\n"]))),ne=Object(E.e)(I.z).attrs({as:"h3",size:"lg"})(o||(o=Object(D.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),ce=Object(E.e)(I.T)(u||(u=Object(D.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.textSubtle})),re=function(e){var t=e.ifoId,n=e.name,c=e.subTitle;return Object(z.jsxs)(te,{mb:"24px",alignItems:"center",children:[Object(z.jsx)("img",{src:"/images/ifos/".concat(t,".svg"),alt:t,width:"64px",height:"64px"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(ne,{children:n}),Object(z.jsx)(ce,{children:c})]})]})},ae=E.e.div(l||(l=Object(D.a)(["\n  margin-bottom: 16px;\n"]))),ie=function(e){var t=e.progress;return Object(z.jsx)(ae,{children:Object(z.jsx)(I.N,{primaryStep:t})})},se=E.e.div(d||(d=Object(D.a)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),oe=E.e.div(j||(j=Object(D.a)(["\n  background-color: ",";\n  height: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n"])),(function(e){return e.theme.colors.borderColor})),ue=E.e.button(b||(b=Object(D.a)(["\n  background: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  outline: 0;\n  padding: 24px 16px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),le=Object(E.e)(I.T)(h||(h=Object(D.a)(["\n  color: ",";\n  display: ",";\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.isOpen?"block":"none"})),de=function(e){var t=e.defaultIsOpen,n=void 0===t||t,c=e.description,r=Object(C.useState)(n),a=Object(J.a)(r,2),i=a[0],s=a[1],o=Object(M.a)();return Object(z.jsxs)(se,{children:[Object(z.jsx)(oe,{}),Object(z.jsx)(ue,{onClick:function(){return s(!i)},children:o(999,i?"Hide":"Show")}),Object(z.jsx)(le,{isOpen:i,children:c})]})},je=E.e.div(f||(f=Object(D.a)(["\n  margin-bottom: 24px;\n"]))),be=E.e.div(O||(O=Object(D.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(e){return e.theme.colors.secondary})),he=Object(E.e)(I.T)(x||(x=Object(D.a)(["\n  flex: 1;\n"]))),fe=function(e){var t=e.launchDate,n=e.launchTime,c=e.saleAmount,r=e.raiseAmount,a=e.cakeToBurn,i=e.projectSiteUrl,s=e.raisingAmount,o=e.totalAmount,u=Object(M.a)();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(je,{children:[Object(z.jsxs)(be,{children:[Object(z.jsx)(he,{children:u(582,"Launch Time")}),Object(z.jsxs)(I.T,{children:[t,",",Object(z.jsx)(I.D,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:n})]})]}),Object(z.jsxs)(be,{children:[Object(z.jsx)(he,{children:u(584,"For Sale")}),Object(z.jsx)(I.T,{children:c})]}),Object(z.jsxs)(be,{children:[Object(z.jsx)(he,{children:u(999,"To raise (USD)")}),Object(z.jsx)(I.T,{children:r})]}),Object(z.jsxs)(be,{children:[Object(z.jsx)(he,{children:u(586,"NYAN to burn (USD)")}),Object(z.jsx)(I.T,{children:a})]}),Object(z.jsxs)(be,{children:[Object(z.jsx)(he,{children:u(999,"Total raised (% of target)")}),Object(z.jsx)(I.T,{children:"".concat(o.div(s).times(100).toFixed(2),"%")})]})]}),Object(z.jsx)(I.E,{href:i,style:{margin:"auto"},children:u(412,"View project site")})]})},Oe=n(903),xe=E.e.div(p||(p=Object(D.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),pe=E.e.div(m||(m=Object(D.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(e){return e.theme.colors.secondary})),me=function(e){var t=e.isLoading,n=e.status,c=e.secondsUntilStart,r=e.secondsUntilEnd,a=e.block,i=Object(M.a)(),s="coming_soon"===n?c:r,o=Object(Oe.a)(s),u="coming_soon"===n?"start":"finish";return t?Object(z.jsx)(xe,{children:i(656,"Loading...")}):s<=0?Object(z.jsx)(xe,{children:Object(z.jsx)(I.T,{bold:!0,children:i(999,"Finished!")})}):Object(z.jsxs)(xe,{children:[Object(z.jsx)(pe,{children:"".concat(o.days,"d, ").concat(o.hours,"h, ").concat(o.minutes,"m until ").concat(u)}),Object(z.jsx)(I.D,{href:"https://bscscan.com/block/countdown/".concat(a),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},ge=n(904),ve=n(242),ye=n(53),we=E.e.div(g||(g=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px;\n  border-radius: ",";\n  border-color: ",";\n  padding-left: 16px;\n"])),(function(e){return e.theme.radii.default}),(function(e){return e.theme.colors.borderColor})),ke=function(e){var t=e.value,n=e.label,c=e.buttonLabel,r=e.onClick,a=e.disabled,i=void 0!==a&&a;return Object(z.jsxs)("div",{children:[n&&Object(z.jsx)(I.T,{fontSize:"14px",color:"textSubtle",children:n}),Object(z.jsxs)(we,{children:[Object(z.jsx)(I.T,{bold:!0,fontSize:"20px",children:t}),Object(z.jsx)(I.h,{onClick:r,disabled:i,children:c})]})]})},Se=n(251),Ae=E.e.div(v||(v=Object(D.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Te=E.e.div(y||(y=Object(D.a)(["\n  align-items: center;\n  display: flex;\n"]))),Ce=E.e.div(w||(w=Object(D.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),Be=E.e.span(k||(k=Object(D.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),Ne=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=Object(M.a)();return Object(z.jsxs)("div",{children:[Object(z.jsx)(Se.a,{endAdornment:Object(z.jsxs)(Te,{children:[Object(z.jsx)(Be,{children:n}),Object(z.jsx)(Ae,{}),Object(z.jsx)("div",{children:Object(z.jsx)(I.h,{size:"sm",onClick:r,children:i(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),Object(z.jsx)(Ce,{children:i(454,"".concat(t.toLocaleString()," ").concat(n," Available"))})]})},De=n(893),Ee=function(e){var t=e.currency,n=e.contract,c=e.currencyAddress,r=e.onDismiss,a=Object(C.useState)(""),i=Object(J.a)(a,2),s=i[0],o=i[1],u=Object(C.useState)(!1),l=Object(J.a)(u,2),d=l[0],j=l[1],b=Object(q.j)().account,h=Object(ye.b)(Object(De.a)(c));return Object(z.jsxs)(I.I,{title:"Contribute ".concat(t),onDismiss:r,children:[Object(z.jsx)(Ne,{value:s,onChange:function(e){return o(e.currentTarget.value)},symbol:t,max:h,onSelectMax:function(){return o(h.toString())}}),Object(z.jsxs)(I.y,{justifyContent:"space-between",mb:"24px",children:[Object(z.jsx)(I.h,{fullWidth:!0,variant:"secondary",onClick:r,mr:"8px",children:"Cancel"}),Object(z.jsx)(I.h,{fullWidth:!0,disabled:d,onClick:Object(Q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,n.methods.deposit(new Z.a(s).times(new Z.a(10).pow(18)).toString()).send({from:b});case 3:j(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:"Confirm"})]}),Object(z.jsx)(I.E,{href:"https://exchange.yieldnyan.com/#/add/ETH/0x45b07DF4FE00202dd31F2D95f6C06f3A029625D5",style:{margin:"auto"},children:"Get ".concat(t)})]})},Fe=function(e){var t=e.address,n=e.currency,c=e.currencyAddress,r=e.contract,a=e.status,i=e.raisingAmount,s=e.tokenDecimals,o=Object(C.useState)(!1),u=Object(J.a)(o,2),l=u[0],d=u[1],j=Object(C.useState)(new Z.a(0)),b=Object(J.a)(j,2),h=b[0],f=b[1],O=Object(C.useState)({amount:0,claimed:!1}),x=Object(J.a)(O,2),p=x[0],m=x[1],g=Object(q.j)().account,v=Object($.c)(c),y=Object(ge.a)(v,t,l),w=Object(ve.b)(v,t),k=Object(I.db)(Object(z.jsx)(Ee,{currency:n,contract:r,currencyAddress:c})),S=Object(J.a)(k,1)[0];if(Object(C.useEffect)((function(){g&&function(){var e=Object(Q.a)(G.a.mark((function e(){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Z.a,e.next=3,r.methods.getOfferingAmount(g).call();case 3:return e.t1=e.sent,t=new e.t0(e.t1),e.next=7,r.methods.userInfo(g).call();case 7:n=e.sent,m(n),f(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[g,r.methods,l]),null===y)return null;var A=function(){var e=Object(Q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,r.methods.harvest().send({from:g});case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T="finished"===a,B=new Z.a(p.amount).div(i).times(100);return y<=0?Object(z.jsx)(I.h,{fullWidth:!0,disabled:l||T,onClick:Object(Q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,w();case 4:d(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),d(!1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"Approve"}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ke,{disabled:l||p.claimed,buttonLabel:T?"Claim":"Contribute",label:T?"Your tokens to claim":"Your contribution (".concat(n,")"),value:T?p.claimed?"Claimed":Object(ye.a)(h,s).toFixed(4):Object(ye.a)(new Z.a(p.amount)).toFixed(4),onClick:T?A:S}),Object(z.jsx)(I.T,{fontSize:"14px",color:"textSubtle",children:T?"You'll be refunded any excess tokens when you claim":"".concat(B.toFixed(5),"% of total")})]})},Ie=Object(E.e)(I.l)(S||(S=Object(D.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(e){var t=e.ifoId;return"url('/images/ifos/".concat(t,"-bg.svg')")})),ze=function(e,t,n){return e<t?"coming_soon":e>=t&&e<=n?"live":e>n?"finished":null},Le=function(e){var t=e.ifo,n=t.id,c=t.address,r=t.name,a=t.subTitle,i=t.description,s=t.launchDate,o=t.launchTime,u=t.saleAmount,l=t.raiseAmount,d=t.cakeToBurn,j=t.projectSiteUrl,b=t.currency,h=t.currencyAddress,f=t.tokenDecimals,O=t.releaseBlockNumber,x=Object(C.useState)({isLoading:!0,status:null,blocksRemaining:0,secondsUntilStart:0,progress:0,secondsUntilEnd:0,raisingAmount:new Z.a(0),totalAmount:new Z.a(0),startBlockNum:0,endBlockNum:0}),p=Object(J.a)(x,2),m=p[0],g=p[1],v=Object(q.j)().account,y=Object($.d)(c),w=Object(K.a)(),k=Object(M.a)(),S=function(e,t){return"coming_soon"===e?Object(z.jsx)(I.p,{variantColor:"textDisabled",text:t(999,"Coming Soon")}):"live"===e?Object(z.jsx)(I.p,{variantColor:"primary",text:t(999,"LIVE NOW!")}):null}(m.status,k);Object(C.useEffect)((function(){(function(){var e=Object(Q.a)(G.a.mark((function e(){var t,n,c,r,a,i,s,o,u,l,d,j;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([y.methods.startBlock().call(),y.methods.endBlock().call(),y.methods.raisingAmount().call(),y.methods.totalAmount().call()]);case 2:t=e.sent,n=Object(J.a)(t,4),c=n[0],r=n[1],a=n[2],i=n[3],s=parseInt(c,10),o=parseInt(r,10),u=ze(w,s,o),l=o-s,j=w>s?(w-s)/l*100:(w-O)/(s-O)*100,g({isLoading:!1,secondsUntilEnd:(d=o-w)*X.c,secondsUntilStart:(s-w)*X.c,raisingAmount:new Z.a(a),totalAmount:new Z.a(i),status:u,progress:j,blocksRemaining:d,startBlockNum:s,endBlockNum:o});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w,y,O,g]);var A="live"===m.status,T="finished"===m.status;return Object(z.jsx)(Ie,{ifoId:n,ribbon:S,isActive:A,children:Object(z.jsxs)(I.m,{children:[Object(z.jsx)(re,{ifoId:n,name:r,subTitle:a}),Object(z.jsx)(ie,{progress:m.progress}),Object(z.jsx)(me,{isLoading:m.isLoading,status:m.status,secondsUntilStart:m.secondsUntilStart,secondsUntilEnd:m.secondsUntilEnd,block:A||T?m.endBlockNum:m.startBlockNum}),!v&&Object(z.jsx)(ee.a,{fullWidth:!0}),(A||T)&&Object(z.jsx)(Fe,{address:c,currency:b,currencyAddress:h,contract:y,status:m.status,raisingAmount:m.raisingAmount,tokenDecimals:f}),Object(z.jsx)(de,{description:i}),Object(z.jsx)(fe,{launchDate:s,launchTime:o,saleAmount:u,raiseAmount:l,cakeToBurn:d,projectSiteUrl:j,raisingAmount:m.raisingAmount,totalAmount:m.totalAmount})]})})},Ue=Object(E.e)(I.z).attrs({size:"lg"})(A||(A=Object(D.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.secondary})),Me=E.e.div(T||(T=Object(D.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.md}),(function(e){var t=e.isSingle;return"repeat(".concat(t?1:2,", 1fr)")}));Me.defaultProps={isSingle:!1};var Ye,Pe,Re=Me,We=Object(E.e)(I.d)(Ye||(Ye=Object(D.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.sm})),He=E.e.ul(Pe||(Pe=Object(D.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),_e=H.c.find((function(e){return e.isActive})),Ge=function(){var e=Object(M.a)();return Object(z.jsxs)("div",{children:[Object(z.jsx)(Re,{isSingle:!0,children:Object(z.jsx)(Le,{ifo:_e})}),Object(z.jsxs)(We,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(Ue,{as:"h2",children:e(592,"How to take part")}),Object(z.jsxs)(I.z,{mb:"16px",children:[e(594,"Before Sale"),":"]}),Object(z.jsxs)(He,{children:[Object(z.jsx)("li",{children:e(596,"Buy NYAN and BNB tokens")}),Object(z.jsx)("li",{children:e(598,"Get NYAN-BNB LP tokens by adding NYAN and BNB liquidity")})]}),Object(z.jsxs)(I.y,{mb:"16px",children:[Object(z.jsx)(I.E,{href:"https://exchange.yieldnyan.com/#/swap",mr:"16px",children:e(999,"Buy NYAN")}),Object(z.jsx)(I.E,{href:"https://exchange.yieldnyan.com/#/add/ETH/0x45b07DF4FE00202dd31F2D95f6C06f3A029625D5",children:e(999,"Get LP tokens")})]}),Object(z.jsxs)(I.z,{mb:"16px",children:[e(600,"During Sale"),":"]}),Object(z.jsx)(He,{children:Object(z.jsx)("li",{children:e(602,"While the sale is live, commit your NYAN-LP tokens to buy the IFO tokens")})}),Object(z.jsxs)(I.z,{mb:"16px",children:[e(604,"After Sale"),":"]}),Object(z.jsxs)(He,{children:[Object(z.jsx)("li",{children:e(606,"Claim the tokens you bought, along with any unspent funds.")}),Object(z.jsx)("li",{children:e(608,"Done!")})]}),Object(z.jsx)(I.T,{as:"div",pt:"16px",children:Object(z.jsx)(I.h,{as:"a",variant:"secondary",href:"https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering",children:e(610,"Read more")})})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(I.B,{src:"/images/ifo-bunny.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),Object(z.jsxs)("div",{children:[Object(z.jsx)(Ue,{as:"h2",children:e(512,"Want to launch your own IFO?")}),Object(z.jsx)(I.T,{mb:3,children:e(514,"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")}),Object(z.jsx)(I.h,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSciX7iE8Z9iFkY_cP6fgpG2j4RdBBuxJPD9MFnDZvA3T2THyQ/viewform",external:!0,children:e(516,"Apply to launch")})]})]})]})]})},Qe=H.c.filter((function(e){return!e.isActive})),Je=function(){return Object(z.jsx)(Re,{children:Qe.map((function(e){return Object(z.jsx)(Le,{ifo:e},e.id)}))})};t.default=function(){var e=Object(B.i)().path;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(W,{}),Object(z.jsxs)(N.a,{children:[Object(z.jsx)(U,{}),Object(z.jsx)(B.b,{exact:!0,path:"".concat(e),children:Object(z.jsx)(Ge,{})}),Object(z.jsx)(B.b,{path:"".concat(e,"/history"),children:Object(z.jsx)(Je,{})})]})]})}}}]);
//# sourceMappingURL=9.e8cfb278.chunk.js.map