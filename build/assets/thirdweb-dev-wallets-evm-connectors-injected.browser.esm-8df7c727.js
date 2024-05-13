import{bw as f,_ as d,br as h,bt as u,bs as l,bu as g,n as m,bx as w,by as C,bz as p,bA as y,bB as I,bC as v,bD as P}from"./index-bf7e6b01.js";function b(a){var i;if(!a)return"Injected";const t=e=>{if(e.isAvalanche)return"Core Wallet";if(e.isBitKeep)return"BitKeep";if(e.isBraveWallet)return"Brave Wallet";if(e.isCoinbaseWallet)return"Coinbase Wallet";if(e.isExodus)return"Exodus";if(e.isFrame)return"Frame";if(e.isKuCoinWallet)return"KuCoin Wallet";if(e.isMathWallet)return"MathWallet";if(e.isOneInchIOSWallet||e.isOneInchAndroidWallet)return"1inch Wallet";if(e.isOpera)return"Opera";if(e.isPortal)return"Ripio Portal";if(e.isTally)return"Tally";if(e.isTokenPocket)return"TokenPocket";if(e.isTokenary)return"Tokenary";if(e.isTrust||e.isTrustWallet)return"Trust Wallet";if(e.isMetaMask)return"MetaMask";if(e.isImToken)return"imToken"};if((i=a.providers)!=null&&i.length){const e=new Set;let o=1;for(const s of a.providers){let r=t(s);r||(r=`Unknown Wallet #${o}`,o+=1),e.add(r)}const n=[...e];return n.length?n:n[0]??"Injected"}return t(a)??"Injected"}class A extends f{constructor(t){const e={...{shimDisconnect:!0,getProvider:()=>{if(P(globalThis.window))return globalThis.window.ethereum}},...t.options};super({chains:t.chains,options:e}),d(this,"shimDisconnectKey","injected.shimDisconnect"),d(this,"onAccountsChanged",async n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:u(n[0])})}),d(this,"onChainChanged",n=>{const s=m(n),r=this.isChainUnsupported(s);this.emit("change",{chain:{id:s,unsupported:r}})}),d(this,"onDisconnect",async n=>{if(n.code===1013&&await this.getProvider())try{if(await this.getAccount())return}catch{}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});const o=e.getProvider();if(typeof e.name=="string")this.name=e.name;else if(o){const n=b(o);e.name?this.name=e.name(n):typeof n=="string"?this.name=n:this.name=n[0]}else this.name="Injected";this.id="injected",this.ready=!!o,this.connectorStorage=t.connectorStorage}async connect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const i=await this.getProvider();if(!i)throw new h;this.setupListeners(),this.emit("message",{type:"connecting"});const e=await i.request({method:"eth_requestAccounts"}),o=u(e[0]);let n=await this.getChainId(),s=this.isChainUnsupported(n);if(t.chainId&&n!==t.chainId)try{await this.switchChain(t.chainId),n=t.chainId,s=this.isChainUnsupported(t.chainId)}catch(c){console.error(`Could not switch to chain id: ${t.chainId}`,c)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const r={account:o,chain:{id:n,unsupported:s},provider:i};return this.emit("connect",r),r}catch(i){throw this.isUserRejectedRequestError(i)?new l(i):i.code===-32002?new g(i):i}}async disconnect(){const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const t=await this.getProvider();if(!t)throw new h;const i=await t.request({method:"eth_accounts"});return u(i[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new h;return t.request({method:"eth_chainId"}).then(m)}async getProvider(){const t=this.options.getProvider();return t&&(this._provider=t),this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[i,e]=await Promise.all([this.getProvider(),this.getAccount()]);return new w(i,t).getSigner(e)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new h;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var o,n;const i=await this.getProvider();if(!i)throw new h;const e=C(t);try{await i.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]});const s=this.chains.find(r=>r.chainId===t);return s||{chainId:t,name:`Chain ${e}`,slug:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){const r=this.chains.find(c=>c.chainId===t);if(!r)throw new p({chainId:t,connectorId:this.id});if(s.code===4902||((n=(o=s==null?void 0:s.data)==null?void 0:o.originalError)==null?void 0:n.code)===4902)try{return await i.request({method:"wallet_addEthereumChain",params:[{chainId:e,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:y(r),blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),r}catch(c){throw this.isUserRejectedRequestError(c)?new l(s):new I}throw this.isUserRejectedRequestError(s)?new l(s):new v(s)}}async setupListeners(){const t=await this.getProvider();t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(t){return t.code===4001}}export{A as InjectedConnector};
