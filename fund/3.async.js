(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{EtUQ:function(e,t,a){"use strict";var r=a("qIgq");Object.defineProperty(t,"__esModule",{value:!0});var n=a("mrSG"),l=n.__importStar(a("q1tI")),o=a("gdfu"),u=a("YTim"),i=n.__importDefault(a("wd/R")),m=a("SLhE"),s=a("sn++"),d=o.DatePicker.RangePicker,c=m.dateFormat(new Date).split("-").map(Number),p=r(c,3),f=p[0],h=p[1],v=p[2];h=Number(h)-1;var g=["totalAmount","leftAmount","profitRate","profit","fundAmount","fundGrowthRate","maxPrincipal","accumulatedProfit","totalProfitRate","position"],E={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}};class P extends l.Component{constructor(){super(...arguments),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{e||(console.log("compare\u8868\u5355",t),this.props.onSearch(t))})})}render(){var e=this.props.form.getFieldDecorator,t={rules:[{type:"array",required:!0,message:"\u8bf7\u9009\u62e9\u65f6\u95f4\u8303\u56f4"}],initialValue:[i.default([Number(f)-1,h,v]),i.default([f,h,v])]};return l.default.createElement(o.Card,{title:"\u57fa\u91d1\u7b56\u7565\u6bd4\u8f83",style:{textAlign:"initial",margin:"20px 0"}},l.default.createElement(o.Form,{onSubmit:this.handleSubmit},l.default.createElement(o.Form.Item,Object.assign({},E,{label:"\u5df2\u6709\u57fa\u91d1\u7b56\u7565"}),e("stragegyChecked",{rules:[{required:!0,message:"\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u57fa\u91d1\u7b56\u7565"}]})(l.default.createElement(o.Checkbox.Group,{style:{width:"100%"}},Object.keys(u.allSavedCondition).map((e,t)=>l.default.createElement(o.Checkbox,{key:t,value:e},e))))),l.default.createElement(o.Form.Item,Object.assign({},E,{label:"\u5bf9\u6bd4\u7684\u6570\u636e"}),e("chartChecked",{initialValue:["totalAmount","accumulatedProfit","totalProfitRate","position"],rules:[{required:!0,message:"\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u6570\u636e"}]})(l.default.createElement(o.Checkbox.Group,{style:{width:"100%"}},g.map((e,t)=>l.default.createElement(o.Checkbox,{key:t,value:e},s.keyTextMap[e]))))),l.default.createElement(o.Form.Item,Object.assign({},E,{label:"\u65f6\u95f4\u8303\u56f4"}),e("dateRange",t)(l.default.createElement(d,{placeholder:["\u5f00\u59cb\u65f6\u95f4","\u7ed3\u675f\u65f6\u95f4"],ranges:{"\u6700\u8fd1\u4e00\u5e74":[i.default([Number(f)-1,h,v]),i.default([f,h,v])],"\u6700\u8fd1\u4e24\u5e74":[i.default([Number(f)-2,h,v]),i.default([f,h,v])],"\u6700\u8fd1\u4e09\u5e74":[i.default([Number(f)-3,h,v]),i.default([f,h,v])],"\u6700\u8fd1\u4e94\u5e74":[i.default([Number(f)-5,h,v]),i.default([f,h,v])]},disabledDate:m.disabledFuture}))),l.default.createElement(o.Form.Item,{wrapperCol:{offset:4}},l.default.createElement(o.Button,{type:"primary",htmlType:"submit"},"\u6bd4\u8f83\u7b56\u7565"))))}}t.CompareForm=P,t.CompareSearchForm=o.Form.create({name:"compare-search"})(P)},Pdyw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mrSG"),n=r.__importStar(a("q1tI")),l=a("6N5B"),o=a("sn++"),u=a("SLhE"),i=a("QxXQ"),m={chart:{forceFit:!0,height:450,padding:[20,80,100,80]}},s=["fundGrowthRate","profitRate","totalProfitRate","position"];class d extends n.Component{render(){var e=this.props.data;if(!e||0===e.length)return null;var t=e.map(e=>{var t=0,a=e.data.reduce((e,a)=>{var r=a.position;return t=r>t?r:t,e+r},0)/e.data.length,r=e.data[e.data.length-1].totalProfitRate/a,n=e.data[e.data.length-1].accumulatedProfit/t;return{name:e.name,avgPos:u.roundToFix(100*a),maxPos:u.roundToFix(100*t),profitPerInvest:u.roundToFix(r),profitAmountPerPos:u.roundToFix(n)}}),a=e.reduce((e,t)=>{return[...e,...t.data]},[]),r=this.props.chartList;return console.log("allData",a),n.default.createElement("div",null,r.map((e,t)=>{var r={y:e,data:a,textMap:o.keyTextMap,commonProp:m,formatVal:s.includes(e)?u.formatPercentVal:void 0};return n.default.createElement(l.CommonFundLine,Object.assign({key:t},r))}),n.default.createElement(i.ComparePosition,{commonProp:m,textMap:o.keyTextMap,data:t}))}}t.CompareChart=d},QxXQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mrSG"),n=r.__importStar(a("q1tI")),l=a("yP6+"),o=r.__importDefault(a("cQSq"));class u extends n.Component{render(){var e=this.props,t=(e.title,e.subTitle,e.data),a=e.textMap,r=e.commonProp,u=(e.legendProp,r.chart),i=new o.default;console.log("\u4ed3\u4f4d\u5bf9\u6bd4\u6570\u636e",t);var m=i.createView().source(t);m.transform({type:"fold",fields:["avgPos","maxPos"],key:"type",value:"value"});var s={avgPos:{alias:"\u5e73\u5747\u4ed3\u4f4d"},maxPos:{alias:"\u6700\u5927\u4ed3\u4f4d"}};return n.default.createElement("div",null,n.default.createElement("h1",{className:"main-title"},"\u6295\u8d44\u7b56\u7565 \u5e73\u5747\u4ed3\u4f4d\u4e0e\u6700\u5927\u4ed3\u4f4d"),n.default.createElement(l.Chart,Object.assign({data:m},u,{forceFit:!0,scale:s}),n.default.createElement(l.Legend,{itemFormatter:e=>{return a[e]}}),n.default.createElement(l.Axis,{name:"name"}),n.default.createElement(l.Axis,{name:"value"}),n.default.createElement(l.Tooltip,null),n.default.createElement(l.Geom,{type:"interval",color:"type",position:"name*value",adjust:[{type:"dodge",marginRatio:1/32}]})),n.default.createElement("h1",{className:"main-title"},"\u6536\u76ca/\u5e73\u5747\u4ed3\u4f4d\u6bd4"),n.default.createElement(l.Chart,Object.assign({data:t},u,{forceFit:!0,scale:s}),n.default.createElement(l.Axis,{name:"name"}),n.default.createElement(l.Axis,{name:"profitPerInvest"}),n.default.createElement(l.Tooltip,null),n.default.createElement(l.Geom,{type:"interval",position:"name*profitPerInvest"})),n.default.createElement("h1",{className:"main-title"},"\u7d2f\u8ba1\u6536\u76ca/\u6700\u9ad8\u4ed3\u4f4d"),n.default.createElement(l.Chart,Object.assign({data:t},u,{forceFit:!0,scale:s}),n.default.createElement(l.Axis,{name:"name"}),n.default.createElement(l.Axis,{name:"profitAmountPerPos"}),n.default.createElement(l.Tooltip,null),n.default.createElement(l.Geom,{type:"interval",position:"name*profitAmountPerPos"})))}}t.ComparePosition=u},WzYl:function(e,t,a){"use strict";var r=a("d6i3"),n=a("p0pE"),l=a("1l/V");Object.defineProperty(t,"__esModule",{value:!0});var o=a("mrSG"),u=o.__importStar(a("q1tI")),i=o.__importDefault(a("EDuE")),m=a("EtUQ"),s=a("Pdyw"),d=o.__importDefault(a("QeBL")),c=a("YTim"),p=a("SLhE");class f extends u.Component{constructor(){var e;super(...arguments),e=this,this.state={stragegyData:[],chartList:[]},this.handleSearch=function(){var t=l(r.mark(function t(a){var o,u,i;return r.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=new d.default({}),u=a.stragegyChecked.map(function(){var e=l(r.mark(function e(t){var l,u,i;return r.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l=n({},c.allSavedCondition[t],{dateRange:a.dateRange}),e.next=3,o.getFundData(l);case 3:return u=e.sent,i=u.data.map(e=>{return{name:t,origin:e,totalAmount:e.totalAmount,leftAmount:e.leftAmount,date:e.date,profit:e.profit,profitRate:e.profitRate,fundAmount:e.fundAmount,fundVal:Number(e.curFund.val),fundGrowthRate:e.fundGrowthRate,dateBuyAmount:e.dateBuyAmount,dateSellAmount:e.dateSellAmount,accumulatedProfit:e.accumulatedProfit,maxPrincipal:e.maxPrincipal,totalProfitRate:e.totalProfitRate,position:p.roundToFix(e.fundAmount/e.totalAmount,4)}}),e.abrupt("return",{name:t,data:i});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),t.next=4,Promise.all(u);case 4:i=t.sent,e.setState({stragegyData:i,chartList:a.chartChecked});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}render(){var e=this.state,t=e.stragegyData,a=e.chartList;return u.default.createElement("div",{className:i.default.normal},u.default.createElement(m.CompareSearchForm,{onSearch:this.handleSearch}),u.default.createElement(s.CompareChart,{data:t,chartList:a}))}}t.default=f}}]);