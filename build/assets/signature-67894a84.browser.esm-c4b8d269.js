var ie=Object.defineProperty;var oe=(a,s,e)=>s in a?ie(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var P=(a,s,e)=>(oe(a,typeof s!="symbol"?s+"":s,e),e);import{aK as d,p as v,aO as E,dB as X,aF as q,d as k,cP as _,cW as le,B as L,de as ce,o as W,cr as z,dx as w,dA as V,ae as G,d9 as ue,aS as F,dC as fe,v as he,ct as pe,J as b,cQ as $,dD as U,dE as de,dF as J,aL as me,aM as K,ad as ye,cs as Y,dG as ge,dw as be,dH as we}from"./index-bf7e6b01.js";import{r as C,t as Se}from"./treeify-3e444e74.js";import{S as ee,E as xe}from"./assertEnabled-61eec3a0.browser.esm-0600a3d4.js";import{N as D}from"./setErc20Allowance-ef5f1102.browser.esm-12c5ca27.js";class I{print(){I.print(this)}bufferIndexOf(s,e){if(arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1)return this.binarySearch(s,e,d.Buffer.compare);const r=(n,o)=>n.equals(o);return this.linearSearch(s,e,r)}static binarySearch(s,e,t){let r=0,n=s.length-1;for(;r<=n;){const o=Math.floor((r+n)/2),c=t(s[o],e);if(c===0){for(let i=o-1;i>=0;i--)if(t(s[i],e)!==0)return i+1;return 0}else c<0?r=o+1:n=o-1}return-1}binarySearch(s,e,t){return I.binarySearch(s,e,t)}static linearSearch(s,e,t){for(let r=0;r<s.length;r++)if(t(s[r],e))return r;return-1}linearSearch(s,e,t){return I.linearSearch(s,e,t)}static bufferify(s){if(!d.Buffer.isBuffer(s)){if(typeof s=="object"&&s.words)return d.Buffer.from(s.toString(Pe),"hex");if(I.isHexString(s))return d.Buffer.from(s.replace(/^0x/,""),"hex");if(typeof s=="string")return d.Buffer.from(s);if(typeof s=="bigint")return d.Buffer.from(s.toString(16),"hex");if(s instanceof Uint8Array)return d.Buffer.from(s.buffer);if(typeof s=="number"){let e=s.toString();return e.length%2&&(e=`0${e}`),d.Buffer.from(e,"hex")}else if(ArrayBuffer.isView(s))return d.Buffer.from(s.buffer,s.byteOffset,s.byteLength)}return s}bigNumberify(s){return I.bigNumberify(s)}static bigNumberify(s){if(typeof s=="bigint")return s;if(typeof s=="string")return s.startsWith("0x")&&I.isHexString(s)?BigInt("0x"+s.replace("0x","").toString()):BigInt(s);if(d.Buffer.isBuffer(s))return BigInt("0x"+s.toString("hex"));if(s instanceof Uint8Array)return Ae(s);if(typeof s=="number")return BigInt(s);throw new Error("cannot bigNumberify")}static isHexString(s){return typeof s=="string"&&/^(0x)?[0-9A-Fa-f]*$/.test(s)}static print(s){console.log(s.toString())}bufferToHex(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return I.bufferToHex(s,e)}static bufferToHex(s){return`${(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?"0x":""}${(s||d.Buffer.alloc(0)).toString("hex")}`}bufferify(s){return I.bufferify(s)}bufferifyFn(s){return e=>{const t=s(e);if(d.Buffer.isBuffer(t))return t;if(this.isHexString(t))return d.Buffer.from(t.replace("0x",""),"hex");if(typeof t=="string")return d.Buffer.from(t);if(typeof t=="bigint")return d.Buffer.from(e.toString(16),"hex");if(ArrayBuffer.isView(t))return d.Buffer.from(t.buffer,t.byteOffset,t.byteLength);const r=Be(e.toString("hex")),n=s(r),o=Ie(n);return d.Buffer.from(o,"hex")}}isHexString(s){return I.isHexString(s)}log2(s){return s===1?0:1+this.log2(s/2|0)}zip(s,e){return s.map((t,r)=>[t,e[r]])}static hexZeroPad(s,e){return"0x"+s.replace("0x","").padStart(e,"0")}}var Te=I;function Pe(a){const s=a.words,e=new ArrayBuffer(s.length*4),t=new Uint8Array(e);for(let r=0;r<s.length;r++)t[r*4]=s[r]>>24&255,t[r*4+1]=s[r]>>16&255,t[r*4+2]=s[r]>>8&255,t[r*4+3]=s[r]&255;return e}function Be(a){const s=new Uint8Array(a.length/2);for(let e=0;e<a.length;e+=2)s[e/2]=parseInt(a.substring(e,e+2),16);return s.buffer}function Ie(a){const s=new Uint8Array(a);return Array.from(s).map(e=>e.toString(16).padStart(2,"0")).join("")}function Ae(a){const s=Array.from(a).map(e=>e.toString(16).padStart(2,"0")).join("");return BigInt(`0x${s}`)}class H extends Te{constructor(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};super();P(this,"duplicateOdd",!1);P(this,"concatenator",d.Buffer.concat);P(this,"hashLeaves",!1);P(this,"isBitcoinTree",!1);P(this,"leaves",[]);P(this,"layers",[]);P(this,"sortLeaves",!1);P(this,"sortPairs",!1);P(this,"sort",!1);P(this,"fillDefaultHash",null);P(this,"complete",!1);if(r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if(typeof r.fillDefaultHash=="function")this.fillDefaultHash=r.fillDefaultHash;else if(d.Buffer.isBuffer(r.fillDefaultHash)||typeof r.fillDefaultHash=="string")this.fillDefaultHash=(n,o)=>r.fillDefaultHash;else throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){var e;return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:((e=this.fillDefaultHash)==null?void 0:e.toString())??null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(d.Buffer.compare)),this.fillDefaultHash)for(let t=this.leaves.length;t<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));t++)this.leaves.push(this.bufferify(this.fillDefaultHash(t,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){const t=this.layers.length;this.layers.push([]);const r=this.complete&&t===1&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let n=0;n<e.length;n+=2){if(n>=r){this.layers[t].push(...e.slice(r));break}else if(n+1===e.length&&e.length%2===1){const l=e[e.length-1];let h=l;if(this.isBitcoinTree){h=this.hashFn(this.concatenator([C(l),C(l)])),h=C(this.hashFn(h)),this.layers[t].push(h);continue}else if(!this.duplicateOdd){this.layers[t].push(e[n]);continue}}const o=e[n],c=n+1===e.length?o:e[n+1];let i=null;this.isBitcoinTree?i=[C(o),C(c)]:i=[o,c],this.sortPairs&&i.sort(d.Buffer.compare);let u=this.hashFn(this.concatenator(i));this.isBitcoinTree&&(u=C(this.hashFn(u))),this.layers[t].push(u)}e=this.layers[t]}}addLeaf(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(d.Buffer.compare))),this.leaves.filter(t=>this.bufferIndexOf(e,t,this.sortLeaves)!==-1)):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?d.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);const t=this.getLeaves();for(let r=0;r<t.length;r++)if(t[r].equals(e))return r;return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map(e=>this.bufferToHex(e))}static marshalLeaves(e){return JSON.stringify(e.map(t=>H.bufferToHex(t)),null,2)}static unmarshalLeaves(e){let t=null;if(typeof e=="string")t=JSON.parse(e);else if(e instanceof Object)t=e;else throw new Error("Expected type of string or object");if(!t)return[];if(!Array.isArray(t))throw new Error("Expected JSON string to be array");return t.map(H.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce((e,t)=>(Array.isArray(t)?e.push(t.map(r=>this.bufferToHex(r))):e.push(t),e),[])}getLayersFlat(){const e=this.layers.reduce((t,r)=>(Array.isArray(r)?t.unshift(...r):t.unshift(r),t),[]);return e.unshift(d.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map(e=>this.bufferToHex(e))}getLayerCount(){return this.getLayers().length}getRoot(){return this.layers.length===0?d.Buffer.from([]):this.layers[this.layers.length-1][0]||d.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if(typeof e>"u")throw new Error("leaf is required");e=this.bufferify(e);const r=[];if(!Number.isInteger(t)){t=-1;for(let n=0;n<this.leaves.length;n++)d.Buffer.compare(e,this.leaves[n])===0&&(t=n)}if(t<=-1)return[];for(let n=0;n<this.layers.length;n++){const o=this.layers[n],c=t%2,i=c?t-1:this.isBitcoinTree&&t===o.length-1&&n<this.layers.length-1?t:t+1;i<o.length&&r.push({position:c?"left":"right",data:o[i]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map(r=>this.bufferToHex(r.data))}getProofs(){const e=[],t=[];return this.getProofsDFS(this.layers.length-1,0,e,t),t}getProofsDFS(e,t,r,n){const o=t%2;if(e===-1){o||n.push([...r].reverse());return}if(t>=this.layers[e].length)return;const c=this.layers[e],i=o?t-1:t+1;let u=!1;i<c.length&&(u=!0,r.push({position:o?"left":"right",data:c[i]}));const l=t*2,h=t*2+1;this.getProofsDFS(e-1,l,r,n),this.getProofsDFS(e-1,h,r,n),u&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map(e=>this.bufferToHex(e.data))}getPositionalHexProof(e,t){return this.getProof(e,t).map(r=>[r.position==="left"?0:1,this.bufferToHex(r.data)])}getProofIndices(e,t){const r=2**t;let n=new Set;for(const l of e){let h=r+l;for(;h>1;)n.add(h^1),h=h/2|0}const o=e.map(l=>r+l),c=Array.from(n).sort((l,h)=>l-h).reverse();n=o.concat(c);const i=new Set,u=[];for(let l of n)if(!i.has(l))for(u.push(l);l>1&&(i.add(l),!!i.has(l^1));)l=l/2|0;return u.filter(l=>!e.includes(l-r))}getProofIndicesForUnevenTree(e,t){const r=Math.ceil(Math.log2(t)),n=[];for(let i=0;i<r;i++)t%2!==0&&n.push({index:i,leavesCount:t}),t=Math.ceil(t/2);const o=[];let c=e;for(let i=0;i<r;i++){let l=c.map(f=>f%2===0?f+1:f-1).filter(f=>!c.includes(f));const h=n.find(f=>{let{index:p}=f;return p===i});h&&c.includes(h.leavesCount-1)&&(l=l.slice(0,-1)),o.push(l),c=[...new Set(c.map(f=>f%2===0?f/2:f%2===0?(f+1)/2:(f-1)/2))]}return o}getMultiProof(e,t){if(this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat()),this.isUnevenTree()&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let n=t;this.sortPairs&&(n=n.sort(d.Buffer.compare));let o=n.map(l=>this.bufferIndexOf(this.leaves,l,this.sortLeaves)).sort((l,h)=>l===h?0:l>h?1:-1);if(!o.every(l=>l!==-1))throw new Error("Element does not exist in Merkle tree");const c=[],i=[];let u=[];for(let l=0;l<this.layers.length;l++){const h=this.layers[l];for(let f=0;f<o.length;f++){const p=o[f],m=this.getPairNode(h,p);c.push(h[p]),m&&i.push(m),u.push(p/2|0)}o=u.filter((f,p,m)=>m.indexOf(f)===p),u=[]}return i.filter(l=>!c.includes(l))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map(n=>e[n])}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],n=t;for(const o of e){const c=[];for(const u of n){if(u%2===0){const h=u+1;if(!n.includes(h)&&o[h]){c.push(o[h]);continue}}const l=u-1;if(!n.includes(l)&&o[l]){c.push(o[l]);continue}}r=r.concat(c);const i=new Set;for(const u of n){if(u%2===0){i.add(u/2);continue}if(u%2===0){i.add((u+1)/2);continue}i.add((u-1)/2)}n=Array.from(i)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map(r=>this.bufferToHex(r))}getProofFlags(e,t){if(!Array.isArray(e)||e.length<=0)throw new Error("Invalid Inputs!");let r;if(e.every(Number.isInteger)?r=[...e].sort((i,u)=>i===u?0:i>u?1:-1):r=e.map(i=>this.bufferIndexOf(this.leaves,i,this.sortLeaves)).sort((i,u)=>i===u?0:i>u?1:-1),!r.every(i=>i!==-1))throw new Error("Element does not exist in Merkle tree");const n=t.map(i=>this.bufferify(i)),o=[],c=[];for(let i=0;i<this.layers.length;i++){const u=this.layers[i];r=r.reduce((l,h)=>{if(!o.includes(u[h])){const p=this.getPairNode(u,h),m=n.includes(u[h])||n.includes(p);p&&c.push(!m),o.push(u[h]),o.push(p)}return l.push(h/2|0),l},[])}return c}verify(e,t,r){let n=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let o=0;o<e.length;o++){const c=e[o];let i=null,u=null;if(typeof c=="string")i=this.bufferify(c),u=!0;else if(Array.isArray(c))u=c[0]===0,i=this.bufferify(c[1]);else if(d.Buffer.isBuffer(c))i=c,u=!0;else if(c instanceof Object)i=this.bufferify(c.data),u=c.position==="left";else throw new Error("Expected node to be of type string or object");const l=[];this.isBitcoinTree?(l.push(C(n)),l[u?"unshift":"push"](C(i)),n=this.hashFn(this.concatenator(l)),n=C(this.hashFn(n))):this.sortPairs?d.Buffer.compare(n,i)===-1?(l.push(n,i),n=this.hashFn(this.concatenator(l))):(l.push(i,n),n=this.hashFn(this.concatenator(l))):(l.push(n),l[u?"unshift":"push"](i),n=this.hashFn(this.concatenator(l)))}return d.Buffer.compare(n,r)===0}verifyMultiProof(e,t,r,n,o){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(e,t,r,n,o);const i=Math.ceil(Math.log2(n));e=this.bufferify(e),r=r.map(f=>this.bufferify(f)),o=o.map(f=>this.bufferify(f));const u={};for(const[f,p]of this.zip(t,r))u[2**i+f]=p;for(const[f,p]of this.zip(this.getProofIndices(t,i),o))u[f]=p;let l=Object.keys(u).map(f=>Number(f)).sort((f,p)=>f-p);l=l.slice(0,l.length-1);let h=0;for(;h<l.length;){const f=l[h];if(f>=2&&{}.hasOwnProperty.call(u,f^1)){let p=[u[f-f%2],u[f-f%2+1]];this.sortPairs&&(p=p.sort(d.Buffer.compare));const m=p[1]?this.hashFn(this.concatenator(p)):p[0];u[f/2|0]=m,l.push(f/2|0)}h+=1}return!t.length||{}.hasOwnProperty.call(u,1)&&u[1].equals(e)}verifyMultiProofWithFlags(e,t,r,n){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);const o=t.length,c=n.length,i=[];let u=0,l=0,h=0;for(let f=0;f<c;f++){const p=n[f]?u<o?t[u++]:i[l++]:r[h++],m=u<o?t[u++]:i[l++],S=[p,m].sort(d.Buffer.compare);i[f]=this.hashFn(this.concatenator(S))}return d.Buffer.compare(i[c-1],e)===0}verifyMultiProofForUnevenTree(e,t,r,n,o){e=this.bufferify(e),r=r.map(i=>this.bufferify(i)),o=o.map(i=>this.bufferify(i));const c=this.calculateRootForUnevenTree(t,r,n,o);return e.equals(c)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const e=this.getLayers().map(r=>r.map(n=>this.bufferToHex(n,!1))),t=[];for(let r=0;r<e.length;r++){const n=[];for(let o=0;o<e[r].length;o++){const c={[e[r][o]]:null};if(t.length){c[e[r][o]]={};const i=t.shift(),u=Object.keys(i)[0];if(c[e[r][o]][u]=i[u],t.length){const l=t.shift(),h=Object.keys(l)[0];c[e[r][o]][h]=l[h]}}n.push(c)}t.push(...n)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){const r=t%2===0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){const e=this.getLayersAsObject();return Se.asTree(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){const t=(e==null?void 0:e.length)||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,n){const o=this.zip(e,t).sort((f,p)=>{let[m]=f,[S]=p;return m-S}),c=o.map(f=>{let[p]=f;return p}),i=this.getProofIndicesForUnevenTree(c,r);let u=0;const l=[];for(let f=0;f<i.length;f++){const p=i[f],m=u;u+=p.length,l[f]=this.zip(p,n.slice(m,u))}const h=[o];for(let f=0;f<l.length;f++){const p=l[f].concat(h[f]).sort((g,A)=>{let[x]=g,[T]=A;return x-T}).map(g=>{let[,A]=g;return A}),m=h[f].map(g=>{let[A]=g;return A}),S=[...new Set(m.map(g=>g%2===0?g/2:g%2===0?(g+1)/2:(g-1)/2))],y=[];for(let g=0;g<S.length;g++){const A=S[g],x=p[g*2],T=p[g*2+1],N=T?this.hashFn(this.concatenator([x,T])):x;y.push([A,N])}h.push(y)}return h[h.length-1][0][1]}}function Qe(a){return{startTimestamp:a.startTimestamp,maxClaimableSupply:a.maxClaimableSupply,supplyClaimed:a.supplyClaimed,merkleRoot:a.merkleRoot,pricePerToken:a.pricePerToken,currency:a.currency,quantityLimitPerTransaction:a.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:a.waitTimeInSecondsBetweenClaims||0}}function Ze(a){return{startTimestamp:a.startTimestamp,maxClaimableSupply:a.maxClaimableSupply,supplyClaimed:a.supplyClaimed,merkleRoot:a.merkleRoot,pricePerToken:a.pricePerToken,currency:a.currency,quantityLimitPerWallet:a.maxClaimablePerWallet,metadata:a.metadata||""}}function O(a,s){return a==="unlimited"?v:E(a,s)}async function te(a){const e=Array.from({length:Math.ceil(a.length/25e3)},(n,o)=>a.slice(o*25e3,o*25e3+25e3)),t=[],r=await Promise.all(e.map(n=>J.parseAsync(n)));for(const n of r)t.push(...n);return t}const Ce=2;let j=function(a){return a[a.V1=1]="V1",a[a.V2=2]="V2",a}({});class B{constructor(s,e,t,r,n){this.storage=s,this.shardNybbles=r,this.baseUri=e,this.originalEntriesUri=t,this.tokenDecimals=n,this.shards={},this.trees={}}static async fromUri(s,e){try{const t=await e.downloadJSON(s);if(t.isShardedMerkleTree)return B.fromShardedMerkleTreeInfo(t,e)}catch{return}}static async fromShardedMerkleTreeInfo(s,e){return new B(e,s.baseUri,s.originalEntriesUri,s.shardNybbles,s.tokenDecimals)}static hashEntry(s,e,t,r){switch(r){case j.V1:return G(["address","uint256"],[s.address,O(s.maxClaimable,e)]);case j.V2:return G(["address","uint256","uint256","address"],[s.address,O(s.maxClaimable,e),O(s.price||"unlimited",t),s.currencyAddress||k])}}static async fetchAndCacheDecimals(s,e,t){if(!t)return 18;let r=s[t];return r===void 0&&(r=(await ue(e,t)).decimals,s[t]=r),r}static async buildAndUpload(s,e,t,r,n){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:Ce;const c=await te(s),i={};for(const x of c){const T=x.address.slice(2,2+o).toLowerCase();i[T]===void 0&&(i[T]=[]),i[T].push(x)}const u={},l=await Promise.all(Object.entries(i).map(async x=>{let[T,N]=x;return[T,new H(await Promise.all(N.map(async R=>{const ne=await B.fetchAndCacheDecimals(u,t,R.currencyAddress);return B.hashEntry(R,e,ne,n)})),F,{sort:!0}).getHexRoot()]})),h=Object.fromEntries(l),f=new H(Object.values(h),F,{sort:!0}),p=[];for(const[x,T]of Object.entries(i)){const N={proofs:f.getProof(h[x]).map(R=>"0x"+R.data.toString("hex")),entries:T};p.push({data:JSON.stringify(N),name:`${x}.json`})}const m=await r.uploadBatch(p),S=m[0].slice(0,m[0].lastIndexOf("/")),y=await r.upload(c),g={merkleRoot:f.getHexRoot(),baseUri:S,originalEntriesUri:y,shardNybbles:o,tokenDecimals:e,isShardedMerkleTree:!0},A=await r.upload(g);return{shardedMerkleInfo:g,uri:A}}async getProof(s,e,t){const r=s.slice(2,2+this.shardNybbles).toLowerCase();let n=this.shards[r];const o={};if(n===void 0)try{const h=this.baseUri.endsWith("/")?this.baseUri:`${this.baseUri}/`;n=this.shards[r]=await this.storage.downloadJSON(`${h}${r}.json`);const f=await Promise.all(n.entries.map(async p=>{const m=await B.fetchAndCacheDecimals(o,e,p.currencyAddress);return B.hashEntry(p,this.tokenDecimals,m,t)}));this.trees[r]=new H(f,F,{sort:!0})}catch{return null}const c=n.entries.find(h=>h.address.toLowerCase()===s.toLowerCase());if(!c)return null;const i=await B.fetchAndCacheDecimals(o,e,c.currencyAddress),u=B.hashEntry(c,this.tokenDecimals,i,t),l=this.trees[r].getProof(u).map(h=>"0x"+h.data.toString("hex"));return fe.parseAsync({...c,proof:l.concat(n.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(s){return console.warn("Could not fetch original snapshot entries",s),[]}}}async function ke(a,s,e,t,r,n){if(!e)return null;const o=e[s];if(o){const c=await r.downloadJSON(o);if(c.isShardedMerkleTree&&c.merkleRoot===s)return await(await B.fromShardedMerkleTreeInfo(c,r)).getProof(a,t,n);const i=await X.parseAsync(c);if(s===i.merkleRoot)return i.claims.find(u=>u.address.toLowerCase()===a.toLowerCase())||null}return null}function Ge(a){return{startTimestamp:a.startTimestamp,maxClaimableSupply:a.maxClaimableSupply,supplyClaimed:a.supplyClaimed,merkleRoot:a.merkleRoot.toString(),pricePerToken:a.pricePerToken,currency:a.currency,maxClaimablePerWallet:a.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:a.waitTimeInSecondsBetweenClaims}}function Ke(a){return{startTimestamp:a.startTimestamp,maxClaimableSupply:a.maxClaimableSupply,supplyClaimed:a.supplyClaimed,merkleRoot:a.merkleRoot.toString(),pricePerToken:a.pricePerToken,currency:a.currency,maxClaimablePerWallet:a.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:a.metadata}}async function Le(a,s,e,t,r){const n=a.getSigner(),o=a.getProvider(),c=(await he(()=>import("./index-bf7e6b01.js").then(p=>p.ik),["assets/index-bf7e6b01.js","assets/index-13b858d7.css"])).default,i=new pe(n||o,s,c,a.options,a.storage),u=await a.getSignerAddress(),l=a.address,h=await i.read("allowance",[u,l]),f=L.from(e).mul(L.from(t)).div(E("1",r));h.lt(f)&&await i.sendTransaction("approve",[l,h.add(f)])}async function Ye(a,s,e,t,r,n,o,c,i){let u=O(e.maxClaimablePerWallet,r),l=[q([0],32)],h=e.price,f=e.currencyAddress;try{if(!e.merkleRootHash.toString().startsWith(k)){const y=await ke(a,e.merkleRootHash.toString(),await t(),n.getProvider(),o,i);if(y)l=y.proof,u=y.maxClaimable==="unlimited"?v:E(y.maxClaimable,r),h=y.price===void 0||y.price==="unlimited"?v:await _(n.getProvider(),y.price,y.currencyAddress||k),f=y.currencyAddress||k;else if(i===j.V1)throw new Error("No claim found for this address")}}catch(y){if((y==null?void 0:y.message)==="No claim found for this address")throw y;console.warn("failed to check claim condition merkle root hash, continuing anyways",y)}const p=await n.getCallOverrides()||{},m=h.toString()!==v.toString()?h:e.price,S=f!==k?f:e.currencyAddress;return m.gt(0)&&(le(S)?p.value=L.from(m).mul(s).div(E("1",r)):c&&await Le(n,S,m,s,r)),{overrides:p,proofs:l,maxClaimable:u,price:m,currencyAddress:S,priceInProof:h,currencyAddressInProof:f}}const He=(()=>b.object({name:b.string(),symbol:b.string(),decimals:b.number()}))(),Oe=(()=>He.extend({value:w,displayValue:b.string()}))(),Ne=(()=>b.object({name:b.string().optional()}).catchall(b.unknown()))(),Q=(()=>b.object({startTime:ee,currencyAddress:b.string().default($),price:z.default(0),maxClaimableSupply:U,maxClaimablePerWallet:U,waitInSeconds:V.default(0),merkleRootHash:de.default(q([0],32)),snapshot:b.optional(J).nullable(),metadata:Ne.optional()}))(),ve=(()=>b.array(Q))(),re=(()=>Q.extend({availableSupply:U,currentMintSupply:U,currencyMetadata:Oe.default({value:L.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:w,waitInSeconds:w,startTime:w.transform(a=>new Date(a.toNumber()*1e3)),snapshot:J.optional().nullable()}))();async function Re(a,s,e,t,r){const n=await te(a),o=n.map(u=>u.address);if(new Set(o).size<o.length)throw new we;const i=await B.buildAndUpload(n,s,e,t,r);return{merkleRoot:i.shardedMerkleInfo.merkleRoot,snapshotUri:i.uri}}function Me(a,s){const e=L.from(a),t=L.from(s);return e.eq(t)?0:e.gt(t)?1:-1}async function Ee(a,s,e,t,r){const n=[];return{inputsWithSnapshots:await Promise.all(a.map(async c=>{if(c.snapshot&&c.snapshot.length>0){const i=await Re(c.snapshot,s,e,t,r);n.push(i),c.merkleRootHash=i.merkleRoot}else c.merkleRootHash=q([0],32);return c})),snapshotInfos:n}}async function Ue(a,s,e,t){const r=a.currencyAddress===k?$:a.currencyAddress,n=O(a.maxClaimableSupply,s),o=O(a.maxClaimablePerWallet,s);let c;return a.metadata&&(typeof a.metadata=="string"?c=a.metadata:c=await t.upload(a.metadata)),{startTimestamp:a.startTime,maxClaimableSupply:n,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await _(e,a.price,r),currency:r,merkleRoot:a.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:a.waitInSeconds||0,metadata:c}}async function Xe(a,s,e,t,r){const{inputsWithSnapshots:n,snapshotInfos:o}=await Ee(a,s,e,t,r),c=await ve.parseAsync(n),i=(await Promise.all(c.map(u=>Ue(u,s,e,t)))).sort((u,l)=>Me(u.startTimestamp,l.startTimestamp));return{snapshotInfos:o,sortedConditions:i}}async function De(a,s,e){if(!s)return null;const t=s[a];if(t){const r=await e.downloadJSON(t);if(r.isShardedMerkleTree&&r.merkleRoot===a){const n=await B.fromUri(t,e);return(n==null?void 0:n.getAllEntries())||null}else{const n=await X.parseAsync(r);if(a===n.merkleRoot)return n.claims.map(o=>({address:o.address,maxClaimable:o.maxClaimable,price:o.price,currencyAddress:o.currencyAddress}))}}return null}function M(a,s){return a.toString()===v.toString()?"unlimited":W(a,s)}async function _e(a,s,e,t,r,n){var f;const o=await ce(e,a.currency,a.pricePerToken),c=M(a.maxClaimableSupply,s),i=M(a.maxClaimablePerWallet,s),u=M(L.from(a.maxClaimableSupply).sub(a.supplyClaimed),s),l=M(a.supplyClaimed,s);let h;return a.metadata&&(h=await r.downloadJSON(a.metadata)),re.parseAsync({startTime:a.startTimestamp,maxClaimableSupply:c,maxClaimablePerWallet:i,currentMintSupply:l,availableSupply:u,waitInSeconds:(f=a.waitTimeInSecondsBetweenClaims)==null?void 0:f.toString(),price:L.from(a.pricePerToken),currency:a.currency,currencyAddress:a.currency,currencyMetadata:o,merkleRootHash:a.merkleRoot,snapshot:n?await De(a.merkleRoot,t,r):void 0,metadata:h})}async function et(a,s,e){if(a>=e.length)throw Error(`Index out of bounds - got index: ${a} with ${e.length} conditions`);const t=e[a].currencyMetadata.decimals,r=e[a].price,n=W(r,t),o=await Q.parseAsync({...e[a],price:n,...s}),c=await re.parseAsync({...o,price:r});return e.map((i,u)=>{let l;u===a?l=c:l=i;const h=W(l.price,t);return{...l,price:h}})}let tt=function(a){return a.NotEnoughSupply="There is not enough supply to claim.",a.AddressNotAllowed="This address is not on the allowlist.",a.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",a.ClaimPhaseNotStarted="Claim phase has not started yet.",a.AlreadyClaimed="You have already claimed the token.",a.WrongPriceOrCurrency="Incorrect price or currency.",a.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",a.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",a.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",a.NoClaimConditionSet="There is no claim condition set.",a.NoWallet="No wallet connected.",a.Unknown="No claim conditions found.",a}({});function Fe(a){if(a===void 0){const s=Buffer.alloc(16);return me({},s),K(ye(s.toString("hex")))}else return K(a)}const se=(()=>b.object({to:Y.refine(a=>a.toLowerCase()!==k,{message:"Cannot create payload to mint to zero address"}),price:z.default(0),currencyAddress:ge.default($),mintStartTime:ee,mintEndTime:xe,uid:b.string().optional().transform(a=>Fe(a)),primarySaleRecipient:Y.default(k)}))(),We=(()=>se.extend({quantity:z}))(),rt=(()=>We.extend({mintStartTime:w,mintEndTime:w}))(),Z=(()=>se.extend({metadata:D,royaltyRecipient:b.string().default(k),royaltyBps:be.default(0)}))(),ae=(()=>Z.extend({metadata:D.default(""),uri:b.string(),royaltyBps:w,mintStartTime:w,mintEndTime:w}))(),je=(()=>Z.extend({metadata:D.default(""),quantity:V}))(),st=(()=>je.extend({tokenId:V}))(),at=(()=>ae.extend({tokenId:w,quantity:w}))(),nt=(()=>Z.extend({metadata:D.default(""),quantity:w.default(1)}))(),it=(()=>ae.extend({quantity:w.default(1)}))(),ot=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],lt=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ct=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ut=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];export{se as B,tt as C,ct as M,j as S,Le as a,Qe as b,O as c,Ze as d,Ye as e,ke as f,st as g,at as h,We as i,rt as j,ot as k,Ge as l,nt as m,Ke as n,it as o,Xe as p,lt as q,Fe as r,ut as s,_e as t,et as u};
