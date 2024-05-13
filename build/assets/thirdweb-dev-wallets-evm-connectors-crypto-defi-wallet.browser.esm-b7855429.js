import{_ as u,bq as l,br as p,bs as d,bt as m,bu as f,eB as w}from"./index-bf7e6b01.js";import{InjectedConnector as g}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-8df7c727.js";class D extends g{constructor(t){const o={...{name:"Crypto Defi Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:w},...t.options};super({chains:t.chains,options:o,connectorStorage:t.connectorStorage}),u(this,"id",l.cryptoDefiWallet)}async connect(){var r,o;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new p;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if((r=this.options)!=null&&r.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!n){const i=await e.request({method:"eth_requestAccounts"});n=m(i[0])}let s=await this.getChainId(),c=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(i){console.error(`Could not switch to chain id : ${t.chainId}`,i)}(o=this.options)!=null&&o.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:s,unsupported:c},provider:e,account:n};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new f(e):e}}}export{D as CryptoDefiWalletConnector};
