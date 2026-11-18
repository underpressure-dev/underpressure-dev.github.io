(()=>{var R=(i,t,...e)=>{let n=document.createElement(i);if(t)for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r));return e.flat(9).forEach(s=>{s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)))}),n},bn=(i,t=document)=>t.querySelector(i),Ha=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(n=>n(...e))}},ve=new Ha,Z={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(i,t){let e=this.par[i];return e===void 0?t:e}};function fe(i,t="info",e=3500){let n=bn("#toasts");n||(n=R("div",{id:"toasts"}),document.body.append(n));let s=R("div",{class:"toast "+t},i);n.append(s),setTimeout(()=>s.remove(),e)}var wt=(i,t=1)=>i==null||isNaN(i)?"\u2013":(+i).toFixed(t),Ga=i=>{i=Math.round(i);let t=Math.floor(i/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(i%60).padStart(2,"0")} s`},Ui=(i,t,e)=>Math.min(e,Math.max(t,i)),di=(i,t="info")=>{Z.events.push({t:new Date,m:i,kind:t}),Z.events.length>300&&Z.events.shift(),ve.emit("ev")};function qs(i,t,e="application/json"){let n=R("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:i});document.body.append(n),n.click(),n.remove()}function Ys(i){return new Promise(t=>{let e=R("input",{type:"file",accept:i,onchange:()=>{let n=e.files[0];if(!n)return t(null);let s=new FileReader;s.onload=()=>t(s.result),s.readAsText(n)}});e.click()})}var Ln={get(i,t){try{let e=localStorage.getItem("alfaos."+i);return e===null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("alfaos."+i,JSON.stringify(t))}catch{}}};var En=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (3D Modus)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Batterie",h:"Leckage Schwelle (0..1)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"IMU_MODE",k:"imu.mode",d:0,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"}];var Xe={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},Xa=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","REPEAT"],Ks=64,Js=i=>({t:i,v:Xe[i].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),$s=i=>(i%360+360)%360,Wa=i=>(i=$s(i),i>180?i-360:i),Dn=(i,t,e)=>Math.min(e,Math.max(t,i)),Pu=180/Math.PI,Zs=Math.PI/180;function js(i){let t=(e,n)=>{let s=i?i(e):void 0;return s===void 0||isNaN(s)?n:s};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function Qs(i,t){let e=[];return i.length>Ks&&e.push({i:-1,m:`Maximal ${Ks} Schritte, Boot speichert nur diese.`}),i.forEach((n,s)=>{let r=n.v;if(n.t==="DIVE"&&(r[0]>t.depthMax&&e.push({i:s,m:`Tiefe ${r[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),r[2]>t.pitchMax&&e.push({i:s,m:`Nick ${r[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(n.t)){let a=n.t==="CRUISE"?r[0]:n.t==="CURVE"?r[2]:r[3];a>t.thrMax&&e.push({i:s,m:`Fahrt ${a} % wird auf Limit ${t.thrMax} % begrenzt.`})}n.t==="REPEAT"&&r[1]>=s&&e.push({i:s,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),n.t==="CURVE"&&r[1]<.5&&e.push({i:s,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),i.length&&i[i.length-1].t!=="SURFACE"&&e.push({i:i.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function tr(i,t,e={}){let s=[],r=[],a={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},o=L=>{s.push({...a,i:L})},l=0,h=0,u=0,c={};o(-1);let f=4*3600,d=(L,E,A,P,v)=>{let x=0;for(;!L(x)&&x<A&&u<f;)E(x),x+=.1,u+=.1,a.t=u,Math.round(x/.1)%5===0&&o(P);x>=A&&r.push({i:P,m:`${v}: Ziel in ${Math.round(A)} s nicht erreicht (Vorschau).`}),o(P)},g=(L,E,A)=>{let P=Dn(L,0,t.thrMax)*t.ms;a.v=P,a.thr=Dn(L,0,t.thrMax),a.h=$s(a.h+E*.1),a.p+=(A-a.p)*Math.min(1,.1/1.5);let v=P*Math.cos(a.p*Zs),x=-P*Math.sin(a.p*Zs);a.x+=v*Math.sin(a.h*Zs)*.1,a.y+=v*Math.cos(a.h*Zs)*.1,a.z=Math.max(0,a.z+x*.1)};for(;l<i.length&&h++<5e3&&u<f;){let L=i[l],E=L.v;switch(L.t){case"WAIT":d(A=>A>=E[0],()=>g(0,0,0),E[0]+1,l,"Warten");break;case"DIVE":{let A=E[0],P=E[1]>0?E[1]:.2,v=Math.max(E[3],0),x=Math.min(E[2]>0?E[2]:t.pitchMax,t.pitchMax),C=a.z,B=A>a.z?1:-1;d(()=>Math.abs(a.z-A)<t.tol*.5&&Math.abs(C-A)<1e-6,()=>{C+=B*P*.1,(B>0&&C>A||B<0&&C<A)&&(C=A);let F=(C-a.z)*18,H=Dn(-F,-x,x);g(v,0,H),v<1&&(a.z=Dn(a.z+Dn((C-a.z)*.8,-P,P)*.1,0,90),a.p=0)},Math.abs(A-a.z)/P*3+40,l,"Tauchen"),a.z=A;break}case"CRUISE":{let A=E[1]>=0?E[1]:a.h;d(P=>P>=E[2],()=>{let P=Wa(A-a.h);g(E[0],Dn(P*2,-20,20),0)},E[2]+1,l,"Geradeaus");break}case"TURN":{let A=E[1]>.5?$s(a.h+E[0]):$s(E[0]),P=E[2]>0?E[2]:20;d(()=>Math.abs(Wa(A-a.h))<1,()=>{let v=Wa(A-a.h);g(E[3],Dn(v*3,-P,P),0)},90+360/P,l,"Drehen");break}case"CURVE":{let A=Math.max(E[2],1)*t.ms,P=A/Math.max(E[1],.05)*Pu,v=0,x=Math.abs(E[0]);d(()=>v>=x,()=>{let C=Math.min(P*.1,x-v);v+=C,g(Math.max(E[2],1),(E[0]>=0?1:-1)*C/.1,0)},x/Math.max(P,1)*3+40,l,"Kurve");break}case"BALLAST":{let A=Dn(E[0],0,100);d(()=>Math.abs(a.f-A)<.5,()=>{a.f+=Math.sign(A-a.f)*Math.min(t.flow*.1,Math.abs(A-a.f)),g(0,0,0)},240,l,"Ballast");break}case"PLANES":{let A=Dn((E[1]+.5*E[0])*.8,-t.pitchMax,t.pitchMax);d(P=>P>=E[2],()=>g(E[3],0,A),E[2]+1,l,"Ruder fix");break}case"SURFACE":{d(()=>a.z<=.12,()=>{a.f=Math.max(0,a.f-t.flow*.1),g(t.fsThr,0,t.fsPitch),a.z=Math.max(0,a.z-.2*.1*0)},600,l,"Auftauchen"),a.z=0,a.p=0,a.v=0,a.thr=0,o(l),l=i.length;continue}case"REPEAT":{let A=l;if(c[A]=(c[A]||0)+1,c[A]<=E[0]&&E[1]<l){l=Math.max(0,Math.round(E[1]));continue}break}}l++}let _=s,m=0,p=0,w=0,S={x0:0,x1:0,y0:0,y1:0,z1:0};for(let L=1;L<_.length;L++){let E=_[L-1],A=_[L];m+=Math.hypot(A.x-E.x,A.y-E.y,A.z-E.z);let P=A.t-E.t,v=(A.thr||0)/100;w+=P*(e.pBase??1.5+(e.pMax??25)*v*v*v),A.thr>1&&(p+=P)}_.forEach(L=>{S.x0=Math.min(S.x0,L.x),S.x1=Math.max(S.x1,L.x),S.y0=Math.min(S.y0,L.y),S.y1=Math.max(S.y1,L.y),S.z1=Math.max(S.z1,L.z)});let M=_[_.length-1]||a;return{pts:_,notes:r,stats:{dur:M.t,dist:m,maxDepth:S.z1,bb:S,wh:w/3600,cruiseT:p,avgV:M.t>0?m/M.t:0,endDist:Math.hypot(M.x,M.y),final:{x:M.x,y:M.y,z:M.z},w:S.x1-S.x0,l:S.y1-S.y0}}}var qa={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((i,t)=>i),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function Ya(i){return qa[i].map(t=>{let e=Js(t[0]);return t.slice(1).forEach((n,s)=>{e.v[s]=n}),e})}var _c=i=>i.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function er(i){return i.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Xe[t.t])}var Za=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(n=>n!==e)}}emit(t,...e){(this.h[t]||[]).forEach(n=>{try{n(...e)}catch(s){console.error(s)}})}},nr=class extends Za{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let n=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),n&&this._line(n)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(/^(OK|ERR|PAR|INFO|MIS)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let n=t;if(/^(PAR|INFO|MIS)\s/.test(t))try{n=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:n}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(n=>{this.q.push({text:t,res:n,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}fire(t){this.emit("tx",t),this._write(t+`
`)}},vs=class extends nr{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:n}=await this.reader.read();if(n)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},ir=class extends nr{constructor(){super(),this.demo=!0,this.par={},En.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),n=(e[0]||"").toUpperCase(),s=r=>this._reply(r);if(n==="PING")s("OK PONG");else if(n==="INFO")s("INFO "+JSON.stringify({fw:"AlfaOS",ver:"0.1.0 DEMO",hw:"Simulation",params:En.length,maxsteps:64}));else if(n==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),s("OK");else if(n==="GET")s("PAR "+JSON.stringify(En.map(r=>({k:r.k,v:this.par[r.k],d:r.d,mn:r.mn,mx:r.mx,u:r.u,g:r.g,h:r.h}))));else if(n==="SET"){let r=En.find(a=>a.k===e[1]);r?(this.par[r.k]=Math.min(r.mx,Math.max(r.mn,+e[2])),s("OK")):s("ERR unbekannt")}else if(n==="SAVE"||n==="LOAD")s("OK");else if(n==="DEFAULTS")En.forEach(r=>{this.par[r.k]=r.d}),s("OK");else if(n==="ARM")this.tst?s("ERR Testmodus"):(this.armed=1,s("OK"));else if(n==="DISARM")this.armed=0,this.mis=null,s("OK");else if(n==="MODE")this.mode=(e[1]||"MANUAL").toUpperCase(),s("OK");else if(n==="TEST"){let r=(e[1]||"").toUpperCase();r==="ENABLE"?+e[2]&&this.armed?s("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),s("OK")):this.tst?r==="SERVO"?(this.tServo[+e[2]]=+e[3],s("OK")):r==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],s("OK")):s("ERR"):s("ERR kein Testmodus")}else if(n==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),s("OK");else if(n==="MIS"){let r=(e[1]||"").toUpperCase();if(r==="CLEAR")this.steps=[],s("OK");else if(r==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),s("OK "+this.steps.length);else if(r==="GET")s("MIS "+JSON.stringify(this.steps));else if(r==="SAVE")s("OK");else if(r==="START"){if(!this.armed){s("ERR nicht scharf");return}let a=js(o=>this.par[o]);this.mis={plan:tr(er(this.steps),a),t:0,last:-1},this.mode="MISSION",s("OK")}else r==="STOP"?(this.mis=null,this.mode="DEPTH",s("OK")):s("ERR")}else s(n==="REBOOT"||n==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,n=0,s=this.att[2],r=this.depth,a=0,o=-1,l=0,h="-",u=0,c=0,f=0,d=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),a=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let m=this.mis.plan.pts,p=m.findIndex(w=>w.t>=this.mis.t);if(p<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let w=m[p];r=w.z,n=w.p,s=w.h,this.fill=w.f,a=w.thr/100,o=w.i,l=1,h=this.steps[o]?this.steps[o][0]:"-",u=this.mis.t,o!==this.mis.last&&(this.mis.last=o,this.emit("ev",`SCHRITT ${o+1} ${h}`))}}else this.tst||(r+=(0-r)*.02,n=Math.sin(e/3e3)*.4);if(this.depth=r,this.att=[Math.sin(e/2500)*.6,n,s],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-a*a*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let g=(m,p,w,S)=>Math.round(Math.min(this.par[S],Math.max(this.par[w],this.tst?this.tServo[m]:this.par[p]))),_={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(m=>+m.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+r.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+r*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:d,s:f,b:c,us:[g(0,"servo.rud.center","servo.rud.min","servo.rud.max"),g(1,"servo.stern.center","servo.stern.min","servo.stern.max"),g(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+a*500),thr:a,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?r:0,p:n,h:s,t:a*100},mis:{run:l,i:o,n:this.steps.length,ty:h,t:+u.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640};this._feed("T "+JSON.stringify(_)+`
`)}};var jt={bg:"#0A141D",line:"#264059",dim:"#6f869c",txt:"#d5dee8",acc:"#3e86e0",sky:"#17426f",gnd:"#2b2118",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b"},Oe=jt;function sr(i,t){let e=R("canvas",{width:i*2,height:t*2,style:{width:i+"px",height:t+"px",maxWidth:"100%"}}),n=e.getContext("2d");return n.scale(2,2),{c:e,x:n,w:i,h:t}}var jn=(i,t,e="")=>{i.font=`${e} ${t}px Helvetica, Arial, sans-serif`};function xc(i=260){let{c:t,x:e,w:n,h:s}=sr(i,i),r=n/2,a=s/2,o=i/2-6,l={el:t,draw(h=0,u=0,c){e.clearRect(0,0,n,s),e.save(),e.beginPath(),e.arc(r,a,o,0,7),e.clip(),e.translate(r,a),e.rotate(-h*Math.PI/180);let f=o/28,d=u*f;e.fillStyle=jt.sky,e.fillRect(-o*2,-o*3+d,o*4,o*3),e.fillStyle=jt.gnd,e.fillRect(-o*2,d,o*4,o*3),e.strokeStyle="#cfe2f5",e.lineWidth=1.5,e.beginPath(),e.moveTo(-o*2,d),e.lineTo(o*2,d),e.stroke(),e.strokeStyle="rgba(255,255,255,.7)",e.fillStyle="rgba(255,255,255,.8)",e.lineWidth=1,jn(e,9),e.textAlign="left";for(let g=-30;g<=30;g+=10){if(!g)continue;let _=d-g*f,m=g%20===0?28:16;e.beginPath(),e.moveTo(-m,_),e.lineTo(m,_),e.stroke(),g%20===0&&e.fillText(String(Math.abs(g)),m+4,_+3)}if(c!=null){e.strokeStyle=jt.warn,e.lineWidth=2;let g=d-c*f;e.beginPath(),e.moveTo(-40,g),e.lineTo(-22,g),e.moveTo(22,g),e.lineTo(40,g),e.stroke()}e.restore(),e.strokeStyle=jt.line,e.lineWidth=2,e.beginPath(),e.arc(r,a,o,0,7),e.stroke(),e.save(),e.translate(r,a),e.strokeStyle=jt.dim,e.lineWidth=1;for(let g=-60;g<=60;g+=15)e.save(),e.rotate(g*Math.PI/180),e.beginPath(),e.moveTo(0,-o),e.lineTo(0,-o+(g%30===0?9:5)),e.stroke(),e.restore();e.save(),e.rotate(-h*Math.PI/180),e.fillStyle=jt.warn,e.beginPath(),e.moveTo(0,-o+2),e.lineTo(-5,-o+12),e.lineTo(5,-o+12),e.fill(),e.restore(),e.strokeStyle=jt.warn,e.lineWidth=3,e.beginPath(),e.moveTo(-46,0),e.lineTo(-16,0),e.lineTo(-16,7),e.moveTo(46,0),e.lineTo(16,0),e.lineTo(16,7),e.stroke(),e.fillStyle=jt.warn,e.fillRect(-2,-2,4,4),e.restore()}};return l.draw(),l}function vc(i=260){let{c:t,x:e,w:n,H:s=i}={...sr(i,i)},r=i/2,a=i/2,o=i/2-6,l={el:t,draw(h=0,u){e.clearRect(0,0,i,i),e.save(),e.translate(r,a),e.fillStyle=jt.bg,e.beginPath(),e.arc(0,0,o,0,7),e.fill(),e.strokeStyle=jt.line,e.lineWidth=2,e.stroke(),e.rotate(-h*Math.PI/180),jn(e,12,"bold"),e.textAlign="center",e.textBaseline="middle";for(let c=0;c<360;c+=5){e.save(),e.rotate(c*Math.PI/180);let f=c%30===0;e.strokeStyle=f?jt.txt:jt.dim,e.lineWidth=f?1.5:1,e.beginPath(),e.moveTo(0,-o+2),e.lineTo(0,-o+(f?14:8)),e.stroke(),c%90===0?(e.fillStyle=c===0?jt.bad:jt.txt,e.fillText("NESW"[c/90],0,-o+28)):f&&(e.fillStyle=jt.dim,jn(e,9),e.fillText(String(c/10),0,-o+26),jn(e,12,"bold")),e.restore()}u!=null&&(e.save(),e.rotate(u*Math.PI/180),e.fillStyle=jt.warn,e.beginPath(),e.moveTo(0,-o+1),e.lineTo(-6,-o-0),e.lineTo(0,-o+14),e.lineTo(6,-o),e.fill(),e.restore()),e.rotate(h*Math.PI/180),e.fillStyle=jt.acc,e.beginPath(),e.moveTo(0,-o*.45),e.lineTo(-9,o*.25),e.lineTo(0,o*.15),e.lineTo(9,o*.25),e.fill(),e.restore(),e.fillStyle=jt.txt,e.fillRect(r-24,4,48,16),e.fillStyle=jt.bg,jn(e,12,"bold"),e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(h)).padStart(3,"0")+"\xB0",r,13)}};return l.draw(),l}function yc(i=90,t=260){let{c:e,x:n}=sr(i,t);return{el:e,draw(s=0,r=3,a,o){n.clearRect(0,0,i,t);let l=14,h=t-14,u=(h-l)/r;n.fillStyle=jt.bg,n.fillRect(0,0,i,t),n.strokeStyle=jt.line,n.strokeRect(.5,.5,i-1,t-1);let c=n.createLinearGradient(0,l,0,h);c.addColorStop(0,"#1d5f9a"),c.addColorStop(1,"#071724"),n.fillStyle=c,n.fillRect(46,l,22,h-l),jn(n,10),n.textAlign="right",n.textBaseline="middle";let f=r<=5?.5:r<=20?2:10;for(let g=0;g<=r+1e-6;g+=f){let _=l+g*u;n.strokeStyle=jt.dim,n.beginPath(),n.moveTo(40,_),n.lineTo(46,_),n.stroke(),n.fillStyle=jt.dim,n.fillText(g.toFixed(f<1?1:0),36,_)}if(o!==void 0&&o<r){let g=l+o*u;n.strokeStyle=jt.bad,n.setLineDash([3,3]),n.beginPath(),n.moveTo(30,g),n.lineTo(i-6,g),n.stroke(),n.setLineDash([])}if(a!=null&&a>0){let g=l+$a(a,0,r)*u;n.fillStyle=jt.warn,n.beginPath(),n.moveTo(70,g),n.lineTo(84,g-6),n.lineTo(84,g+6),n.fill()}let d=l+$a(s,0,r)*u;n.fillStyle=jt.txt,n.beginPath(),n.moveTo(46,d),n.lineTo(36,d-6),n.lineTo(36,d+6),n.fill(),n.fillStyle=jt.acc,n.fillRect(46,d-1,22,2)}}}var $a=(i,t,e)=>Math.min(e,Math.max(t,i));function Mc(i,t={}){let e=t.w||520,n=t.h||150,{c:s,x:r}=sr(e,n),a=t.span||30,o=i.map(()=>[]),l=0;return{el:s,push(u,c){c.forEach((f,d)=>{if(f!==void 0&&!isNaN(f))for(o[d].push([u,f]);o[d].length&&u-o[d][0][0]>a;)o[d].shift()}),l=u},clear(){o.forEach(u=>{u.length=0})},draw(){r.clearRect(0,0,e,n),r.fillStyle=jt.bg,r.fillRect(0,0,e,n);let u=t.min,c=t.max;if(u===void 0||c===void 0){u=1e9,c=-1e9,o.forEach(g=>g.forEach(_=>{u=Math.min(u,_[1]),c=Math.max(c,_[1])})),u>c&&(u=0,c=1);let d=(c-u)*.1||.5;u-=d,c+=d}r.strokeStyle="#162838",r.lineWidth=1,jn(r,9),r.fillStyle=jt.dim,r.textAlign="left";for(let d=0;d<=4;d++){let g=4+(n-8)*d/4;r.beginPath(),r.moveTo(0,g),r.lineTo(e,g),r.stroke(),r.fillText((c-(c-u)*d/4).toFixed(t.dec??1),3,g-2)}i.forEach((d,g)=>{r.strokeStyle=d.color,r.lineWidth=1.5,r.beginPath();let _=!0;o[g].forEach(m=>{let p=e-(l-m[0])/a*e,w=4+(n-8)*(1-(m[1]-u)/(c-u||1));_?(r.moveTo(p,w),_=!1):r.lineTo(p,w)}),r.stroke()});let f=e-6;r.textAlign="right",jn(r,10);for(let d=i.length-1;d>=0;d--){r.fillStyle=i[d].color;let g=i[d].name+(o[d].length?" "+o[d][o[d].length-1][1].toFixed(t.dec??1):"");r.fillText(g,f,12),f-=r.measureText(g).width+12}}}}function qe(i,t,e,n,s={}){let r=R("div",{class:"bar-fill"}),a=R("span",{class:"bar-val"},"\u2013");return{el:R("div",{class:"bar"},R("span",{class:"bar-l"},i),R("div",{class:"bar-t"},r,s.mid?R("i",{class:"bar-mid"}):null),a),set(l,h,u){if(l===void 0||isNaN(l)){a.textContent="\u2013",r.style.width="0";return}let c=(l-t)/(e-t);if(s.mid){let f=(0-t)/(e-t);r.style.left=Math.min(c,f)*100+"%",r.style.width=Math.abs(c-f)*100+"%"}else r.style.left="0",r.style.width=$a(c,0,1)*100+"%";r.style.background=u||"",a.textContent=h??l.toFixed(s.dec??0)+(n?" "+n:"")}}}var Un=i=>{let t=R("span",{class:"chip"},i);return{el:t,set(e,n){t.textContent=e===void 0?i:e,t.className="chip "+(n||"")}}},re=(i,t)=>{let e=R("b",null,"\u2013"),n=R("div",{class:"stat"},R("span",null,i),R("div",null,e,t?R("small",null,t):null));return{el:n,set(s,r){e.textContent=s,n.className="stat "+(r||"")}}};async function ye(i,t,e){if(!Z.connected)return fe("Nicht verbunden","bad"),null;let n=await Z.link.cmd(i,e);return n.ok?t&&fe(t,"ok"):fe(`${i}: ${n.text}`,"bad"),n}var ar=new Map;setInterval(()=>{if(!(!Z.connected||Z.link.q.length>2))for(let[i,t]of ar)Z.link.cmd(t,800),ar.delete(i)},50);var rr=(i,t)=>ar.set(i,t);async function Ka(i,t){let e=await ye(`SET ${i} ${t}`);return e&&e.ok&&(Z.par[i]=+t,ve.emit("par")),e}async function ys(){let i=await Z.link.cmd("GET",4e3);return i.ok&&Array.isArray(i.data)&&(Z.parList=i.data,Z.par={},i.data.forEach(t=>{Z.par[t.k]=t.v}),ve.emit("par")),i}var ge=(i,...t)=>R("section",{class:"card"},R("h3",null,i),...t),xe=(i,t,e="")=>R("button",{class:"btn "+e,onclick:t},i),je=i=>R("p",{class:"note"},i);function Sc(i){let t=R("div",{class:"kv"});return{el:R("div",{class:"page"},R("div",{class:"hero"},R("div",null,R("h1",null,"AlfaOS Konfigurator"),R("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das RC U-Boot. USB Kabel anstecken, Verbinden dr\xFCcken.")),R("div",{class:"hero-btns"},xe("Verbinden (USB)",()=>i.connect(),"primary big"),xe("Demo Boot starten",()=>i.demo(),"big"))),R("div",{class:"grid2"},ge("Verbindung",t,"serial"in navigator?je("Web Serial braucht Chrome oder Edge. Die Seite muss \xFCber https oder localhost geladen sein, oder als lokale Datei ge\xF6ffnet werden."):R("p",{class:"warn-box"},"Dieser Browser unterst\xFCtzt kein Web Serial. Chrome oder Edge am PC verwenden (Firefox und Safari gehen nicht, Handy Browser auch nicht). Die Demo l\xE4uft trotzdem."),R("div",{class:"row"},xe("Boot neu starten",()=>ye("REBOOT","Neustart")),xe("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&ye("BOOTSEL")}))),ge("Erste Inbetriebnahme",R("ol",{class:"steps"},R("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),R("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),R("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),R("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),R("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),R("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let n=Z.info;t.innerHTML="",[["Status",Z.connected?Z.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",n?`${n.fw} ${n.ver}`:"\u2013"],["Hardware",n?n.hw:"\u2013"],["Parameter",n?n.params:"\u2013"],["Max Missionsschritte",n?n.maxsteps:"\u2013"]].forEach(([s,r])=>t.append(R("span",null,s),R("b",null,String(r))))}}}function bc(){let i=xc(250),t=vc(250),e=yc(88,250),n={pitch:re("Nick","\xB0"),roll:re("Roll","\xB0"),yaw:re("Kurs","\xB0"),depth:re("Tiefe","m"),temp:re("Wasser","\xB0C"),vb:re("Akku","V"),fill:re("Ballast","%"),thr:re("Vortrieb","%"),spd:re("Fahrt ca.","m/s")},s={arm:Un("DISARMED"),mode:Un("MANUAL"),rc:Un("RC"),imu:Un("IMU"),dep:Un("Tiefe"),leak:Un("Leck"),tst:Un("Test"),mis:Un("Mission")},r={rud:qe("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:qe("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:qe("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:qe("Motor",-100,100,"%",{mid:!0}),pmp:qe("Pumpe",-100,100,"%",{mid:!0}),fill:qe("Ballast F\xFCllung",0,100,"%"),vb:qe("Akku 2S",6,8.4,"V",{dec:2}),lk:qe("Leckage",0,1,"",{dec:2})},a=R("div",{class:"alert",style:{display:"none"}}),o=R("div",{class:"log"}),l=R("div",{class:"kv"}),h=R("div",{class:"page dash"},a,R("div",{class:"chips"},Object.values(s).map(c=>c.el)),R("div",{class:"instr"},R("div",{class:"ins"},R("div",{class:"cap"},"Lage"),i.el),R("div",{class:"ins"},R("div",{class:"cap"},"Kurs"),t.el),R("div",{class:"ins"},R("div",{class:"cap"},"Tiefe"),e.el)),R("div",{class:"stats"},Object.values(n).map(c=>c.el)),R("div",{class:"grid2"},ge("Ausg\xE4nge",Object.values(r).map(c=>c.el)),ge("Mission und Ziele",l,R("h4",null,"Ereignisse"),o))),u=()=>{o.innerHTML="",Z.events.slice(-40).reverse().forEach(c=>o.append(R("div",{class:"ev "+c.kind},R("time",null,c.t.toTimeString().slice(0,8)),c.m)))};return ve.on("ev",u),{el:h,show:u,update(c){i.draw(c.att[0],c.att[1],c.mis.run||c.m!=="MANUAL"?c.tg.p:void 0),t.draw(c.att[2],c.m==="MANUAL"?void 0:c.tg.h),e.draw(c.d,Math.max(Z.get("lim.depth",3)*1.15,1),c.m==="DEPTH"||c.m==="MISSION"?c.tg.d:void 0,Z.get("lim.depth",3)),n.pitch.set(wt(c.att[1])),n.roll.set(wt(c.att[0])),n.yaw.set(wt(c.att[2],0).padStart(3,"0")),n.depth.set(wt(c.d,2)),n.temp.set(wt(c.tmp)),n.fill.set(wt(c.fill,0)),n.thr.set(wt(c.out.thr*100,0)),n.vb.set(wt(c.vb,2),c.vb<Z.get("bat.crit",6.4)?"bad":c.vb<Z.get("bat.warn",7)?"warn":""),n.spd.set(wt(Math.abs(c.out.thr*100)*Z.get("spd.ms_per_pct",.014),2)),s.arm.set(c.arm?"ARMED":"DISARMED",c.arm?"bad":""),s.mode.set(c.m,c.m==="FAILSAFE"?"bad":c.m==="MISSION"?"acc":""),s.rc.set(c.rcok?`RC ${c.rssi} dBm`:"RC fehlt",c.rcok?"ok":"warn"),s.imu.set(c.ok[0]?"IMU ok":"IMU Fehler",c.ok[0]?"ok":"bad"),s.dep.set(c.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",c.ok[1]?"ok":"bad"),s.leak.set(c.lk>Z.get("leak.threshold",.35)?"LECKAGE":"trocken",c.lk>Z.get("leak.threshold",.35)?"bad":"ok"),s.tst.set(c.tst?"TESTMODUS":"Test aus",c.tst?"warn":""),s.mis.set(c.mis.run?`Mission ${c.mis.i+1}/${c.mis.n} ${c.mis.ty}`:"Mission aus",c.mis.run?"acc":""),r.rud.set(c.out.r,wt(c.out.r)+" \xB0 / "+c.out.us[0]+" \xB5s"),r.stn.set(c.out.s,wt(c.out.s)+" \xB0 / "+c.out.us[1]+" \xB5s"),r.bow.set(c.out.b,wt(c.out.b)+" \xB0 / "+c.out.us[2]+" \xB5s"),r.thr.set(c.out.thr*100,wt(c.out.thr*100,0)+" % / "+c.out.mu+" \xB5s",c.out.thr<0?Oe.warn:""),r.pmp.set(c.out.pmp*100,wt(c.out.pmp*100,0)+" %"),r.fill.set(c.fill,wt(c.fill,0)+" %"),r.vb.set(c.vb,wt(c.vb,2)+" V",c.vb<Z.get("bat.warn",7)?Oe.warn:Oe.ok),r.lk.set(c.lk,wt(c.lk,2),c.lk>Z.get("leak.threshold",.35)?Oe.bad:Oe.ok);let f=c.fs?"FAILSAFE: "+c.fs:c.w;a.style.display=f?"block":"none",a.textContent=f,l.innerHTML="",[["Ziel Tiefe",wt(c.tg.d,2)+" m"],["Ziel Nick",wt(c.tg.p)+" \xB0"],["Ziel Kurs",wt(c.tg.h,0)+" \xB0"],["Ziel Vortrieb",wt(c.tg.t,0)+" %"],["Schritt",c.mis.run?`${c.mis.i+1} von ${c.mis.n} (${c.mis.ty})`:"\u2013"],["Schrittzeit",c.mis.run?wt(c.mis.t,0)+" s":"\u2013"],["Druck",wt(c.prs,1)+" mbar"],["Zyklus",c.lp+" \xB5s"]].forEach(([d,g])=>l.append(R("span",null,d),R("b",null,g)))}}}function Ec(){let i=(l,h)=>Mc(l,h),t={att:i([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:i([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:i([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:i([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:i([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:i([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=R("div",{class:"kv wide"}),n=R("div",{class:"rcs"}),s=Array.from({length:8},(l,h)=>qe("CH"+(h+1),1e3,2e3,"\xB5s"));s.forEach(l=>n.append(l.el));let r=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],a=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:R("div",{class:"page"},R("div",{class:"grid2"},ge("Lage",t.att.el),ge("Kurs",t.yaw.el),ge("Gyro (\xB0/s)",t.gyr.el),ge("Tiefe",t.dep.el),ge("Akku",t.pwr.el),ge("Leckage und Ballast",t.lk.el)),R("div",{class:"grid2"},ge("Rohwerte",e),ge("RC Kan\xE4le (Crossfire)",n))),show(){Object.values(t).forEach(l=>l.clear())},update(l){let h=l.t/1e3;t.att.push(h,[l.att[0],l.att[1]]),t.yaw.push(h,[l.att[2],l.m==="MANUAL"?void 0:l.tg.h]),t.gyr.push(h,l.gyr),t.dep.push(h,[l.d,l.m==="DEPTH"||l.m==="MISSION"?l.tg.d:void 0]),t.pwr.push(h,[l.vb]),t.lk.push(h,[l.lk,l.fill/100]),Object.values(t).forEach(u=>u.draw()),e.innerHTML="",[["Druck",wt(l.prs,1)+" mbar"],["Temperatur",wt(l.tmp)+" \xB0C"],["Tiefe",wt(l.d,3)+" m"],["Roll / Nick / Kurs",`${wt(l.att[0])} / ${wt(l.att[1])} / ${wt(l.att[2])} \xB0`],["Gyro",l.gyr.map(u=>wt(u)).join(" / ")+" \xB0/s"],["Akku",wt(l.vb,2)+" V"],["Leckage",wt(l.lk,2)],["IMU Kalibrierung",`Sys ${l.cal[0]} Gyr ${l.cal[1]} Acc ${l.cal[2]} Mag ${l.cal[3]}`],["Zykluszeit",l.lp+" \xB5s"],["Modus",l.m]].forEach(([u,c])=>e.append(R("span",null,u),R("b",null,c))),l.rc.forEach((u,c)=>{let f=r.findIndex(d=>Z.get(d,0)===c+1);s[c].set(u,`${u} \xB5s${f>=0?" \xB7 "+a[f]:""}`,l.rcok?"":Oe.dim)})}}}async function Iu(i){if(!Z.connected)return!1;let t=await Z.link.cmd(`TEST ENABLE ${i?1:0}`);return t.ok?!0:(fe(i?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function wc(){let i=R("b",null,"Testmodus aus"),t=R("div",{class:"testbar"},i,R("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=xe("Testmodus einschalten",async()=>{let n=!(Z.tel&&Z.tel.tst);await Iu(n)&&(n||ye("TEST OFF"))},"primary");return t.append(e),{el:t,update(n){i.textContent=n.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(n.tst?" on":""),e.textContent=n.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Tc(){let i=wc(),t={d:re("Tiefe","m"),p:re("Druck","mbar"),t:re("Temp","\xB0C"),pi:re("Nick","\xB0"),ro:re("Roll","\xB0"),yw:re("Kurs","\xB0"),vb:re("Akku","V"),lk:re("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((o,l)=>qe(o,0,3,"",{dec:0})),n=R("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),s=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([o,l,h])=>{let u=R("b",null,"1500 \xB5s"),c=R("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{u.textContent=c.value+" \xB5s",rr("sv"+h,`TEST SERVO ${h} ${c.value}`)}}),f=async(g,_)=>{let m=await Ka(`servo.${l}.${g}`,c.value);m&&m.ok&&fe(`${o} ${_} = ${c.value} \xB5s`,"ok")},d=R("input",{type:"checkbox",onchange:()=>Ka(`servo.${l}.rev`,d.checked?1:0)});return{el:R("div",{class:"sv"},R("div",{class:"svh"},R("b",null,o),u),c,R("div",{class:"row"},xe("Mitte",()=>f("center","Mitte")),xe("Min",()=>f("min","Min")),xe("Max",()=>f("max","Max")),xe("Zur\xFCck auf Mitte",()=>{c.value=Z.get(`servo.${l}.center`,1500),c.oninput()}),R("label",{class:"chk"},d," umkehren"))),sync(){d.checked=Z.get(`servo.${l}.rev`,0)>.5}}}),r=R("div",{class:"page"},i.el,R("div",{class:"stats"},Object.values(t).map(o=>o.el)),R("div",{class:"grid2"},ge("1  Tiefensensor",je("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),R("div",{class:"row"},xe("Tiefe auf Null setzen",()=>ye("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),ge("2  Lage Null",je("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),R("div",{class:"row"},xe("Lage als Null setzen",()=>ye("CAL LEVEL","Lage Null gesetzt"),"primary")),je("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),ge("3  IMU Kalibrierung (BNO055)",e.map(o=>o.el),je("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),R("div",{class:"row"},xe("Profil im BNO055 sichern",()=>ye("CAL IMUSAVE","IMU Profil gespeichert")))),ge("4  Batteriespannung",je("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),R("div",{class:"row"},n,xe("Abgleichen",()=>{+n.value>4?ye(`CAL VBAT ${n.value}`,"Batterie abgeglichen"):fe("Spannung eintragen","warn")},"primary"))),ge("5  Servos: Mitte, Endpunkte, Richtung",je("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),s.map(o=>o.el),je("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),ge("6  Leckage Sensor",je("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),R("div",{class:"row"},xe("Sensoren Seite \xF6ffnen",()=>ve.emit("goto","sensors")))))),a=!1;return ve.on("par",()=>s.forEach(o=>o.sync())),{el:r,show(){s.forEach(o=>o.sync())},hide(){},update(o){i.update(o),t.d.set(wt(o.d,3)),t.p.set(wt(o.prs,1)),t.t.set(wt(o.tmp)),t.pi.set(wt(o.att[1])),t.ro.set(wt(o.att[0])),t.yw.set(wt(o.att[2],0)),t.vb.set(wt(o.vb,2)),t.lk.set(wt(o.lk,2),o.lk>Z.get("leak.threshold",.35)?"bad":""),o.cal.forEach((l,h)=>e[h].set(l,l+" von 3",l>=3?Oe.ok:l>=2?Oe.warn:Oe.bad)),a||(a=!0,s.forEach(l=>l.sync()))}}}function Ac(){let i=wc(),t=null,e=()=>Z.get("lim.deflect",25),n=()=>Z.get("servo.us_per_deg",10),s=(v,x)=>Math.round(Z.get(`servo.${v}.center`,1500)+(Z.get(`servo.${v}.rev`,0)>.5?-1:1)*x*n()),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([v,x,C])=>{let B=R("b",null,"0.0 \xB0"),F=R("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),H=()=>{let K=Ui(+F.value,-e(),e());B.textContent=wt(K)+" \xB0 / "+s(x,K)+" \xB5s",rr("ts"+C,`TEST SERVO ${C} ${s(x,K)}`)};return F.oninput=H,F.addEventListener("dblclick",()=>{F.value=0,H()}),{name:v,key:x,ch:C,sl:F,send:H,el:R("div",{class:"sv"},R("div",{class:"svh"},R("b",null,v),B),F)}}),a=xe("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)";return}let v=performance.now();a.textContent="Stopp Durchlauf",t=setInterval(()=>{let x=(performance.now()-v)/1e3;if(x>10){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)",r.forEach(C=>{C.sl.value=0,C.send()});return}r.forEach((C,B)=>{C.sl.value=Math.sin(x*2*Math.PI*.5+B*1.2)*e(),C.send()})},60)}),o=R("input",{type:"checkbox"}),l=R("input",{type:"checkbox"}),h=R("b",null,"0 %"),u=R("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),c=R("input",{type:"checkbox"}),f=0,d=()=>{o.checked||(u.value=0,f=0);let v=l.checked?100:Z.get("lim.throttle",35);f=Ui(+u.value,-v,v),u.value=f,h.textContent=f+" %"+(f?" \u2192 "+Math.round(Math.abs(f)*Z.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),rr("tm",`TEST MOTOR ${f}`)};u.oninput=d,["pointerup","touchend"].forEach(v=>u.addEventListener(v,()=>{c.checked||(u.value=0,d())}));let g=()=>{u.value=0,f=0,m.value=0,p=0,h.textContent="0 %",_.textContent="0 %",ar.clear(),Z.connected&&(Z.link.q.length=0,Z.link.cmd("TEST OFF",1500)),r.forEach(v=>{v.sl.value=0,v.send()})},_=R("b",null,"0 %"),m=R("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),p=0,w=()=>{p=+m.value,_.textContent=p+" %"+(p>0?" f\xFCllen":p<0?" leeren":""),rr("tp",`TEST PUMP ${p}`)};m.oninput=w,["pointerup","touchend"].forEach(v=>m.addEventListener(v,()=>{m.value=0,w()}));let S=null,M=()=>{S=setInterval(()=>{Z.connected&&(f&&Z.link.cmd(`TEST MOTOR ${f}`,800),p&&Z.link.cmd(`TEST PUMP ${p}`,800))},400)},L=qe("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),E=qe("Motor Ausgang",-100,100,"%",{mid:!0}),A=xe("STOPP ALLES",g,"stop big");return window.addEventListener("keydown",v=>{v.key==="Escape"&&Z.tab==="tests"&&g()}),{el:R("div",{class:"page"},i.el,R("div",{class:"grid2"},ge("Servos",je("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),r.map(v=>v.el),R("div",{class:"row"},a)),ge("Motor",R("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),R("label",{class:"chk"},o," Propeller ist frei, Motor freigeben"),R("label",{class:"chk"},c," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),R("label",{class:"chk"},l," Gaslimit aufheben (nur Pr\xFCfstand)"),R("div",{class:"svh"},R("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),h),u,E.el),ge("Ballastpumpe",je("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. H Br\xFCcke (DRV8833 oder L9110S) n\xF6tig f\xFCr beide Richtungen."),R("div",{class:"svh"},R("b",null,"Pumpe"),_),m,L.el),ge("Notaus",A,je("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){M(),r.forEach(v=>v.send())},hide(){clearInterval(S),g()},update(v){i.update(v),E.set(v.out.thr*100,wt(v.out.thr*100,0)+" % / "+v.out.mu+" \xB5s"),L.set(v.fill,wt(v.fill,0)+" %")},stopAll:g}}function Rc(){let i=R("div"),t=R("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>n()}),e=new Set,n=()=>{i.innerHTML="";let a=Z.parList.length?Z.parList:En.map(h=>({k:h.k,v:h.d,d:h.d,mn:h.mn,mx:h.mx,u:h.u,g:h.g,h:h.h})),o=t.value.trim().toLowerCase(),l={};a.filter(h=>!o||(h.k+" "+h.h+" "+h.g).toLowerCase().includes(o)).forEach(h=>(l[h.g]=l[h.g]||[]).push(h)),Object.entries(l).forEach(([h,u])=>{let c=R("table",{class:"ptable"},R("thead",null,R("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(d=>R("th",null,d))))),f=R("tbody");u.forEach(d=>{let g=Z.par[d.k]!==void 0?Z.par[d.k]:d.v,_=R("input",{class:"pin"+(g!==d.d?" mod":""),type:"number",step:"any",value:g,min:d.mn,max:d.mx,disabled:!Z.connected,onchange:async()=>{let m=Ui(+_.value,d.mn,d.mx);_.value=m;let p=await Ka(d.k,m);p&&p.ok&&(_.classList.toggle("mod",m!==d.d),e.add(d.k),s.classList.add("primary"))}});f.append(R("tr",null,R("td",{class:"mono"},d.k),R("td",null,_),R("td",{class:"dim"},d.u),R("td",{class:"dim",onclick:()=>{_.value=d.d,_.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},d.d),R("td",{class:"dim"},`${d.mn} bis ${d.mx}`),R("td",null,d.h)))}),c.append(f),i.append(ge(h,c))})},s=xe("Im Boot speichern",async()=>{let a=await ye("SAVE","Parameter im Flash gespeichert");a&&a.ok&&(e.clear(),s.classList.remove("primary"))}),r=R("div",{class:"page"},R("div",{class:"toolbar"},t,xe("Neu laden",async()=>{await ys()}),s,xe("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await ye("DEFAULTS","Standardwerte gesetzt"),await ys())}),xe("Export",()=>qs("alfaos_parameter.json",JSON.stringify(Object.fromEntries(Z.parList.map(a=>[a.k,Z.par[a.k]])),null,1))),xe("Import",async()=>{let a=await Ys(".json");if(a)try{let o=JSON.parse(a),l=0;for(let[h,u]of Object.entries(o))(await Z.link.cmd(`SET ${h} ${u}`)).ok&&l++;fe(`${l} Parameter importiert, danach Speichern`,"ok"),await ys()}catch{fe("Datei ung\xFCltig","bad")}})),i);return ve.on("par",()=>{Z.tab==="params"&&n()}),ve.on("conn",n),{el:r,show:n,update(){}}}function Cc(){let i=R("div",{class:"term"}),t=R("input",{type:"checkbox"}),e=R("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async u=>{if(u.key==="Enter"&&e.value.trim()){let c=e.value.trim();n.push(c),s=n.length,e.value="",Z.connected?await Z.link.cmd(c,4e3):fe("Nicht verbunden","bad")}u.key==="ArrowUp"&&s>0&&(e.value=n[--s]),u.key==="ArrowDown"&&s<n.length&&(e.value=n[++s]||"")}}),n=[],s=0,r=[],a=null,o=(u,c)=>{r.push([u,c]),a||(a=setTimeout(l,100))},l=()=>{a=null;let u=i.scrollTop+i.clientHeight>=i.scrollHeight-30;for(r.forEach(([c,f])=>i.append(R("div",{class:c},f.length>400?f.slice(0,400)+" \u2026":f))),r=[];i.childNodes.length>600;)i.firstChild.remove();u&&(i.scrollTop=i.scrollHeight)};return ve.on("tx",u=>o("tx","> "+u)),ve.on("rx",u=>{u.startsWith("T {")&&!t.checked||o(u.startsWith("ERR")?"rx err":"rx",u)}),{el:R("div",{class:"page"},R("div",{class:"toolbar"},R("label",{class:"chk"},t," Telemetrie anzeigen"),xe("Leeren",()=>{i.innerHTML=""})),i,e),show(){i.scrollTop=i.scrollHeight},update(){}}}var Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,Pc=1,Du=2;var Gh=1,Uu=2,zn=3,li=0,Ue=1,en=2,ai=0,ts=1,Ic=2,Lc=3,Dc=4,Nu=5,yi=100,Ou=101,Fu=102,Bu=103,ku=104,zu=200,Vu=201,Hu=202,Gu=203,Io=204,Lo=205,Wu=206,Xu=207,qu=208,Yu=209,Zu=210,$u=211,Ku=212,Ju=213,ju=214,Do=0,Uo=1,No=2,rs=3,Oo=4,Fo=5,Bo=6,ko=7,Wh=0,Qu=1,td=2,oi=0,ed=1,nd=2,id=3,sd=4,rd=5,ad=6,od=7;var Xh=300,as=301,os=302,zo=303,Vo=304,Ta=306,Ho=1e3,Si=1001,Go=1002,_n=1003,ld=1004;var or=1005;var nn=1006,Ja=1007;var bi=1008;var Yn=1009,qh=1010,Yh=1011,Ds=1012,Yl=1013,Ei=1014,Hn=1015,Hs=1016,Zl=1017,$l=1018,ls=1020,Zh=35902,$h=1021,Kh=1022,gn=1023,Jh=1024,jh=1025,es=1026,cs=1027,Qh=1028,Kl=1029,tu=1030,Jl=1031;var jl=1033,Vr=33776,Hr=33777,Gr=33778,Wr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,$o=37492,Ko=37496,Jo=37808,jo=37809,Qo=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,Xr=36492,ul=36494,dl=36495,eu=36283,fl=36284,pl=36285,ml=36286;var qr=2300,gl=2301,ja=2302,Uc=2400,Nc=2401,Oc=2402;var cd=3200,hd=3201;var nu=0,ud=1,ri="",tn="srgb",fs="srgb-linear",Aa="linear",ne="srgb";var Ni=7680;var Fc=519,dd=512,fd=513,pd=514,iu=515,md=516,gd=517,_d=518,xd=519,_l=35044;var Bc="300 es",Gn=2e3,Yr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=1234567,ns=Math.PI/180,Us=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function vd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yd(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function Md(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Td(i,t){return i+Math.random()*(t-i)}function Ad(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(kc=i);let t=kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cd(i){return i*ns}function Pd(i){return i*Us}function Id(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),u=a((t+n)/2),c=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*c,l*f,o*h);break;case"YZY":i.set(l*f,o*u,l*c,o*h);break;case"ZXZ":i.set(l*c,l*f,o*u,o*h);break;case"XZX":i.set(o*u,l*g,l*d,o*h);break;case"YXY":i.set(l*d,o*u,l*g,o*h);break;case"ZYZ":i.set(l*g,l*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ra={DEG2RAD:ns,RAD2DEG:Us,generateUUID:Xn,clamp:Te,euclideanModulo:Ql,mapLinear:vd,inverseLerp:yd,lerp:Is,damp:Md,pingpong:Sd,smoothstep:bd,smootherstep:Ed,randInt:wd,randFloat:Td,randFloatSpread:Ad,seededRandom:Rd,degToRad:Cd,radToDeg:Pd,isPowerOfTwo:Id,ceilPowerOfTwo:Ld,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ud,normalize:ee,denormalize:mn},Tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],S=s[4],M=s[7],L=s[2],E=s[5],A=s[8];return r[0]=a*_+o*w+l*L,r[3]=a*m+o*S+l*E,r[6]=a*p+o*M+l*A,r[1]=h*_+u*w+c*L,r[4]=h*m+u*S+c*E,r[7]=h*p+u*M+c*A,r[2]=f*_+d*w+g*L,r[5]=f*m+d*S+g*E,r[8]=f*p+d*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*a-o*h,f=o*l-u*r,d=h*r-a*l,g=e*c+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=c*_,t[1]=(s*h-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Bt;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=Zr("canvas");return i.style.display="block",i}var zc={};function Cs(i){i in zc||(zc[i]=!0,console.warn(i))}function Od(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?Aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Gc=[.3127,.329],Wc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[fs]:{primaries:Vc,whitePoint:Gc,transfer:Aa,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Vc,whitePoint:Gc,transfer:ne,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Oi,xl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Zr("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kd=0,$r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(to(s[a].image)):r.push(to(s[a]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,Ke=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=nn,a=bi,o=gn,l=Yn,h=i.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Xn(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ho:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ho:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Xh;Ke.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],c=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(c-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,M=(d+1)/2,L=(p+1)/2,E=(u+f)/4,A=(c+_)/4,P=(g+m)/4;return S>M&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(c-_)*(c-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(c-_)/w,this.z=(f-u)/w,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(c!==_||l!==f||h!==d||u!==g){let m=1-o,p=l*f+h*d+u*g+c*_,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),E=Math.atan2(L,p*w);m=Math.sin(m*E)/L,o=Math.sin(o*E)/L}let M=o*w;if(l=l*m+f*M,h=h*m+d*M,u=u*m+g*M,c=c*m+_*M,m===1-o){let L=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=L,h*=L,u*=L,c*=L}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*c+l*d-h*f,t[e+1]=l*g+u*f+h*c-o*d,t[e+2]=h*g+u*d+o*f-l*c,t[e+3]=u*g-o*c-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),c=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*g,this._y=h*d*c-f*u*g,this._z=h*u*g+f*d*c,this._w=h*u*c-f*d*g;break;case"YXZ":this._x=f*u*c+h*d*g,this._y=h*d*c-f*u*g,this._z=h*u*g-f*d*c,this._w=h*u*c+f*d*g;break;case"ZXY":this._x=f*u*c-h*d*g,this._y=h*d*c+f*u*g,this._z=h*u*g+f*d*c,this._w=h*u*c-f*d*g;break;case"ZYX":this._x=f*u*c-h*d*g,this._y=h*d*c+f*u*g,this._z=h*u*g-f*d*c,this._w=h*u*c+f*d*g;break;case"YZX":this._x=f*u*c+h*d*g,this._y=h*d*c+f*u*g,this._z=h*u*g-f*d*c,this._w=h*u*c-f*d*g;break;case"XZY":this._x=f*u*c-h*d*g,this._y=h*d*c-f*u*g,this._z=h*u*g+f*d*c,this._w=h*u*c+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],c=e[10],f=n+o+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>c){let d=2*Math.sqrt(1+n-o-c);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>c){let d=2*Math.sqrt(1+o-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+c-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=a*c+this._w*f,this._x=n*c+this._x*f,this._y=s*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*h+a*c-o*u,this.y=n+l*u+o*h-r*c,this.z=s+l*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new I,qc=new xn,sn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),cr.subVectors(this.max,Ms),Fi.subVectors(t.a,Ms),Bi.subVectors(t.b,Ms),ki.subVectors(t.c,Ms),Qn.subVectors(Bi,Fi),ti.subVectors(ki,Bi),fi.subVectors(Fi,ki);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-fi.z,fi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,fi.z,0,-fi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-fi.y,fi.x,0];return!no(e,Fi,Bi,ki,cr)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Fi,Bi,ki,cr))?!1:(hr.crossVectors(Qn,ti),e=[hr.x,hr.y,hr.z],no(e,Fi,Bi,ki,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,lr=new sn,Fi=new I,Bi=new I,ki=new I,Qn=new I,ti=new I,fi=new I,Ms=new I,cr=new I,hr=new I,pi=new I;function no(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),h=e.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var Vd=new sn,Ss=new I,io=new I,vn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(io)),this.expandByPoint(Ss.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new I,so=new I,ur=new I,ei=new I,ro=new I,dr=new I,ao=new I,wi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(so);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=ei.dot(this.direction),l=-ei.dot(ur),h=ei.lengthSq(),u=Math.abs(1-a*a),c,f,d,g;if(u>0)if(c=a*l-o,f=a*o-l,g=r*u,c>=0)if(f>=-g)if(f<=g){let _=1/u;c*=_,f*=_,d=c*(c+a*f+2*o)+f*(a*c+f+2*l)+h}else f=r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f=-r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f<=-g?(c=Math.max(0,-(-a*r+o)),f=c>0?-r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h):f<=g?(c=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(c=Math.max(0,-(a*r+o)),f=c>0?r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(so).addScaledVector(ur,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-f.z)*c,l=(t.max.z-f.z)*c):(o=(t.max.z-f.z)*c,l=(t.min.z-f.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),dr.subVectors(n,t),ao.crossVectors(ro,dr);let a=this.direction.dot(ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);let l=o*this.direction.dot(dr.crossVectors(ei,dr));if(l<0)return null;let h=o*this.direction.dot(ro.cross(ei));if(h<0||l+h>a)return null;let u=-o*ei.dot(ao);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,l,h,u,c,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,u,c,f,d,g,_,m)}set(t,e,n,s,r,a,o,l,h,u,c,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=d+g*h,e[5]=f-_*h,e[9]=-o*l,e[2]=_-f*h,e[6]=g+d*h,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,d=l*c,g=h*u,_=h*c;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,d=l*c,g=h*u,_=h*c;e[0]=f-_*o,e[4]=-a*c,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,d=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=g*h-d,e[8]=f*h+_,e[1]=l*c,e[5]=_*h+f,e[9]=d*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=_-f*c,e[8]=g*c+d,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*c+g,e[10]=f-_*c}else if(t.order==="XZY"){let f=a*l,d=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=f*c+_,e[5]=a*u,e[9]=d*c-g,e[2]=g*c-d,e[6]=o*u,e[10]=_*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Gd)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),ni.crossVectors(n,Ye),ni.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),ni.crossVectors(n,Ye)),ni.normalize(),fr.crossVectors(Ye,ni),s[0]=ni.x,s[4]=fr.x,s[8]=Ye.x,s[1]=ni.y,s[5]=fr.y,s[9]=Ye.y,s[2]=ni.z,s[6]=fr.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],S=n[7],M=n[11],L=n[15],E=s[0],A=s[4],P=s[8],v=s[12],x=s[1],C=s[5],B=s[9],F=s[13],H=s[2],K=s[6],G=s[10],tt=s[14],W=s[3],rt=s[7],lt=s[11],ct=s[15];return r[0]=a*E+o*x+l*H+h*W,r[4]=a*A+o*C+l*K+h*rt,r[8]=a*P+o*B+l*G+h*lt,r[12]=a*v+o*F+l*tt+h*ct,r[1]=u*E+c*x+f*H+d*W,r[5]=u*A+c*C+f*K+d*rt,r[9]=u*P+c*B+f*G+d*lt,r[13]=u*v+c*F+f*tt+d*ct,r[2]=g*E+_*x+m*H+p*W,r[6]=g*A+_*C+m*K+p*rt,r[10]=g*P+_*B+m*G+p*lt,r[14]=g*v+_*F+m*tt+p*ct,r[3]=w*E+S*x+M*H+L*W,r[7]=w*A+S*C+M*K+L*rt,r[11]=w*P+S*B+M*G+L*lt,r[15]=w*v+S*F+M*tt+L*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*c-s*h*c-r*o*f+n*h*f+s*o*d-n*l*d)+_*(+e*l*d-e*h*f+r*a*f-s*a*d+s*h*u-r*l*u)+m*(+e*h*c-e*o*d-r*a*c+n*a*d+r*o*u-n*h*u)+p*(-s*o*u-e*l*c+e*o*f+s*a*c-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=c*m*h-_*f*h+_*l*d-o*m*d-c*l*p+o*f*p,S=g*f*h-u*m*h-g*l*d+a*m*d+u*l*p-a*f*p,M=u*_*h-g*c*h+g*o*d-a*_*d-u*o*p+a*c*p,L=g*c*l-u*_*l-g*o*f+a*_*f+u*o*m-a*c*m,E=e*w+n*S+s*M+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=w*A,t[1]=(_*f*r-c*m*r-_*s*d+n*m*d+c*s*p-n*f*p)*A,t[2]=(o*m*r-_*l*r+_*s*h-n*m*h-o*s*p+n*l*p)*A,t[3]=(c*l*r-o*f*r-c*s*h+n*f*h+o*s*d-n*l*d)*A,t[4]=S*A,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(g*l*r-a*m*r-g*s*h+e*m*h+a*s*p-e*l*p)*A,t[7]=(a*f*r-u*l*r+u*s*h-e*f*h-a*s*d+e*l*d)*A,t[8]=M*A,t[9]=(g*c*r-u*_*r-g*n*d+e*_*d+u*n*p-e*c*p)*A,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*c*r-u*n*h+e*c*h+a*n*d-e*o*d)*A,t[12]=L*A,t[13]=(u*_*s-g*c*s+g*n*f-e*_*f-u*n*m+e*c*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*c*s-u*o*s+u*n*l-e*c*l-a*n*f+e*o*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,c=o+o,f=r*h,d=r*u,g=r*c,_=a*u,m=a*c,p=o*c,w=l*h,S=l*u,M=l*c,L=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*L,s[1]=(d+M)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(f+p))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-w)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);let h=1/r,u=1/a,c=1/o;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=c,dn.elements[9]*=c,dn.elements[10]*=c,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),c=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===Gn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Yr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let l=this.elements,h=1/(e-t),u=1/(n-s),c=1/(a-r),f=(e+t)*h,d=(n+s)*u,g,_;if(o===Gn)g=(a+r)*c,_=-2*c;else if(o===Yr)g=r*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new I,dn=new ce,Hd=new I(0,0,0),Gd=new I(1,1,1),ni=new I,fr=new I,Ye=new I,Yc=new ce,Zc=new xn,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,$c=new I,Vi=new xn,Fn=new ce,pr=new I,bs=new I,Xd=new I,qd=new xn,Kc=new I(1,0,0),Jc=new I(0,1,0),jc=new I(0,0,1),Qc={type:"added"},Yd={type:"removed"},Hi={type:"childadded",child:null},oo={type:"childremoved",child:null},Ae=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new wn,n=new xn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(bs,pr,this.up):Fn.lookAt(pr,bs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new I,Bn=new I,lo=new I,kn=new I,Gi=new I,Wi=new I,th=new I,co=new I,ho=new I,uo=new I,fo=new ie,po=new ie,mo=new ie,Vn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Bn.subVectors(n,e),lo.subVectors(t,e);let a=fn.dot(fn),o=fn.dot(Bn),l=fn.dot(lo),h=Bn.dot(Bn),u=Bn.dot(lo),c=a*h-o*o;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Bn.subVectors(t,e),fn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,n),Wi.subVectors(r,n),co.subVectors(t,n);let l=Gi.dot(co),h=Wi.dot(co);if(l<=0&&h<=0)return e.copy(n);ho.subVectors(t,s);let u=Gi.dot(ho),c=Wi.dot(ho);if(u>=0&&c<=u)return e.copy(s);let f=l*c-u*h;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gi,a);uo.subVectors(t,r);let d=Gi.dot(uo),g=Wi.dot(uo);if(g>=0&&d<=g)return e.copy(r);let _=d*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Wi,o);let m=u*g-d*c;if(m<=0&&c-u>=0&&d-g>=0)return th.subVectors(r,s),o=(c-u)/(c-u+(d-g)),e.copy(s).addScaledVector(th,o);let p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},mr={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Ql(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=go(a,r,t+1/3),this.g=go(a,r,t),this.b=go(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Te(De.r*255,0,255))*65536+Math.round(Te(De.g*255,0,255))*256+Math.round(Te(De.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=tn){Zt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(mr);let n=Is(ii.h,mr.h,e),s=Is(ii.s,mr.s,e),r=Is(ii.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Vt;Vt.NAMES=ru;var Zd=0,Tn=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Xn(),this.name="",this.blending=ts,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Lo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new I,gr=new Tt,$e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var jr=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=0,Qe=new ce,_o=new Ae,Xi=new I,Ze=new sn,Es=new sn,we=new I,me=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?Qr:jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ze.min,Es.min),Ze.expandByPoint(we),we.addVectors(Ze.max,Es.max),Ze.expandByPoint(we)):(Ze.expandByPoint(Es.min),Ze.expandByPoint(Es.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)we.fromBufferAttribute(o,h),l&&(Xi.fromBufferAttribute(t,h),we.add(Xi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let h=new I,u=new I,c=new I,f=new Tt,d=new Tt,g=new Tt,_=new I,m=new I;function p(P,v,x){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),u.sub(h),c.sub(h),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(c,-d.y).multiplyScalar(C),m.copy(c).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(_),o[v].add(_),o[x].add(_),l[P].add(m),l[v].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,v=w.length;P<v;++P){let x=w[P],C=x.start,B=x.count;for(let F=C,H=C+B;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new I,M=new I,L=new I,E=new I;function A(P){L.fromBufferAttribute(s,P),E.copy(L);let v=o[P];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),M.crossVectors(E,v);let C=M.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,v=w.length;P<v;++P){let x=w[P],C=x.start,B=x.count;for(let F=C,H=C+B;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,h=new I,u=new I,c=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,c=o.normalized,f=new h.constructor(l.length*u),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=h[d++]}return new $e(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eh=new ce,mi=new wi,_r=new vn,nh=new I,xr=new I,vr=new I,yr=new I,xo=new I,Mr=new I,ih=new I,Sr=new I,le=class extends Ae{constructor(t=new me,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],c=r[l];u!==0&&(xo.fromBufferAttribute(c,t),a?Mr.addScaledVector(xo,u):Mr.addScaledVector(xo.sub(e),u))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(_r.containsPoint(mi.origin)===!1&&(mi.intersectSphere(_r,nh)===null||mi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),mi.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,L=S;M<L;M+=3){let E=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);s=br(this,p,t,n,h,u,c,E,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=br(this,a,t,n,h,u,c,w,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,L=S;M<L;M+=3){let E=M,A=M+1,P=M+2;s=br(this,p,t,n,h,u,c,E,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=m,S=m+1,M=m+2;s=br(this,a,t,n,h,u,c,w,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kd(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===li,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Sr);return h<e.near||h>e.far?null:{distance:h,point:Sr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,xr),i.getVertexPosition(l,vr),i.getVertexPosition(h,yr);let u=Kd(i,t,e,n,xr,vr,yr,ih);if(u){let c=new I;Vn.getBarycoord(ih,xr,vr,yr,c),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,h,c,new Tt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,h,c,new Tt)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,h,c,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new I,materialIndex:0};Vn.getNormal(xr,vr,yr,f.normal),u.face=f,u.barycoord=c}return u}var an=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],c=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(c,2));function g(_,m,p,w,S,M,L,E,A,P,v){let x=M/A,C=L/P,B=M/2,F=L/2,H=E/2,K=A+1,G=P+1,tt=0,W=0,rt=new I;for(let lt=0;lt<G;lt++){let ct=lt*C-F;for(let Dt=0;Dt<K;Dt++){let Wt=Dt*x-B;rt[_]=Wt*w,rt[m]=ct*S,rt[p]=H,h.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=E>0?1:-1,u.push(rt.x,rt.y,rt.z),c.push(Dt/A),c.push(1-lt/P),tt+=1}}for(let lt=0;lt<P;lt++)for(let ct=0;ct<A;ct++){let Dt=f+ct+K*lt,Wt=f+ct+K*(lt+1),Y=f+(ct+1)+K*(lt+1),et=f+(ct+1)+K*lt;l.push(Dt,Wt,et),l.push(Wt,Y,et),W+=6}o.addGroup(d,W,v),d+=W,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Ca={clone:hs,merge:Be},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Tn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ta=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new I,sh=new Tt,rh=new Tt,ke=class extends ta{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qi=-90,Yi=1,Ml=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(qi,Yi,t,e);s.layers=this.layers,this.add(s);let r=new ke(qi,Yi,t,e);r.layers=this.layers,this.add(r);let a=new ke(qi,Yi,t,e);a.layers=this.layers,this.add(a);let o=new ke(qi,Yi,t,e);o.layers=this.layers,this.add(o);let l=new ke(qi,Yi,t,e);l.layers=this.layers,this.add(l);let h=new ke(qi,Yi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ea=class extends Ke{constructor(t,e,n,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ai});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=nn),new Ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},vo=new I,tf=new I,ef=new Bt,pn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vo.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new vn,Er=new I,Ns=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],c=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,f-h,m-d,M-p).normalize(),n[1].setComponents(l+r,f+h,m+d,M+p).normalize(),n[2].setComponents(l+a,f+u,m+g,M+w).normalize(),n[3].setComponents(l-a,f-u,m-g,M-w).normalize(),n[4].setComponents(l-o,f-c,m-_,M-S).normalize(),e===Gn)n[5].setComponents(l+o,f+c,m+_,M+S).normalize();else if(e===Yr)n[5].setComponents(o,c,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ou(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nf(i){let t=new WeakMap;function e(o,l){let h=o.array,u=o.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,h){let u=l.array,c=l.updateRanges;if(i.bindBuffer(h,o),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<c.length;d++){let g=c[f],_=c[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,c[f]=_)}c.length=f+1;for(let d=0,g=c.length;d<g;d++){let _=c[d];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Ti=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,c=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let w=p*f-a;for(let S=0;S<h;S++){let M=S*c-r;g.push(M,-w,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let S=w+h*p,M=w+h*(p+1),L=w+1+h*(p+1),E=w+1+h*p;d.push(S,M,E),d.push(M,L,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:xf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:bf,color_pars_fragment:Ef,color_pars_vertex:wf,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:If,emissivemap_fragment:Lf,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Of,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:zf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Zf,lights_pars_begin:$f,lights_toon_fragment:Jf,lights_toon_pars_fragment:jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:bp,normal_pars_vertex:Ep,normal_vertex:wp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Ip,packing:Lp,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Op,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:Zp,tonemapping_fragment:$p,tonemapping_pars_fragment:Kp,transmission_fragment:Jp,transmission_pars_fragment:jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:xm,meshlambert_vert:vm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:bm,meshnormal_frag:Em,meshphong_vert:wm,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Im,points_frag:Lm,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Om},st={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ze={basic:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Be([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Be([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Be([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Be([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Be([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Be([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Be([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Be([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Be([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Be([st.lights,st.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};ze.physical={uniforms:Be([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var wr={r:0,b:0,g:0},_i=new wn,Fm=new ce;function Bm(i,t,e,n,s,r,a){let o=new Vt(0),l=r===!0?0:1,h,u,c=null,f=0,d=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1,M=g(w);M===null?p(o,l):M&&M.isColor&&(p(M,1),S=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===Ta)?(u===void 0&&(u=new le(new an(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:hs(ze.backgroundCube.uniforms),vertexShader:ze.backgroundCube.vertexShader,fragmentShader:ze.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(_i)),u.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ne,(c!==M||f!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,c=M,f=M.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new le(new Ti(2,2),new on({name:"BackgroundMaterial",uniforms:hs(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,c=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function p(w,S){w.getRGB(wr,au(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m}}function km(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,C,B,F,H){let K=!1,G=c(F,B,C);r!==G&&(r=G,h(r.object)),K=d(x,F,B,H),K&&g(x,F,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(x,C,B,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function c(x,C,B){let F=B.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let K=H[C.id];K===void 0&&(K={},H[C.id]=K);let G=K[F];return G===void 0&&(G=f(l()),K[F]=G),G}function f(x){let C=[],B=[],F=[];for(let H=0;H<e;H++)C[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,C,B,F){let H=r.attributes,K=C.attributes,G=0,tt=B.getAttributes();for(let W in tt)if(tt[W].location>=0){let lt=H[W],ct=K[W];if(ct===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),lt===void 0||lt.attribute!==ct||ct&&lt.data!==ct.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(x,C,B,F){let H={},K=C.attributes,G=0,tt=B.getAttributes();for(let W in tt)if(tt[W].location>=0){let lt=K[W];lt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));let ct={};ct.attribute=lt,lt&&lt.data&&(ct.data=lt.data),H[W]=ct,G++}r.attributes=H,r.attributesNum=G,r.index=F}function _(){let x=r.newAttributes;for(let C=0,B=x.length;C<B;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){let B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),H[x]!==C&&(i.vertexAttribDivisor(x,C),H[x]=C)}function w(){let x=r.newAttributes,C=r.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==x[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function S(x,C,B,F,H,K,G){G===!0?i.vertexAttribIPointer(x,C,B,H,K):i.vertexAttribPointer(x,C,B,F,H,K)}function M(x,C,B,F){_();let H=F.attributes,K=B.getAttributes(),G=C.defaultAttributeValues;for(let tt in K){let W=K[tt];if(W.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){let lt=rt.normalized,ct=rt.itemSize,Dt=t.get(rt);if(Dt===void 0)continue;let Wt=Dt.buffer,Y=Dt.type,et=Dt.bytesPerElement,yt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===Yl;if(rt.isInterleavedBufferAttribute){let at=rt.data,Ct=at.stride,ot=rt.offset;if(at.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)p(W.location+X,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let X=0;X<W.locationSize;X++)m(W.location+X);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let X=0;X<W.locationSize;X++)S(W.location+X,ct/W.locationSize,Y,lt,Ct*et,(ot+ct/W.locationSize*X)*et,yt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)p(W.location+at,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let at=0;at<W.locationSize;at++)S(W.location+at,ct/W.locationSize,Y,lt,ct*et,ct/W.locationSize*at*et,yt)}}else if(G!==void 0){let lt=G[tt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(W.location,lt);break;case 3:i.vertexAttrib3fv(W.location,lt);break;case 4:i.vertexAttrib4fv(W.location,lt);break;default:i.vertexAttrib1fv(W.location,lt)}}}}w()}function L(){P();for(let x in n){let C=n[x];for(let B in C){let F=C[B];for(let H in F)u(F[H].object),delete F[H];delete C[B]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let C=n[x.id];for(let B in C){let F=C[B];for(let H in F)u(F[H].object),delete F[H];delete C[B]}delete n[x.id]}function A(x){for(let C in n){let B=n[C];if(B[x.id]===void 0)continue;let F=B[x.id];for(let H in F)u(F[H].object),delete F[H];delete B[x.id]}}function P(){v(),a=!0,r!==s&&(r=s,h(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function zm(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,c){c!==0&&(i.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function o(h,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let d=0;for(let g=0;g<c;g++)d+=u[g];e.update(d,n,1)}function l(h,u,c,f){if(c===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)a(h[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,c);let g=0;for(let _=0;_<c;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===Hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:E}}function Hm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let g=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,p=i.get(c);if(!s||g===null||g.length===0||r&&!m)r?u(null):h();else{let w=r?0:n,S=w*4,M=p.clippingState||null;l.value=M,M=u(g,f,S,d);for(let L=0;L!==S;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,g){let _=c!==null?c.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==_;++S,M+=4)a.copy(c[S]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gm(i){let t=new WeakMap;function e(a,o){return o===zo?a.mapping=as:o===Vo&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===zo||o===Vo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new Sl(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var na=class extends ta{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,ah=[.125,.215,.35,.446,.526,.582],Mi=20,yo=new na,oh=new Vt,Mo=null,So=0,bo=0,Eo=!1,vi=(1+Math.sqrt(5))/2,Zi=1/vi,lh=[new I(-vi,Zi,0),new I(vi,Zi,0),new I(-Zi,0,vi),new I(Zi,0,vi),new I(0,vi,-Zi),new I(0,vi,Zi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,So,bo),this._renderer.xr.enabled=Eo,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Hs,format:gn,colorSpace:fs,depthBuffer:!1},s=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,n,s){let o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(oh),u.toneMapping=oi,u.autoClear=!1;let d=new rn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new le(new an,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(oh),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));let S=this._cubeSize;Tr(s,w*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=c,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,yo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lh[(s-r-1)%lh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new le(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let p=[],w=0;for(let A=0;A<Mi;++A){let P=A/_,v=Math.exp(-P*P/2);p.push(v),A===0?w+=v:A<m&&(w+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let M=this._sizeLods[s],L=3*M*(s>S-Qi?s-S+Qi:0),E=4*(this._cubeSize-M);Tr(e,L,E,3*M,2*M),l.setRenderTarget(e),l.render(c,yo)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+ah.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Qi?l=ah[a-i+Qi-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),u=-h,c=1+h,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),S=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,P=E>2?0:-1,v=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(v,_*g*E),S.set(f,m*g*E);let x=[E,E,E,E,E,E];M.set(x,p*g*E)}let L=new me;L.setAttribute("position",new $e(w,_)),L.setAttribute("uv",new $e(S,m)),L.setAttribute("faceIndex",new $e(M,p)),t.push(L),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ch(i,t,e){let n=new $n(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(Mi),s=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function uh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===zo||l===Vo,u=l===as||l===os;if(h||u){let c=t.get(o),f=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ia(i)),c=h?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{let d=o.image;return h&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ia(i)),c=h?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function s(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){let s={},r=new WeakMap;function a(c){let f=c.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(c,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(c){let f=c.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=c.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(c){let f=[],d=c.index,g=c.attributes.position,_=0;if(d!==null){let w=d.array;_=d.version;for(let S=0,M=w.length;S<M;S+=3){let L=w[S+0],E=w[S+1],A=w[S+2];f.push(L,E,E,A,A,L)}}else if(g!==void 0){let w=g.array;_=g.version;for(let S=0,M=w.length/3-1;S<M;S+=3){let L=S+0,E=S+1,A=S+2;f.push(L,E,E,A,A,L)}}else return;let m=new(su(f)?Qr:jr)(f,1);m.version=_;let p=r.get(c);p&&t.remove(p),r.set(c,m)}function u(c){let f=r.get(c);if(f){let d=c.index;d!==null&&f.version<d.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function $m(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function c(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==c){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*L*4*c),A=new Kr(E,M,L,c);A.type=Hn,A.needsUpdate=!0;let P=S*4;for(let x=0;x<c;x++){let C=m[x],B=p[x],F=w[x],H=M*L*4*x;for(let K=0;K<C.count;K++){let G=K*P;d===!0&&(s.fromBufferAttribute(C,K),E[H+G+0]=s.x,E[H+G+1]=s.y,E[H+G+2]=s.z,E[H+G+3]=0),g===!0&&(s.fromBufferAttribute(B,K),E[H+G+4]=s.x,E[H+G+5]=s.y,E[H+G+6]=s.z,E[H+G+7]=0),_===!0&&(s.fromBufferAttribute(F,K),E[H+G+8]=s.x,E[H+G+9]=s.y,E[H+G+10]=s.z,E[H+G+11]=F.itemSize===4?s.w:1)}}f={count:c,texture:A,size:new Tt(M,L)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jm(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,c=t.get(l,u);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return c}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var sa=class extends Ke{constructor(t,e,n,s,r,a,o,l,h,u=es){if(u!==es&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===es&&(n=Ei),n===void 0&&u===cs&&(n=ls),super(null,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lu=new Ke,dh=new sa(1,1),cu=new Kr,hu=new yl,uu=new ea,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;_h.set(n),i.uniformMatrix2fv(this.addr,!1,_h),be(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),be(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),be(e,n)}}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=iu,r=dh):r=lu,e.setTexture2D(t||r,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cu,s)}function xg(i){switch(i){case 5126:return Qm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function bg(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lu,r[a])}function Ng(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hu,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uu,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cu,r[a])}function Bg(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}var bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}},wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wo=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for(wo.lastIndex=0;;){let r=wo.exec(n),a=wo.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){xh(e,h===void 0?new bl(o,i,t):new El(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new wl(o),xh(e,c)),e=c}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,Vg=0;function Hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yh=new Bt;function Gg(i){Zt._getMatrix(yh,Zt.workingColorSpace,i);let t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),a)}else return s}function Wg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case ed:e="Linear";break;case nd:e="Reinhard";break;case id:e="Cineon";break;case sd:e="ACESFilmic";break;case ad:e="AgX";break;case od:e="Neutral";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ar=new I;function qg(){Zt.getLuminanceCoefficients(Ar);let i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ps(i){return i!==""}function Sh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(Kg,jg)}var Jg=new Map;function jg(i,t){let e=zt[t];if(e===void 0){let n=Jg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(Qg,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function n0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function s0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function r0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e0(e),h=n0(e),u=i0(e),c=s0(e),f=r0(e),d=Yg(e),g=Zg(r),_=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?zt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Tl(a),a=Sh(a,e),a=bh(a,e),o=Tl(o),o=Sh(o,e),o=bh(o,e),a=Eh(a),o=Eh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+a,M=w+p+o,L=vh(s,s.VERTEX_SHADER,S),E=vh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(E).trim(),K=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,E);else{let tt=Mh(s,L,"vertex"),W=Mh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+tt+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:K,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(E),P=new ss(s,_),v=$g(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,zg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=E,this}var o0=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}};function l0(i,t,e,n,s,r,a){let o=new Jr,l=new Al,h=new Set,u=[],c=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,x,C,B,F){let H=B.fog,K=F.geometry,G=v.isMeshStandardMaterial?B.environment:null,tt=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),W=tt&&tt.mapping===Ta?tt.image.height:null,rt=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=lt!==void 0?lt.length:0,Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let Wt,Y,et,yt;if(rt){let te=ze[rt];Wt=te.vertexShader,Y=te.fragmentShader}else Wt=v.vertexShader,Y=v.fragmentShader,l.update(v),et=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),ot=F.isInstancedMesh===!0,X=F.isBatchedMesh===!0,mt=!!v.map,Pt=!!v.matcap,Ht=!!tt,D=!!v.aoMap,he=!!v.lightMap,Gt=!!v.bumpMap,_t=!!v.normalMap,Mt=!!v.displacementMap,Qt=!!v.emissiveMap,It=!!v.metalnessMap,T=!!v.roughnessMap,y=v.anisotropy>0,k=v.clearcoat>0,J=v.dispersion>0,Q=v.iridescence>0,$=v.sheen>0,At=v.transmission>0,ut=y&&!!v.anisotropyMap,gt=k&&!!v.clearcoatMap,Yt=k&&!!v.clearcoatNormalMap,nt=k&&!!v.clearcoatRoughnessMap,xt=Q&&!!v.iridescenceMap,Lt=Q&&!!v.iridescenceThicknessMap,Ut=$&&!!v.sheenColorMap,vt=$&&!!v.sheenRoughnessMap,qt=!!v.specularMap,kt=!!v.specularColorMap,ae=!!v.specularIntensityMap,U=At&&!!v.transmissionMap,ht=At&&!!v.thicknessMap,q=!!v.gradientMap,j=!!v.alphaMap,pt=v.alphaTest>0,dt=!!v.alphaHash,Ot=!!v.extensions,_e=oi;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ie={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:Y,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:X,batchingColor:X&&F._colorsTexture!==null,instancing:ot,instancingColor:ot&&F.instanceColor!==null,instancingMorph:ot&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:fs,alphaToCoverage:!!v.alphaToCoverage,map:mt,matcap:Pt,envMap:Ht,envMapMode:Ht&&tt.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:he,bumpMap:Gt,normalMap:_t,displacementMap:f&&Mt,emissiveMap:Qt,normalMapObjectSpace:_t&&v.normalMapType===ud,normalMapTangentSpace:_t&&v.normalMapType===nu,metalnessMap:It,roughnessMap:T,anisotropy:y,anisotropyMap:ut,clearcoat:k,clearcoatMap:gt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:qt,specularColorMap:kt,specularIntensityMap:ae,transmission:At,transmissionMap:U,thicknessMap:ht,gradientMap:q,opaque:v.transparent===!1&&v.blending===ts&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:dt,combine:v.combine,mapUv:mt&&_(v.map.channel),aoMapUv:D&&_(v.aoMap.channel),lightMapUv:he&&_(v.lightMap.channel),bumpMapUv:Gt&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:Mt&&_(v.displacementMap.channel),emissiveMapUv:Qt&&_(v.emissiveMap.channel),metalnessMapUv:It&&_(v.metalnessMap.channel),roughnessMapUv:T&&_(v.roughnessMap.channel),anisotropyMapUv:ut&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:qt&&_(v.specularMap.channel),specularColorMapUv:kt&&_(v.specularColorMap.channel),specularIntensityMapUv:ae&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(mt||j),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ct,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:mt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ne,decodeVideoTextureEmissive:Qt&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Ue,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ot&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&v.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=h.has(1),Ie.vertexUv2s=h.has(2),Ie.vertexUv3s=h.has(3),h.clear(),Ie}function p(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)x.push(C),x.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(w(x,v),S(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function S(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){let x=g[v.type],C;if(x){let B=ze[x];C=Ca.clone(B.uniforms)}else C=v.uniforms;return C}function L(v,x){let C;for(let B=0,F=u.length;B<F;B++){let H=u[B];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new a0(i,x,v,r),u.push(C)),C}function E(v){if(--v.usedTimes===0){let x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:P}}function c0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ah(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:c.id,object:c,geometry:f,material:d,groupOrder:g,renderOrder:c.renderOrder,z:_,group:m},i[t]=p):(p.id=c.id,p.object=c,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=_,p.group=m),t++,p}function o(c,f,d,g,_,m){let p=a(c,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(c,f,d,g,_,m){let p=a(c,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(c,f){e.length>1&&e.sort(c||h0),n.length>1&&n.sort(f||Th),s.length>1&&s.sort(f||Th)}function u(){for(let c=t,f=i.length;c<f;c++){let d=i[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function u0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ah,i.set(n,[a])):s>=r.length?(a=new Ah,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Vt};break;case"SpotLight":e={position:new I,direction:new I,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function f0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g0(i){let t=new d0,e=f0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let s=new I,r=new ce,a=new ce;function o(h){let u=0,c=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,S=0,M=0,L=0,E=0,A=0;h.sort(m0);for(let v=0,x=h.length;v<x;v++){let C=h[v],B=C.color,F=C.intensity,H=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=B.r*F,c+=B.g*F,f+=B.b*F;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],F);A++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=C.shadow.matrix,w++}n.directional[d]=G,d++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;let tt=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,tt.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=tt.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=K,M++}_++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let tt=C.shadow,W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(F),G.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=A,n.version=p0++)}function l(h,u){let c=0,f=0,d=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){let S=h[p];if(S.isDirectionalLight){let M=n.directional[c];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(S.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Rh(i){let t=new g0(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Rh(i),t.set(s,[o])):r>=a.length?(o=new Rh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cl=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y0(i,t,e){let n=new Ns,s=new Tt,r=new Tt,a=new ie,o=new Cl({depthPacking:hd}),l=new Pl,h={},u=e.maxTextureSize,c={[li]:Ue,[Ue]:li,[en]:en},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:x0,fragmentShader:v0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ai),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==zn&&this.type===zn,H=p===zn&&this.type!==zn;for(let K=0,G=E.length;K<G;K++){let tt=E[K],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();if(s.multiply(rt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,W.mapSize.y=r.y)),W.map===null||F===!0||H===!0){let ct=this.type!==zn?{minFilter:_n,magFilter:_n}:{};W.map!==null&&W.map.dispose(),W.map=new $n(s.x,s.y,ct),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let lt=W.getViewportCount();for(let ct=0;ct<lt;ct++){let Dt=W.getViewport(ct);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),B.viewport(a),W.updateMatrices(tt,ct),n=W.getFrustum(),M(A,P,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&w(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,x,C)};function w(E,A){let P=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $n(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,P,d,_,null)}function S(E,A,P,v){let x=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=x.uuid,F=A.uuid,H=h[B];H===void 0&&(H={},h[B]=H);let K=H[F];K===void 0&&(K=x.clone(),H[F]=K,A.addEventListener("dispose",L)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,v===zn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:c[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=i.properties.get(x);B.light=P}return x}function M(E,A,P,v,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let F=t.update(E),H=E.material;if(Array.isArray(H)){let K=F.groups;for(let G=0,tt=K.length;G<tt;G++){let W=K[G],rt=H[W.materialIndex];if(rt&&rt.visible){let lt=S(E,rt,v,x);E.onBeforeShadow(i,E,A,P,F,lt,W),i.renderBufferDirect(P,null,F,lt,E,W),E.onAfterShadow(i,E,A,P,F,lt,W)}}}else if(H.visible){let K=S(E,H,v,x);E.onBeforeShadow(i,E,A,P,F,K,null),i.renderBufferDirect(P,null,F,K,E,null),E.onAfterShadow(i,E,A,P,F,K,null)}}let B=E.children;for(let F=0,H=B.length;F<H;F++)M(B[F],A,P,v,x)}function L(E){E.target.removeEventListener("dispose",L);for(let P in h){let v=h[P],x=E.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var M0={[Do]:Uo,[No]:Bo,[Oo]:ko,[rs]:Fo,[Uo]:Do,[Bo]:No,[ko]:Oo,[Fo]:rs};function S0(i,t){function e(){let U=!1,ht=new ie,q=null,j=new ie(0,0,0,0);return{setMask:function(pt){q!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){U=pt},setClear:function(pt,dt,Ot,_e,Ie){Ie===!0&&(pt*=_e,dt*=_e,Ot*=_e),ht.set(pt,dt,Ot,_e),j.equals(ht)===!1&&(i.clearColor(pt,dt,Ot,_e),j.copy(ht))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,q=null,j=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let _e=pt;pt=null,this.setClear(_e)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!U&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(ht&&(dt=M0[dt]),j!==dt){switch(dt){case Do:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){U=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){U=!1,q=null,j=null,pt=null,ht=!1}}}function s(){let U=!1,ht=null,q=null,j=null,pt=null,dt=null,Ot=null,_e=null,Ie=null;return{setTest:function(te){U||(te?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(te){ht!==te&&!U&&(i.stencilMask(te),ht=te)},setFunc:function(te,cn,Pn){(q!==te||j!==cn||pt!==Pn)&&(i.stencilFunc(te,cn,Pn),q=te,j=cn,pt=Pn)},setOp:function(te,cn,Pn){(dt!==te||Ot!==cn||_e!==Pn)&&(i.stencilOp(te,cn,Pn),dt=te,Ot=cn,_e=Pn)},setLocked:function(te){U=te},setClear:function(te){Ie!==te&&(i.clearStencil(te),Ie=te)},reset:function(){U=!1,ht=null,q=null,j=null,pt=null,dt=null,Ot=null,_e=null,Ie=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap,u={},c={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,S=null,M=null,L=null,E=null,A=new Vt(0,0,0),P=0,v=!1,x=null,C=null,B=null,F=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=tt>=2);let rt=null,lt={},ct=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Wt=new ie().fromArray(ct),Y=new ie().fromArray(Dt);function et(U,ht,q,j){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<q;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let yt={};yt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(rs),Gt(!1),_t(Pc),at(i.CULL_FACE),D(ai);function at(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ct(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ot(U,ht){return c[U]!==ht?(i.bindFramebuffer(U,ht),c[U]=ht,U===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function X(U,ht){let q=d,j=!1;if(U){q=f.get(ht),q===void 0&&(q=[],f.set(ht,q));let pt=U.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function mt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Pt={[yi]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};Pt[Bu]=i.MIN,Pt[ku]=i.MAX;let Ht={[zu]:i.ZERO,[Vu]:i.ONE,[Hu]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,ht,q,j,pt,dt,Ot,_e,Ie,te){if(U===ai){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),U!==Nu){if(U!==m||te!==v){if((p!==yi||M!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,M=yi),te)switch(U){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,S=null,L=null,E=null,A.set(0,0,0),P=0,m=U,v=te}return}pt=pt||ht,dt=dt||q,Ot=Ot||j,(ht!==p||pt!==M)&&(i.blendEquationSeparate(Pt[ht],Pt[pt]),p=ht,M=pt),(q!==w||j!==S||dt!==L||Ot!==E)&&(i.blendFuncSeparate(Ht[q],Ht[j],Ht[dt],Ht[Ot]),w=q,S=j,L=dt,E=Ot),(_e.equals(A)===!1||Ie!==P)&&(i.blendColor(_e.r,_e.g,_e.b,Ie),A.copy(_e),P=Ie),m=U,v=!1}function he(U,ht){U.side===en?Ct(i.CULL_FACE):at(i.CULL_FACE);let q=U.side===Ue;ht&&(q=!q),Gt(q),U.blending===ts&&U.transparent===!1?D(ai):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function _t(U){U!==Lu?(at(i.CULL_FACE),U!==C&&(U===Pc?i.cullFace(i.BACK):U===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),C=U}function Mt(U){U!==B&&(G&&i.lineWidth(U),B=U)}function Qt(U,ht,q){U?(at(i.POLYGON_OFFSET_FILL),(F!==ht||H!==q)&&(i.polygonOffset(ht,q),F=ht,H=q)):Ct(i.POLYGON_OFFSET_FILL)}function It(U){U?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+K-1),rt!==U&&(i.activeTexture(U),rt=U)}function y(U,ht,q){q===void 0&&(rt===null?q=i.TEXTURE0+K-1:q=rt);let j=lt[q];j===void 0&&(j={type:void 0,texture:void 0},lt[q]=j),(j.type!==U||j.texture!==ht)&&(rt!==q&&(i.activeTexture(q),rt=q),i.bindTexture(U,ht||yt[U]),j.type=U,j.texture=ht)}function k(){let U=lt[rt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){Wt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function vt(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function qt(U,ht){let q=h.get(ht);q===void 0&&(q=new WeakMap,h.set(ht,q));let j=q.get(U);j===void 0&&(j=i.getUniformBlockIndex(ht,U.name),q.set(U,j))}function kt(U,ht){let j=h.get(ht).get(U);l.get(ht)!==j&&(i.uniformBlockBinding(ht,j,U.__bindingPointIndex),l.set(ht,j))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,lt={},c={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,S=null,M=null,L=null,E=null,A=new Vt(0,0,0),P=0,v=!1,x=null,C=null,B=null,F=null,H=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Ct,bindFramebuffer:ot,drawBuffers:X,useProgram:mt,setBlending:D,setMaterial:he,setFlipSided:Gt,setCullFace:_t,setLineWidth:Mt,setPolygonOffset:Qt,setScissorTest:It,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Ut,viewport:vt,reset:ae}}function Ch(i,t,e,n){let s=b0(n);switch(e){case $h:return i*t;case Jh:return i*t;case jh:return i*t*2;case Qh:return i*t/s.components*s.byteLength;case Kl:return i*t/s.components*s.byteLength;case tu:return i*t*2/s.components*s.byteLength;case Jl:return i*t*2/s.components*s.byteLength;case Kh:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case Vr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eu:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(i){switch(i){case Yn:case qh:return{byteLength:1,components:1};case Ds:case Yh:case Hs:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case Ei:case Yl:case Hn:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,u=new WeakMap,c,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Zr("canvas")}function _(T,y,k){let J=1,Q=It(T);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(J*Q.width),At=Math.floor(J*Q.height);c===void 0&&(c=g($,At));let ut=y?g($,At):c;return ut.width=$,ut.height=At,ut.getContext("2d").drawImage(T,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+At+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,y,k,J,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),y===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){let At=Q?Aa:Zt.getTransfer(J);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=At===ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(T,y){let k;return T?y===null||y===Ei||y===ls?k=i.DEPTH24_STENCIL8:y===Hn?k=i.DEPTH32F_STENCIL8:y===Ds&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===ls?k=i.DEPTH_COMPONENT24:y===Hn?k=i.DEPTH_COMPONENT32F:y===Ds&&(k=i.DEPTH_COMPONENT16),k}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){let y=T.target;y.removeEventListener("dispose",E),P(y),y.isVideoTexture&&u.delete(y)}function A(T){let y=T.target;y.removeEventListener("dispose",A),x(y)}function P(T){let y=n.get(T);if(y.__webglInit===void 0)return;let k=T.source,J=f.get(k);if(J){let Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(T),Object.keys(J).length===0&&f.delete(k)}n.remove(T)}function v(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let k=T.source,J=f.get(k);delete J[y.__cacheKey],a.memory.textures--}function x(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=T.textures;for(let J=0,Q=k.length;J<Q;J++){let $=n.get(k[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(T)}let C=0;function B(){C=0}function F(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function H(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function K(T,y){let k=n.get(T);if(T.isVideoTexture&&Mt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,T,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function G(T,y){let k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function tt(T,y){let k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function W(T,y){let k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let rt={[Ho]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},lt={[_n]:i.NEAREST,[ld]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},ct={[dd]:i.NEVER,[xd]:i.ALWAYS,[fd]:i.LESS,[iu]:i.LEQUAL,[pd]:i.EQUAL,[_d]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function Dt(T,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Ja||y.magFilter===or||y.magFilter===bi||y.minFilter===nn||y.minFilter===Ja||y.minFilter===or||y.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,rt[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==or&&y.minFilter!==bi||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",E));let J=y.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let $=H(y);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[$].usedTimes++;let At=Q[T.__cacheKey];At!==void 0&&(Q[T.__cacheKey].usedTimes--,At.usedTimes===0&&v(y)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return k}function Y(T,y,k){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let Q=Wt(T,y),$=y.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+k);let At=n.get($);if($.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);let ut=Zt.getPrimaries(Zt.workingColorSpace),gt=y.colorSpace===ri?null:Zt.getPrimaries(y.colorSpace),Yt=y.colorSpace===ri||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=_(y.image,!1,s.maxTextureSize);nt=Qt(y,nt);let xt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),Ut=S(y.internalFormat,xt,Lt,y.colorSpace,y.isVideoTexture);Dt(J,y);let vt,qt=y.mipmaps,kt=y.isVideoTexture!==!0,ae=At.__version===void 0||Q===!0,U=$.dataReady,ht=L(y,nt);if(y.isDepthTexture)Ut=M(y.format===cs,y.type),ae&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ut,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,nt.width,nt.height,0,xt,Lt,null));else if(y.isDataTexture)if(qt.length>0){kt&&ae&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)vt=qt[q],kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Lt,vt.data);y.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,xt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,nt.width,nt.height,0,xt,Lt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,qt[0].width,qt[0].height,nt.depth);for(let q=0,j=qt.length;q<j;q++)if(vt=qt[q],y.format!==gn)if(xt!==null)if(kt){if(U)if(y.layerUpdates.size>0){let pt=Ch(vt.width,vt.height,y.format,y.type);for(let dt of y.layerUpdates){let Ot=vt.data.subarray(dt*pt/vt.data.BYTES_PER_ELEMENT,(dt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,vt.width,vt.height,1,xt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,xt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,xt,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,nt.depth,0,xt,Lt,vt.data)}else{kt&&ae&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)vt=qt[q],y.format!==gn?xt!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Lt,vt.data)}else if(y.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,nt.width,nt.height,nt.depth),U)if(y.layerUpdates.size>0){let q=Ch(nt.width,nt.height,y.format,y.type);for(let j of y.layerUpdates){let pt=nt.data.subarray(j*q/nt.data.BYTES_PER_ELEMENT,(j+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,xt,Lt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,nt.width,nt.height,nt.depth,0,xt,Lt,nt.data);else if(y.isData3DTexture)kt?(ae&&e.texStorage3D(i.TEXTURE_3D,ht,Ut,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,nt.width,nt.height,nt.depth,0,xt,Lt,nt.data);else if(y.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height);else{let q=nt.width,j=nt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ut,q,j,0,xt,Lt,null),q>>=1,j>>=1}}else if(qt.length>0){if(kt&&ae){let q=It(qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ut,q.width,q.height)}for(let q=0,j=qt.length;q<j;q++)vt=qt[q],kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt,Lt,vt):e.texImage2D(i.TEXTURE_2D,q,Ut,xt,Lt,vt);y.generateMipmaps=!1}else if(kt){if(ae){let q=It(nt);e.texStorage2D(i.TEXTURE_2D,ht,Ut,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,xt,Lt,nt);m(y)&&p(J),At.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k){if(y.image.length!==6)return;let J=Wt(T,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let $=n.get(Q);if(Q.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+k);let At=Zt.getPrimaries(Zt.workingColorSpace),ut=y.colorSpace===ri?null:Zt.getPrimaries(y.colorSpace),gt=y.colorSpace===ri||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Yt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Yt&&!nt?xt[j]=_(y.image[j],!0,s.maxCubemapSize):xt[j]=nt?y.image[j].image:y.image[j],xt[j]=Qt(y,xt[j]);let Lt=xt[0],Ut=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),qt=S(y.internalFormat,Ut,vt,y.colorSpace),kt=y.isVideoTexture!==!0,ae=$.__version===void 0||J===!0,U=Q.dataReady,ht=L(y,Lt);Dt(i.TEXTURE_CUBE_MAP,y);let q;if(Yt){kt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,Lt.width,Lt.height);for(let j=0;j<6;j++){q=xt[j].mipmaps;for(let pt=0;pt<q.length;pt++){let dt=q[pt];y.format!==gn?Ut!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Ut,vt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,Ut,vt,dt.data)}}}else{if(q=y.mipmaps,kt&&ae){q.length>0&&ht++;let j=It(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ut,vt,xt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,xt[j].width,xt[j].height,0,Ut,vt,xt[j].data);for(let pt=0;pt<q.length;pt++){let Ot=q[pt].image[j].image;kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ot.width,Ot.height,Ut,vt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Ot.width,Ot.height,0,Ut,vt,Ot.data)}}else{kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,vt,xt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Ut,vt,xt[j]);for(let pt=0;pt<q.length;pt++){let dt=q[pt];kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ut,vt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Ut,vt,dt.image[j])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function yt(T,y,k,J,Q,$){let At=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),gt=S(k.internalFormat,At,ut,k.colorSpace),Yt=n.get(y),nt=n.get(k);if(nt.__renderTarget=y,!Yt.__hasExternalTextures){let xt=Math.max(1,y.width>>$),Lt=Math.max(1,y.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,gt,xt,Lt,y.depth,0,At,ut,null):e.texImage2D(Q,$,gt,xt,Lt,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,nt.__webglTexture,0,Gt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,nt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=M(y.stencilBuffer,Q),At=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Gt(y);_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{let J=y.textures;for(let Q=0;Q<J.length;Q++){let $=J[Q],At=r.convert($.format,$.colorSpace),ut=r.convert($.type),gt=S($.internalFormat,At,ut,$.colorSpace),Yt=Gt(y);k&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,gt,y.width,y.height):_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let Q=J.__webglTexture,$=Gt(y);if(y.depthTexture.format===es)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===cs)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ot(T){let y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ct(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),at(y.__webglDepthbuffer[J],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),at(y.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(T,y,k){let J=n.get(T);y!==void 0&&yt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ot(T)}function mt(T){let y=T.texture,k=n.get(T),J=n.get(y);T.addEventListener("dispose",A);let Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else k.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)k.__webglFramebuffer[ut]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,gt=Q.length;ut<gt;ut++){let Yt=n.get(Q[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){let gt=Q[ut];k.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);let Yt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),xt=S(gt.internalFormat,Yt,nt,gt.colorSpace,T.isXRRenderTarget===!0),Lt=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),at(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)yt(k.__webglFramebuffer[ut][gt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else yt(k.__webglFramebuffer[ut],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,gt=Q.length;ut<gt;ut++){let Yt=Q[ut],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Dt(i.TEXTURE_2D,Yt),yt(k.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Dt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)yt(k.__webglFramebuffer[gt],T,y,i.COLOR_ATTACHMENT0,ut,gt);else yt(k.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}T.depthBuffer&&ot(T)}function Pt(T){let y=T.textures;for(let k=0,J=y.length;k<J;k++){let Q=y[k];if(m(Q)){let $=w(T),At=n.get(Q).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}let Ht=[],D=[];function he(T){if(T.samples>0){if(_t(T)===!1){let y=T.textures,k=T.width,J=T.height,Q=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),ut=y.length>1;if(ut)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Yt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,Q,i.NEAREST),l===!0&&(Ht.length=0,D.length=0,Ht.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Yt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(T){let y=a.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Qt(T,y){let k=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==fs&&k!==ri&&(Zt.getTransfer(k)===ne?(J!==gn||Q!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function It(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=X,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=_t}function w0(i,t){function e(n,s=ri){let r,a=Zt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Hs)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Kh)return i.RGB;if(n===gn)return i.RGBA;if(n===Jh)return i.LUMINANCE;if(n===jh)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Qh)return i.RED;if(n===Kl)return i.RED_INTEGER;if(n===tu)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Vr||n===Hr||n===Gr||n===Wr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===$o)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===ul||n===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===fl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Il=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wn=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},T0={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:A0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,f=null,d=null,g=null,_=new Ll,m=e.getContextAttributes(),p=null,w=null,S=[],M=[],L=new Tt,E=null,A=new ke;A.viewport=new ie;let P=new ke;P.viewport=new ie;let v=[A,P],x=new Il,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new Ls,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new Ls,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new Ls,S[Y]=et),et.getHandSpace()};function F(Y){let et=M.indexOf(Y.inputSource);if(et===-1)return;let yt=S[et];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,h||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){let et=M[Y];et!==null&&(M[Y]=null,S[Y].disconnect(et))}C=null,B=null,_.reset(),t.setRenderTarget(p),d=null,f=null,c=null,s=null,w=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new $n(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,yt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?cs:es,yt=m.stencil?ls:Ei);let Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};c=new XRWebGLBinding(s,e),f=c.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new $n(f.textureWidth,f.textureHeight,{format:gn,type:Yn,depthTexture:new sa(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){let yt=Y.removed[et],at=M.indexOf(yt);at>=0&&(M[at]=null,S[at].disconnect(yt))}for(let et=0;et<Y.added.length;et++){let yt=Y.added[et],at=M.indexOf(yt);if(at===-1){for(let ot=0;ot<S.length;ot++)if(ot>=M.length){M.push(yt),at=ot;break}else if(M[ot]===null){M[ot]=yt,at=ot;break}if(at===-1)break}let Ct=S[at];Ct&&Ct.connect(yt)}}let G=new I,tt=new I;function W(Y,et,yt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let at=G.distanceTo(tt),Ct=et.projectionMatrix.elements,ot=yt.projectionMatrix.elements,X=Ct[14]/(Ct[10]-1),mt=Ct[14]/(Ct[10]+1),Pt=(Ct[9]+1)/Ct[5],Ht=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],he=(ot[8]+1)/ot[0],Gt=X*D,_t=X*he,Mt=at/(-D+he),Qt=Mt*-D;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Qt),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let It=X+Mt,T=mt+Mt,y=Gt-Qt,k=_t+(at-Qt),J=Pt*mt/T*It,Q=Ht*mt/T*It;Y.projectionMatrix.makePerspective(y,k,J,Q,It,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,yt=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=P.near=A.near=et,x.far=P.far=A.far=yt,(C!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,B=x.far),A.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;let at=Y.parent,Ct=x.cameras;rt(x,at);for(let ot=0;ot<Ct.length;ot++)rt(Ct[ot],at);Ct.length===2?W(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),lt(Y,x,at)};function lt(Y,et,yt){yt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ct=null;function Dt(Y,et){if(u=et.getViewerPose(h||a),g=et,u!==null){let yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let at=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let ot=0;ot<yt.length;ot++){let X=yt[ot],mt=null;if(d!==null)mt=d.getViewport(X);else{let Ht=c.getViewSubImage(f,X);mt=Ht.viewport,ot===0&&(t.setRenderTargetTextures(w,Ht.colorTexture,f.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(w))}let Pt=v[ot];Pt===void 0&&(Pt=new ke,Pt.layers.enable(ot),Pt.viewport=new ie,v[ot]=Pt),Pt.matrix.fromArray(X.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(X.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(mt.x,mt.y,mt.width,mt.height),ot===0&&(x.matrix.copy(Pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Pt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let ot=c.getDepthInformation(yt[0]);ot&&ot.isValid&&ot.texture&&_.init(t,ot,s.renderState)}}for(let yt=0;yt<S.length;yt++){let at=M[yt],Ct=S[yt];at!==null&&Ct!==void 0&&Ct.update(at,et,h||a)}ct&&ct(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Wt=new ou;Wt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}},xi=new wn,C0=new ce;function P0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,au(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),S=w.envMap,M=w.envMapRotation;S&&(m.envMap.value=S,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(xi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let M=S.program;n.uniformBlockBinding(w,M)}function h(w,S){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(w,L);let E=t.render.frame;r[w.id]!==E&&(f(w),r[w.id]=E)}function u(w){let S=c();w.__bindingPointIndex=S;let M=i.createBuffer(),L=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function c(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=s[w.id],M=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,A=M.length;E<A;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,x=P.length;v<x;v++){let C=P[v];if(d(C,E,v,L)===!0){let B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],H=0;for(let K=0;K<F.length;K++){let G=F[K],tt=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+H,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,S,M,L){let E=w.value,A=S+"_"+M;if(L[A]===void 0)return typeof E=="number"||typeof E=="boolean"?L[A]=E:L[A]=E.clone(),!0;{let P=L[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return L[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(w){let S=w.uniforms,M=0,L=16;for(let A=0,P=S.length;A<P;A++){let v=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,C=v.length;x<C;x++){let B=v[x],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,K=F.length;H<K;H++){let G=F[H],tt=_(G),W=M%L,rt=W%tt.boundary,lt=W+rt;M+=rt,lt!==0&&L-lt<tt.storage&&(M+=L-lt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=tt.storage}}}let E=M%L;return E>0&&(M+=L-E),w.__size=M,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:h,dispose:p}}var ra=class{constructor(t={}){let{canvas:e=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=oi,this.toneMappingExposure=1;let M=this,L=!1,E=0,A=0,P=null,v=-1,x=null,C=new ie,B=new ie,F=null,H=new Vt(0),K=0,G=e.width,tt=e.height,W=1,rt=null,lt=null,ct=new ie(0,0,G,tt),Dt=new ie(0,0,G,tt),Wt=!1,Y=new Ns,et=!1,yt=!1,at=new ce,Ct=new ce,ot=new I,X=new ie,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Ht(){return P===null?W:1}let D=n;function he(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let N="webgl2";if(D=he(N,b),D===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,_t,Mt,Qt,It,T,y,k,J,Q,$,At,ut,gt,Yt,nt,xt,Lt,Ut,vt,qt,kt,ae,U;function ht(){Gt=new Ym(D),Gt.init(),kt=new w0(D,Gt),_t=new Vm(D,Gt,t,kt),Mt=new S0(D,Gt),_t.reverseDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),Qt=new Km(D),It=new c0,T=new E0(D,Gt,Mt,It,_t,kt,Qt),y=new Gm(M),k=new qm(M),J=new nf(D),ae=new km(D,J),Q=new Zm(D,J,Qt,ae),$=new jm(D,Q,J,Qt),Ut=new Jm(D,_t,T),nt=new Hm(It),At=new l0(M,y,k,Gt,_t,ae,nt),ut=new P0(M,It),gt=new u0,Yt=new _0(Gt),Lt=new Bm(M,y,k,Mt,$,d,l),xt=new y0(M,$,_t),U=new I0(D,Qt,_t,Mt),vt=new zm(D,Gt,Qt),qt=new $m(D,Gt,Qt),Qt.programs=At.programs,M.capabilities=_t,M.extensions=Gt,M.properties=It,M.renderLists=gt,M.shadowMap=xt,M.state=Mt,M.info=Qt}ht();let q=new Dl(M,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(G,tt,!1))},this.getSize=function(b){return b.set(G,tt)},this.setSize=function(b,N,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,tt=N,e.width=Math.floor(b*W),e.height=Math.floor(N*W),z===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(G*W,tt*W).floor()},this.setDrawingBufferSize=function(b,N,z){G=b,tt=N,W=z,e.width=Math.floor(b*z),e.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ct)},this.setViewport=function(b,N,z,V){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,N,z,V),Mt.viewport(C.copy(ct).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,N,z,V){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,N,z,V),Mt.scissor(B.copy(Dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){Mt.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,N=!0,z=!0){let V=0;if(b){let O=!1;if(P!==null){let it=P.texture.format;O=it===jl||it===Jl||it===Kl}if(O){let it=P.texture.type,ft=it===Yn||it===Ei||it===Ds||it===ls||it===Zl||it===$l,St=Lt.getClearColor(),bt=Lt.getClearAlpha(),Nt=St.r,Ft=St.g,Et=St.b;ft?(g[0]=Nt,g[1]=Ft,g[2]=Et,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Nt,_[1]=Ft,_[2]=Et,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Yt.dispose(),It.dispose(),y.dispose(),k.dispose(),$.dispose(),ae.dispose(),U.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",cc),q.removeEventListener("sessionend",hc),ui.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=Qt.autoReset,N=xt.enabled,z=xt.autoUpdate,V=xt.needsUpdate,O=xt.type;ht(),Qt.autoReset=b,xt.enabled=N,xt.autoUpdate=z,xt.needsUpdate=V,xt.type=O}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){let N=b.target;N.removeEventListener("dispose",Ot),_e(N)}function _e(b){Ie(b),It.remove(b)}function Ie(b){let N=It.get(b).programs;N!==void 0&&(N.forEach(function(z){At.releaseProgram(z)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,V,O,it){N===null&&(N=mt);let ft=O.isMesh&&O.matrixWorld.determinant()<0,St=Au(b,N,z,V,O);Mt.setMaterial(V,ft);let bt=z.index,Nt=1;if(V.wireframe===!0){if(bt=Q.getWireframeAttribute(z),bt===void 0)return;Nt=2}let Ft=z.drawRange,Et=z.attributes.position,$t=Ft.start*Nt,oe=(Ft.start+Ft.count)*Nt;it!==null&&($t=Math.max($t,it.start*Nt),oe=Math.min(oe,(it.start+it.count)*Nt)),bt!==null?($t=Math.max($t,0),oe=Math.min(oe,bt.count)):Et!=null&&($t=Math.max($t,0),oe=Math.min(oe,Et.count));let ue=oe-$t;if(ue<0||ue===1/0)return;ae.setup(O,V,St,z,bt);let He,Kt=vt;if(bt!==null&&(He=J.get(bt),Kt=qt,Kt.setIndex(He)),O.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*Ht()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(O.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),Mt.setLineWidth(Rt*Ht()),O.isLineSegments?Kt.setMode(D.LINES):O.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else O.isPoints?Kt.setMode(D.POINTS):O.isSprite&&Kt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Rt=O._multiDrawStarts,In=O._multiDrawCounts,Jt=O._multiDrawCount,hn=bt?J.get(bt).bytesPerElement:1,Di=It.get(V).currentProgram.getUniforms();for(let We=0;We<Jt;We++)Di.setValue(D,"_gl_DrawID",We),Kt.render(Rt[We]/hn,In[We])}else if(O.isInstancedMesh)Kt.renderInstances($t,ue,O.count);else if(z.isInstancedBufferGeometry){let Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,In=Math.min(z.instanceCount,Rt);Kt.renderInstances($t,ue,In)}else Kt.render($t,ue)};function te(b,N,z){b.transparent===!0&&b.side===en&&b.forceSinglePass===!1?(b.side=Ue,b.needsUpdate=!0,Xs(b,N,z),b.side=li,b.needsUpdate=!0,Xs(b,N,z),b.side=en):Xs(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),p=Yt.get(z),p.init(N),S.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==z&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let V=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let St=it[ft];te(St,z,O),V.add(St)}else te(it,z,O),V.add(it)}),S.pop(),p=null,V},this.compileAsync=function(b,N,z=null){let V=this.compile(b,N,z);return new Promise(O=>{function it(){if(V.forEach(function(ft){It.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){O(b);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let cn=null;function Pn(b){cn&&cn(b)}function cc(){ui.stop()}function hc(){ui.start()}let ui=new ou;ui.setAnimationLoop(Pn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(b){cn=b,q.setAnimationLoop(b),b===null?ui.stop():ui.start()},q.addEventListener("sessionstart",cc),q.addEventListener("sessionend",hc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,N,P),p=Yt.get(b,S.length),p.init(N),S.push(p),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,yt),m=gt.get(b,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){let it=M.xr.getDepthSensingMesh();it!==null&&Va(it,N,-1/0,M.sortObjects)}Va(b,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,lt),Pt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Pt&&Lt.addToRenderList(m,b),this.info.render.frame++,et===!0&&nt.beginShadows();let z=p.state.shadowsArray;xt.render(z,b,N),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let it=N.cameras;if(O.length>0)for(let ft=0,St=it.length;ft<St;ft++){let bt=it[ft];dc(V,O,b,bt)}Pt&&Lt.render(b);for(let ft=0,St=it.length;ft<St;ft++){let bt=it[ft];uc(m,b,bt,bt.viewport)}}else O.length>0&&dc(V,O,b,N),Pt&&Lt.render(b),uc(m,b,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(M,b,N),ae.resetDefaultState(),v=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],et===!0&&nt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Va(b,N,z,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){V&&X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);let ft=$.update(b),St=b.material;St.visible&&m.push(b,ft,St,z,X.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let ft=$.update(b),St=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),X.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),X.copy(ft.boundingSphere.center)),X.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){let bt=ft.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){let Et=bt[Nt],$t=St[Et.materialIndex];$t&&$t.visible&&m.push(b,ft,$t,z,X.z,Et)}}else St.visible&&m.push(b,ft,St,z,X.z,null)}}let it=b.children;for(let ft=0,St=it.length;ft<St;ft++)Va(it[ft],N,z,V)}function uc(b,N,z,V){let O=b.opaque,it=b.transmissive,ft=b.transparent;p.setupLightsView(z),et===!0&&nt.setGlobalState(M.clippingPlanes,z),V&&Mt.viewport(C.copy(V)),O.length>0&&Ws(O,N,z),it.length>0&&Ws(it,N,z),ft.length>0&&Ws(ft,N,z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function dc(b,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $n(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Hs:Yn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let it=p.state.transmissionRenderTarget[V.id],ft=V.viewport||C;it.setSize(ft.z,ft.w);let St=M.getRenderTarget();M.setRenderTarget(it),M.getClearColor(H),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Pt&&Lt.render(z);let bt=M.toneMapping;M.toneMapping=oi;let Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&nt.setGlobalState(M.clippingPlanes,V),Ws(b,z,V),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Et=0,$t=N.length;Et<$t;Et++){let oe=N[Et],ue=oe.object,He=oe.geometry,Kt=oe.material,Rt=oe.group;if(Kt.side===en&&ue.layers.test(V.layers)){let In=Kt.side;Kt.side=Ue,Kt.needsUpdate=!0,fc(ue,z,V,He,Kt,Rt),Kt.side=In,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}M.setRenderTarget(St),M.setClearColor(H,K),Nt!==void 0&&(V.viewport=Nt),M.toneMapping=bt}function Ws(b,N,z){let V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,it=b.length;O<it;O++){let ft=b[O],St=ft.object,bt=ft.geometry,Nt=V===null?ft.material:V,Ft=ft.group;St.layers.test(z.layers)&&fc(St,N,z,bt,Nt,Ft)}}function fc(b,N,z,V,O,it){b.onBeforeRender(M,N,z,V,O,it),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(M,N,z,V,b,it),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=Ue,O.needsUpdate=!0,M.renderBufferDirect(z,N,V,O,b,it),O.side=li,O.needsUpdate=!0,M.renderBufferDirect(z,N,V,O,b,it),O.side=en):M.renderBufferDirect(z,N,V,O,b,it),b.onAfterRender(M,N,z,V,O,it)}function Xs(b,N,z){N.isScene!==!0&&(N=mt);let V=It.get(b),O=p.state.lights,it=p.state.shadowsArray,ft=O.state.version,St=At.getParameters(b,O.state,it,N,z),bt=At.getProgramCacheKey(St),Nt=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Ot),Nt=new Map,V.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ft)return mc(b,St),Ft}else St.uniforms=At.getUniforms(b),b.onBeforeCompile(St,M),Ft=At.acquireProgram(St,bt),Nt.set(bt,Ft),V.uniforms=St.uniforms;let Et=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Et.clippingPlanes=nt.uniform),mc(b,St),V.needsLights=Cu(b),V.lightsStateVersion=ft,V.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function pc(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function mc(b,N){let z=It.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Au(b,N,z,V,O){N.isScene!==!0&&(N=mt),T.resetTextureUnits();let it=N.fog,ft=V.isMeshStandardMaterial?N.environment:null,St=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fs,bt=(V.isMeshStandardMaterial?k:y).get(V.envMap||ft),Nt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,oe=!!z.morphAttributes.color,ue=oi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=M.toneMapping);let He=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=He!==void 0?He.length:0,Rt=It.get(V),In=p.state.lights;if(et===!0&&(yt===!0||b!==x)){let Je=b===x&&V.id===v;nt.setState(V,b,Je)}let Jt=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==In.state.version||Rt.outputColorSpace!==St||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==bt||V.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Ft||Rt.morphTargets!==Et||Rt.morphNormals!==$t||Rt.morphColors!==oe||Rt.toneMapping!==ue||Rt.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,Rt.__version=V.version);let hn=Rt.currentProgram;Jt===!0&&(hn=Xs(V,N,O));let Di=!1,We=!1,_s=!1,de=hn.getUniforms(),Sn=Rt.uniforms;if(Mt.useProgram(hn.program)&&(Di=!0,We=!0,_s=!0),V.id!==v&&(v=V.id,We=!0),Di||x!==b){Mt.buffers.depth.getReversed()?(at.copy(b.projectionMatrix),Fd(at),Bd(at),de.setValue(D,"projectionMatrix",at)):de.setValue(D,"projectionMatrix",b.projectionMatrix),de.setValue(D,"viewMatrix",b.matrixWorldInverse);let Kn=de.map.cameraPosition;Kn!==void 0&&Kn.setValue(D,ot.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&de.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,We=!0,_s=!0)}if(O.isSkinnedMesh){de.setOptional(D,O,"bindMatrix"),de.setOptional(D,O,"bindMatrixInverse");let Je=O.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),de.setValue(D,"boneTexture",Je.boneTexture,T))}O.isBatchedMesh&&(de.setOptional(D,O,"batchingTexture"),de.setValue(D,"batchingTexture",O._matricesTexture,T),de.setOptional(D,O,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",O._indirectTexture,T),de.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",O._colorsTexture,T));let xs=z.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Ut.update(O,z,hn),(We||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,de.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Sn.envMap.value=bt,Sn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),We&&(de.setValue(D,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&Ru(Sn,_s),it&&V.fog===!0&&ut.refreshFogUniforms(Sn,it),ut.refreshMaterialUniforms(Sn,V,W,tt,p.state.transmissionRenderTarget[b.id]),ss.upload(D,pc(Rt),Sn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ss.upload(D,pc(Rt),Sn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&de.setValue(D,"center",O.center),de.setValue(D,"modelViewMatrix",O.modelViewMatrix),de.setValue(D,"normalMatrix",O.normalMatrix),de.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Je=V.uniformsGroups;for(let Kn=0,Jn=Je.length;Kn<Jn;Kn++){let gc=Je[Kn];U.update(gc,hn),U.bind(gc,hn)}}return hn}function Ru(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Cu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,N,z){It.get(b.texture).__webglTexture=N,It.get(b.depthTexture).__webglTexture=z;let V=It.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let z=It.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,z=0){P=b,E=N,A=z;let V=!0,O=null,it=!1,ft=!1;if(b){let bt=It.get(b);if(bt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(bt.__hasExternalTextures)T.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Et=b.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(b.width!==Et.image.width||b.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);let Ft=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][z]:O=Ft[N],it=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?O=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[z]:O=Ft,C.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else C.copy(ct).multiplyScalar(W).floor(),B.copy(Dt).multiplyScalar(W).floor(),F=Wt;if(Mt.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&Mt.drawBuffers(b,O),Mt.viewport(C),Mt.scissor(B),Mt.setScissorTest(F),it){let bt=It.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,z)}else if(ft){let bt=It.get(b.texture),Nt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,z||0,Nt)}v=-1},this.readRenderTargetPixels=function(b,N,z,V,O,it,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){Mt.bindFramebuffer(D.FRAMEBUFFER,St);try{let bt=b.texture,Nt=bt.format,Ft=bt.type;if(!_t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&z>=0&&z<=b.height-O&&D.readPixels(N,z,V,O,kt.convert(Nt),kt.convert(Ft),it)}finally{let bt=P!==null?It.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,N,z,V,O,it,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){let bt=b.texture,Nt=bt.format,Ft=bt.type;if(!_t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-V&&z>=0&&z<=b.height-O){Mt.bindFramebuffer(D.FRAMEBUFFER,St);let Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(N,z,V,O,kt.convert(Nt),kt.convert(Ft),0);let $t=P!==null?It.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,$t);let oe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Od(D,oe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Et),D.deleteSync(oe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,z=0){b.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let V=Math.pow(2,-z),O=Math.floor(b.image.width*V),it=Math.floor(b.image.height*V),ft=N!==null?N.x:0,St=N!==null?N.y:0;T.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ft,St,O,it),Mt.unbindTexture()},this.copyTextureToTexture=function(b,N,z=null,V=null,O=0){b.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],N=arguments[2],O=arguments[3]||0,z=null);let it,ft,St,bt,Nt,Ft,Et,$t,oe,ue=b.isCompressedTexture?b.mipmaps[O]:b.image;z!==null?(it=z.max.x-z.min.x,ft=z.max.y-z.min.y,St=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Nt=z.min.y,Ft=z.isBox3?z.min.z:0):(it=ue.width,ft=ue.height,St=ue.depth||1,bt=0,Nt=0,Ft=0),V!==null?(Et=V.x,$t=V.y,oe=V.z):(Et=0,$t=0,oe=0);let He=kt.convert(N.format),Kt=kt.convert(N.type),Rt;N.isData3DTexture?(T.setTexture3D(N,0),Rt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let In=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Di=D.getParameter(D.UNPACK_SKIP_ROWS),We=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);let _s=b.isDataArrayTexture||b.isData3DTexture,de=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Sn=It.get(b),xs=It.get(N),Je=It.get(Sn.__renderTarget),Kn=It.get(xs.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Je.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<St;Jn++)_s&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(b).__webglTexture,O,Ft+Jn),b.isDepthTexture?(de&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(N).__webglTexture,O,oe+Jn),D.blitFramebuffer(bt,Nt,it,ft,Et,$t,it,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):de?D.copyTexSubImage3D(Rt,O,Et,$t,oe+Jn,bt,Nt,it,ft):D.copyTexSubImage2D(Rt,O,Et,$t,oe+Jn,bt,Nt,it,ft);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Rt,O,Et,$t,oe,it,ft,St,He,Kt,ue.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,O,Et,$t,oe,it,ft,St,He,ue.data):D.texSubImage3D(Rt,O,Et,$t,oe,it,ft,St,He,Kt,ue):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Et,$t,it,ft,He,Kt,ue.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Et,$t,ue.width,ue.height,He,ue.data):D.texSubImage2D(D.TEXTURE_2D,O,Et,$t,it,ft,He,Kt,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,In),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Di),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We),O===0&&N.generateMipmaps&&D.generateMipmap(Rt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z=null,V=null,O=0){return b.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,b=arguments[2],N=arguments[3],O=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,z,V,O)},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,Mt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var aa=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},oa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fe=new I,ln=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=class extends Tn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$i,ws=new I,Ki=new I,Ji=new I,ji=new Tt,Ts=new Tt,du=new ce,Rr=new I,As=new I,Cr=new I,Ph=new Tt,To=new Tt,Ih=new Tt,la=class extends Ae{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oa(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new ln(n,3,0,!1)),$i.setAttribute("uv",new ln(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pr(Rr.set(-.5,-.5,0),Ji,a,Ki,s,r),Pr(As.set(.5,-.5,0),Ji,a,Ki,s,r),Pr(Cr.set(.5,.5,0),Ji,a,Ki,s,r),Ph.set(0,0),To.set(1,0),Ih.set(1,1);let o=t.ray.intersectTriangle(Rr,As,Cr,!1,ws);if(o===null&&(Pr(As.set(-.5,.5,0),Ji,a,Ki,s,r),To.set(0,1),o=t.ray.intersectTriangle(Rr,Cr,As,!1,ws),o===null))return;let l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:Vn.getInterpolation(ws,Rr,As,Cr,Ph,To,Ih,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pr(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*ji.x-s*ji.y,Ts.y=s*ji.x+r*ji.y):Ts.copy(ji),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(du)}var yn=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ca=new I,ha=new I,Lh=new ce,Rs=new wi,Ir=new vn,Ao=new I,Dh=new I,us=class extends Ae{constructor(t=new me,e=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ca.fromBufferAttribute(e,s-1),ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ca.distanceTo(ha);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Lh.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(Lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=h){let p=u.getX(_),w=u.getX(_+1),S=Lr(this,t,Rs,l,p,w);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),p=Lr(this,t,Rs,l,_,m);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=h){let p=Lr(this,t,Rs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Lr(this,t,Rs,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(ca.fromBufferAttribute(a,s),ha.fromBufferAttribute(a,r),e.distanceSqToSegment(ca,ha,Ao,Dh)>n)return;Ao.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:Dh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Uh=new I,Nh=new I,ci=class extends us{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Uh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uh.distanceTo(Nh);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fs=class extends Tn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oh=new ce,Ul=new wi,Dr=new vn,Ur=new I,ua=class extends Ae{constructor(t=new me,e=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Oh.copy(s).invert(),Ul.copy(t.ray).applyMatrix4(Oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let m=h.getX(g);Ur.fromBufferAttribute(c,m),Fh(Ur,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ur.fromBufferAttribute(c,g),Fh(Ur,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fh(i,t,e,n,s,r,a){let o=Ul.distanceSqToPoint(i);if(o<e){let l=new I;Ul.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var da=class extends Ke{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fa=class i extends me{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],u=1/e,c=new I,f=new Tt,d=new I,g=new I,_=new I,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let w=0;w<=e;w++){let S=n+w*u*s,M=Math.sin(S),L=Math.cos(S);for(let E=0;E<=t.length-1;E++){c.x=t[E].x*M,c.y=t[E].y,c.z=t[E].x*L,a.push(c.x,c.y,c.z),f.x=w/e,f.y=E/(t.length-1),o.push(f.x,f.y);let A=l[3*E+0]*M,P=l[3*E+1],v=l[3*E+0]*L;h.push(A,P,v)}}for(let w=0;w<e;w++)for(let S=0;S<t.length-1;S++){let M=S+w*t.length,L=M,E=M+t.length,A=M+t.length+1,P=M+1;r.push(L,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var pa=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],g=0,_=[],m=n/2,p=0;w(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function w(){let M=new I,L=new I,E=0,A=(e-t)/n;for(let P=0;P<=r;P++){let v=[],x=P/r,C=x*(e-t)+t;for(let B=0;B<=s;B++){let F=B/s,H=F*l+o,K=Math.sin(H),G=Math.cos(H);L.x=C*K,L.y=-x*n+m,L.z=C*G,c.push(L.x,L.y,L.z),M.set(K,A,G).normalize(),f.push(M.x,M.y,M.z),d.push(F,1-x),v.push(g++)}_.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){let x=_[v][P],C=_[v+1][P],B=_[v+1][P+1],F=_[v][P+1];(t>0||v!==0)&&(u.push(x,C,F),E+=3),(e>0||v!==r-1)&&(u.push(C,B,F),E+=3)}h.addGroup(p,E,0),p+=E}function S(M){let L=g,E=new Tt,A=new I,P=0,v=M===!0?t:e,x=M===!0?1:-1;for(let B=1;B<=s;B++)c.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;let C=g;for(let B=0;B<=s;B++){let H=B/s*l+o,K=Math.cos(H),G=Math.sin(H);A.x=v*G,A.y=m*x,A.z=v*K,c.push(A.x,A.y,A.z),f.push(0,x,0),E.x=K*.5+.5,E.y=G*.5*x+.5,d.push(E.x,E.y),g++}for(let B=0;B<s;B++){let F=L+B,H=C+B;M===!0?u.push(H,H+1,F):u.push(H+1,H,F),P+=3}h.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ma=class i extends pa{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nr=new I,Or=new I,Ro=new I,Fr=new Vn,Bs=class extends me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ns*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],u=["a","b","c"],c=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){a?(h[0]=a.getX(g),h[1]=a.getX(g+1),h[2]=a.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:_,b:m,c:p}=Fr;if(_.fromBufferAttribute(o,h[0]),m.fromBufferAttribute(o,h[1]),p.fromBufferAttribute(o,h[2]),Fr.getNormal(Ro),c[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let w=0;w<3;w++){let S=(w+1)%3,M=c[w],L=c[S],E=Fr[u[w]],A=Fr[u[S]],P=`${M}_${L}`,v=`${L}_${M}`;v in f&&f[v]?(Ro.dot(f[v].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[v]=null):P in f||(f[P]={index0:h[w],index1:h[S],normal:Ro.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];Nr.fromBufferAttribute(o,_),Or.fromBufferAttribute(o,m),d.push(Nr.x,Nr.y,Nr.z),d.push(Or.x,Or.y,Or.z)}this.setAttribute("position",new Xt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ks=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,u=[],c=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let w=[],S=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){let E=L/e;c.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),c.y=t*Math.cos(a+S*o),c.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),g.push(c.x,c.y,c.z),f.copy(c).normalize(),_.push(f.x,f.y,f.z),m.push(E+M,1-S),w.push(h++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let S=u[p][w+1],M=u[p][w],L=u[p+1][w],E=u[p+1][w+1];(p!==0||a>0)&&d.push(S,M,E),(p!==n-1||l<Math.PI)&&d.push(M,L,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ga=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],u=new I,c=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(_),c.y=(t+e*Math.cos(m))*Math.sin(_),c.z=e*Math.sin(m),o.push(c.x,c.y,c.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(c,u).normalize(),l.push(f.x,f.y,f.z),h.push(g/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _a=class extends me{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new I,r=new I;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=l.length;h<u;++h){let c=l[h],f=c.start,d=c.count;for(let g=f,_=f+d;g<_;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),w=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,w),Bh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let u=3*o+h,c=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,c),Bh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Xt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Bh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var zs=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Br(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function L0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,o=2*e-n;break;case Oc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=t,l=2*n-e;break;case Oc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+w*a[h+L]+S*a[l+L]+M*a[c+L];return r}},Ol=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*c+a[l+f]*u;return r}},Fl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&L0(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)l=!0;else{let c=o*n,f=c-n,d=c+n;for(let g=0;g!==n;++g){let _=e[c+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let c=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=gl;var Ai=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=qr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Mn{};Bl.prototype.ValueTypeName="color";var kl=class extends Mn{};kl.prototype.ValueTypeName="number";var zl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)xn.slerpFlat(r,0,a,h-o,a,h,l);return r}},xa=class extends Mn{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=qr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Mn{};Vl.prototype.ValueTypeName="vector";var Hl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],g=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},D0=new Hl,Gl=class{constructor(t){this.manager=t!==void 0?t:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var va=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Co=new ce,kh=new I,zh=new I,Wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Xl=class extends Wl{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ma=class extends va{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sa=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ec="\\[\\]\\.:\\/",U0=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",N0="[^"+ec.replace("\\.","")+"]",O0=/((?:WC+[\/:])*)/.source.replace("WC",nc),F0=/(WCOD+)?/.source.replace("WCOD",N0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),k0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),z0=new RegExp("^"+O0+F0+B0+k0+"$"),V0=["material","materials","bones","map"],ql=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(U0,"")}static parseTrackName(t){let e=z0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);V0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=ql;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var Ci=class extends oa{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Vs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vh=new I,kr=new I,ba=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vh.subVectors(t,this.start),kr.subVectors(this.end,this.start);let n=kr.dot(kr),r=kr.dot(Vh)/n;return e&&(r=Te(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Hh=new I,zr,Po,Ea=class extends Ae{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",zr===void 0&&(zr=new me,zr.setAttribute("position",new Xt([0,0,0,0,1,0],3)),Po=new pa(0,.5,1,5,1),Po.translate(0,-.5,0)),this.position.copy(e),this.line=new us(zr,new yn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new le(Po,new rn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Hh.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Hh,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var wa=class extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fu={type:"change"},sc={type:"start"},mu={type:"end"},Ia=new wi,pu=new pn,G0=Math.cos(70*Ra.DEG2RAD),Ee=new I,Ge=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ic=1e-6,La=class extends wa{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new xn,this._lastTargetPosition=new I,this._quat=new xn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vs,this._sphericalDelta=new Vs,this._scale=1,this._panOffset=new I,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new I,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X0.bind(this),this._onPointerDown=W0.bind(this),this._onPointerUp=q0.bind(this),this._onContextMenu=Q0.bind(this),this._onMouseWheel=$0.bind(this),this._onKeyDown=K0.bind(this),this._onTouchStart=J0.bind(this),this._onTouchMove=j0.bind(this),this._onMouseDown=Y0.bind(this),this._onMouseMove=Z0.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fu),this.update(),this.state=se.NONE}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),s<-Math.PI?s+=Ge:s>Math.PI&&(s-=Ge),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ee.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ia.origin.copy(this.object.position),Ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ia.direction))<G0?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ia.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ic||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ic||this._lastTargetPosition.distanceToSquared(this.target)>ic?(this.dispatchEvent(fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function W0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function X0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function q0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Y0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(sc)}function Z0(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $0(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(sc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mu))}function K0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function J0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(sc)}function j0(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function Q0(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gu=new sn,Da=new I,ms=class extends Sa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Xt(t,3)),this.setAttribute("uv",new Xt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ci(e,6,1);return this.setAttribute("instanceStart",new ln(n,3,0)),this.setAttribute("instanceEnd",new ln(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ci(e,6,1);return this.setAttribute("instanceColorStart",new ln(n,3,0)),this.setAttribute("instanceColorEnd",new ln(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new _a(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gu.setFromBufferAttribute(e),this.boundingBox.union(gu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Da.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Da)),Da.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Da));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ze.line={uniforms:Ca.merge([st.common,st.fog,st.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var hi=class extends on{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Ca.clone(ze.line.uniforms),vertexShader:ze.line.vertexShader,fragmentShader:ze.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var rc=new ie,_u=new I,xu=new I,Re=new ie,Ce=new ie,An=new ie,ac=new I,oc=new ce,Pe=new ba,vu=new I,Ua=new sn,Na=new vn,Rn=new ie,Cn,Li;function yu(i,t,e){return Rn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Rn.multiplyScalar(1/Rn.w),Rn.x=Li/e.width,Rn.y=Li/e.height,Rn.applyMatrix4(i.projectionMatrixInverse),Rn.multiplyScalar(1/Rn.w),Math.abs(Math.max(Rn.x,Rn.y))}function n_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Pe.start.fromBufferAttribute(s,o),Pe.end.fromBufferAttribute(r,o),Pe.applyMatrix4(e);let h=new I,u=new I;Cn.distanceSqToSegment(Pe.start,Pe.end,u,h),u.distanceTo(h)<Li*.5&&t.push({point:u,pointOnLine:h,distance:Cn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function i_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),c=-t.near;Cn.at(1,An),An.w=1,An.applyMatrix4(t.matrixWorldInverse),An.applyMatrix4(n),An.multiplyScalar(1/An.w),An.x*=r.x/2,An.y*=r.y/2,An.z=0,ac.copy(An),oc.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,d=u;f<d;f++){if(Re.fromBufferAttribute(l,f),Ce.fromBufferAttribute(h,f),Re.w=1,Ce.w=1,Re.applyMatrix4(oc),Ce.applyMatrix4(oc),Re.z>c&&Ce.z>c)continue;if(Re.z>c){let S=Re.z-Ce.z,M=(Re.z-c)/S;Re.lerp(Ce,M)}else if(Ce.z>c){let S=Ce.z-Re.z,M=(Ce.z-c)/S;Ce.lerp(Re,M)}Re.applyMatrix4(n),Ce.applyMatrix4(n),Re.multiplyScalar(1/Re.w),Ce.multiplyScalar(1/Ce.w),Re.x*=r.x/2,Re.y*=r.y/2,Ce.x*=r.x/2,Ce.y*=r.y/2,Pe.start.copy(Re),Pe.start.z=0,Pe.end.copy(Ce),Pe.end.z=0;let _=Pe.closestPointToPointParameter(ac,!0);Pe.at(_,vu);let m=Ra.lerp(Re.z,Ce.z,_),p=m>=-1&&m<=1,w=ac.distanceTo(vu)<Li*.5;if(p&&w){Pe.start.fromBufferAttribute(l,f),Pe.end.fromBufferAttribute(h,f),Pe.start.applyMatrix4(a),Pe.end.applyMatrix4(a);let S=new I,M=new I;Cn.distanceSqToSegment(Pe.start,Pe.end,M,S),e.push({point:M,pointOnLine:S,distance:Cn.origin.distanceTo(M),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var Oa=class extends le{constructor(t=new ms,e=new hi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)_u.fromBufferAttribute(e,a),xu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+_u.distanceTo(xu);let r=new Ci(s,2,1);return t.setAttribute("instanceDistanceStart",new ln(r,1,0)),t.setAttribute("instanceDistanceEnd",new ln(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Cn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Li=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Na.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=Li*.5;else{let c=Math.max(s.near,Na.distanceToPoint(Cn.origin));h=yu(s,c,l.resolution)}if(Na.radius+=h,Cn.intersectsSphere(Na)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ua.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Li*.5;else{let c=Math.max(s.near,Ua.distanceToPoint(Cn.origin));u=yu(s,c,l.resolution)}Ua.expandByScalar(u),Cn.intersectsBox(Ua)!==!1&&(n?n_(this,e):i_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(rc),this.material.uniforms.resolution.value.set(rc.z,rc.w))}};var gs=class extends ms{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Fa=class extends Oa{constructor(t=new gs,e=new hi({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Mu=Math.PI/180;function s_(i,t="#cfe0f2",e="rgba(8,18,26,.75)"){let n=document.createElement("canvas");n.width=256,n.height=64;let s=n.getContext("2d");s.font="bold 30px Helvetica, Arial, sans-serif";let r=Math.min(250,s.measureText(i).width+24);s.fillStyle=e,s.fillRect(128-r/2,8,r,48),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,33);let a=new da(n);a.minFilter=nn;let o=new la(new Os({map:a,depthTest:!1,transparent:!0}));return o.userData.aspect=4,o.renderOrder=10,o}var Su=i=>{let t=Math.pow(10,Math.floor(Math.log10(i/4))),e=i/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function r_(){let i=new Wn,t=.67,e=.026,n=new zs({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),s=new zs({color:"#e8eef5",roughness:.5,emissive:"#223347"}),r=[];for(let d=0;d<=24;d++){let g=d/24,_=e*Math.pow(Math.sin(Math.PI*Math.pow(g,.75)),.55)*(g>.7?1-(g-.7)*1.2*(g-.7)/.3*.5:1);r.push(new Tt(Math.max(_,.0015),(g-.5)*t))}let a=new le(new fa(r,20),n);a.rotation.x=-Math.PI/2,i.add(a);let o=new le(new an(.012,.05,.12),n);o.position.set(0,e+.02,-.04),i.add(o);let l=(d,g,_)=>{let m=new le(new an(.075,.003,.03),s);return m.position.set(d,0,g),m.rotation.z=_,m};i.add(l(0,.27,0));let h=l(0,.27,Math.PI/2);i.add(h);let u=new le(new an(.05,.003,.02),s);u.position.set(0,0,-.17),i.add(u);let c=new le(new ga(.014,.003,6,16),s);c.position.set(0,0,.345),i.add(c);let f=new le(new ks(.008,8,8),new rn({color:"#e0a93b"}));return f.position.set(0,0,-.34),i.add(f),i}var Ba=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new ra({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new aa,this.scene.fog=null,this.cam=new ke(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new La(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new Ma("#8fa6c0",1.1));let e=new ya("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new Wn,this.scene.add(this.world),this.boat=r_(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let n=new me;n.setAttribute("position",new Xt([0,0,0],3)),this.dot=new ua(n,new Fs({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new hi({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let s=()=>{requestAnimationFrame(s),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};s()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let n=(e.userData.size||.03)*t;e.scale.set(n*e.userData.aspect,n,1)})}sprite(t,e,n,s){let r=s_(t,s);return r.position.copy(e),r.userData.size=n,this.world.add(r),this.sprites.push(r),r}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new I(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let n=t.pts,s=t.stats;if(n.length<2){this.dirty=!0;return}let r=Math.max(1,.12*Math.max(s.w,s.l,s.maxDepth)),a=Math.min(s.bb.x0,-1)-r,o=Math.max(s.bb.x1,1)+r,l=Math.min(s.bb.y0,-1)-r,h=Math.max(s.bb.y1,1)+r,u=Math.max(e.depthLimit||0,s.maxDepth*1.2,1.2),c=(a+o)/2,f=-(l+h)/2,d=o-a,g=h-l;this.size=Math.max(d,g,u),this.cx=c,this.cz=f,this.dmax=u;let _=new le(new an(d,u,g),new rn({color:"#0f4a7a",transparent:!0,opacity:.1,side:Ue,depthWrite:!1}));_.position.set(c,-u/2,f),this.world.add(_);let m=new ci(new Bs(new an(d,u,g)),new yn({color:"#2f6ca8",transparent:!0,opacity:.8}));m.position.copy(_.position),this.world.add(m);let p=new le(new Ti(d,g),new rn({color:"#1b6fb5",transparent:!0,opacity:.12,side:en,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(c,0,f),this.world.add(p);let w=Su(Math.max(d,g)),S=(ot,X)=>{let mt=new yn({color:"#35597d",transparent:!0,opacity:X}),Pt=[];for(let he=Math.ceil(a/w)*w;he<=o+1e-6;he+=w)Pt.push(he,ot,f-g/2,he,ot,f+g/2);for(let he=Math.ceil(-h/w)*w;he<=-l+1e-6;he+=w)Pt.push(a,ot,he,o,ot,he);let Ht=new me;Ht.setAttribute("position",new Xt(Pt,3));let D=new ci(Ht,mt);this.world.add(D)};S(0,.6),S(-u,.25);let M=new Ea(new I(0,0,-1),new I(a+.5*r,0,f-g/2+.2*r),Math.max(r*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(M),this.sprite("N",new I(a+.5*r,0,f-g/2-this.size*.05),.04,"#ff8a7d");let L=a,E=f+g/2,A=Su(u),P=[L,0,E,L,-u,E];for(let ot=0;ot<=u+1e-6;ot+=A)P.push(L,-ot,E,L-this.size*.015,-ot,E),this.sprite(ot.toFixed(A<1?1:0)+" m",new I(L-this.size*.07,-ot,E),.03,"#9fc3ea");let v=new me;if(v.setAttribute("position",new Xt(P,3)),this.world.add(new ci(v,new yn({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=u){let ot=new le(new Ti(d,g),new rn({color:"#e0584b",transparent:!0,opacity:.08,side:en,depthWrite:!1}));ot.rotation.x=-Math.PI/2,ot.position.set(c,-e.depthLimit,f),this.world.add(ot)}let x=s.bb.x0,C=s.bb.x1,B=s.bb.y0,F=s.bb.y1,H=new ci(new Bs(new an(Math.max(C-x,.001),Math.max(s.maxDepth,.001),Math.max(F-B,.001))),new yn({color:"#e0a93b",transparent:!0,opacity:.55}));H.position.set((x+C)/2,-s.maxDepth/2,-(B+F)/2),this.world.add(H),C-x>.2&&this.sprite(`B ${(C-x).toFixed(1)} m`,new I((x+C)/2,0,-B+this.size*.03),.03,"#ffd27a"),F-B>.2&&this.sprite(`L ${(F-B).toFixed(1)} m`,new I(C+this.size*.04,0,-(B+F)/2),.03,"#ffd27a"),s.maxDepth>.2&&this.sprite(`T ${s.maxDepth.toFixed(1)} m`,new I(C,-s.maxDepth/2,-B),.03,"#ffd27a");let K=[],G=[],tt=[],W=new Vt,rt=Math.max(s.maxDepth,.5);n.forEach(ot=>{let X=this.P(ot);K.push(X.x,X.y,X.z),tt.push(X.x,0,X.z),this.color==="depth"?W.setHSL(.55-.1*ot.z/rt,.9,.45+.25*(1-ot.z/rt)):W.set(Xe[t.steps?.[ot.i]?.t]?.color||"#9aa7b8"),G.push(W.r,W.g,W.b)});let lt=new gs;lt.setPositions(K),lt.setColors(G);let ct=new Fa(lt,this.lm);ct.computeLineDistances(),this.world.add(ct);let Dt=new me;Dt.setAttribute("position",new Xt(tt,3)),this.world.add(new us(Dt,new yn({color:"#7ea6d1",transparent:!0,opacity:.35})));let Wt=[],Y=-99;n.forEach(ot=>{if(ot.t-Y>=Math.max(5,s.dur/40)&&ot.z>.05){Y=ot.t;let X=this.P(ot);Wt.push(X.x,X.y,X.z,X.x,0,X.z)}});let et=new me;et.setAttribute("position",new Xt(Wt,3)),this.world.add(new ci(et,new yn({color:"#4d7aa8",transparent:!0,opacity:.35})));let yt={};n.forEach(ot=>{if(ot.i>=0&&!yt[ot.i]){yt[ot.i]=1;let X=this.P(ot),mt=new le(new ks(this.size*.006,10,10),new rn({color:Xe[t.steps?.[ot.i]?.t]?.color||"#fff"}));mt.position.copy(X),this.world.add(mt),this.sprite(`${ot.i+1} ${Xe[t.steps?.[ot.i]?.t]?.label||""}`,X.clone().add(new I(0,this.size*.03,0)),.02)}});let at=new le(new ma(this.size*.01,this.size*.03,12),new rn({color:"#4fb477"}));at.position.copy(this.P(n[0])).add(new I(0,this.size*.02,0)),at.rotation.x=Math.PI,this.world.add(at),this.sprite("START",this.P(n[0]).add(new I(0,this.size*.06,0)),.024,"#7fe0a0");let Ct=n[n.length-1];this.sprite("ENDE",this.P(Ct).add(new I(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,n=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let n=0,s=e.length-1;for(;s-n>1;){let c=n+s>>1;e[c].t<=t?n=c:s=c}let r=e[n],a=e[s],o=a.t>r.t?Math.min(1,Math.max(0,(t-r.t)/(a.t-r.t))):0,l=c=>r[c]+(a[c]-r[c])*o,h={x:l("x"),y:l("y"),z:l("z")};this.boat.position.copy(this.P(h)),this.dot.position.copy(this.boat.position);let u=a.h-r.h;if(u>180&&(u-=360),u<-180&&(u+=360),this.boat.rotation.y=-(r.h+u*o)*Mu,this.boat.rotation.x=l("p")*Mu,this.follow){let c=this.boat.position;this.ctl.target.lerp(c,1)}return this.cur={...r,x:h.x,y:h.y,z:h.z,h:r.h+u*o,p:l("p"),v:l("v"),f:l("f"),thr:l("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var Ne=(i,t,e="")=>R("button",{class:"btn "+e,onclick:t},i);function a_(i,t,e,n){let s=i.getContext("2d"),r=i.width/2,a=i.height/2;s.setTransform(2,0,0,2,0,0),s.clearRect(0,0,r,a),s.fillStyle="#0a141d",s.fillRect(0,0,r,a);let o=t.pts,l=t.stats;if(o.length<2)return;let h=44,u=10,c=10,f=20,d=Math.max(l.maxDepth*1.15,1),g=Math.max(l.dur,1),_=E=>h+E/g*(r-h-u),m=E=>c+E/d*(a-c-f);s.font="10px Helvetica, Arial",s.fillStyle="#6f869c",s.strokeStyle="#162838",s.textAlign="right";let p=d<=3?.5:d<=10?1:d<=30?5:10;for(let E=0;E<=d;E+=p)s.beginPath(),s.moveTo(h,m(E)),s.lineTo(r-u,m(E)),s.stroke(),s.fillText(E+" m",h-4,m(E)+3);s.textAlign="center";let w=g<120?10:g<600?60:g<3600?300:900;for(let E=0;E<=g;E+=w)s.fillText(E>=60?Math.round(E/60)+" min":E+" s",_(E),a-6);n&&n<d&&(s.strokeStyle=Oe.bad,s.setLineDash([4,3]),s.beginPath(),s.moveTo(h,m(n)),s.lineTo(r-u,m(n)),s.stroke(),s.setLineDash([]));let S=-2,M=0,L=[];o.forEach((E,A)=>{E.i!==S&&(S>=-1&&L.push([S,M,E.t]),S=E.i,M=E.t)}),L.push([S,M,g]),L.forEach(([E,A,P])=>{E<0||(s.fillStyle=(Xe[t.steps[E]?.t]?.color||"#888")+"22",s.fillRect(_(A),c,Math.max(1,_(P)-_(A)),a-c-f))}),s.lineWidth=2,s.strokeStyle="#4aa3ff",s.beginPath(),o.forEach((E,A)=>{A?s.lineTo(_(E.t),m(E.z)):s.moveTo(_(E.t),m(E.z))}),s.stroke(),s.lineWidth=1,s.strokeStyle="#8a6fd055",s.beginPath(),o.forEach((E,A)=>{let P=c+(1-E.f/100)*(a-c-f)*.25+(a-c-f)*.75;A?s.lineTo(_(E.t),P):s.moveTo(_(E.t),P)}),s.stroke(),s.fillStyle="#8a6fd0",s.textAlign="left",s.fillText("Ballast",h+4,a-f-4),s.strokeStyle="#e0a93b",s.lineWidth=1.5,s.beginPath(),s.moveTo(_(e),c),s.lineTo(_(e),a-f),s.stroke()}function o_(i,t,e){let n=i.getContext("2d"),s=i.width/2,r=i.height/2;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,s,r),n.fillStyle="#0a141d",n.fillRect(0,0,s,r);let a=t.pts,o=t.stats;if(a.length<2)return;let l=26,h=Math.max(o.bb.x1-o.bb.x0,2),u=Math.max(o.bb.y1-o.bb.y0,2),c=Math.min((s-2*l)/h,(r-2*l)/u),f=s/2-(o.bb.x0+o.bb.x1)/2*c,d=r/2+(o.bb.y0+o.bb.y1)/2*c,g=S=>f+S*c,_=S=>d-S*c,m=(()=>{let S=40/c,M=Math.pow(10,Math.floor(Math.log10(S))),L=S/M;return(L<1.5?1:L<3.5?2:L<7.5?5:10)*M})();n.strokeStyle="#162838",n.fillStyle="#6f869c",n.font="10px Helvetica, Arial",n.textAlign="left";for(let S=Math.floor(-f/c/m)*m;g(S)<s;S+=m)n.beginPath(),n.moveTo(g(S),0),n.lineTo(g(S),r),n.stroke();for(let S=Math.floor((d-r)/c/m)*m;_(S)>0;S+=m)n.beginPath(),n.moveTo(0,_(S)),n.lineTo(s,_(S)),n.stroke();n.fillText(`Raster ${m} m`,6,r-6),n.fillStyle=Oe.bad,n.fillText("N \u2191",s-28,14),n.lineWidth=2;for(let S=1;S<a.length;S++)n.strokeStyle=Xe[t.steps[a[S].i]?.t]?.color||"#9aa7b8",n.beginPath(),n.moveTo(g(a[S-1].x),_(a[S-1].y)),n.lineTo(g(a[S].x),_(a[S].y)),n.stroke();n.fillStyle=Oe.ok,n.beginPath(),n.arc(g(0),_(0),4,0,7),n.fill();let p=a[a.length-1];n.fillStyle=Oe.bad,n.beginPath(),n.arc(g(p.x),_(p.y),4,0,7),n.fill();let w=a.find(S=>S.t>=e)||p;n.strokeStyle="#e0a93b",n.lineWidth=2,n.beginPath(),n.arc(g(w.x),_(w.y),7,0,7),n.stroke(),n.save(),n.translate(g(w.x),_(w.y)),n.rotate(w.h*Math.PI/180),n.fillStyle="#e0a93b",n.beginPath(),n.moveTo(0,-11),n.lineTo(-4,-4),n.lineTo(4,-4),n.fill(),n.restore()}function bu(){let i=Ln.get("mission",null);i=Array.isArray(i)&&i.length?i:Ya("Pool Funktionstest");let t=null,e=0,n=!1,s=10,r=0,a=-1,o=Ln.get("h0",0),l=Ln.get("pmax",25),h=Ln.get("capwh",6.3),u=R("div",{class:"steps-list"}),c=R("div",{class:"warns"}),f=R("div",{class:"view3d"}),d={dur:re("Dauer"),dist:re("Strecke","m"),dep:re("Max Tiefe","m"),box:re("Bahn B \xD7 L","m"),end:re("Ende zu Start","m"),en:re("Energie","Wh"),bat:re("Akku Bedarf","%"),spd:re("\xD8 Fahrt","m/s")},g=R("canvas",{width:1e3,height:300,class:"cv"}),_=R("canvas",{width:600,height:300,class:"cv"}),m=R("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+m.value,n=!1,S(),H()}}),p=R("div",{class:"hud"}),w=Ne("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),n=!n,r=performance.now(),S())},"play"),S=()=>{w.textContent=n?"\u275A\u275A":"\u25B6"},M=new Ba(f),L=R("select",{class:"in sm",onchange:()=>{s=+L.value}},[1,5,10,30,100].map(X=>R("option",{value:X,selected:X===s},`${X}\xD7`))),E=R("select",{class:"in sm",onchange:()=>{M.color=E.value,F()}},R("option",{value:"step"},"Farbe: Schritt"),R("option",{value:"depth"},"Farbe: Tiefe")),A=R("input",{type:"checkbox",onchange:()=>{M.follow=A.checked,M.at(e)}}),P=R("select",{class:"in sm",onchange:()=>{M.boat.scale.setScalar(+P.value||M.boatScale),M.dirty=!0}},R("option",{value:0},"Boot: Auto"),R("option",{value:1},"Boot: 1:1"),R("option",{value:5},"Boot: 5\xD7"),R("option",{value:20},"Boot: 20\xD7")),v=()=>js(X=>Z.par[X]),x=()=>{let X=v();t=tr(i,X,{h0:o,pMax:l}),t.steps=i;let mt=t.stats;m.max=mt.dur,e=Math.min(e,mt.dur),d.dur.set(Ga(mt.dur)),d.dist.set(wt(mt.dist,1)),d.dep.set(wt(mt.maxDepth,2),mt.maxDepth>X.depthMax?"bad":""),d.box.set(`${wt(mt.w,1)} \xD7 ${wt(mt.l,1)}`),d.end.set(wt(mt.endDist,1)),d.en.set(wt(mt.wh,2));let Pt=mt.wh/h*100;d.bat.set(wt(Pt,0),Pt>60?"bad":Pt>40?"warn":""),d.spd.set(wt(mt.avgV,2)),c.innerHTML="",[...Qs(i,X),...t.notes.map(D=>({i:D.i,m:D.m}))].forEach(D=>c.append(R("div",{class:"w"},(D.i>=0?`Schritt ${D.i+1}: `:"")+D.m))),Ln.set("mission",i),F(),H()},C=null,B=()=>{clearTimeout(C),C=setTimeout(x,120)},F=()=>{t&&M.setPlan(t,{depthLimit:v().depthMax,boatScale:+P.value||void 0})},H=()=>{if(!t)return;m.value=e;let X=M.at(e);a_(g,t,e,v().depthMax),o_(_,t,e),X&&(p.innerHTML="",[["t",Ga(X.t)],["Tiefe",wt(X.z,2)+" m"],["Kurs",wt((X.h%360+360)%360,0)+"\xB0"],["Nick",wt(X.p,0)+"\xB0"],["Fahrt",wt(X.v,2)+" m/s"],["Ballast",wt(X.f,0)+" %"],["Schritt",X.i>=0?`${X.i+1} ${Xe[i[X.i]?.t]?.label||""}`:"Start"]].forEach(([mt,Pt])=>p.append(R("span",null,mt,R("b",null,Pt)))),a=X.i,K())},K=()=>{[...u.children].forEach((X,mt)=>X.classList.toggle("sel",mt===a))},G=()=>{u.innerHTML="",i.forEach((X,mt)=>{let Pt=Xe[X.t],Ht=Qs(i,v()).some(_t=>_t.i===mt),D=R("select",{class:"in sm",onchange:()=>{let _t=X.v;i[mt]=Js(D.value),G(),B()}},Xa.map(_t=>R("option",{value:_t,selected:_t===X.t},Xe[_t].label))),he=Pt.f.map((_t,Mt)=>{let Qt=R("input",{class:"in num",type:"number",step:_t[5],min:_t[3],max:_t[4],value:X.v[Mt],onchange:()=>{X.v[Mt]=Ui(+Qt.value,_t[3],_t[4]),Qt.value=X.v[Mt],B()}});return R("label",{class:"fld"},R("span",null,_t[0],_t[1]?` (${_t[1]})`:""),Qt)}),Gt=_t=>()=>{let Mt=mt+_t;Mt<0||Mt>=i.length||([i[mt],i[Mt]]=[i[Mt],i[mt]],G(),x())};u.append(R("div",{class:"step"+(Ht?" warn":""),onclick:()=>{let _t=t.pts.find(Mt=>Mt.i===mt);_t&&(e=_t.t,n=!1,S(),H())}},R("div",{class:"sh"},R("i",{style:{background:Pt.color}}),R("b",null,mt+1),D,R("span",{class:"sp"}),R("button",{class:"ib",title:"hoch",onclick:_t=>{_t.stopPropagation(),Gt(-1)()}},"\u2191"),R("button",{class:"ib",title:"runter",onclick:_t=>{_t.stopPropagation(),Gt(1)()}},"\u2193"),R("button",{class:"ib",title:"duplizieren",onclick:_t=>{_t.stopPropagation(),i.splice(mt+1,0,JSON.parse(JSON.stringify(X))),G(),x()}},"\u29C9"),R("button",{class:"ib del",title:"l\xF6schen",onclick:_t=>{_t.stopPropagation(),i.splice(mt,1),G(),x()}},"\u2715")),he.length?R("div",{class:"flds"},he):R("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),K()},tt=R("select",{class:"in"},Xa.map(X=>R("option",{value:X},Xe[X].label))),W=()=>{if(i.length>=Ks)return fe("Maximal 64 Schritte","warn");i.push(Js(tt.value)),G(),x(),u.scrollTop=u.scrollHeight},rt=R("select",{class:"in",onchange:()=>{rt.value&&((!i.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(i=Ya(rt.value),e=0,G(),x()),rt.value="")}},R("option",{value:""},"Vorlage laden \u2026"),Object.keys(qa).map(X=>R("option",{value:X},X))),lt=R("dialog",{class:"dlg"}),ct={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},Dt=(X,mt,Pt,Ht=.1)=>R("label",{class:"fld"},R("span",null,`${X} (${Pt})`),R("input",{class:"in num",type:"number",step:Ht,value:ct[mt],onchange:D=>{ct[mt]=+D.target.value}}));lt.append(R("h3",null,"Yo Yo Profil erzeugen"),R("div",{class:"flds"},Dt("Flachste Tiefe","lo","m"),Dt("Tiefste Tiefe","hi","m"),Dt("Zyklen","n","x",1),Dt("Fahrt","spd","%",1),Dt("Max Sinkrate","rate","m/s",.01),Dt("Max Nick","pit","deg",1)),R("div",{class:"row"},Ne("Anh\xE4ngen",()=>{let X=i.length;i.push({t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.hi,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]}),ct.n>1&&i.push({t:"REPEAT",v:[ct.n-1,X+1,0,0]}),lt.close(),G(),x()},"primary"),Ne("Abbrechen",()=>lt.close())));let Wt=R("span",{class:"dim"}),Y=async X=>{if(!Z.connected)return fe("Nicht verbunden","bad");let mt=Z.info?.maxsteps||64;if(i.length>mt)return fe(`Boot speichert nur ${mt} Schritte`,"bad");if(Qs(i,v()).filter(D=>D.m.includes("R\xFCcksprung")).length)return fe("R\xFCcksprung Schritt pr\xFCfen","bad");let Ht=await ye("MIS CLEAR");if(!(!Ht||!Ht.ok)){for(let D=0;D<i.length;D++)if(Wt.textContent=`\xDCbertrage ${D+1}/${i.length}`,Ht=await ye(_c([i[D]])[0].replace(/^/,"")),!Ht||!Ht.ok){Wt.textContent="";return}X&&await ye("MIS SAVE"),Wt.textContent="",fe(`Mission mit ${i.length} Schritten ${X?"gespeichert":"\xFCbertragen"}`,"ok"),di(`Mission \xFCbertragen (${i.length} Schritte)`)}},et=async()=>{let X=await ye("MIS GET");X&&X.ok&&Array.isArray(X.data)&&(i=er(X.data),e=0,G(),x(),fe(`${i.length} Schritte vom Boot gelesen`,"ok"))},yt=async()=>{if(!Z.connected)return fe("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await ye("MIS START","Mission l\xE4uft")},at=(X,mt,Pt,Ht)=>R("label",{class:"fld"},R("span",null,`${X} (${Ht})`),R("input",{class:"in num",type:"number",value:mt,step:"any",onchange:D=>Pt(+D.target.value)})),Ct=R("div",{class:"page mis"},R("div",{class:"toolbar"},rt,Ne("Neu",()=>{confirm("Mission leeren?")&&(i=[],e=0,G(),x())}),Ne("Laden",async()=>{let X=await Ys(".json");if(X)try{i=JSON.parse(X).steps,e=0,G(),x()}catch{fe("Datei ung\xFCltig","bad")}}),Ne("Speichern",()=>qs("mission.json",JSON.stringify({app:"AlfaOS",steps:i},null,1))),Ne("Yo Yo \u2026",()=>lt.showModal()),R("span",{class:"sp"}),Wt,Ne("Zum Boot senden",()=>Y(!1),"primary"),Ne("Senden + im Boot speichern",()=>Y(!0)),Ne("Vom Boot lesen",et),Ne("START",yt,"go"),Ne("STOP",()=>ye("MIS STOP","Mission gestoppt"),"stop")),R("div",{class:"stats mstats"},Object.values(d).map(X=>X.el)),R("div",{class:"mgrid"},R("div",{class:"left"},u,R("div",{class:"addrow"},tt,Ne("+ Schritt",W,"primary")),c,R("details",{class:"opt"},R("summary",null,"Annahmen f\xFCr die Vorschau"),at("Startkurs",o,X=>{o=X,Ln.set("h0",X),x()},"deg"),at("Leistung bei 100 % Gas",l,X=>{l=X,Ln.set("pmax",X),x()},"W"),at("Akku Energie (2S 850 mAh)",h,X=>{h=X,Ln.set("capwh",X),x()},"Wh"),R("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),R("div",{class:"right"},R("div",{class:"vwrap"},f,p,R("div",{class:"vtools"},Ne("Iso",()=>M.view("iso")),Ne("Oben",()=>M.view("top")),Ne("Seite",()=>M.view("side")),E,P,R("label",{class:"chk"},A," Kamera folgt"))),R("div",{class:"tlbar"},w,m,L),R("div",{class:"grid2c"},R("div",{class:"card tight"},R("h3",null,"Tiefenprofil"),g),R("div",{class:"card tight"},R("h3",null,"Draufsicht"),_)))),lt),ot=()=>{if(requestAnimationFrame(ot),!n||!t)return;let X=performance.now();e+=(X-r)/1e3*s,r=X,e>=t.stats.dur&&(e=t.stats.dur,n=!1,S()),H()};return ot(),ve.on("par",()=>{Z.tab==="mission"&&B()}),{el:Ct,show(){M.setActive(!0),G(),x()},hide(){M.setActive(!1),n=!1,S()},update(X){X.mis.run&&(a=X.mis.i,K())},sim:M,setTime(X){e=X,H()},get plan(){return t}}}var l_='<svg viewBox="0 0 64 40" width="34" height="22"><rect x="2" y="2" width="60" height="36" fill="#fff"/><path d="M32 2h30l-12 18 12 18H32z" fill="#1B4B8F"/></svg>',c_=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ve={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,mission:null,term:null},ka={async connect(){if(Z.connected)return;if(!vs.supported())return fe("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let i=new vs;try{await i.connect()}catch(t){t.name!=="NotFoundError"&&fe("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}Eu(i,!1)},async demo(){Z.connected&&await Z.link.disconnect();let i=new ir;await i.connect(),Eu(i,!0)},async disconnect(){Z.link&&await Z.link.disconnect()}};async function Eu(i,t){if(Z.link=i,Z.demo=t,Z.connected=!0,i.on("rx",r=>ve.emit("rx",r)),i.on("tx",r=>ve.emit("tx",r)),i.on("ev",r=>di(r,/ERR|FAILSAFE|LECK/i.test(r)?"bad":"info")),i.on("tel",r=>{Z.tel=r,Z.lastTel=performance.now()}),i.on("close",()=>{Z.connected=!1,Z.tel=null,ve.emit("conn"),lc(),di("Verbindung getrennt","warn"),fe("Verbindung getrennt","warn")}),i.on("error",r=>di("Fehler: "+(r.message||r),"bad")),ve.emit("conn"),lc(),!(await i.cmd("PING",1500)).ok){fe("Keine Antwort vom Boot. Ist AlfaOS geflasht?","bad",6e3),await i.disconnect();return}let n=await i.cmd("INFO");n.ok&&(Z.info=n.data),await ys();let s=await i.cmd("MIS GET");Z.boatMis=s.data,await i.cmd("STREAM 20"),di(`Verbunden mit ${Z.info?.fw} ${Z.info?.ver}`,"ok"),fe(t?"Demo Boot verbunden":"Boot verbunden","ok"),Gs(Z.tab==="setup"?"dash":Z.tab)}var wu,za,Tu;function lc(){let i=Z.tel,t=bn("#conn");t&&(t.className="conn "+(Z.connected?"on":""),t.textContent=Z.connected?Z.demo?"DEMO":"VERBUNDEN":"GETRENNT");let e=bn("#armbtn");e&&(e.disabled=!Z.connected,e.textContent=i&&i.arm?"DISARM":"ARM",e.className="btn "+(i&&i.arm?"stop":"warnb"));let n=bn("#modesel");n&&(n.disabled=!Z.connected,i&&document.activeElement!==n&&(n.value=i.m));let s=bn("#disc");s&&(s.style.display=Z.connected?"":"none")}function Gs(i){let t=Ve[Z.tab];t&&t.hide&&t.hide(),Z.tab=i,za.innerHTML="";let e=Ve[i];za.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(n=>n.classList.toggle("on",n.dataset.k===i)),ve.emit("tab",i),location.hash=i}ve.on("goto",Gs);function h_(){let i=bn("#app");wu=R("header",{class:"top"},R("div",{class:"brand",html:l_}),R("div",{class:"bt"},R("b",null,"AlfaOS"),R("span",null,"U-Boot Konfigurator")),R("span",{class:"sp"}),R("span",{id:"conn",class:"conn"},"GETRENNT"),R("select",{id:"modesel",class:"in sm",disabled:!0,onchange:r=>ye("MODE "+r.target.value)},["MANUAL","STAB","DEPTH","MISSION"].map(r=>R("option",{value:r},r)),R("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),R("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>ye(Z.tel&&Z.tel.arm?"DISARM":"ARM")},"ARM"),R("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>ka.disconnect()},"Trennen"));let t=R("nav",{class:"nav"},c_.map(([r,a,o])=>R("button",{"data-k":r,onclick:()=>Gs(r),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${o}"/></svg><span>${a}</span>`})),R("span",{class:"sp"}),R("div",{class:"navfoot"},R("a",{href:"/alfaos.html",target:"_top"},"Under Pressure")));za=R("main",{class:"content"}),Tu=R("footer",{class:"status"},R("span",{id:"sb1"},"bereit"),R("span",{class:"sp"}),R("span",{id:"sb2"},"AlfaOS Konfigurator 0.1")),i.append(wu,R("div",{class:"body"},t,za),Tu),Ve.setup=Sc(ka),Ve.dash=bc(),Ve.sensors=Ec(),Ve.calib=Tc(),Ve.tests=Ac(),Ve.params=Rc(),Ve.mission=bu(),Ve.term=Cc(),En.forEach(r=>{Z.par[r.k]=r.d}),ve.on("ev",()=>{let r=Z.events[Z.events.length-1];r&&(bn("#sb1").textContent=r.m)});let e=0,n=r=>{if(requestAnimationFrame(n),Z.connected&&Z.tel&&Z.lastTel!==e){e=Z.lastTel;let a=Ve[Z.tab];a&&a.update&&a.update(Z.tel),lc(),Z.tab!=="tests"&&Ve.tests.update}Z.connected&&performance.now()-Z.lastTel>2e3&&Z.lastTel?bn("#sb2").textContent="keine Telemetrie":Z.connected&&(bn("#sb2").textContent=Z.demo?"Demo":"USB 20 Hz")};requestAnimationFrame(n);let s=location.hash.slice(1);Gs(Ve[s]?s:"setup"),new URLSearchParams(location.search).has("demo")&&ka.demo(),window.addEventListener("beforeunload",()=>{if(Z.connected)try{Z.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&Z.connected&&Z.tel&&Z.tel.tst&&Ve.tests.stopAll()}),window.__alfa={S:Z,pages:Ve,api:ka,setTab:Gs}}h_();})();
