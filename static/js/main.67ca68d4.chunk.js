(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(9),n(2));var o=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},j=n.p+"static/media/alarm1.250030d2.wav",l=n(0),u=function(e){var t=e.minutes,n=e.seconds;return Object(l.jsxs)("div",{className:"countdown",children:[Object(l.jsx)("h2",{className:"minutes",children:t}),Object(l.jsx)("h2",{className:"seconds",children:n})]})};var d=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(25),r=Object(a.a)(s,2),d=r[0],b=r[1],A=Object(c.useState)(!1),O=Object(a.a)(A,2),h=O[0],m=O[1],x=new Audio(j),f=function(){return x.play()};o((function(){h&&(0===n?0!==d?(i(59),b(d-1)):(f(),m(!1),b(1),i(0)):i(n-1))}),1e3);var v=function(e){e&&b(e),m(!0)},B=n<10?"0".concat(n):n,S=d<10?"0".concat(d):d;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"POMODORO"}),Object(l.jsx)(u,{seconds:B,minutes:S}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return v()},disabled:!!h,children:"START"}),Object(l.jsx)("button",{onClick:function(){return m(!1)},disabled:!h,children:"PAUSE"}),Object(l.jsx)("button",{onClick:function(){m(!1),b(25),i(0)},children:"RESET"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"break",children:"BREAK"}),Object(l.jsx)("button",{onClick:function(){return v(5)},children:"SHORT"}),Object(l.jsx)("button",{onClick:function(){return v(15)},children:"LONG"}),Object(l.jsxs)("div",{className:"preview-audio",children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFrSURBVEiJxdUxa1RBFIbh5ySrlSwSCClEiWDIDzDCFmIrtpb+AQsbsRTEQiyC3TYpU6RPihSx1y6ClaDEShE7ERVFjDkWexeGm7tJ1r2rB05xvznzvTPcmTmRmaYZM5NMjohTEfEqIvoR0W0syswTJxZxrqbdxld8wM1Dc8Ywv4Mf2GwYu4BtHODWWADMYQtZ5dMjatfxE9dOBMBVvCvMjwN0sINPWBgeoAX0GvIh9mvmhwBYxfniu1sBVoeA9w0mR2Ud8BrP0Sm0R/iCs8Y0bwL08AuPC20e33FvYkBl+KQ6qjOF9gwbE120InZwBsuFtoeltgC7BndgpdDetgkYGW0BrlReLwrtEvbaAtzAN7wptKVWABHRw130M/Og0uZxGS+Z8kXrGPz5iw2Lu44HmD1mE7u4n5n71eq7Bi/vWmZ+nv5j91+f63/ScGpGy1isae20zBHA0/iIPrpNNTFsCn8bETGbmb9Hjf8BkiioFa5ScSkAAAAASUVORK5CYII=",alt:"audio"}),Object(l.jsx)("button",{onClick:f,children:"Alarm sound"})]})]})]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("p",{children:"HOW IT WORKS:"}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"Pick a task."}),Object(l.jsx)("li",{children:"Start a 25 minute timer."}),Object(l.jsx)("li",{children:"Focus on your task until time is up."}),Object(l.jsx)("li",{children:"Take a 5 minute break."}),Object(l.jsx)("li",{children:"Every 4 pomodoros, take a 15-30 minute break."})]})]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.67ca68d4.chunk.js.map