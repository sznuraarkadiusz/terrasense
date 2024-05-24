(function(){"use strict";var e={169:function(e,t,a){var r=a(5130),n=a(6768);const s={class:"flex flex-col min-h-screen bg-gray-100"},o={class:"flex flex-1"},l={class:"flex flex-col flex-1 main bg-white w-full"};function i(e,t,a,r,i,u){const d=(0,n.g2)("NavbarDashboard"),c=(0,n.g2)("SidebarDashboard"),m=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(d),(0,n.Lk)("div",o,[(0,n.bF)(c,{class:"w-56"}),(0,n.Lk)("div",l,[(0,n.bF)(m,{class:"flex-1"})])])])}var u=a(4232);const d=(0,n.Lk)("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[(0,n.Lk)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1),c=[d],m=(0,n.Lk)("p",{class:"text-base lg:block hidden"},"Terra Sense v1.0.1",-1),h={class:"flex items-center"},g={key:0},p={key:1},k={key:2,class:"flex items-center"},b=["src"],y={key:1,class:"navbar__menu absolute top-full left-0 bg-gray-800 w-full z-50"},f={class:"p-3 hover:bg-gray-700"},w={class:"p-3 hover:bg-gray-700"},v={class:"p-3 hover:bg-gray-700"},L={class:"p-3 hover:bg-gray-700"},x={class:"p-3 hover:bg-gray-700"},C={class:"p-3 hover:bg-gray-700"};function S(e,t,a,r,s,o){const l=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("nav",{style:(0,u.Tr)({backgroundColor:o.navbarBgColor}),class:"text-white py-3 px-4 flex justify-between items-center relative"},[s.user?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>o.toggleMenu&&o.toggleMenu(...e)),class:"block lg:hidden p-2"},c)):(0,n.Q3)("",!0),m,(0,n.Lk)("div",h,[s.user?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",g,[(0,n.bF)(l,{to:"/login",class:"py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded"},{default:(0,n.k6)((()=>[(0,n.eW)("Zaloguj")])),_:1})])),!s.user&&s.canRegister?((0,n.uX)(),(0,n.CE)("div",p,[(0,n.bF)(l,{to:"/register",class:"ml-2 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded"},{default:(0,n.k6)((()=>[(0,n.eW)("Zarejestruj")])),_:1})])):((0,n.uX)(),(0,n.CE)("div",k,[(0,n.Lk)("img",{src:s.Logo,alt:"Terra Sense avatar",class:"w-8 h-8 rounded-full mr-2"},null,8,b),(0,n.Lk)("span",null,(0,u.v_)(s.user.username),1),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.logout&&o.logout(...e)),class:"ml-4 py-2 px-4 bg-red-700 hover:bg-red-600 rounded"},"Wyloguj")]))]),s.menuOpen?((0,n.uX)(),(0,n.CE)("div",y,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",f,[(0,n.bF)(l,{to:"/",onClick:o.toggleMenu},{default:(0,n.k6)((()=>[(0,n.eW)("Strona główna")])),_:1},8,["onClick"])]),(0,n.Lk)("li",w,[(0,n.bF)(l,{to:"/notifications",onClick:o.toggleMenu},{default:(0,n.k6)((()=>[(0,n.eW)("Powiadomienia")])),_:1},8,["onClick"])]),(0,n.Lk)("li",v,[(0,n.bF)(l,{to:"/calendar",onClick:o.toggleMenu},{default:(0,n.k6)((()=>[(0,n.eW)("Archiwum")])),_:1},8,["onClick"])]),(0,n.Lk)("li",L,[(0,n.bF)(l,{to:"/settings",onClick:o.toggleMenu},{default:(0,n.k6)((()=>[(0,n.eW)("Ustawienia")])),_:1},8,["onClick"])]),(0,n.Lk)("li",x,[(0,n.bF)(l,{to:"/user-management"},{default:(0,n.k6)((()=>[(0,n.eW)("Użytkownicy")])),_:1})]),(0,n.Lk)("li",C,[(0,n.Lk)("a",{href:"http://192.168.68.155:3000/d/cdm0ejxl5mv40c/wykresy?orgId=1&refresh=5s",target:"_blank",onClick:t[2]||(t[2]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},"Grafana")])])])):(0,n.Q3)("",!0)],4)}a(4114);var _=a(8355),E=a.p+"img/logo_transparent.e80ca2e3.png",U=a(782),I={data(){return{user:null,menuOpen:!1,Logo:E,canRegister:!0}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},logout(){_.A.get("/logout").then((e=>{"success"===e.data.status?(localStorage.removeItem("isAuthenticated"),window.dispatchEvent(new Event("logout")),this.checkLoginStatus(),this.checkUserCount(),alert("Wylogowano pomyślnie"),this.$router.push("/login-prompt")):alert("Problem z wylogowaniem: "+e.data.message)}))},checkLoginStatus(){_.A.get("/session-status").then((e=>{e.data.logged_in?(this.user=e.data.user,localStorage.setItem("isAuthenticated","true")):(this.user=null,localStorage.removeItem("isAuthenticated"))}))},checkUserCount(){_.A.get("/users").then((e=>{this.canRegister=e.data.length<2})).catch((e=>{console.error("Błąd sprawdzania liczby użytkowników:",e)}))},handleUserUpdate(){this.checkLoginStatus(),this.checkUserCount()}},mounted(){this.checkLoginStatus(),this.checkUserCount(),window.addEventListener("logout",this.handleUserUpdate),window.addEventListener("login",this.handleUserUpdate),window.addEventListener("userUpdated",this.handleUserUpdate)},beforeUnmount(){window.removeEventListener("logout",this.handleUserUpdate),window.removeEventListener("login",this.handleUserUpdate),window.removeEventListener("userUpdated",this.handleUserUpdate)},computed:{...(0,U.aH)(["sidebarBgColor"]),navbarBgColor(){return this.sidebarBgColor}}},j=a(1241);const z=(0,j.A)(I,[["render",S]]);var A=z;const F={class:"p-5 sidebar__logo"},D=["src"],X={class:"sidebar__menu"},T={class:"p-3 hover:bg-gray-700"},B={class:"p-3 hover:bg-gray-700"},W={class:"p-3 hover:bg-gray-700"},N={class:"p-3 hover:bg-gray-700"},O={class:"p-3 hover:bg-gray-700"},Q=(0,n.Lk)("li",{class:"p-3 hover:bg-gray-700"},[(0,n.Lk)("a",{href:"http://192.168.68.155:3000/d/cdm0ejxl5mv40c/wykresy?orgId=1&refresh=5s",target:"_blank"},"Grafana")],-1);function M(e,t,a,r,s,o){const l=(0,n.g2)("router-link");return s.user?((0,n.uX)(),(0,n.CE)("div",{key:0,style:(0,u.Tr)({backgroundColor:e.sidebarBgColor}),class:"sidebar lg:block hidden"},[(0,n.Lk)("div",F,[(0,n.Lk)("img",{src:s.Logo,alt:"Terra Sense - Safety is the basis!"},null,8,D)]),(0,n.Lk)("div",X,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",T,[(0,n.bF)(l,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("Strona główna")])),_:1})]),(0,n.Lk)("li",B,[(0,n.bF)(l,{to:"/notifications"},{default:(0,n.k6)((()=>[(0,n.eW)("Powiadomienia")])),_:1})]),(0,n.Lk)("li",W,[(0,n.bF)(l,{to:"/calendar"},{default:(0,n.k6)((()=>[(0,n.eW)("Archiwum")])),_:1})]),(0,n.Lk)("li",N,[(0,n.bF)(l,{to:"/settings"},{default:(0,n.k6)((()=>[(0,n.eW)("Ustawienia")])),_:1})]),(0,n.Lk)("li",O,[(0,n.bF)(l,{to:"/user-management"},{default:(0,n.k6)((()=>[(0,n.eW)("Użytkownicy")])),_:1})]),Q])])],4)):(0,n.Q3)("",!0)}var V={name:"SidebarDashboard",data(){return{user:null,Logo:E}},computed:{...(0,U.aH)(["sidebarBgColor"])},methods:{checkLoginStatus(){_.A.get("/session-status").then((e=>{e.data.logged_in?this.user={name:e.data.user}:this.user=null})).catch((()=>{this.user=null}))},logout(){this.user=null}},mounted(){this.checkLoginStatus(),window.addEventListener("logout",this.logout),window.addEventListener("login",this.checkLoginStatus)}};const J=(0,j.A)(V,[["render",M]]);var $=J,K={name:"App",components:{NavbarDashboard:A,SidebarDashboard:$}};const H=(0,j.A)(K,[["render",i]]);var P=H,R=a(1387);const Z={class:"dashboard__sensors bg-gray-100"},G=(0,n.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Panel monitoringu",-1),q={class:"flex flex-wrap justify-center"},Y=(0,n.Lk)("footer",{class:"p-3 w-full text-center"},[(0,n.Lk)("p",{class:"text-sm text-gray-600"},[(0,n.eW)(" Copyright © 2024 Terra Sense – Wszelkie prawa zastrzeżone | "),(0,n.Lk)("a",{href:"https://github.com/sznuraarkadiusz"},"DEVAS Arkadiusz Sznura 🔥")])],-1);function ee(e,t,a,r,s,o){const l=(0,n.g2)("grafana-chart"),i=(0,n.g2)("sensor-details");return(0,n.uX)(),(0,n.CE)("div",Z,[G,(0,n.Lk)("div",q,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.visibleSensors,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.type,class:"sensor__item w-full sm:w-1/2 md:w-1/3 p-3 bg-white shadow"},[((0,n.uX)(),(0,n.Wv)((0,n.$y)(e.component))),(0,n.bF)(i,null,{default:(0,n.k6)((()=>[(0,n.bF)(l,{"sensor-type":e.type,"sensor-label":e.label,color:e.color},null,8,["sensor-type","sensor-label","color"])])),_:2},1024)])))),128))]),Y])}const te={key:0};function ae(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>s.isExpanded=!s.isExpanded),class:"bg-gray-800 btn--details"},(0,u.v_)(s.isExpanded?"Zwiń szczegóły":"Rozwiń szczegóły"),1),s.isExpanded?((0,n.uX)(),(0,n.CE)("div",te,[(0,n.RG)(e.$slots,"default")])):(0,n.Q3)("",!0)])}var re={data(){return{isExpanded:!1}}};const ne=(0,j.A)(re,[["render",ae]]);var se=ne;const oe={ref:"chartCanvas"};function le(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("canvas",oe,null,512)])}var ie=a(6591),ue=(a(1306),a(266)),de=a(7716),ce={name:"SensorChart",props:{sensorType:String,sensorLabel:String,color:String},data(){return{chart:null}},mounted(){this.initializeChart()},methods:{initializeChart(){fetch("/grafana-data").then((e=>e.json())).then((e=>{this.renderChart(e)})).catch((e=>{console.error("Error fetching data:",e)}))},renderChart(e){const t=this.$refs.chartCanvas.getContext("2d");this.chart?.destroy();const a=e.results[0].series[0].columns.indexOf(this.sensorType),r=e.results[0].series[0].values.map((e=>({x:(0,ue.GP)((0,de.H)(e[0]),"yyyy-MM-dd HH:mm:ss"),y:e[a]})));this.chart=new ie.Ay(t,{type:"line",data:{datasets:[{label:this.sensorLabel,data:r,borderColor:this.color,fill:!1}]},options:{scales:{x:{type:"time",time:{unit:"minute",stepSize:15,displayFormats:{minute:"HH:mm"}},title:{display:!0,text:"Czas"}},y:{title:{display:!0,text:"Wartość"}}},responsive:!0,maintainAspectRatio:!1}})}}};const me=(0,j.A)(ce,[["render",le]]);var he=me,ge=a.p+"img/light.db05a24a.png";const pe=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:ge,alt:"Light Sensor"})],-1),ke=(0,n.Lk)("strong",null,"Światło:",-1);function be(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[pe,(0,n.Lk)("p",null,[ke,(0,n.eW)(" "+(0,u.v_)(s.lightState?"wykryte":"brak"),1)])],64)}var ye={name:"LightSensor",data(){return{lightState:!1}},methods:{fetchLightData(){fetch("/get-data").then((e=>e.json())).then((e=>{console.log(e),this.lightState=e.light})).catch((e=>{console.error("Error:",e),this.lightState=!1}))}},mounted(){this.fetchLightData(),setInterval(this.fetchLightData,5e3)}};const fe=(0,j.A)(ye,[["render",be]]);var we=fe,ve=a.p+"img/smoke.ac3a0a1b.png";const Le=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:ve,alt:"Smoke Sensor"})],-1),xe=(0,n.Lk)("strong",null,"Dym:",-1);function Ce(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[Le,(0,n.Lk)("p",null,[xe,(0,n.eW)(" "+(0,u.v_)(s.smokeStatus?"wykryty":"brak"),1)])],64)}var Se={name:"SmokeSensor",data(){return{smokeStatus:"Brak danych"}},mounted(){this.fetchData(),setInterval(this.fetchData,5e3)},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.smokeStatus=e.smoke})).catch((e=>{console.error("Error:",e)}))}}};const _e=(0,j.A)(Se,[["render",Ce]]);var Ee=_e,Ue=a.p+"img/airquality.0966e723.png";const Ie=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:Ue,alt:"Air Quality Sensor"})],-1),je=(0,n.Lk)("strong",null,"Jakość powietrza:",-1);function ze(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[Ie,(0,n.Lk)("p",null,[je,(0,n.eW)(" "+(0,u.v_)(s.airQuality?"dobra":"umiarkowana"),1)])],64)}var Ae={name:"AirQualitySensor",data(){return{airQuality:"Brak danych"}},mounted(){this.fetchData(),setInterval(this.fetchData,5e3)},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.airQuality=e.airQuality})).catch((e=>{console.error("Error:",e)}))}}};const Fe=(0,j.A)(Ae,[["render",ze]]);var De=Fe,Xe=a.p+"img/co.ccea216a.png";const Te=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:Xe,alt:"CO Sensor"})],-1),Be=(0,n.Lk)("strong",null,"Tlenek węgla:",-1);function We(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[Te,(0,n.Lk)("p",null,[Be,(0,n.eW)(" "+(0,u.v_)(s.coStatus?"wykryty":"brak"),1)])],64)}var Ne={name:"CoSensor",data(){return{coStatus:"Ładowanie danych..."}},methods:{fetchData(){fetch("/get-data").then((e=>e.json())).then((e=>{this.coStatus=e.co})).catch((e=>{console.error("Błąd:",e),this.coStatus="Błąd podczas ładowania danych."}))}},mounted(){this.fetchData(),setInterval(this.fetchData,1e4)}};const Oe=(0,j.A)(Ne,[["render",We]]);var Qe=Oe,Me=a.p+"img/humidity.68a4e0ef.png";const Ve=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:Me,alt:"Humidity Sensor"})],-1),Je=(0,n.Lk)("strong",null,"Wilgotność:",-1);function $e(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[Ve,(0,n.Lk)("p",null,[Je,(0,n.eW)(" "+(0,u.v_)(s.humidity)+" %",1)])],64)}var Ke={name:"HumiditySensor",data(){return{humidity:"Ładowanie..."}},methods:{fetchHumidity(){fetch("/get-data").then((e=>e.json())).then((e=>{this.humidity=e.humidity})).catch((e=>{console.error("Error:",e),this.humidity="Błąd"}))}},mounted(){this.fetchHumidity(),setInterval(this.fetchHumidity,5e3)}};const He=(0,j.A)(Ke,[["render",$e]]);var Pe=He,Re=a.p+"img/temperature.29092e49.png";const Ze=(0,n.Lk)("div",{class:"sensor__image justify-center flex"},[(0,n.Lk)("img",{src:Re,alt:"Temperature Sensor"})],-1),Ge=(0,n.Lk)("strong",null,"Temperatura:",-1);function qe(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[Ze,(0,n.Lk)("p",null,[Ge,(0,n.eW)(" "+(0,u.v_)(s.temperature)+" °C",1)])],64)}var Ye={name:"TemperatureSensor",data(){return{temperature:"Ładowanie..."}},methods:{fetchTemperature(){fetch("/get-data").then((e=>e.json())).then((e=>{this.temperature=e.temperature,this.$emit("update-temperature",this.temperature)})).catch((e=>{console.error("Error:",e),this.temperature="Błąd"}))}},mounted(){this.fetchTemperature(),setInterval(this.fetchTemperature,5e3)}};const et=(0,j.A)(Ye,[["render",qe]]);var tt=et,at={components:{TemperatureSensor:tt,HumiditySensor:Pe,AirQualitySensor:De,CoSensor:Qe,SmokeSensor:Ee,LightSensor:we,SensorDetails:se,GrafanaChart:he},computed:{...(0,U.aH)({sensorsState:e=>e.sensors}),visibleSensors(){return this.sensors.filter((e=>this.sensorsState[e.type]))}},data(){return{sensors:[{type:"temperature",label:"Temperatura",color:"rgb(255, 99, 132)",component:tt},{type:"humidity",label:"Wilgotność",color:"rgb(26, 196, 92)",component:Pe},{type:"light",label:"Światło",color:"rgb(255, 206, 86)",component:we},{type:"smoke",label:"Dym",color:"rgb(255, 159, 64)",component:Ee},{type:"co",label:"Tlenek węgla",color:"rgb(153, 102, 255)",component:Qe},{type:"airQuality",label:"Jakość powietrza",color:"rgb(75, 192, 192)",component:De}]}}};const rt=(0,j.A)(at,[["render",ee]]);var nt=rt;const st={class:"login-prompt h-screen flex justify-center items-center"},ot={class:"text-center"},lt=["src"],it=(0,n.Lk)("h1",{class:"dashboard__title"},"Podgląd niedostępny",-1),ut=(0,n.Lk)("p",null,"Zaloguj się, aby zobaczyć zawartość.",-1);function dt(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)("div",st,[(0,n.Lk)("div",ot,[(0,n.Lk)("img",{src:s.BlockedImage,alt:"Terra Sense - Safety is the basis!"},null,8,lt),it,ut])])}var ct=a.p+"img/people-with-snake.520c9ee1.jpg",mt={name:"SidebarDashboard",data(){return{BlockedImage:ct}}};const ht=(0,j.A)(mt,[["render",dt]]);var gt=ht;const pt={class:"bg-gray-100"},kt=(0,n.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Powiadomienia",-1),bt={class:"flex justify-center flex-wrap items-center pt-6"},yt={class:"max-w-md w-full lg:w-1/2 px-4"},ft={class:"bg-white p-6 rounded-lg shadow-xl"},wt=(0,n.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Ustawienia alertów",-1),vt=["for"],Lt={class:"flex items-center mb-4"},xt=["onUpdate:modelValue","id"],Ct=["onUpdate:modelValue"],St=["onUpdate:modelValue"],_t=["onUpdate:modelValue"],Et=(0,n.Lk)("option",{value:"critical"},"Krytyczny",-1),Ut=(0,n.Lk)("option",{value:"medium"},"Średni",-1),It=(0,n.Lk)("option",{value:"low"},"Niski",-1),jt=[Et,Ut,It],zt=["onClick"],At={class:"mb-6"},Ft=(0,n.Lk)("label",{for:"email",class:"block text-gray-700 text-sm font-bold mb-2"},"Email do alertów:",-1),Dt=(0,n.Lk)("div",{class:"flex items-center justify-between"},[(0,n.Lk)("button",{type:"submit",class:"btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Zapisz Ustawienia")],-1),Xt={class:"w-1/3 p-4 flex flex-col items-center justify-center"},Tt={class:"bg-white p-6 rounded-lg shadow-xl"},Bt=(0,n.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Podsumowanie alertów",-1),Wt={key:0},Nt={key:1},Ot={key:0,class:"mb-2"},Qt=(0,n.Lk)("strong",null,"Email",-1);function Mt(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",pt,[kt,(0,n.Lk)("div",bt,[(0,n.Lk)("div",yt,[(0,n.Lk)("div",ft,[wt,(0,n.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.submitAlertSettings&&l.submitAlertSettings(...e)),["prevent"])),class:"flex flex-col items-center"},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.orderedSettings,(({key:e,value:t})=>((0,n.uX)(),(0,n.CE)("div",{key:e},[(0,n.Lk)("label",{for:e,class:"block text-gray-700 font-bold mb-2"},(0,u.v_)(o.sensorNames[e])+":",9,vt),(0,n.Lk)("div",Lt,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":e=>t.enabled=e,id:e,class:"form-checkbox h-6 w-6 rounded-full border border-gray-300 text-green-500 mr-2"},null,8,xt),[[r.lH,t.enabled]]),["temperature","humidity"].includes(e)?(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:0,type:"number","onUpdate:modelValue":e=>t.min=e,placeholder:"Min",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-16 mr-2"},null,8,Ct)),[[r.Jo,t.min]]):(0,n.Q3)("",!0),["temperature","humidity"].includes(e)?(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:1,type:"number","onUpdate:modelValue":e=>t.max=e,placeholder:"Max",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-16"},null,8,St)),[[r.Jo,t.max]]):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e=>t.priority=e,class:"ml-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"},jt,8,_t),[[r.u1,t.priority]]),(0,n.Lk)("button",{onClick:(0,r.D$)((t=>l.deleteAlert(e)),["prevent"]),type:"button",class:"ml-2 px-3 py-1 bg-red-500 text-white text-sm leading-tight rounded hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"Usuń",8,zt)])])))),128)),(0,n.Lk)("div",At,[Ft,(0,n.bo)((0,n.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>o.alertSettings.email=e),id:"email",placeholder:"Wpisz swój email",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"},null,512),[[r.Jo,o.alertSettings.email]])]),Dt],32)])]),(0,n.Lk)("div",Xt,[(0,n.Lk)("div",Tt,[Bt,(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.filteredSettings,(({key:e,value:t})=>((0,n.uX)(),(0,n.CE)("li",{key:e,class:"mb-2"},[(0,n.Lk)("strong",null,(0,u.v_)(o.sensorNames[e]),1),(0,n.eW)(": "),["temperature","humidity"].includes(e)?((0,n.uX)(),(0,n.CE)("span",Wt," Min: "+(0,u.v_)(t.min)+", Max: "+(0,u.v_)(t.max),1)):((0,n.uX)(),(0,n.CE)("span",Nt,"Aktywny"))])))),128)),o.alertSettings.email?((0,n.uX)(),(0,n.CE)("li",Ot,[Qt,(0,n.eW)(": "+(0,u.v_)(o.alertSettings.email),1)])):(0,n.Q3)("",!0)])])])])])}var Vt={data(){return{order:["temperature","humidity","light","co","smoke","airQuality","email"],alertSettings:{temperature:{enabled:!1,min:null,max:null,priority:"medium"},humidity:{enabled:!1,min:null,max:null,priority:"medium"},light:{enabled:!1,priority:"medium"},co:{enabled:!1,priority:"medium"},smoke:{enabled:!1,priority:"medium"},airQuality:{enabled:!1,priority:"medium"},email:""},sensorNames:{temperature:"Temperatura",humidity:"Wilgotność",light:"Światło",co:"Tlenek węgla",smoke:"Dym",airQuality:"Jakość powietrza",email:"Email"}}},computed:{orderedSettings(){const e=this.order.filter((e=>"email"!==e));return e.map((e=>({key:e,value:this.alertSettings[e]||{}})))},filteredSettings(){return this.orderedSettings.filter((({value:e})=>e&&e.enabled))}},mounted(){this.fetchAlertSettings()},methods:{fetchAlertSettings(){fetch("/set-alerts",{method:"GET"}).then((e=>e.json())).then((e=>{this.alertSettings={...this.alertSettings,...e},console.log("Zaktualizowano ustawienia",this.alertSettings)})).catch((e=>console.error("Error:",e)))},submitAlertSettings(){fetch("/set-alerts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.alertSettings)}).then((()=>alert("Zapisano ustawienia"))).catch((e=>console.error("Error:",e)))},deleteAlert(e){confirm(`Jesteś pewien, że chcesz usunać alert: ${e}`)&&fetch(`/set-alerts?type=${e}`,{method:"DELETE"}).then((e=>e.json())).then((e=>{alert(e.message),this.fetchAlertSettings()})).catch((e=>console.error("Error:",e)))}}};const Jt=(0,j.A)(Vt,[["render",Mt]]);var $t=Jt;const Kt={class:"max-w-md w-full lg:w-1/2 px-4 py-4"},Ht={class:"bg-white p-6 rounded-lg shadow-xl"},Pt={class:"sensor-manager"},Rt=(0,n.Lk)("h2",{class:"sensor-manager__title text-xl font-semibold mb-4"},"Widoczność czujników",-1),Zt={class:"flex-col items-center justify-center flex"},Gt=["for"],qt={class:"sensor-manager__checkbox"},Yt=["id","checked","onChange"];function ea(e,t,a,r,s,o){return(0,n.uX)(),(0,n.CE)("div",Kt,[(0,n.Lk)("div",Ht,[(0,n.Lk)("div",Pt,[Rt,(0,n.Lk)("ul",Zt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.sensors,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"sensor-manager__item mb-2 flex items-center"},[(0,n.Lk)("label",{for:`switch-${t}`,class:"sensor-manager__label mr-2"},(0,u.v_)(s.sensorNames[t]||t)+":",9,Gt),(0,n.Lk)("div",qt,[(0,n.Lk)("input",{type:"checkbox",id:`switch-${t}`,checked:e,onChange:e=>o.handleToggle(t),class:"sensor-manager__toggle"},null,40,Yt)])])))),128))])])])])}var ta={data(){return{sensorNames:{temperature:"Temperatura",humidity:"Wilgotność",light:"Światło",co:"Tlenek węgla",smoke:"Dym",airQuality:"Jakość powietrza"}}},computed:{...(0,U.aH)({sensors:e=>e.sensors})},methods:{...(0,U.i0)(["toggleSensor"]),handleToggle(e){this.toggleSensor(e)}}};const aa=(0,j.A)(ta,[["render",ea]]);var ra=aa;const na={class:"bg-gray-100"},sa=(0,n.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Ustawienia",-1),oa={class:"flex justify-center flex-wrap items-center pt-6"};function la(e,t,a,r,s,o){const l=(0,n.g2)("sensor-manager"),i=(0,n.g2)("alert-interval"),u=(0,n.g2)("colors-customization");return(0,n.uX)(),(0,n.CE)("div",na,[sa,(0,n.Lk)("div",oa,[(0,n.bF)(l),(0,n.bF)(i),(0,n.bF)(u,{onColorUpdated:o.handleColorUpdated},null,8,["onColorUpdated"])])])}const ia={class:"max-w-md w-full lg:w-1/2 px-4 py-4"},ua={class:"bg-white p-6 rounded-lg shadow-xl"},da={class:"alert-interval flex flex-col items-center justify-center"},ca=(0,n.Lk)("h2",{class:"alert-interval__title text-xl font-semibold mb-4"},"Częstotliwość powiadomień",-1),ma={class:"mb-4 flex items-center"},ha=(0,n.Lk)("label",{for:"criticalInterval",class:"block text-gray-700 mr-2 w-20"},"Krytyczna:",-1),ga={class:"mb-4 flex items-center"},pa=(0,n.Lk)("label",{for:"mediumInterval",class:"block text-gray-700 mr-2 w-20"},"Średnia:",-1),ka={class:"mb-4 flex items-center"},ba=(0,n.Lk)("label",{for:"lowInterval",class:"block text-gray-700 mr-2 w-20"},"Niska:",-1),ya=(0,n.Lk)("div",null,[(0,n.Lk)("button",{type:"submit",class:"btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-4"},"Zaktualizuj interwały")],-1);function fa(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",ia,[(0,n.Lk)("div",ua,[(0,n.Lk)("div",da,[ca,(0,n.Lk)("form",{onSubmit:t[3]||(t[3]=(0,r.D$)(((...e)=>l.updateEmailInterval&&l.updateEmailInterval(...e)),["prevent"]))},[(0,n.Lk)("div",ma,[ha,(0,n.bo)((0,n.Lk)("input",{id:"criticalInterval",type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>o.emailIntervals.critical=e),placeholder:"Interwał w minutach",min:"1",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-red-600"},null,512),[[r.Jo,o.emailIntervals.critical]])]),(0,n.Lk)("div",ga,[pa,(0,n.bo)((0,n.Lk)("input",{id:"mediumInterval",type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>o.emailIntervals.medium=e),placeholder:"Interwał w minutach",min:"1",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-yellow-600"},null,512),[[r.Jo,o.emailIntervals.medium]])]),(0,n.Lk)("div",ka,[ba,(0,n.bo)((0,n.Lk)("input",{id:"lowInterval",type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>o.emailIntervals.low=e),placeholder:"Interwał w minutach",min:"1",class:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-lime-600"},null,512),[[r.Jo,o.emailIntervals.low]])]),ya],32)])])])}var wa={data(){return{emailIntervals:{critical:localStorage.getItem("criticalInterval")||1,medium:localStorage.getItem("mediumInterval")||5,low:localStorage.getItem("lowInterval")||10}}},methods:{updateEmailInterval(){fetch("/update-email-interval",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.emailIntervals)}).then((e=>e.json())).then((e=>{e.success?(localStorage.setItem("criticalInterval",this.emailIntervals.critical),localStorage.setItem("mediumInterval",this.emailIntervals.medium),localStorage.setItem("lowInterval",this.emailIntervals.low),alert("Interwały e-mail zostały zaktualizowane.")):alert("Nie udało się zaktualizować interwałów.")})).catch((e=>console.error("Error updating email intervals:",e)))}}};const va=(0,j.A)(wa,[["render",fa]]);var La=va;const xa={class:"max-w-md w-full lg:w-1/2 px-4 py-4"},Ca={class:"bg-white p-6 rounded-lg shadow-xl"},Sa={class:"colors-customizaton"},_a=(0,n.Lk)("h2",{class:"colors-customizaton__title text-xl font-semibold mb-4"},"Kolor motywu",-1);function Ea(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",xa,[(0,n.Lk)("div",Ca,[(0,n.Lk)("div",Sa,[_a,(0,n.bo)((0,n.Lk)("input",{type:"color","onUpdate:modelValue":t[0]||(t[0]=t=>e.bgColor=t),onChange:t[1]||(t[1]=(...e)=>l.updateColor&&l.updateColor(...e)),class:"mx-2"},null,544),[[r.Jo,e.bgColor]]),(0,n.Lk)("button",{class:"py-2 px-4 bg-red-700 hover:bg-red-600 rounded text-white",onClick:t[2]||(t[2]=(...e)=>l.resetColor&&l.resetColor(...e))},"Przywróć domyślny")])])])}var Ua={computed:{...(0,U.aH)(["sidebarBgColor"])},methods:{...(0,U.i0)(["setSidebarBgColor"]),updateColor(e){this.setSidebarBgColor(e.target.value)},resetColor(){const e="#1f2937";this.setSidebarBgColor(e)}}};const Ia=(0,j.A)(Ua,[["render",Ea]]);var ja=Ia,za={components:{SensorManager:ra,AlertInterval:La,ColorsCustomization:ja},methods:{handleColorUpdated(e){this.$root.$emit("updateSidebarColor",e)}}};const Aa=(0,j.A)(za,[["render",la]]);var Fa=Aa;const Da={class:"bg-gray-100"},Xa=(0,n.Fv)('<h1 class="dashboard__title text-center mx-auto">Archiwum</h1><div class="flex justify-center mt-4"><div class="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl"><h2 class="calendar__title text-xl font-semibold mb-4 text-center">Legenda</h2><ul><li><strong>Jakość powietrza:</strong> 0 - umiarkowana, 1 - dobra</li><li><strong>Tlenek węgla:</strong> 0 - brak, 1 - wykryty</li><li><strong>Dym:</strong> 0 - brak, 1 - wykryty</li><li><strong>Światło:</strong> 0 - brak, 1 - wykryte</li></ul></div></div>',2),Ta={class:"flex justify-center flex-wrap items-center pt-6"},Ba={class:"p-4 bg-white rounded-lg shadow-md w-full max-w-4xl"},Wa={class:"flex flex-col items-center justify-center"},Na={class:"flex flex-wrap gap-4 mb-4"},Oa=["onUpdate:modelValue"],Qa={class:"flex flex-wrap gap-4 mb-4 justify-center"},Ma={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 bg-gray-100 p-4 rounded-lg shadow-inner"},Va={class:"font-bold"};function Ja(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",Da,[Xa,(0,n.Lk)("div",Ta,[(0,n.Lk)("div",Ba,[(0,n.Lk)("div",Wa,[(0,n.Lk)("div",Na,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.selectableColumns,(e=>((0,n.uX)(),(0,n.CE)("label",{key:e,class:"flex items-center space-x-2"},[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":t=>o.showColumns[e]=t,class:"form-checkbox h-4 w-4 text-gray-700"},null,8,Oa),[[r.lH,o.showColumns[e]]]),(0,n.Lk)("span",null,(0,u.v_)(l.columnNames[e]),1)])))),128))]),(0,n.Lk)("div",Qa,[(0,n.bo)((0,n.Lk)("input",{type:"datetime-local","onUpdate:modelValue":t[0]||(t[0]=e=>o.timeFilter.start=e),class:"border p-2 rounded"},null,512),[[r.Jo,o.timeFilter.start]]),(0,n.bo)((0,n.Lk)("input",{type:"datetime-local","onUpdate:modelValue":t[1]||(t[1]=e=>o.timeFilter.end=e),class:"border p-2 rounded"},null,512),[[r.Jo,o.timeFilter.end]]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.fetchData&&l.fetchData(...e)),class:"btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Filtruj"),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>l.clearFilters&&l.clearFilters(...e)),class:"ml-4 py-2 px-4 bg-red-700 hover:bg-red-600 rounded text-white"},"Wyczyść")])]),(0,n.Lk)("div",Ma,[(0,n.Lk)("span",Va,(0,u.v_)(l.columnNames.time),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.visibleColumns,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e,class:"font-bold"},(0,u.v_)(l.columnNames[e]),1)))),128))]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.filteredSensorData,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.time,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 bg-white p-4 rounded-lg shadow-md mt-2"},[(0,n.Lk)("span",null,(0,u.v_)(l.formatToLocalTime(e.time)),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.visibleColumns,(t=>((0,n.uX)(),(0,n.CE)("span",{key:t},(0,u.v_)(e[t]),1)))),128))])))),128))])])])}var $a={data(){return{sensorData:[],defaultColumns:{temperature:!0,humidity:!0,co:!0,smoke:!0,airQuality:!0,light:!0},showColumns:{time:!0,temperature:!0,humidity:!0,co:!0,smoke:!0,airQuality:!0,light:!0},timeFilter:{start:"",end:""}}},computed:{columnNames(){return{time:"Czas",temperature:"Temperatura",humidity:"Wilgotność",co:"Tlenek węgla",smoke:"Dym",airQuality:"Jakość powietrza",light:"Światło"}},selectableColumns(){return Object.keys(this.columnNames).filter((e=>"time"!==e))},visibleColumns(){return Object.keys(this.showColumns).filter((e=>"time"!==e&&this.showColumns[e]))},filteredSensorData(){if(!this.timeFilter.start||!this.timeFilter.end)return this.sensorData;const e=new Date(this.timeFilter.start).getTime(),t=new Date(this.timeFilter.end).getTime();return this.sensorData.filter((a=>{const r=new Date(a.time).getTime();return r>=e&&r<=t}))}},methods:{formatToLocalTime(e){const t=new Date(e);return t.toLocaleString()},fetchData(){const e=`/api/sensor-data?start=${this.timeFilter.start}&end=${this.timeFilter.end}`;fetch(e).then((e=>e.json())).then((e=>{this.sensorData=e})).catch((e=>console.error("Błąd podczas pobierania danych z czujników:",e)))},clearFilters(){this.showColumns={...this.defaultColumns,time:!0},this.timeFilter={start:"",end:""},this.sensorData=[]}}};const Ka=(0,j.A)($a,[["render",Ja]]);var Ha=Ka;const Pa={class:"login-form bg-gray-100"},Ra=(0,n.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Logowanie",-1),Za={class:"max-w-xs mx-auto bg-white rounded-lg shadow-md p-6"};function Ga(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",Pa,[Ra,(0,n.Lk)("div",Za,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),placeholder:"Nazwa użytkownika",type:"text",class:"border p-2 rounded w-full mb-4"},null,512),[[r.Jo,o.username]]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.loginWithRFID&&l.loginWithRFID(...e)),class:"btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Zaloguj")])])}var qa={data(){return{username:""}},methods:{loginWithRFID(){_.A.post("/login",{username:this.username}).then((e=>{"success"===e.data.status?(alert("Zalogowano pomyślnie: "+e.data.user),localStorage.setItem("isAuthenticated","true"),window.dispatchEvent(new Event("login")),this.$router.push("/")):alert(e.data.message)})).catch((e=>{console.error("Błąd logowania RFID:",e),alert("Błąd logowania: "+e.message)}))}}};const Ya=(0,j.A)(qa,[["render",Ga]]);var er=Ya;const tr={className:"bg-gray-100 p-6"},ar=(0,n.Lk)("h1",{className:"dashboard__title text-center mx-auto"},"Rejestracja",-1),rr={className:"max-w-xs mx-auto bg-white rounded-lg shadow-md p-6"};function nr(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",tr,[ar,(0,n.Lk)("div",rr,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),placeholder:"Nazwa użytkownika",type:"text",className:"border p-2 rounded w-full mb-4"},null,512),[[r.Jo,o.username]]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.registerUser&&l.registerUser(...e)),class:"btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Zarejestruj ")])])}var sr={data(){return{username:""}},methods:{registerUser(){_.A.post("/register",{username:this.username}).then((e=>{e.data.message?(alert(e.data.message),this.$router.push("/login")):alert(e.data.error)})).catch((e=>{alert("Błąd rejestracji: "+(e.response.data.error||e.message))}))}}};const or=(0,j.A)(sr,[["render",nr]]);var lr=or;const ir={class:"bg-gray-100 p-6"},ur=(0,n.Lk)("h1",{class:"dashboard__title text-center mx-auto"},"Użytkownicy",-1),dr={class:"max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6"},cr=(0,n.Lk)("div",{class:"user-grid text-center font-bold py-2 border-b-2 mb-4"},[(0,n.Lk)("div",null,"ID"),(0,n.Lk)("div",null,"Nazwa użytkownika"),(0,n.Lk)("div",null,"ID Karty RFID"),(0,n.Lk)("div",null,"Akcje")],-1),mr=["onClick"],hr={class:"mt-4"};function gr(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",ir,[ur,(0,n.Lk)("div",dr,[cr,(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.users,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"user-grid text-center items-center p-2 hover:bg-gray-50"},[(0,n.Lk)("span",null,(0,u.v_)(e.id),1),(0,n.Lk)("span",null,(0,u.v_)(e.username),1),(0,n.Lk)("span",null,(0,u.v_)(e.rfid),1),1!==e.id?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t=>l.deleteUser(e.id),class:"py-1 px-3 bg-red-700 hover:bg-red-800 rounded text-white"},"Usuń",8,mr)):(0,n.Q3)("",!0)])))),128))]),(0,n.Lk)("div",hr,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.newUser.username=e),placeholder:"Nazwa użytkownika",class:"border p-2 rounded w-full mb-4"},null,512),[[r.Jo,o.newUser.username]]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.addUser&&l.addUser(...e)),class:"btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Dodaj użytkownika")])])])}var pr={data(){return{users:[],newUser:{username:""}}},methods:{fetchUsers(){_.A.get("/users").then((e=>{this.users=e.data})).catch((e=>{console.error("Błąd pobierania użytkowników:",e),alert("Błąd pobierania użytkowników: "+e.message)}))},addUser(){this.newUser.username.trim()?(alert("Proszę przyłożyć kartę do czytnika..."),_.A.post("/add-user",this.newUser).then((()=>{alert("Użytkownik dodany!"),this.fetchUsers(),this.newUser.username="",window.dispatchEvent(new Event("userUpdated"))})).catch((e=>{const t=e.response&&e.response.data&&e.response.data.error?e.response.data.error:"Nieznany błąd";alert("Błąd dodawania użytkownika: "+t)}))):alert("Nazwa użytkownika jest wymagana")},deleteUser(e){_.A.delete(`/user/${e}`).then((()=>{alert("Użytkownik usunięty"),this.fetchUsers(),window.dispatchEvent(new Event("userUpdated"))})).catch((e=>{alert("Błąd usuwania użytkownika: "+e.response.data.error)}))}},mounted(){this.fetchUsers()}};const kr=(0,j.A)(pr,[["render",gr]]);var br=kr;const yr=[{path:"/",name:"Dashboard",component:nt,meta:{requiresAuth:!0}},{path:"/login-prompt",name:"LoginPrompt",component:gt},{path:"/notifications",component:$t},{path:"/settings",name:"Settings",component:Fa},{path:"/manage-sensor",name:"ManageSensors",component:ra},{path:"/calendar",name:"CalendarView",component:Ha},{path:"/login",name:"Login",component:er},{path:"/user-management",name:"managementUser",component:br,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:lr}],fr=(0,R.aE)({history:(0,R.LA)("/"),routes:yr});var wr=fr,vr=a(4664);const Lr=new vr.Ay({storage:window.localStorage,reducer:e=>({sidebarBgColor:e.sidebarBgColor})});var xr=(0,U.y$)({state:{sensors:{temperature:!0,humidity:!0,light:!0,co:!0,smoke:!0,airQuality:!0},sidebarBgColor:localStorage.getItem("sidebarBgColor")||"#1f2937"},mutations:{toggleSensor(e,t){e.sensors[t]=!e.sensors[t]},setSidebarBgColor(e,t){e.sidebarBgColor=t}},actions:{toggleSensor({commit:e},t){e("toggleSensor",t)},setSidebarBgColor({commit:e},t){e("setSidebarBgColor",t),localStorage.setItem("sidebarBgColor",t)}},getters:{sensors:e=>e.sensors,sidebarBgColor:e=>e.sidebarBgColor},plugins:[Lr.plugin]});const Cr=(0,r.Ef)(P);Cr.use(wr),Cr.use(xr),Cr.mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],l=r[1],i=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var d=i(a)}for(t&&t(r);u<o.length;u++)s=o[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=self["webpackChunkterrasense"]=self["webpackChunkterrasense"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(169)}));r=a.O(r)})();
//# sourceMappingURL=app.e98bcd17.js.map