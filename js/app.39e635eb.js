(function(){"use strict";var e={2304:function(e,t,n){var o=n(9242),a=n(3396),i=n(7139),r=n.p+"img/gptvison.4545c5d7.png";const s=(0,a._)("img",{src:r},null,-1),c=(0,a._)("h4",null,"Um descritor de imagem empoderado pelo ChatGPT",-1),l=(0,a._)("p",null,null,-1),u=(0,a._)("p",null,null,-1),p={class:"input-group mb-3"},m=(0,a._)("p",{id:"status"},null,-1),d=(0,a._)("p",null,null,-1),g=(0,a._)("p",null,null,-1),f=["src"],h={align:"center"},y=(0,a._)("p",null,null,-1),v={class:"input-group mb-3"};function b(e,t,n,r,b,w){return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,c,l,u,(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>b.imageUrl=e),placeholder:"Image URL"},null,512),[[o.nr,b.imageUrl]]),(0,a._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=e=>w.describeImage())},"Describe")]),m,d,g,(0,a._)("img",{src:b.imageUrl,height:"300",width:"400",alt:"Imagem"},null,8,f),(0,a._)("p",h,(0,i.zw)(b.imageDescription),1),y,(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{class:"form-control w-50","onUpdate:modelValue":t[2]||(t[2]=e=>b.question=e),placeholder:"Faça uma pergunta sobre o conteúdo da imagem"},null,512),[[o.nr,b.question]]),(0,a._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=e=>w.Questao())},"Send")])],64)}var w=n(4161),_=(n(5654),n(7795)),I={apiKey:"AIzaSyDfND4jTbo2FyfcCVg2phUqGY45euNuQdU",authDomain:"sysaut-581a8.firebaseapp.com",projectId:"sysaut-581a8",storageBucket:"sysaut-581a8.appspot.com",messagingSenderId:"281534621983",appId:"1:281534621983:web:e98f707ff6124fa9aca82a",measurementId:"G-BH2N1785B3"};const A=(0,_.ZF)(I);var O=A,S=n(36);const U=(0,S.ad)(O);var k={name:"App",data(){return{apiKey:"",registrosKey:[],imageUrl:"https://www1.uea.edu.br/img/uea-new.png",imageDescription:"",question:""}},mounted(){this.getKey()},methods:{async getKey(){const e=(0,S.IO)((0,S.hJ)(U,"Key")),t=await(0,S.PL)(e);t.forEach((e=>{this.apiKey=e.data().key}))},async describeImage(){console.log("apiKey:"+this.apiKey),document.getElementById("status").innerHTML="AGUARDE A DESCRIÇÂO!";try{const e=await w.Z.post("https://api.openai.com/v1/completions",{model:"text-davinci-003",prompt:`Estou enviado um link da imagem para você descrever em poucas palavras o conteúdo da imagem. Segue o link da imagem: ${this.imageUrl}`,max_tokens:2825,user:"1",stop:["#",";"],temperature:.9,presence_penalty:0,frequency_penalty:0},{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(200===e.status){const t=e.data.choices[0].text.trim();this.resposta=t,this.imageDescription=t,document.getElementById("status").innerHTML="";const n=window.speechSynthesis,o=new SpeechSynthesisUtterance(this.resposta);o.voice=n.getVoices().find((e=>"Microsoft Daniel - Portuguese (Brazil)"===e.name)),n.speak(o),console.log(n.getVoices())}else console.log("Erro ao acessar a API do OpenAI"),console.log(e)}catch(e){console.error("Erro ao fazer a solicitação para a API do OpenAI",e)}},async Questao(){console.log(this.imageUrl),document.getElementById("status").innerHTML="AGUARDE A RESPOSTA!";try{const e=await w.Z.post("https://api.openai.com/v1/completions",{model:"text-davinci-003",prompt:this.question+":"+this.imageUrl,max_tokens:2825,user:"1",stop:["#",";"],temperature:.9,presence_penalty:0,frequency_penalty:0},{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}});if(200===e.status){const t=e.data.choices[0].text.trim();this.resposta=t,this.imageDescription=t,document.getElementById("status").innerHTML="";const n=window.speechSynthesis,o=new SpeechSynthesisUtterance(this.resposta);o.voice=n.getVoices().find((e=>"Microsoft Maria - Portuguese (Brazil)"===e.name)),n.speak(o),console.log(n.getVoices())}else console.log("Erro ao acessar a API do OpenAI"),console.log(e)}catch(e){console.error("Erro ao fazer a solicitação para a API do OpenAI",e)}}}},E=n(89);const j=(0,E.Z)(k,[["render",b]]);var D=j;(0,o.ri)(D).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(o);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkgptvisao"]=self["webpackChunkgptvisao"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2304)}));o=n.O(o)})();
//# sourceMappingURL=app.39e635eb.js.map