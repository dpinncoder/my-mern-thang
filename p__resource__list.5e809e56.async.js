(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1032],{16894:function(L,C,e){"use strict";var E=e(54787),P=e(47888);C.ZP=P.Z},52514:function(L,C,e){"use strict";e.r(C);var E=e(14781),P=e(23492),f=e(13062),o=e(71230),y=e(57663),b=e(71577),I=e(89032),T=e(15746),A=e(47673),U=e(4107),p=e(9715),a=e(86835),n=e(11849),i=e(34792),_=e(48086),h=e(3182),r=e(71194),t=e(50146),m=e(2824),u=e(94043),s=e.n(u),V=e(57119),X=e(49101),M=e(67294),Y=e(75362),q=e(16894),j=e(43581),K=e(23689),c=e(85893),ee=function(){var re=(0,M.useRef)(),ne=(0,M.useState)({data:[]}),S=(0,m.Z)(ne,2),te=S[0],ae=S[1],se=(0,M.useState)(1),w=(0,m.Z)(se,2),B=w[0],z=w[1],_e=(0,M.useState)({}),k=(0,m.Z)(_e,2),W=k[0],ue=k[1],le=(0,M.useState)({}),$=(0,m.Z)(le,2),F=$[0],oe=$[1],ie=(0,M.useState)(0),x=(0,m.Z)(ie,2),ce=x[0],de=x[1],me=(0,M.useState)(!1),N=(0,m.Z)(me,2),J=N[0],Z=N[1],fe=t.Z.confirm,pe=function(){var D=(0,h.Z)(s().mark(function l(){var v,g,O,R;return s().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return v=_.default.loading("Loading..."),d.prev=1,d.next=4,(0,K.yC)((0,n.Z)((0,n.Z)({current:B,pageSize:10},W),F));case 4:return g=d.sent,v(),ae(g),Z(!1),d.abrupt("return",g);case 11:return d.prev=11,d.t0=d.catch(1),v(),O=JSON.stringify(d.t0),R=JSON.parse(O),console.log(R),_.default.error(R.data.errorMessage),d.abrupt("return",!1);case 19:case"end":return d.stop()}},l,null,[[1,11]])}));return function(){return D.apply(this,arguments)}}(),he=function(l){fe({title:"Do you Want to delete ".concat(l.name,"?"),icon:(0,c.jsx)(V.Z,{}),content:"".concat(l.name," will be deleted permanently."),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){var v=(0,h.Z)(s().mark(function O(){var R;return s().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("OK"),d.next=3,(0,K.Od)(l._id);case 3:R=d.sent,R.success&&(_.default.success(R.message),Z(!0));case 5:case"end":return d.stop()}},O)}));function g(){return v.apply(this,arguments)}return g}(),onCancel:function(){console.log("Cancel")}})},G=function(){var D=(0,h.Z)(s().mark(function l(){var v;return s().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,K.QX)((0,n.Z)({},W));case 2:v=O.sent,de(v.total);case 4:case"end":return O.stop()}},l)}));return function(){return D.apply(this,arguments)}}();(0,M.useEffect)(function(){J&&pe()},[J]),(0,M.useEffect)(function(){Z(!0)},[B,F]),(0,M.useEffect)(function(){G(),Z(!0)},[]),(0,M.useEffect)(function(){G(),Z(!0)},[W]);var Ee=a.Z.useForm(),ve=(0,m.Z)(Ee,1),H=ve[0],Q=function(l){z(1),ue(l)},Oe=[{title:"Name",dataIndex:"name",sorter:!0,tip:"Resource name",render:function(l,v){return(0,c.jsx)("a",{onClick:function(){j.m8.push("/resources/edit/".concat(v._id))},children:l})}},{title:"Alias",dataIndex:"alias"},{title:"Type",dataIndex:"type"},{title:"Updated At",dataIndex:"updatedAt",valueType:"dateTime",sorter:!0},{title:"Actions",dataIndex:"option",valueType:"option",render:function(l,v){return[(0,c.jsx)("a",{onClick:function(){he(v)},children:"Delete"},"config")]}}];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(Y.ZP,{children:[(0,c.jsx)(a.Z,{form:H,name:"advanced_search",className:"ant-advanced-search-form",onFinish:Q,style:{display:"flex","align-items":"left",background:"white",padding:"10px"},children:(0,c.jsxs)(o.Z,{gutter:4,style:{width:"50%"},children:[(0,c.jsx)(T.Z,{flex:16,children:(0,c.jsx)(a.Z.Item,{name:"name",label:"Name",children:(0,c.jsx)(U.Z,{placeholder:"Search keyword for name or alias"})})},"name"),(0,c.jsxs)(T.Z,{flex:8,children:[(0,c.jsx)(b.Z,{type:"primary",htmlType:"submit",children:"Search"}),(0,c.jsx)(b.Z,{style:{margin:"0 8px"},onClick:function(){H.resetFields(),Q({})},children:"Clear"})]})]})}),(0,c.jsx)(q.ZP,{headerTitle:"Resources",actionRef:re,rowKey:"_id",search:!1,options:{reload:!1},toolBarRender:function(){return[(0,c.jsxs)(b.Z,{type:"primary",onClick:function(){j.m8.push("/resources/new")},children:[(0,c.jsx)(X.Z,{})," New"]},"primary")]},onChange:function(l,v,g){console.log("_sorter",g);var O={};O.sort=g.field,O.order=g.order==="ascend"?1:-1,oe(O)},dataSource:te.data,columns:Oe,rowSelection:!1,pagination:!1})]}),(0,c.jsx)(P.Z,{total:ce,defaultPageSize:"10",current:B,showSizeChanger:!1,showQuickJumper:!1,showTotal:function(l){return"Total ".concat(l," items")},defaultCurrent:B,onChange:function(l){z(l),Z(!0)},style:{display:"flex","justify-content":"center","align-items":"center",background:"white",padding:"10px"}})]})};C.default=ee},23689:function(L,C,e){"use strict";e.d(C,{yC:function(){return y},QX:function(){return I},FO:function(){return A},Vx:function(){return p},a1:function(){return n},Od:function(){return _}});var E=e(3182),P=e(94043),f=e.n(P),o=e(39031);function y(r){return b.apply(this,arguments)}function b(){return b=(0,E.Z)(f().mark(function r(t){return f().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,o.v_)("/api/resources/search",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),b.apply(this,arguments)}function I(r,t){return T.apply(this,arguments)}function T(){return T=(0,E.Z)(f().mark(function r(t,m){return f().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.v_)("/api/resources/count",t,m);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),T.apply(this,arguments)}function A(r,t){return U.apply(this,arguments)}function U(){return U=(0,E.Z)(f().mark(function r(t,m){return f().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.U2)("/api/resources/detail?id=".concat(t),{},m);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),U.apply(this,arguments)}function p(r){return a.apply(this,arguments)}function a(){return a=(0,E.Z)(f().mark(function r(t){return f().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,o.gz)("/api/resources/update",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),a.apply(this,arguments)}function n(r){return i.apply(this,arguments)}function i(){return i=(0,E.Z)(f().mark(function r(t){return f().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,o.v_)("/api/resources/create",t);case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},r)})),i.apply(this,arguments)}function _(r,t){return h.apply(this,arguments)}function h(){return h=(0,E.Z)(f().mark(function r(t,m){return f().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.IV)("/api/resources/delete?id=".concat(t),{},m);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),h.apply(this,arguments)}},39031:function(L,C,e){"use strict";e.d(C,{U2:function(){return I},v_:function(){return T},gz:function(){return A},IV:function(){return U}});var E=e(3182),P=e(11849),f=e(94043),o=e.n(f),y=e(11238),b=e(43581);y.ZP.interceptors.request.use(function(p,a){var n=localStorage.getItem("auth");if(n&&JSON.parse(n)){var i=JSON.parse(n),_=i.token;_?a.headers.Authorization="Bearer ".concat(_):a.headers.Authorization=null}return console.log("url","http://localhost:8002",p),a.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(p),options:(0,P.Z)((0,P.Z)({},a),{},{interceptors:!0})}}),y.ZP.interceptors.response.use(function(){var p=(0,E.Z)(o().mark(function a(n,i){var _,h;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.status!==401){t.next=4;break}return localStorage.removeItem("auth"),b.m8.replace({pathname:"/user/login"}),t.abrupt("return",{name:n.name});case 4:if(n.status!==403){t.next=7;break}return b.m8.replace({pathname:"/exception/403"}),t.abrupt("return",{name:n.name});case 7:if(n.status!==404){t.next=10;break}return b.m8.replace({pathname:"/exception/404"}),t.abrupt("return",{name:n.name});case 10:if(n.status!==400){t.next=18;break}return t.next=13,n.clone().json();case 13:return _=t.sent,console.log("data",_),h=new Error(_.message),h.error=_.error,t.abrupt("return",h);case 18:return t.abrupt("return",n);case 19:case"end":return t.stop()}},a)}));return function(a,n){return p.apply(this,arguments)}}());var I=function(){var p=(0,E.Z)(o().mark(function a(n,i,_){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.ZP)(n,(0,P.Z)({method:"GET",params:i,skipErrorHandler:!0},_||{})));case 1:case"end":return r.stop()}},a)}));return function(n,i,_){return p.apply(this,arguments)}}(),T=function(){var p=(0,E.Z)(o().mark(function a(n,i,_){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,y.ZP)(n,(0,P.Z)({method:"POST",data:i,skipErrorHandler:!0},_||{}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},a)}));return function(n,i,_){return p.apply(this,arguments)}}(),A=function(){var p=(0,E.Z)(o().mark(function a(n,i,_){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.ZP)(n,(0,P.Z)({method:"PUT",data:i,skipErrorHandler:!0},_||{})));case 1:case"end":return r.stop()}},a)}));return function(n,i,_){return p.apply(this,arguments)}}(),U=function(){var p=(0,E.Z)(o().mark(function a(n,i,_){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,y.ZP)(n,(0,P.Z)({method:"DELETE",data:i,skipErrorHandler:!0},_||{})));case 1:case"end":return r.stop()}},a)}));return function(n,i,_){return p.apply(this,arguments)}}()}}]);