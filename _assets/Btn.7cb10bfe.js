let e=document.createElement("style");e.innerHTML=".demo[data-v-1db28e9c]{background:#fff}",document.head.appendChild(e);import{a as s,g as a,c_ as t,v as l,c$ as o,O as u,Q as r,i as n,co as m,o as c,j as d,k as i,n as p,p as E,m as R,ab as f,R as S}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import{A as T}from"./index.e160a50a.js";import{D as _}from"./index.d8b61c9c.js";import y from"./CurrentPermissionMode.db01ad1a.js";import{s as x}from"./index.585c4537.js";var P=s({components:{Alert:T,CurrentPermissionMode:y,Divider:_,Authority:x},setup(){const{changeRole:e,hasPermission:s}=o();return{userStore:a,RoleEnum:t,isSuper:l((()=>a.getRoleListState.includes(t.SUPER))),isTest:l((()=>a.getRoleListState.includes(t.TEST))),changeRole:e,hasPermission:s}}});const h=S("data-v-1db28e9c");u("data-v-1db28e9c");const v={class:"demo p-4 m-4"},g=E(" 当前角色: "),b={class:"mt-4"},U=E(" 权限切换(请先切换权限模式为前端角色权限模式): "),j=E("组件方式判断权限(有需要可以自行全局注册)"),k=E("拥有super角色权限可见"),C=E("拥有test角色权限可见"),A=E("拥有[test,super]角色权限可见"),L=E("函数方式方式判断权限(适用于函数内部过滤)"),M=E(" 拥有super角色权限可见 "),D=E(" 拥有test角色权限可见 "),w=E(" 拥有[test,super]角色权限可见 "),H=E("指令方式方式判断权限(该方式不能动态修改权限.)"),I=E(" 拥有super角色权限可见 "),O=E(" 拥有test角色权限可见 "),Q=E(" 拥有[test,super]角色权限可见 ");r();const $=h(((e,s,a,t,l,o)=>{const u=n("Alert"),r=n("CurrentPermissionMode"),S=n("a-button"),T=n("a-button-group"),_=n("Divider"),y=n("Authority"),x=m("auth");return c(),d("div",v,[i(u,{message:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口","show-icon":""}),i(r),i("p",null,[g,i("a",null,p(e.userStore.getRoleListState),1)]),i(u,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),i("div",b,[U,i(T,null,{default:h((()=>[i(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:h((()=>[E(p(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),i(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:h((()=>[E(p(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),i(_,null,{default:h((()=>[j])),_:1}),i(y,{value:e.RoleEnum.SUPER},{default:h((()=>[i(S,{type:"primary",class:"mx-4"},{default:h((()=>[k])),_:1})])),_:1},8,["value"]),i(y,{value:e.RoleEnum.TEST},{default:h((()=>[i(S,{color:"success",class:"mx-4"},{default:h((()=>[C])),_:1})])),_:1},8,["value"]),i(y,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:h((()=>[i(S,{color:"error",class:"mx-4"},{default:h((()=>[A])),_:1})])),_:1},8,["value"]),i(_,null,{default:h((()=>[L])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(c(),d(S,{key:0,type:"primary",class:"mx-4"},{default:h((()=>[M])),_:1})):R("",!0),e.hasPermission(e.RoleEnum.TEST)?(c(),d(S,{key:1,color:"success",class:"mx-4"},{default:h((()=>[D])),_:1})):R("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(c(),d(S,{key:2,color:"error",class:"mx-4"},{default:h((()=>[w])),_:1})):R("",!0),i(_,null,{default:h((()=>[H])),_:1}),f(i(S,{type:"primary",class:"mx-4"},{default:h((()=>[I])),_:1},512),[[x,e.RoleEnum.SUPER]]),f(i(S,{color:"success",class:"mx-4"},{default:h((()=>[O])),_:1},512),[[x,e.RoleEnum.TEST]]),f(i(S,{color:"error",class:"mx-4"},{default:h((()=>[Q])),_:1},512),[[x,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])}));P.render=$,P.__scopeId="data-v-1db28e9c";export default P;