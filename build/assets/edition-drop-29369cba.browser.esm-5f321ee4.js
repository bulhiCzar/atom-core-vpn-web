var u=Object.defineProperty;var d=(s,a,t)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var o=(s,a,t)=>(d(s,typeof a!="symbol"?a+"":a,t),t);import{dM as g,ct as C,cb as f,dN as w,cu as y,cS as W,d as T,c4 as i,c7 as A,B as R}from"./index-bf7e6b01.js";import{a as E,b as S,C as b,G as k}from"./contract-appuri-b5a92ae1.browser.esm-f18767a0.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as N,a as O}from"./contract-owner-62e3d0ab.browser.esm-a3580d34.js";import{C as B}from"./contract-platform-fee-e1d5c326.browser.esm-9039625e.js";import{C as I}from"./contract-roles-9a1af853.browser.esm-dfeb98ca.js";import{C as P}from"./contract-sales-d232f5fc.browser.esm-860c4f36.js";import{D as F}from"./erc-1155-b6da3e7c.browser.esm-6253dc44.js";import{S as M}from"./erc-1155-standard-264d3d9a.browser.esm-ceff764b.js";import{P as _}from"./thirdweb-checkout-45843748.browser.esm-1ba1a1e4.js";import"./setErc20Allowance-ef5f1102.browser.esm-12c5ca27.js";import"./QueryParams-5e052686.browser.esm-da7383a6.js";import"./signature-67894a84.browser.esm-c4b8d269.js";import"./treeify-3e444e74.js";import"./assertEnabled-61eec3a0.browser.esm-0600a3d4.js";import"./index-e18a6d9c.js";class x{constructor(a){this.events=a}async getAllClaimerAddresses(a){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&R.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(a):!1);return Array.from(new Set(t.filter(r=>{var e;return typeof((e=r.data)==null?void 0:e.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends M{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,n,e);super(l,e,h);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,e,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,e,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,e,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=f.parse(c),this.metadata=new E(this.contractWrapper,w,this.storage),this.app=new S(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,p.contractRoles),this.royalties=new N(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage),this.events=new b(this.contractWrapper),this.history=new x(this.events),this.encoder=new y(this.contractWrapper),this.estimator=new k(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.checkout=new _(this.contractWrapper),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[W("transfer"),T])}async getClaimTransaction(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:n})}async prepare(t,r,e){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};o(p,"contractRoles",g);let m=p;export{m as EditionDrop};
