var s=Object.defineProperty;var i=(a,r,t)=>r in a?s(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var e=(a,r,t)=>(i(a,typeof r!="symbol"?r+"":r,t),t);import{e as c}from"./index-bf7e6b01.js";import{E as o}from"./erc-20-00f3ed05.browser.esm-aaa8519f.js";class u{constructor(r,t,n){e(this,"transfer",c(async(r,t)=>this.erc20.transfer.prepare(r,t)));e(this,"transferFrom",c(async(r,t,n)=>this.erc20.transferFrom.prepare(r,t,n)));e(this,"setAllowance",c(async(r,t)=>this.erc20.setAllowance.prepare(r,t)));e(this,"transferBatch",c(async r=>this.erc20.transferBatch.prepare(r)));this.contractWrapper=r,this.storage=t,this.erc20=new o(this.contractWrapper,this.storage,n),this._chainId=n}get chainId(){return this._chainId}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(r){return this.erc20.balanceOf(r)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(r){return await this.erc20.allowance(r)}async allowanceOf(r,t){return await this.erc20.allowanceOf(r,t)}}export{u as S};
