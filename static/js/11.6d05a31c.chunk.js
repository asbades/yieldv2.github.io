(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{891:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b}));var c=n(2),r=n.n(c),a=n(6),i=n(93),o=n.n(i),s=n(80),l=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},900:function(e,t,n){"use strict";var c,r=n(13),a=(n(0),n(3)),i=n(14),o=n(1),s=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text})),l=function(e){var t=e.onClick,n=e.expanded;return Object(o.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(o.jsx)(i.T,{color:"text",bold:!0,children:n?"Hide":"Details"}),n?Object(o.jsx)(i.w,{}):Object(o.jsx)(i.t,{})]})};l.defaultProps={expanded:!1},t.a=l},936:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Qe}));var c,r,a,i,o,s,l,d,b,j,u,x,p,O,m,h,f,y,k,v=n(16),g=n(13),T=n(0),S=n(36),C=n(27),w=n(3),L=n(8),I=n.n(L),A=n(51),q=n(14),P=n(240),N=n(402),z=n(136),U=n(61),Q=n(162),D=n(34),B=n(24),E=n(38),M=n(19),F=n(235),W=n(900),Y=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},R=n(1),V=w.e.div(c||(c=Object(g.a)(["\n  margin-top: 24px;\n"]))),H=Object(w.e)(q.E)(r||(r=Object(g.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),G=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.addLiquidityUrl,i=Object(E.a)();return Object(R.jsxs)(V,{children:[Object(R.jsxs)(q.y,{justifyContent:"space-between",children:[Object(R.jsxs)(q.T,{children:[i(316,"Stake"),":"]}),Object(R.jsx)(H,{href:a,children:r})]}),!n&&Object(R.jsxs)(q.y,{justifyContent:"space-between",children:[Object(R.jsxs)(q.T,{children:[i(23,"Total Liquidity"),":"]}),Object(R.jsx)(q.T,{children:c})]}),Object(R.jsx)(q.y,{justifyContent:"flex-start",children:Object(R.jsx)(q.D,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},J=n(118),X=Object(w.e)(q.y)(a||(a=Object(g.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),$=Object(w.e)(q.S)(i||(i=Object(g.a)(["\n  margin-left: 4px;\n"]))),K=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(R.jsxs)(X,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(R.jsx)(q.B,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(R.jsxs)(q.y,{flexDirection:"column",alignItems:"flex-end",children:[Object(R.jsx)(q.z,{mb:"4px",children:t}),Object(R.jsxs)(q.y,{justifyContent:"center",children:[c?Object(R.jsx)(J.b,{}):Object(R.jsx)(J.c,{}),Object(R.jsx)($,{variant:"secondary",children:n})]})]})]})},Z=n(2),_=n.n(Z),ee=n(6),te=n(891),ne=n(234),ce=n(242),re=n(406),ae=n(407),ie=n(53),oe=n(104),se=w.e.div(o||(o=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),le=Object(w.e)(q.C)(s||(s=Object(g.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),de=Object(w.e)(q.T)(l||(l=Object(g.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),be=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,o=e.inputTitle,s=Object(E.a)(),l="0"===t||!t,d=l?"0":parseFloat(t).toFixed(4);return Object(R.jsxs)("div",{style:{position:"relative"},children:[Object(R.jsxs)(se,{isWarning:l,children:[Object(R.jsxs)(q.y,{justifyContent:"space-between",pl:"16px",children:[Object(R.jsx)(q.T,{fontSize:"14px",children:o}),Object(R.jsxs)(q.T,{fontSize:"14px",children:[s(999,"Balance"),": ",d.toLocaleString()]})]}),Object(R.jsxs)(q.y,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(R.jsx)(le,{onChange:c,placeholder:"0",value:a}),Object(R.jsx)(q.h,{size:"sm",onClick:r,mr:"8px",children:s(452,"Max")}),Object(R.jsx)(q.T,{fontSize:"16px",children:n})]})]}),l&&Object(R.jsxs)(de,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(R.jsxs)(q.D,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[s(999,"get")," ",n]})]})]})},je=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=e.addLiquidityUrl,o=Object(T.useState)(""),s=Object(M.a)(o,2),l=s[0],d=s[1],b=Object(T.useState)(!1),j=Object(M.a)(b,2),u=j[0],x=j[1],p=Object(E.a)(),O=Object(T.useMemo)((function(){return Object(ie.b)(t)}),[t]),m=Object(T.useCallback)((function(e){d(e.currentTarget.value)}),[d]),h=Object(T.useCallback)((function(){d(O)}),[O,d]);return Object(R.jsxs)(q.I,{title:p(999,"Stake LP tokens"),onDismiss:c,children:[Object(R.jsx)(be,{value:l,onSelectMax:h,onChange:m,max:O,symbol:a,addLiquidityUrl:i,inputTitle:p(999,"Stake")}),Object(R.jsxs)(oe.a,{children:[Object(R.jsx)(q.h,{variant:"secondary",onClick:c,fullWidth:!0,children:p(462,"Cancel")}),Object(R.jsx)(q.h,{fullWidth:!0,disabled:u||"0"===O||"0"===l,onClick:Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]}),Object(R.jsxs)(q.E,{href:i,style:{alignSelf:"center"},children:[p(999,"Get")," ",a]})]})},ue=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(T.useState)(""),o=Object(M.a)(i,2),s=o[0],l=o[1],d=Object(T.useState)(!1),b=Object(M.a)(d,2),j=b[0],u=b[1],x=Object(E.a)(),p=Object(T.useMemo)((function(){return Object(ie.b)(c)}),[c]),O=Object(T.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(T.useCallback)((function(){l(p)}),[p,l]);return Object(R.jsxs)(q.I,{title:x(999,"Unstake LP tokens"),onDismiss:n,children:[Object(R.jsx)(be,{onSelectMax:m,onChange:O,value:s,max:p,symbol:a,inputTitle:x(999,"Unstake")}),Object(R.jsxs)(oe.a,{children:[Object(R.jsx)(q.h,{variant:"secondary",onClick:n,fullWidth:!0,children:x(462,"Cancel")}),Object(R.jsx)(q.h,{disabled:j,onClick:Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(s);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),fullWidth:!0,children:j?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},xe=w.e.div(d||(d=Object(g.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),pe=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,i=Object(E.a)(),o=Object(re.a)(r).onStake,s=Object(ae.a)(r).onUnstake,l=Object(ie.a)(t),d=l.toLocaleString(),b=Object(q.db)(Object(R.jsx)(je,{max:n,onConfirm:o,tokenName:c,addLiquidityUrl:a})),j=Object(M.a)(b,1)[0],u=Object(q.db)(Object(R.jsx)(ue,{max:t,onConfirm:s,tokenName:c})),x=Object(M.a)(u,1)[0];return Object(R.jsxs)(q.y,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(q.z,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(R.jsx)(q.h,{onClick:j,children:i(999,"Stake LP")}):Object(R.jsxs)(xe,{children:[Object(R.jsx)(q.A,{variant:"tertiary",onClick:x,mr:"6px",children:Object(R.jsx)(q.H,{color:"primary"})}),Object(R.jsx)(q.A,{variant:"tertiary",onClick:j,children:Object(R.jsx)(q.a,{color:"primary"})})]})]})},Oe=n(250),me=function(e){var t=e.earnings,n=e.pid,c=Object(E.a)(),r=Object(T.useState)(!1),a=Object(M.a)(r,2),i=a[0],o=a[1],s=Object(Oe.b)(n).onReward,l=Object(ie.a)(t),d=l.toLocaleString();return Object(R.jsxs)(q.y,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(q.z,{color:"text",children:d}),Object(R.jsx)(q.h,{disabled:0===l||i,onClick:Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,s();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})},he=w.e.div(b||(b=Object(g.a)(["\n  padding-top: 16px;\n"]))),fe=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=e.addLiquidityUrl,a=Object(E.a)(),i=Object(T.useState)(!1),o=Object(M.a)(i,2),s=o[0],l=o[1],d=Object(U.a)(t.lpSymbol),b=d.pid,j=d.lpAddresses,u=Object(U.b)(b),x=u.allowance,p=u.tokenBalance,O=u.stakedBalance,m=u.earnings,h=j[56],f=t.lpSymbol.toUpperCase(),y=c&&x&&x.isGreaterThan(0),k=Object(T.useMemo)((function(){return Object(te.b)(n,h)}),[n,h]),v=Object(ce.a)(k).onApprove,g=Object(T.useCallback)(Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[v]);return Object(R.jsxs)(he,{children:[Object(R.jsxs)(q.y,{children:[Object(R.jsx)(q.T,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"NYAN"}),Object(R.jsx)(q.T,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(R.jsx)(me,{earnings:m,pid:b}),Object(R.jsxs)(q.y,{children:[Object(R.jsx)(q.T,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:f}),Object(R.jsx)(q.T,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),c?y?Object(R.jsx)(pe,{stakedBalance:O,tokenBalance:p,tokenName:f,pid:b,addLiquidityUrl:r}):Object(R.jsx)(q.h,{mt:"8px",fullWidth:!0,disabled:s,onClick:g,children:a(999,"Approve Contract")}):Object(R.jsx)(ne.a,{mt:"8px",fullWidth:!0})]})},ye=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},ke=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},ve=w.e.div(j||(j=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),ge=w.e.div(u||(u=Object(g.a)(["\n  margin-bottom: '10px';\n"]))),Te=Object(w.e)(q.T)(x||(x=Object(g.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Se=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,r=e.apy,a=e.addLiquidityUrl,i=Object(E.a)(),o=r.times(new I.a(100)).toNumber(),s=1e3/c.toNumber(),l=ye({numberOfDays:1,farmApy:o,cakePrice:c}),d=ye({numberOfDays:7,farmApy:o,cakePrice:c}),b=ye({numberOfDays:30,farmApy:o,cakePrice:c}),j=ye({numberOfDays:365,farmApy:o,cakePrice:c});return Object(R.jsxs)(q.I,{title:"ROI",onDismiss:t,children:[Object(R.jsxs)(ve,{children:[Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"NYAN per $1000")})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:"1d"})}),Object(R.jsx)(ge,{children:Object(R.jsxs)(q.T,{children:[ke({amountEarned:l,amountInvested:s}),"%"]})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:l})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:"7d"})}),Object(R.jsx)(ge,{children:Object(R.jsxs)(q.T,{children:[ke({amountEarned:d,amountInvested:s}),"%"]})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:d})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:"30d"})}),Object(R.jsx)(ge,{children:Object(R.jsxs)(q.T,{children:[ke({amountEarned:b,amountInvested:s}),"%"]})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:b})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:"365d(APY)"})}),Object(R.jsx)(ge,{children:Object(R.jsxs)(q.T,{children:[ke({amountEarned:j,amountInvested:s}),"%"]})}),Object(R.jsx)(ge,{children:Object(R.jsx)(q.T,{children:j})})]}),Object(R.jsx)(Te,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(R.jsx)(q.y,{justifyContent:"center",children:Object(R.jsxs)(q.E,{href:a,children:[i(999,"Get")," ",n]})})]})},Ce=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(q.db)(Object(R.jsx)(Se,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),i=Object(M.a)(a,1)[0];return Object(R.jsx)(q.A,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(R.jsx)(q.k,{})})},we=(Object(w.f)(p||(p=Object(g.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),w.e.div(O||(O=Object(g.a)(["\n  border: 2px solid #fa6241;\n  border-radius: 32px;\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  box-shadow: 0 0 18px 0 #fa6241;\n"])))),Le=w.e.div(m||(m=Object(g.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.13);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ie=w.e.div(h||(h=Object(g.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ae=w.e.div(f||(f=Object(g.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),qe=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,i=e.account,o=Object(E.a)(),s=Object(T.useState)(!1),l=Object(M.a)(s,2),d=l[0],b=l[1],j=F.a.includes(t.tokenSymbol),u=t.pid.toString().toLocaleLowerCase(),x=Object(T.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===B.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===B.b.NYAN?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),p=x?"$".concat(Number(x).toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),m=t.dual?t.dual.earnLabel:"NYAN",h=t.apy&&t.apy.times(new I.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),f=t.quoteTokenAdresses,y=t.quoteTokenSymbol,k=t.tokenAddresses,v=Y({quoteTokenAdresses:f,quoteTokenSymbol:y,tokenAddresses:k}),g="".concat(P.a,"/").concat(v);return Object(R.jsxs)(Le,{children:["NYAN"===t.tokenSymbol&&Object(R.jsx)(we,{}),Object(R.jsx)(K,{lpLabel:O,multiplier:t.multiplier,isCommunityFarm:j,farmImage:u,tokenSymbol:t.tokenSymbol}),!n&&Object(R.jsxs)(q.y,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsxs)(q.T,{children:[o(352,"APR"),":"]}),Object(R.jsx)(q.T,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Ce,{lpLabel:O,addLiquidityUrl:g,cakePrice:c,apy:t.apy}),h,"%"]}):Object(R.jsx)(q.Q,{height:24,width:80})})]}),Object(R.jsxs)(q.y,{justifyContent:"space-between",children:[Object(R.jsxs)(q.T,{children:[o(318,"Earn"),":"]}),Object(R.jsx)(q.T,{bold:!0,children:m})]}),Object(R.jsx)(fe,{farm:t,ethereum:a,account:i,addLiquidityUrl:g}),Object(R.jsx)(Ie,{}),Object(R.jsx)(W.a,{onClick:function(){return b(!d)},expanded:d}),Object(R.jsx)(Ae,{expanded:d,children:Object(R.jsx)(G,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:p,lpLabel:O,addLiquidityUrl:g})})]})},Pe=n(62),Ne=function(){var e=Object(S.i)(),t=e.url,n=e.isExact,c=Object(E.a)();return Object(R.jsx)(ze,{children:Object(R.jsxs)(q.i,{activeIndex:n?0:1,size:"sm",variant:"primary",children:[Object(R.jsx)(q.j,{as:Pe.b,to:"".concat(t),children:c(999,"Active")}),Object(R.jsx)(q.j,{as:Pe.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},ze=w.e.div(y||(y=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ue=w.e.div(k||(k=Object(g.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg3.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Qe=function(){var e=Object(S.i)().path,t=Object(E.a)(),n=Object(U.c)(),c=Object(U.h)(),r=Object(U.g)(),a=Object(A.j)(),i=a.account,o=a.ethereum,s=Object(C.b)(),l=Object(Q.a)().fastRefresh;Object(T.useEffect)((function(){i&&s(Object(D.b)(i))}),[i,s,l]);var d=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),b=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),j=Object(T.useCallback)((function(e,t){var a,s=new I.a((null===(a=n.find((function(e){return e.pid===P.e})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=P.d.times(e.poolWeight),n=t.times(P.b),c=s.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===B.b.BUSD||e.quoteTokenSymbol===B.b.UST)c=s.times(n).div(e.lpTotalInQuoteToken).times(r);else if(e.quoteTokenSymbol===B.b.NYAN)c=n.div(e.lpTotalInQuoteToken);else if(e.dual){var a=e&&s.times(t).times(P.b).div(e.lpTotalInQuoteToken),i=e.tokenPriceVsQuote&&new I.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(P.b).div(e.lpTotalInQuoteToken);c=a&&i&&a.plus(i)}return Object(v.a)(Object(v.a)({},e),{},{apy:c})})).map((function(e){return Object(R.jsx)(qe,{farm:e,removed:t,bnbPrice:r,cakePrice:c,ethereum:o,account:i},e.pid)}))}),[n,r,c,o,i]);return Object(R.jsxs)(z.a,{children:[Object(R.jsx)(Ue,{children:Object(R.jsx)(q.z,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:t(576,"Stake LP tokens to earn")})}),Object(R.jsx)(Ne,{}),Object(R.jsx)("div",{children:Object(R.jsxs)(N.a,{children:[Object(R.jsx)(S.b,{exact:!0,path:"".concat(e),children:j(d,!1)}),Object(R.jsx)(S.b,{exact:!0,path:"".concat(e,"/history"),children:j(b,!0)})]})})]})}}}]);
//# sourceMappingURL=11.6d05a31c.chunk.js.map