import{dI as e,dJ as _,J as n,dK as c,cW as f,v as I,ct as N}from"./index-bf7e6b01.js";const l=(()=>n.object({}).catchall(n.union([c,n.unknown()])))(),u=(()=>n.union([n.array(n.array(l)).transform(a=>a.flat()),n.array(l),l]).optional().nullable())(),h=(()=>n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:e.nullable().optional(),animation_url:e.optional().nullable()}))(),p=(()=>h.extend({external_url:e.nullable().optional(),background_color:_.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])))(),O=(()=>n.union([p,n.string()]))(),S=(()=>p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()}))();async function k(a,t,o,i){if(f(o))i.value=t;else{const g=(await I(()=>import("./index-bf7e6b01.js").then(w=>w.ik),["assets/index-bf7e6b01.js","assets/index-13b858d7.css"])).default,m=a.getSigner(),b=a.getProvider(),r=new N(m||b,o,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await r.read("allowance",[d,s])).lt(t)&&await r.sendTransaction("approve",[s,t]),i}}export{h as B,p as C,O as N,S as a,k as s};
