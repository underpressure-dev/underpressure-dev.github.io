(()=>{var R=(i,t,...e)=>{let n=document.createElement(i);if(t)for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r));return e.flat(9).forEach(s=>{s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)))}),n},Tn=(i,t=document)=>t.querySelector(i),Wa=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(n=>n(...e))}},ye=new Wa,Y={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(i,t){let e=this.par[i];return e===void 0?t:e}};function re(i,t="info",e=3500){let n=Tn("#toasts");n||(n=R("div",{id:"toasts"}),document.body.append(n));let s=R("div",{class:"toast "+t},i);n.append(s),setTimeout(()=>s.remove(),e)}var Tt=(i,t=1)=>i==null||isNaN(i)?"\u2013":(+i).toFixed(t),Xa=i=>{i=Math.round(i);let t=Math.floor(i/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(i%60).padStart(2,"0")} s`},Ni=(i,t,e)=>Math.min(e,Math.max(t,i)),fi=(i,t="info")=>{Y.events.push({t:new Date,m:i,kind:t}),Y.events.length>300&&Y.events.shift(),ye.emit("ev")};function $s(i,t,e="application/json"){let n=R("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:i});document.body.append(n),n.click(),n.remove()}function Ks(i){return new Promise(t=>{let e=R("input",{type:"file",accept:i,onchange:()=>{let n=e.files[0];if(!n)return t(null);let s=new FileReader;s.onload=()=>t(s.result),s.readAsText(n)}});e.click()})}var Un={get(i,t){try{let e=localStorage.getItem("fathom."+i);return e===null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("fathom."+i,JSON.stringify(t))}catch{}}};var wn=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (3D Modus)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Batterie",h:"Leckage Schwelle (0..1)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"IMU_MODE",k:"imu.mode",d:0,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"}];var Ye={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},Ya=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","REPEAT"],Qs=64,tr=i=>({t:i,v:Ye[i].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),js=i=>(i%360+360)%360,qa=i=>(i=js(i),i>180?i-360:i),Nn=(i,t,e)=>Math.min(e,Math.max(t,i)),Uu=180/Math.PI,Js=Math.PI/180;function er(i){let t=(e,n)=>{let s=i?i(e):void 0;return s===void 0||isNaN(s)?n:s};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function nr(i,t){let e=[];return i.length>Qs&&e.push({i:-1,m:`Maximal ${Qs} Schritte, Boot speichert nur diese.`}),i.forEach((n,s)=>{let r=n.v;if(n.t==="DIVE"&&(r[0]>t.depthMax&&e.push({i:s,m:`Tiefe ${r[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),r[2]>t.pitchMax&&e.push({i:s,m:`Nick ${r[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(n.t)){let a=n.t==="CRUISE"?r[0]:n.t==="CURVE"?r[2]:r[3];a>t.thrMax&&e.push({i:s,m:`Fahrt ${a} % wird auf Limit ${t.thrMax} % begrenzt.`})}n.t==="REPEAT"&&r[1]>=s&&e.push({i:s,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),n.t==="CURVE"&&r[1]<.5&&e.push({i:s,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),i.length&&i[i.length-1].t!=="SURFACE"&&e.push({i:i.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function ir(i,t,e={}){let s=[],r=[],a={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},o=L=>{s.push({...a,i:L})},l=0,h=0,u=0,c={};o(-1);let d=4*3600,f=(L,T,A,P,v)=>{let x=0;for(;!L(x)&&x<A&&u<d;)T(x),x+=.1,u+=.1,a.t=u,Math.round(x/.1)%5===0&&o(P);x>=A&&r.push({i:P,m:`${v}: Ziel in ${Math.round(A)} s nicht erreicht (Vorschau).`}),o(P)},g=(L,T,A)=>{let P=Nn(L,0,t.thrMax)*t.ms;a.v=P,a.thr=Nn(L,0,t.thrMax),a.h=js(a.h+T*.1),a.p+=(A-a.p)*Math.min(1,.1/1.5);let v=P*Math.cos(a.p*Js),x=-P*Math.sin(a.p*Js);a.x+=v*Math.sin(a.h*Js)*.1,a.y+=v*Math.cos(a.h*Js)*.1,a.z=Math.max(0,a.z+x*.1)};for(;l<i.length&&h++<5e3&&u<d;){let L=i[l],T=L.v;switch(L.t){case"WAIT":f(A=>A>=T[0],()=>g(0,0,0),T[0]+1,l,"Warten");break;case"DIVE":{let A=T[0],P=T[1]>0?T[1]:.2,v=Math.max(T[3],0),x=Math.min(T[2]>0?T[2]:t.pitchMax,t.pitchMax),C=a.z,B=A>a.z?1:-1;f(()=>Math.abs(a.z-A)<t.tol*.5&&Math.abs(C-A)<1e-6,()=>{C+=B*P*.1,(B>0&&C>A||B<0&&C<A)&&(C=A);let F=(C-a.z)*18,H=Nn(-F,-x,x);g(v,0,H),v<1&&(a.z=Nn(a.z+Nn((C-a.z)*.8,-P,P)*.1,0,90),a.p=0)},Math.abs(A-a.z)/P*3+40,l,"Tauchen"),a.z=A;break}case"CRUISE":{let A=T[1]>=0?T[1]:a.h;f(P=>P>=T[2],()=>{let P=qa(A-a.h);g(T[0],Nn(P*2,-20,20),0)},T[2]+1,l,"Geradeaus");break}case"TURN":{let A=T[1]>.5?js(a.h+T[0]):js(T[0]),P=T[2]>0?T[2]:20;f(()=>Math.abs(qa(A-a.h))<1,()=>{let v=qa(A-a.h);g(T[3],Nn(v*3,-P,P),0)},90+360/P,l,"Drehen");break}case"CURVE":{let A=Math.max(T[2],1)*t.ms,P=A/Math.max(T[1],.05)*Uu,v=0,x=Math.abs(T[0]);f(()=>v>=x,()=>{let C=Math.min(P*.1,x-v);v+=C,g(Math.max(T[2],1),(T[0]>=0?1:-1)*C/.1,0)},x/Math.max(P,1)*3+40,l,"Kurve");break}case"BALLAST":{let A=Nn(T[0],0,100);f(()=>Math.abs(a.f-A)<.5,()=>{a.f+=Math.sign(A-a.f)*Math.min(t.flow*.1,Math.abs(A-a.f)),g(0,0,0)},240,l,"Ballast");break}case"PLANES":{let A=Nn((T[1]+.5*T[0])*.8,-t.pitchMax,t.pitchMax);f(P=>P>=T[2],()=>g(T[3],0,A),T[2]+1,l,"Ruder fix");break}case"SURFACE":{f(()=>a.z<=.12,()=>{a.f=Math.max(0,a.f-t.flow*.1),g(t.fsThr,0,t.fsPitch),a.z=Math.max(0,a.z-.2*.1*0)},600,l,"Auftauchen"),a.z=0,a.p=0,a.v=0,a.thr=0,o(l),l=i.length;continue}case"REPEAT":{let A=l;if(c[A]=(c[A]||0)+1,c[A]<=T[0]&&T[1]<l){l=Math.max(0,Math.round(T[1]));continue}break}}l++}let _=s,m=0,p=0,b=0,S={x0:0,x1:0,y0:0,y1:0,z1:0};for(let L=1;L<_.length;L++){let T=_[L-1],A=_[L];m+=Math.hypot(A.x-T.x,A.y-T.y,A.z-T.z);let P=A.t-T.t,v=(A.thr||0)/100;b+=P*(e.pBase??1.5+(e.pMax??25)*v*v*v),A.thr>1&&(p+=P)}_.forEach(L=>{S.x0=Math.min(S.x0,L.x),S.x1=Math.max(S.x1,L.x),S.y0=Math.min(S.y0,L.y),S.y1=Math.max(S.y1,L.y),S.z1=Math.max(S.z1,L.z)});let M=_[_.length-1]||a;return{pts:_,notes:r,stats:{dur:M.t,dist:m,maxDepth:S.z1,bb:S,wh:b/3600,cruiseT:p,avgV:M.t>0?m/M.t:0,endDist:Math.hypot(M.x,M.y),final:{x:M.x,y:M.y,z:M.z},w:S.x1-S.x0,l:S.y1-S.y0}}}var Za={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((i,t)=>i),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function $a(i){return Za[i].map(t=>{let e=tr(t[0]);return t.slice(1).forEach((n,s)=>{e.v[s]=n}),e})}var yc=i=>i.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function sr(i){return i.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Ye[t.t])}var Ka=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(n=>n!==e)}}emit(t,...e){(this.h[t]||[]).forEach(n=>{try{n(...e)}catch(s){console.error(s)}})}},Ms=class extends Ka{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let n=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),n&&this._line(n)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(/^(OK|ERR|PAR|INFO|MIS)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let n=t;if(/^(PAR|INFO|MIS)\s/.test(t))try{n=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:n}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(n=>{this.q.push({text:t,res:n,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}fire(t){this.emit("tx",t),this._write(t+`
`)}},Ss=class extends Ms{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:n}=await this.reader.read();if(n)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},rr=class extends Ms{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let n=!1,s=this.ws=new WebSocket(`ws://${this.host}:81/`),r=setTimeout(()=>{if(!n){n=!0;try{s.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);s.onopen=()=>{n||(n=!0,clearTimeout(r),this.connected=!0,t())},s.onmessage=a=>this._feed(String(a.data)+`
`),s.onerror=()=>{n||(n=!0,clearTimeout(r),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},s.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},ar=class extends Ms{constructor(){super(),this.demo=!0,this.par={},wn.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),n=(e[0]||"").toUpperCase(),s=r=>this._reply(r);if(n==="PING")s("OK PONG");else if(n==="INFO")s("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.2.0 DEMO",hw:"Simulation",params:wn.length,maxsteps:64}));else if(n==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),s("OK");else if(n==="GET")s("PAR "+JSON.stringify(wn.map(r=>({k:r.k,v:this.par[r.k],d:r.d,mn:r.mn,mx:r.mx,u:r.u,g:r.g,h:r.h}))));else if(n==="SET"){let r=wn.find(a=>a.k===e[1]);r?(this.par[r.k]=Math.min(r.mx,Math.max(r.mn,+e[2])),s("OK")):s("ERR unbekannt")}else if(n==="SAVE"||n==="LOAD")s("OK");else if(n==="DEFAULTS")wn.forEach(r=>{this.par[r.k]=r.d}),s("OK");else if(n==="ARM")this.tst?s("ERR Testmodus"):(this.armed=1,s("OK"));else if(n==="DISARM")this.armed=0,this.mis=null,s("OK");else if(n==="MODE")this.mode=(e[1]||"MANUAL").toUpperCase(),s("OK");else if(n==="TEST"){let r=(e[1]||"").toUpperCase();r==="ENABLE"?+e[2]&&this.armed?s("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),s("OK")):this.tst?r==="SERVO"?(this.tServo[+e[2]]=+e[3],s("OK")):r==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],s("OK")):s("ERR"):s("ERR kein Testmodus")}else if(n==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),s("OK");else if(n==="MIS"){let r=(e[1]||"").toUpperCase();if(r==="CLEAR")this.steps=[],s("OK");else if(r==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),s("OK "+this.steps.length);else if(r==="GET")s("MIS "+JSON.stringify(this.steps));else if(r==="SAVE")s("OK");else if(r==="START"){if(!this.armed){s("ERR nicht scharf");return}let a=er(o=>this.par[o]);this.mis={plan:ir(sr(this.steps),a),t:0,last:-1},this.mode="MISSION",s("OK")}else r==="STOP"?(this.mis=null,this.mode="DEPTH",s("OK")):s("ERR")}else s(n==="REBOOT"||n==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,n=0,s=this.att[2],r=this.depth,a=0,o=-1,l=0,h="-",u=0,c=0,d=0,f=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),a=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let m=this.mis.plan.pts,p=m.findIndex(b=>b.t>=this.mis.t);if(p<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let b=m[p];r=b.z,n=b.p,s=b.h,this.fill=b.f,a=b.thr/100,o=b.i,l=1,h=this.steps[o]?this.steps[o][0]:"-",u=this.mis.t,o!==this.mis.last&&(this.mis.last=o,this.emit("ev",`SCHRITT ${o+1} ${h}`))}}else this.tst||(r+=(0-r)*.02,n=Math.sin(e/3e3)*.4);if(this.depth=r,this.att=[Math.sin(e/2500)*.6,n,s],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-a*a*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let g=(m,p,b,S)=>Math.round(Math.min(this.par[S],Math.max(this.par[b],this.tst?this.tServo[m]:this.par[p]))),_={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(m=>+m.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+r.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+r*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:f,s:d,b:c,us:[g(0,"servo.rud.center","servo.rud.min","servo.rud.max"),g(1,"servo.stern.center","servo.stern.min","servo.stern.max"),g(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+a*500),thr:a,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?r:0,p:n,h:s,t:a*100},mis:{run:l,i:o,n:this.steps.length,ty:h,t:+u.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640};this._feed("T "+JSON.stringify(_)+`
`)}};var Yt={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},Be=Yt;function or(i,t){let e=R("canvas",{width:i*2,height:t*2,style:{width:i+"px",height:"auto",maxWidth:"100%"}}),n=e.getContext("2d");return n.scale(2,2),{c:e,x:n,w:i,h:t}}var Nu='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',De=(i,t,e="")=>{i.font=`${e} ${t}px ${Nu}`},ve=Math.PI/180,Mc=(i,t=1)=>{let e=+i.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function Sc(i,t,e,n){let s=i.createRadialGradient(t,e-n*.3,n*.1,t,e,n);s.addColorStop(0,"#0e1b25"),s.addColorStop(1,"#03070a"),i.fillStyle=s,i.beginPath(),i.arc(t,e,n,0,7),i.fill(),i.lineWidth=3,i.strokeStyle="#1d2a35",i.stroke(),i.lineWidth=1,i.strokeStyle="#3a4c5a",i.beginPath(),i.arc(t,e,n-2.5,0,7),i.stroke(),i.fillStyle="#25333e",[45,135,225,315].forEach(r=>{i.beginPath(),i.arc(t+Math.cos(r*ve)*(n+.5),e+Math.sin(r*ve)*(n+.5),2.2,0,7),i.fill()})}function Ou(i,t,e){let n=t*.075,s=t/2-n*1.6,r=-t*.18,a=-t/2+n*.5,o=n*.28;i.fillStyle=e,i.beginPath(),i.moveTo(r,-n),i.lineTo(s,-n),i.bezierCurveTo(s+n*1.25,-n,t/2,-n*.55,t/2,0),i.bezierCurveTo(t/2,n*.55,s+n*1.25,n,s,n),i.lineTo(r,n),i.bezierCurveTo(r-t*.12,n,a+n*.4,o,a,o),i.lineTo(a,-o),i.bezierCurveTo(a+n*.4,-o,r-t*.12,-n,r,-n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(t*.08,-n),i.lineTo(t*.115,-n*2.3),i.lineTo(t*.22,-n*2.3),i.lineTo(t*.25,-n),i.closePath(),i.fill();let l=a+n*.55;i.beginPath(),i.moveTo(l+n*1.6,-n*.45),i.lineTo(l+n*.2,-n*1.65),i.lineTo(l-n*.15,-n*1.65),i.lineTo(l-n*.15,-o),i.closePath(),i.fill(),i.beginPath(),i.moveTo(l+n*1.6,n*.45),i.lineTo(l+n*.2,n*1.65),i.lineTo(l-n*.15,n*1.65),i.lineTo(l-n*.15,o),i.closePath(),i.fill(),i.fillRect(a-n*.35,-n*.75,n*.22,n*1.5)}function Fu(i,t,e){let n=t*.085,s=-t/2+n*1.6,r=t*.18,a=t/2-n*.5,o=n*.28;i.fillStyle=e,i.beginPath(),i.moveTo(-n,r),i.lineTo(-n,s),i.bezierCurveTo(-n,s-n*1.25,-n*.55,-t/2,0,-t/2),i.bezierCurveTo(n*.55,-t/2,n,s-n*1.25,n,s),i.lineTo(n,r),i.bezierCurveTo(n,r+t*.12,o,a-n*.4,o,a),i.lineTo(-o,a),i.bezierCurveTo(-o,a-n*.4,-n,r+t*.12,-n,r),i.closePath(),i.fill();let l=a-n*.55;i.beginPath(),i.moveTo(-n*.45,l-n*1.6),i.lineTo(-n*1.65,l-n*.2),i.lineTo(-n*1.65,l+n*.15),i.lineTo(-o,l+n*.15),i.closePath(),i.fill(),i.beginPath(),i.moveTo(n*.45,l-n*1.6),i.lineTo(n*1.65,l-n*.2),i.lineTo(n*1.65,l+n*.15),i.lineTo(o,l+n*.15),i.closePath(),i.fill(),i.fillRect(-n*.75,a+n*.13,n*1.5,n*.22),i.fillStyle="#071017",i.fillRect(-n*.38,-t*.25,n*.76,t*.17)}function bc(i=260){let{c:t,x:e,w:n,h:s}=or(i,i),r=n/2,a=s/2,o=i/2-5,l={el:t,draw(h=0,u=0,c){e.clearRect(0,0,n,s),Sc(e,r,a,o),e.save(),e.translate(r,a);let d=o-8;e.save(),e.beginPath(),e.arc(0,0,d-16,0,7),e.clip(),e.strokeStyle=Yt.grid,e.lineWidth=1;for(let b=-d;b<=d;b+=12)e.beginPath(),e.moveTo(-d,b+.5),e.lineTo(d,b+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-d+16,0),e.lineTo(d-16,0),e.stroke(),e.setLineDash([]),De(e,9.5,"600"),e.textBaseline="middle";for(let b=-40;b<=40;b+=5){let S=b%10===0;[0,1].forEach(M=>{let L=(M?180+b:-b)*ve,T=d,A=d-(S?10:5);e.strokeStyle=S?Yt.txt:Yt.dim,e.lineWidth=S?1.4:1,e.beginPath(),e.moveTo(Math.cos(L)*A,Math.sin(L)*A),e.lineTo(Math.cos(L)*T,Math.sin(L)*T),e.stroke(),S&&b&&!M&&(e.fillStyle=Yt.dim,e.textAlign="right",e.fillText(String(Math.abs(b)),Math.cos(L)*(d-13),Math.sin(L)*(d-13)))})}if(e.fillStyle=Yt.dim,De(e,8,"600"),e.textAlign="center",e.fillText("BUG",d*.62,-d*.7),e.fillText("HECK",-d*.62,-d*.7),c!=null){let b=-c*ve;e.strokeStyle=Yt.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,d+3,b-2.5*ve,b+2.5*ve),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(b)*d*.62,Math.sin(b)*d*.62),e.lineTo(Math.cos(b)*(d-12),Math.sin(b)*(d-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-u*ve),e.strokeStyle=Yt.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(d*.64,0),e.lineTo(d-11,0),e.moveTo(-d*.64,0),e.lineTo(-d+11,0),e.stroke(),Ou(e,d*1.22,"#c9d6de"),e.restore();let f=d-24,g=50,_=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,f,g*ve,_*ve),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[g,g+10],[_-10,_]].forEach(([b,S])=>{e.beginPath(),e.arc(0,0,f,b*ve,S*ve),e.stroke()}),e.lineWidth=1,e.strokeStyle=Yt.dim;for(let b=-40;b<=40;b+=10){let S=(90-b)*ve;e.beginPath(),e.moveTo(Math.cos(S)*(f-6),Math.sin(S)*(f-6)),e.lineTo(Math.cos(S)*(f+5),Math.sin(S)*(f+5)),e.stroke()}De(e,8,"600"),e.fillStyle=Yt.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*ve)*(f-15),Math.sin(118*ve)*(f-15)),e.fillText("STB",Math.cos(62*ve)*(f-15),Math.sin(62*ve)*(f-15));let m=Math.max(-44,Math.min(44,h)),p=(90-m)*ve;e.save(),e.translate(Math.cos(p)*f,Math.sin(p)*f),e.rotate(p-Math.PI/2),e.fillStyle=Math.abs(h)>30?Yt.bad:Yt.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",De(e,8,"600"),e.fillStyle=Yt.dim,e.fillText("NICK",0,-d*.56),De(e,17,"600"),e.fillStyle=Yt.txt,e.fillText(Mc(u)+"\xB0",0,-d*.4),De(e,8,"600"),e.fillStyle=Yt.dim,e.fillText("ROLL",0,d*.3),De(e,13,"600"),e.fillStyle=Yt.txt,e.fillText((h>.05?"STB ":h<-.05?"BB ":"")+Math.abs(h).toFixed(1)+"\xB0",0,d*.44),e.restore()}};return l.draw(),l}function Ec(i=260){let{c:t,x:e}=or(i,i),n=i/2,s=i/2,r=i/2-5,a={el:t,draw(o=0,l){o=(o%360+360)%360,e.clearRect(0,0,i,i),Sc(e,n,s,r),e.save(),e.translate(n,s);let h=r-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,h-13,0,7),e.stroke(),e.save(),e.rotate(-o*ve),e.textAlign="center",e.textBaseline="middle";for(let u=0;u<360;u++){let c=u%10===0,d=u%5===0;if(!(!d&&i<200)){if(e.save(),e.rotate(u*ve),e.strokeStyle=c?Yt.txt:d?"#9fb0bc":"#4d606e",e.lineWidth=c?1.4:1,e.beginPath(),e.moveTo(0,-h),e.lineTo(0,-h+(c?9:d?6:3.5)),e.stroke(),u%30===0){let f={0:"N",90:"E",180:"S",270:"W"}[u];f?(De(e,13,"700"),e.fillStyle=u===0?Yt.acc:Yt.txt,e.fillText(f,0,-h+19)):(De(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(u).padStart(3,"0"),0,-h+18))}e.restore()}}if(l!=null&&(e.save(),e.rotate(l*ve),e.fillStyle=Yt.tgt,e.beginPath(),e.moveTo(-7,-h-2),e.lineTo(7,-h-2),e.lineTo(7,-h+5),e.lineTo(0,-h),e.lineTo(-7,-h+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,h-30,0,7),e.stroke(),l!=null){let u=(l-o+540)%360-180;e.strokeStyle=Yt.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,h-30,-Math.PI/2,(-90+u)*ve,u<0),e.stroke()}for(let u=45;u<360;u+=45)e.save(),e.rotate(u*ve),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-h+30),e.lineTo(0,-h+37),e.stroke(),e.restore();e.fillStyle=Yt.acc,e.beginPath(),e.moveTo(0,-h+3),e.lineTo(-6,-h-7),e.lineTo(6,-h-7),e.closePath(),e.fill(),e.fillRect(-.75,-h+2,1.5,34),Fu(e,h*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,h*.38,54,21),e.fill(),e.stroke(),De(e,15,"600"),e.fillStyle=Yt.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(o)%360).padStart(3,"0")+"\xB0",0,h*.38+11),l!=null&&(De(e,8.5,"600"),e.fillStyle=Yt.tgt,e.fillText("SOLL "+String(Math.round((l%360+360)%360)%360).padStart(3,"0")+"\xB0",0,h*.38+31)),e.restore()}};return a.draw(),a}function Tc(i=90,t=260){let{c:e,x:n}=or(i,t);return{el:e,draw(s=0,r=3,a,o){n.clearRect(0,0,i,t);let l=40,h=t-30,u=(h-l)/r;n.fillStyle="#03070a",n.fillRect(0,0,i,t),n.strokeStyle="#1d2a35",n.lineWidth=2,n.strokeRect(1,1,i-2,t-2);let c=44,d=18,f=n.createLinearGradient(0,l,0,h);f.addColorStop(0,"#174b66"),f.addColorStop(1,"#03111a"),n.fillStyle=f,n.fillRect(c,l,d,h-l),n.fillStyle="#4c87a6",n.fillRect(c,l-1,d,2),De(n,9.5,"600"),n.textAlign="right",n.textBaseline="middle",n.lineWidth=1;let g=r<=5?.5:r<=20?2:10;for(let p=0;p*g/2<=r+1e-6;p++){let b=p*g/2,S=l+b*u,M=p%2===0;n.strokeStyle=M?"#9fb0bc":"#4d606e",n.beginPath(),n.moveTo(M?34:38,S),n.lineTo(c,S),n.stroke(),M&&(n.fillStyle=Yt.dim,n.fillText(b.toFixed(g<1?1:0),31,S))}if(o!==void 0&&o<r){let p=l+o*u;n.fillStyle="rgba(224,88,75,.22)",n.fillRect(c,p,d,h-p),n.strokeStyle=Yt.bad,n.setLineDash([3,2]),n.beginPath(),n.moveTo(30,p),n.lineTo(i-4,p),n.stroke(),n.setLineDash([])}let _=a!=null&&a>0;if(_){let p=l+Ja(a,0,r)*u;n.fillStyle=Yt.tgt,n.beginPath(),n.moveTo(c+d+1,p),n.lineTo(c+d+11,p-6),n.lineTo(c+d+11,p+6),n.closePath(),n.fill()}let m=l+Ja(s,0,r)*u;n.fillStyle=Yt.acc,n.fillRect(c-2,m-1,d+4,2),n.beginPath(),n.moveTo(c-2,m),n.lineTo(c-10,m-5),n.lineTo(c-10,m+5),n.closePath(),n.fill(),n.fillStyle="#02060a",n.strokeStyle="#3a4c5a",n.beginPath(),n.rect(6.5,8.5,i-13,22),n.fill(),n.stroke(),De(n,14,"600"),n.fillStyle=Yt.txt,n.textAlign="center",n.fillText(s.toFixed(2)+" m",i/2,20),De(n,8.5,"600"),n.fillStyle=_?Yt.tgt:Yt.dim,n.fillText(_?"\u0394 "+Mc(s-a,2)+" m":"SOLL \u2013",i/2,t-15)}}}var Ja=(i,t,e)=>Math.min(e,Math.max(t,i));function wc(i,t={}){let e=t.w||520,n=t.h||150,{c:s,x:r}=or(e,n),a=t.span||30,o=i.map(()=>[]),l=0;return{el:s,push(u,c){c.forEach((d,f)=>{if(d!==void 0&&!isNaN(d))for(o[f].push([u,d]);o[f].length&&u-o[f][0][0]>a;)o[f].shift()}),l=u},clear(){o.forEach(u=>{u.length=0})},draw(){r.clearRect(0,0,e,n),r.fillStyle=Yt.bg,r.fillRect(0,0,e,n);let u=t.min,c=t.max;if(u===void 0||c===void 0){u=1e9,c=-1e9,o.forEach(g=>g.forEach(_=>{u=Math.min(u,_[1]),c=Math.max(c,_[1])})),u>c&&(u=0,c=1);let f=(c-u)*.1||.5;u-=f,c+=f}r.strokeStyle=Yt.grid,r.lineWidth=1,De(r,9),r.fillStyle=Yt.dim,r.textAlign="left";for(let f=0;f<=4;f++){let g=4+(n-8)*f/4;r.beginPath(),r.moveTo(0,g),r.lineTo(e,g),r.stroke(),r.fillText((c-(c-u)*f/4).toFixed(t.dec??1),3,g-2)}i.forEach((f,g)=>{r.strokeStyle=f.color,r.lineWidth=1.5,r.beginPath();let _=!0;o[g].forEach(m=>{let p=e-(l-m[0])/a*e,b=4+(n-8)*(1-(m[1]-u)/(c-u||1));_?(r.moveTo(p,b),_=!1):r.lineTo(p,b)}),r.stroke()});let d=e-6;r.textAlign="right",De(r,10);for(let f=i.length-1;f>=0;f--){r.fillStyle=i[f].color;let g=i[f].name+(o[f].length?" "+o[f][o[f].length-1][1].toFixed(t.dec??1):"");r.fillText(g,d,12),d-=r.measureText(g).width+12}}}}function Ze(i,t,e,n,s={}){let r=R("div",{class:"bar-fill"}),a=R("span",{class:"bar-val"},"\u2013");return{el:R("div",{class:"bar"},R("span",{class:"bar-l"},i),R("div",{class:"bar-t"},r,s.mid?R("i",{class:"bar-mid"}):null),a),set(l,h,u){if(l===void 0||isNaN(l)){a.textContent="\u2013",r.style.width="0";return}let c=(l-t)/(e-t);if(s.mid){let d=(0-t)/(e-t);r.style.left=Math.min(c,d)*100+"%",r.style.width=Math.abs(c-d)*100+"%"}else r.style.left="0",r.style.width=Ja(c,0,1)*100+"%";r.style.background=u||"",a.textContent=h??l.toFixed(s.dec??0)+(n?" "+n:"")}}}var On=i=>{let t=R("span",{class:"chip"},i);return{el:t,set(e,n){t.textContent=e===void 0?i:e,t.className="chip "+(n||"")}}},ae=(i,t)=>{let e=R("b",null,"\u2013"),n=R("div",{class:"stat"},R("span",null,i),R("div",null,e,t?R("small",null,t):null));return{el:n,set(s,r){e.textContent=s,n.className="stat "+(r||"")}}};async function Me(i,t,e){if(!Y.connected)return re("Nicht verbunden","bad"),null;let n=await Y.link.cmd(i,e);return n.ok?t&&re(t,"ok"):re(`${i}: ${n.text}`,"bad"),n}var cr=new Map;setInterval(()=>{if(!(!Y.connected||Y.link.q.length>2))for(let[i,t]of cr)Y.link.cmd(t,800),cr.delete(i)},50);var lr=(i,t)=>cr.set(i,t);async function ja(i,t){let e=await Me(`SET ${i} ${t}`);return e&&e.ok&&(Y.par[i]=+t,ye.emit("par")),e}async function bs(){let i=await Y.link.cmd("GET",4e3);return i.ok&&Array.isArray(i.data)&&(Y.parList=i.data,Y.par={},i.data.forEach(t=>{Y.par[t.k]=t.v}),ye.emit("par")),i}var _e=(i,...t)=>R("section",{class:"card"},R("h3",null,i),...t),ge=(i,t,e="")=>R("button",{class:"btn "+e,onclick:t},i),tn=i=>R("p",{class:"note"},i);function Ac(i){let t=R("div",{class:"kv"});return{el:R("div",{class:"page"},R("div",{class:"hero"},R("div",null,R("h1",null,"FATHOM Konfigurator"),R("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB Kabel oder \xFCber das WLAN des Boots verbinden.")),R("div",{class:"hero-btns"},ge("Verbinden (USB)",()=>i.connect(),"primary big"),ge("Per WLAN verbinden",()=>i.wifi(),"big"),ge("Demo Boot starten",()=>i.demo(),"big"))),R("div",{class:"grid2"},_e("Verbindung",t,"serial"in navigator?tn("USB braucht Chrome oder Edge am PC (Web Serial)."):R("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),R("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen nur \xFCber Crossfire oder USB."),R("div",{class:"row"},ge("Boot neu starten",()=>Me("REBOOT","Neustart")),ge("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&Me("BOOTSEL")}))),_e("Erste Inbetriebnahme",R("ol",{class:"steps"},R("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),R("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),R("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),R("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),R("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),R("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let n=Y.info;t.innerHTML="",[["Status",Y.connected?Y.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",n?`${n.fw} ${n.ver}`:"\u2013"],["Hardware",n?n.hw:"\u2013"],["Parameter",n?n.params:"\u2013"],["Max Missionsschritte",n?n.maxsteps:"\u2013"]].forEach(([s,r])=>t.append(R("span",null,s),R("b",null,String(r))))}}}function Rc(){let i=bc(290),t=Ec(290),e=Tc(96,290),n={pitch:ae("Nick","\xB0"),roll:ae("Roll","\xB0"),yaw:ae("Kurs","\xB0"),depth:ae("Tiefe","m"),temp:ae("Wasser","\xB0C"),vb:ae("Akku","V"),fill:ae("Ballast","%"),thr:ae("Vortrieb","%"),spd:ae("Fahrt ca.","m/s")},s={arm:On("DISARMED"),mode:On("MANUAL"),rc:On("RC"),imu:On("IMU"),dep:On("Tiefe"),leak:On("Leck"),tst:On("Test"),mis:On("Mission")},r={rud:Ze("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:Ze("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:Ze("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:Ze("Motor",-100,100,"%",{mid:!0}),pmp:Ze("Pumpe",-100,100,"%",{mid:!0}),fill:Ze("Ballast F\xFCllung",0,100,"%"),vb:Ze("Akku 2S",6,8.4,"V",{dec:2}),lk:Ze("Leckage",0,1,"",{dec:2})},a=R("div",{class:"alert",style:{display:"none"}}),o=R("div",{class:"log"}),l=R("div",{class:"kv"}),h=R("div",{class:"page dash"},a,R("div",{class:"chips"},Object.values(s).map(c=>c.el)),R("div",{class:"instr"},R("div",{class:"ins"},R("div",{class:"cap"},"Lage"),i.el),R("div",{class:"ins"},R("div",{class:"cap"},"Kurs"),t.el),R("div",{class:"ins"},R("div",{class:"cap"},"Tiefe"),e.el)),R("div",{class:"stats"},Object.values(n).map(c=>c.el)),R("div",{class:"grid2"},_e("Ausg\xE4nge",Object.values(r).map(c=>c.el)),_e("Mission und Ziele",l,R("h4",null,"Ereignisse"),o))),u=()=>{o.innerHTML="",Y.events.slice(-40).reverse().forEach(c=>o.append(R("div",{class:"ev "+c.kind},R("time",null,c.t.toTimeString().slice(0,8)),c.m)))};return ye.on("ev",u),{el:h,show:u,update(c){i.draw(c.att[0],c.att[1],c.mis.run||c.m!=="MANUAL"?c.tg.p:void 0),t.draw(c.att[2],c.m==="MANUAL"?void 0:c.tg.h),e.draw(c.d,Math.max(Y.get("lim.depth",3)*1.15,1),c.m==="DEPTH"||c.m==="MISSION"?c.tg.d:void 0,Y.get("lim.depth",3)),n.pitch.set(Tt(c.att[1])),n.roll.set(Tt(c.att[0])),n.yaw.set(Tt(c.att[2],0).padStart(3,"0")),n.depth.set(Tt(c.d,2)),n.temp.set(Tt(c.tmp)),n.fill.set(Tt(c.fill,0)),n.thr.set(Tt(c.out.thr*100,0)),n.vb.set(Tt(c.vb,2),c.vb<Y.get("bat.crit",6.4)?"bad":c.vb<Y.get("bat.warn",7)?"warn":""),n.spd.set(Tt(Math.abs(c.out.thr*100)*Y.get("spd.ms_per_pct",.014),2)),s.arm.set(c.arm?"ARMED":"DISARMED",c.arm?"bad":""),s.mode.set(c.m,c.m==="FAILSAFE"?"bad":c.m==="MISSION"?"acc":""),s.rc.set(c.rcok?`RC ${c.rssi} dBm`:"RC fehlt",c.rcok?"ok":"warn"),s.imu.set(c.ok[0]?"IMU ok":"IMU Fehler",c.ok[0]?"ok":"bad"),s.dep.set(c.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",c.ok[1]?"ok":"bad"),s.leak.set(c.lk>Y.get("leak.threshold",.35)?"LECKAGE":"trocken",c.lk>Y.get("leak.threshold",.35)?"bad":"ok"),s.tst.set(c.tst?"TESTMODUS":"Test aus",c.tst?"warn":""),s.mis.set(c.mis.run?`Mission ${c.mis.i+1}/${c.mis.n} ${c.mis.ty}`:"Mission aus",c.mis.run?"acc":""),r.rud.set(c.out.r,Tt(c.out.r)+" \xB0 / "+c.out.us[0]+" \xB5s"),r.stn.set(c.out.s,Tt(c.out.s)+" \xB0 / "+c.out.us[1]+" \xB5s"),r.bow.set(c.out.b,Tt(c.out.b)+" \xB0 / "+c.out.us[2]+" \xB5s"),r.thr.set(c.out.thr*100,Tt(c.out.thr*100,0)+" % / "+c.out.mu+" \xB5s",c.out.thr<0?Be.warn:""),r.pmp.set(c.out.pmp*100,Tt(c.out.pmp*100,0)+" %"),r.fill.set(c.fill,Tt(c.fill,0)+" %"),r.vb.set(c.vb,Tt(c.vb,2)+" V",c.vb<Y.get("bat.warn",7)?Be.warn:Be.ok),r.lk.set(c.lk,Tt(c.lk,2),c.lk>Y.get("leak.threshold",.35)?Be.bad:Be.ok);let d=c.fs?"FAILSAFE: "+c.fs:c.w;a.style.display=d?"block":"none",a.textContent=d,l.innerHTML="",[["Ziel Tiefe",Tt(c.tg.d,2)+" m"],["Ziel Nick",Tt(c.tg.p)+" \xB0"],["Ziel Kurs",Tt(c.tg.h,0)+" \xB0"],["Ziel Vortrieb",Tt(c.tg.t,0)+" %"],["Schritt",c.mis.run?`${c.mis.i+1} von ${c.mis.n} (${c.mis.ty})`:"\u2013"],["Schrittzeit",c.mis.run?Tt(c.mis.t,0)+" s":"\u2013"],["Druck",Tt(c.prs,1)+" mbar"],["Zyklus",c.lp+" \xB5s"]].forEach(([f,g])=>l.append(R("span",null,f),R("b",null,g)))}}}function Cc(){let i=(l,h)=>wc(l,h),t={att:i([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:i([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:i([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:i([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:i([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:i([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=R("div",{class:"kv wide"}),n=R("div",{class:"rcs"}),s=Array.from({length:8},(l,h)=>Ze("CH"+(h+1),1e3,2e3,"\xB5s"));s.forEach(l=>n.append(l.el));let r=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],a=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:R("div",{class:"page"},R("div",{class:"grid2"},_e("Lage",t.att.el),_e("Kurs",t.yaw.el),_e("Gyro (\xB0/s)",t.gyr.el),_e("Tiefe",t.dep.el),_e("Akku",t.pwr.el),_e("Leckage und Ballast",t.lk.el)),R("div",{class:"grid2"},_e("Rohwerte",e),_e("RC Kan\xE4le (Crossfire)",n))),show(){Object.values(t).forEach(l=>l.clear())},update(l){let h=l.t/1e3;t.att.push(h,[l.att[0],l.att[1]]),t.yaw.push(h,[l.att[2],l.m==="MANUAL"?void 0:l.tg.h]),t.gyr.push(h,l.gyr),t.dep.push(h,[l.d,l.m==="DEPTH"||l.m==="MISSION"?l.tg.d:void 0]),t.pwr.push(h,[l.vb]),t.lk.push(h,[l.lk,l.fill/100]),Object.values(t).forEach(u=>u.draw()),e.innerHTML="",[["Druck",Tt(l.prs,1)+" mbar"],["Temperatur",Tt(l.tmp)+" \xB0C"],["Tiefe",Tt(l.d,3)+" m"],["Roll / Nick / Kurs",`${Tt(l.att[0])} / ${Tt(l.att[1])} / ${Tt(l.att[2])} \xB0`],["Gyro",l.gyr.map(u=>Tt(u)).join(" / ")+" \xB0/s"],["Akku",Tt(l.vb,2)+" V"],["Leckage",Tt(l.lk,2)],["IMU Kalibrierung",`Sys ${l.cal[0]} Gyr ${l.cal[1]} Acc ${l.cal[2]} Mag ${l.cal[3]}`],["Zykluszeit",l.lp+" \xB5s"],["Modus",l.m]].forEach(([u,c])=>e.append(R("span",null,u),R("b",null,c))),l.rc.forEach((u,c)=>{let d=r.findIndex(f=>Y.get(f,0)===c+1);s[c].set(u,`${u} \xB5s${d>=0?" \xB7 "+a[d]:""}`,l.rcok?"":Be.dim)})}}}async function Bu(i){if(!Y.connected)return!1;let t=await Y.link.cmd(`TEST ENABLE ${i?1:0}`);return t.ok?!0:(re(i?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function Pc(){let i=R("b",null,"Testmodus aus"),t=R("div",{class:"testbar"},i,R("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=ge("Testmodus einschalten",async()=>{let n=!(Y.tel&&Y.tel.tst);await Bu(n)&&(n||Me("TEST OFF"))},"primary");return t.append(e),{el:t,update(n){i.textContent=n.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(n.tst?" on":""),e.textContent=n.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Ic(){let i=Pc(),t={d:ae("Tiefe","m"),p:ae("Druck","mbar"),t:ae("Temp","\xB0C"),pi:ae("Nick","\xB0"),ro:ae("Roll","\xB0"),yw:ae("Kurs","\xB0"),vb:ae("Akku","V"),lk:ae("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((o,l)=>Ze(o,0,3,"",{dec:0})),n=R("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),s=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([o,l,h])=>{let u=R("b",null,"1500 \xB5s"),c=R("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{u.textContent=c.value+" \xB5s",lr("sv"+h,`TEST SERVO ${h} ${c.value}`)}}),d=async(g,_)=>{let m=await ja(`servo.${l}.${g}`,c.value);m&&m.ok&&re(`${o} ${_} = ${c.value} \xB5s`,"ok")},f=R("input",{type:"checkbox",onchange:()=>ja(`servo.${l}.rev`,f.checked?1:0)});return{el:R("div",{class:"sv"},R("div",{class:"svh"},R("b",null,o),u),c,R("div",{class:"row"},ge("Mitte",()=>d("center","Mitte")),ge("Min",()=>d("min","Min")),ge("Max",()=>d("max","Max")),ge("Zur\xFCck auf Mitte",()=>{c.value=Y.get(`servo.${l}.center`,1500),c.oninput()}),R("label",{class:"chk"},f," umkehren"))),sync(){f.checked=Y.get(`servo.${l}.rev`,0)>.5}}}),r=R("div",{class:"page"},i.el,R("div",{class:"stats"},Object.values(t).map(o=>o.el)),R("div",{class:"grid2"},_e("1  Tiefensensor",tn("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),R("div",{class:"row"},ge("Tiefe auf Null setzen",()=>Me("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),_e("2  Lage Null",tn("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),R("div",{class:"row"},ge("Lage als Null setzen",()=>Me("CAL LEVEL","Lage Null gesetzt"),"primary")),tn("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),_e("3  IMU Kalibrierung (BNO055)",e.map(o=>o.el),tn("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),R("div",{class:"row"},ge("Profil im BNO055 sichern",()=>Me("CAL IMUSAVE","IMU Profil gespeichert")))),_e("4  Batteriespannung",tn("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),R("div",{class:"row"},n,ge("Abgleichen",()=>{+n.value>4?Me(`CAL VBAT ${n.value}`,"Batterie abgeglichen"):re("Spannung eintragen","warn")},"primary"))),_e("5  Servos: Mitte, Endpunkte, Richtung",tn("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),s.map(o=>o.el),tn("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),_e("6  Leckage Sensor",tn("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),R("div",{class:"row"},ge("Sensoren Seite \xF6ffnen",()=>ye.emit("goto","sensors")))))),a=!1;return ye.on("par",()=>s.forEach(o=>o.sync())),{el:r,show(){s.forEach(o=>o.sync())},hide(){},update(o){i.update(o),t.d.set(Tt(o.d,3)),t.p.set(Tt(o.prs,1)),t.t.set(Tt(o.tmp)),t.pi.set(Tt(o.att[1])),t.ro.set(Tt(o.att[0])),t.yw.set(Tt(o.att[2],0)),t.vb.set(Tt(o.vb,2)),t.lk.set(Tt(o.lk,2),o.lk>Y.get("leak.threshold",.35)?"bad":""),o.cal.forEach((l,h)=>e[h].set(l,l+" von 3",l>=3?Be.ok:l>=2?Be.warn:Be.bad)),a||(a=!0,s.forEach(l=>l.sync()))}}}function Lc(){let i=Pc(),t=null,e=()=>Y.get("lim.deflect",25),n=()=>Y.get("servo.us_per_deg",10),s=(v,x)=>Math.round(Y.get(`servo.${v}.center`,1500)+(Y.get(`servo.${v}.rev`,0)>.5?-1:1)*x*n()),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([v,x,C])=>{let B=R("b",null,"0.0 \xB0"),F=R("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),H=()=>{let K=Ni(+F.value,-e(),e());B.textContent=Tt(K)+" \xB0 / "+s(x,K)+" \xB5s",lr("ts"+C,`TEST SERVO ${C} ${s(x,K)}`)};return F.oninput=H,F.addEventListener("dblclick",()=>{F.value=0,H()}),{name:v,key:x,ch:C,sl:F,send:H,el:R("div",{class:"sv"},R("div",{class:"svh"},R("b",null,v),B),F)}}),a=ge("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)";return}let v=performance.now();a.textContent="Stopp Durchlauf",t=setInterval(()=>{let x=(performance.now()-v)/1e3;if(x>10){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)",r.forEach(C=>{C.sl.value=0,C.send()});return}r.forEach((C,B)=>{C.sl.value=Math.sin(x*2*Math.PI*.5+B*1.2)*e(),C.send()})},60)}),o=R("input",{type:"checkbox"}),l=R("input",{type:"checkbox"}),h=R("b",null,"0 %"),u=R("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),c=R("input",{type:"checkbox"}),d=0,f=()=>{o.checked||(u.value=0,d=0);let v=l.checked?100:Y.get("lim.throttle",35);d=Ni(+u.value,-v,v),u.value=d,h.textContent=d+" %"+(d?" \u2192 "+Math.round(Math.abs(d)*Y.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),lr("tm",`TEST MOTOR ${d}`)};u.oninput=f,["pointerup","touchend"].forEach(v=>u.addEventListener(v,()=>{c.checked||(u.value=0,f())}));let g=()=>{u.value=0,d=0,m.value=0,p=0,h.textContent="0 %",_.textContent="0 %",cr.clear(),Y.connected&&(Y.link.q.length=0,Y.link.cmd("TEST OFF",1500)),r.forEach(v=>{v.sl.value=0,v.send()})},_=R("b",null,"0 %"),m=R("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),p=0,b=()=>{p=+m.value,_.textContent=p+" %"+(p>0?" f\xFCllen":p<0?" leeren":""),lr("tp",`TEST PUMP ${p}`)};m.oninput=b,["pointerup","touchend"].forEach(v=>m.addEventListener(v,()=>{m.value=0,b()}));let S=null,M=()=>{S=setInterval(()=>{Y.connected&&(d&&Y.link.cmd(`TEST MOTOR ${d}`,800),p&&Y.link.cmd(`TEST PUMP ${p}`,800))},400)},L=Ze("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),T=Ze("Motor Ausgang",-100,100,"%",{mid:!0}),A=ge("STOPP ALLES",g,"stop big");return window.addEventListener("keydown",v=>{v.key==="Escape"&&Y.tab==="tests"&&g()}),{el:R("div",{class:"page"},i.el,R("div",{class:"grid2"},_e("Servos",tn("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),r.map(v=>v.el),R("div",{class:"row"},a)),_e("Motor",R("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),R("label",{class:"chk"},o," Propeller ist frei, Motor freigeben"),R("label",{class:"chk"},c," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),R("label",{class:"chk"},l," Gaslimit aufheben (nur Pr\xFCfstand)"),R("div",{class:"svh"},R("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),h),u,T.el),_e("Ballastpumpe",tn("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. H Br\xFCcke (DRV8833 oder L9110S) n\xF6tig f\xFCr beide Richtungen."),R("div",{class:"svh"},R("b",null,"Pumpe"),_),m,L.el),_e("Notaus",A,tn("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){M(),r.forEach(v=>v.send())},hide(){clearInterval(S),g()},update(v){i.update(v),T.set(v.out.thr*100,Tt(v.out.thr*100,0)+" % / "+v.out.mu+" \xB5s"),L.set(v.fill,Tt(v.fill,0)+" %")},stopAll:g}}function Dc(){let i=R("div"),t=R("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>n()}),e=new Set,n=()=>{i.innerHTML="";let a=Y.parList.length?Y.parList:wn.map(h=>({k:h.k,v:h.d,d:h.d,mn:h.mn,mx:h.mx,u:h.u,g:h.g,h:h.h})),o=t.value.trim().toLowerCase(),l={};a.filter(h=>!o||(h.k+" "+h.h+" "+h.g).toLowerCase().includes(o)).forEach(h=>(l[h.g]=l[h.g]||[]).push(h)),Object.entries(l).forEach(([h,u])=>{let c=R("table",{class:"ptable"},R("thead",null,R("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(f=>R("th",null,f))))),d=R("tbody");u.forEach(f=>{let g=Y.par[f.k]!==void 0?Y.par[f.k]:f.v,_=R("input",{class:"pin"+(g!==f.d?" mod":""),type:"number",step:"any",value:g,min:f.mn,max:f.mx,disabled:!Y.connected,onchange:async()=>{let m=Ni(+_.value,f.mn,f.mx);_.value=m;let p=await ja(f.k,m);p&&p.ok&&(_.classList.toggle("mod",m!==f.d),e.add(f.k),s.classList.add("primary"))}});d.append(R("tr",null,R("td",{class:"mono"},f.k),R("td",null,_),R("td",{class:"dim"},f.u),R("td",{class:"dim",onclick:()=>{_.value=f.d,_.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},f.d),R("td",{class:"dim"},`${f.mn} bis ${f.mx}`),R("td",null,f.h)))}),c.append(d),i.append(_e(h,c))})},s=ge("Im Boot speichern",async()=>{let a=await Me("SAVE","Parameter im Flash gespeichert");a&&a.ok&&(e.clear(),s.classList.remove("primary"))}),r=R("div",{class:"page"},R("div",{class:"toolbar"},t,ge("Neu laden",async()=>{await bs()}),s,ge("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await Me("DEFAULTS","Standardwerte gesetzt"),await bs())}),ge("Export",()=>$s("fathom_parameter.json",JSON.stringify(Object.fromEntries(Y.parList.map(a=>[a.k,Y.par[a.k]])),null,1))),ge("Import",async()=>{let a=await Ks(".json");if(a)try{let o=JSON.parse(a),l=0;for(let[h,u]of Object.entries(o))(await Y.link.cmd(`SET ${h} ${u}`)).ok&&l++;re(`${l} Parameter importiert, danach Speichern`,"ok"),await bs()}catch{re("Datei ung\xFCltig","bad")}})),i);return ye.on("par",()=>{Y.tab==="params"&&n()}),ye.on("conn",n),{el:r,show:n,update(){}}}function Uc(){let i=R("div",{class:"term"}),t=R("input",{type:"checkbox"}),e=R("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async u=>{if(u.key==="Enter"&&e.value.trim()){let c=e.value.trim();n.push(c),s=n.length,e.value="",Y.connected?await Y.link.cmd(c,4e3):re("Nicht verbunden","bad")}u.key==="ArrowUp"&&s>0&&(e.value=n[--s]),u.key==="ArrowDown"&&s<n.length&&(e.value=n[++s]||"")}}),n=[],s=0,r=[],a=null,o=(u,c)=>{r.push([u,c]),a||(a=setTimeout(l,100))},l=()=>{a=null;let u=i.scrollTop+i.clientHeight>=i.scrollHeight-30;for(r.forEach(([c,d])=>i.append(R("div",{class:c},d.length>400?d.slice(0,400)+" \u2026":d))),r=[];i.childNodes.length>600;)i.firstChild.remove();u&&(i.scrollTop=i.scrollHeight)};return ye.on("tx",u=>o("tx","> "+u)),ye.on("rx",u=>{u.startsWith("T {")&&!t.checked||o(u.startsWith("ERR")?"rx err":"rx",u)}),{el:R("div",{class:"page"},R("div",{class:"toolbar"},R("label",{class:"chk"},t," Telemetrie anzeigen"),ge("Leeren",()=>{i.innerHTML=""})),i,e),show(){i.scrollTop=i.scrollHeight},update(){}}}var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,Nc=1,zu=2;var Zh=1,Vu=2,Hn=3,ci=0,Oe=1,sn=2,oi=0,es=1,Oc=2,Fc=3,Bc=4,Hu=5,Mi=100,Gu=101,Wu=102,Xu=103,qu=104,Yu=200,Zu=201,$u=202,Ku=203,Do=204,Uo=205,Ju=206,ju=207,Qu=208,td=209,ed=210,nd=211,id=212,sd=213,rd=214,No=0,Oo=1,Fo=2,as=3,Bo=4,ko=5,zo=6,Vo=7,$h=0,ad=1,od=2,li=0,ld=1,cd=2,hd=3,ud=4,dd=5,fd=6,pd=7;var Kh=300,os=301,ls=302,Ho=303,Go=304,Ca=306,Wo=1e3,bi=1001,Xo=1002,vn=1003,md=1004;var hr=1005;var rn=1006,Qa=1007;var Ei=1008;var $n=1009,Jh=1010,jh=1011,Os=1012,$l=1013,Ti=1014,Wn=1015,Xs=1016,Kl=1017,Jl=1018,cs=1020,Qh=35902,tu=1021,eu=1022,xn=1023,nu=1024,iu=1025,ns=1026,hs=1027,su=1028,jl=1029,ru=1030,Ql=1031;var tc=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,qo=35840,Yo=35841,Zo=35842,$o=35843,Ko=36196,Jo=37492,jo=37496,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,Zr=36492,fl=36494,pl=36495,au=36283,ml=36284,gl=36285,_l=36286;var $r=2300,xl=2301,to=2302,kc=2400,zc=2401,Vc=2402;var gd=3200,_d=3201;var ou=0,xd=1,ai="",nn="srgb",ps="srgb-linear",Pa="linear",ne="srgb";var Oi=7680;var Hc=519,vd=512,yd=513,Md=514,lu=515,Sd=516,bd=517,Ed=518,Td=519,vl=35044;var Gc="300 es",Xn=2e3,Kr=2001,Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,is=Math.PI/180,Fs=180/Math.PI;function Yn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ad(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Ud(i){return i*(.5-Math.random())}function Nd(i){i!==void 0&&(Wc=i);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*is}function Fd(i){return i*Fs}function Bd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),u=a((t+n)/2),c=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*c,l*d,o*h);break;case"YZY":i.set(l*d,o*u,l*c,o*h);break;case"ZXZ":i.set(l*c,l*d,o*u,o*h);break;case"XZX":i.set(o*u,l*g,l*f,o*h);break;case"YXY":i.set(l*f,o*u,l*g,o*h);break;case"ZYZ":i.set(l*g,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ia={DEG2RAD:is,RAD2DEG:Fs,generateUUID:Yn,clamp:Ae,euclideanModulo:ec,mapLinear:wd,inverseLerp:Ad,lerp:Us,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Dd,randFloatSpread:Ud,seededRandom:Nd,degToRad:Od,radToDeg:Fd,isPowerOfTwo:Bd,ceilPowerOfTwo:kd,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Vd,normalize:ee,denormalize:_n},wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],S=s[4],M=s[7],L=s[2],T=s[5],A=s[8];return r[0]=a*_+o*b+l*L,r[3]=a*m+o*S+l*T,r[6]=a*p+o*M+l*A,r[1]=h*_+u*b+c*L,r[4]=h*m+u*S+c*T,r[7]=h*p+u*M+c*A,r[2]=d*_+f*b+g*L,r[5]=d*m+f*S+g*T,r[8]=d*p+f*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*a-o*h,d=o*l-u*r,f=h*r-a*l,g=e*c+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=c*_,t[1]=(s*h-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},eo=new Bt;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=Jr("canvas");return i.style.display="block",i}var Xc={};function Ls(i){i in Xc||(Xc[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qc=[.64,.33,.3,.6,.15,.06],Yc=[.2126,.7152,.0722],Zc=[.3127,.329],$c=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[ps]:{primaries:qc,whitePoint:Zc,transfer:Pa,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:Yc,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:qc,whitePoint:Zc,transfer:ne,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:Yc,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});var Fi,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Jr("canvas")),Fi.width=t.width,Fi.height=t.height;let n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,je=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=rn,a=Ei,o=xn,l=$n,h=i.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Yn(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Kh;je.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,M=(f+1)/2,L=(p+1)/2,T=(u+d)/4,A=(c+_)/4,P=(g+m)/4;return S>M&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(c-_)*(c-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(c-_)/b,this.z=(d-u)/b,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(c!==_||l!==d||h!==f||u!==g){let m=1-o,p=l*d+h*f+u*g+c*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),T=Math.atan2(L,p*b);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}let M=o*b;if(l=l*m+d*M,h=h*m+f*M,u=u*m+g*M,c=c*m+_*M,m===1-o){let L=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=L,h*=L,u*=L,c*=L}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],c=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*c+l*f-h*d,t[e+1]=l*g+u*d+h*c-o*f,t[e+2]=h*g+u*f+o*d-l*c,t[e+3]=u*g-o*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),c=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"YXZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"ZXY":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"ZYX":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"YZX":this._x=d*u*c+h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c-d*f*g;break;case"XZY":this._x=d*u*c-h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+o+c;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>c){let f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>c){let f=2*Math.sqrt(1+o-n-c);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+c-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*h+a*c-o*u,this.y=n+l*u+o*h-r*c,this.z=s+l*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new I,Jc=new yn,an=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),dr.subVectors(this.max,Es),Bi.subVectors(t.a,Es),ki.subVectors(t.b,Es),zi.subVectors(t.c,Es),ti.subVectors(ki,Bi),ei.subVectors(zi,ki),pi.subVectors(Bi,zi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-pi.z,pi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,pi.z,0,-pi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-pi.y,pi.x,0];return!so(e,Bi,ki,zi,dr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Bi,ki,zi,dr))?!1:(fr.crossVectors(ti,ei),e=[fr.x,fr.y,fr.z],so(e,Bi,ki,zi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Fn=[new I,new I,new I,new I,new I,new I,new I,new I],fn=new I,ur=new an,Bi=new I,ki=new I,zi=new I,ti=new I,ei=new I,pi=new I,Es=new I,dr=new I,fr=new I,mi=new I;function so(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),h=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var Zd=new an,Ts=new I,ro=new I,Mn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(ro)),this.expandByPoint(Ts.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new I,ao=new I,pr=new I,ni=new I,oo=new I,mr=new I,lo=new I,wi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=ni.dot(this.direction),l=-ni.dot(pr),h=ni.lengthSq(),u=Math.abs(1-a*a),c,d,f,g;if(u>0)if(c=a*l-o,d=a*o-l,g=r*u,c>=0)if(d>=-g)if(d<=g){let _=1/u;c*=_,d*=_,f=c*(c+a*d+2*o)+d*(a*c+d+2*l)+h}else d=r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-a*r+o)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(a*r+o)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=a>0?-r:r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(ao).addScaledVector(pr,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(o=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),mr.subVectors(n,t),lo.crossVectors(oo,mr);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);let l=o*this.direction.dot(mr.crossVectors(ni,mr));if(l<0)return null;let h=o*this.direction.dot(oo.cross(ni));if(h<0||l+h>a)return null;let u=-o*ni.dot(lo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-o*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*c,g=h*u,_=h*c;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*c,g=h*u,_=h*c;e[0]=d-_*o,e[4]=-a*c,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*c,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=_-d*c,e[8]=g*c+f,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=f*c+g,e[10]=d-_*c}else if(t.order==="XZY"){let d=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+_,e[5]=a*u,e[9]=f*c-g,e[2]=g*c-f,e[6]=o*u,e[10]=_*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Kd)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ii.crossVectors(n,$e),ii.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ii.crossVectors(n,$e)),ii.normalize(),gr.crossVectors($e,ii),s[0]=ii.x,s[4]=gr.x,s[8]=$e.x,s[1]=ii.y,s[5]=gr.y,s[9]=$e.y,s[2]=ii.z,s[6]=gr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],M=n[11],L=n[15],T=s[0],A=s[4],P=s[8],v=s[12],x=s[1],C=s[5],B=s[9],F=s[13],H=s[2],K=s[6],G=s[10],tt=s[14],W=s[3],rt=s[7],lt=s[11],ct=s[15];return r[0]=a*T+o*x+l*H+h*W,r[4]=a*A+o*C+l*K+h*rt,r[8]=a*P+o*B+l*G+h*lt,r[12]=a*v+o*F+l*tt+h*ct,r[1]=u*T+c*x+d*H+f*W,r[5]=u*A+c*C+d*K+f*rt,r[9]=u*P+c*B+d*G+f*lt,r[13]=u*v+c*F+d*tt+f*ct,r[2]=g*T+_*x+m*H+p*W,r[6]=g*A+_*C+m*K+p*rt,r[10]=g*P+_*B+m*G+p*lt,r[14]=g*v+_*F+m*tt+p*ct,r[3]=b*T+S*x+M*H+L*W,r[7]=b*A+S*C+M*K+L*rt,r[11]=b*P+S*B+M*G+L*lt,r[15]=b*v+S*F+M*tt+L*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*c-s*h*c-r*o*d+n*h*d+s*o*f-n*l*f)+_*(+e*l*f-e*h*d+r*a*d-s*a*f+s*h*u-r*l*u)+m*(+e*h*c-e*o*f-r*a*c+n*a*f+r*o*u-n*h*u)+p*(-s*o*u-e*l*c+e*o*d+s*a*c-n*a*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=c*m*h-_*d*h+_*l*f-o*m*f-c*l*p+o*d*p,S=g*d*h-u*m*h-g*l*f+a*m*f+u*l*p-a*d*p,M=u*_*h-g*c*h+g*o*f-a*_*f-u*o*p+a*c*p,L=g*c*l-u*_*l-g*o*d+a*_*d+u*o*m-a*c*m,T=e*b+n*S+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=b*A,t[1]=(_*d*r-c*m*r-_*s*f+n*m*f+c*s*p-n*d*p)*A,t[2]=(o*m*r-_*l*r+_*s*h-n*m*h-o*s*p+n*l*p)*A,t[3]=(c*l*r-o*d*r-c*s*h+n*d*h+o*s*f-n*l*f)*A,t[4]=S*A,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*h+e*m*h+a*s*p-e*l*p)*A,t[7]=(a*d*r-u*l*r+u*s*h-e*d*h-a*s*f+e*l*f)*A,t[8]=M*A,t[9]=(g*c*r-u*_*r-g*n*f+e*_*f+u*n*p-e*c*p)*A,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*c*r-u*n*h+e*c*h+a*n*f-e*o*f)*A,t[12]=L*A,t[13]=(u*_*s-g*c*s+g*n*d-e*_*d-u*n*m+e*c*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*c*s-u*o*s+u*n*l-e*c*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,c=o+o,d=r*h,f=r*u,g=r*c,_=a*u,m=a*c,p=o*c,b=l*h,S=l*u,M=l*c,L=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+M)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let h=1/r,u=1/a,c=1/o;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=c,pn.elements[9]*=c,pn.elements[10]*=c,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Xn){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),c=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Xn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Kr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn){let l=this.elements,h=1/(e-t),u=1/(n-s),c=1/(a-r),d=(e+t)*h,f=(n+s)*u,g,_;if(o===Xn)g=(a+r)*c,_=-2*c;else if(o===Kr)g=r*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new I,pn=new he,$d=new I(0,0,0),Kd=new I(1,1,1),ii=new I,gr=new I,$e=new I,jc=new he,Qc=new yn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],c=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jd=0,th=new I,Hi=new yn,kn=new he,_r=new I,ws=new I,jd=new I,Qd=new yn,eh=new I(1,0,0),nh=new I(0,1,0),ih=new I(0,0,1),sh={type:"added"},tf={type:"removed"},Gi={type:"childadded",child:null},co={type:"childremoved",child:null},Re=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new An,n=new yn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Bt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ws,_r,this.up):kn.lookAt(_r,ws,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(kn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new I,zn=new I,ho=new I,Vn=new I,Wi=new I,Xi=new I,rh=new I,uo=new I,fo=new I,po=new I,mo=new ie,go=new ie,_o=new ie,Gn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),zn.subVectors(n,e),ho.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(zn),l=mn.dot(ho),h=zn.dot(zn),u=zn.dot(ho),c=a*h-o*o;if(c===0)return r.set(0,0,0),null;let d=1/c,f=(h*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),zn.subVectors(t,e),mn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),uo.subVectors(t,n);let l=Wi.dot(uo),h=Xi.dot(uo);if(l<=0&&h<=0)return e.copy(n);fo.subVectors(t,s);let u=Wi.dot(fo),c=Xi.dot(fo);if(u>=0&&c<=u)return e.copy(s);let d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);po.subVectors(t,r);let f=Wi.dot(po),g=Xi.dot(po);if(g>=0&&f<=g)return e.copy(r);let _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Xi,o);let m=u*g-f*c;if(m<=0&&c-u>=0&&f-g>=0)return rh.subVectors(r,s),o=(c-u)/(c-u+(f-g)),e.copy(s).addScaledVector(rh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},xr={h:0,s:0,l:0};function xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=ec(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xo(a,r,t+1/3),this.g=xo(a,r,t),this.b=xo(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return $t.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ae(Ne.r*255,0,255))*65536+Math.round(Ae(Ne.g*255,0,255))*256+Math.round(Ae(Ne.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=nn){$t.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(xr);let n=Us(si.h,xr.h,e),s=Us(si.s,xr.s,e),r=Us(si.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Vt;Vt.NAMES=hu;var ef=0,Rn=class extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Yn(),this.name="",this.blending=es,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Uo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},on=class extends Rn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new I,vr=new wt,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var ea=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var na=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},nf=0,en=new he,vo=new Re,qi=new I,Ke=new an,As=new an,we=new I,me=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?na:ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ke.min,As.min),Ke.expandByPoint(we),we.addVectors(Ke.max,As.max),Ke.expandByPoint(we)):(Ke.expandByPoint(As.min),Ke.expandByPoint(As.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)we.fromBufferAttribute(o,h),l&&(qi.fromBufferAttribute(t,h),we.add(qi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let h=new I,u=new I,c=new I,d=new wt,f=new wt,g=new wt,_=new I,m=new I;function p(P,v,x){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),u.sub(h),c.sub(h),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(C),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(_),o[v].add(_),o[x].add(_),l[P].add(m),l[v].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,v=b.length;P<v;++P){let x=b[P],C=x.start,B=x.count;for(let F=C,H=C+B;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new I,M=new I,L=new I,T=new I;function A(P){L.fromBufferAttribute(s,P),T.copy(L);let v=o[P];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),M.crossVectors(T,v);let C=M.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,v=b.length;P<v;++P){let x=b[P],C=x.start,B=x.count;for(let F=C,H=C+B;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,h=new I,u=new I,c=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new Je(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){let d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){let f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new he,gi=new wi,yr=new Mn,oh=new I,Mr=new I,Sr=new I,br=new I,yo=new I,Er=new I,lh=new I,Tr=new I,ce=class extends Re{constructor(t=new me,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],c=r[l];u!==0&&(yo.fromBufferAttribute(c,t),a?Er.addScaledVector(yo,u):Er.addScaledVector(yo.sub(e),u))}e.add(Er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(yr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(yr,oh)===null||gi.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(ah.copy(r).invert(),gi.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,L=S;M<L;M+=3){let T=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);s=wr(this,p,t,n,h,u,c,T,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=wr(this,a,t,n,h,u,c,b,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,L=S;M<L;M+=3){let T=M,A=M+1,P=M+2;s=wr(this,p,t,n,h,u,c,T,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,S=m+1,M=m+2;s=wr(this,a,t,n,h,u,c,b,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sf(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Tr);return h<e.near||h>e.far?null:{distance:h,point:Tr.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Mr),i.getVertexPosition(l,Sr),i.getVertexPosition(h,br);let u=sf(i,t,e,n,Mr,Sr,br,lh);if(u){let c=new I;Gn.getBarycoord(lh,Mr,Sr,br,c),s&&(u.uv=Gn.getInterpolatedAttribute(s,o,l,h,c,new wt)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,o,l,h,c,new wt)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,l,h,c,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new I,materialIndex:0};Gn.getNormal(Mr,Sr,br,d.normal),u.face=d,u.barycoord=c}return u}var ln=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],c=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(c,2));function g(_,m,p,b,S,M,L,T,A,P,v){let x=M/A,C=L/P,B=M/2,F=L/2,H=T/2,K=A+1,G=P+1,tt=0,W=0,rt=new I;for(let lt=0;lt<G;lt++){let ct=lt*C-F;for(let Dt=0;Dt<K;Dt++){let Wt=Dt*x-B;rt[_]=Wt*b,rt[m]=ct*S,rt[p]=H,h.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=T>0?1:-1,u.push(rt.x,rt.y,rt.z),c.push(Dt/A),c.push(1-lt/P),tt+=1}}for(let lt=0;lt<P;lt++)for(let ct=0;ct<A;ct++){let Dt=d+ct+K*lt,Wt=d+ct+K*(lt+1),Z=d+(ct+1)+K*(lt+1),et=d+(ct+1)+K*lt;l.push(Dt,Wt,et),l.push(Wt,Z,et),W+=6}o.addGroup(f,W,v),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var La={clone:us,merge:ze},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Rn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ia=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new I,ch=new wt,hh=new wt,Ve=class extends ia{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,bl=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let h=new Ve(Yi,Zi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sa=class extends je{constructor(t,e,n,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},El=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:oi});r.uniforms.tEquirect.value=e;let a=new ce(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=rn),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Mo=new I,lf=new I,cf=new Bt,gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Mo.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(Mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Mn,Ar=new I,Bs=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],c=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,d-h,m-f,M-p).normalize(),n[1].setComponents(l+r,d+h,m+f,M+p).normalize(),n[2].setComponents(l+a,d+u,m+g,M+b).normalize(),n[3].setComponents(l-a,d-u,m-g,M-b).normalize(),n[4].setComponents(l-o,d-c,m-_,M-S).normalize(),e===Xn)n[5].setComponents(l+o,d+c,m+_,M+S).normalize();else if(e===Kr)n[5].setComponents(o,c,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hf(i){let t=new WeakMap;function e(o,l){let h=o.array,u=o.usage,c=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,h){let u=l.array,c=l.updateRanges;if(i.bindBuffer(h,o),c.length===0)i.bufferSubData(h,0,u);else{c.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<c.length;f++){let g=c[d],_=c[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,c[d]=_)}c.length=d+1;for(let f=0,g=c.length;f<g;f++){let _=c[f];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Ai=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,c=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let b=p*d-a;for(let S=0;S<h;S++){let M=S*c-r;g.push(M,-b,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let S=b+h*p,M=b+h*(p+1),L=b+1+h*(p+1),T=b+1+h*p;f.push(S,M,T),f.push(M,L,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:uf,alphahash_pars_fragment:df,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:yf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:bf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:If,color_pars_vertex:Lf,color_vertex:Df,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Ff,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:zf,colorspace_fragment:Vf,colorspace_pars_fragment:Hf,envmap_fragment:Gf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:Zf,fog_pars_vertex:$f,fog_fragment:Kf,fog_pars_fragment:Jf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:xp,map_particle_fragment:vp,map_particle_pars_fragment:yp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Vp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:$p,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:tm,specularmap_pars_fragment:em,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:dm,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:xm,distanceRGBA_frag:vm,equirect_vert:ym,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:km,shadow_vert:zm,shadow_frag:Vm,sprite_vert:Hm,sprite_frag:Gm},st={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},He={basic:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([st.lights,st.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};He.physical={uniforms:ze([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Rr={r:0,b:0,g:0},xi=new An,Wm=new he;function Xm(i,t,e,n,s,r,a){let o=new Vt(0),l=r===!0?0:1,h,u,c=null,d=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1,M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),S=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===Ca)?(u===void 0&&(u=new ce(new ln(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:us(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(xi)),u.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,(c!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ce(new Ai(2,2),new cn({name:"BackgroundMaterial",uniforms:us(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,S){b.getRGB(Rr,uu(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m}}function qm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,C,B,F,H){let K=!1,G=c(F,B,C);r!==G&&(r=G,h(r.object)),K=f(x,F,B,H),K&&g(x,F,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(x,C,B,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function c(x,C,B){let F=B.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let K=H[C.id];K===void 0&&(K={},H[C.id]=K);let G=K[F];return G===void 0&&(G=d(l()),K[F]=G),G}function d(x){let C=[],B=[],F=[];for(let H=0;H<e;H++)C[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,C,B,F){let H=r.attributes,K=C.attributes,G=0,tt=B.getAttributes();for(let W in tt)if(tt[W].location>=0){let lt=H[W],ct=K[W];if(ct===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),lt===void 0||lt.attribute!==ct||ct&&lt.data!==ct.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(x,C,B,F){let H={},K=C.attributes,G=0,tt=B.getAttributes();for(let W in tt)if(tt[W].location>=0){let lt=K[W];lt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));let ct={};ct.attribute=lt,lt&&lt.data&&(ct.data=lt.data),H[W]=ct,G++}r.attributes=H,r.attributesNum=G,r.index=F}function _(){let x=r.newAttributes;for(let C=0,B=x.length;C<B;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){let B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),H[x]!==C&&(i.vertexAttribDivisor(x,C),H[x]=C)}function b(){let x=r.newAttributes,C=r.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==x[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function S(x,C,B,F,H,K,G){G===!0?i.vertexAttribIPointer(x,C,B,H,K):i.vertexAttribPointer(x,C,B,F,H,K)}function M(x,C,B,F){_();let H=F.attributes,K=B.getAttributes(),G=C.defaultAttributeValues;for(let tt in K){let W=K[tt];if(W.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){let lt=rt.normalized,ct=rt.itemSize,Dt=t.get(rt);if(Dt===void 0)continue;let Wt=Dt.buffer,Z=Dt.type,et=Dt.bytesPerElement,yt=Z===i.INT||Z===i.UNSIGNED_INT||rt.gpuType===$l;if(rt.isInterleavedBufferAttribute){let at=rt.data,Ct=at.stride,ot=rt.offset;if(at.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)p(W.location+X,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let X=0;X<W.locationSize;X++)m(W.location+X);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let X=0;X<W.locationSize;X++)S(W.location+X,ct/W.locationSize,Z,lt,Ct*et,(ot+ct/W.locationSize*X)*et,yt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)p(W.location+at,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let at=0;at<W.locationSize;at++)S(W.location+at,ct/W.locationSize,Z,lt,ct*et,ct/W.locationSize*at*et,yt)}}else if(G!==void 0){let lt=G[tt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(W.location,lt);break;case 3:i.vertexAttrib3fv(W.location,lt);break;case 4:i.vertexAttrib4fv(W.location,lt);break;default:i.vertexAttrib1fv(W.location,lt)}}}}b()}function L(){P();for(let x in n){let C=n[x];for(let B in C){let F=C[B];for(let H in F)u(F[H].object),delete F[H];delete C[B]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let C=n[x.id];for(let B in C){let F=C[B];for(let H in F)u(F[H].object),delete F[H];delete C[B]}delete n[x.id]}function A(x){for(let C in n){let B=n[C];if(B[x.id]===void 0)continue;let F=B[x.id];for(let H in F)u(F[H].object),delete F[H];delete B[x.id]}}function P(){v(),a=!0,r!==s&&(r=s,h(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Ym(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,c){c!==0&&(i.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function o(h,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let g=0;g<c;g++)f+=u[g];e.update(f,n,1)}function l(h,u,c,d){if(c===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let g=0;for(let _=0;_<c;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Wn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function $m(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let f=c.length!==0||d||n!==0||s;return s=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){let g=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,p=i.get(c);if(!s||g===null||g.length===0||r&&!m)r?u(null):h();else{let b=r?0:n,S=b*4,M=p.clippingState||null;l.value=M,M=u(g,d,S,f);for(let L=0;L!==S;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,g){let _=c!==null?c.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==_;++S,M+=4)a.copy(c[S]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Km(i){let t=new WeakMap;function e(a,o){return o===Ho?a.mapping=os:o===Go&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ho||o===Go)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new El(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ra=class extends ia{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,uh=[.125,.215,.35,.446,.526,.582],Si=20,So=new ra,dh=new Vt,bo=null,Eo=0,To=0,wo=!1,yi=(1+Math.sqrt(5))/2,$i=1/yi,fh=[new I(-yi,$i,0),new I(yi,$i,0),new I(-$i,0,yi),new I($i,0,yi),new I(0,yi,-$i),new I(0,yi,$i),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,Eo,To),this._renderer.xr.enabled=wo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xs,format:xn,colorSpace:ps,depthBuffer:!1},s=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(dh),u.toneMapping=li,u.autoClear=!1;let f=new on({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ce(new ln,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(dh),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));let S=this._cubeSize;Cr(s,b*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,So)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fh[(s-r-1)%fh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new ce(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let p=[],b=0;for(let A=0;A<Si;++A){let P=A/_,v=Math.exp(-P*P/2);p.push(v),A===0?b+=v:A<m&&(b+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[s],L=3*M*(s>S-ts?s-S+ts:0),T=4*(this._cubeSize-M);Cr(e,L,T,3*M,2*M),l.setRenderTarget(e),l.render(c,So)}};function Jm(i){let t=[],e=[],n=[],s=i,r=i-ts+1+uh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ts?l=uh[a-i+ts-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,v=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(v,_*g*T),S.set(d,m*g*T);let x=[T,T,T,T,T,T];M.set(x,p*g*T)}let L=new me;L.setAttribute("position",new Je(b,_)),L.setAttribute("uv",new Je(S,m)),L.setAttribute("faceIndex",new Je(M,p)),t.push(L),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){let n=new Float32Array(Si),s=new I(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function mh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function gh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===Ho||l===Go,u=l===os||l===ls;if(h||u){let c=t.get(o),d=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new aa(i)),c=h?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{let f=o.image;return h&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new aa(i)),c=h?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function s(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function eg(i,t,e,n){let s={},r=new WeakMap;function a(c){let d=c.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(c,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(c){let d=c.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=c.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(c){let d=[],f=c.index,g=c.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let S=0,M=b.length;S<M;S+=3){let L=b[S+0],T=b[S+1],A=b[S+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){let b=g.array;_=g.version;for(let S=0,M=b.length/3-1;S<M;S+=3){let L=S+0,T=S+1,A=S+2;d.push(L,T,T,A,A,L)}}else return;let m=new(cu(d)?na:ea)(d,1);m.version=_;let p=r.get(c);p&&t.remove(p),r.set(c,m)}function u(c){let d=r.get(c);if(d){let f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function ng(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function c(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function ig(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sg(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==c){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*L*4*c),A=new Qr(T,M,L,c);A.type=Wn,A.needsUpdate=!0;let P=S*4;for(let x=0;x<c;x++){let C=m[x],B=p[x],F=b[x],H=M*L*4*x;for(let K=0;K<C.count;K++){let G=K*P;f===!0&&(s.fromBufferAttribute(C,K),T[H+G+0]=s.x,T[H+G+1]=s.y,T[H+G+2]=s.z,T[H+G+3]=0),g===!0&&(s.fromBufferAttribute(B,K),T[H+G+4]=s.x,T[H+G+5]=s.y,T[H+G+6]=s.z,T[H+G+7]=0),_===!0&&(s.fromBufferAttribute(F,K),T[H+G+8]=s.x,T[H+G+9]=s.y,T[H+G+10]=s.z,T[H+G+11]=F.itemSize===4?s.w:1)}}d={count:c,texture:A,size:new wt(M,L)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rg(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,c=t.get(l,u);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var oa=class extends je{constructor(t,e,n,s,r,a,o,l,h,u=ns){if(u!==ns&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ns&&(n=Ti),n===void 0&&u===hs&&(n=cs),super(null,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new je,_h=new oa(1,1),pu=new Qr,mu=new Sl,gu=new sa,xh=[],vh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),Ee(e,n)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Mh.set(n),i.uniformMatrix3fv(this.addr,!1,Mh),Ee(e,n)}}function dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),Ee(e,n)}}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=lu,r=_h):r=fu,e.setTexture2D(t||r,s)}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Ag(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Rg(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Cg(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Pg(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ig(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lg(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dg(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Ng(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function Fg(i,t){i.uniform1uiv(this.addr,t)}function Bg(i,t){i.uniform2uiv(this.addr,t)}function kg(i,t){i.uniform3uiv(this.addr,t)}function zg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function Hg(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function Gg(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,r[a])}function Wg(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function Xg(i){switch(i){case 5126:return wg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Og;case 5125:return Fg;case 36294:return Bg;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tg(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xg(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function qg(i,t,e){let n=i.name,s=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),a=Ao.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){bh(e,h===void 0?new Tl(o,i,t):new wl(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new Al(o),bh(e,c)),e=c}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yg=37297,Zg=0;function $g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Th=new Bt;function Kg(i){$t._getMatrix(Th,$t.workingColorSpace,i);let t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$g(i.getShaderSource(t),a)}else return s}function Jg(i,t){let e=Kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jg(i,t){let e;switch(t){case ld:e="Linear";break;case cd:e="Reinhard";break;case hd:e="Cineon";break;case ud:e="ACESFilmic";break;case fd:e="AgX";break;case pd:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pr=new I;function Qg(){$t.getLuminanceCoefficients(Pr);let i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function e0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ds(i){return i!==""}function Ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(i0,r0)}var s0=new Map;function r0(i,t){let e=zt[t];if(e===void 0){let n=s0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(a0,o0)}function o0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function l0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function c0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case od:t="ENVMAP_BLENDING_ADD";break}return t}function d0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=l0(e),h=c0(e),u=h0(e),c=u0(e),d=d0(e),f=t0(e),g=e0(r),_=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?zt.tonemapping_pars_fragment:"",e.toneMapping!==li?jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Rl(a),a=Ah(a,e),a=Rh(a,e),o=Rl(o),o=Ah(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+a,M=b+p+o,L=Eh(s,s.VERTEX_SHADER,S),T=Eh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(T).trim(),K=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{let tt=wh(s,L,"vertex"),W=wh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+tt+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:K,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(T),P=new rs(s,_),v=n0(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Yg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}var p0=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}};function m0(i,t,e,n,s,r,a){let o=new ta,l=new Cl,h=new Set,u=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,x,C,B,F){let H=B.fog,K=F.geometry,G=v.isMeshStandardMaterial?B.environment:null,tt=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),W=tt&&tt.mapping===Ca?tt.image.height:null,rt=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=lt!==void 0?lt.length:0,Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let Wt,Z,et,yt;if(rt){let te=He[rt];Wt=te.vertexShader,Z=te.fragmentShader}else Wt=v.vertexShader,Z=v.fragmentShader,l.update(v),et=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),ot=F.isInstancedMesh===!0,X=F.isBatchedMesh===!0,mt=!!v.map,Pt=!!v.matcap,Ht=!!tt,D=!!v.aoMap,ue=!!v.lightMap,Gt=!!v.bumpMap,_t=!!v.normalMap,Mt=!!v.displacementMap,Qt=!!v.emissiveMap,It=!!v.metalnessMap,w=!!v.roughnessMap,y=v.anisotropy>0,k=v.clearcoat>0,J=v.dispersion>0,Q=v.iridescence>0,$=v.sheen>0,At=v.transmission>0,ut=y&&!!v.anisotropyMap,gt=k&&!!v.clearcoatMap,Zt=k&&!!v.clearcoatNormalMap,nt=k&&!!v.clearcoatRoughnessMap,xt=Q&&!!v.iridescenceMap,Lt=Q&&!!v.iridescenceThicknessMap,Ut=$&&!!v.sheenColorMap,vt=$&&!!v.sheenRoughnessMap,qt=!!v.specularMap,kt=!!v.specularColorMap,oe=!!v.specularIntensityMap,U=At&&!!v.transmissionMap,ht=At&&!!v.thicknessMap,q=!!v.gradientMap,j=!!v.alphaMap,pt=v.alphaTest>0,dt=!!v.alphaHash,Ot=!!v.extensions,xe=li;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(xe=i.toneMapping);let Le={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:Z,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:X,batchingColor:X&&F._colorsTexture!==null,instancing:ot,instancingColor:ot&&F.instanceColor!==null,instancingMorph:ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ps,alphaToCoverage:!!v.alphaToCoverage,map:mt,matcap:Pt,envMap:Ht,envMapMode:Ht&&tt.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:ue,bumpMap:Gt,normalMap:_t,displacementMap:d&&Mt,emissiveMap:Qt,normalMapObjectSpace:_t&&v.normalMapType===xd,normalMapTangentSpace:_t&&v.normalMapType===ou,metalnessMap:It,roughnessMap:w,anisotropy:y,anisotropyMap:ut,clearcoat:k,clearcoatMap:gt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:qt,specularColorMap:kt,specularIntensityMap:oe,transmission:At,transmissionMap:U,thicknessMap:ht,gradientMap:q,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:dt,combine:v.combine,mapUv:mt&&_(v.map.channel),aoMapUv:D&&_(v.aoMap.channel),lightMapUv:ue&&_(v.lightMap.channel),bumpMapUv:Gt&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:Mt&&_(v.displacementMap.channel),emissiveMapUv:Qt&&_(v.emissiveMap.channel),metalnessMapUv:It&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:ut&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:qt&&_(v.specularMap.channel),specularColorMapUv:kt&&_(v.specularColorMap.channel),specularIntensityMapUv:oe&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(mt||j),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ct,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:mt&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===ne,decodeVideoTextureEmissive:Qt&&v.emissiveMap.isVideoTexture===!0&&$t.getTransfer(v.emissiveMap.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Oe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ot&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&v.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=h.has(1),Le.vertexUv2s=h.has(2),Le.vertexUv3s=h.has(3),h.clear(),Le}function p(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)x.push(C),x.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(b(x,v),S(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function b(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function S(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){let x=g[v.type],C;if(x){let B=He[x];C=La.clone(B.uniforms)}else C=v.uniforms;return C}function L(v,x){let C;for(let B=0,F=u.length;B<F;B++){let H=u[B];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new f0(i,x,v,r),u.push(C)),C}function T(v){if(--v.usedTimes===0){let x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:P}}function g0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:_,group:m},i[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=_,p.group=m),t++,p}function o(c,d,f,g,_,m){let p=a(c,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(c,d,f,g,_,m){let p=a(c,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(c,d){e.length>1&&e.sort(c||_0),n.length>1&&n.sort(d||Ih),s.length>1&&s.sort(d||Ih)}function u(){for(let c=t,d=i.length;c<d;c++){let f=i[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function x0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Vt};break;case"SpotLight":e={position:new I,direction:new I,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M0=0;function S0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b0(i){let t=new v0,e=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let s=new I,r=new he,a=new he;function o(h){let u=0,c=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,M=0,L=0,T=0,A=0;h.sort(S0);for(let v=0,x=h.length;v<x;v++){let C=h[v],B=C.color,F=C.intensity,H=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=B.r*F,c+=B.g*F,d+=B.b*F;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],F);A++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=G,f++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;let tt=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,tt.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=K,M++}_++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let tt=C.shadow,W=e.get(C);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(F),G.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=A,n.version=M0++)}function l(h,u){let c=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){let S=h[p];if(S.isDirectionalLight){let M=n.directional[c];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(S.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Dh(i){let t=new b0(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function E0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dh(i),t.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends Rn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`;function A0(i,t,e){let n=new Bs,s=new wt,r=new wt,a=new ie,o=new Il({depthPacking:_d}),l=new Ll,h={},u=e.maxTextureSize,c={[ci]:Oe,[Oe]:ci,[sn]:sn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:T0,fragmentShader:w0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==Hn&&this.type===Hn,H=p===Hn&&this.type!==Hn;for(let K=0,G=T.length;K<G;K++){let tt=T[K],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();if(s.multiply(rt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,W.mapSize.y=r.y)),W.map===null||F===!0||H===!0){let ct=this.type!==Hn?{minFilter:vn,magFilter:vn}:{};W.map!==null&&W.map.dispose(),W.map=new Jn(s.x,s.y,ct),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let lt=W.getViewportCount();for(let ct=0;ct<lt;ct++){let Dt=W.getViewport(ct);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),B.viewport(a),W.updateMatrices(tt,ct),n=W.getFrustum(),M(A,P,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&b(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,x,C)};function b(T,A){let P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,f,_,null)}function S(T,A,P,v){let x=null,C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=x.uuid,F=A.uuid,H=h[B];H===void 0&&(H={},h[B]=H);let K=H[F];K===void 0&&(K=x.clone(),H[F]=K,A.addEventListener("dispose",L)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,v===Hn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:c[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=i.properties.get(x);B.light=P}return x}function M(T,A,P,v,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let F=t.update(T),H=T.material;if(Array.isArray(H)){let K=F.groups;for(let G=0,tt=K.length;G<tt;G++){let W=K[G],rt=H[W.materialIndex];if(rt&&rt.visible){let lt=S(T,rt,v,x);T.onBeforeShadow(i,T,A,P,F,lt,W),i.renderBufferDirect(P,null,F,lt,T,W),T.onAfterShadow(i,T,A,P,F,lt,W)}}}else if(H.visible){let K=S(T,H,v,x);T.onBeforeShadow(i,T,A,P,F,K,null),i.renderBufferDirect(P,null,F,K,T,null),T.onAfterShadow(i,T,A,P,F,K,null)}}let B=T.children;for(let F=0,H=B.length;F<H;F++)M(B[F],A,P,v,x)}function L(T){T.target.removeEventListener("dispose",L);for(let P in h){let v=h[P],x=T.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var R0={[No]:Oo,[Fo]:zo,[Bo]:Vo,[as]:ko,[Oo]:No,[zo]:Fo,[Vo]:Bo,[ko]:as};function C0(i,t){function e(){let U=!1,ht=new ie,q=null,j=new ie(0,0,0,0);return{setMask:function(pt){q!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){U=pt},setClear:function(pt,dt,Ot,xe,Le){Le===!0&&(pt*=xe,dt*=xe,Ot*=xe),ht.set(pt,dt,Ot,xe),j.equals(ht)===!1&&(i.clearColor(pt,dt,Ot,xe),j.copy(ht))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,q=null,j=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let xe=pt;pt=null,this.setClear(xe)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!U&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(ht&&(dt=R0[dt]),j!==dt){switch(dt){case No:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){U=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){U=!1,q=null,j=null,pt=null,ht=!1}}}function s(){let U=!1,ht=null,q=null,j=null,pt=null,dt=null,Ot=null,xe=null,Le=null;return{setTest:function(te){U||(te?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(te){ht!==te&&!U&&(i.stencilMask(te),ht=te)},setFunc:function(te,un,Ln){(q!==te||j!==un||pt!==Ln)&&(i.stencilFunc(te,un,Ln),q=te,j=un,pt=Ln)},setOp:function(te,un,Ln){(dt!==te||Ot!==un||xe!==Ln)&&(i.stencilOp(te,un,Ln),dt=te,Ot=un,xe=Ln)},setLocked:function(te){U=te},setClear:function(te){Le!==te&&(i.clearStencil(te),Le=te)},reset:function(){U=!1,ht=null,q=null,j=null,pt=null,dt=null,Ot=null,xe=null,Le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap,u={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,M=null,L=null,T=null,A=new Vt(0,0,0),P=0,v=!1,x=null,C=null,B=null,F=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=tt>=2);let rt=null,lt={},ct=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Wt=new ie().fromArray(ct),Z=new ie().fromArray(Dt);function et(U,ht,q,j){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<q;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let yt={};yt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(as),Gt(!1),_t(Nc),at(i.CULL_FACE),D(oi);function at(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ct(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ot(U,ht){return c[U]!==ht?(i.bindFramebuffer(U,ht),c[U]=ht,U===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function X(U,ht){let q=f,j=!1;if(U){q=d.get(ht),q===void 0&&(q=[],d.set(ht,q));let pt=U.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function mt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Pt={[Mi]:i.FUNC_ADD,[Gu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};Pt[Xu]=i.MIN,Pt[qu]=i.MAX;let Ht={[Yu]:i.ZERO,[Zu]:i.ONE,[$u]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,ht,q,j,pt,dt,Ot,xe,Le,te){if(U===oi){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),U!==Hu){if(U!==m||te!==v){if((p!==Mi||M!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,M=Mi),te)switch(U){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,L=null,T=null,A.set(0,0,0),P=0,m=U,v=te}return}pt=pt||ht,dt=dt||q,Ot=Ot||j,(ht!==p||pt!==M)&&(i.blendEquationSeparate(Pt[ht],Pt[pt]),p=ht,M=pt),(q!==b||j!==S||dt!==L||Ot!==T)&&(i.blendFuncSeparate(Ht[q],Ht[j],Ht[dt],Ht[Ot]),b=q,S=j,L=dt,T=Ot),(xe.equals(A)===!1||Le!==P)&&(i.blendColor(xe.r,xe.g,xe.b,Le),A.copy(xe),P=Le),m=U,v=!1}function ue(U,ht){U.side===sn?Ct(i.CULL_FACE):at(i.CULL_FACE);let q=U.side===Oe;ht&&(q=!q),Gt(q),U.blending===es&&U.transparent===!1?D(oi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function _t(U){U!==ku?(at(i.CULL_FACE),U!==C&&(U===Nc?i.cullFace(i.BACK):U===zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),C=U}function Mt(U){U!==B&&(G&&i.lineWidth(U),B=U)}function Qt(U,ht,q){U?(at(i.POLYGON_OFFSET_FILL),(F!==ht||H!==q)&&(i.polygonOffset(ht,q),F=ht,H=q)):Ct(i.POLYGON_OFFSET_FILL)}function It(U){U?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+K-1),rt!==U&&(i.activeTexture(U),rt=U)}function y(U,ht,q){q===void 0&&(rt===null?q=i.TEXTURE0+K-1:q=rt);let j=lt[q];j===void 0&&(j={type:void 0,texture:void 0},lt[q]=j),(j.type!==U||j.texture!==ht)&&(rt!==q&&(i.activeTexture(q),rt=q),i.bindTexture(U,ht||yt[U]),j.type=U,j.texture=ht)}function k(){let U=lt[rt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){Wt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function vt(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function qt(U,ht){let q=h.get(ht);q===void 0&&(q=new WeakMap,h.set(ht,q));let j=q.get(U);j===void 0&&(j=i.getUniformBlockIndex(ht,U.name),q.set(U,j))}function kt(U,ht){let j=h.get(ht).get(U);l.get(ht)!==j&&(i.uniformBlockBinding(ht,j,U.__bindingPointIndex),l.set(ht,j))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,lt={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,M=null,L=null,T=null,A=new Vt(0,0,0),P=0,v=!1,x=null,C=null,B=null,F=null,H=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Ct,bindFramebuffer:ot,drawBuffers:X,useProgram:mt,setBlending:D,setMaterial:ue,setFlipSided:Gt,setCullFace:_t,setLineWidth:Mt,setPolygonOffset:Qt,setScissorTest:It,activeTexture:w,bindTexture:y,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:Zt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Ut,viewport:vt,reset:oe}}function Uh(i,t,e,n){let s=P0(n);switch(e){case tu:return i*t;case nu:return i*t;case iu:return i*t*2;case su:return i*t/s.components*s.byteLength;case jl:return i*t/s.components*s.byteLength;case ru:return i*t*2/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case eu:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case tc:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case qo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zr:case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case au:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P0(i){switch(i){case $n:case Jh:return{byteLength:1,components:1};case Os:case jh:case Xs:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case Ti:case $l:case Wn:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,u=new WeakMap,c,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return f?new OffscreenCanvas(w,y):Jr("canvas")}function _(w,y,k){let J=1,Q=It(w);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(J*Q.width),At=Math.floor(J*Q.height);c===void 0&&(c=g($,At));let ut=y?g($,At):c;return ut.width=$,ut.height=At,ut.getContext("2d").drawImage(w,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+At+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,y,k,J,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=y;if(y===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),y===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){let At=Q?Pa:$t.getTransfer(J);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=At===ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(w,y){let k;return w?y===null||y===Ti||y===cs?k=i.DEPTH24_STENCIL8:y===Wn?k=i.DEPTH32F_STENCIL8:y===Os&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===cs?k=i.DEPTH_COMPONENT24:y===Wn?k=i.DEPTH_COMPONENT32F:y===Os&&(k=i.DEPTH_COMPONENT16),k}function L(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){let y=w.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&u.delete(y)}function A(w){let y=w.target;y.removeEventListener("dispose",A),x(y)}function P(w){let y=n.get(w);if(y.__webglInit===void 0)return;let k=w.source,J=d.get(k);if(J){let Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(w),Object.keys(J).length===0&&d.delete(k)}n.remove(w)}function v(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let k=w.source,J=d.get(k);delete J[y.__cacheKey],a.memory.textures--}function x(w){let y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=w.textures;for(let J=0,Q=k.length;J<Q;J++){let $=n.get(k[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(w)}let C=0;function B(){C=0}function F(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function H(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){let k=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,w,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function G(w,y){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function tt(w,y){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function W(w,y){let k=n.get(w);if(w.version>0&&k.__version!==w.version){et(k,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let rt={[Wo]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},lt={[vn]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ct={[vd]:i.NEVER,[Td]:i.ALWAYS,[yd]:i.LESS,[lu]:i.LEQUAL,[Md]:i.EQUAL,[Ed]:i.GEQUAL,[Sd]:i.GREATER,[bd]:i.NOTEQUAL};function Dt(w,y){if(y.type===Wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Qa||y.magFilter===hr||y.magFilter===Ei||y.minFilter===rn||y.minFilter===Qa||y.minFilter===hr||y.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==hr&&y.minFilter!==Ei||y.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));let J=y.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let $=H(y);if($!==w.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[$].usedTimes++;let At=Q[w.__cacheKey];At!==void 0&&(Q[w.__cacheKey].usedTimes--,At.usedTimes===0&&v(y)),w.__cacheKey=$,w.__webglTexture=Q[$].texture}return k}function Z(w,y,k){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let Q=Wt(w,y),$=y.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+k);let At=n.get($);if($.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);let ut=$t.getPrimaries($t.workingColorSpace),gt=y.colorSpace===ai?null:$t.getPrimaries(y.colorSpace),Zt=y.colorSpace===ai||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let nt=_(y.image,!1,s.maxTextureSize);nt=Qt(y,nt);let xt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),Ut=S(y.internalFormat,xt,Lt,y.colorSpace,y.isVideoTexture);Dt(J,y);let vt,qt=y.mipmaps,kt=y.isVideoTexture!==!0,oe=At.__version===void 0||Q===!0,U=$.dataReady,ht=L(y,nt);if(y.isDepthTexture)Ut=M(y.format===hs,y.type),oe&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ut,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,nt.width,nt.height,0,xt,Lt,null));else if(y.isDataTexture)if(qt.length>0){kt&&oe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)vt=qt[q],kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Lt,vt.data);y.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,xt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,nt.width,nt.height,0,xt,Lt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,qt[0].width,qt[0].height,nt.depth);for(let q=0,j=qt.length;q<j;q++)if(vt=qt[q],y.format!==xn)if(xt!==null)if(kt){if(U)if(y.layerUpdates.size>0){let pt=Uh(vt.width,vt.height,y.format,y.type);for(let dt of y.layerUpdates){let Ot=vt.data.subarray(dt*pt/vt.data.BYTES_PER_ELEMENT,(dt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,vt.width,vt.height,1,xt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,xt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,xt,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ut,vt.width,vt.height,nt.depth,0,xt,Lt,vt.data)}else{kt&&oe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)vt=qt[q],y.format!==xn?xt!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,vt.width,vt.height,0,xt,Lt,vt.data)}else if(y.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,nt.width,nt.height,nt.depth),U)if(y.layerUpdates.size>0){let q=Uh(nt.width,nt.height,y.format,y.type);for(let j of y.layerUpdates){let pt=nt.data.subarray(j*q/nt.data.BYTES_PER_ELEMENT,(j+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,xt,Lt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,nt.width,nt.height,nt.depth,0,xt,Lt,nt.data);else if(y.isData3DTexture)kt?(oe&&e.texStorage3D(i.TEXTURE_3D,ht,Ut,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,nt.width,nt.height,nt.depth,0,xt,Lt,nt.data);else if(y.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height);else{let q=nt.width,j=nt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ut,q,j,0,xt,Lt,null),q>>=1,j>>=1}}else if(qt.length>0){if(kt&&oe){let q=It(qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ut,q.width,q.height)}for(let q=0,j=qt.length;q<j;q++)vt=qt[q],kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt,Lt,vt):e.texImage2D(i.TEXTURE_2D,q,Ut,xt,Lt,vt);y.generateMipmaps=!1}else if(kt){if(oe){let q=It(nt);e.texStorage2D(i.TEXTURE_2D,ht,Ut,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,xt,Lt,nt);m(y)&&p(J),At.__version=$.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function et(w,y,k){if(y.image.length!==6)return;let J=Wt(w,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let $=n.get(Q);if(Q.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+k);let At=$t.getPrimaries($t.workingColorSpace),ut=y.colorSpace===ai?null:$t.getPrimaries(y.colorSpace),gt=y.colorSpace===ai||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Zt&&!nt?xt[j]=_(y.image[j],!0,s.maxCubemapSize):xt[j]=nt?y.image[j].image:y.image[j],xt[j]=Qt(y,xt[j]);let Lt=xt[0],Ut=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),qt=S(y.internalFormat,Ut,vt,y.colorSpace),kt=y.isVideoTexture!==!0,oe=$.__version===void 0||J===!0,U=Q.dataReady,ht=L(y,Lt);Dt(i.TEXTURE_CUBE_MAP,y);let q;if(Zt){kt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,Lt.width,Lt.height);for(let j=0;j<6;j++){q=xt[j].mipmaps;for(let pt=0;pt<q.length;pt++){let dt=q[pt];y.format!==xn?Ut!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Ut,vt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,Ut,vt,dt.data)}}}else{if(q=y.mipmaps,kt&&oe){q.length>0&&ht++;let j=It(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ut,vt,xt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,xt[j].width,xt[j].height,0,Ut,vt,xt[j].data);for(let pt=0;pt<q.length;pt++){let Ot=q[pt].image[j].image;kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ot.width,Ot.height,Ut,vt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Ot.width,Ot.height,0,Ut,vt,Ot.data)}}else{kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,vt,xt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Ut,vt,xt[j]);for(let pt=0;pt<q.length;pt++){let dt=q[pt];kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ut,vt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Ut,vt,dt.image[j])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function yt(w,y,k,J,Q,$){let At=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),gt=S(k.internalFormat,At,ut,k.colorSpace),Zt=n.get(y),nt=n.get(k);if(nt.__renderTarget=y,!Zt.__hasExternalTextures){let xt=Math.max(1,y.width>>$),Lt=Math.max(1,y.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,gt,xt,Lt,y.depth,0,At,ut,null):e.texImage2D(Q,$,gt,xt,Lt,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,nt.__webglTexture,0,Gt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,nt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=M(y.stencilBuffer,Q),At=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Gt(y);_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,w)}else{let J=y.textures;for(let Q=0;Q<J.length;Q++){let $=J[Q],At=r.convert($.format,$.colorSpace),ut=r.convert($.type),gt=S($.internalFormat,At,ut,$.colorSpace),Zt=Gt(y);k&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,gt,y.width,y.height):_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let Q=J.__webglTexture,$=Gt(y);if(y.depthTexture.format===ns)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===hs)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ot(w){let y=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ct(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),at(y.__webglDepthbuffer[J],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),at(y.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(w,y,k){let J=n.get(w);y!==void 0&&yt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ot(w)}function mt(w){let y=w.texture,k=n.get(w),J=n.get(y);w.addEventListener("dispose",A);let Q=w.textures,$=w.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else k.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)k.__webglFramebuffer[ut]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,gt=Q.length;ut<gt;ut++){let Zt=n.get(Q[ut]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&_t(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){let gt=Q[ut];k.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);let Zt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),xt=S(gt.internalFormat,Zt,nt,gt.colorSpace,w.isXRRenderTarget===!0),Lt=Gt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,xt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),at(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)yt(k.__webglFramebuffer[ut][gt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else yt(k.__webglFramebuffer[ut],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,gt=Q.length;ut<gt;ut++){let Zt=Q[ut],nt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Dt(i.TEXTURE_2D,Zt),yt(k.__webglFramebuffer,w,Zt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Dt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)yt(k.__webglFramebuffer[gt],w,y,i.COLOR_ATTACHMENT0,ut,gt);else yt(k.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}w.depthBuffer&&ot(w)}function Pt(w){let y=w.textures;for(let k=0,J=y.length;k<J;k++){let Q=y[k];if(m(Q)){let $=b(w),At=n.get(Q).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}let Ht=[],D=[];function ue(w){if(w.samples>0){if(_t(w)===!1){let y=w.textures,k=w.width,J=w.height,Q=i.COLOR_BUFFER_BIT,$=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(w),ut=y.length>1;if(ut)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Zt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,Q,i.NEAREST),l===!0&&(Ht.length=0,D.length=0,Ht.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ht.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Zt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Gt(w){return Math.min(s.maxSamples,w.samples)}function _t(w){let y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(w){let y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Qt(w,y){let k=w.colorSpace,J=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==ps&&k!==ai&&($t.getTransfer(k)===ne?(J!==xn||Q!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=X,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=_t}function L0(i,t){function e(n,s=ai){let r,a=$t.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.BYTE;if(n===jh)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===tu)return i.ALPHA;if(n===eu)return i.RGB;if(n===xn)return i.RGBA;if(n===nu)return i.LUMINANCE;if(n===iu)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===su)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===ru)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Jo||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Jo)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===fl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===ml||n===gl||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dl=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qn=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,g=null,_=new Ul,m=e.getContextAttributes(),p=null,b=null,S=[],M=[],L=new wt,T=null,A=new Ve;A.viewport=new ie;let P=new Ve;P.viewport=new ie;let v=[A,P],x=new Dl,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=S[Z];return et===void 0&&(et=new Ns,S[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=S[Z];return et===void 0&&(et=new Ns,S[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=S[Z];return et===void 0&&(et=new Ns,S[Z]=et),et.getHandSpace()};function F(Z){let et=M.indexOf(Z.inputSource);if(et===-1)return;let yt=S[et];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,h||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<S.length;Z++){let et=M[Z];et!==null&&(M[Z]=null,S[Z].disconnect(et))}C=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,c=null,s=null,b=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Jn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,yt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?hs:ns,yt=m.stencil?cs:Ti);let Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Jn(d.textureWidth,d.textureHeight,{format:xn,type:$n,depthTexture:new oa(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Z){for(let et=0;et<Z.removed.length;et++){let yt=Z.removed[et],at=M.indexOf(yt);at>=0&&(M[at]=null,S[at].disconnect(yt))}for(let et=0;et<Z.added.length;et++){let yt=Z.added[et],at=M.indexOf(yt);if(at===-1){for(let ot=0;ot<S.length;ot++)if(ot>=M.length){M.push(yt),at=ot;break}else if(M[ot]===null){M[ot]=yt,at=ot;break}if(at===-1)break}let Ct=S[at];Ct&&Ct.connect(yt)}}let G=new I,tt=new I;function W(Z,et,yt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let at=G.distanceTo(tt),Ct=et.projectionMatrix.elements,ot=yt.projectionMatrix.elements,X=Ct[14]/(Ct[10]-1),mt=Ct[14]/(Ct[10]+1),Pt=(Ct[9]+1)/Ct[5],Ht=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],ue=(ot[8]+1)/ot[0],Gt=X*D,_t=X*ue,Mt=at/(-D+ue),Qt=Mt*-D;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qt),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let It=X+Mt,w=mt+Mt,y=Gt-Qt,k=_t+(at-Qt),J=Pt*mt/w*It,Q=Ht*mt/w*It;Z.projectionMatrix.makePerspective(y,k,J,Q,It,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,yt=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=P.near=A.near=et,x.far=P.far=A.far=yt,(C!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,B=x.far),A.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;let at=Z.parent,Ct=x.cameras;rt(x,at);for(let ot=0;ot<Ct.length;ot++)rt(Ct[ot],at);Ct.length===2?W(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),lt(Z,x,at)};function lt(Z,et,yt){yt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ct=null;function Dt(Z,et){if(u=et.getViewerPose(h||a),g=et,u!==null){let yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let at=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let ot=0;ot<yt.length;ot++){let X=yt[ot],mt=null;if(f!==null)mt=f.getViewport(X);else{let Ht=c.getViewSubImage(d,X);mt=Ht.viewport,ot===0&&(t.setRenderTargetTextures(b,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(b))}let Pt=v[ot];Pt===void 0&&(Pt=new Ve,Pt.layers.enable(ot),Pt.viewport=new ie,v[ot]=Pt),Pt.matrix.fromArray(X.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(X.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(mt.x,mt.y,mt.width,mt.height),ot===0&&(x.matrix.copy(Pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Pt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let ot=c.getDepthInformation(yt[0]);ot&&ot.isValid&&ot.texture&&_.init(t,ot,s.renderState)}}for(let yt=0;yt<S.length;yt++){let at=M[yt],Ct=S[yt];at!==null&&Ct!==void 0&&Ct.update(at,et,h||a)}ct&&ct(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Wt=new du;Wt.setAnimationLoop(Dt),this.setAnimationLoop=function(Z){ct=Z},this.dispose=function(){}}},vi=new An,O0=new he;function F0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,M=b.envMapRotation;S&&(m.envMap.value=S,vi.copy(M),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(vi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let M=S.program;n.uniformBlockBinding(b,M)}function h(b,S){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(b,L);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function u(b){let S=c();b.__bindingPointIndex=S;let M=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function c(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],M=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=M.length;T<A;T++){let P=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,x=P.length;v<x;v++){let C=P[v];if(f(C,T,v,L)===!0){let B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],H=0;for(let K=0;K<F.length;K++){let G=F[K],tt=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+H,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,M,L){let T=b.value,A=S+"_"+M;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{let P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){let S=b.uniforms,M=0,L=16;for(let A=0,P=S.length;A<P;A++){let v=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,C=v.length;x<C;x++){let B=v[x],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,K=F.length;H<K;H++){let G=F[H],tt=_(G),W=M%L,rt=W%tt.boundary,lt=W+rt;M+=rt,lt!==0&&L-lt<tt.storage&&(M+=L-lt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=tt.storage}}}let T=M%L;return T>0&&(M+=L-T),b.__size=M,b.__cache={},this}function _(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:p}}var la=class{constructor(t={}){let{canvas:e=Hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=li,this.toneMappingExposure=1;let M=this,L=!1,T=0,A=0,P=null,v=-1,x=null,C=new ie,B=new ie,F=null,H=new Vt(0),K=0,G=e.width,tt=e.height,W=1,rt=null,lt=null,ct=new ie(0,0,G,tt),Dt=new ie(0,0,G,tt),Wt=!1,Z=new Bs,et=!1,yt=!1,at=new he,Ct=new he,ot=new I,X=new ie,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Ht(){return P===null?W:1}let D=n;function ue(E,N){return e.getContext(E,N)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let N="webgl2";if(D=ue(N,E),D===null)throw ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,_t,Mt,Qt,It,w,y,k,J,Q,$,At,ut,gt,Zt,nt,xt,Lt,Ut,vt,qt,kt,oe,U;function ht(){Gt=new tg(D),Gt.init(),kt=new L0(D,Gt),_t=new Zm(D,Gt,t,kt),Mt=new C0(D,Gt),_t.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Qt=new ig(D),It=new g0,w=new I0(D,Gt,Mt,It,_t,kt,Qt),y=new Km(M),k=new Qm(M),J=new hf(D),oe=new qm(D,J),Q=new eg(D,J,Qt,oe),$=new rg(D,Q,J,Qt),Ut=new sg(D,_t,w),nt=new $m(It),At=new m0(M,y,k,Gt,_t,oe,nt),ut=new F0(M,It),gt=new x0,Zt=new E0(Gt),Lt=new Xm(M,y,k,Mt,$,f,l),xt=new A0(M,$,_t),U=new B0(D,Qt,_t,Mt),vt=new Ym(D,Gt,Qt),qt=new ng(D,Gt,Qt),Qt.programs=At.programs,M.capabilities=_t,M.extensions=Gt,M.properties=It,M.renderLists=gt,M.shadowMap=xt,M.state=Mt,M.info=Qt}ht();let q=new Nl(M,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(G,tt,!1))},this.getSize=function(E){return E.set(G,tt)},this.setSize=function(E,N,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,tt=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),z===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(G*W,tt*W).floor()},this.setDrawingBufferSize=function(E,N,z){G=E,tt=N,W=z,e.width=Math.floor(E*z),e.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,N,z,V){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,N,z,V),Mt.viewport(C.copy(ct).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Dt)},this.setScissor=function(E,N,z,V){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,N,z,V),Mt.scissor(B.copy(Dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){Mt.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,N=!0,z=!0){let V=0;if(E){let O=!1;if(P!==null){let it=P.texture.format;O=it===tc||it===Ql||it===jl}if(O){let it=P.texture.type,ft=it===$n||it===Ti||it===Os||it===cs||it===Kl||it===Jl,St=Lt.getClearColor(),bt=Lt.getClearAlpha(),Nt=St.r,Ft=St.g,Et=St.b;ft?(g[0]=Nt,g[1]=Ft,g[2]=Et,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Nt,_[1]=Ft,_[2]=Et,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Zt.dispose(),It.dispose(),y.dispose(),k.dispose(),$.dispose(),oe.dispose(),U.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",dc),q.removeEventListener("sessionend",fc),di.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=Qt.autoReset,N=xt.enabled,z=xt.autoUpdate,V=xt.needsUpdate,O=xt.type;ht(),Qt.autoReset=E,xt.enabled=N,xt.autoUpdate=z,xt.needsUpdate=V,xt.type=O}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){let N=E.target;N.removeEventListener("dispose",Ot),xe(N)}function xe(E){Le(E),It.remove(E)}function Le(E){let N=It.get(E).programs;N!==void 0&&(N.forEach(function(z){At.releaseProgram(z)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,V,O,it){N===null&&(N=mt);let ft=O.isMesh&&O.matrixWorld.determinant()<0,St=Iu(E,N,z,V,O);Mt.setMaterial(V,ft);let bt=z.index,Nt=1;if(V.wireframe===!0){if(bt=Q.getWireframeAttribute(z),bt===void 0)return;Nt=2}let Ft=z.drawRange,Et=z.attributes.position,Kt=Ft.start*Nt,le=(Ft.start+Ft.count)*Nt;it!==null&&(Kt=Math.max(Kt,it.start*Nt),le=Math.min(le,(it.start+it.count)*Nt)),bt!==null?(Kt=Math.max(Kt,0),le=Math.min(le,bt.count)):Et!=null&&(Kt=Math.max(Kt,0),le=Math.min(le,Et.count));let de=le-Kt;if(de<0||de===1/0)return;oe.setup(O,V,St,z,bt);let We,Jt=vt;if(bt!==null&&(We=J.get(bt),Jt=qt,Jt.setIndex(We)),O.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*Ht()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(O.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),Mt.setLineWidth(Rt*Ht()),O.isLineSegments?Jt.setMode(D.LINES):O.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else O.isPoints?Jt.setMode(D.POINTS):O.isSprite&&Jt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Rt=O._multiDrawStarts,Dn=O._multiDrawCounts,jt=O._multiDrawCount,dn=bt?J.get(bt).bytesPerElement:1,Ui=It.get(V).currentProgram.getUniforms();for(let qe=0;qe<jt;qe++)Ui.setValue(D,"_gl_DrawID",qe),Jt.render(Rt[qe]/dn,Dn[qe])}else if(O.isInstancedMesh)Jt.renderInstances(Kt,de,O.count);else if(z.isInstancedBufferGeometry){let Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Dn=Math.min(z.instanceCount,Rt);Jt.renderInstances(Kt,de,Dn)}else Jt.render(Kt,de)};function te(E,N,z){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,Zs(E,N,z),E.side=ci,E.needsUpdate=!0,Zs(E,N,z),E.side=sn):Zs(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),p=Zt.get(z),p.init(N),S.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let St=it[ft];te(St,z,O),V.add(St)}else te(it,z,O),V.add(it)}),S.pop(),p=null,V},this.compileAsync=function(E,N,z=null){let V=this.compile(E,N,z);return new Promise(O=>{function it(){if(V.forEach(function(ft){It.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){O(E);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let un=null;function Ln(E){un&&un(E)}function dc(){di.stop()}function fc(){di.start()}let di=new du;di.setAnimationLoop(Ln),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){un=E,q.setAnimationLoop(E),E===null?di.stop():di.start()},q.addEventListener("sessionstart",dc),q.addEventListener("sessionend",fc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,P),p=Zt.get(E,S.length),p.init(N),S.push(p),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,yt),m=gt.get(E,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){let it=M.xr.getDepthSensingMesh();it!==null&&Ga(it,N,-1/0,M.sortObjects)}Ga(E,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,lt),Pt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Pt&&Lt.addToRenderList(m,E),this.info.render.frame++,et===!0&&nt.beginShadows();let z=p.state.shadowsArray;xt.render(z,E,N),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let it=N.cameras;if(O.length>0)for(let ft=0,St=it.length;ft<St;ft++){let bt=it[ft];mc(V,O,E,bt)}Pt&&Lt.render(E);for(let ft=0,St=it.length;ft<St;ft++){let bt=it[ft];pc(m,E,bt,bt.viewport)}}else O.length>0&&mc(V,O,E,N),Pt&&Lt.render(E),pc(m,E,N);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,N),oe.resetDefaultState(),v=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],et===!0&&nt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ga(E,N,z,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){V&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);let ft=$.update(E),St=E.material;St.visible&&m.push(E,ft,St,z,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let ft=$.update(E),St=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),X.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),X.copy(ft.boundingSphere.center)),X.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){let bt=ft.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){let Et=bt[Nt],Kt=St[Et.materialIndex];Kt&&Kt.visible&&m.push(E,ft,Kt,z,X.z,Et)}}else St.visible&&m.push(E,ft,St,z,X.z,null)}}let it=E.children;for(let ft=0,St=it.length;ft<St;ft++)Ga(it[ft],N,z,V)}function pc(E,N,z,V){let O=E.opaque,it=E.transmissive,ft=E.transparent;p.setupLightsView(z),et===!0&&nt.setGlobalState(M.clippingPlanes,z),V&&Mt.viewport(C.copy(V)),O.length>0&&Ys(O,N,z),it.length>0&&Ys(it,N,z),ft.length>0&&Ys(ft,N,z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function mc(E,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Jn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Xs:$n,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let it=p.state.transmissionRenderTarget[V.id],ft=V.viewport||C;it.setSize(ft.z,ft.w);let St=M.getRenderTarget();M.setRenderTarget(it),M.getClearColor(H),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Pt&&Lt.render(z);let bt=M.toneMapping;M.toneMapping=li;let Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&nt.setGlobalState(M.clippingPlanes,V),Ys(E,z,V),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Et=0,Kt=N.length;Et<Kt;Et++){let le=N[Et],de=le.object,We=le.geometry,Jt=le.material,Rt=le.group;if(Jt.side===sn&&de.layers.test(V.layers)){let Dn=Jt.side;Jt.side=Oe,Jt.needsUpdate=!0,gc(de,z,V,We,Jt,Rt),Jt.side=Dn,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}M.setRenderTarget(St),M.setClearColor(H,K),Nt!==void 0&&(V.viewport=Nt),M.toneMapping=bt}function Ys(E,N,z){let V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,it=E.length;O<it;O++){let ft=E[O],St=ft.object,bt=ft.geometry,Nt=V===null?ft.material:V,Ft=ft.group;St.layers.test(z.layers)&&gc(St,N,z,bt,Nt,Ft)}}function gc(E,N,z,V,O,it){E.onBeforeRender(M,N,z,V,O,it),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,N,z,V,E,it),O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=Oe,O.needsUpdate=!0,M.renderBufferDirect(z,N,V,O,E,it),O.side=ci,O.needsUpdate=!0,M.renderBufferDirect(z,N,V,O,E,it),O.side=sn):M.renderBufferDirect(z,N,V,O,E,it),E.onAfterRender(M,N,z,V,O,it)}function Zs(E,N,z){N.isScene!==!0&&(N=mt);let V=It.get(E),O=p.state.lights,it=p.state.shadowsArray,ft=O.state.version,St=At.getParameters(E,O.state,it,N,z),bt=At.getProgramCacheKey(St),Nt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Ot),Nt=new Map,V.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ft)return xc(E,St),Ft}else St.uniforms=At.getUniforms(E),E.onBeforeCompile(St,M),Ft=At.acquireProgram(St,bt),Nt.set(bt,Ft),V.uniforms=St.uniforms;let Et=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=nt.uniform),xc(E,St),V.needsLights=Du(E),V.lightsStateVersion=ft,V.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function _c(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=rs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function xc(E,N){let z=It.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Iu(E,N,z,V,O){N.isScene!==!0&&(N=mt),w.resetTextureUnits();let it=N.fog,ft=V.isMeshStandardMaterial?N.environment:null,St=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ps,bt=(V.isMeshStandardMaterial?k:y).get(V.envMap||ft),Nt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,le=!!z.morphAttributes.color,de=li;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=M.toneMapping);let We=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=We!==void 0?We.length:0,Rt=It.get(V),Dn=p.state.lights;if(et===!0&&(yt===!0||E!==x)){let Qe=E===x&&V.id===v;nt.setState(V,E,Qe)}let jt=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Dn.state.version||Rt.outputColorSpace!==St||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==bt||V.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Ft||Rt.morphTargets!==Et||Rt.morphNormals!==Kt||Rt.morphColors!==le||Rt.toneMapping!==de||Rt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Rt.__version=V.version);let dn=Rt.currentProgram;jt===!0&&(dn=Zs(V,N,O));let Ui=!1,qe=!1,vs=!1,fe=dn.getUniforms(),En=Rt.uniforms;if(Mt.useProgram(dn.program)&&(Ui=!0,qe=!0,vs=!0),V.id!==v&&(v=V.id,qe=!0),Ui||x!==E){Mt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),Wd(at),Xd(at),fe.setValue(D,"projectionMatrix",at)):fe.setValue(D,"projectionMatrix",E.projectionMatrix),fe.setValue(D,"viewMatrix",E.matrixWorldInverse);let jn=fe.map.cameraPosition;jn!==void 0&&jn.setValue(D,ot.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,qe=!0,vs=!0)}if(O.isSkinnedMesh){fe.setOptional(D,O,"bindMatrix"),fe.setOptional(D,O,"bindMatrixInverse");let Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),fe.setValue(D,"boneTexture",Qe.boneTexture,w))}O.isBatchedMesh&&(fe.setOptional(D,O,"batchingTexture"),fe.setValue(D,"batchingTexture",O._matricesTexture,w),fe.setOptional(D,O,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",O._indirectTexture,w),fe.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",O._colorsTexture,w));let ys=z.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Ut.update(O,z,dn),(qe||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,fe.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(En.envMap.value=bt,En.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(En.envMapIntensity.value=N.environmentIntensity),qe&&(fe.setValue(D,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&Lu(En,vs),it&&V.fog===!0&&ut.refreshFogUniforms(En,it),ut.refreshMaterialUniforms(En,V,W,tt,p.state.transmissionRenderTarget[E.id]),rs.upload(D,_c(Rt),En,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rs.upload(D,_c(Rt),En,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(D,"center",O.center),fe.setValue(D,"modelViewMatrix",O.modelViewMatrix),fe.setValue(D,"normalMatrix",O.normalMatrix),fe.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qe=V.uniformsGroups;for(let jn=0,Qn=Qe.length;jn<Qn;jn++){let vc=Qe[jn];U.update(vc,dn),U.bind(vc,dn)}}return dn}function Lu(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Du(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,z){It.get(E.texture).__webglTexture=N,It.get(E.depthTexture).__webglTexture=z;let V=It.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let z=It.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){P=E,T=N,A=z;let V=!0,O=null,it=!1,ft=!1;if(E){let bt=It.get(E);if(bt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(bt.__hasExternalTextures)w.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Et=E.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}let Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);let Ft=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][z]:O=Ft[N],it=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?O=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[z]:O=Ft,C.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else C.copy(ct).multiplyScalar(W).floor(),B.copy(Dt).multiplyScalar(W).floor(),F=Wt;if(Mt.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&Mt.drawBuffers(E,O),Mt.viewport(C),Mt.scissor(B),Mt.setScissorTest(F),it){let bt=It.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,z)}else if(ft){let bt=It.get(E.texture),Nt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,z||0,Nt)}v=-1},this.readRenderTargetPixels=function(E,N,z,V,O,it,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){Mt.bindFramebuffer(D.FRAMEBUFFER,St);try{let bt=E.texture,Nt=bt.format,Ft=bt.type;if(!_t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&z>=0&&z<=E.height-O&&D.readPixels(N,z,V,O,kt.convert(Nt),kt.convert(Ft),it)}finally{let bt=P!==null?It.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,V,O,it,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){let bt=E.texture,Nt=bt.format,Ft=bt.type;if(!_t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&z>=0&&z<=E.height-O){Mt.bindFramebuffer(D.FRAMEBUFFER,St);let Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(N,z,V,O,kt.convert(Nt),kt.convert(Ft),0);let Kt=P!==null?It.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Kt);let le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gd(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Et),D.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let V=Math.pow(2,-z),O=Math.floor(E.image.width*V),it=Math.floor(E.image.height*V),ft=N!==null?N.x:0,St=N!==null?N.y:0;w.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ft,St,O,it),Mt.unbindTexture()},this.copyTextureToTexture=function(E,N,z=null,V=null,O=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,z=null);let it,ft,St,bt,Nt,Ft,Et,Kt,le,de=E.isCompressedTexture?E.mipmaps[O]:E.image;z!==null?(it=z.max.x-z.min.x,ft=z.max.y-z.min.y,St=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Nt=z.min.y,Ft=z.isBox3?z.min.z:0):(it=de.width,ft=de.height,St=de.depth||1,bt=0,Nt=0,Ft=0),V!==null?(Et=V.x,Kt=V.y,le=V.z):(Et=0,Kt=0,le=0);let We=kt.convert(N.format),Jt=kt.convert(N.type),Rt;N.isData3DTexture?(w.setTexture3D(N,0),Rt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Dn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ui=D.getParameter(D.UNPACK_SKIP_ROWS),qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);let vs=E.isDataArrayTexture||E.isData3DTexture,fe=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let En=It.get(E),ys=It.get(N),Qe=It.get(En.__renderTarget),jn=It.get(ys.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<St;Qn++)vs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(E).__webglTexture,O,Ft+Qn),E.isDepthTexture?(fe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(N).__webglTexture,O,le+Qn),D.blitFramebuffer(bt,Nt,it,ft,Et,Kt,it,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):fe?D.copyTexSubImage3D(Rt,O,Et,Kt,le+Qn,bt,Nt,it,ft):D.copyTexSubImage2D(Rt,O,Et,Kt,le+Qn,bt,Nt,it,ft);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Rt,O,Et,Kt,le,it,ft,St,We,Jt,de.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,O,Et,Kt,le,it,ft,St,We,de.data):D.texSubImage3D(Rt,O,Et,Kt,le,it,ft,St,We,Jt,de):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Et,Kt,it,ft,We,Jt,de.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Et,Kt,de.width,de.height,We,de.data):D.texSubImage2D(D.TEXTURE_2D,O,Et,Kt,it,ft,We,Jt,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,Dn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),O===0&&N.generateMipmaps&&D.generateMipmap(Rt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,V=null,O=0){return E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,z,V,O)},this.initRenderTarget=function(E){It.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,Mt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var ca=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new I,hn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ks=class extends Rn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ki,Rs=new I,Ji=new I,ji=new I,Qi=new wt,Cs=new wt,_u=new he,Ir=new I,Ps=new I,Lr=new I,Nh=new wt,Ro=new wt,Oh=new wt,ua=class extends Re{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ha(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new hn(n,3,0,!1)),Ki.setAttribute("uv",new hn(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),_u.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Dr(Ir.set(-.5,-.5,0),ji,a,Ji,s,r),Dr(Ps.set(.5,-.5,0),ji,a,Ji,s,r),Dr(Lr.set(.5,.5,0),ji,a,Ji,s,r),Nh.set(0,0),Ro.set(1,0),Oh.set(1,1);let o=t.ray.intersectTriangle(Ir,Ps,Lr,!1,Rs);if(o===null&&(Dr(Ps.set(-.5,.5,0),ji,a,Ji,s,r),Ro.set(0,1),o=t.ray.intersectTriangle(Ir,Lr,Ps,!1,Rs),o===null))return;let l=t.ray.origin.distanceTo(Rs);l<t.near||l>t.far||e.push({distance:l,point:Rs.clone(),uv:Gn.getInterpolation(Rs,Ir,Ps,Lr,Nh,Ro,Oh,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Dr(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*Qi.x-s*Qi.y,Cs.y=s*Qi.x+r*Qi.y):Cs.copy(Qi),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(_u)}var Sn=class extends Rn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new I,fa=new I,Fh=new he,Is=new wi,Ur=new Mn,Co=new I,Bh=new I,ds=class extends Re{constructor(t=new me,e=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Fh.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){let p=u.getX(_),b=u.getX(_+1),S=Nr(this,t,Is,l,p,b);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=Nr(this,t,Is,l,_,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){let p=Nr(this,t,Is,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Nr(this,t,Is,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),e.distanceSqToSegment(da,fa,Co,Bh)>n)return;Co.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Co);if(!(l<t.near||l>t.far))return{distance:l,point:Bh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var kh=new I,zh=new I,hi=class extends ds{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kh.fromBufferAttribute(e,s),zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kh.distanceTo(zh);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends Rn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vh=new he,Ol=new wi,Or=new Mn,Fr=new I,pa=class extends Re{constructor(t=new me,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Vh.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=h.getX(g);Fr.fromBufferAttribute(c,m),Hh(Fr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Fr.fromBufferAttribute(c,g),Hh(Fr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hh(i,t,e,n,s,r,a){let o=Ol.distanceSqToPoint(i);if(o<e){let l=new I;Ol.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends je{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ga=class i extends me{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],u=1/e,c=new I,d=new wt,f=new I,g=new I,_=new I,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){let S=n+b*u*s,M=Math.sin(S),L=Math.cos(S);for(let T=0;T<=t.length-1;T++){c.x=t[T].x*M,c.y=t[T].y,c.z=t[T].x*L,a.push(c.x,c.y,c.z),d.x=b/e,d.y=T/(t.length-1),o.push(d.x,d.y);let A=l[3*T+0]*M,P=l[3*T+1],v=l[3*T+0]*L;h.push(A,P,v)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){let M=S+b*t.length,L=M,T=M+t.length,A=M+t.length+1,P=M+1;r.push(L,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var _a=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],d=[],f=[],g=0,_=[],m=n/2,p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function b(){let M=new I,L=new I,T=0,A=(e-t)/n;for(let P=0;P<=r;P++){let v=[],x=P/r,C=x*(e-t)+t;for(let B=0;B<=s;B++){let F=B/s,H=F*l+o,K=Math.sin(H),G=Math.cos(H);L.x=C*K,L.y=-x*n+m,L.z=C*G,c.push(L.x,L.y,L.z),M.set(K,A,G).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-x),v.push(g++)}_.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){let x=_[v][P],C=_[v+1][P],B=_[v+1][P+1],F=_[v][P+1];(t>0||v!==0)&&(u.push(x,C,F),T+=3),(e>0||v!==r-1)&&(u.push(C,B,F),T+=3)}h.addGroup(p,T,0),p+=T}function S(M){let L=g,T=new wt,A=new I,P=0,v=M===!0?t:e,x=M===!0?1:-1;for(let B=1;B<=s;B++)c.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let C=g;for(let B=0;B<=s;B++){let H=B/s*l+o,K=Math.cos(H),G=Math.sin(H);A.x=v*G,A.y=m*x,A.z=v*K,c.push(A.x,A.y,A.z),d.push(0,x,0),T.x=K*.5+.5,T.y=G*.5*x+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){let F=L+B,H=C+B;M===!0?u.push(H,H+1,F):u.push(H+1,H,F),P+=3}h.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xa=class i extends _a{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Br=new I,kr=new I,Po=new I,zr=new Gn,Vs=class extends me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(is*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],u=["a","b","c"],c=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(h[0]=a.getX(g),h[1]=a.getX(g+1),h[2]=a.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:_,b:m,c:p}=zr;if(_.fromBufferAttribute(o,h[0]),m.fromBufferAttribute(o,h[1]),p.fromBufferAttribute(o,h[2]),zr.getNormal(Po),c[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let b=0;b<3;b++){let S=(b+1)%3,M=c[b],L=c[S],T=zr[u[b]],A=zr[u[S]],P=`${M}_${L}`,v=`${L}_${M}`;v in d&&d[v]?(Po.dot(d[v].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[v]=null):P in d||(d[P]={index0:h[b],index1:h[S],normal:Po.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Br.fromBufferAttribute(o,_),kr.fromBufferAttribute(o,m),f.push(Br.x,Br.y,Br.z),f.push(kr.x,kr.y,kr.z)}this.setAttribute("position",new Xt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Hs=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,u=[],c=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],S=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){let T=L/e;c.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),c.y=t*Math.cos(a+S*o),c.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-S),b.push(h++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=u[p][b+1],M=u[p][b],L=u[p+1][b],T=u[p+1][b+1];(p!==0||a>0)&&f.push(S,M,T),(p!==n-1||l<Math.PI)&&f.push(M,L,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var va=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],u=new I,c=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(_),c.y=(t+e*Math.cos(m))*Math.sin(_),c.z=e*Math.sin(m),o.push(c.x,c.y,c.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ya=class extends me{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new I,r=new I;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=l.length;h<u;++h){let c=l[h],d=c.start,f=c.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),b=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,b),Gh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let u=3*o+h,c=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,c),Gh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Xt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Gh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Gs=class extends Rn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function k0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=t,o=2*e-n;break;case Vc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=t,l=2*n-e;break;case Vc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+b*a[h+L]+S*a[l+L]+M*a[c+L];return r}},Bl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=(n-e)/(s-e),c=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*c+a[l+d]*u;return r}},kl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&k0(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===to,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)l=!0;else{let c=o*n,d=c-n,f=c+n;for(let g=0;g!==n;++g){let _=e[c+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let c=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=xl;var Ri=class extends bn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=$r;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends bn{};zl.prototype.ValueTypeName="color";var Vl=class extends bn{};Vl.prototype.ValueTypeName="number";var Hl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)yn.slerpFlat(r,0,a,h-o,a,h,l);return r}},Ma=class extends bn{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=$r;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends bn{};Gl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){let f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},z0=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Io=new he,Wh=new I,Xh=new I,ql=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yl=class extends ql{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ea=class extends Sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ta=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ic="\\[\\]\\.:\\/",V0=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",H0="[^"+ic.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",sc),W0=/(WCOD+)?/.source.replace("WCOD",H0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),Y0=new RegExp("^"+G0+W0+X0+q0+"$"),Z0=["material","materials","bones","map"],Zl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(t){let e=Y0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Zl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var Pi=class extends ha{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ws=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qh=new I,Hr=new I,wa=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qh.subVectors(t,this.start),Hr.subVectors(this.end,this.start);let n=Hr.dot(Hr),r=Hr.dot(qh)/n;return e&&(r=Ae(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Yh=new I,Gr,Lo,Aa=class extends Re{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Gr===void 0&&(Gr=new me,Gr.setAttribute("position",new Xt([0,0,0,0,1,0],3)),Lo=new _a(0,.5,1,5,1),Lo.translate(0,-.5,0)),this.position.copy(e),this.line=new ds(Gr,new Sn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ce(Lo,new on({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Yh.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Yh,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Ra=class extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var xu={type:"change"},ac={type:"start"},yu={type:"end"},Ua=new wi,vu=new gn,K0=Math.cos(70*Ia.DEG2RAD),Te=new I,Xe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rc=1e-6,Na=class extends Ra{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new yn,this._lastTargetPosition=new I,this._quat=new yn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ws,this._sphericalDelta=new Ws,this._scale=1,this._panOffset=new I,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new I,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j0.bind(this),this._onPointerDown=J0.bind(this),this._onPointerUp=Q0.bind(this),this._onContextMenu=a_.bind(this),this._onMouseWheel=n_.bind(this),this._onKeyDown=i_.bind(this),this._onTouchStart=s_.bind(this),this._onTouchMove=r_.bind(this),this._onMouseDown=t_.bind(this),this._onMouseMove=e_.bind(this),this._interceptControlDown=o_.bind(this),this._interceptControlUp=l_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xu),this.update(),this.state=se.NONE}update(t=null){let e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Te.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ua.origin.copy(this.object.position),Ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ua.direction))<K0?this.object.lookAt(this.target):(vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ua.intersectPlane(vu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rc||this._lastTargetPosition.distanceToSquared(this.target)>rc?(this.dispatchEvent(xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function J0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function j0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Q0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yu),this.state=se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function t_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(ac)}function e_(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function n_(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(ac),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yu))}function i_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function s_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(ac)}function r_(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function a_(i){this.enabled!==!1&&i.preventDefault()}function o_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Mu=new an,Oa=new I,gs=class extends Ta{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Xt(t,3)),this.setAttribute("uv",new Xt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pi(e,6,1);return this.setAttribute("instanceStart",new hn(n,3,0)),this.setAttribute("instanceEnd",new hn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pi(e,6,1);return this.setAttribute("instanceColorStart",new hn(n,3,0)),this.setAttribute("instanceColorEnd",new hn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ya(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Mu.setFromBufferAttribute(e),this.boundingBox.union(Mu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oa.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oa)),Oa.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Oa));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new wt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};He.line={uniforms:La.merge([st.common,st.fog,st.line]),vertexShader:`
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
		`};var ui=class extends cn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:La.clone(He.line.uniforms),vertexShader:He.line.vertexShader,fragmentShader:He.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var oc=new ie,Su=new I,bu=new I,Ce=new ie,Pe=new ie,Cn=new ie,lc=new I,cc=new he,Ie=new wa,Eu=new I,Fa=new an,Ba=new Mn,Pn=new ie,In,Di;function Tu(i,t,e){return Pn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Pn.multiplyScalar(1/Pn.w),Pn.x=Di/e.width,Pn.y=Di/e.height,Pn.applyMatrix4(i.projectionMatrixInverse),Pn.multiplyScalar(1/Pn.w),Math.abs(Math.max(Pn.x,Pn.y))}function c_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ie.start.fromBufferAttribute(s,o),Ie.end.fromBufferAttribute(r,o),Ie.applyMatrix4(e);let h=new I,u=new I;In.distanceSqToSegment(Ie.start,Ie.end,u,h),u.distanceTo(h)<Di*.5&&t.push({point:u,pointOnLine:h,distance:In.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function h_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),c=-t.near;In.at(1,Cn),Cn.w=1,Cn.applyMatrix4(t.matrixWorldInverse),Cn.applyMatrix4(n),Cn.multiplyScalar(1/Cn.w),Cn.x*=r.x/2,Cn.y*=r.y/2,Cn.z=0,lc.copy(Cn),cc.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=u;d<f;d++){if(Ce.fromBufferAttribute(l,d),Pe.fromBufferAttribute(h,d),Ce.w=1,Pe.w=1,Ce.applyMatrix4(cc),Pe.applyMatrix4(cc),Ce.z>c&&Pe.z>c)continue;if(Ce.z>c){let S=Ce.z-Pe.z,M=(Ce.z-c)/S;Ce.lerp(Pe,M)}else if(Pe.z>c){let S=Pe.z-Ce.z,M=(Pe.z-c)/S;Pe.lerp(Ce,M)}Ce.applyMatrix4(n),Pe.applyMatrix4(n),Ce.multiplyScalar(1/Ce.w),Pe.multiplyScalar(1/Pe.w),Ce.x*=r.x/2,Ce.y*=r.y/2,Pe.x*=r.x/2,Pe.y*=r.y/2,Ie.start.copy(Ce),Ie.start.z=0,Ie.end.copy(Pe),Ie.end.z=0;let _=Ie.closestPointToPointParameter(lc,!0);Ie.at(_,Eu);let m=Ia.lerp(Ce.z,Pe.z,_),p=m>=-1&&m<=1,b=lc.distanceTo(Eu)<Di*.5;if(p&&b){Ie.start.fromBufferAttribute(l,d),Ie.end.fromBufferAttribute(h,d),Ie.start.applyMatrix4(a),Ie.end.applyMatrix4(a);let S=new I,M=new I;In.distanceSqToSegment(Ie.start,Ie.end,M,S),e.push({point:M,pointOnLine:S,distance:In.origin.distanceTo(M),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var ka=class extends ce{constructor(t=new gs,e=new ui({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Su.fromBufferAttribute(e,a),bu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Su.distanceTo(bu);let r=new Pi(s,2,1);return t.setAttribute("instanceDistanceStart",new hn(r,1,0)),t.setAttribute("instanceDistanceEnd",new hn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;In=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Di=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ba.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=Di*.5;else{let c=Math.max(s.near,Ba.distanceToPoint(In.origin));h=Tu(s,c,l.resolution)}if(Ba.radius+=h,In.intersectsSphere(Ba)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Fa.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Di*.5;else{let c=Math.max(s.near,Fa.distanceToPoint(In.origin));u=Tu(s,c,l.resolution)}Fa.expandByScalar(u),In.intersectsBox(Fa)!==!1&&(n?c_(this,e):h_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(oc),this.material.uniforms.resolution.value.set(oc.z,oc.w))}};var _s=class extends gs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var za=class extends ka{constructor(t=new _s,e=new ui({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var wu=Math.PI/180;function u_(i,t="#cfe0f2",e="rgba(8,18,26,.75)"){let n=document.createElement("canvas");n.width=256,n.height=64;let s=n.getContext("2d");s.font="bold 30px Helvetica, Arial, sans-serif";let r=Math.min(250,s.measureText(i).width+24);s.fillStyle=e,s.fillRect(128-r/2,8,r,48),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,33);let a=new ma(n);a.minFilter=rn;let o=new ua(new ks({map:a,depthTest:!1,transparent:!0}));return o.userData.aspect=4,o.renderOrder=10,o}var Au=i=>{let t=Math.pow(10,Math.floor(Math.log10(i/4))),e=i/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function d_(){let i=new qn,t=.67,e=.026,n=new Gs({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),s=new Gs({color:"#e8eef5",roughness:.5,emissive:"#223347"}),r=[];for(let f=0;f<=24;f++){let g=f/24,_=e*Math.pow(Math.sin(Math.PI*Math.pow(g,.75)),.55)*(g>.7?1-(g-.7)*1.2*(g-.7)/.3*.5:1);r.push(new wt(Math.max(_,.0015),(g-.5)*t))}let a=new ce(new ga(r,20),n);a.rotation.x=-Math.PI/2,i.add(a);let o=new ce(new ln(.012,.05,.12),n);o.position.set(0,e+.02,-.04),i.add(o);let l=(f,g,_)=>{let m=new ce(new ln(.075,.003,.03),s);return m.position.set(f,0,g),m.rotation.z=_,m};i.add(l(0,.27,0));let h=l(0,.27,Math.PI/2);i.add(h);let u=new ce(new ln(.05,.003,.02),s);u.position.set(0,0,-.17),i.add(u);let c=new ce(new va(.014,.003,6,16),s);c.position.set(0,0,.345),i.add(c);let d=new ce(new Hs(.008,8,8),new on({color:"#e0a93b"}));return d.position.set(0,0,-.34),i.add(d),i}var Va=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new la({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new ca,this.scene.fog=null,this.cam=new Ve(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new Na(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new Ea("#8fa6c0",1.1));let e=new ba("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new qn,this.scene.add(this.world),this.boat=d_(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let n=new me;n.setAttribute("position",new Xt([0,0,0],3)),this.dot=new pa(n,new zs({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new ui({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let s=()=>{requestAnimationFrame(s),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};s()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let n=(e.userData.size||.03)*t;e.scale.set(n*e.userData.aspect,n,1)})}sprite(t,e,n,s){let r=u_(t,s);return r.position.copy(e),r.userData.size=n,this.world.add(r),this.sprites.push(r),r}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new I(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let n=t.pts,s=t.stats;if(n.length<2){this.dirty=!0;return}let r=Math.max(1,.12*Math.max(s.w,s.l,s.maxDepth)),a=Math.min(s.bb.x0,-1)-r,o=Math.max(s.bb.x1,1)+r,l=Math.min(s.bb.y0,-1)-r,h=Math.max(s.bb.y1,1)+r,u=Math.max(e.depthLimit||0,s.maxDepth*1.2,1.2),c=(a+o)/2,d=-(l+h)/2,f=o-a,g=h-l;this.size=Math.max(f,g,u),this.cx=c,this.cz=d,this.dmax=u;let _=new ce(new ln(f,u,g),new on({color:"#0f4a7a",transparent:!0,opacity:.1,side:Oe,depthWrite:!1}));_.position.set(c,-u/2,d),this.world.add(_);let m=new hi(new Vs(new ln(f,u,g)),new Sn({color:"#2f6ca8",transparent:!0,opacity:.8}));m.position.copy(_.position),this.world.add(m);let p=new ce(new Ai(f,g),new on({color:"#1b6fb5",transparent:!0,opacity:.12,side:sn,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(c,0,d),this.world.add(p);let b=Au(Math.max(f,g)),S=(ot,X)=>{let mt=new Sn({color:"#35597d",transparent:!0,opacity:X}),Pt=[];for(let ue=Math.ceil(a/b)*b;ue<=o+1e-6;ue+=b)Pt.push(ue,ot,d-g/2,ue,ot,d+g/2);for(let ue=Math.ceil(-h/b)*b;ue<=-l+1e-6;ue+=b)Pt.push(a,ot,ue,o,ot,ue);let Ht=new me;Ht.setAttribute("position",new Xt(Pt,3));let D=new hi(Ht,mt);this.world.add(D)};S(0,.6),S(-u,.25);let M=new Aa(new I(0,0,-1),new I(a+.5*r,0,d-g/2+.2*r),Math.max(r*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(M),this.sprite("N",new I(a+.5*r,0,d-g/2-this.size*.05),.04,"#ff8a7d");let L=a,T=d+g/2,A=Au(u),P=[L,0,T,L,-u,T];for(let ot=0;ot<=u+1e-6;ot+=A)P.push(L,-ot,T,L-this.size*.015,-ot,T),this.sprite(ot.toFixed(A<1?1:0)+" m",new I(L-this.size*.07,-ot,T),.03,"#9fc3ea");let v=new me;if(v.setAttribute("position",new Xt(P,3)),this.world.add(new hi(v,new Sn({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=u){let ot=new ce(new Ai(f,g),new on({color:"#e0584b",transparent:!0,opacity:.08,side:sn,depthWrite:!1}));ot.rotation.x=-Math.PI/2,ot.position.set(c,-e.depthLimit,d),this.world.add(ot)}let x=s.bb.x0,C=s.bb.x1,B=s.bb.y0,F=s.bb.y1,H=new hi(new Vs(new ln(Math.max(C-x,.001),Math.max(s.maxDepth,.001),Math.max(F-B,.001))),new Sn({color:"#e0a93b",transparent:!0,opacity:.55}));H.position.set((x+C)/2,-s.maxDepth/2,-(B+F)/2),this.world.add(H),C-x>.2&&this.sprite(`B ${(C-x).toFixed(1)} m`,new I((x+C)/2,0,-B+this.size*.03),.03,"#ffd27a"),F-B>.2&&this.sprite(`L ${(F-B).toFixed(1)} m`,new I(C+this.size*.04,0,-(B+F)/2),.03,"#ffd27a"),s.maxDepth>.2&&this.sprite(`T ${s.maxDepth.toFixed(1)} m`,new I(C,-s.maxDepth/2,-B),.03,"#ffd27a");let K=[],G=[],tt=[],W=new Vt,rt=Math.max(s.maxDepth,.5);n.forEach(ot=>{let X=this.P(ot);K.push(X.x,X.y,X.z),tt.push(X.x,0,X.z),this.color==="depth"?W.setHSL(.55-.1*ot.z/rt,.9,.45+.25*(1-ot.z/rt)):W.set(Ye[t.steps?.[ot.i]?.t]?.color||"#9aa7b8"),G.push(W.r,W.g,W.b)});let lt=new _s;lt.setPositions(K),lt.setColors(G);let ct=new za(lt,this.lm);ct.computeLineDistances(),this.world.add(ct);let Dt=new me;Dt.setAttribute("position",new Xt(tt,3)),this.world.add(new ds(Dt,new Sn({color:"#7ea6d1",transparent:!0,opacity:.35})));let Wt=[],Z=-99;n.forEach(ot=>{if(ot.t-Z>=Math.max(5,s.dur/40)&&ot.z>.05){Z=ot.t;let X=this.P(ot);Wt.push(X.x,X.y,X.z,X.x,0,X.z)}});let et=new me;et.setAttribute("position",new Xt(Wt,3)),this.world.add(new hi(et,new Sn({color:"#4d7aa8",transparent:!0,opacity:.35})));let yt={};n.forEach(ot=>{if(ot.i>=0&&!yt[ot.i]){yt[ot.i]=1;let X=this.P(ot),mt=new ce(new Hs(this.size*.006,10,10),new on({color:Ye[t.steps?.[ot.i]?.t]?.color||"#fff"}));mt.position.copy(X),this.world.add(mt),this.sprite(`${ot.i+1} ${Ye[t.steps?.[ot.i]?.t]?.label||""}`,X.clone().add(new I(0,this.size*.03,0)),.02)}});let at=new ce(new xa(this.size*.01,this.size*.03,12),new on({color:"#4fb477"}));at.position.copy(this.P(n[0])).add(new I(0,this.size*.02,0)),at.rotation.x=Math.PI,this.world.add(at),this.sprite("START",this.P(n[0]).add(new I(0,this.size*.06,0)),.024,"#7fe0a0");let Ct=n[n.length-1];this.sprite("ENDE",this.P(Ct).add(new I(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,n=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let n=0,s=e.length-1;for(;s-n>1;){let c=n+s>>1;e[c].t<=t?n=c:s=c}let r=e[n],a=e[s],o=a.t>r.t?Math.min(1,Math.max(0,(t-r.t)/(a.t-r.t))):0,l=c=>r[c]+(a[c]-r[c])*o,h={x:l("x"),y:l("y"),z:l("z")};this.boat.position.copy(this.P(h)),this.dot.position.copy(this.boat.position);let u=a.h-r.h;if(u>180&&(u-=360),u<-180&&(u+=360),this.boat.rotation.y=-(r.h+u*o)*wu,this.boat.rotation.x=l("p")*wu,this.follow){let c=this.boat.position;this.ctl.target.lerp(c,1)}return this.cur={...r,x:h.x,y:h.y,z:h.z,h:r.h+u*o,p:l("p"),v:l("v"),f:l("f"),thr:l("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var Fe=(i,t,e="")=>R("button",{class:"btn "+e,onclick:t},i);function f_(i,t,e,n){let s=i.getContext("2d"),r=i.width/2,a=i.height/2;s.setTransform(2,0,0,2,0,0),s.clearRect(0,0,r,a),s.fillStyle="#0a141d",s.fillRect(0,0,r,a);let o=t.pts,l=t.stats;if(o.length<2)return;let h=44,u=10,c=10,d=20,f=Math.max(l.maxDepth*1.15,1),g=Math.max(l.dur,1),_=T=>h+T/g*(r-h-u),m=T=>c+T/f*(a-c-d);s.font="10px Helvetica, Arial",s.fillStyle="#6f869c",s.strokeStyle="#162838",s.textAlign="right";let p=f<=3?.5:f<=10?1:f<=30?5:10;for(let T=0;T<=f;T+=p)s.beginPath(),s.moveTo(h,m(T)),s.lineTo(r-u,m(T)),s.stroke(),s.fillText(T+" m",h-4,m(T)+3);s.textAlign="center";let b=g<120?10:g<600?60:g<3600?300:900;for(let T=0;T<=g;T+=b)s.fillText(T>=60?Math.round(T/60)+" min":T+" s",_(T),a-6);n&&n<f&&(s.strokeStyle=Be.bad,s.setLineDash([4,3]),s.beginPath(),s.moveTo(h,m(n)),s.lineTo(r-u,m(n)),s.stroke(),s.setLineDash([]));let S=-2,M=0,L=[];o.forEach((T,A)=>{T.i!==S&&(S>=-1&&L.push([S,M,T.t]),S=T.i,M=T.t)}),L.push([S,M,g]),L.forEach(([T,A,P])=>{T<0||(s.fillStyle=(Ye[t.steps[T]?.t]?.color||"#888")+"22",s.fillRect(_(A),c,Math.max(1,_(P)-_(A)),a-c-d))}),s.lineWidth=2,s.strokeStyle="#4aa3ff",s.beginPath(),o.forEach((T,A)=>{A?s.lineTo(_(T.t),m(T.z)):s.moveTo(_(T.t),m(T.z))}),s.stroke(),s.lineWidth=1,s.strokeStyle="#8a6fd055",s.beginPath(),o.forEach((T,A)=>{let P=c+(1-T.f/100)*(a-c-d)*.25+(a-c-d)*.75;A?s.lineTo(_(T.t),P):s.moveTo(_(T.t),P)}),s.stroke(),s.fillStyle="#8a6fd0",s.textAlign="left",s.fillText("Ballast",h+4,a-d-4),s.strokeStyle="#e0a93b",s.lineWidth=1.5,s.beginPath(),s.moveTo(_(e),c),s.lineTo(_(e),a-d),s.stroke()}function p_(i,t,e){let n=i.getContext("2d"),s=i.width/2,r=i.height/2;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,s,r),n.fillStyle="#0a141d",n.fillRect(0,0,s,r);let a=t.pts,o=t.stats;if(a.length<2)return;let l=26,h=Math.max(o.bb.x1-o.bb.x0,2),u=Math.max(o.bb.y1-o.bb.y0,2),c=Math.min((s-2*l)/h,(r-2*l)/u),d=s/2-(o.bb.x0+o.bb.x1)/2*c,f=r/2+(o.bb.y0+o.bb.y1)/2*c,g=S=>d+S*c,_=S=>f-S*c,m=(()=>{let S=40/c,M=Math.pow(10,Math.floor(Math.log10(S))),L=S/M;return(L<1.5?1:L<3.5?2:L<7.5?5:10)*M})();n.strokeStyle="#162838",n.fillStyle="#6f869c",n.font="10px Helvetica, Arial",n.textAlign="left";for(let S=Math.floor(-d/c/m)*m;g(S)<s;S+=m)n.beginPath(),n.moveTo(g(S),0),n.lineTo(g(S),r),n.stroke();for(let S=Math.floor((f-r)/c/m)*m;_(S)>0;S+=m)n.beginPath(),n.moveTo(0,_(S)),n.lineTo(s,_(S)),n.stroke();n.fillText(`Raster ${m} m`,6,r-6),n.fillStyle=Be.bad,n.fillText("N \u2191",s-28,14),n.lineWidth=2;for(let S=1;S<a.length;S++)n.strokeStyle=Ye[t.steps[a[S].i]?.t]?.color||"#9aa7b8",n.beginPath(),n.moveTo(g(a[S-1].x),_(a[S-1].y)),n.lineTo(g(a[S].x),_(a[S].y)),n.stroke();n.fillStyle=Be.ok,n.beginPath(),n.arc(g(0),_(0),4,0,7),n.fill();let p=a[a.length-1];n.fillStyle=Be.bad,n.beginPath(),n.arc(g(p.x),_(p.y),4,0,7),n.fill();let b=a.find(S=>S.t>=e)||p;n.strokeStyle="#e0a93b",n.lineWidth=2,n.beginPath(),n.arc(g(b.x),_(b.y),7,0,7),n.stroke(),n.save(),n.translate(g(b.x),_(b.y)),n.rotate(b.h*Math.PI/180),n.fillStyle="#e0a93b",n.beginPath(),n.moveTo(0,-11),n.lineTo(-4,-4),n.lineTo(4,-4),n.fill(),n.restore()}function Ru(){let i=Un.get("mission",null);i=Array.isArray(i)&&i.length?i:$a("Pool Funktionstest");let t=null,e=0,n=!1,s=10,r=0,a=-1,o=Un.get("h0",0),l=Un.get("pmax",25),h=Un.get("capwh",6.3),u=R("div",{class:"steps-list"}),c=R("div",{class:"warns"}),d=R("div",{class:"view3d"}),f={dur:ae("Dauer"),dist:ae("Strecke","m"),dep:ae("Max Tiefe","m"),box:ae("Bahn B \xD7 L","m"),end:ae("Ende zu Start","m"),en:ae("Energie","Wh"),bat:ae("Akku Bedarf","%"),spd:ae("\xD8 Fahrt","m/s")},g=R("canvas",{width:1e3,height:300,class:"cv"}),_=R("canvas",{width:600,height:300,class:"cv"}),m=R("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+m.value,n=!1,S(),H()}}),p=R("div",{class:"hud"}),b=Fe("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),n=!n,r=performance.now(),S())},"play"),S=()=>{b.textContent=n?"\u275A\u275A":"\u25B6"},M=new Va(d),L=R("select",{class:"in sm",onchange:()=>{s=+L.value}},[1,5,10,30,100].map(X=>R("option",{value:X,selected:X===s},`${X}\xD7`))),T=R("select",{class:"in sm",onchange:()=>{M.color=T.value,F()}},R("option",{value:"step"},"Farbe: Schritt"),R("option",{value:"depth"},"Farbe: Tiefe")),A=R("input",{type:"checkbox",onchange:()=>{M.follow=A.checked,M.at(e)}}),P=R("select",{class:"in sm",onchange:()=>{M.boat.scale.setScalar(+P.value||M.boatScale),M.dirty=!0}},R("option",{value:0},"Boot: Auto"),R("option",{value:1},"Boot: 1:1"),R("option",{value:5},"Boot: 5\xD7"),R("option",{value:20},"Boot: 20\xD7")),v=()=>er(X=>Y.par[X]),x=()=>{let X=v();t=ir(i,X,{h0:o,pMax:l}),t.steps=i;let mt=t.stats;m.max=mt.dur,e=Math.min(e,mt.dur),f.dur.set(Xa(mt.dur)),f.dist.set(Tt(mt.dist,1)),f.dep.set(Tt(mt.maxDepth,2),mt.maxDepth>X.depthMax?"bad":""),f.box.set(`${Tt(mt.w,1)} \xD7 ${Tt(mt.l,1)}`),f.end.set(Tt(mt.endDist,1)),f.en.set(Tt(mt.wh,2));let Pt=mt.wh/h*100;f.bat.set(Tt(Pt,0),Pt>60?"bad":Pt>40?"warn":""),f.spd.set(Tt(mt.avgV,2)),c.innerHTML="",[...nr(i,X),...t.notes.map(D=>({i:D.i,m:D.m}))].forEach(D=>c.append(R("div",{class:"w"},(D.i>=0?`Schritt ${D.i+1}: `:"")+D.m))),Un.set("mission",i),F(),H()},C=null,B=()=>{clearTimeout(C),C=setTimeout(x,120)},F=()=>{t&&M.setPlan(t,{depthLimit:v().depthMax,boatScale:+P.value||void 0})},H=()=>{if(!t)return;m.value=e;let X=M.at(e);f_(g,t,e,v().depthMax),p_(_,t,e),X&&(p.innerHTML="",[["t",Xa(X.t)],["Tiefe",Tt(X.z,2)+" m"],["Kurs",Tt((X.h%360+360)%360,0)+"\xB0"],["Nick",Tt(X.p,0)+"\xB0"],["Fahrt",Tt(X.v,2)+" m/s"],["Ballast",Tt(X.f,0)+" %"],["Schritt",X.i>=0?`${X.i+1} ${Ye[i[X.i]?.t]?.label||""}`:"Start"]].forEach(([mt,Pt])=>p.append(R("span",null,mt,R("b",null,Pt)))),a=X.i,K())},K=()=>{[...u.children].forEach((X,mt)=>X.classList.toggle("sel",mt===a))},G=()=>{u.innerHTML="",i.forEach((X,mt)=>{let Pt=Ye[X.t],Ht=nr(i,v()).some(_t=>_t.i===mt),D=R("select",{class:"in sm",onchange:()=>{let _t=X.v;i[mt]=tr(D.value),G(),B()}},Ya.map(_t=>R("option",{value:_t,selected:_t===X.t},Ye[_t].label))),ue=Pt.f.map((_t,Mt)=>{let Qt=R("input",{class:"in num",type:"number",step:_t[5],min:_t[3],max:_t[4],value:X.v[Mt],onchange:()=>{X.v[Mt]=Ni(+Qt.value,_t[3],_t[4]),Qt.value=X.v[Mt],B()}});return R("label",{class:"fld"},R("span",null,_t[0],_t[1]?` (${_t[1]})`:""),Qt)}),Gt=_t=>()=>{let Mt=mt+_t;Mt<0||Mt>=i.length||([i[mt],i[Mt]]=[i[Mt],i[mt]],G(),x())};u.append(R("div",{class:"step"+(Ht?" warn":""),onclick:()=>{let _t=t.pts.find(Mt=>Mt.i===mt);_t&&(e=_t.t,n=!1,S(),H())}},R("div",{class:"sh"},R("i",{style:{background:Pt.color}}),R("b",null,mt+1),D,R("span",{class:"sp"}),R("button",{class:"ib",title:"hoch",onclick:_t=>{_t.stopPropagation(),Gt(-1)()}},"\u2191"),R("button",{class:"ib",title:"runter",onclick:_t=>{_t.stopPropagation(),Gt(1)()}},"\u2193"),R("button",{class:"ib",title:"duplizieren",onclick:_t=>{_t.stopPropagation(),i.splice(mt+1,0,JSON.parse(JSON.stringify(X))),G(),x()}},"\u29C9"),R("button",{class:"ib del",title:"l\xF6schen",onclick:_t=>{_t.stopPropagation(),i.splice(mt,1),G(),x()}},"\u2715")),ue.length?R("div",{class:"flds"},ue):R("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),K()},tt=R("select",{class:"in"},Ya.map(X=>R("option",{value:X},Ye[X].label))),W=()=>{if(i.length>=Qs)return re("Maximal 64 Schritte","warn");i.push(tr(tt.value)),G(),x(),u.scrollTop=u.scrollHeight},rt=R("select",{class:"in",onchange:()=>{rt.value&&((!i.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(i=$a(rt.value),e=0,G(),x()),rt.value="")}},R("option",{value:""},"Vorlage laden \u2026"),Object.keys(Za).map(X=>R("option",{value:X},X))),lt=R("dialog",{class:"dlg"}),ct={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},Dt=(X,mt,Pt,Ht=.1)=>R("label",{class:"fld"},R("span",null,`${X} (${Pt})`),R("input",{class:"in num",type:"number",step:Ht,value:ct[mt],onchange:D=>{ct[mt]=+D.target.value}}));lt.append(R("h3",null,"Yo Yo Profil erzeugen"),R("div",{class:"flds"},Dt("Flachste Tiefe","lo","m"),Dt("Tiefste Tiefe","hi","m"),Dt("Zyklen","n","x",1),Dt("Fahrt","spd","%",1),Dt("Max Sinkrate","rate","m/s",.01),Dt("Max Nick","pit","deg",1)),R("div",{class:"row"},Fe("Anh\xE4ngen",()=>{let X=i.length;i.push({t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.hi,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]}),ct.n>1&&i.push({t:"REPEAT",v:[ct.n-1,X+1,0,0]}),lt.close(),G(),x()},"primary"),Fe("Abbrechen",()=>lt.close())));let Wt=R("span",{class:"dim"}),Z=async X=>{if(!Y.connected)return re("Nicht verbunden","bad");let mt=Y.info?.maxsteps||64;if(i.length>mt)return re(`Boot speichert nur ${mt} Schritte`,"bad");if(nr(i,v()).filter(D=>D.m.includes("R\xFCcksprung")).length)return re("R\xFCcksprung Schritt pr\xFCfen","bad");let Ht=await Me("MIS CLEAR");if(!(!Ht||!Ht.ok)){for(let D=0;D<i.length;D++)if(Wt.textContent=`\xDCbertrage ${D+1}/${i.length}`,Ht=await Me(yc([i[D]])[0].replace(/^/,"")),!Ht||!Ht.ok){Wt.textContent="";return}X&&await Me("MIS SAVE"),Wt.textContent="",re(`Mission mit ${i.length} Schritten ${X?"gespeichert":"\xFCbertragen"}`,"ok"),fi(`Mission \xFCbertragen (${i.length} Schritte)`)}},et=async()=>{let X=await Me("MIS GET");X&&X.ok&&Array.isArray(X.data)&&(i=sr(X.data),e=0,G(),x(),re(`${i.length} Schritte vom Boot gelesen`,"ok"))},yt=async()=>{if(!Y.connected)return re("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await Me("MIS START","Mission l\xE4uft")},at=(X,mt,Pt,Ht)=>R("label",{class:"fld"},R("span",null,`${X} (${Ht})`),R("input",{class:"in num",type:"number",value:mt,step:"any",onchange:D=>Pt(+D.target.value)})),Ct=R("div",{class:"page mis"},R("div",{class:"toolbar"},rt,Fe("Neu",()=>{confirm("Mission leeren?")&&(i=[],e=0,G(),x())}),Fe("Laden",async()=>{let X=await Ks(".json");if(X)try{i=JSON.parse(X).steps,e=0,G(),x()}catch{re("Datei ung\xFCltig","bad")}}),Fe("Speichern",()=>$s("mission.json",JSON.stringify({app:"FATHOM",steps:i},null,1))),Fe("Yo Yo \u2026",()=>lt.showModal()),R("span",{class:"sp"}),Wt,Fe("Zum Boot senden",()=>Z(!1),"primary"),Fe("Senden + im Boot speichern",()=>Z(!0)),Fe("Vom Boot lesen",et),Fe("START",yt,"go"),Fe("STOP",()=>Me("MIS STOP","Mission gestoppt"),"stop")),R("div",{class:"stats mstats"},Object.values(f).map(X=>X.el)),R("div",{class:"mgrid"},R("div",{class:"left"},u,R("div",{class:"addrow"},tt,Fe("+ Schritt",W,"primary")),c,R("details",{class:"opt"},R("summary",null,"Annahmen f\xFCr die Vorschau"),at("Startkurs",o,X=>{o=X,Un.set("h0",X),x()},"deg"),at("Leistung bei 100 % Gas",l,X=>{l=X,Un.set("pmax",X),x()},"W"),at("Akku Energie (2S 850 mAh)",h,X=>{h=X,Un.set("capwh",X),x()},"Wh"),R("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),R("div",{class:"right"},R("div",{class:"vwrap"},d,p,R("div",{class:"vtools"},Fe("Iso",()=>M.view("iso")),Fe("Oben",()=>M.view("top")),Fe("Seite",()=>M.view("side")),T,P,R("label",{class:"chk"},A," Kamera folgt"))),R("div",{class:"tlbar"},b,m,L),R("div",{class:"grid2c"},R("div",{class:"card tight"},R("h3",null,"Tiefenprofil"),g),R("div",{class:"card tight"},R("h3",null,"Draufsicht"),_)))),lt),ot=()=>{if(requestAnimationFrame(ot),!n||!t)return;let X=performance.now();e+=(X-r)/1e3*s,r=X,e>=t.stats.dur&&(e=t.stats.dur,n=!1,S()),H()};return ot(),ye.on("par",()=>{Y.tab==="mission"&&B()}),{el:Ct,show(){M.setActive(!0),G(),x()},hide(){M.setActive(!1),n=!1,S()},update(X){X.mis.run&&(a=X.mis.i,K())},sim:M,setTime(X){e=X,H()},get plan(){return t}}}var m_='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',g_=/(^|\.)underpressure\.ch$/.test(location.hostname);function __(){let i=R("dialog",{class:"dlg"},R("h2",null,"Per WLAN verbinden"),R("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),R("ol",null,R("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),R("li",null,"Mit dem WLAN ",R("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),R("li",null,"Im Browser ",R("code",null,"http://192.168.4.1")," \xF6ffnen."),R("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),R("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten, Missionsstart und Bootloader gehen nur per Crossfire oder USB."),R("div",{class:"row"},R("button",{class:"btn primary",onclick:()=>i.close()},"Verstanden")));i.addEventListener("close",()=>i.remove()),document.body.append(i),i.showModal()}var x_=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ge={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,mission:null,term:null},xs={async connect(){if(Y.connected)return;if(!Ss.supported())return re("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let i=new Ss;try{await i.connect()}catch(t){t.name!=="NotFoundError"&&re("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}hc(i,!1)},async wifi(i,t=1){if(Y.connected)return;if(location.protocol==="https:")return __();let e=new rr(i||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?Y.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(n){if(t>1){setTimeout(()=>xs.wifi(i,t-1),2e3);return}re("WLAN Verbindung fehlgeschlagen: "+n.message,"bad",7e3);return}Y.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!Y.demo&&(re("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>xs.wifi(e.host,15),2500))}),hc(e,!1)},async demo(){Y.connected&&await Y.link.disconnect();let i=new ar;await i.connect(),hc(i,!0)},async disconnect(){Y.link&&await Y.link.disconnect()}};async function hc(i,t){if(Y.link=i,Y.demo=t,Y.connected=!0,Y.wifi=!!i.wifi,i.on("rx",r=>ye.emit("rx",r)),i.on("tx",r=>ye.emit("tx",r)),i.on("ev",r=>fi(r,/ERR|FAILSAFE|LECK/i.test(r)?"bad":"info")),i.on("tel",r=>{Y.tel=r,Y.lastTel=performance.now()}),i.on("close",()=>{Y.link===i&&(Y.connected=!1,Y.tel=null,ye.emit("conn"),uc(),fi("Verbindung getrennt","warn"),re("Verbindung getrennt","warn"))}),i.on("error",r=>fi("Fehler: "+(r.message||r),"bad")),ye.emit("conn"),uc(),!(await i.cmd("PING",1500)).ok){re("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await i.disconnect();return}let n=await i.cmd("INFO");n.ok&&(Y.info=n.data),await bs();let s=await i.cmd("MIS GET");Y.boatMis=s.data,await i.cmd(i.wifi?"STREAM 10":"STREAM 20"),fi(`Verbunden mit ${Y.info?.fw} ${Y.info?.ver}`,"ok"),re(t?"Demo Boot verbunden":"Boot verbunden","ok"),qs(Y.tab==="setup"?"dash":Y.tab)}var Cu,Ha,Pu;function uc(){let i=Y.tel,t=Tn("#conn");t&&(t.className="conn "+(Y.connected?"on":""),t.textContent=Y.connected?Y.demo?"DEMO":Y.wifi?"WLAN":"USB":"GETRENNT");let e=Tn("#armbtn");e&&(e.disabled=!Y.connected||Y.wifi,e.title=Y.wifi?"Scharfschalten nur per Crossfire oder USB":"",e.textContent=i&&i.arm?"DISARM":"ARM",e.className="btn "+(i&&i.arm?"stop":"warnb"));let n=Tn("#modesel");n&&(n.disabled=!Y.connected,i&&document.activeElement!==n&&(n.value=i.m));let s=Tn("#disc");s&&(s.style.display=Y.connected?"":"none")}function qs(i){let t=Ge[Y.tab];t&&t.hide&&t.hide(),Y.tab=i,Ha.innerHTML="";let e=Ge[i];Ha.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(n=>n.classList.toggle("on",n.dataset.k===i)),ye.emit("tab",i),location.hash=i}ye.on("goto",qs);function v_(){let i=Tn("#app");Cu=R("header",{class:"top"},R("div",{class:"brand",html:m_}),R("div",{class:"bt"},R("b",null,"FATHOM"),R("span",null,"Under Pressure \xB7 U-Boote")),R("span",{class:"sp"}),R("span",{id:"conn",class:"conn"},"GETRENNT"),R("select",{id:"modesel",class:"in sm",disabled:!0,onchange:r=>Me("MODE "+r.target.value)},["MANUAL","STAB","DEPTH","MISSION"].map(r=>R("option",{value:r},r)),R("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),R("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>Me(Y.tel&&Y.tel.arm?"DISARM":"ARM")},"ARM"),R("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>xs.disconnect()},"Trennen"));let t=R("nav",{class:"nav"},x_.map(([r,a,o])=>R("button",{"data-k":r,onclick:()=>qs(r),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${o}"/></svg><span>${a}</span>`})),R("span",{class:"sp"}),R("div",{class:"navfoot"},g_?R("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Ha=R("main",{class:"content"}),Pu=R("footer",{class:"status"},R("span",{id:"sb1"},"bereit"),R("span",{class:"sp"}),R("span",{id:"sb2"},"FATHOM Konfigurator 0.2")),i.append(Cu,R("div",{class:"body"},t,Ha),Pu),Ge.setup=Ac(xs),Ge.dash=Rc(),Ge.sensors=Cc(),Ge.calib=Ic(),Ge.tests=Lc(),Ge.params=Dc(),Ge.mission=Ru(),Ge.term=Uc(),wn.forEach(r=>{Y.par[r.k]=r.d}),ye.on("ev",()=>{let r=Y.events[Y.events.length-1];r&&(Tn("#sb1").textContent=r.m)});let e=0,n=r=>{if(requestAnimationFrame(n),Y.connected&&Y.tel&&Y.lastTel!==e){e=Y.lastTel;let a=Ge[Y.tab];a&&a.update&&a.update(Y.tel),uc(),Y.tab!=="tests"&&Ge.tests.update}Y.connected&&performance.now()-Y.lastTel>2e3&&Y.lastTel?Tn("#sb2").textContent="keine Telemetrie":Y.connected&&(Tn("#sb2").textContent=Y.demo?"Demo":Y.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(n);let s=location.hash.slice(1);qs(Ge[s]?s:"setup"),new URLSearchParams(location.search).has("demo")&&xs.demo(),window.addEventListener("beforeunload",()=>{if(Y.connected)try{Y.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&Y.connected&&Y.tel&&Y.tel.tst&&Ge.tests.stopAll()}),window.__fathom={S:Y,pages:Ge,api:xs,setTab:qs}}v_();})();
