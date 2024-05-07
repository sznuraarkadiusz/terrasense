(function(){"use strict";var e={2113:function(e,t,a){var r=a(5130),o=a(6768);const n={class:"flex flex-col min-h-screen bg-gray-100"},s={class:"flex flex-1"},l={class:"flex flex-col flex-1 main bg-white"};function i(e,t,a,r,i,u){const c=(0,o.g2)("NavbarDashboard"),d=(0,o.g2)("SidebarDashboard"),m=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(c),(0,o.Lk)("div",s,[(0,o.bF)(d,{class:"w-56"}),(0,o.Lk)("div",l,[(0,o.bF)(m,{class:"flex-1"})])])])}var u=a(4232);const c=(0,o.Lk)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[(0,o.Lk)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1),d=[c],m=(0,o.Lk)("p",{class:"text-base lg:block hidden"},"Terra Sense v1.0.1",-1),g={class:"flex items-center"},h={key:0},p={key:1,class:"flex items-center"},b=["src"],f={key:1,class:"navbar__menu absolute top-full left-0 bg-gray-800 w-full z-50"},k={class:"p-3 hover:bg-gray-700"},y={class:"p-3 hover:bg-gray-700"},v={class:"p-3 hover:bg-gray-700"},w={class:"p-3 hover:bg-gray-700"},L={class:"p-3 hover:bg-gray-700"};function x(e,t,a,r,n,s){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",{style:(0,u.Tr)({backgroundColor:s.navbarBgColor}),class:"text-white py-3 px-4 flex justify-between items-center relative"},[n.user?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>s.toggleMenu&&s.toggleMenu(...e)),class:"block lg:hidden p-2"},d)):(0,o.Q3)("",!0),m,(0,o.Lk)("div",g,[n.user?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("img",{src:n.Logo,alt:"Terra Sense avatar",class:"w-8 h-8 rounded-full mr-2"},null,8,b),(0,o.Lk)("span",null,(0,u.v_)(n.user),1),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.logout&&s.logout(...e)),class:"ml-4 py-2 px-4 bg-red-700 hover:bg-red-600 rounded"},"Wyloguj")])):((0,o.uX)(),(0,o.CE)("div",h,[(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.handleRFIDLogin&&s.handleRFIDLogin(...e)),class:"py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded"},"Zaloguj")]))]),n.menuOpen?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",k,[(0,o.bF)(l,{to:"/",onClick:s.toggleMenu},{default:(0,o.k6)((()=>[(0,o.eW)("Strona główna")])),_:1},8,["onClick"])]),(0,o.Lk)("li",y,[(0,o.bF)(l,{to:"/notifications",onClick:s.toggleMenu},{default:(0,o.k6)((()=>[(0,o.eW)("Powiadomienia")])),_:1},8,["onClick"])]),(0,o.Lk)("li",v,[(0,o.bF)(l,{to:"/settings"},{default:(0,o.k6)((()=>[(0,o.eW)("Ustawienia")])),_:1})]),(0,o.Lk)("li",w,[(0,o.Lk)("a",{href:"#",onClick:t[3]||(t[3]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},"Pomoc")]),(0,o.Lk)("li",L,[(0,o.Lk)("a",{href:"http://192.168.68.155:3000",target:"_blank",onClick:t[4]||(t[4]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},"Grafana")])])])):(0,o.Q3)("",!0)],4)}a(4114);var S=a(8355),C=a.p+"img/logo_transparent.e80ca2e3.png",_=a(782),E={data(){return{user:null,menuOpen:!1,Logo:C}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},handleRFIDLogin(){alert("Proszę zbliżyć kartę RFID do czytnika."),S.A.post("http://192.168.68.155:5000/scan-rfid").then((e=>{"success"===e.data.status?(this.user=e.data.user,localStorage.setItem("isAuthenticated","true"),alert("Zalogowano pomyślnie: "+e.data.user),this.$nextTick((()=>{this.$router.push("/").catch((e=>{console.log(e)}))}))):alert("Logowanie nieudane: "+e.data.message)})).catch((e=>{console.error("Błąd logowania RFID: ",e),alert("Błąd logowania: "+e.message)}))},logout(){S.A.get("http://192.168.68.155:5000/logout").then((e=>{"success"===e.data.status?(this.user=null,localStorage.removeItem("isAuthenticated"),alert("Wylogowano pomyślnie"),this.$router.push("/login-prompt")):alert("Problem z wylogowaniem: "+e.data.message)}))}},checkLoginStatus(){const e=localStorage.getItem("isAuthenticated");e&&(this.user={name:"admin"})},mounted(){S.A.get("http://192.168.68.155:5000/session-status").then((e=>{e.data.logged_in&&(this.user=e.data.user)})),this.checkLoginStatus()},computed:{...(0,_.aH)(["sidebarBgColor"]),navbarBgColor(){return this.sidebarBgColor}}},A=a(1241);const z=(0,A.A)(E,[["render",x]]);var j=z;const I={class:"p-5 sidebar__logo"},X=["src"],T={class:"sidebar__menu"},D={class:"p-3 hover:bg-gray-700"},B={class:"p-3 hover:bg-gray-700"},F={class:"p-3 hover:bg-gray-700"},W={class:"p-3 hover:bg-gray-700"},M=(0,o.Lk)("li",{class:"p-3 hover:bg-gray-700"},[(0,o.Lk)("a",{href:"#"},"Pomoc")],-1),O=(0,o.Lk)("li",{class:"p-3 hover:bg-gray-700"},[(0,o.Lk)("a",{href:"http://192.168.68.155:3000",target:"_blank"},"Grafana")],-1);function P(e,t,a,r,n,s){const l=(0,o.g2)("router-link");return n.user?((0,o.uX)(),(0,o.CE)("div",{key:0,style:(0,u.Tr)({backgroundColor:e.sidebarBgColor}),class:"sidebar lg:block hidden"},[(0,o.Lk)("div",I,[(0,o.Lk)("img",{src:n.Logo,alt:"Terra Sense - Safety is the basis!"},null,8,X)]),(0,o.Lk)("div",T,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",D,[(0,o.bF)(l,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Strona główna")])),_:1})]),(0,o.Lk)("li",B,[(0,o.bF)(l,{to:"/notifications"},{default:(0,o.k6)((()=>[(0,o.eW)("Powiadomienia")])),_:1})]),(0,o.Lk)("li",F,[(0,o.bF)(l,{to:"/calendar"},{default:(0,o.k6)((()=>[(0,o.eW)("Historia")])),_:1})]),(0,o.Lk)("li",W,[(0,o.bF)(l,{to:"/settings"},{default:(0,o.k6)((()=>[(0,o.eW)("Ustawienia")])),_:1})]),M,O])])],4)):(0,o.Q3)("",!0)}var Q={name:"SidebarDashboard",data(){return{user:null,Logo:C}},computed:{...(0,_.aH)(["sidebarBgColor"])},methods:{checkLoginStatus(){const e=localStorage.getItem("isAuthenticated");e&&(this.user={name:"admin"})}},mounted(){this.checkLoginStatus()}};const U=(0,A.A)(Q,[["render",P]]);var H=U,$={name:"App",components:{NavbarDashboard:j,SidebarDashboard:H}};const J=(0,A.A)($,[["render",i]]);var K=J,V=a(1387);const N={class:"dashboard__sensors bg-gray-100"},R=(0,o.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Panel monitoringu",-1),G={class:"flex flex-wrap justify-center"},Z=(0,o.Lk)("footer",{class:"p-3 w-full text-center"},[(0,o.Lk)("p",{class:"text-sm text-gray-600"},[(0,o.eW)(" Copyright © 2024 Terra Sense – Wszelkie prawa zastrzeżone | "),(0,o.Lk)("a",{href:"https://github.com/sznuraarkadiusz"},"DEVAS Arkadiusz Sznura 🔥")])],-1);function q(e,t,a,r,n,s){const l=(0,o.g2)("grafana-chart"),i=(0,o.g2)("sensor-details");return(0,o.uX)(),(0,o.CE)("div",N,[R,(0,o.Lk)("div",G,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.visibleSensors,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.type,class:"sensor__item w-full sm:w-1/2 md:w-1/3 p-3 bg-white shadow"},[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.component))),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.bF)(l,{"sensor-type":e.type,"sensor-label":e.label,color:e.color},null,8,["sensor-type","sensor-label","color"])])),_:2},1024)])))),128))]),Z])}const Y={key:0};function ee(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>n.isExpanded=!n.isExpanded),class:"bg-gray-800 btn--details"},(0,u.v_)(n.isExpanded?"Zwiń szczegóły":"Rozwiń szczegóły"),1),n.isExpanded?((0,o.uX)(),(0,o.CE)("div",Y,[(0,o.RG)(e.$slots,"default")])):(0,o.Q3)("",!0)])}var te={data(){return{isExpanded:!1}}};const ae=(0,A.A)(te,[["render",ee]]);var re=ae;const oe={ref:"chartCanvas"};function ne(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("canvas",oe,null,512)])}var se=a(6591),le=(a(1306),a(266)),ie=a(7716),ue={name:"SensorChart",props:{sensorType:String,sensorLabel:String,color:String},data(){return{chart:null}},mounted(){this.initializeChart()},methods:{initializeChart(){fetch("/grafana-data").then((e=>e.json())).then((e=>{this.renderChart(e)})).catch((e=>{console.error("Error fetching data:",e)}))},renderChart(e){const t=this.$refs.chartCanvas.getContext("2d");this.chart?.destroy();const a=e.results[0].series[0].columns.indexOf(this.sensorType),r=e.results[0].series[0].values.map((e=>({x:(0,le.GP)((0,ie.H)(e[0]),"yyyy-MM-dd HH:mm:ss"),y:e[a]})));this.chart=new se.Ay(t,{type:"line",data:{datasets:[{label:this.sensorLabel,data:r,borderColor:this.color,fill:!1}]},options:{scales:{x:{type:"time",time:{unit:"minute",stepSize:15,displayFormats:{minute:"HH:mm"}},title:{display:!0,text:"Czas"}},y:{title:{display:!0,text:"Wartość"}}},responsive:!0,maintainAspectRatio:!1}})}}};const ce=(0,A.A)(ue,[["render",ne]]);var de=ce,me=a.p+"img/light.db05a24a.png";const ge=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:me,alt:"Light Sensor"})],-1),he=(0,o.Lk)("strong",null,"Światło:",-1);function pe(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[ge,(0,o.Lk)("p",null,[he,(0,o.eW)(" "+(0,u.v_)(n.lightState?"wykryte":"brak"),1)])],64)}var be={name:"LightSensor",data(){return{lightState:!1}},methods:{fetchLightData(){fetch("/get-data").then((e=>e.json())).then((e=>{console.log(e),this.lightState=e.light})).catch((e=>{console.error("Error:",e),this.lightState=!1}))}},mounted(){this.fetchLightData(),setInterval(this.fetchLightData,5e3)}};const fe=(0,A.A)(be,[["render",pe]]);var ke=fe,ye=a.p+"img/smoke.ac3a0a1b.png";const ve=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:ye,alt:"Smoke Sensor"})],-1),we=(0,o.Lk)("strong",null,"Dym:",-1);function Le(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[ve,(0,o.Lk)("p",null,[we,(0,o.eW)(" "+(0,u.v_)(n.smokeStatus?"wykryty":"brak"),1)])],64)}var xe={name:"SmokeSensor",data(){return{smokeStatus:"Brak danych"}},mounted(){this.fetchData(),setInterval(this.fetchData,5e3)},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.smokeStatus=e.smoke})).catch((e=>{console.error("Error:",e)}))}}};const Se=(0,A.A)(xe,[["render",Le]]);var Ce=Se,_e=a.p+"img/airquality.0966e723.png";const Ee=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:_e,alt:"Air Quality Sensor"})],-1),Ae=(0,o.Lk)("strong",null,"Jakość powietrza:",-1);function ze(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[Ee,(0,o.Lk)("p",null,[Ae,(0,o.eW)(" "+(0,u.v_)(n.airQuality?"dobra":"umiarkowana"),1)])],64)}var je={name:"AirQualitySensor",data(){return{airQuality:"Brak danych"}},mounted(){this.fetchData(),setInterval(this.fetchData,5e3)},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.airQuality=e.airQuality})).catch((e=>{console.error("Error:",e)}))}}};const Ie=(0,A.A)(je,[["render",ze]]);var Xe=Ie,Te=a.p+"img/co.ccea216a.png";const De=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:Te,alt:"CO Sensor"})],-1),Be=(0,o.Lk)("strong",null,"Tlenek węgla:",-1);function Fe(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[De,(0,o.Lk)("p",null,[Be,(0,o.eW)(" "+(0,u.v_)(n.coStatus?"wykryty":"brak"),1)])],64)}var We={name:"CoSensor",data(){return{coStatus:"Ładowanie danych..."}},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.coStatus=e.co})).catch((e=>{console.error("Błąd:",e),this.coStatus="Błąd podczas ładowania danych."}))}},mounted(){this.fetchData(),setInterval(this.fetchData,1e4)}};const Me=(0,A.A)(We,[["render",Fe]]);var Oe=Me,Pe=a.p+"img/humidity.68a4e0ef.png";const Qe=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:Pe,alt:"Humidity Sensor"})],-1),Ue=(0,o.Lk)("strong",null,"Wilgotność:",-1);function He(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[Qe,(0,o.Lk)("p",null,[Ue,(0,o.eW)(" "+(0,u.v_)(n.humidity)+" %",1)])],64)}var $e={name:"HumiditySensor",data(){return{humidity:"Ładowanie..."}},methods:{fetchHumidity(){fetch("/get-data").then((e=>e.json())).then((e=>{this.humidity=e.humidity})).catch((e=>{console.error("Error:",e),this.humidity="Błąd"}))}},mounted(){this.fetchHumidity(),setInterval(this.fetchHumidity,5e3)}};const Je=(0,A.A)($e,[["render",He]]);var Ke=Je,Ve=a.p+"img/temperature.29092e49.png";const Ne=(0,o.Lk)("div",{class:"sensor__image justify-center flex"},[(0,o.Lk)("img",{src:Ve,alt:"Temperature Sensor"})],-1),Re=(0,o.Lk)("strong",null,"Temperatura:",-1);function Ge(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[Ne,(0,o.Lk)("p",null,[Re,(0,o.eW)(" "+(0,u.v_)(n.temperature)+" °C",1)])],64)}var Ze={name:"TemperatureSensor",data(){return{temperature:"Ładowanie..."}},methods:{fetchTemperature(){fetch("/get-data").then((e=>e.json())).then((e=>{this.temperature=e.temperature,this.$emit("update-temperature",this.temperature)})).catch((e=>{console.error("Error:",e),this.temperature="Błąd"}))}},mounted(){this.fetchTemperature(),setInterval(this.fetchTemperature,5e3)}};const qe=(0,A.A)(Ze,[["render",Ge]]);var Ye=qe,et={components:{TemperatureSensor:Ye,HumiditySensor:Ke,AirQualitySensor:Xe,CoSensor:Oe,SmokeSensor:Ce,LightSensor:ke,SensorDetails:re,GrafanaChart:de},computed:{...(0,_.aH)({sensorsState:e=>e.sensors}),visibleSensors(){return this.sensors.filter((e=>this.sensorsState[e.type]))}},data(){return{sensors:[{type:"temperature",label:"Temperatura",color:"rgb(255, 99, 132)",component:Ye},{type:"humidity",label:"Wilgotność",color:"rgb(26, 196, 92)",component:Ke},{type:"light",label:"Światło",color:"rgb(255, 206, 86)",component:ke},{type:"smoke",label:"Dym",color:"rgb(255, 159, 64)",component:Ce},{type:"co",label:"Tlenek węgla",color:"rgb(153, 102, 255)",component:Oe},{type:"airQuality",label:"Jakość powietrza",color:"rgb(75, 192, 192)",component:Xe}]}}};const tt=(0,A.A)(et,[["render",q]]);var at=tt;const rt={class:"login-prompt h-screen flex justify-center items-center"},ot={class:"text-center"},nt=["src"],st=(0,o.Lk)("h1",{class:"dashboard__title"},"Podgląd niedostępny",-1),lt=(0,o.Lk)("p",null,"Zaloguj się, aby zobaczyć zawartość.",-1);function it(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",rt,[(0,o.Lk)("div",ot,[(0,o.Lk)("img",{src:n.BlockedImage,alt:"Terra Sense - Safety is the basis!"},null,8,nt),st,lt])])}var ut=a.p+"img/people-with-snake.520c9ee1.jpg",ct={name:"SidebarDashboard",data(){return{BlockedImage:ut}}};const dt=(0,A.A)(ct,[["render",it]]);var mt=dt;const gt={class:"bg-gray-100"},ht=(0,o.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Powiadomienia",-1),pt={class:"flex justify-center flex-wrap items-center pt-6"},bt={class:"max-w-md w-full lg:w-1/2 px-4"},ft={class:"bg-white p-6 rounded-lg shadow-xl"},kt=(0,o.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Ustawienia alertów",-1),yt=["for"],vt=["onUpdate:modelValue","id"],wt=["onUpdate:modelValue"],Lt=["onUpdate:modelValue"],xt=["onClick"],St={class:"mb-6"},Ct=(0,o.Lk)("label",{for:"email",class:"block text-gray-700 text-sm font-bold mb-2"},"Email do alertów:",-1),_t=(0,o.Lk)("div",{class:"flex items-center justify-between"},[(0,o.Lk)("button",{type:"submit",class:"btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Zapisz Ustawienia")],-1),Et={class:"w-1/3 p-4 flex flex-col items-center justify-center"},At={class:"bg-white p-6 rounded-lg shadow-xl"},zt=(0,o.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Podsumowanie alertów",-1),jt={key:0},It={key:1},Xt={key:0,class:"mb-2"},Tt=(0,o.Lk)("strong",null,"Email",-1);function Dt(e,t,a,n,s,l){return(0,o.uX)(),(0,o.CE)("div",gt,[ht,(0,o.Lk)("div",pt,[(0,o.Lk)("div",bt,[(0,o.Lk)("div",ft,[kt,(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.submitAlertSettings&&l.submitAlertSettings(...e)),["prevent"])),class:"flex flex-col items-center"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.orderedSettings,(({key:e,value:t})=>((0,o.uX)(),(0,o.CE)("div",{class:"flex items-center mb-4",key:e},[(0,o.Lk)("label",{for:e,class:"block text-gray-700 text-sm font-bold mr-2"},(0,u.v_)(s.sensorNames[e])+":",9,yt),(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":e=>t.enabled=e,id:e,class:"form-checkbox h-6 w-6 rounded-full border border-gray-300 text-green-500 mr-2"},null,8,vt),[[r.lH,t.enabled]]),["temperature","humidity"].includes(e)?(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:0,type:"number","onUpdate:modelValue":e=>t.min=e,placeholder:"Min",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-20 mr-2"},null,8,wt)),[[r.Jo,t.min]]):(0,o.Q3)("",!0),["temperature","humidity"].includes(e)?(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:1,type:"number","onUpdate:modelValue":e=>t.max=e,placeholder:"Max",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-20"},null,8,Lt)),[[r.Jo,t.max]]):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:(0,r.D$)((t=>l.deleteAlert(e)),["prevent"]),type:"button",class:"ml-2 px-3 py-1 bg-red-500 text-white text-sm leading-tight rounded hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"Usuń",8,xt)])))),128)),(0,o.Lk)("div",St,[Ct,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>s.alertSettings.email=e),id:"email",placeholder:"Wpisz swój email",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"},null,512),[[r.Jo,s.alertSettings.email]])]),_t],32)])]),(0,o.Lk)("div",Et,[(0,o.Lk)("div",At,[zt,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.filteredSettings,(({key:e,value:t})=>((0,o.uX)(),(0,o.CE)("li",{key:e,class:"mb-2"},[(0,o.Lk)("strong",null,(0,u.v_)(s.sensorNames[e]),1),(0,o.eW)(": "),["temperature","humidity"].includes(e)?((0,o.uX)(),(0,o.CE)("span",jt," Min: "+(0,u.v_)(t.min)+", Max: "+(0,u.v_)(t.max),1)):((0,o.uX)(),(0,o.CE)("span",It,"Aktywny"))])))),128)),s.alertSettings.email?((0,o.uX)(),(0,o.CE)("li",Xt,[Tt,(0,o.eW)(": "+(0,u.v_)(s.alertSettings.email),1)])):(0,o.Q3)("",!0)])])])])])}var Bt={data(){return{order:["temperature","humidity","light","co","smoke","airQuality","email"],alertSettings:{temperature:{enabled:!1,min:null,max:null},humidity:{enabled:!1,min:null,max:null},light:{enabled:!1},co:{enabled:!1},smoke:{enabled:!1},airQuality:{enabled:!1},email:""},sensorNames:{temperature:"Temperatura",humidity:"Wilgotność",light:"Światło",co:"Tlenek węgla",smoke:"Dym",airQuality:"Jakość powietrza",email:"Email"}}},computed:{orderedSettings(){const e=this.order.filter((e=>"email"!==e));return e.map((e=>({key:e,value:this.alertSettings[e]||{}})))},filteredSettings(){return this.orderedSettings.filter((({value:e})=>e&&e.enabled))}},mounted(){this.fetchAlertSettings()},methods:{fetchAlertSettings(){fetch("/set-alerts",{method:"GET"}).then((e=>e.json())).then((e=>{console.log(e),this.alertSettings=e})).catch((e=>console.error("Error:",e)))},submitAlertSettings(){fetch("/set-alerts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.alertSettings)}).then((()=>alert("Settings saved!"))).catch((e=>console.error("Error:",e)))},deleteAlert(e){confirm(`Are you sure you want to delete the ${e} alert?`)&&fetch(`/set-alerts?type=${e}`,{method:"DELETE"}).then((e=>e.json())).then((e=>{alert(e.message),this.fetchAlertSettings()})).catch((e=>console.error("Error:",e)))}}};const Ft=(0,A.A)(Bt,[["render",Dt]]);var Wt=Ft;const Mt={class:"max-w-md w-full lg:w-1/2 px-4"},Ot={class:"bg-white p-6 rounded-lg shadow-xl"},Pt={class:"sensor-manager"},Qt=(0,o.Lk)("h2",{class:"sensor-manager__title text-xl font-semibold mb-4"},"Widoczność czujników",-1),Ut={class:"flex-col items-center justify-center flex"},Ht=["for"],$t={class:"sensor-manager__checkbox"},Jt=["id","checked","onChange"];function Kt(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",Mt,[(0,o.Lk)("div",Ot,[(0,o.Lk)("div",Pt,[Qt,(0,o.Lk)("ul",Ut,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.sensors,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,class:"sensor-manager__item mb-2 flex items-center"},[(0,o.Lk)("label",{for:`switch-${t}`,class:"sensor-manager__label mr-2"},(0,u.v_)(n.sensorNames[t]||t)+":",9,Ht),(0,o.Lk)("div",$t,[(0,o.Lk)("input",{type:"checkbox",id:`switch-${t}`,checked:e,onChange:e=>s.handleToggle(t),class:"sensor-manager__toggle"},null,40,Jt)])])))),128))])])])])}var Vt={data(){return{sensorNames:{temperature:"Temperatura",humidity:"Wilgotność",light:"Światło",co:"Tlenek węgla",smoke:"Dym",airQuality:"Jakość powietrza"}}},computed:{...(0,_.aH)({sensors:e=>e.sensors})},methods:{...(0,_.i0)(["toggleSensor"]),handleToggle(e){this.toggleSensor(e)}}};const Nt=(0,A.A)(Vt,[["render",Kt]]);var Rt=Nt;const Gt={class:"bg-gray-100"},Zt=(0,o.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Ustawienia",-1),qt={class:"flex justify-center flex-wrap items-center pt-6"};function Yt(e,t,a,r,n,s){const l=(0,o.g2)("sensor-manager"),i=(0,o.g2)("alert-interval"),u=(0,o.g2)("colors-customization");return(0,o.uX)(),(0,o.CE)("div",Gt,[Zt,(0,o.Lk)("div",qt,[(0,o.bF)(l),(0,o.bF)(i),(0,o.bF)(u,{onColorUpdated:s.handleColorUpdated},null,8,["onColorUpdated"])])])}const ea={class:"max-w-md w-full lg:w-1/2 px-4 sm:py-4"},ta={class:"bg-white p-6 rounded-lg shadow-xl"},aa={class:"alert-interval"},ra=(0,o.Lk)("h2",{class:"alert-interval__title text-xl font-semibold mb-4"},"Częstotliwość powiadomień",-1),oa=(0,o.Lk)("span",{class:"tooltip-icon mx-2",title:"Domyślnie 5 min"},"?",-1),na=(0,o.Lk)("button",{type:"submit",class:"btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-4"},"Zaktualizuj interwał",-1);function sa(e,t,a,n,s,l){return(0,o.uX)(),(0,o.CE)("div",ea,[(0,o.Lk)("div",ta,[(0,o.Lk)("div",aa,[ra,(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.updateEmailInterval&&l.updateEmailInterval(...e)),["prevent"]))},[(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{class:"max-w-14",type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>s.emailInterval=e),placeholder:"Interval in minutes",min:"1"},null,512),[[r.Jo,s.emailInterval]]),oa,na])],32)])])])}var la={data(){return{emailInterval:localStorage.getItem("emailInterval")||5}},methods:{updateEmailInterval(){fetch("/update-email-interval",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({interval:this.emailInterval})}).then((e=>e.json())).then((e=>{e.success?(localStorage.setItem("emailInterval",this.emailInterval),alert("Interwał e-mail został zaktualizowany.")):alert("Nie udało się zaktualizować interwału.")})).catch((e=>console.error("Error updating email interval:",e)))}}};const ia=(0,A.A)(la,[["render",sa]]);var ua=ia;const ca={class:"max-w-md w-full lg:w-1/2 px-4 sm:py-4"},da={class:"bg-white p-6 rounded-lg shadow-xl"},ma={class:"colors-customizaton"},ga=(0,o.Lk)("h2",{class:"colors-customizaton__title text-xl font-semibold mb-4"},"Kolor motywu",-1);function ha(e,t,a,n,s,l){return(0,o.uX)(),(0,o.CE)("div",ca,[(0,o.Lk)("div",da,[(0,o.Lk)("div",ma,[ga,(0,o.bo)((0,o.Lk)("input",{type:"color","onUpdate:modelValue":t[0]||(t[0]=t=>e.bgColor=t),onChange:t[1]||(t[1]=(...e)=>l.updateColor&&l.updateColor(...e)),class:"mx-2"},null,544),[[r.Jo,e.bgColor]]),(0,o.Lk)("button",{class:"py-2 px-4 bg-red-700 hover:bg-red-600 rounded text-white",onClick:t[2]||(t[2]=(...e)=>l.resetColor&&l.resetColor(...e))},"Przywróć domyślny")])])])}var pa={computed:{...(0,_.aH)(["sidebarBgColor"])},methods:{...(0,_.i0)(["setSidebarBgColor"]),updateColor(e){this.setSidebarBgColor(e.target.value)},resetColor(){const e="#1f2937";this.setSidebarBgColor(e)}}};const ba=(0,A.A)(pa,[["render",ha]]);var fa=ba,ka={components:{SensorManager:Rt,AlertInterval:ua,ColorsCustomization:fa},methods:{handleColorUpdated(e){this.$root.$emit("updateSidebarColor",e)}}};const ya=(0,A.A)(ka,[["render",Yt]]);var va=ya;function wa(e,t){return(0,o.uX)(),(0,o.CE)("h1",null,"tymczasoow")}const La={},xa=(0,A.A)(La,[["render",wa]]);var Sa=xa;const Ca=[{path:"/",name:"Dashboard",component:at,meta:{requiresAuth:!0}},{path:"/login-prompt",name:"LoginPrompt",component:mt},{path:"/notifications",component:Wt},{path:"/settings",name:"Settings",component:va},{path:"/manage-sensor",name:"ManageSensors",component:Rt},{path:"/calendar",name:"CalendarView",component:Sa}],_a=(0,V.aE)({history:(0,V.LA)("/"),routes:Ca});_a.beforeEach(((e,t,a)=>{const r=localStorage.getItem("isAuthenticated");e.matched.some((e=>e.meta.requiresAuth))?r?a():a({name:"LoginPrompt"}):a()}));var Ea=_a,Aa=a(4664);const za=new Aa.Ay({storage:window.localStorage,reducer:e=>({sidebarBgColor:e.sidebarBgColor})});var ja=(0,_.y$)({state:{sensors:{temperature:!0,humidity:!0,light:!0,co:!0,smoke:!0,airQuality:!0},sidebarBgColor:localStorage.getItem("sidebarBgColor")||"#1f2937"},mutations:{toggleSensor(e,t){e.sensors[t]=!e.sensors[t]},setSidebarBgColor(e,t){e.sidebarBgColor=t}},actions:{toggleSensor({commit:e},t){e("toggleSensor",t)},setSidebarBgColor({commit:e},t){e("setSidebarBgColor",t),localStorage.setItem("sidebarBgColor",t)}},getters:{sensors:e=>e.sensors,sidebarBgColor:e=>e.sidebarBgColor},plugins:[za.plugin]});const Ia=(0,r.Ef)(K);Ia.use(Ea),Ia.use(ja),Ia.mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,n){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(l=!1,n<s&&(s=n));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,s=r[0],l=r[1],i=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var c=i(a)}for(t&&t(r);u<s.length;u++)n=s[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkterrasense"]=self["webpackChunkterrasense"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(2113)}));r=a.O(r)})();
//# sourceMappingURL=app.615daa22.js.map