var f=Object.defineProperty;var C=(p,o,t)=>o in p?f(p,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[o]=t;var n=(p,o,t)=>(C(p,typeof o!="symbol"?o+"":o,t),t);import{D as h}from"./QueryParams-5e052686.browser.esm-da7383a6.js";import{dM as w,ct as W,cb as A,dY as T,cu as y,dr as b,B as i,cS as S,d as E,c4 as s,c7 as d}from"./index-bf7e6b01.js";import{a as R,b as k,G as v,C as N}from"./contract-appuri-b5a92ae1.browser.esm-f18767a0.js";import{C as I}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as U,D as x,a as M}from"./contract-owner-62e3d0ab.browser.esm-a3580d34.js";import{C as O}from"./contract-platform-fee-e1d5c326.browser.esm-9039625e.js";import{C as F}from"./contract-roles-9a1af853.browser.esm-dfeb98ca.js";import{C as _}from"./contract-sales-d232f5fc.browser.esm-860c4f36.js";import{D as L}from"./drop-claim-conditions-d8589bc7.browser.esm-eb45dbdd.js";import{S as B}from"./erc-721-standard-e22ed133.browser.esm-ca3d04c3.js";import{P as D}from"./thirdweb-checkout-45843748.browser.esm-1ba1a1e4.js";import"./setErc20Allowance-ef5f1102.browser.esm-12c5ca27.js";import"./signature-67894a84.browser.esm-c4b8d269.js";import"./treeify-3e444e74.js";import"./assertEnabled-61eec3a0.browser.esm-0600a3d4.js";import"./index-e18a6d9c.js";import"./erc-721-67cd0472.browser.esm-53fe49b8.js";const l=class l extends B{constructor(t,r,e){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,c,a,e);super(g,e,m);n(this,"createBatch",s(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));n(this,"claimTo",s((()=>{var t=this;return async function(r,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})()));n(this,"claim",s((()=>{var t=this;return async function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})()));n(this,"burn",s(async t=>this.erc721.burn.prepare(t)));n(this,"transfer",s(async(t,r)=>this.erc721.transfer.prepare(t,r)));n(this,"setApprovalForAll",s(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));n(this,"setApprovalForToken",s(async(t,r)=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})));this.abi=A.parse(c||[]),this.metadata=new R(this.contractWrapper,T,this.storage),this.app=new k(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,l.contractRoles),this.royalties=new U(this.contractWrapper,this.metadata),this.sales=new _(this.contractWrapper),this.claimConditions=new L(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new v(this.contractWrapper),this.events=new N(this.contractWrapper),this.platformFees=new O(this.contractWrapper),this.revealer=new x(this.contractWrapper,this.storage,b.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new I(this.contractWrapper),this.owner=new M(this.contractWrapper),this.checkout=new D(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||h).toNumber(),a=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(a).keys()).map(c=>this.get(c.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||h).toNumber(),a=i.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),c=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),a.toNumber()+e));return await Promise.all(Array.from(Array(c.sub(a).toNumber()).keys()).map(m=>this.erc721.getTokenMetadata(a.add(m).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[S("transfer"),E])}async getClaimTransaction(t,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,e){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};n(l,"contractRoles",w);let u=l;export{u as NFTDrop};
