(()=>{var A=(i,t,...e)=>{let n=document.createElement(i);if(t)for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r));return e.flat(9).forEach(s=>{s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)))}),n},An=(i,t=document)=>t.querySelector(i),Qa=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(n=>n(...e))}},xe=new Qa,X={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(i,t){let e=this.par[i];return e===void 0?t:e}};function Jt(i,t="info",e=3500){let n=An("#toasts");n||(n=A("div",{id:"toasts"}),document.body.append(n));let s=A("div",{class:"toast "+t},i);n.append(s),setTimeout(()=>s.remove(),e)}var mt=(i,t=1)=>i==null||isNaN(i)?"\u2013":(+i).toFixed(t),As=i=>{i=Math.round(i);let t=Math.floor(i/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(i%60).padStart(2,"0")} s`},ei=(i,t,e)=>Math.min(e,Math.max(t,i)),mi=(i,t="info")=>{X.events.push({t:new Date,m:i,kind:t}),X.events.length>300&&X.events.shift(),xe.emit("ev")};function gi(i,t,e="application/json"){let n=A("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:i});document.body.append(n),n.click(),n.remove()}function nr(i){return new Promise(t=>{let e=A("input",{type:"file",accept:i,onchange:()=>{let n=e.files[0];if(!n)return t(null);let s=new FileReader;s.onload=()=>t(s.result),s.readAsText(n)}});e.click()})}var On={get(i,t){try{let e=localStorage.getItem("fathom."+i);return e===null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("fathom."+i,JSON.stringify(t))}catch{}}};var Rn=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (nur bei esc.reverse 1)"},{id:"ESC_REV",k:"esc.reverse",d:0,mn:0,mx:1,u:"",g:"Limiten",h:"0 = ESC nur vorwaerts (Stop 1000 us), 1 = ESC mit Rueckwaertslauf (Stop 1500 us)"},{id:"PUMP_INV",k:"pump.invert",d:0,mn:0,mx:1,u:"",g:"Ballast",h:"1 = Pumpenrichtung tauschen (statt Schlaeuche umzustecken)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Batterie",h:"Leckage Schwelle (0..1)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"FS_ACT",k:"fs.rc_action",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"RC Verlust: 0 = Auftauchen, 1 = RTH (nur mit Home und GPS)"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"RC_RTH",k:"rc.ch.rth",d:8,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal RTH (hoch = Heimkehr)"},{id:"GPS_SATS",k:"gps.min_sats",d:5,mn:3,mx:12,u:"",g:"GPS",h:"Mindestzahl Satelliten fuer gueltigen Fix"},{id:"GPS_HDOP",k:"gps.max_hdop",d:3,mn:.8,mx:20,u:"",g:"GPS",h:"maximaler HDOP fuer gueltigen Fix"},{id:"RTH_THR",k:"rth.throttle",d:20,mn:5,mx:100,u:"%",g:"RTH",h:"Vortrieb beim Heimfahren an der Oberflaeche"},{id:"RTH_RAD",k:"rth.radius",d:3,mn:1,mx:50,u:"m",g:"RTH",h:"Ankunftsradius um Home"},{id:"BB_EN",k:"bb.enable",d:1,mn:0,mx:1,u:"",g:"Blackbox",h:"Blackbox aufzeichnen (nur im ARM Zustand)"},{id:"BB_HZ",k:"bb.hz",d:10,mn:1,mx:20,u:"Hz",g:"Blackbox",h:"Aufzeichnungsrate"},{id:"IMU_MODE",k:"imu.mode",d:0,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"}];var Ze={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},eo=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","REPEAT"],rr=64,ar=i=>({t:i,v:Ze[i].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),sr=i=>(i%360+360)%360,to=i=>(i=sr(i),i>180?i-360:i),Fn=(i,t,e)=>Math.min(e,Math.max(t,i)),$u=180/Math.PI,ir=Math.PI/180;function or(i){let t=(e,n)=>{let s=i?i(e):void 0;return s===void 0||isNaN(s)?n:s};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function lr(i,t){let e=[];return i.length>rr&&e.push({i:-1,m:`Maximal ${rr} Schritte, Boot speichert nur diese.`}),i.forEach((n,s)=>{let r=n.v;if(n.t==="DIVE"&&(r[0]>t.depthMax&&e.push({i:s,m:`Tiefe ${r[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),r[2]>t.pitchMax&&e.push({i:s,m:`Nick ${r[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(n.t)){let a=n.t==="CRUISE"?r[0]:n.t==="CURVE"?r[2]:r[3];a>t.thrMax&&e.push({i:s,m:`Fahrt ${a} % wird auf Limit ${t.thrMax} % begrenzt.`})}n.t==="REPEAT"&&r[1]>=s&&e.push({i:s,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),n.t==="CURVE"&&r[1]<.5&&e.push({i:s,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),i.length&&i[i.length-1].t!=="SURFACE"&&e.push({i:i.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function cr(i,t,e={}){let s=[],r=[],a={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},o=P=>{s.push({...a,i:P})},l=0,h=0,u=0,c={};o(-1);let d=4*3600,f=(P,S,T,R,M)=>{let y=0;for(;!P(y)&&y<T&&u<d;)S(y),y+=.1,u+=.1,a.t=u,Math.round(y/.1)%5===0&&o(R);y>=T&&r.push({i:R,m:`${M}: Ziel in ${Math.round(T)} s nicht erreicht (Vorschau).`}),o(R)},g=(P,S,T)=>{let R=Fn(P,0,t.thrMax)*t.ms;a.v=R,a.thr=Fn(P,0,t.thrMax),a.h=sr(a.h+S*.1),a.p+=(T-a.p)*Math.min(1,.1/1.5);let M=R*Math.cos(a.p*ir),y=-R*Math.sin(a.p*ir);a.x+=M*Math.sin(a.h*ir)*.1,a.y+=M*Math.cos(a.h*ir)*.1,a.z=Math.max(0,a.z+y*.1)};for(;l<i.length&&h++<5e3&&u<d;){let P=i[l],S=P.v;switch(P.t){case"WAIT":f(T=>T>=S[0],()=>g(0,0,0),S[0]+1,l,"Warten");break;case"DIVE":{let T=S[0],R=S[1]>0?S[1]:.2,M=Math.max(S[3],0),y=Math.min(S[2]>0?S[2]:t.pitchMax,t.pitchMax),I=a.z,B=T>a.z?1:-1;f(()=>Math.abs(a.z-T)<t.tol*.5&&Math.abs(I-T)<1e-6,()=>{I+=B*R*.1,(B>0&&I>T||B<0&&I<T)&&(I=T);let U=(I-a.z)*18,V=Fn(-U,-y,y);g(M,0,V),M<1&&(a.z=Fn(a.z+Fn((I-a.z)*.8,-R,R)*.1,0,90),a.p=0)},Math.abs(T-a.z)/R*3+40,l,"Tauchen"),a.z=T;break}case"CRUISE":{let T=S[1]>=0?S[1]:a.h;f(R=>R>=S[2],()=>{let R=to(T-a.h);g(S[0],Fn(R*2,-20,20),0)},S[2]+1,l,"Geradeaus");break}case"TURN":{let T=S[1]>.5?sr(a.h+S[0]):sr(S[0]),R=S[2]>0?S[2]:20;f(()=>Math.abs(to(T-a.h))<1,()=>{let M=to(T-a.h);g(S[3],Fn(M*3,-R,R),0)},90+360/R,l,"Drehen");break}case"CURVE":{let T=Math.max(S[2],1)*t.ms,R=T/Math.max(S[1],.05)*$u,M=0,y=Math.abs(S[0]);f(()=>M>=y,()=>{let I=Math.min(R*.1,y-M);M+=I,g(Math.max(S[2],1),(S[0]>=0?1:-1)*I/.1,0)},y/Math.max(R,1)*3+40,l,"Kurve");break}case"BALLAST":{let T=Fn(S[0],0,100);f(()=>Math.abs(a.f-T)<.5,()=>{a.f+=Math.sign(T-a.f)*Math.min(t.flow*.1,Math.abs(T-a.f)),g(0,0,0)},240,l,"Ballast");break}case"PLANES":{let T=Fn((S[1]+.5*S[0])*.8,-t.pitchMax,t.pitchMax);f(R=>R>=S[2],()=>g(S[3],0,T),S[2]+1,l,"Ruder fix");break}case"SURFACE":{f(()=>a.z<=.12,()=>{a.f=Math.max(0,a.f-t.flow*.1),g(t.fsThr,0,t.fsPitch),a.z=Math.max(0,a.z-.2*.1*0)},600,l,"Auftauchen"),a.z=0,a.p=0,a.v=0,a.thr=0,o(l),l=i.length;continue}case"REPEAT":{let T=l;if(c[T]=(c[T]||0)+1,c[T]<=S[0]&&S[1]<l){l=Math.max(0,Math.round(S[1]));continue}break}}l++}let _=s,m=0,p=0,E=0,x={x0:0,x1:0,y0:0,y1:0,z1:0};for(let P=1;P<_.length;P++){let S=_[P-1],T=_[P];m+=Math.hypot(T.x-S.x,T.y-S.y,T.z-S.z);let R=T.t-S.t,M=(T.thr||0)/100;E+=R*(e.pBase??1.5+(e.pMax??25)*M*M*M),T.thr>1&&(p+=R)}_.forEach(P=>{x.x0=Math.min(x.x0,P.x),x.x1=Math.max(x.x1,P.x),x.y0=Math.min(x.y0,P.y),x.y1=Math.max(x.y1,P.y),x.z1=Math.max(x.z1,P.z)});let v=_[_.length-1]||a;return{pts:_,notes:r,stats:{dur:v.t,dist:m,maxDepth:x.z1,bb:x,wh:E/3600,cruiseT:p,avgV:v.t>0?m/v.t:0,endDist:Math.hypot(v.x,v.y),final:{x:v.x,y:v.y,z:v.z},w:x.x1-x.x0,l:x.y1-x.y0}}}var no={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((i,t)=>i),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function io(i){return no[i].map(t=>{let e=ar(t[0]);return t.slice(1).forEach((n,s)=>{e.v[s]=n}),e})}var Cc=i=>i.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function hr(i){return i.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Ze[t.t])}function zi(){if(zi.c)return zi.c;let i=10,t=2400,e=36,n=new Uint8Array(16+t*e),s=new DataView(n.buffer);n.set([70,66,66,49],0),s.setUint16(4,e,!0),s.setUint16(6,i,!0),s.setUint32(8,100,!0);let r=47.05,a=8.3,o=90,l=0,h={lat:r,lon:a};for(let u=0;u<t;u++){let c=u/i,d=0,f=2,g=0,_=0;c<15?f=0:c<45?(f=2,g=2.5,d=Math.min(2.5,(c-15)*.12)):c<160?(f=3,g=2.5,d=2.5+.05*Math.sin(c/4),_=25,o=90+80*Math.sin((c-45)/18)):c<190?(f=3,g=0,d=Math.max(0,2.5-(c-160)*.09),_=20):(f=5,_=c<215?20:0),l=d>.5?Math.min(60,l+.2):Math.max(0,l-.2);let m=16+u*e;s.setUint32(m,Math.round(c*1e3),!0),s.setInt16(m+4,Math.round(d*100),!0),s.setInt16(m+6,Math.round(g*100),!0),s.setInt16(m+8,Math.round(Math.sin(c/3)*20),!0),s.setInt16(m+10,Math.round((g>d?40:-40*(d>.2?1:0))+Math.sin(c)*10),!0),s.setUint16(m+12,Math.round((o%360+360)%360*10),!0),s.setUint16(m+14,Math.round((8.3-c*.0016)*100),!0),s.setUint8(m+16,8),s.setUint8(m+17,f);let p=d<.2&&c>2?4:0;s.setUint8(m+18,3|p|8|16|(f===3?32:0)),s.setUint8(m+19,Math.round(l)),s.setInt8(m+20,_),s.setInt8(m+21,Math.round((l-d*20)/10)),s.setInt8(m+22,Math.round(Math.sin(c/2)*12)),s.setInt8(m+23,Math.round((g-d)*8)),s.setInt8(m+24,Math.round((g-d)*4));let E=_/100*.5;a+=Math.sin(o*Math.PI/180)*E*.1/75900,r+=Math.cos(o*Math.PI/180)*E*.1/111200,p&&(h={lat:r,lon:a}),s.setInt32(m+25,Math.round(h.lat*1e7),!0),s.setInt32(m+29,Math.round(h.lon*1e7),!0),s.setUint8(m+33,p?9:0),s.setInt8(m+34,-60)}return zi.c=n}var so=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(n=>n!==e)}}emit(t,...e){(this.h[t]||[]).forEach(n=>{try{n(...e)}catch(s){console.error(s)}})}};function Pc(i){let t=4294967295;for(let e=0;e<i.length;e++){t^=i[e];for(let n=0;n<8;n++)t=t>>>1^3988292384&-(t&1)}return~t>>>0}var Rs=class extends so{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let n=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),n&&this._line(n)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(this.cur&&this.cur.dump){let e=this.cur;if(t.startsWith("BBD ")){let n=/^BBD (\d+) ([0-9a-f]*)$/.exec(t);if(!n)return;let s=+n[1],r=n[2];for(let a=0;a<r.length;a+=2)e.bytes.push(parseInt(r.substr(a,2),16));e.bytes.length!==s+r.length/2&&(e.bad=!0),clearTimeout(e.to),e.to=setTimeout(()=>{this.cur===e&&(this.cur=null,e.res({ok:!1,text:"ERR Zeit\xFCberschreitung beim Download"}),this._next())},4e3),e.prog&&e.prog(e.bytes.length);return}if(t.startsWith("BBE ")){let n=/^BBE (\d+) ([0-9a-f]+)$/.exec(t);this.cur=null,clearTimeout(e.to);let s=Uint8Array.from(e.bytes),r=n&&+n[1]===s.length&&!e.bad&&Pc(s)===parseInt(n[2],16)>>>0;e.res({ok:!!r,text:r?"OK":"ERR Pr\xFCfsumme oder L\xE4nge falsch (Funk gest\xF6rt?)",bytes:s}),this._next();return}}if(/^(OK|ERR|PAR|INFO|MIS|BB|HOME)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let n=t;if(/^(PAR|INFO|MIS|BB|HOME)\s/.test(t))try{n=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:n}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(n=>{this.q.push({text:t,res:n,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}dump(t,e){return new Promise(n=>{this.q.push({text:"BB DUMP "+t,res:n,timeout:6e3,dump:!0,bytes:[],prog:e}),this.cur||this._next()})}fire(t){this.emit("tx",t),this._write(t+`
`)}},Cs=class extends Rs{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:n}=await this.reader.read();if(n)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},ur=class extends Rs{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let n=!1,s=this.ws=new WebSocket(`ws://${this.host}:81/`),r=setTimeout(()=>{if(!n){n=!0;try{s.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);s.onopen=()=>{n||(n=!0,clearTimeout(r),this.connected=!0,t())},s.onmessage=a=>this._feed(String(a.data)+`
`),s.onerror=()=>{n||(n=!0,clearTimeout(r),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},s.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},dr=class extends Rs{constructor(){super(),this.demo=!0,this.par={},Rn.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.home=null,this.gx=0,this.gy=0,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),n=(e[0]||"").toUpperCase(),s=r=>this._reply(r);if(n==="PING")s("OK PONG");else if(n==="INFO")s("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.4.0 DEMO",hw:"Simulation",params:Rn.length,maxsteps:64}));else if(n==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),s("OK");else if(n==="GET")s("PAR "+JSON.stringify(Rn.map(r=>({k:r.k,v:this.par[r.k],d:r.d,mn:r.mn,mx:r.mx,u:r.u,g:r.g,h:r.h}))));else if(n==="SET"){let r=Rn.find(a=>a.k===e[1]);r?(this.par[r.k]=Math.min(r.mx,Math.max(r.mn,+e[2])),s("OK")):s("ERR unbekannt")}else if(n==="SAVE"||n==="LOAD")s("OK");else if(n==="DEFAULTS")Rn.forEach(r=>{this.par[r.k]=r.d}),s("OK");else if(n==="ARM")this.tst?s("ERR Testmodus"):(this.armed=1,this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},s("OK"));else if(n==="DISARM")this.armed=0,this.mis=null,s("OK");else if(n==="MODE"){let r=(e[1]||"MANUAL").toUpperCase();r==="RTH"&&!this.home?s("ERR kein Home"):(this.mode=r,s("OK"))}else if(n==="TEST"){let r=(e[1]||"").toUpperCase();r==="ENABLE"?+e[2]&&this.armed?s("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),s("OK")):this.tst?r==="SERVO"?(this.tServo[+e[2]]=+e[3],s("OK")):r==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,s("OK")):r==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],s("OK")):s("ERR"):s("ERR kein Testmodus")}else if(n==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),s("OK");else if(n==="MIS"){let r=(e[1]||"").toUpperCase();if(r==="CLEAR")this.steps=[],s("OK");else if(r==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),s("OK "+this.steps.length);else if(r==="GET")s("MIS "+JSON.stringify(this.steps));else if(r==="SAVE")s("OK");else if(r==="START"){if(!this.armed){s("ERR nicht scharf");return}let a=or(o=>this.par[o]);this.mis={plan:cr(hr(this.steps),a),t:0,last:-1},this.mode="MISSION",s("OK")}else r==="STOP"?(this.mis=null,this.mode="DEPTH",s("OK")):s("ERR")}else if(n==="HOME")(e[1]||"").toUpperCase()==="SET"?(this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},s("OK")):s("HOME "+JSON.stringify({set:this.home?1:0,lat:this.home?this.home.lat:0,lon:this.home?this.home.lon:0}));else if(n==="BB"){let r=(e[1]||"").toUpperCase();if(this.armed)s("ERR erst DISARM");else if(r==="INFO")s("BB "+JSON.stringify({free:this.bbs?64e4:104e4,total:1048576,rec:36}));else if(r==="LIST")s("BB "+JSON.stringify(this.bbs===!1?[]:[{f:"bb_001.bin",n:zi().length}]));else if(r==="CLEAR")this.bbs=!1,s("OK");else if(r==="DUMP"){if(this.bbs===!1||+e[2]!=1){s("ERR Datei fehlt");return}let a=zi(),o=0,l=0,h=setInterval(()=>{for(let u=0;u<40&&o<a.length;u++){let c=a.slice(o,o+48);this._feed("BBD "+o+" "+Array.from(c,d=>d.toString(16).padStart(2,"0")).join("")+`
`),o+=c.length}o>=a.length&&(clearInterval(h),this._feed("BBE "+a.length+" "+Pc(a).toString(16).padStart(8,"0")+`
`))},20)}else s("ERR BB ?")}else s(n==="REBOOT"||n==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,n=0,s=this.att[2],r=this.depth,a=0,o=-1,l=0,h="-",u=0,c=0,d=0,f=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),a=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let x=this.mis.plan.pts,v=x.findIndex(P=>P.t>=this.mis.t);if(v<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let P=x[v];r=P.z,n=P.p,s=P.h,this.fill=P.f,a=P.thr/100,o=P.i,l=1,h=this.steps[o]?this.steps[o][0]:"-",u=this.mis.t,o!==this.mis.last&&(this.mis.last=o,this.emit("ev",`SCHRITT ${o+1} ${h}`))}}else this.tst||(r+=(0-r)*.02,n=Math.sin(e/3e3)*.4);if(this.depth=r,this.att=[Math.sin(e/2500)*.6,n,s],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-a*a*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let g=(x,v,P,S)=>Math.round(Math.min(this.par[S],Math.max(this.par[P],this.tst?this.tServo[x]:this.par[v])));if(this.mode==="RTH"&&this.home){let x=(this.home.lon-8.3)*75900,v=(this.home.lat-47.05)*111200,P=x-this.gx,S=v-this.gy,T=Math.hypot(P,S);T>3&&(this.gx+=P/T*.5*.05*3,this.gy+=S/T*.5*.05*3,s=(Math.atan2(P,S)*180/Math.PI+360)%360,this.att[2]=s)}else this.armed&&this.mode!=="MANUAL"&&(this.gx+=Math.sin(s*Math.PI/180)*.15*.05,this.gy+=Math.cos(s*Math.PI/180)*.15*.05);let _=47.05+this.gy/111200,m=8.3+this.gx/75900,p=this.home?Math.hypot((this.home.lon-8.3)*75900-this.gx,(this.home.lat-47.05)*111200-this.gy):0,E={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(x=>+x.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+r.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+r*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:f,s:d,b:c,us:[g(0,"servo.rud.center","servo.rud.min","servo.rud.max"),g(1,"servo.stern.center","servo.stern.min","servo.stern.max"),g(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+a*500),thr:a,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?r:0,p:n,h:s,t:a*100},mis:{run:l,i:o,n:this.steps.length,ty:h,t:+u.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640,gps:{ok:r<.3?1:0,lat:+_.toFixed(6),lon:+m.toFixed(6),sat:9,hd:.9,spd:this.armed?.5:0,home:this.home?1:0,dist:+p.toFixed(1),brg:0,ph:this.mode==="RTH"?p>3?3:4:0},bb:0};this._feed("T "+JSON.stringify(E)+`
`)}};var Zt={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},bt=Zt;function fr(i,t){let e=A("canvas",{width:i*2,height:t*2,style:{width:i+"px",height:"auto",maxWidth:"100%"}}),n=e.getContext("2d");return n.scale(2,2),{c:e,x:n,w:i,h:t}}var Ku='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',Ne=(i,t,e="")=>{i.font=`${e} ${t}px ${Ku}`},Se=Math.PI/180,Ic=(i,t=1)=>{let e=+i.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function Lc(i,t,e,n){let s=i.createRadialGradient(t,e-n*.3,n*.1,t,e,n);s.addColorStop(0,"#0e1b25"),s.addColorStop(1,"#03070a"),i.fillStyle=s,i.beginPath(),i.arc(t,e,n,0,7),i.fill(),i.lineWidth=3,i.strokeStyle="#1d2a35",i.stroke(),i.lineWidth=1,i.strokeStyle="#3a4c5a",i.beginPath(),i.arc(t,e,n-2.5,0,7),i.stroke(),i.fillStyle="#25333e",[45,135,225,315].forEach(r=>{i.beginPath(),i.arc(t+Math.cos(r*Se)*(n+.5),e+Math.sin(r*Se)*(n+.5),2.2,0,7),i.fill()})}function Ju(i,t,e){let n=t*.075,s=t/2-n*1.6,r=-t*.18,a=-t/2+n*.5,o=n*.28;i.fillStyle=e,i.beginPath(),i.moveTo(r,-n),i.lineTo(s,-n),i.bezierCurveTo(s+n*1.25,-n,t/2,-n*.55,t/2,0),i.bezierCurveTo(t/2,n*.55,s+n*1.25,n,s,n),i.lineTo(r,n),i.bezierCurveTo(r-t*.12,n,a+n*.4,o,a,o),i.lineTo(a,-o),i.bezierCurveTo(a+n*.4,-o,r-t*.12,-n,r,-n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(t*.08,-n),i.lineTo(t*.115,-n*2.3),i.lineTo(t*.22,-n*2.3),i.lineTo(t*.25,-n),i.closePath(),i.fill();let l=a+n*.55;i.beginPath(),i.moveTo(l+n*1.6,-n*.45),i.lineTo(l+n*.2,-n*1.65),i.lineTo(l-n*.15,-n*1.65),i.lineTo(l-n*.15,-o),i.closePath(),i.fill(),i.beginPath(),i.moveTo(l+n*1.6,n*.45),i.lineTo(l+n*.2,n*1.65),i.lineTo(l-n*.15,n*1.65),i.lineTo(l-n*.15,o),i.closePath(),i.fill(),i.fillRect(a-n*.35,-n*.75,n*.22,n*1.5)}function ju(i,t,e){let n=t*.085,s=-t/2+n*1.6,r=t*.18,a=t/2-n*.5,o=n*.28;i.fillStyle=e,i.beginPath(),i.moveTo(-n,r),i.lineTo(-n,s),i.bezierCurveTo(-n,s-n*1.25,-n*.55,-t/2,0,-t/2),i.bezierCurveTo(n*.55,-t/2,n,s-n*1.25,n,s),i.lineTo(n,r),i.bezierCurveTo(n,r+t*.12,o,a-n*.4,o,a),i.lineTo(-o,a),i.bezierCurveTo(-o,a-n*.4,-n,r+t*.12,-n,r),i.closePath(),i.fill();let l=a-n*.55;i.beginPath(),i.moveTo(-n*.45,l-n*1.6),i.lineTo(-n*1.65,l-n*.2),i.lineTo(-n*1.65,l+n*.15),i.lineTo(-o,l+n*.15),i.closePath(),i.fill(),i.beginPath(),i.moveTo(n*.45,l-n*1.6),i.lineTo(n*1.65,l-n*.2),i.lineTo(n*1.65,l+n*.15),i.lineTo(o,l+n*.15),i.closePath(),i.fill(),i.fillRect(-n*.75,a+n*.13,n*1.5,n*.22),i.fillStyle="#071017",i.fillRect(-n*.38,-t*.25,n*.76,t*.17)}function Dc(i=260){let{c:t,x:e,w:n,h:s}=fr(i,i),r=n/2,a=s/2,o=i/2-5,l={el:t,draw(h=0,u=0,c){e.clearRect(0,0,n,s),Lc(e,r,a,o),e.save(),e.translate(r,a);let d=o-8;e.save(),e.beginPath(),e.arc(0,0,d-16,0,7),e.clip(),e.strokeStyle=Zt.grid,e.lineWidth=1;for(let E=-d;E<=d;E+=12)e.beginPath(),e.moveTo(-d,E+.5),e.lineTo(d,E+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-d+16,0),e.lineTo(d-16,0),e.stroke(),e.setLineDash([]),Ne(e,9.5,"600"),e.textBaseline="middle";for(let E=-40;E<=40;E+=5){let x=E%10===0;[0,1].forEach(v=>{let P=(v?180+E:-E)*Se,S=d,T=d-(x?10:5);e.strokeStyle=x?Zt.txt:Zt.dim,e.lineWidth=x?1.4:1,e.beginPath(),e.moveTo(Math.cos(P)*T,Math.sin(P)*T),e.lineTo(Math.cos(P)*S,Math.sin(P)*S),e.stroke(),x&&E&&!v&&(e.fillStyle=Zt.dim,e.textAlign="right",e.fillText(String(Math.abs(E)),Math.cos(P)*(d-13),Math.sin(P)*(d-13)))})}if(e.fillStyle=Zt.dim,Ne(e,8,"600"),e.textAlign="center",e.fillText("BUG",d*.62,-d*.7),e.fillText("HECK",-d*.62,-d*.7),c!=null){let E=-c*Se;e.strokeStyle=Zt.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,d+3,E-2.5*Se,E+2.5*Se),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(E)*d*.62,Math.sin(E)*d*.62),e.lineTo(Math.cos(E)*(d-12),Math.sin(E)*(d-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-u*Se),e.strokeStyle=Zt.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(d*.64,0),e.lineTo(d-11,0),e.moveTo(-d*.64,0),e.lineTo(-d+11,0),e.stroke(),Ju(e,d*1.22,"#c9d6de"),e.restore();let f=d-24,g=50,_=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,f,g*Se,_*Se),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[g,g+10],[_-10,_]].forEach(([E,x])=>{e.beginPath(),e.arc(0,0,f,E*Se,x*Se),e.stroke()}),e.lineWidth=1,e.strokeStyle=Zt.dim;for(let E=-40;E<=40;E+=10){let x=(90-E)*Se;e.beginPath(),e.moveTo(Math.cos(x)*(f-6),Math.sin(x)*(f-6)),e.lineTo(Math.cos(x)*(f+5),Math.sin(x)*(f+5)),e.stroke()}Ne(e,8,"600"),e.fillStyle=Zt.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*Se)*(f-15),Math.sin(118*Se)*(f-15)),e.fillText("STB",Math.cos(62*Se)*(f-15),Math.sin(62*Se)*(f-15));let m=Math.max(-44,Math.min(44,h)),p=(90-m)*Se;e.save(),e.translate(Math.cos(p)*f,Math.sin(p)*f),e.rotate(p-Math.PI/2),e.fillStyle=Math.abs(h)>30?Zt.bad:Zt.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",Ne(e,8,"600"),e.fillStyle=Zt.dim,e.fillText("NICK",0,-d*.56),Ne(e,17,"600"),e.fillStyle=Zt.txt,e.fillText(Ic(u)+"\xB0",0,-d*.4),Ne(e,8,"600"),e.fillStyle=Zt.dim,e.fillText("ROLL",0,d*.3),Ne(e,13,"600"),e.fillStyle=Zt.txt,e.fillText((h>.05?"STB ":h<-.05?"BB ":"")+Math.abs(h).toFixed(1)+"\xB0",0,d*.44),e.restore()}};return l.draw(),l}function Uc(i=260){let{c:t,x:e}=fr(i,i),n=i/2,s=i/2,r=i/2-5,a={el:t,draw(o=0,l){o=(o%360+360)%360,e.clearRect(0,0,i,i),Lc(e,n,s,r),e.save(),e.translate(n,s);let h=r-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,h-13,0,7),e.stroke(),e.save(),e.rotate(-o*Se),e.textAlign="center",e.textBaseline="middle";for(let u=0;u<360;u++){let c=u%10===0,d=u%5===0;if(!(!d&&i<200)){if(e.save(),e.rotate(u*Se),e.strokeStyle=c?Zt.txt:d?"#9fb0bc":"#4d606e",e.lineWidth=c?1.4:1,e.beginPath(),e.moveTo(0,-h),e.lineTo(0,-h+(c?9:d?6:3.5)),e.stroke(),u%30===0){let f={0:"N",90:"E",180:"S",270:"W"}[u];f?(Ne(e,13,"700"),e.fillStyle=u===0?Zt.acc:Zt.txt,e.fillText(f,0,-h+19)):(Ne(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(u).padStart(3,"0"),0,-h+18))}e.restore()}}if(l!=null&&(e.save(),e.rotate(l*Se),e.fillStyle=Zt.tgt,e.beginPath(),e.moveTo(-7,-h-2),e.lineTo(7,-h-2),e.lineTo(7,-h+5),e.lineTo(0,-h),e.lineTo(-7,-h+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,h-30,0,7),e.stroke(),l!=null){let u=(l-o+540)%360-180;e.strokeStyle=Zt.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,h-30,-Math.PI/2,(-90+u)*Se,u<0),e.stroke()}for(let u=45;u<360;u+=45)e.save(),e.rotate(u*Se),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-h+30),e.lineTo(0,-h+37),e.stroke(),e.restore();e.fillStyle=Zt.acc,e.beginPath(),e.moveTo(0,-h+3),e.lineTo(-6,-h-7),e.lineTo(6,-h-7),e.closePath(),e.fill(),e.fillRect(-.75,-h+2,1.5,34),ju(e,h*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,h*.38,54,21),e.fill(),e.stroke(),Ne(e,15,"600"),e.fillStyle=Zt.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(o)%360).padStart(3,"0")+"\xB0",0,h*.38+11),l!=null&&(Ne(e,8.5,"600"),e.fillStyle=Zt.tgt,e.fillText("SOLL "+String(Math.round((l%360+360)%360)%360).padStart(3,"0")+"\xB0",0,h*.38+31)),e.restore()}};return a.draw(),a}function Nc(i=90,t=260){let{c:e,x:n}=fr(i,t);return{el:e,draw(s=0,r=3,a,o){n.clearRect(0,0,i,t);let l=40,h=t-30,u=(h-l)/r;n.fillStyle="#03070a",n.fillRect(0,0,i,t),n.strokeStyle="#1d2a35",n.lineWidth=2,n.strokeRect(1,1,i-2,t-2);let c=44,d=18,f=n.createLinearGradient(0,l,0,h);f.addColorStop(0,"#174b66"),f.addColorStop(1,"#03111a"),n.fillStyle=f,n.fillRect(c,l,d,h-l),n.fillStyle="#4c87a6",n.fillRect(c,l-1,d,2),Ne(n,9.5,"600"),n.textAlign="right",n.textBaseline="middle",n.lineWidth=1;let g=r<=5?.5:r<=20?2:10;for(let p=0;p*g/2<=r+1e-6;p++){let E=p*g/2,x=l+E*u,v=p%2===0;n.strokeStyle=v?"#9fb0bc":"#4d606e",n.beginPath(),n.moveTo(v?34:38,x),n.lineTo(c,x),n.stroke(),v&&(n.fillStyle=Zt.dim,n.fillText(E.toFixed(g<1?1:0),31,x))}if(o!==void 0&&o<r){let p=l+o*u;n.fillStyle="rgba(224,88,75,.22)",n.fillRect(c,p,d,h-p),n.strokeStyle=Zt.bad,n.setLineDash([3,2]),n.beginPath(),n.moveTo(30,p),n.lineTo(i-4,p),n.stroke(),n.setLineDash([])}let _=a!=null&&a>0;if(_){let p=l+ro(a,0,r)*u;n.fillStyle=Zt.tgt,n.beginPath(),n.moveTo(c+d+1,p),n.lineTo(c+d+11,p-6),n.lineTo(c+d+11,p+6),n.closePath(),n.fill()}let m=l+ro(s,0,r)*u;n.fillStyle=Zt.acc,n.fillRect(c-2,m-1,d+4,2),n.beginPath(),n.moveTo(c-2,m),n.lineTo(c-10,m-5),n.lineTo(c-10,m+5),n.closePath(),n.fill(),n.fillStyle="#02060a",n.strokeStyle="#3a4c5a",n.beginPath(),n.rect(6.5,8.5,i-13,22),n.fill(),n.stroke(),Ne(n,14,"600"),n.fillStyle=Zt.txt,n.textAlign="center",n.fillText(s.toFixed(2)+" m",i/2,20),Ne(n,8.5,"600"),n.fillStyle=_?Zt.tgt:Zt.dim,n.fillText(_?"\u0394 "+Ic(s-a,2)+" m":"SOLL \u2013",i/2,t-15)}}}var ro=(i,t,e)=>Math.min(e,Math.max(t,i));function Oc(i,t={}){let e=t.w||520,n=t.h||150,{c:s,x:r}=fr(e,n),a=t.span||30,o=i.map(()=>[]),l=0;return{el:s,push(u,c){c.forEach((d,f)=>{if(d!==void 0&&!isNaN(d))for(o[f].push([u,d]);o[f].length&&u-o[f][0][0]>a;)o[f].shift()}),l=u},clear(){o.forEach(u=>{u.length=0})},draw(){r.clearRect(0,0,e,n),r.fillStyle=Zt.bg,r.fillRect(0,0,e,n);let u=t.min,c=t.max;if(u===void 0||c===void 0){u=1e9,c=-1e9,o.forEach(g=>g.forEach(_=>{u=Math.min(u,_[1]),c=Math.max(c,_[1])})),u>c&&(u=0,c=1);let f=(c-u)*.1||.5;u-=f,c+=f}r.strokeStyle=Zt.grid,r.lineWidth=1,Ne(r,9),r.fillStyle=Zt.dim,r.textAlign="left";for(let f=0;f<=4;f++){let g=4+(n-8)*f/4;r.beginPath(),r.moveTo(0,g),r.lineTo(e,g),r.stroke(),r.fillText((c-(c-u)*f/4).toFixed(t.dec??1),3,g-2)}i.forEach((f,g)=>{r.strokeStyle=f.color,r.lineWidth=1.5,r.beginPath();let _=!0;o[g].forEach(m=>{let p=e-(l-m[0])/a*e,E=4+(n-8)*(1-(m[1]-u)/(c-u||1));_?(r.moveTo(p,E),_=!1):r.lineTo(p,E)}),r.stroke()});let d=e-6;r.textAlign="right",Ne(r,10);for(let f=i.length-1;f>=0;f--){r.fillStyle=i[f].color;let g=i[f].name+(o[f].length?" "+o[f][o[f].length-1][1].toFixed(t.dec??1):"");r.fillText(g,d,12),d-=r.measureText(g).width+12}}}}function $e(i,t,e,n,s={}){let r=A("div",{class:"bar-fill"}),a=A("span",{class:"bar-val"},"\u2013");return{el:A("div",{class:"bar"},A("span",{class:"bar-l"},i),A("div",{class:"bar-t"},r,s.mid?A("i",{class:"bar-mid"}):null),a),set(l,h,u){if(l===void 0||isNaN(l)){a.textContent="\u2013",r.style.width="0";return}let c=(l-t)/(e-t);if(s.mid){let d=(0-t)/(e-t);r.style.left=Math.min(c,d)*100+"%",r.style.width=Math.abs(c-d)*100+"%"}else r.style.left="0",r.style.width=ro(c,0,1)*100+"%";r.style.background=u||"",a.textContent=h??l.toFixed(s.dec??0)+(n?" "+n:"")}}}var Xe=i=>{let t=A("span",{class:"chip"},i);return{el:t,set(e,n){t.textContent=e===void 0?i:e,t.className="chip "+(n||"")}}},$t=(i,t)=>{let e=A("b",null,"\u2013"),n=A("div",{class:"stat"},A("span",null,i),A("div",null,e,t?A("small",null,t):null));return{el:n,set(s,r){e.textContent=s,n.className="stat "+(r||"")}}};async function me(i,t,e){if(!X.connected)return Jt("Nicht verbunden","bad"),null;let n=await X.link.cmd(i,e);return n.ok?t&&Jt(t,"ok"):Jt(`${i}: ${n.text}`,"bad"),n}var mr=new Map;setInterval(()=>{if(!(!X.connected||X.link.q.length>2))for(let[i,t]of mr)X.link.cmd(t,800),mr.delete(i)},50);var pr=(i,t)=>mr.set(i,t);async function ao(i,t){let e=await me(`SET ${i} ${t}`);return e&&e.ok&&(X.par[i]=+t,xe.emit("par")),e}async function Ps(){let i=await X.link.cmd("GET",4e3);return i.ok&&Array.isArray(i.data)&&(X.parList=i.data,X.par={},i.data.forEach(t=>{X.par[t.k]=t.v}),xe.emit("par")),i}var ye=(i,...t)=>A("section",{class:"card"},A("h3",null,i),...t),ve=(i,t,e="")=>A("button",{class:"btn "+e,onclick:t},i),en=i=>A("p",{class:"note"},i);function Fc(i){let t=A("div",{class:"kv"});return{el:A("div",{class:"page"},A("div",{class:"hero"},A("div",null,A("h1",null,"FATHOM Konfigurator"),A("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB zum Flashen und Testen am Tisch, per WLAN f\xFCr Auftr\xE4ge und Blackbox im Feld.")),A("div",{class:"hero-btns"},ve("Verbinden (USB)",()=>i.connect(),"primary big"),ve("Per WLAN verbinden",()=>i.wifi(),"big"),ve("Demo Boot starten",()=>i.demo(),"big"))),A("div",{class:"grid2"},ye("Verbindung",t,"serial"in navigator?en("USB braucht Chrome oder Edge am PC (Web Serial)."):A("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),A("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen nur \xFCber Crossfire oder USB."),A("div",{class:"row"},ve("Boot neu starten",()=>me("REBOOT","Neustart")),ve("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&me("BOOTSEL")}))),ye("Erste Inbetriebnahme",A("ol",{class:"steps"},A("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),A("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),A("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),A("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),A("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),A("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let n=X.info;t.innerHTML="",[["Status",X.connected?X.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",n?`${n.fw} ${n.ver}`:"\u2013"],["Hardware",n?n.hw:"\u2013"],["Parameter",n?n.params:"\u2013"],["Max Missionsschritte",n?n.maxsteps:"\u2013"]].forEach(([s,r])=>t.append(A("span",null,s),A("b",null,String(r))))}}}function Bc(){let i=Dc(290),t=Uc(290),e=Nc(96,290),n={pitch:$t("Nick","\xB0"),roll:$t("Roll","\xB0"),yaw:$t("Kurs","\xB0"),depth:$t("Tiefe","m"),temp:$t("Wasser","\xB0C"),vb:$t("Akku","V"),fill:$t("Ballast","%"),thr:$t("Vortrieb","%"),spd:$t("Fahrt ca.","m/s")},s={arm:Xe("DISARMED"),mode:Xe("MANUAL"),rc:Xe("RC"),gps:Xe("GPS"),imu:Xe("IMU"),dep:Xe("Tiefe"),leak:Xe("Leck"),tst:Xe("Test"),mis:Xe("Mission")},r={rud:$e("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:$e("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:$e("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:$e("Motor",-100,100,"%",{mid:!0}),pmp:$e("Pumpe",-100,100,"%",{mid:!0}),fill:$e("Ballast F\xFCllung",0,100,"%"),vb:$e("Akku 2S",6,8.4,"V",{dec:2}),lk:$e("Leckage",0,1,"",{dec:2})},a=A("div",{class:"alert",style:{display:"none"}}),o=A("div",{class:"log"}),l=A("div",{class:"kv"}),h=A("div",{class:"page dash"},a,A("div",{class:"chips"},Object.values(s).map(c=>c.el)),A("div",{class:"instr"},A("div",{class:"ins"},A("div",{class:"cap"},"Lage"),i.el),A("div",{class:"ins"},A("div",{class:"cap"},"Kurs"),t.el),A("div",{class:"ins"},A("div",{class:"cap"},"Tiefe"),e.el)),A("div",{class:"stats"},Object.values(n).map(c=>c.el)),A("div",{class:"grid2"},ye("Ausg\xE4nge",Object.values(r).map(c=>c.el)),ye("Mission und Ziele",l,A("h4",null,"Ereignisse"),o))),u=()=>{o.innerHTML="",X.events.slice(-40).reverse().forEach(c=>o.append(A("div",{class:"ev "+c.kind},A("time",null,c.t.toTimeString().slice(0,8)),c.m)))};return xe.on("ev",u),{el:h,show:u,update(c){i.draw(c.att[0],c.att[1],c.mis.run||c.m!=="MANUAL"?c.tg.p:void 0),t.draw(c.att[2],c.m==="MANUAL"?void 0:c.tg.h),e.draw(c.d,Math.max(X.get("lim.depth",3)*1.15,1),c.m==="DEPTH"||c.m==="MISSION"?c.tg.d:void 0,X.get("lim.depth",3)),n.pitch.set(mt(c.att[1])),n.roll.set(mt(c.att[0])),n.yaw.set(mt(c.att[2],0).padStart(3,"0")),n.depth.set(mt(c.d,2)),n.temp.set(mt(c.tmp)),n.fill.set(mt(c.fill,0)),n.thr.set(mt(c.out.thr*100,0)),n.vb.set(mt(c.vb,2),c.vb<X.get("bat.crit",6.4)?"bad":c.vb<X.get("bat.warn",7)?"warn":""),n.spd.set(mt(Math.abs(c.out.thr*100)*X.get("spd.ms_per_pct",.014),2)),s.arm.set(c.arm?"ARMED":"DISARMED",c.arm?"bad":""),s.mode.set(c.m,c.m==="FAILSAFE"?"bad":c.m==="MISSION"||c.m==="RTH"?"acc":""),s.rc.set(c.rcok?`RC ${c.rssi} dBm`:"RC fehlt",c.rcok?"ok":"warn"),s.imu.set(c.ok[0]?"IMU ok":"IMU Fehler",c.ok[0]?"ok":"bad"),s.dep.set(c.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",c.ok[1]?"ok":"bad"),c.gps&&s.gps.set(c.gps.ok?`GPS ${c.gps.sat} Sat`:"GPS kein Fix",c.gps.ok?"ok":""),s.leak.set(c.lk>X.get("leak.threshold",.35)?"LECKAGE":"trocken",c.lk>X.get("leak.threshold",.35)?"bad":"ok"),s.tst.set(c.tst?"TESTMODUS":"Test aus",c.tst?"warn":""),s.mis.set(c.mis.run?`Mission ${c.mis.i+1}/${c.mis.n} ${c.mis.ty}`:"Mission aus",c.mis.run?"acc":""),r.rud.set(c.out.r,mt(c.out.r)+" \xB0 / "+c.out.us[0]+" \xB5s"),r.stn.set(c.out.s,mt(c.out.s)+" \xB0 / "+c.out.us[1]+" \xB5s"),r.bow.set(c.out.b,mt(c.out.b)+" \xB0 / "+c.out.us[2]+" \xB5s"),r.thr.set(c.out.thr*100,mt(c.out.thr*100,0)+" % / "+c.out.mu+" \xB5s",c.out.thr<0?bt.warn:""),r.pmp.set(c.out.pmp*100,mt(c.out.pmp*100,0)+" %"),r.fill.set(c.fill,mt(c.fill,0)+" %"),r.vb.set(c.vb,mt(c.vb,2)+" V",c.vb<X.get("bat.warn",7)?bt.warn:bt.ok),r.lk.set(c.lk,mt(c.lk,2),c.lk>X.get("leak.threshold",.35)?bt.bad:bt.ok);let d=c.fs?"FAILSAFE: "+c.fs:c.w;a.style.display=d?"block":"none",a.textContent=d,l.innerHTML="",[["Ziel Tiefe",mt(c.tg.d,2)+" m"],["Ziel Nick",mt(c.tg.p)+" \xB0"],["Ziel Kurs",mt(c.tg.h,0)+" \xB0"],["Ziel Vortrieb",mt(c.tg.t,0)+" %"],["Schritt",c.mis.run?`${c.mis.i+1} von ${c.mis.n} (${c.mis.ty})`:"\u2013"],["Schrittzeit",c.mis.run?mt(c.mis.t,0)+" s":"\u2013"],["Druck",mt(c.prs,1)+" mbar"],["Zyklus",c.lp+" \xB5s"]].forEach(([f,g])=>l.append(A("span",null,f),A("b",null,g)))}}}function kc(){let i=(l,h)=>Oc(l,h),t={att:i([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:i([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:i([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:i([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:i([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:i([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=A("div",{class:"kv wide"}),n=A("div",{class:"rcs"}),s=Array.from({length:8},(l,h)=>$e("CH"+(h+1),1e3,2e3,"\xB5s"));s.forEach(l=>n.append(l.el));let r=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],a=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:A("div",{class:"page"},A("div",{class:"grid2"},ye("Lage",t.att.el),ye("Kurs",t.yaw.el),ye("Gyro (\xB0/s)",t.gyr.el),ye("Tiefe",t.dep.el),ye("Akku",t.pwr.el),ye("Leckage und Ballast",t.lk.el)),A("div",{class:"grid2"},ye("Rohwerte",e),ye("RC Kan\xE4le (Crossfire)",n))),show(){Object.values(t).forEach(l=>l.clear())},update(l){let h=l.t/1e3;t.att.push(h,[l.att[0],l.att[1]]),t.yaw.push(h,[l.att[2],l.m==="MANUAL"?void 0:l.tg.h]),t.gyr.push(h,l.gyr),t.dep.push(h,[l.d,l.m==="DEPTH"||l.m==="MISSION"?l.tg.d:void 0]),t.pwr.push(h,[l.vb]),t.lk.push(h,[l.lk,l.fill/100]),Object.values(t).forEach(u=>u.draw()),e.innerHTML="",[["Druck",mt(l.prs,1)+" mbar"],["Temperatur",mt(l.tmp)+" \xB0C"],["Tiefe",mt(l.d,3)+" m"],["Roll / Nick / Kurs",`${mt(l.att[0])} / ${mt(l.att[1])} / ${mt(l.att[2])} \xB0`],["Gyro",l.gyr.map(u=>mt(u)).join(" / ")+" \xB0/s"],["Akku",mt(l.vb,2)+" V"],["Leckage",mt(l.lk,2)],["IMU Kalibrierung",`Sys ${l.cal[0]} Gyr ${l.cal[1]} Acc ${l.cal[2]} Mag ${l.cal[3]}`],["Zykluszeit",l.lp+" \xB5s"],["Modus",l.m]].forEach(([u,c])=>e.append(A("span",null,u),A("b",null,c))),l.rc.forEach((u,c)=>{let d=r.findIndex(f=>X.get(f,0)===c+1);s[c].set(u,`${u} \xB5s${d>=0?" \xB7 "+a[d]:""}`,l.rcok?"":bt.dim)})}}}async function Qu(i){if(!X.connected)return!1;let t=await X.link.cmd(`TEST ENABLE ${i?1:0}`);return t.ok?!0:(Jt(i?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function zc(){let i=A("b",null,"Testmodus aus"),t=A("div",{class:"testbar"},i,A("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=ve("Testmodus einschalten",async()=>{let n=!(X.tel&&X.tel.tst);await Qu(n)&&(n||me("TEST OFF"))},"primary");return t.append(e),{el:t,update(n){i.textContent=n.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(n.tst?" on":""),e.textContent=n.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Hc(){let i=zc(),t={d:$t("Tiefe","m"),p:$t("Druck","mbar"),t:$t("Temp","\xB0C"),pi:$t("Nick","\xB0"),ro:$t("Roll","\xB0"),yw:$t("Kurs","\xB0"),vb:$t("Akku","V"),lk:$t("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((o,l)=>$e(o,0,3,"",{dec:0})),n=A("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),s=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([o,l,h])=>{let u=A("b",null,"1500 \xB5s"),c=A("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{u.textContent=c.value+" \xB5s",pr("sv"+h,`TEST SERVO ${h} ${c.value}`)}}),d=async(g,_)=>{let m=await ao(`servo.${l}.${g}`,c.value);m&&m.ok&&Jt(`${o} ${_} = ${c.value} \xB5s`,"ok")},f=A("input",{type:"checkbox",onchange:()=>ao(`servo.${l}.rev`,f.checked?1:0)});return{el:A("div",{class:"sv"},A("div",{class:"svh"},A("b",null,o),u),c,A("div",{class:"row"},ve("Mitte",()=>d("center","Mitte")),ve("Min",()=>d("min","Min")),ve("Max",()=>d("max","Max")),ve("Zur\xFCck auf Mitte",()=>{c.value=X.get(`servo.${l}.center`,1500),c.oninput()}),A("label",{class:"chk"},f," umkehren"))),sync(){f.checked=X.get(`servo.${l}.rev`,0)>.5}}}),r=A("div",{class:"page"},i.el,A("div",{class:"stats"},Object.values(t).map(o=>o.el)),A("div",{class:"grid2"},ye("1  Tiefensensor",en("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),A("div",{class:"row"},ve("Tiefe auf Null setzen",()=>me("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),ye("2  Lage Null",en("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),A("div",{class:"row"},ve("Lage als Null setzen",()=>me("CAL LEVEL","Lage Null gesetzt"),"primary")),en("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),ye("3  IMU Kalibrierung (BNO055)",e.map(o=>o.el),en("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),A("div",{class:"row"},ve("Profil im BNO055 sichern",()=>me("CAL IMUSAVE","IMU Profil gespeichert")))),ye("4  Batteriespannung",en("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),A("div",{class:"row"},n,ve("Abgleichen",()=>{+n.value>4?me(`CAL VBAT ${n.value}`,"Batterie abgeglichen"):Jt("Spannung eintragen","warn")},"primary"))),ye("5  Servos: Mitte, Endpunkte, Richtung",en("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),s.map(o=>o.el),en("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),ye("6  Leckage Sensor",en("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),A("div",{class:"row"},ve("Sensoren Seite \xF6ffnen",()=>xe.emit("goto","sensors")))))),a=!1;return xe.on("par",()=>s.forEach(o=>o.sync())),{el:r,show(){s.forEach(o=>o.sync())},hide(){},update(o){i.update(o),t.d.set(mt(o.d,3)),t.p.set(mt(o.prs,1)),t.t.set(mt(o.tmp)),t.pi.set(mt(o.att[1])),t.ro.set(mt(o.att[0])),t.yw.set(mt(o.att[2],0)),t.vb.set(mt(o.vb,2)),t.lk.set(mt(o.lk,2),o.lk>X.get("leak.threshold",.35)?"bad":""),o.cal.forEach((l,h)=>e[h].set(l,l+" von 3",l>=3?bt.ok:l>=2?bt.warn:bt.bad)),a||(a=!0,s.forEach(l=>l.sync()))}}}function Vc(){let i=zc(),t=null,e=()=>X.get("lim.deflect",25),n=()=>X.get("servo.us_per_deg",10),s=(M,y)=>Math.round(X.get(`servo.${M}.center`,1500)+(X.get(`servo.${M}.rev`,0)>.5?-1:1)*y*n()),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([M,y,I])=>{let B=A("b",null,"0.0 \xB0"),U=A("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),V=()=>{let Y=ei(+U.value,-e(),e());B.textContent=mt(Y)+" \xB0 / "+s(y,Y)+" \xB5s",pr("ts"+I,`TEST SERVO ${I} ${s(y,Y)}`)};return U.oninput=V,U.addEventListener("dblclick",()=>{U.value=0,V()}),{name:M,key:y,ch:I,sl:U,send:V,el:A("div",{class:"sv"},A("div",{class:"svh"},A("b",null,M),B),U)}}),a=ve("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)";return}let M=performance.now();a.textContent="Stopp Durchlauf",t=setInterval(()=>{let y=(performance.now()-M)/1e3;if(y>10){clearInterval(t),t=null,a.textContent="Servos durchfahren (10 s)",r.forEach(I=>{I.sl.value=0,I.send()});return}r.forEach((I,B)=>{I.sl.value=Math.sin(y*2*Math.PI*.5+B*1.2)*e(),I.send()})},60)}),o=A("input",{type:"checkbox"}),l=A("input",{type:"checkbox"}),h=A("b",null,"0 %"),u=A("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),c=A("input",{type:"checkbox"}),d=0,f=()=>{o.checked||(u.value=0,d=0);let M=l.checked?100:X.get("lim.throttle",35);d=ei(+u.value,-M,M),u.value=d,h.textContent=d+" %"+(d?" \u2192 "+Math.round(Math.abs(d)*X.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),pr("tm",`TEST MOTOR ${d}`)};u.oninput=f,["pointerup","touchend"].forEach(M=>u.addEventListener(M,()=>{c.checked||(u.value=0,f())}));let g=()=>{u.value=0,d=0,m.value=0,p=0,h.textContent="0 %",_.textContent="0 %",mr.clear(),X.connected&&(X.link.q.length=0,X.link.cmd("TEST OFF",1500)),r.forEach(M=>{M.sl.value=0,M.send()})},_=A("b",null,"0 %"),m=A("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),p=0,E=()=>{p=+m.value,_.textContent=p+" %"+(p>0?" f\xFCllen":p<0?" leeren":""),pr("tp",`TEST PUMP ${p}`)};m.oninput=E,["pointerup","touchend"].forEach(M=>m.addEventListener(M,()=>{m.value=0,E()}));let x=null,v=()=>{x=setInterval(()=>{X.connected&&(d&&X.link.cmd(`TEST MOTOR ${d}`,800),p&&X.link.cmd(`TEST PUMP ${p}`,800))},400)},P=$e("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),S=$e("Motor Ausgang",-100,100,"%",{mid:!0}),T=ve("STOPP ALLES",g,"stop big");return window.addEventListener("keydown",M=>{M.key==="Escape"&&X.tab==="tests"&&g()}),{el:A("div",{class:"page"},i.el,A("div",{class:"grid2"},ye("Servos",en("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),r.map(M=>M.el),A("div",{class:"row"},a)),ye("Motor",A("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),A("label",{class:"chk"},o," Propeller ist frei, Motor freigeben"),A("label",{class:"chk"},c," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),A("label",{class:"chk"},l," Gaslimit aufheben (nur Pr\xFCfstand)"),A("div",{class:"svh"},A("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),h),u,S.el),ye("Ballastpumpe",en("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. DFRobot Pumpe mit eingebautem Treiber, Signal 50 Hz. Richtung falsch: Parameter pump.invert."),A("div",{class:"svh"},A("b",null,"Pumpe"),_),m,P.el),ye("Notaus",T,en("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){v(),r.forEach(M=>M.send())},hide(){clearInterval(x),g()},update(M){i.update(M),S.set(M.out.thr*100,mt(M.out.thr*100,0)+" % / "+M.out.mu+" \xB5s"),P.set(M.fill,mt(M.fill,0)+" %")},stopAll:g}}function Gc(){let i=A("div"),t=A("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>n()}),e=new Set,n=()=>{i.innerHTML="";let a=X.parList.length?X.parList:Rn.map(h=>({k:h.k,v:h.d,d:h.d,mn:h.mn,mx:h.mx,u:h.u,g:h.g,h:h.h})),o=t.value.trim().toLowerCase(),l={};a.filter(h=>!o||(h.k+" "+h.h+" "+h.g).toLowerCase().includes(o)).forEach(h=>(l[h.g]=l[h.g]||[]).push(h)),Object.entries(l).forEach(([h,u])=>{let c=A("table",{class:"ptable"},A("thead",null,A("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(f=>A("th",null,f))))),d=A("tbody");u.forEach(f=>{let g=X.par[f.k]!==void 0?X.par[f.k]:f.v,_=A("input",{class:"pin"+(g!==f.d?" mod":""),type:"number",step:"any",value:g,min:f.mn,max:f.mx,disabled:!X.connected,onchange:async()=>{let m=ei(+_.value,f.mn,f.mx);_.value=m;let p=await ao(f.k,m);p&&p.ok&&(_.classList.toggle("mod",m!==f.d),e.add(f.k),s.classList.add("primary"))}});d.append(A("tr",null,A("td",{class:"mono"},f.k),A("td",null,_),A("td",{class:"dim"},f.u),A("td",{class:"dim",onclick:()=>{_.value=f.d,_.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},f.d),A("td",{class:"dim"},`${f.mn} bis ${f.mx}`),A("td",null,f.h)))}),c.append(d),i.append(ye(h,c))})},s=ve("Im Boot speichern",async()=>{let a=await me("SAVE","Parameter im Flash gespeichert");a&&a.ok&&(e.clear(),s.classList.remove("primary"))}),r=A("div",{class:"page"},A("div",{class:"toolbar"},t,ve("Neu laden",async()=>{await Ps()}),s,ve("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await me("DEFAULTS","Standardwerte gesetzt"),await Ps())}),ve("Export",()=>gi("fathom_parameter.json",JSON.stringify(Object.fromEntries(X.parList.map(a=>[a.k,X.par[a.k]])),null,1))),ve("Import",async()=>{let a=await nr(".json");if(a)try{let o=JSON.parse(a),l=0;for(let[h,u]of Object.entries(o))(await X.link.cmd(`SET ${h} ${u}`)).ok&&l++;Jt(`${l} Parameter importiert, danach Speichern`,"ok"),await Ps()}catch{Jt("Datei ung\xFCltig","bad")}})),i);return xe.on("par",()=>{X.tab==="params"&&n()}),xe.on("conn",n),{el:r,show:n,update(){}}}function Wc(){let i=A("div",{class:"term"}),t=A("input",{type:"checkbox"}),e=A("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async u=>{if(u.key==="Enter"&&e.value.trim()){let c=e.value.trim();n.push(c),s=n.length,e.value="",X.connected?await X.link.cmd(c,4e3):Jt("Nicht verbunden","bad")}u.key==="ArrowUp"&&s>0&&(e.value=n[--s]),u.key==="ArrowDown"&&s<n.length&&(e.value=n[++s]||"")}}),n=[],s=0,r=[],a=null,o=(u,c)=>{r.push([u,c]),a||(a=setTimeout(l,100))},l=()=>{a=null;let u=i.scrollTop+i.clientHeight>=i.scrollHeight-30;for(r.forEach(([c,d])=>i.append(A("div",{class:c},d.length>400?d.slice(0,400)+" \u2026":d))),r=[];i.childNodes.length>600;)i.firstChild.remove();u&&(i.scrollTop=i.scrollHeight)};return xe.on("tx",u=>o("tx","> "+u)),xe.on("rx",u=>{u.startsWith("T {")&&!t.checked||o(u.startsWith("ERR")?"rx err":"rx",u)}),{el:A("div",{class:"page"},A("div",{class:"toolbar"},A("label",{class:"chk"},t," Telemetrie anzeigen"),ve("Leeren",()=>{i.innerHTML=""})),i,e),show(){i.scrollTop=i.scrollHeight},update(){}}}var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},td=0,Xc=1,ed=2;var su=1,nd=2,Gn=3,ui=0,Be=1,rn=2,ci=0,as=1,Yc=2,qc=3,Zc=4,id=5,Ei=100,sd=101,rd=102,ad=103,od=104,ld=200,cd=201,hd=202,ud=203,Ho=204,Vo=205,dd=206,fd=207,pd=208,md=209,gd=210,_d=211,xd=212,vd=213,yd=214,Go=0,Wo=1,Xo=2,us=3,Yo=4,qo=5,Zo=6,$o=7,ru=0,Md=1,Sd=2,hi=0,bd=1,Ed=2,Td=3,wd=4,Ad=5,Rd=6,Cd=7;var au=300,ds=301,fs=302,Ko=303,Jo=304,Na=306,jo=1e3,wi=1001,Qo=1002,yn=1003,Pd=1004;var gr=1005;var an=1006,oo=1007;var Ai=1008;var Kn=1009,ou=1010,lu=1011,Gs=1012,ic=1013,Ri=1014,Xn=1015,js=1016,sc=1017,rc=1018,ps=1020,cu=35902,hu=1021,uu=1022,vn=1023,du=1024,fu=1025,os=1026,ms=1027,pu=1028,ac=1029,mu=1030,oc=1031;var lc=1033,Kr=33776,Jr=33777,jr=33778,Qr=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,yl=37821,ta=36492,Ml=36494,Sl=36495,gu=36283,bl=36284,El=36285,Tl=36286;var ea=2300,wl=2301,lo=2302,$c=2400,Kc=2401,Jc=2402;var Id=3200,Ld=3201;var _u=0,Dd=1,li="",sn="srgb",vs="srgb-linear",Oa="linear",re="srgb";var Hi=7680;var jc=519,Ud=512,Nd=513,Od=514,xu=515,Fd=516,Bd=517,kd=518,zd=519,Al=35044;var Qc="300 es",Yn=2e3,na=2001,Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,ls=Math.PI/180,Ws=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function Hd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vd(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function Gd(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function Wd(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zd(i,t){return i+Math.random()*(t-i)}function $d(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(th=i);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(i){return i*ls}function jd(i){return i*Ws}function Qd(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),u=a((t+n)/2),c=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*c,l*d,o*h);break;case"YZY":i.set(l*d,o*u,l*c,o*h);break;case"ZXZ":i.set(l*c,l*d,o*u,o*h);break;case"XZX":i.set(o*u,l*g,l*f,o*h);break;case"YXY":i.set(l*f,o*u,l*g,o*h);break;case"ZYZ":i.set(l*g,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fa={DEG2RAD:ls,RAD2DEG:Ws,generateUUID:Zn,clamp:Ce,euclideanModulo:cc,mapLinear:Hd,inverseLerp:Vd,lerp:Hs,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:Yd,randInt:qd,randFloat:Zd,randFloatSpread:$d,seededRandom:Kd,degToRad:Jd,radToDeg:jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tf,floorPowerOfTwo:ef,setQuaternionFromProperEuler:nf,normalize:se,denormalize:xn},At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],x=s[4],v=s[7],P=s[2],S=s[5],T=s[8];return r[0]=a*_+o*E+l*P,r[3]=a*m+o*x+l*S,r[6]=a*p+o*v+l*T,r[1]=h*_+u*E+c*P,r[4]=h*m+u*x+c*S,r[7]=h*p+u*v+c*T,r[2]=d*_+f*E+g*P,r[5]=d*m+f*x+g*S,r[8]=d*p+f*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*a-o*h,d=o*l-u*r,f=h*r-a*l,g=e*c+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=c*_,t[1]=(s*h-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new kt;function vu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=ia("canvas");return i.style.display="block",i}var eh={};function ks(i){i in eh||(eh[i]=!0,console.warn(i))}function rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function af(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nh=[.64,.33,.3,.6,.15,.06],ih=[.2126,.7152,.0722],sh=[.3127,.329],rh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[vs]:{primaries:nh,whitePoint:sh,transfer:Oa,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:ih,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:nh,whitePoint:sh,transfer:re,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:ih,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});var Vi,Rl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=ia("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lf=0,sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ho(s[a].image)):r.push(ho(s[a]))}else r=ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cf=0,Qe=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=an,a=Ai,o=vn,l=Kn,h=i.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Zn(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=au;Qe.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,v=(f+1)/2,P=(p+1)/2,S=(u+d)/4,T=(c+_)/4,R=(g+m)/4;return x>v&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=T/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(c-_)*(c-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(c-_)/E,this.z=(d-u)/E,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends Jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ra=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(c!==_||l!==d||h!==f||u!==g){let m=1-o,p=l*d+h*f+u*g+c*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let P=Math.sqrt(x),S=Math.atan2(P,p*E);m=Math.sin(m*S)/P,o=Math.sin(o*S)/P}let v=o*E;if(l=l*m+d*v,h=h*m+f*v,u=u*m+g*v,c=c*m+_*v,m===1-o){let P=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=P,h*=P,u*=P,c*=P}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],c=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*c+l*f-h*d,t[e+1]=l*g+u*d+h*c-o*f,t[e+2]=h*g+u*f+o*d-l*c,t[e+3]=u*g-o*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),c=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"YXZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"ZXY":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"ZYX":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"YZX":this._x=d*u*c+h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c-d*f*g;break;case"XZY":this._x=d*u*c-h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+o+c;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>c){let f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>c){let f=2*Math.sqrt(1+o-n-c);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+c-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*h+a*c-o*u,this.y=n+l*u+o*h-r*c,this.z=s+l*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new L,oh=new Mn,on=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),xr.subVectors(this.max,Is),Gi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),ni.subVectors(Wi,Gi),ii.subVectors(Xi,Wi),_i.subVectors(Gi,Xi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!fo(e,Gi,Wi,Xi,xr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Gi,Wi,Xi,xr))?!1:(vr.crossVectors(ni,ii),e=[vr.x,vr.y,vr.z],fo(e,Gi,Wi,Xi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,_r=new on,Gi=new L,Wi=new L,Xi=new L,ni=new L,ii=new L,_i=new L,Is=new L,xr=new L,vr=new L,xi=new L;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),h=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var hf=new on,Ls=new L,po=new L,Sn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(po)),this.expandByPoint(Ls.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new L,mo=new L,yr=new L,si=new L,go=new L,Mr=new L,_o=new L,Ci=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mo.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(mo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=si.dot(this.direction),l=-si.dot(yr),h=si.lengthSq(),u=Math.abs(1-a*a),c,d,f,g;if(u>0)if(c=a*l-o,d=a*o-l,g=r*u,c>=0)if(d>=-g)if(d<=g){let _=1/u;c*=_,d*=_,f=c*(c+a*d+2*o)+d*(a*c+d+2*l)+h}else d=r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-a*r+o)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(a*r+o)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=a>0?-r:r,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(mo).addScaledVector(yr,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(o=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){go.subVectors(e,t),Mr.subVectors(n,t),_o.crossVectors(go,Mr);let a=this.direction.dot(_o),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);let l=o*this.direction.dot(Mr.crossVectors(si,Mr));if(l<0)return null;let h=o*this.direction.dot(go.cross(si));if(h<0||l+h>a)return null;let u=-o*si.dot(_o);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,h,u,c,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),a=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-o*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*c,g=h*u,_=h*c;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*c,g=h*u,_=h*c;e[0]=d-_*o,e[4]=-a*c,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*c,g=o*u,_=o*c;e[0]=l*u,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*c,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=_-d*c,e[8]=g*c+f,e[1]=c,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=f*c+g,e[10]=d-_*c}else if(t.order==="XZY"){let d=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+_,e[5]=a*u,e[9]=f*c-g,e[2]=g*c-f,e[6]=o*u,e[10]=_*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uf,t,df)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ri.crossVectors(n,Ke),ri.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ri.crossVectors(n,Ke)),ri.normalize(),Sr.crossVectors(Ke,ri),s[0]=ri.x,s[4]=Sr.x,s[8]=Ke.x,s[1]=ri.y,s[5]=Sr.y,s[9]=Ke.y,s[2]=ri.z,s[6]=Sr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],x=n[7],v=n[11],P=n[15],S=s[0],T=s[4],R=s[8],M=s[12],y=s[1],I=s[5],B=s[9],U=s[13],V=s[2],Y=s[6],k=s[10],Q=s[14],z=s[3],et=s[7],rt=s[11],ct=s[15];return r[0]=a*S+o*y+l*V+h*z,r[4]=a*T+o*I+l*Y+h*et,r[8]=a*R+o*B+l*k+h*rt,r[12]=a*M+o*U+l*Q+h*ct,r[1]=u*S+c*y+d*V+f*z,r[5]=u*T+c*I+d*Y+f*et,r[9]=u*R+c*B+d*k+f*rt,r[13]=u*M+c*U+d*Q+f*ct,r[2]=g*S+_*y+m*V+p*z,r[6]=g*T+_*I+m*Y+p*et,r[10]=g*R+_*B+m*k+p*rt,r[14]=g*M+_*U+m*Q+p*ct,r[3]=E*S+x*y+v*V+P*z,r[7]=E*T+x*I+v*Y+P*et,r[11]=E*R+x*B+v*k+P*rt,r[15]=E*M+x*U+v*Q+P*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*c-s*h*c-r*o*d+n*h*d+s*o*f-n*l*f)+_*(+e*l*f-e*h*d+r*a*d-s*a*f+s*h*u-r*l*u)+m*(+e*h*c-e*o*f-r*a*c+n*a*f+r*o*u-n*h*u)+p*(-s*o*u-e*l*c+e*o*d+s*a*c-n*a*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=c*m*h-_*d*h+_*l*f-o*m*f-c*l*p+o*d*p,x=g*d*h-u*m*h-g*l*f+a*m*f+u*l*p-a*d*p,v=u*_*h-g*c*h+g*o*f-a*_*f-u*o*p+a*c*p,P=g*c*l-u*_*l-g*o*d+a*_*d+u*o*m-a*c*m,S=e*E+n*x+s*v+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=E*T,t[1]=(_*d*r-c*m*r-_*s*f+n*m*f+c*s*p-n*d*p)*T,t[2]=(o*m*r-_*l*r+_*s*h-n*m*h-o*s*p+n*l*p)*T,t[3]=(c*l*r-o*d*r-c*s*h+n*d*h+o*s*f-n*l*f)*T,t[4]=x*T,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*T,t[6]=(g*l*r-a*m*r-g*s*h+e*m*h+a*s*p-e*l*p)*T,t[7]=(a*d*r-u*l*r+u*s*h-e*d*h-a*s*f+e*l*f)*T,t[8]=v*T,t[9]=(g*c*r-u*_*r-g*n*f+e*_*f+u*n*p-e*c*p)*T,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*p+e*o*p)*T,t[11]=(u*o*r-a*c*r-u*n*h+e*c*h+a*n*f-e*o*f)*T,t[12]=P*T,t[13]=(u*_*s-g*c*s+g*n*d-e*_*d-u*n*m+e*c*m)*T,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*c*s-u*o*s+u*n*l-e*c*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,c=o+o,d=r*h,f=r*u,g=r*c,_=a*u,m=a*c,p=o*c,E=l*h,x=l*u,v=l*c,P=n.x,S=n.y,T=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+v)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(g+x)*T,s[9]=(m-E)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),o=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let h=1/r,u=1/a,c=1/o;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=c,mn.elements[9]*=c,mn.elements[10]*=c,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Yn){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),c=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===na)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Yn){let l=this.elements,h=1/(e-t),u=1/(n-s),c=1/(a-r),d=(e+t)*h,f=(n+s)*u,g,_;if(o===Yn)g=(a+r)*c,_=-2*c;else if(o===na)g=r*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new L,mn=new ue,uf=new L(0,0,0),df=new L(1,1,1),ri=new L,Sr=new L,Ke=new L,lh=new ue,ch=new Mn,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],c=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ff=0,hh=new L,qi=new Mn,zn=new ue,br=new L,Ds=new L,pf=new L,mf=new Mn,uh=new L(1,0,0),dh=new L(0,1,0),fh=new L(0,0,1),ph={type:"added"},gf={type:"removed"},Zi={type:"childadded",child:null},xo={type:"childremoved",child:null},Pe=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Cn,n=new Mn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ds,br,this.up):zn.lookAt(br,Ds,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(zn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gf),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new L,Hn=new L,vo=new L,Vn=new L,$i=new L,Ki=new L,mh=new L,yo=new L,Mo=new L,So=new L,bo=new ae,Eo=new ae,To=new ae,Wn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Hn.subVectors(n,e),vo.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(vo),h=Hn.dot(Hn),u=Hn.dot(vo),c=a*h-o*o;if(c===0)return r.set(0,0,0),null;let d=1/c,f=(h*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bo.setScalar(0),Eo.setScalar(0),To.setScalar(0),bo.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(Eo,r.y),a.addScaledVector(To,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Hn.subVectors(t,e),gn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;$i.subVectors(s,n),Ki.subVectors(r,n),yo.subVectors(t,n);let l=$i.dot(yo),h=Ki.dot(yo);if(l<=0&&h<=0)return e.copy(n);Mo.subVectors(t,s);let u=$i.dot(Mo),c=Ki.dot(Mo);if(u>=0&&c<=u)return e.copy(s);let d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector($i,a);So.subVectors(t,r);let f=$i.dot(So),g=Ki.dot(So);if(g>=0&&f<=g)return e.copy(r);let _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Ki,o);let m=u*g-f*c;if(m<=0&&c-u>=0&&f-g>=0)return mh.subVectors(r,s),o=(c-u)/(c-u+(f-g)),e.copy(s).addScaledVector(mh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector($i,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Er={h:0,s:0,l:0};function wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=cc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wo(a,r,t+1/3),this.g=wo(a,r,t),this.b=wo(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return jt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ce(Fe.r*255,0,255))*65536+Math.round(Ce(Fe.g*255,0,255))*256+Math.round(Ce(Fe.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=sn){jt.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Er);let n=Hs(ai.h,Er.h,e),s=Hs(ai.s,Er.s,e),r=Hs(ai.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Vt;Vt.NAMES=yu;var _f=0,Pn=class extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Zn(),this.name="",this.blending=as,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Vo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ln=class extends Pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new L,Tr=new At,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}};var oa=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var la=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},xf=0,nn=new ue,Ao=new Pe,Ji=new L,Je=new on,Us=new on,Re=new L,_e=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?la:oa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Je.min,Us.min),Je.expandByPoint(Re),Re.addVectors(Je.max,Us.max),Je.expandByPoint(Re)):(Je.expandByPoint(Us.min),Je.expandByPoint(Us.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Re.fromBufferAttribute(o,h),l&&(Ji.fromBufferAttribute(t,h),Re.add(Ji)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let h=new L,u=new L,c=new L,d=new At,f=new At,g=new At,_=new L,m=new L;function p(R,M,y){h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(h),c.sub(h),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(I),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[R].add(_),o[M].add(_),o[y].add(_),l[R].add(m),l[M].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,M=E.length;R<M;++R){let y=E[R],I=y.start,B=y.count;for(let U=I,V=I+B;U<V;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let x=new L,v=new L,P=new L,S=new L;function T(R){P.fromBufferAttribute(s,R),S.copy(P);let M=o[R];x.copy(M),x.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(S,M);let I=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,I)}for(let R=0,M=E.length;R<M;++R){let y=E[R],I=y.start,B=y.count;for(let U=I,V=I+B;U<V;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,h=new L,u=new L,c=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new je(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){let d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){let f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gh=new ue,vi=new Ci,wr=new Sn,_h=new L,Ar=new L,Rr=new L,Cr=new L,Ro=new L,Pr=new L,xh=new L,Ir=new L,he=class extends Pe{constructor(t=new _e,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],c=r[l];u!==0&&(Ro.fromBufferAttribute(c,t),a?Pr.addScaledVector(Ro,u):Pr.addScaledVector(Ro.sub(e),u))}e.add(Pr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(wr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(wr,_h)===null||vi.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(r).invert(),vi.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=x;v<P;v+=3){let S=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Lr(this,p,t,n,h,u,c,S,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Lr(this,a,t,n,h,u,c,E,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=x;v<P;v+=3){let S=v,T=v+1,R=v+2;s=Lr(this,p,t,n,h,u,c,S,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=m,x=m+1,v=m+2;s=Lr(this,a,t,n,h,u,c,E,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ir);return h<e.near||h>e.far?null:{distance:h,point:Ir.clone(),object:i}}function Lr(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Rr),i.getVertexPosition(h,Cr);let u=vf(i,t,e,n,Ar,Rr,Cr,xh);if(u){let c=new L;Wn.getBarycoord(xh,Ar,Rr,Cr,c),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,h,c,new At)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,h,c,new At)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,h,c,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new L,materialIndex:0};Wn.getNormal(Ar,Rr,Cr,d.normal),u.face=d,u.barycoord=c}return u}var cn=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],c=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(c,2));function g(_,m,p,E,x,v,P,S,T,R,M){let y=v/T,I=P/R,B=v/2,U=P/2,V=S/2,Y=T+1,k=R+1,Q=0,z=0,et=new L;for(let rt=0;rt<k;rt++){let ct=rt*I-U;for(let Ut=0;Ut<Y;Ut++){let Xt=Ut*y-B;et[_]=Xt*E,et[m]=ct*x,et[p]=V,h.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=S>0?1:-1,u.push(et.x,et.y,et.z),c.push(Ut/T),c.push(1-rt/R),Q+=1}}for(let rt=0;rt<R;rt++)for(let ct=0;ct<T;ct++){let Ut=d+ct+Y*rt,Xt=d+ct+Y*(rt+1),$=d+(ct+1)+Y*(rt+1),nt=d+(ct+1)+Y*rt;l.push(Ut,Xt,nt),l.push(Xt,$,nt),z+=6}o.addGroup(f,z,M),f+=z,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ba={clone:gs,merge:He},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ca=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new L,vh=new At,yh=new At,Ve=class extends ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,vh,yh),e.subVectors(yh,vh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,Il=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Ve(ji,Qi,t,e);r.layers=this.layers,this.add(r);let a=new Ve(ji,Qi,t,e);a.layers=this.layers,this.add(a);let o=new Ve(ji,Qi,t,e);o.layers=this.layers,this.add(o);let l=new Ve(ji,Qi,t,e);l.layers=this.layers,this.add(l);let h=new Ve(ji,Qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ha=class extends Qe{constructor(t,e,n,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ll=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ci});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=an),new Il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Co=new L,bf=new L,Ef=new kt,_n=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Co.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Sn,Dr=new L,Xs=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],c=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-h,m-f,v-p).normalize(),n[1].setComponents(l+r,d+h,m+f,v+p).normalize(),n[2].setComponents(l+a,d+u,m+g,v+E).normalize(),n[3].setComponents(l-a,d-u,m-g,v-E).normalize(),n[4].setComponents(l-o,d-c,m-_,v-x).normalize(),e===Yn)n[5].setComponents(l+o,d+c,m+_,v+x).normalize();else if(e===na)n[5].setComponents(o,c,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Su(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tf(i){let t=new WeakMap;function e(o,l){let h=o.array,u=o.usage,c=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,h){let u=l.array,c=l.updateRanges;if(i.bindBuffer(h,o),c.length===0)i.bufferSubData(h,0,u);else{c.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<c.length;f++){let g=c[d],_=c[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,c[d]=_)}c.length=d+1;for(let f=0,g=c.length;f<g;f++){let _=c[f];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Pi=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,c=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let E=p*d-a;for(let x=0;x<h;x++){let v=x*c-r;g.push(v,-E,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let x=E+h*p,v=E+h*(p+1),P=E+1+h*(p+1),S=E+1+h*p;f.push(x,v,S),f.push(v,P,S)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Ep=`struct PhysicalMaterial {
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
}`,Tp=`
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:wf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:Yf,color_pars_vertex:qf,color_vertex:Zf,common:$f,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:jf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:vp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:wp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:kp,morphnormal_vertex:zp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:Yp,normal_vertex:qp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:Em,background_vert:Tm,background_frag:wm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Om,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:km,meshbasic_frag:zm,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:Ym,meshphong_vert:qm,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:Jm,meshtoon_frag:jm,points_vert:Qm,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},at={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ge={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ge.physical={uniforms:He([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ur={r:0,b:0,g:0},Mi=new Cn,rg=new ue;function ag(i,t,e,n,s,r,a){let o=new Vt(0),l=r===!0?0:1,h,u,c=null,d=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1,v=g(E);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===Na)?(u===void 0&&(u=new he(new cn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:gs(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Mi)),u.material.toneMapped=jt.getTransfer(v.colorSpace)!==re,(c!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new he(new Pi(2,2),new hn({name:"BackgroundMaterial",uniforms:gs(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=jt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,x){E.getRGB(Ur,Mu(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m}}function og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,I,B,U,V){let Y=!1,k=c(U,B,I);r!==k&&(r=k,h(r.object)),Y=f(y,U,B,V),Y&&g(y,U,B,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,I,B,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function c(y,I,B){let U=B.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let Y=V[I.id];Y===void 0&&(Y={},V[I.id]=Y);let k=Y[U];return k===void 0&&(k=d(l()),Y[U]=k),k}function d(y){let I=[],B=[],U=[];for(let V=0;V<e;V++)I[V]=0,B[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,I,B,U){let V=r.attributes,Y=I.attributes,k=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let rt=V[z],ct=Y[z];if(ct===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),rt===void 0||rt.attribute!==ct||ct&&rt.data!==ct.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function g(y,I,B,U){let V={},Y=I.attributes,k=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let rt=Y[z];rt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));let ct={};ct.attribute=rt,rt&&rt.data&&(ct.data=rt.data),V[z]=ct,k++}r.attributes=V,r.attributesNum=k,r.index=U}function _(){let y=r.newAttributes;for(let I=0,B=y.length;I<B;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){let B=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;B[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),V[y]!==I&&(i.vertexAttribDivisor(y,I),V[y]=I)}function E(){let y=r.newAttributes,I=r.enabledAttributes;for(let B=0,U=I.length;B<U;B++)I[B]!==y[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function x(y,I,B,U,V,Y,k){k===!0?i.vertexAttribIPointer(y,I,B,V,Y):i.vertexAttribPointer(y,I,B,U,V,Y)}function v(y,I,B,U){_();let V=U.attributes,Y=B.getAttributes(),k=I.defaultAttributeValues;for(let Q in Y){let z=Y[Q];if(z.location>=0){let et=V[Q];if(et===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){let rt=et.normalized,ct=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;let Xt=Ut.buffer,$=Ut.type,nt=Ut.bytesPerElement,Mt=$===i.INT||$===i.UNSIGNED_INT||et.gpuType===ic;if(et.isInterleavedBufferAttribute){let ot=et.data,Pt=ot.stride,lt=et.offset;if(ot.isInstancedInterleavedBuffer){for(let q=0;q<z.locationSize;q++)p(z.location+q,ot.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let q=0;q<z.locationSize;q++)m(z.location+q);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let q=0;q<z.locationSize;q++)x(z.location+q,ct/z.locationSize,$,rt,Pt*nt,(lt+ct/z.locationSize*q)*nt,Mt)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)p(z.location+ot,et.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<z.locationSize;ot++)m(z.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ot=0;ot<z.locationSize;ot++)x(z.location+ot,ct/z.locationSize,$,rt,ct*nt,ct/z.locationSize*ot*nt,Mt)}}else if(k!==void 0){let rt=k[Q];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(z.location,rt);break;case 3:i.vertexAttrib3fv(z.location,rt);break;case 4:i.vertexAttrib4fv(z.location,rt);break;default:i.vertexAttrib1fv(z.location,rt)}}}}E()}function P(){R();for(let y in n){let I=n[y];for(let B in I){let U=I[B];for(let V in U)u(U[V].object),delete U[V];delete I[B]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let B in I){let U=I[B];for(let V in U)u(U[V].object),delete U[V];delete I[B]}delete n[y.id]}function T(y){for(let I in n){let B=n[I];if(B[y.id]===void 0)continue;let U=B[y.id];for(let V in U)u(U[V].object),delete U[V];delete B[y.id]}}function R(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function lg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,c){c!==0&&(i.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function o(h,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let g=0;g<c;g++)f+=u[g];e.update(f,n,1)}function l(h,u,c,d){if(c===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let g=0;for(let _=0;_<c;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:S}}function hg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let f=c.length!==0||d||n!==0||s;return s=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){let g=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,p=i.get(c);if(!s||g===null||g.length===0||r&&!m)r?u(null):h();else{let E=r?0:n,x=E*4,v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,g){let _=c!==null?c.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(c[x]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ug(i){let t=new WeakMap;function e(a,o){return o===Ko?a.mapping=ds:o===Jo&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ko||o===Jo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new Ll(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ua=class extends ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,Mh=[.125,.215,.35,.446,.526,.582],Ti=20,Po=new ua,Sh=new Vt,Io=null,Lo=0,Do=0,Uo=!1,bi=(1+Math.sqrt(5))/2,ts=1/bi,bh=[new L(-bi,ts,0),new L(bi,ts,0),new L(-ts,0,bi),new L(ts,0,bi),new L(0,bi,-ts),new L(0,bi,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Lo,Do),this._renderer.xr.enabled=Uo,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:js,format:vn,colorSpace:vs,depthBuffer:!1},s=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Sh),u.toneMapping=hi,u.autoClear=!1;let f=new ln({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new he(new cn,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Sh),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));let x=this._cubeSize;Nr(s,E*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new he(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);let p=[],E=0;for(let T=0;T<Ti;++T){let R=T/_,M=Math.exp(-R*R/2);p.push(M),T===0?E+=M:T<m&&(E+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let v=this._sizeLods[s],P=3*v*(s>x-rs?s-x+rs:0),S=4*(this._cubeSize-v);Nr(e,P,S,3*v,2*v),l.setRenderTarget(e),l.render(c,Po)}};function dg(i){let t=[],e=[],n=[],s=i,r=i-rs+1+Mh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-rs?l=Mh[a-i+rs-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,R=S>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(M,_*g*S),x.set(d,m*g*S);let y=[S,S,S,S,S,S];v.set(y,p*g*S)}let P=new _e;P.setAttribute("position",new je(E,_)),P.setAttribute("uv",new je(x,m)),P.setAttribute("faceIndex",new je(v,p)),t.push(P),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eh(i,t,e){let n=new jn(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fg(i,t,e){let n=new Float32Array(Ti),s=new L(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Th(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===Ko||l===Jo,u=l===ds||l===fs;if(h||u){let c=t.get(o),d=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new da(i)),c=h?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{let f=o.image;return h&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new da(i)),c=h?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function s(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){let s={},r=new WeakMap;function a(c){let d=c.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(c,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(c){let d=c.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=c.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(c){let d=[],f=c.index,g=c.attributes.position,_=0;if(f!==null){let E=f.array;_=f.version;for(let x=0,v=E.length;x<v;x+=3){let P=E[x+0],S=E[x+1],T=E[x+2];d.push(P,S,S,T,T,P)}}else if(g!==void 0){let E=g.array;_=g.version;for(let x=0,v=E.length/3-1;x<v;x+=3){let P=x+0,S=x+1,T=x+2;d.push(P,S,S,T,T,P)}}else return;let m=new(vu(d)?la:oa)(d,1);m.version=_;let p=r.get(c);p&&t.remove(p),r.set(c,m)}function u(c){let d=r.get(c);if(d){let f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function _g(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function c(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==c){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*P*4*c),T=new ra(S,v,P,c);T.type=Xn,T.needsUpdate=!0;let R=x*4;for(let y=0;y<c;y++){let I=m[y],B=p[y],U=E[y],V=v*P*4*y;for(let Y=0;Y<I.count;Y++){let k=Y*R;f===!0&&(s.fromBufferAttribute(I,Y),S[V+k+0]=s.x,S[V+k+1]=s.y,S[V+k+2]=s.z,S[V+k+3]=0),g===!0&&(s.fromBufferAttribute(B,Y),S[V+k+4]=s.x,S[V+k+5]=s.y,S[V+k+6]=s.z,S[V+k+7]=0),_===!0&&(s.fromBufferAttribute(U,Y),S[V+k+8]=s.x,S[V+k+9]=s.y,S[V+k+10]=s.z,S[V+k+11]=U.itemSize===4?s.w:1)}}d={count:c,texture:T,size:new At(v,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,c=t.get(l,u);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var fa=class extends Qe{constructor(t,e,n,s,r,a,o,l,h,u=os){if(u!==os&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=Ri),n===void 0&&u===ms&&(n=ps),super(null,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bu=new Qe,Ah=new fa(1,1),Eu=new ra,Tu=new Pl,wu=new ha,Rh=[],Ch=[],Ph=new Float32Array(16),Ih=new Float32Array(9),Lh=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Rh[s];if(r===void 0&&(r=new Float32Array(s),Rh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),Te(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),Te(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Ph.set(n),i.uniformMatrix4fv(this.addr,!1,Ph),Te(e,n)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ah.compareFunction=xu,r=Ah):r=bu,e.setTexture2D(t||r,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tu,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wu,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function zg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Hg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Gg(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yg(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Kg(i,t){i.uniform3iv(this.addr,t)}function Jg(i,t){i.uniform4iv(this.addr,t)}function jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bu,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tu,r[a])}function s0(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wu,r[a])}function r0(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function a0(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return jg;case 36294:return Qg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a0(e.type)}},Nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},No=/(\w+)(\])?(\[|\.)?/g;function Dh(i,t){i.seq.push(t),i.map[t.id]=t}function o0(i,t,e){let n=i.name,s=n.length;for(No.lastIndex=0;;){let r=No.exec(n),a=No.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Dh(e,h===void 0?new Dl(o,i,t):new Ul(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new Nl(o),Dh(e,c)),e=c}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);o0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Uh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l0=37297,c0=0;function h0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Nh=new kt;function u0(i){jt._getMatrix(Nh,jt.workingColorSpace,i);let t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Oa:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+h0(i.getShaderSource(t),a)}else return s}function d0(i,t){let e=u0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f0(i,t){let e;switch(t){case bd:e="Linear";break;case Ed:e="Reinhard";break;case Td:e="Cineon";break;case wd:e="ACESFilmic";break;case Rd:e="AgX";break;case Cd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Or=new L;function p0(){jt.getLuminanceCoefficients(Or);let i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function g0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zs(i){return i!==""}function Fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(x0,y0)}var v0=new Map;function y0(i,t){let e=Ht[t];if(e===void 0){let n=v0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(M0,S0)}function S0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function b0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function E0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function w0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:t="ENVMAP_BLENDING_MULTIPLY";break;case Md:t="ENVMAP_BLENDING_MIX";break;case Sd:t="ENVMAP_BLENDING_ADD";break}return t}function A0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=b0(e),h=E0(e),u=T0(e),c=w0(e),d=A0(e),f=m0(e),g=g0(r),_=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==hi?f0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=Ol(a),a=Fh(a,e),a=Bh(a,e),o=Ol(o),o=Fh(o,e),o=Bh(o,e),a=kh(a),o=kh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=E+m+a,v=E+p+o,P=Uh(s,s.VERTEX_SHADER,x),S=Uh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(S).trim(),Y=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,S);else{let Q=Oh(s,P,"vertex"),z=Oh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Q+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||V==="")&&(k=!1);k&&(I.diagnostics={runnable:Y,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(P),s.deleteShader(S),R=new hs(s,_),M=_0(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,l0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}var C0=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}};function P0(i,t,e,n,s,r,a){let o=new aa,l=new Fl,h=new Set,u=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,y,I,B,U){let V=B.fog,Y=U.geometry,k=M.isMeshStandardMaterial?B.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),z=Q&&Q.mapping===Na?Q.image.height:null,et=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=rt!==void 0?rt.length:0,Ut=0;Y.morphAttributes.position!==void 0&&(Ut=1),Y.morphAttributes.normal!==void 0&&(Ut=2),Y.morphAttributes.color!==void 0&&(Ut=3);let Xt,$,nt,Mt;if(et){let ie=Ge[et];Xt=ie.vertexShader,$=ie.fragmentShader}else Xt=M.vertexShader,$=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);let ot=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),lt=U.isInstancedMesh===!0,q=U.isBatchedMesh===!0,gt=!!M.map,It=!!M.matcap,Gt=!!Q,D=!!M.aoMap,de=!!M.lightMap,Wt=!!M.bumpMap,xt=!!M.normalMap,St=!!M.displacementMap,ne=!!M.emissiveMap,Lt=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,J=M.dispersion>0,tt=M.iridescence>0,K=M.sheen>0,Rt=M.transmission>0,ut=b&&!!M.anisotropyMap,_t=H&&!!M.clearcoatMap,Kt=H&&!!M.clearcoatNormalMap,it=H&&!!M.clearcoatRoughnessMap,vt=tt&&!!M.iridescenceMap,Dt=tt&&!!M.iridescenceThicknessMap,Nt=K&&!!M.sheenColorMap,yt=K&&!!M.sheenRoughnessMap,qt=!!M.specularMap,zt=!!M.specularColorMap,le=!!M.specularIntensityMap,N=Rt&&!!M.transmissionMap,ht=Rt&&!!M.thicknessMap,Z=!!M.gradientMap,j=!!M.alphaMap,pt=M.alphaTest>0,dt=!!M.alphaHash,Ft=!!M.extensions,Me=hi;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Me=i.toneMapping);let Ue={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:$,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:q,batchingColor:q&&U._colorsTexture!==null,instancing:lt,instancingColor:lt&&U.instanceColor!==null,instancingMorph:lt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:vs,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:It,envMap:Gt,envMapMode:Gt&&Q.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:de,bumpMap:Wt,normalMap:xt,displacementMap:d&&St,emissiveMap:ne,normalMapObjectSpace:xt&&M.normalMapType===Dd,normalMapTangentSpace:xt&&M.normalMapType===_u,metalnessMap:Lt,roughnessMap:C,anisotropy:b,anisotropyMap:ut,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:it,dispersion:J,iridescence:tt,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:K,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:qt,specularColorMap:zt,specularIntensityMap:le,transmission:Rt,transmissionMap:N,thicknessMap:ht,gradientMap:Z,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:dt,combine:M.combine,mapUv:gt&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:de&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:xt&&_(M.normalMap.channel),displacementMapUv:St&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:Lt&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(M.sheenRoughnessMap.channel),specularMapUv:qt&&_(M.specularMap.channel),specularColorMapUv:zt&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:ht&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(gt||j),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ue.vertexUv1s=h.has(1),Ue.vertexUv2s=h.has(2),Ue.vertexUv3s=h.has(3),h.clear(),Ue}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(E(y,M),x(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=g[M.type],I;if(y){let B=Ge[y];I=Ba.clone(B.uniforms)}else I=M.uniforms;return I}function P(M,y){let I;for(let B=0,U=u.length;B<U;B++){let V=u[B];if(V.cacheKey===y){I=V,++I.usedTimes;break}}return I===void 0&&(I=new R0(i,y,M,r),u.push(I)),I}function S(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:R}}function I0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:_,group:m},i[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=_,p.group=m),t++,p}function o(c,d,f,g,_,m){let p=a(c,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(c,d,f,g,_,m){let p=a(c,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(c,d){e.length>1&&e.sort(c||L0),n.length>1&&n.sort(d||Hh),s.length>1&&s.sort(d||Hh)}function u(){for(let c=t,d=i.length;c<d;c++){let f=i[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function D0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vh,i.set(n,[a])):s>=r.length?(a=new Vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function U0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function N0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var O0=0;function F0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B0(i){let t=new U0,e=N0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let s=new L,r=new ue,a=new ue;function o(h){let u=0,c=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,x=0,v=0,P=0,S=0,T=0;h.sort(F0);for(let M=0,y=h.length;M<y;M++){let I=h[M],B=I.color,U=I.intensity,V=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*U,c+=B.g*U,d+=B.b*U;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],U);T++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,z=e.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=I.shadow.matrix,E++}n.directional[f]=k,f++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(B).multiplyScalar(U),k.distance=V,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[_]=k;let Q=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,Q.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,v++}_++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(B).multiplyScalar(U),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=k,m++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let Q=I.shadow,z=e.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=k,g++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(U),k.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=T,n.version=O0++)}function l(h,u){let c=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){let x=h[p];if(x.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),c++}else if(x.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Gh(i){let t=new B0(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function k0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gh(i),t.set(s,[o])):r>=a.length?(o=new Gh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var kl=class extends Pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends Pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
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
}`;function V0(i,t,e){let n=new Xs,s=new At,r=new At,a=new ae,o=new kl({depthPacking:Ld}),l=new zl,h={},u=e.maxTextureSize,c={[ui]:Be,[Be]:ui,[rn]:rn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(S,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ci),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=p!==Gn&&this.type===Gn,V=p===Gn&&this.type!==Gn;for(let Y=0,k=S.length;Y<k;Y++){let Q=S[Y],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let et=z.getFrameExtents();if(s.multiply(et),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||U===!0||V===!0){let ct=this.type!==Gn?{minFilter:yn,magFilter:yn}:{};z.map!==null&&z.map.dispose(),z.map=new jn(s.x,s.y,ct),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let rt=z.getViewportCount();for(let ct=0;ct<rt;ct++){let Ut=z.getViewport(ct);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(a),z.updateMatrices(Q,ct),n=z.getFrustum(),v(T,R,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&E(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,I)};function E(S,T){let R=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,R,f,_,null)}function x(S,T,R,M){let y=null,I=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=y.uuid,U=T.uuid,V=h[B];V===void 0&&(V={},h[B]=V);let Y=V[U];Y===void 0&&(Y=y.clone(),V[U]=Y,T.addEventListener("dispose",P)),y=Y}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Gn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:c[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=i.properties.get(y);B.light=R}return y}function v(S,T,R,M,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Gn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let U=t.update(S),V=S.material;if(Array.isArray(V)){let Y=U.groups;for(let k=0,Q=Y.length;k<Q;k++){let z=Y[k],et=V[z.materialIndex];if(et&&et.visible){let rt=x(S,et,M,y);S.onBeforeShadow(i,S,T,R,U,rt,z),i.renderBufferDirect(R,null,U,rt,S,z),S.onAfterShadow(i,S,T,R,U,rt,z)}}}else if(V.visible){let Y=x(S,V,M,y);S.onBeforeShadow(i,S,T,R,U,Y,null),i.renderBufferDirect(R,null,U,Y,S,null),S.onAfterShadow(i,S,T,R,U,Y,null)}}let B=S.children;for(let U=0,V=B.length;U<V;U++)v(B[U],T,R,M,y)}function P(S){S.target.removeEventListener("dispose",P);for(let R in h){let M=h[R],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var G0={[Go]:Wo,[Xo]:Zo,[Yo]:$o,[us]:qo,[Wo]:Go,[Zo]:Xo,[$o]:Yo,[qo]:us};function W0(i,t){function e(){let N=!1,ht=new ae,Z=null,j=new ae(0,0,0,0);return{setMask:function(pt){Z!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),Z=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Ft,Me,Ue){Ue===!0&&(pt*=Me,dt*=Me,Ft*=Me),ht.set(pt,dt,Ft,Me),j.equals(ht)===!1&&(i.clearColor(pt,dt,Ft,Me),j.copy(ht))},reset:function(){N=!1,Z=null,j.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,Z=null,j=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let Me=pt;pt=null,this.setClear(Me)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?ot(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!N&&(i.depthMask(dt),Z=dt)},setFunc:function(dt){if(ht&&(dt=G0[dt]),j!==dt){switch(dt){case Go:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,Z=null,j=null,pt=null,ht=!1}}}function s(){let N=!1,ht=null,Z=null,j=null,pt=null,dt=null,Ft=null,Me=null,Ue=null;return{setTest:function(ie){N||(ie?ot(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!N&&(i.stencilMask(ie),ht=ie)},setFunc:function(ie,dn,Un){(Z!==ie||j!==dn||pt!==Un)&&(i.stencilFunc(ie,dn,Un),Z=ie,j=dn,pt=Un)},setOp:function(ie,dn,Un){(dt!==ie||Ft!==dn||Me!==Un)&&(i.stencilOp(ie,dn,Un),dt=ie,Ft=dn,Me=Un)},setLocked:function(ie){N=ie},setClear:function(ie){Ue!==ie&&(i.clearStencil(ie),Ue=ie)},reset:function(){N=!1,ht=null,Z=null,j=null,pt=null,dt=null,Ft=null,Me=null,Ue=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap,u={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,x=null,v=null,P=null,S=null,T=new Vt(0,0,0),R=0,M=!1,y=null,I=null,B=null,U=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=Q>=2);let et=null,rt={},ct=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Xt=new ae().fromArray(ct),$=new ae().fromArray(Ut);function nt(N,ht,Z,j){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Z;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let Mt={};Mt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(us),Wt(!1),xt(Xc),ot(i.CULL_FACE),D(ci);function ot(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Pt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function lt(N,ht){return c[N]!==ht?(i.bindFramebuffer(N,ht),c[N]=ht,N===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function q(N,ht){let Z=f,j=!1;if(N){Z=d.get(ht),Z===void 0&&(Z=[],d.set(ht,Z));let pt=N.textures;if(Z.length!==pt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ft=pt.length;dt<Ft;dt++)Z[dt]=i.COLOR_ATTACHMENT0+dt;Z.length=pt.length,j=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,j=!0);j&&i.drawBuffers(Z)}function gt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let It={[Ei]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};It[ad]=i.MIN,It[od]=i.MAX;let Gt={[ld]:i.ZERO,[cd]:i.ONE,[hd]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[dd]:i.DST_ALPHA,[ud]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[md]:i.ONE_MINUS_DST_COLOR,[fd]:i.ONE_MINUS_DST_ALPHA,[_d]:i.CONSTANT_COLOR,[xd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ht,Z,j,pt,dt,Ft,Me,Ue,ie){if(N===ci){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),N!==id){if(N!==m||ie!==M){if((p!==Ei||v!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,v=Ei),ie)switch(N){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,x=null,P=null,S=null,T.set(0,0,0),R=0,m=N,M=ie}return}pt=pt||ht,dt=dt||Z,Ft=Ft||j,(ht!==p||pt!==v)&&(i.blendEquationSeparate(It[ht],It[pt]),p=ht,v=pt),(Z!==E||j!==x||dt!==P||Ft!==S)&&(i.blendFuncSeparate(Gt[Z],Gt[j],Gt[dt],Gt[Ft]),E=Z,x=j,P=dt,S=Ft),(Me.equals(T)===!1||Ue!==R)&&(i.blendColor(Me.r,Me.g,Me.b,Ue),T.copy(Me),R=Ue),m=N,M=!1}function de(N,ht){N.side===rn?Pt(i.CULL_FACE):ot(i.CULL_FACE);let Z=N.side===Be;ht&&(Z=!Z),Wt(Z),N.blending===as&&N.transparent===!1?D(ci):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function xt(N){N!==td?(ot(i.CULL_FACE),N!==I&&(N===Xc?i.cullFace(i.BACK):N===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),I=N}function St(N){N!==B&&(k&&i.lineWidth(N),B=N)}function ne(N,ht,Z){N?(ot(i.POLYGON_OFFSET_FILL),(U!==ht||V!==Z)&&(i.polygonOffset(ht,Z),U=ht,V=Z)):Pt(i.POLYGON_OFFSET_FILL)}function Lt(N){N?ot(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+Y-1),et!==N&&(i.activeTexture(N),et=N)}function b(N,ht,Z){Z===void 0&&(et===null?Z=i.TEXTURE0+Y-1:Z=et);let j=rt[Z];j===void 0&&(j={type:void 0,texture:void 0},rt[Z]=j),(j.type!==N||j.texture!==ht)&&(et!==Z&&(i.activeTexture(Z),et=Z),i.bindTexture(N,ht||Mt[N]),j.type=N,j.texture=ht)}function H(){let N=rt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(N){Xt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Xt.copy(N))}function yt(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function qt(N,ht){let Z=h.get(ht);Z===void 0&&(Z=new WeakMap,h.set(ht,Z));let j=Z.get(N);j===void 0&&(j=i.getUniformBlockIndex(ht,N.name),Z.set(N,j))}function zt(N,ht){let j=h.get(ht).get(N);l.get(ht)!==j&&(i.uniformBlockBinding(ht,j,N.__bindingPointIndex),l.set(ht,j))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},et=null,rt={},c={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,x=null,v=null,P=null,S=null,T=new Vt(0,0,0),R=0,M=!1,y=null,I=null,B=null,U=null,V=null,Xt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Pt,bindFramebuffer:lt,drawBuffers:q,useProgram:gt,setBlending:D,setMaterial:de,setFlipSided:Wt,setCullFace:xt,setLineWidth:St,setPolygonOffset:ne,setScissorTest:Lt,activeTexture:C,bindTexture:b,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Dt,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Kt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Nt,viewport:yt,reset:le}}function Wh(i,t,e,n){let s=X0(n);switch(e){case hu:return i*t;case du:return i*t;case fu:return i*t*2;case pu:return i*t/s.components*s.byteLength;case ac:return i*t/s.components*s.byteLength;case mu:return i*t*2/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case uu:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case lc:return i*t*4/s.components*s.byteLength;case Kr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(i,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(i,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ta:case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gu:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X0(i){switch(i){case Kn:case ou:return{byteLength:1,components:1};case Gs:case lu:case js:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Ri:case ic:case Xn:return{byteLength:4,components:1};case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Y0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,u=new WeakMap,c,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):ia("canvas")}function _(C,b,H){let J=1,tt=Lt(C);if((tt.width>H||tt.height>H)&&(J=H/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(J*tt.width),Rt=Math.floor(J*tt.height);c===void 0&&(c=g(K,Rt));let ut=b?g(K,Rt):c;return ut.width=K,ut.height=Rt,ut.getContext("2d").drawImage(C,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Rt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,b,H,J,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=b;if(b===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),b===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let Rt=tt?Oa:jt.getTransfer(J);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Rt===re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,b){let H;return C?b===null||b===Ri||b===ps?H=i.DEPTH24_STENCIL8:b===Xn?H=i.DEPTH32F_STENCIL8:b===Gs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===ps?H=i.DEPTH_COMPONENT24:b===Xn?H=i.DEPTH_COMPONENT32F:b===Gs&&(H=i.DEPTH_COMPONENT16),H}function P(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==yn&&C.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){let b=C.target;b.removeEventListener("dispose",S),R(b),b.isVideoTexture&&u.delete(b)}function T(C){let b=C.target;b.removeEventListener("dispose",T),y(b)}function R(C){let b=n.get(C);if(b.__webglInit===void 0)return;let H=C.source,J=d.get(H);if(J){let tt=J[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(C),Object.keys(J).length===0&&d.delete(H)}n.remove(C)}function M(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let H=C.source,J=d.get(H);delete J[b.__cacheKey],a.memory.textures--}function y(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let tt=0;tt<b.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=C.textures;for(let J=0,tt=H.length;J<tt;J++){let K=n.get(H[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(C)}let I=0;function B(){I=0}function U(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function V(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Y(C,b){let H=n.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,C,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function k(C,b){let H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Q(C,b){let H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function z(C,b){let H=n.get(C);if(C.version>0&&H.__version!==C.version){nt(H,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let et={[jo]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},rt={[yn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},ct={[Ud]:i.NEVER,[zd]:i.ALWAYS,[Nd]:i.LESS,[xu]:i.LEQUAL,[Od]:i.EQUAL,[kd]:i.GEQUAL,[Fd]:i.GREATER,[Bd]:i.NOTEQUAL};function Ut(C,b){if(b.type===Xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===oo||b.magFilter===gr||b.magFilter===Ai||b.minFilter===an||b.minFilter===oo||b.minFilter===gr||b.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,et[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,et[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,et[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yn||b.minFilter!==gr&&b.minFilter!==Ai||b.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xt(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));let J=b.source,tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));let K=V(b);if(K!==C.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[K].usedTimes++;let Rt=tt[C.__cacheKey];Rt!==void 0&&(tt[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(b)),C.__cacheKey=K,C.__webglTexture=tt[K].texture}return H}function $(C,b,H){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let tt=Xt(C,b),K=b.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+H);let Rt=n.get(K);if(K.version!==Rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);let ut=jt.getPrimaries(jt.workingColorSpace),_t=b.colorSpace===li?null:jt.getPrimaries(b.colorSpace),Kt=b.colorSpace===li||ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let it=_(b.image,!1,s.maxTextureSize);it=ne(b,it);let vt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),Nt=x(b.internalFormat,vt,Dt,b.colorSpace,b.isVideoTexture);Ut(J,b);let yt,qt=b.mipmaps,zt=b.isVideoTexture!==!0,le=Rt.__version===void 0||tt===!0,N=K.dataReady,ht=P(b,it);if(b.isDepthTexture)Nt=v(b.format===ms,b.type),le&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Dt,null));else if(b.isDataTexture)if(qt.length>0){zt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,qt[0].width,qt[0].height);for(let Z=0,j=qt.length;Z<j;Z++)yt=qt[Z],zt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,vt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,yt.width,yt.height,0,vt,Dt,yt.data);b.generateMipmaps=!1}else zt?(le&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,vt,Dt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Dt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){zt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,qt[0].width,qt[0].height,it.depth);for(let Z=0,j=qt.length;Z<j;Z++)if(yt=qt[Z],b.format!==vn)if(vt!==null)if(zt){if(N)if(b.layerUpdates.size>0){let pt=Wh(yt.width,yt.height,b.format,b.type);for(let dt of b.layerUpdates){let Ft=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,dt,yt.width,yt.height,1,vt,Ft)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,it.depth,vt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,it.depth,vt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,yt.width,yt.height,it.depth,0,vt,Dt,yt.data)}else{zt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,qt[0].width,qt[0].height);for(let Z=0,j=qt.length;Z<j;Z++)yt=qt[Z],b.format!==vn?vt!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,vt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,yt.width,yt.height,0,vt,Dt,yt.data)}else if(b.isDataArrayTexture)if(zt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,it.width,it.height,it.depth),N)if(b.layerUpdates.size>0){let Z=Wh(it.width,it.height,b.format,b.type);for(let j of b.layerUpdates){let pt=it.data.subarray(j*Z/it.data.BYTES_PER_ELEMENT,(j+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,vt,Dt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Dt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,vt,Dt,it.data);else if(b.isData3DTexture)zt?(le&&e.texStorage3D(i.TEXTURE_3D,ht,Nt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Dt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,vt,Dt,it.data);else if(b.isFramebufferTexture){if(le)if(zt)e.texStorage2D(i.TEXTURE_2D,ht,Nt,it.width,it.height);else{let Z=it.width,j=it.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,Z,j,0,vt,Dt,null),Z>>=1,j>>=1}}else if(qt.length>0){if(zt&&le){let Z=Lt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Nt,Z.width,Z.height)}for(let Z=0,j=qt.length;Z<j;Z++)yt=qt[Z],zt?N&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,vt,Dt,yt):e.texImage2D(i.TEXTURE_2D,Z,Nt,vt,Dt,yt);b.generateMipmaps=!1}else if(zt){if(le){let Z=Lt(it);e.texStorage2D(i.TEXTURE_2D,ht,Nt,Z.width,Z.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Dt,it)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Dt,it);m(b)&&p(J),Rt.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function nt(C,b,H){if(b.image.length!==6)return;let J=Xt(C,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let K=n.get(tt);if(tt.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+H);let Rt=jt.getPrimaries(jt.workingColorSpace),ut=b.colorSpace===li?null:jt.getPrimaries(b.colorSpace),_t=b.colorSpace===li||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let j=0;j<6;j++)!Kt&&!it?vt[j]=_(b.image[j],!0,s.maxCubemapSize):vt[j]=it?b.image[j].image:b.image[j],vt[j]=ne(b,vt[j]);let Dt=vt[0],Nt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),qt=x(b.internalFormat,Nt,yt,b.colorSpace),zt=b.isVideoTexture!==!0,le=K.__version===void 0||J===!0,N=tt.dataReady,ht=P(b,Dt);Ut(i.TEXTURE_CUBE_MAP,b);let Z;if(Kt){zt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,Dt.width,Dt.height);for(let j=0;j<6;j++){Z=vt[j].mipmaps;for(let pt=0;pt<Z.length;pt++){let dt=Z[pt];b.format!==vn?Nt!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,dt.width,dt.height,Nt,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,qt,dt.width,dt.height,0,Nt,yt,dt.data)}}}else{if(Z=b.mipmaps,zt&&le){Z.length>0&&ht++;let j=Lt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,j.width,j.height)}for(let j=0;j<6;j++)if(it){zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,vt[j].width,vt[j].height,Nt,yt,vt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,vt[j].width,vt[j].height,0,Nt,yt,vt[j].data);for(let pt=0;pt<Z.length;pt++){let Ft=Z[pt].image[j].image;zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ft.width,Ft.height,Nt,yt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Ft.width,Ft.height,0,Nt,yt,Ft.data)}}else{zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,yt,vt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Nt,yt,vt[j]);for(let pt=0;pt<Z.length;pt++){let dt=Z[pt];zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Nt,yt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,qt,Nt,yt,dt.image[j])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Mt(C,b,H,J,tt,K){let Rt=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),_t=x(H.internalFormat,Rt,ut,H.colorSpace),Kt=n.get(b),it=n.get(H);if(it.__renderTarget=b,!Kt.__hasExternalTextures){let vt=Math.max(1,b.width>>K),Dt=Math.max(1,b.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,vt,Dt,b.depth,0,Rt,ut,null):e.texImage2D(tt,K,_t,vt,Dt,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,it.__webglTexture,0,Wt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,it.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let J=b.depthTexture,tt=J&&J.isDepthTexture?J.type:null,K=v(b.stencilBuffer,tt),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Wt(b);xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{let J=b.textures;for(let tt=0;tt<J.length;tt++){let K=J[tt],Rt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),_t=x(K.internalFormat,Rt,ut,K.colorSpace),Kt=Wt(b);H&&xt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,_t,b.width,b.height):xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,_t,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_t,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let tt=J.__webglTexture,K=Wt(b);if(b.depthTexture.format===os)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===ms)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function lt(C){let b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),ot(b.__webglDepthbuffer[J],C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ot(b.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(C,b,H){let J=n.get(C);b!==void 0&&Mt(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&lt(C)}function gt(C){let b=C.texture,H=n.get(C),J=n.get(b);C.addEventListener("dispose",T);let tt=C.textures,K=C.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else H.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)H.__webglFramebuffer[ut]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,_t=tt.length;ut<_t;ut++){let Kt=n.get(tt[ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&xt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let _t=tt[ut];H.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);let Kt=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),vt=x(_t.internalFormat,Kt,it,_t.colorSpace,C.isXRRenderTarget===!0),Dt=Wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Mt(H.__webglFramebuffer[ut][_t],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Mt(H.__webglFramebuffer[ut],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,_t=tt.length;ut<_t;ut++){let Kt=tt[ut],it=n.get(Kt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ut(i.TEXTURE_2D,Kt),Mt(H.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Ut(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Mt(H.__webglFramebuffer[_t],C,b,i.COLOR_ATTACHMENT0,ut,_t);else Mt(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ut,0);m(b)&&p(ut),e.unbindTexture()}C.depthBuffer&&lt(C)}function It(C){let b=C.textures;for(let H=0,J=b.length;H<J;H++){let tt=b[H];if(m(tt)){let K=E(C),Rt=n.get(tt).__webglTexture;e.bindTexture(K,Rt),p(K),e.unbindTexture()}}}let Gt=[],D=[];function de(C){if(C.samples>0){if(xt(C)===!1){let b=C.textures,H=C.width,J=C.height,tt=i.COLOR_BUFFER_BIT,K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),ut=b.length>1;if(ut)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);let Kt=n.get(b[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,tt,i.NEAREST),l===!0&&(Gt.length=0,D.length=0,Gt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Gt.push(K),D.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);let Kt=n.get(b[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Wt(C){return Math.min(s.maxSamples,C.samples)}function xt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function St(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function ne(C,b){let H=C.colorSpace,J=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==vs&&H!==li&&(jt.getTransfer(H)===re?(J!==vn||tt!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=q,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=xt}function q0(i,t){function e(n,s=li){let r,a=jt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.BYTE;if(n===lu)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===uu)return i.RGB;if(n===vn)return i.RGBA;if(n===du)return i.LUMINANCE;if(n===fu)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===mu)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===Kr||n===Jr||n===jr||n===Qr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===Ml||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ta)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===bl||n===El||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hl=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qn=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:$0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,g=null,_=new Vl,m=e.getContextAttributes(),p=null,E=null,x=[],v=[],P=new At,S=null,T=new Ve;T.viewport=new ae;let R=new Ve;R.viewport=new ae;let M=[T,R],y=new Hl,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=x[$];return nt===void 0&&(nt=new Vs,x[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=x[$];return nt===void 0&&(nt=new Vs,x[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=x[$];return nt===void 0&&(nt=new Vs,x[$]=nt),nt.getHandSpace()};function U($){let nt=v.indexOf($.inputSource);if(nt===-1)return;let Mt=x[nt];Mt!==void 0&&(Mt.update($.inputSource,$.frame,h||a),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<x.length;$++){let nt=v[$];nt!==null&&(v[$]=null,x[$].disconnect(nt))}I=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,c=null,s=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new jn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ms:os,Mt=m.stencil?ps:Ri);let Pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new jn(d.textureWidth,d.textureHeight,{format:vn,type:Kn,depthTexture:new fa(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let nt=0;nt<$.removed.length;nt++){let Mt=$.removed[nt],ot=v.indexOf(Mt);ot>=0&&(v[ot]=null,x[ot].disconnect(Mt))}for(let nt=0;nt<$.added.length;nt++){let Mt=$.added[nt],ot=v.indexOf(Mt);if(ot===-1){for(let lt=0;lt<x.length;lt++)if(lt>=v.length){v.push(Mt),ot=lt;break}else if(v[lt]===null){v[lt]=Mt,ot=lt;break}if(ot===-1)break}let Pt=x[ot];Pt&&Pt.connect(Mt)}}let k=new L,Q=new L;function z($,nt,Mt){k.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(Mt.matrixWorld);let ot=k.distanceTo(Q),Pt=nt.projectionMatrix.elements,lt=Mt.projectionMatrix.elements,q=Pt[14]/(Pt[10]-1),gt=Pt[14]/(Pt[10]+1),It=(Pt[9]+1)/Pt[5],Gt=(Pt[9]-1)/Pt[5],D=(Pt[8]-1)/Pt[0],de=(lt[8]+1)/lt[0],Wt=q*D,xt=q*de,St=ot/(-D+de),ne=St*-D;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ(St),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Lt=q+St,C=gt+St,b=Wt-ne,H=xt+(ot-ne),J=It*gt/C*Lt,tt=Gt*gt/C*Lt;$.projectionMatrix.makePerspective(b,H,J,tt,Lt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,Mt=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),y.near=R.near=T.near=nt,y.far=R.far=T.far=Mt,(I!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,B=y.far),T.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let ot=$.parent,Pt=y.cameras;et(y,ot);for(let lt=0;lt<Pt.length;lt++)et(Pt[lt],ot);Pt.length===2?z(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),rt($,y,ot)};function rt($,nt,Mt){Mt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ws*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ct=null;function Ut($,nt){if(u=nt.getViewerPose(h||a),g=nt,u!==null){let Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ot=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let lt=0;lt<Mt.length;lt++){let q=Mt[lt],gt=null;if(f!==null)gt=f.getViewport(q);else{let Gt=c.getViewSubImage(d,q);gt=Gt.viewport,lt===0&&(t.setRenderTargetTextures(E,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(E))}let It=M[lt];It===void 0&&(It=new Ve,It.layers.enable(lt),It.viewport=new ae,M[lt]=It),It.matrix.fromArray(q.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(q.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(y.matrix.copy(It.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(It)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let lt=c.getDepthInformation(Mt[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){let ot=v[Mt],Pt=x[Mt];ot!==null&&Pt!==void 0&&Pt.update(ot,nt,h||a)}ct&&ct($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Xt=new Su;Xt.setAnimationLoop(Ut),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}},Si=new Cn,J0=new ue;function j0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),x=E.envMap,v=E.envMapRotation;x&&(m.envMap.value=x,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){let v=x.program;n.uniformBlockBinding(E,v)}function h(E,x){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(E,P);let S=t.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function u(E){let x=c();E.__bindingPointIndex=x;let v=i.createBuffer(),P=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function c(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let x=s[E.id],v=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,T=v.length;S<T;S++){let R=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,y=R.length;M<y;M++){let I=R[M];if(f(I,S,M,P)===!0){let B=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],V=0;for(let Y=0;Y<U.length;Y++){let k=U[Y],Q=_(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,B+V,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,x,v,P){let S=E.value,T=x+"_"+v;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{let R=P[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return P[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(E){let x=E.uniforms,v=0,P=16;for(let T=0,R=x.length;T<R;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,I=M.length;y<I;y++){let B=M[y],U=Array.isArray(B.value)?B.value:[B.value];for(let V=0,Y=U.length;V<Y;V++){let k=U[V],Q=_(k),z=v%P,et=z%Q.boundary,rt=z+et;v+=et,rt!==0&&P-rt<Q.storage&&(v+=P-rt),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}let S=v%P;return S>0&&(v+=P-S),E.__size=v,E.__cache={},this}function _(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){let x=E.target;x.removeEventListener("dispose",m);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:h,dispose:p}}var pa=class{constructor(t={}){let{canvas:e=sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=hi,this.toneMappingExposure=1;let v=this,P=!1,S=0,T=0,R=null,M=-1,y=null,I=new ae,B=new ae,U=null,V=new Vt(0),Y=0,k=e.width,Q=e.height,z=1,et=null,rt=null,ct=new ae(0,0,k,Q),Ut=new ae(0,0,k,Q),Xt=!1,$=new Xs,nt=!1,Mt=!1,ot=new ue,Pt=new ue,lt=new L,q=new ae,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Gt(){return R===null?z:1}let D=n;function de(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let O="webgl2";if(D=de(O,w),D===null)throw de(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,xt,St,ne,Lt,C,b,H,J,tt,K,Rt,ut,_t,Kt,it,vt,Dt,Nt,yt,qt,zt,le,N;function ht(){Wt=new mg(D),Wt.init(),zt=new q0(D,Wt),xt=new cg(D,Wt,t,zt),St=new W0(D,Wt),xt.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),ne=new xg(D),Lt=new I0,C=new Y0(D,Wt,St,Lt,xt,zt,ne),b=new ug(v),H=new pg(v),J=new Tf(D),le=new og(D,J),tt=new gg(D,J,ne,le),K=new yg(D,tt,J,ne),Nt=new vg(D,xt,C),it=new hg(Lt),Rt=new P0(v,b,H,Wt,xt,le,it),ut=new j0(v,Lt),_t=new D0,Kt=new k0(Wt),Dt=new ag(v,b,H,St,K,f,l),vt=new V0(v,K,xt),N=new Q0(D,ne,xt,St),yt=new lg(D,Wt,ne),qt=new _g(D,Wt,ne),ne.programs=Rt.programs,v.capabilities=xt,v.extensions=Wt,v.properties=Lt,v.renderLists=_t,v.shadowMap=vt,v.state=St,v.info=ne}ht();let Z=new Gl(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(k,Q,!1))},this.getSize=function(w){return w.set(k,Q)},this.setSize=function(w,O,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Q=O,e.width=Math.floor(w*z),e.height=Math.floor(O*z),G===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(k*z,Q*z).floor()},this.setDrawingBufferSize=function(w,O,G){k=w,Q=O,z=G,e.width=Math.floor(w*G),e.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,O,G,W){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,O,G,W),St.viewport(I.copy(ct).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,O,G,W){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,O,G,W),St.scissor(B.copy(Ut).multiplyScalar(z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){St.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let F=!1;if(R!==null){let st=R.texture.format;F=st===lc||st===oc||st===ac}if(F){let st=R.texture.type,ft=st===Kn||st===Ri||st===Gs||st===ps||st===sc||st===rc,Et=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ot=Et.r,Bt=Et.g,wt=Et.b;ft?(g[0]=Ot,g[1]=Bt,g[2]=wt,g[3]=Tt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ot,_[1]=Bt,_[2]=wt,_[3]=Tt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Kt.dispose(),Lt.dispose(),b.dispose(),H.dispose(),K.dispose(),le.dispose(),N.dispose(),Rt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Mc),Z.removeEventListener("sessionend",Sc),pi.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=ne.autoReset,O=vt.enabled,G=vt.autoUpdate,W=vt.needsUpdate,F=vt.type;ht(),ne.autoReset=w,vt.enabled=O,vt.autoUpdate=G,vt.needsUpdate=W,vt.type=F}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){let O=w.target;O.removeEventListener("dispose",Ft),Me(O)}function Me(w){Ue(w),Lt.remove(w)}function Ue(w){let O=Lt.get(w).programs;O!==void 0&&(O.forEach(function(G){Rt.releaseProgram(G)}),w.isShaderMaterial&&Rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,F,st){O===null&&(O=gt);let ft=F.isMesh&&F.matrixWorld.determinant()<0,Et=Yu(w,O,G,W,F);St.setMaterial(W,ft);let Tt=G.index,Ot=1;if(W.wireframe===!0){if(Tt=tt.getWireframeAttribute(G),Tt===void 0)return;Ot=2}let Bt=G.drawRange,wt=G.attributes.position,Qt=Bt.start*Ot,ce=(Bt.start+Bt.count)*Ot;st!==null&&(Qt=Math.max(Qt,st.start*Ot),ce=Math.min(ce,(st.start+st.count)*Ot)),Tt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,Tt.count)):wt!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,wt.count));let fe=ce-Qt;if(fe<0||fe===1/0)return;le.setup(F,W,Et,G,Tt);let We,te=yt;if(Tt!==null&&(We=J.get(Tt),te=qt,te.setIndex(We)),F.isMesh)W.wireframe===!0?(St.setLineWidth(W.wireframeLinewidth*Gt()),te.setMode(D.LINES)):te.setMode(D.TRIANGLES);else if(F.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),St.setLineWidth(Ct*Gt()),F.isLineSegments?te.setMode(D.LINES):F.isLineLoop?te.setMode(D.LINE_LOOP):te.setMode(D.LINE_STRIP)}else F.isPoints?te.setMode(D.POINTS):F.isSprite&&te.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ct=F._multiDrawStarts,Nn=F._multiDrawCounts,ee=F._multiDrawCount,fn=Tt?J.get(Tt).bytesPerElement:1,ki=Lt.get(W).currentProgram.getUniforms();for(let qe=0;qe<ee;qe++)ki.setValue(D,"_gl_DrawID",qe),te.render(Ct[qe]/fn,Nn[qe])}else if(F.isInstancedMesh)te.renderInstances(Qt,fe,F.count);else if(G.isInstancedBufferGeometry){let Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nn=Math.min(G.instanceCount,Ct);te.renderInstances(Qt,fe,Nn)}else te.render(Qt,fe)};function ie(w,O,G){w.transparent===!0&&w.side===rn&&w.forceSinglePass===!1?(w.side=Be,w.needsUpdate=!0,er(w,O,G),w.side=ui,w.needsUpdate=!0,er(w,O,G),w.side=rn):er(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),p=Kt.get(G),p.init(O),x.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let st=F.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){let Et=st[ft];ie(Et,G,F),W.add(Et)}else ie(st,G,F),W.add(st)}),x.pop(),p=null,W},this.compileAsync=function(w,O,G=null){let W=this.compile(w,O,G);return new Promise(F=>{function st(){if(W.forEach(function(ft){Lt.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){F(w);return}setTimeout(st,10)}Wt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let dn=null;function Un(w){dn&&dn(w)}function Mc(){pi.stop()}function Sc(){pi.start()}let pi=new Su;pi.setAnimationLoop(Un),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){dn=w,Z.setAnimationLoop(w),w===null?pi.stop():pi.start()},Z.addEventListener("sessionstart",Mc),Z.addEventListener("sessionend",Sc),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,R),p=Kt.get(w,x.length),p.init(O),x.push(p),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,Mt),m=_t.get(w,E.length),m.init(),E.push(m),Z.enabled===!0&&Z.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&ja(st,O,-1/0,v.sortObjects)}ja(w,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,rt),It=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,It&&Dt.addToRenderList(m,w),this.info.render.frame++,nt===!0&&it.beginShadows();let G=p.state.shadowsArray;vt.render(G,w,O),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let st=O.cameras;if(F.length>0)for(let ft=0,Et=st.length;ft<Et;ft++){let Tt=st[ft];Ec(W,F,w,Tt)}It&&Dt.render(w);for(let ft=0,Et=st.length;ft<Et;ft++){let Tt=st[ft];bc(m,w,Tt,Tt.viewport)}}else F.length>0&&Ec(W,F,w,O),It&&Dt.render(w),bc(m,w,O);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,O),le.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ja(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){W&&q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let ft=K.update(w),Et=w.material;Et.visible&&m.push(w,ft,Et,G,q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){let ft=K.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),q.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),q.copy(ft.boundingSphere.center)),q.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Et)){let Tt=ft.groups;for(let Ot=0,Bt=Tt.length;Ot<Bt;Ot++){let wt=Tt[Ot],Qt=Et[wt.materialIndex];Qt&&Qt.visible&&m.push(w,ft,Qt,G,q.z,wt)}}else Et.visible&&m.push(w,ft,Et,G,q.z,null)}}let st=w.children;for(let ft=0,Et=st.length;ft<Et;ft++)ja(st[ft],O,G,W)}function bc(w,O,G,W){let F=w.opaque,st=w.transmissive,ft=w.transparent;p.setupLightsView(G),nt===!0&&it.setGlobalState(v.clippingPlanes,G),W&&St.viewport(I.copy(W)),F.length>0&&tr(F,O,G),st.length>0&&tr(st,O,G),ft.length>0&&tr(ft,O,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ec(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new jn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?js:Kn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let st=p.state.transmissionRenderTarget[W.id],ft=W.viewport||I;st.setSize(ft.z,ft.w);let Et=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),It&&Dt.render(G);let Tt=v.toneMapping;v.toneMapping=hi;let Ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),nt===!0&&it.setGlobalState(v.clippingPlanes,W),tr(w,G,W),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,Qt=O.length;wt<Qt;wt++){let ce=O[wt],fe=ce.object,We=ce.geometry,te=ce.material,Ct=ce.group;if(te.side===rn&&fe.layers.test(W.layers)){let Nn=te.side;te.side=Be,te.needsUpdate=!0,Tc(fe,G,W,We,te,Ct),te.side=Nn,te.needsUpdate=!0,Bt=!0}}Bt===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}v.setRenderTarget(Et),v.setClearColor(V,Y),Ot!==void 0&&(W.viewport=Ot),v.toneMapping=Tt}function tr(w,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,st=w.length;F<st;F++){let ft=w[F],Et=ft.object,Tt=ft.geometry,Ot=W===null?ft.material:W,Bt=ft.group;Et.layers.test(G.layers)&&Tc(Et,O,G,Tt,Ot,Bt)}}function Tc(w,O,G,W,F,st){w.onBeforeRender(v,O,G,W,F,st),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,O,G,W,w,st),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,v.renderBufferDirect(G,O,W,F,w,st),F.side=ui,F.needsUpdate=!0,v.renderBufferDirect(G,O,W,F,w,st),F.side=rn):v.renderBufferDirect(G,O,W,F,w,st),w.onAfterRender(v,O,G,W,F,st)}function er(w,O,G){O.isScene!==!0&&(O=gt);let W=Lt.get(w),F=p.state.lights,st=p.state.shadowsArray,ft=F.state.version,Et=Rt.getParameters(w,F.state,st,O,G),Tt=Rt.getProgramCacheKey(Et),Ot=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Ft),Ot=new Map,W.programs=Ot);let Bt=Ot.get(Tt);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===ft)return Ac(w,Et),Bt}else Et.uniforms=Rt.getUniforms(w),w.onBeforeCompile(Et,v),Bt=Rt.acquireProgram(Et,Tt),Ot.set(Tt,Bt),W.uniforms=Et.uniforms;let wt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=it.uniform),Ac(w,Et),W.needsLights=Zu(w),W.lightsStateVersion=ft,W.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function wc(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ac(w,O){let G=Lt.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Yu(w,O,G,W,F){O.isScene!==!0&&(O=gt),C.resetTextureUnits();let st=O.fog,ft=W.isMeshStandardMaterial?O.environment:null,Et=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vs,Tt=(W.isMeshStandardMaterial?H:b).get(W.envMap||ft),Ot=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color,fe=hi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);let We=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=We!==void 0?We.length:0,Ct=Lt.get(W),Nn=p.state.lights;if(nt===!0&&(Mt===!0||w!==y)){let tn=w===y&&W.id===M;it.setState(W,w,tn)}let ee=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Nn.state.version||Ct.outputColorSpace!==Et||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==Tt||W.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Ot||Ct.vertexTangents!==Bt||Ct.morphTargets!==wt||Ct.morphNormals!==Qt||Ct.morphColors!==ce||Ct.toneMapping!==fe||Ct.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ct.__version=W.version);let fn=Ct.currentProgram;ee===!0&&(fn=er(W,O,F));let ki=!1,qe=!1,Ts=!1,pe=fn.getUniforms(),wn=Ct.uniforms;if(St.useProgram(fn.program)&&(ki=!0,qe=!0,Ts=!0),W.id!==M&&(M=W.id,qe=!0),ki||y!==w){St.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),af(ot),of(ot),pe.setValue(D,"projectionMatrix",ot)):pe.setValue(D,"projectionMatrix",w.projectionMatrix),pe.setValue(D,"viewMatrix",w.matrixWorldInverse);let Qn=pe.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,lt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,qe=!0,Ts=!0)}if(F.isSkinnedMesh){pe.setOptional(D,F,"bindMatrix"),pe.setOptional(D,F,"bindMatrixInverse");let tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pe.setValue(D,"boneTexture",tn.boneTexture,C))}F.isBatchedMesh&&(pe.setOptional(D,F,"batchingTexture"),pe.setValue(D,"batchingTexture",F._matricesTexture,C),pe.setOptional(D,F,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",F._indirectTexture,C),pe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",F._colorsTexture,C));let ws=G.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&Nt.update(F,G,fn),(qe||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,pe.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wn.envMap.value=Tt,wn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(wn.envMapIntensity.value=O.environmentIntensity),qe&&(pe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&qu(wn,Ts),st&&W.fog===!0&&ut.refreshFogUniforms(wn,st),ut.refreshMaterialUniforms(wn,W,z,Q,p.state.transmissionRenderTarget[w.id]),hs.upload(D,wc(Ct),wn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(hs.upload(D,wc(Ct),wn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(D,"center",F.center),pe.setValue(D,"modelViewMatrix",F.modelViewMatrix),pe.setValue(D,"normalMatrix",F.normalMatrix),pe.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let tn=W.uniformsGroups;for(let Qn=0,ti=tn.length;Qn<ti;Qn++){let Rc=tn[Qn];N.update(Rc,fn),N.bind(Rc,fn)}}return fn}function qu(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Zu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,G){Lt.get(w.texture).__webglTexture=O,Lt.get(w.depthTexture).__webglTexture=G;let W=Lt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let G=Lt.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){R=w,S=O,T=G;let W=!0,F=null,st=!1,ft=!1;if(w){let Tt=Lt.get(w);if(Tt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Tt.__hasExternalTextures)C.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let wt=w.depthTexture;if(Tt.__boundDepthTexture!==wt){if(wt!==null&&Lt.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);let Bt=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?F=Bt[O][G]:F=Bt[O],st=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[G]:F=Bt,I.copy(w.viewport),B.copy(w.scissor),U=w.scissorTest}else I.copy(ct).multiplyScalar(z).floor(),B.copy(Ut).multiplyScalar(z).floor(),U=Xt;if(St.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&St.drawBuffers(w,F),St.viewport(I),St.scissor(B),St.setScissorTest(U),st){let Tt=Lt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,G)}else if(ft){let Tt=Lt.get(w.texture),Ot=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Ot)}M=-1},this.readRenderTargetPixels=function(w,O,G,W,F,st,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){St.bindFramebuffer(D.FRAMEBUFFER,Et);try{let Tt=w.texture,Ot=Tt.format,Bt=Tt.type;if(!xt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-F&&D.readPixels(O,G,W,F,zt.convert(Ot),zt.convert(Bt),st)}finally{let Tt=R!==null?Lt.get(R).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,W,F,st,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){let Tt=w.texture,Ot=Tt.format,Bt=Tt.type;if(!xt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&G>=0&&G<=w.height-F){St.bindFramebuffer(D.FRAMEBUFFER,Et);let wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(O,G,W,F,zt.convert(Ot),zt.convert(Bt),0);let Qt=R!==null?Lt.get(R).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Qt);let ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await rf(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(wt),D.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(w.image.width*W),st=Math.floor(w.image.height*W),ft=O!==null?O.x:0,Et=O!==null?O.y:0;C.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ft,Et,F,st),St.unbindTexture()},this.copyTextureToTexture=function(w,O,G=null,W=null,F=0){w.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let st,ft,Et,Tt,Ot,Bt,wt,Qt,ce,fe=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(st=G.max.x-G.min.x,ft=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Ot=G.min.y,Bt=G.isBox3?G.min.z:0):(st=fe.width,ft=fe.height,Et=fe.depth||1,Tt=0,Ot=0,Bt=0),W!==null?(wt=W.x,Qt=W.y,ce=W.z):(wt=0,Qt=0,ce=0);let We=zt.convert(O.format),te=zt.convert(O.type),Ct;O.isData3DTexture?(C.setTexture3D(O,0),Ct=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Ct=D.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Nn=D.getParameter(D.UNPACK_ROW_LENGTH),ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),ki=D.getParameter(D.UNPACK_SKIP_ROWS),qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);let Ts=w.isDataArrayTexture||w.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let wn=Lt.get(w),ws=Lt.get(O),tn=Lt.get(wn.__renderTarget),Qn=Lt.get(ws.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<Et;ti++)Ts&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(w).__webglTexture,F,Bt+ti),w.isDepthTexture?(pe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(O).__webglTexture,F,ce+ti),D.blitFramebuffer(Tt,Ot,st,ft,wt,Qt,st,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):pe?D.copyTexSubImage3D(Ct,F,wt,Qt,ce+ti,Tt,Ot,st,ft):D.copyTexSubImage2D(Ct,F,wt,Qt,ce+ti,Tt,Ot,st,ft);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ct,F,wt,Qt,ce,st,ft,Et,We,te,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,F,wt,Qt,ce,st,ft,Et,We,fe.data):D.texSubImage3D(Ct,F,wt,Qt,ce,st,ft,Et,We,te,fe):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,wt,Qt,st,ft,We,te,fe.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,wt,Qt,fe.width,fe.height,We,fe.data):D.texSubImage2D(D.TEXTURE_2D,F,wt,Qt,st,ft,We,te,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ki),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),F===0&&O.generateMipmaps&&D.generateMipmap(Ct),St.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,W=null,F=0){return w.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,G,W,F)},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){S=0,T=0,R=null,St.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var ma=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ze=new L,un=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends Pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Ns=new L,ns=new L,is=new L,ss=new At,Os=new At,Au=new ue,Fr=new L,Fs=new L,Br=new L,Xh=new At,Oo=new At,Yh=new At,_a=class extends Pe{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ga(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new un(n,3,0,!1)),es.setAttribute("uv",new un(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;kr(Fr.set(-.5,-.5,0),is,a,ns,s,r),kr(Fs.set(.5,-.5,0),is,a,ns,s,r),kr(Br.set(.5,.5,0),is,a,ns,s,r),Xh.set(0,0),Oo.set(1,0),Yh.set(1,1);let o=t.ray.intersectTriangle(Fr,Fs,Br,!1,Ns);if(o===null&&(kr(Fs.set(-.5,.5,0),is,a,ns,s,r),Oo.set(0,1),o=t.ray.intersectTriangle(Fr,Br,Fs,!1,Ns),o===null))return;let l=t.ray.origin.distanceTo(Ns);l<t.near||l>t.far||e.push({distance:l,point:Ns.clone(),uv:Wn.getInterpolation(Ns,Fr,Fs,Br,Xh,Oo,Yh,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function kr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=r*ss.x-s*ss.y,Os.y=s*ss.x+r*ss.y):Os.copy(ss),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(Au)}var bn=class extends Pn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xa=new L,va=new L,qh=new ue,Bs=new Ci,zr=new Sn,Fo=new L,Zh=new L,_s=class extends Pe{constructor(t=new _e,e=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xa.fromBufferAttribute(e,s-1),va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xa.distanceTo(va);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;qh.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){let p=u.getX(_),E=u.getX(_+1),x=Hr(this,t,Bs,l,p,E);x&&e.push(x)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=Hr(this,t,Bs,l,_,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=h){let p=Hr(this,t,Bs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Hr(this,t,Bs,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),e.distanceSqToSegment(xa,va,Fo,Zh)>n)return;Fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Fo);if(!(l<t.near||l>t.far))return{distance:l,point:Zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var $h=new L,Kh=new L,di=class extends _s{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$h.fromBufferAttribute(e,s),Kh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(Kh);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qs=class extends Pn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jh=new ue,Wl=new Ci,Vr=new Sn,Gr=new L,ya=class extends Pe{constructor(t=new _e,e=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Jh.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(Jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=h.getX(g);Gr.fromBufferAttribute(c,m),jh(Gr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Gr.fromBufferAttribute(c,g),jh(Gr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jh(i,t,e,n,s,r,a){let o=Wl.distanceSqToPoint(i);if(o<e){let l=new L;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ma=class extends Qe{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Sa=class i extends _e{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],u=1/e,c=new L,d=new At,f=new L,g=new L,_=new L,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){let x=n+E*u*s,v=Math.sin(x),P=Math.cos(x);for(let S=0;S<=t.length-1;S++){c.x=t[S].x*v,c.y=t[S].y,c.z=t[S].x*P,a.push(c.x,c.y,c.z),d.x=E/e,d.y=S/(t.length-1),o.push(d.x,d.y);let T=l[3*S+0]*v,R=l[3*S+1],M=l[3*S+0]*P;h.push(T,R,M)}}for(let E=0;E<e;E++)for(let x=0;x<t.length-1;x++){let v=x+E*t.length,P=v,S=v+t.length,T=v+t.length+1,R=v+1;r.push(P,S,R),r.push(T,R,S)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ba=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],d=[],f=[],g=0,_=[],m=n/2,p=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function E(){let v=new L,P=new L,S=0,T=(e-t)/n;for(let R=0;R<=r;R++){let M=[],y=R/r,I=y*(e-t)+t;for(let B=0;B<=s;B++){let U=B/s,V=U*l+o,Y=Math.sin(V),k=Math.cos(V);P.x=I*Y,P.y=-y*n+m,P.z=I*k,c.push(P.x,P.y,P.z),v.set(Y,T,k).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-y),M.push(g++)}_.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){let y=_[M][R],I=_[M+1][R],B=_[M+1][R+1],U=_[M][R+1];(t>0||M!==0)&&(u.push(y,I,U),S+=3),(e>0||M!==r-1)&&(u.push(I,B,U),S+=3)}h.addGroup(p,S,0),p+=S}function x(v){let P=g,S=new At,T=new L,R=0,M=v===!0?t:e,y=v===!0?1:-1;for(let B=1;B<=s;B++)c.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let V=B/s*l+o,Y=Math.cos(V),k=Math.sin(V);T.x=M*k,T.y=m*y,T.z=M*Y,c.push(T.x,T.y,T.z),d.push(0,y,0),S.x=Y*.5+.5,S.y=k*.5*y+.5,f.push(S.x,S.y),g++}for(let B=0;B<s;B++){let U=P+B,V=I+B;v===!0?u.push(V,V+1,U):u.push(V+1,V,U),R+=3}h.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class i extends ba{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Wr=new L,Xr=new L,Bo=new L,Yr=new Wn,Zs=class extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ls*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],u=["a","b","c"],c=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(h[0]=a.getX(g),h[1]=a.getX(g+1),h[2]=a.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:_,b:m,c:p}=Yr;if(_.fromBufferAttribute(o,h[0]),m.fromBufferAttribute(o,h[1]),p.fromBufferAttribute(o,h[2]),Yr.getNormal(Bo),c[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let E=0;E<3;E++){let x=(E+1)%3,v=c[E],P=c[x],S=Yr[u[E]],T=Yr[u[x]],R=`${v}_${P}`,M=`${P}_${v}`;M in d&&d[M]?(Bo.dot(d[M].normal)<=r&&(f.push(S.x,S.y,S.z),f.push(T.x,T.y,T.z)),d[M]=null):R in d||(d[R]={index0:h[E],index1:h[x],normal:Bo.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Wr.fromBufferAttribute(o,_),Xr.fromBufferAttribute(o,m),f.push(Wr.x,Wr.y,Wr.z),f.push(Xr.x,Xr.y,Xr.z)}this.setAttribute("position",new Yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var $s=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,u=[],c=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let E=[],x=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let S=P/e;c.x=-t*Math.cos(s+S*r)*Math.sin(a+x*o),c.y=t*Math.cos(a+x*o),c.z=t*Math.sin(s+S*r)*Math.sin(a+x*o),g.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(S+v,1-x),E.push(h++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let x=u[p][E+1],v=u[p][E],P=u[p+1][E],S=u[p+1][E+1];(p!==0||a>0)&&f.push(x,v,S),(p!==n-1||l<Math.PI)&&f.push(v,P,S)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ta=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],u=new L,c=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(_),c.y=(t+e*Math.cos(m))*Math.sin(_),c.z=e*Math.sin(m),o.push(c.x,c.y,c.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wa=class extends _e{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new L,r=new L;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=l.length;h<u;++h){let c=l[h],d=c.start,f=c.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,E),Qh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let u=3*o+h,c=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,c),Qh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Qh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Ks=class extends Pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function qr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function t_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,o=2*e-n;break;case Jc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,l=2*n-e;break;case Jc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==o;++P)r[P]=p*a[u+P]+E*a[h+P]+x*a[l+P]+v*a[c+P];return r}},Yl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=(n-e)/(s-e),c=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*c+a[l+d]*u;return r}},ql=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qr(e,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qr(t.times,Array),values:qr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&t_(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)l=!0;else{let c=o*n,d=c-n,f=c+n;for(let g=0;g!==n;++g){let _=e[c+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let c=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=wl;var Ii=class extends En{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ea;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends En{};Zl.prototype.ValueTypeName="color";var $l=class extends En{};$l.prototype.ValueTypeName="number";var Kl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Mn.slerpFlat(r,0,a,h-o,a,h,l);return r}},Aa=class extends En{InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends En{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ea;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends En{};Jl.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){let f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},e_=new jl,Ql=class{constructor(t){this.manager=t!==void 0?t:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ko=new ue,tu=new L,eu=new L,tc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ec=class extends tc{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Pa=class extends Ra{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ia=class extends _e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var uc="\\[\\]\\.:\\/",n_=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",i_="[^"+uc.replace("\\.","")+"]",s_=/((?:WC+[\/:])*)/.source.replace("WC",dc),r_=/(WCOD+)?/.source.replace("WCOD",i_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),l_=new RegExp("^"+s_+r_+a_+o_+"$"),c_=["material","materials","bones","map"],nc=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);c_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=nc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var Di=class extends ga{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Js=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nu=new L,Zr=new L,La=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nu.subVectors(t,this.start),Zr.subVectors(this.end,this.start);let n=Zr.dot(Zr),r=Zr.dot(nu)/n;return e&&(r=Ce(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var iu=new L,$r,zo,Da=class extends Pe{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",$r===void 0&&($r=new _e,$r.setAttribute("position",new Yt([0,0,0,0,1,0],3)),zo=new ba(0,.5,1,5,1),zo.translate(0,-.5,0)),this.position.copy(e),this.line=new _s($r,new bn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new he(zo,new ln({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{iu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(iu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Ua=class extends Jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ru={type:"change"},pc={type:"start"},Pu={type:"end"},za=new Ci,Cu=new _n,u_=Math.cos(70*Fa.DEG2RAD),we=new L,Ye=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fc=1e-6,Ha=class extends Ua{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Mn,this._lastTargetPosition=new L,this._quat=new Mn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new L,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new L,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f_.bind(this),this._onPointerDown=d_.bind(this),this._onPointerUp=p_.bind(this),this._onContextMenu=M_.bind(this),this._onMouseWheel=__.bind(this),this._onKeyDown=x_.bind(this),this._onTouchStart=v_.bind(this),this._onTouchMove=y_.bind(this),this._onMouseDown=m_.bind(this),this._onMouseMove=g_.bind(this),this._interceptControlDown=S_.bind(this),this._interceptControlUp=b_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=oe.NONE}update(t=null){let e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=we.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(za.origin.copy(this.object.position),za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(za.direction))<u_?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),za.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fc||this._lastTargetPosition.distanceToSquared(this.target)>fc?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function d_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function f_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pu),this.state=oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function m_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(pc)}function g_(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function __(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(pc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pu))}function x_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function v_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(pc)}function y_(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function M_(i){this.enabled!==!1&&i.preventDefault()}function S_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function b_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Iu=new on,Va=new L,Ms=class extends Ia{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Yt(t,3)),this.setAttribute("uv",new Yt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Di(e,6,1);return this.setAttribute("instanceStart",new un(n,3,0)),this.setAttribute("instanceEnd",new un(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Di(e,6,1);return this.setAttribute("instanceColorStart",new un(n,3,0)),this.setAttribute("instanceColorEnd",new un(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new wa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Iu.setFromBufferAttribute(e),this.boundingBox.union(Iu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Va.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Va)),Va.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Va));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};at.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new At(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ge.line={uniforms:Ba.merge([at.common,at.fog,at.line]),vertexShader:`
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
		`};var fi=class extends hn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Ba.clone(Ge.line.uniforms),vertexShader:Ge.line.vertexShader,fragmentShader:Ge.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var mc=new ae,Lu=new L,Du=new L,Ie=new ae,Le=new ae,In=new ae,gc=new L,_c=new ue,De=new La,Uu=new L,Ga=new on,Wa=new Sn,Ln=new ae,Dn,Oi;function Nu(i,t,e){return Ln.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ln.multiplyScalar(1/Ln.w),Ln.x=Oi/e.width,Ln.y=Oi/e.height,Ln.applyMatrix4(i.projectionMatrixInverse),Ln.multiplyScalar(1/Ln.w),Math.abs(Math.max(Ln.x,Ln.y))}function E_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){De.start.fromBufferAttribute(s,o),De.end.fromBufferAttribute(r,o),De.applyMatrix4(e);let h=new L,u=new L;Dn.distanceSqToSegment(De.start,De.end,u,h),u.distanceTo(h)<Oi*.5&&t.push({point:u,pointOnLine:h,distance:Dn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function T_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),c=-t.near;Dn.at(1,In),In.w=1,In.applyMatrix4(t.matrixWorldInverse),In.applyMatrix4(n),In.multiplyScalar(1/In.w),In.x*=r.x/2,In.y*=r.y/2,In.z=0,gc.copy(In),_c.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=u;d<f;d++){if(Ie.fromBufferAttribute(l,d),Le.fromBufferAttribute(h,d),Ie.w=1,Le.w=1,Ie.applyMatrix4(_c),Le.applyMatrix4(_c),Ie.z>c&&Le.z>c)continue;if(Ie.z>c){let x=Ie.z-Le.z,v=(Ie.z-c)/x;Ie.lerp(Le,v)}else if(Le.z>c){let x=Le.z-Ie.z,v=(Le.z-c)/x;Le.lerp(Ie,v)}Ie.applyMatrix4(n),Le.applyMatrix4(n),Ie.multiplyScalar(1/Ie.w),Le.multiplyScalar(1/Le.w),Ie.x*=r.x/2,Ie.y*=r.y/2,Le.x*=r.x/2,Le.y*=r.y/2,De.start.copy(Ie),De.start.z=0,De.end.copy(Le),De.end.z=0;let _=De.closestPointToPointParameter(gc,!0);De.at(_,Uu);let m=Fa.lerp(Ie.z,Le.z,_),p=m>=-1&&m<=1,E=gc.distanceTo(Uu)<Oi*.5;if(p&&E){De.start.fromBufferAttribute(l,d),De.end.fromBufferAttribute(h,d),De.start.applyMatrix4(a),De.end.applyMatrix4(a);let x=new L,v=new L;Dn.distanceSqToSegment(De.start,De.end,v,x),e.push({point:v,pointOnLine:x,distance:Dn.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var Xa=class extends he{constructor(t=new Ms,e=new fi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Lu.fromBufferAttribute(e,a),Du.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Lu.distanceTo(Du);let r=new Di(s,2,1);return t.setAttribute("instanceDistanceStart",new un(r,1,0)),t.setAttribute("instanceDistanceEnd",new un(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Dn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Oi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Wa.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=Oi*.5;else{let c=Math.max(s.near,Wa.distanceToPoint(Dn.origin));h=Nu(s,c,l.resolution)}if(Wa.radius+=h,Dn.intersectsSphere(Wa)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ga.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Oi*.5;else{let c=Math.max(s.near,Ga.distanceToPoint(Dn.origin));u=Nu(s,c,l.resolution)}Ga.expandByScalar(u),Dn.intersectsBox(Ga)!==!1&&(n?E_(this,e):T_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(mc),this.material.uniforms.resolution.value.set(mc.z,mc.w))}};var Ss=class extends Ms{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Ya=class extends Xa{constructor(t=new Ss,e=new fi({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Ou=Math.PI/180;function w_(i,t="#cfe0f2",e="rgba(8,18,26,.75)"){let n=document.createElement("canvas");n.width=256,n.height=64;let s=n.getContext("2d");s.font="bold 30px Helvetica, Arial, sans-serif";let r=Math.min(250,s.measureText(i).width+24);s.fillStyle=e,s.fillRect(128-r/2,8,r,48),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,33);let a=new Ma(n);a.minFilter=an;let o=new _a(new Ys({map:a,depthTest:!1,transparent:!0}));return o.userData.aspect=4,o.renderOrder=10,o}var Fu=i=>{let t=Math.pow(10,Math.floor(Math.log10(i/4))),e=i/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function A_(){let i=new qn,t=.67,e=.026,n=new Ks({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),s=new Ks({color:"#e8eef5",roughness:.5,emissive:"#223347"}),r=[];for(let f=0;f<=24;f++){let g=f/24,_=e*Math.pow(Math.sin(Math.PI*Math.pow(g,.75)),.55)*(g>.7?1-(g-.7)*1.2*(g-.7)/.3*.5:1);r.push(new At(Math.max(_,.0015),(g-.5)*t))}let a=new he(new Sa(r,20),n);a.rotation.x=-Math.PI/2,i.add(a);let o=new he(new cn(.012,.05,.12),n);o.position.set(0,e+.02,-.04),i.add(o);let l=(f,g,_)=>{let m=new he(new cn(.075,.003,.03),s);return m.position.set(f,0,g),m.rotation.z=_,m};i.add(l(0,.27,0));let h=l(0,.27,Math.PI/2);i.add(h);let u=new he(new cn(.05,.003,.02),s);u.position.set(0,0,-.17),i.add(u);let c=new he(new Ta(.014,.003,6,16),s);c.position.set(0,0,.345),i.add(c);let d=new he(new $s(.008,8,8),new ln({color:"#e0a93b"}));return d.position.set(0,0,-.34),i.add(d),i}var qa=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new pa({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new ma,this.scene.fog=null,this.cam=new Ve(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new Ha(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new Pa("#8fa6c0",1.1));let e=new Ca("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new qn,this.scene.add(this.world),this.boat=A_(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let n=new _e;n.setAttribute("position",new Yt([0,0,0],3)),this.dot=new ya(n,new qs({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new fi({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let s=()=>{requestAnimationFrame(s),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};s()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let n=(e.userData.size||.03)*t;e.scale.set(n*e.userData.aspect,n,1)})}sprite(t,e,n,s){let r=w_(t,s);return r.position.copy(e),r.userData.size=n,this.world.add(r),this.sprites.push(r),r}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new L(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let n=t.pts,s=t.stats;if(n.length<2){this.dirty=!0;return}let r=Math.max(1,.12*Math.max(s.w,s.l,s.maxDepth)),a=Math.min(s.bb.x0,-1)-r,o=Math.max(s.bb.x1,1)+r,l=Math.min(s.bb.y0,-1)-r,h=Math.max(s.bb.y1,1)+r,u=Math.max(e.depthLimit||0,s.maxDepth*1.2,1.2),c=(a+o)/2,d=-(l+h)/2,f=o-a,g=h-l;this.size=Math.max(f,g,u),this.cx=c,this.cz=d,this.dmax=u;let _=new he(new cn(f,u,g),new ln({color:"#0f4a7a",transparent:!0,opacity:.1,side:Be,depthWrite:!1}));_.position.set(c,-u/2,d),this.world.add(_);let m=new di(new Zs(new cn(f,u,g)),new bn({color:"#2f6ca8",transparent:!0,opacity:.8}));m.position.copy(_.position),this.world.add(m);let p=new he(new Pi(f,g),new ln({color:"#1b6fb5",transparent:!0,opacity:.12,side:rn,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(c,0,d),this.world.add(p);let E=Fu(Math.max(f,g)),x=(lt,q)=>{let gt=new bn({color:"#35597d",transparent:!0,opacity:q}),It=[];for(let de=Math.ceil(a/E)*E;de<=o+1e-6;de+=E)It.push(de,lt,d-g/2,de,lt,d+g/2);for(let de=Math.ceil(-h/E)*E;de<=-l+1e-6;de+=E)It.push(a,lt,de,o,lt,de);let Gt=new _e;Gt.setAttribute("position",new Yt(It,3));let D=new di(Gt,gt);this.world.add(D)};x(0,.6),x(-u,.25);let v=new Da(new L(0,0,-1),new L(a+.5*r,0,d-g/2+.2*r),Math.max(r*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(v),this.sprite("N",new L(a+.5*r,0,d-g/2-this.size*.05),.04,"#ff8a7d");let P=a,S=d+g/2,T=Fu(u),R=[P,0,S,P,-u,S];for(let lt=0;lt<=u+1e-6;lt+=T)R.push(P,-lt,S,P-this.size*.015,-lt,S),this.sprite(lt.toFixed(T<1?1:0)+" m",new L(P-this.size*.07,-lt,S),.03,"#9fc3ea");let M=new _e;if(M.setAttribute("position",new Yt(R,3)),this.world.add(new di(M,new bn({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=u){let lt=new he(new Pi(f,g),new ln({color:"#e0584b",transparent:!0,opacity:.08,side:rn,depthWrite:!1}));lt.rotation.x=-Math.PI/2,lt.position.set(c,-e.depthLimit,d),this.world.add(lt)}let y=s.bb.x0,I=s.bb.x1,B=s.bb.y0,U=s.bb.y1,V=new di(new Zs(new cn(Math.max(I-y,.001),Math.max(s.maxDepth,.001),Math.max(U-B,.001))),new bn({color:"#e0a93b",transparent:!0,opacity:.55}));V.position.set((y+I)/2,-s.maxDepth/2,-(B+U)/2),this.world.add(V),I-y>.2&&this.sprite(`B ${(I-y).toFixed(1)} m`,new L((y+I)/2,0,-B+this.size*.03),.03,"#ffd27a"),U-B>.2&&this.sprite(`L ${(U-B).toFixed(1)} m`,new L(I+this.size*.04,0,-(B+U)/2),.03,"#ffd27a"),s.maxDepth>.2&&this.sprite(`T ${s.maxDepth.toFixed(1)} m`,new L(I,-s.maxDepth/2,-B),.03,"#ffd27a");let Y=[],k=[],Q=[],z=new Vt,et=Math.max(s.maxDepth,.5);n.forEach(lt=>{let q=this.P(lt);Y.push(q.x,q.y,q.z),Q.push(q.x,0,q.z),this.color==="depth"?z.setHSL(.55-.1*lt.z/et,.9,.45+.25*(1-lt.z/et)):z.set(Ze[t.steps?.[lt.i]?.t]?.color||"#9aa7b8"),k.push(z.r,z.g,z.b)});let rt=new Ss;rt.setPositions(Y),rt.setColors(k);let ct=new Ya(rt,this.lm);ct.computeLineDistances(),this.world.add(ct);let Ut=new _e;Ut.setAttribute("position",new Yt(Q,3)),this.world.add(new _s(Ut,new bn({color:"#7ea6d1",transparent:!0,opacity:.35})));let Xt=[],$=-99;n.forEach(lt=>{if(lt.t-$>=Math.max(5,s.dur/40)&&lt.z>.05){$=lt.t;let q=this.P(lt);Xt.push(q.x,q.y,q.z,q.x,0,q.z)}});let nt=new _e;nt.setAttribute("position",new Yt(Xt,3)),this.world.add(new di(nt,new bn({color:"#4d7aa8",transparent:!0,opacity:.35})));let Mt={};n.forEach(lt=>{if(lt.i>=0&&!Mt[lt.i]){Mt[lt.i]=1;let q=this.P(lt),gt=new he(new $s(this.size*.006,10,10),new ln({color:Ze[t.steps?.[lt.i]?.t]?.color||"#fff"}));gt.position.copy(q),this.world.add(gt),this.sprite(`${lt.i+1} ${Ze[t.steps?.[lt.i]?.t]?.label||""}`,q.clone().add(new L(0,this.size*.03,0)),.02)}});let ot=new he(new Ea(this.size*.01,this.size*.03,12),new ln({color:"#4fb477"}));ot.position.copy(this.P(n[0])).add(new L(0,this.size*.02,0)),ot.rotation.x=Math.PI,this.world.add(ot),this.sprite("START",this.P(n[0]).add(new L(0,this.size*.06,0)),.024,"#7fe0a0");let Pt=n[n.length-1];this.sprite("ENDE",this.P(Pt).add(new L(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,n=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let n=0,s=e.length-1;for(;s-n>1;){let c=n+s>>1;e[c].t<=t?n=c:s=c}let r=e[n],a=e[s],o=a.t>r.t?Math.min(1,Math.max(0,(t-r.t)/(a.t-r.t))):0,l=c=>r[c]+(a[c]-r[c])*o,h={x:l("x"),y:l("y"),z:l("z")};this.boat.position.copy(this.P(h)),this.dot.position.copy(this.boat.position);let u=a.h-r.h;if(u>180&&(u-=360),u<-180&&(u+=360),this.boat.rotation.y=-(r.h+u*o)*Ou,this.boat.rotation.x=l("p")*Ou,this.follow){let c=this.boat.position;this.ctl.target.lerp(c,1)}return this.cur={...r,x:h.x,y:h.y,z:h.z,h:r.h+u*o,p:l("p"),v:l("v"),f:l("f"),thr:l("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var ke=(i,t,e="")=>A("button",{class:"btn "+e,onclick:t},i);function R_(i,t,e,n){let s=i.getContext("2d"),r=i.width/2,a=i.height/2;s.setTransform(2,0,0,2,0,0),s.clearRect(0,0,r,a),s.fillStyle="#0a141d",s.fillRect(0,0,r,a);let o=t.pts,l=t.stats;if(o.length<2)return;let h=44,u=10,c=10,d=20,f=Math.max(l.maxDepth*1.15,1),g=Math.max(l.dur,1),_=S=>h+S/g*(r-h-u),m=S=>c+S/f*(a-c-d);s.font="10px Helvetica, Arial",s.fillStyle="#6f869c",s.strokeStyle="#162838",s.textAlign="right";let p=f<=3?.5:f<=10?1:f<=30?5:10;for(let S=0;S<=f;S+=p)s.beginPath(),s.moveTo(h,m(S)),s.lineTo(r-u,m(S)),s.stroke(),s.fillText(S+" m",h-4,m(S)+3);s.textAlign="center";let E=g<120?10:g<600?60:g<3600?300:900;for(let S=0;S<=g;S+=E)s.fillText(S>=60?Math.round(S/60)+" min":S+" s",_(S),a-6);n&&n<f&&(s.strokeStyle=bt.bad,s.setLineDash([4,3]),s.beginPath(),s.moveTo(h,m(n)),s.lineTo(r-u,m(n)),s.stroke(),s.setLineDash([]));let x=-2,v=0,P=[];o.forEach((S,T)=>{S.i!==x&&(x>=-1&&P.push([x,v,S.t]),x=S.i,v=S.t)}),P.push([x,v,g]),P.forEach(([S,T,R])=>{S<0||(s.fillStyle=(Ze[t.steps[S]?.t]?.color||"#888")+"22",s.fillRect(_(T),c,Math.max(1,_(R)-_(T)),a-c-d))}),s.lineWidth=2,s.strokeStyle="#4aa3ff",s.beginPath(),o.forEach((S,T)=>{T?s.lineTo(_(S.t),m(S.z)):s.moveTo(_(S.t),m(S.z))}),s.stroke(),s.lineWidth=1,s.strokeStyle="#8a6fd055",s.beginPath(),o.forEach((S,T)=>{let R=c+(1-S.f/100)*(a-c-d)*.25+(a-c-d)*.75;T?s.lineTo(_(S.t),R):s.moveTo(_(S.t),R)}),s.stroke(),s.fillStyle="#8a6fd0",s.textAlign="left",s.fillText("Ballast",h+4,a-d-4),s.strokeStyle="#e0a93b",s.lineWidth=1.5,s.beginPath(),s.moveTo(_(e),c),s.lineTo(_(e),a-d),s.stroke()}function C_(i,t,e){let n=i.getContext("2d"),s=i.width/2,r=i.height/2;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,s,r),n.fillStyle="#0a141d",n.fillRect(0,0,s,r);let a=t.pts,o=t.stats;if(a.length<2)return;let l=26,h=Math.max(o.bb.x1-o.bb.x0,2),u=Math.max(o.bb.y1-o.bb.y0,2),c=Math.min((s-2*l)/h,(r-2*l)/u),d=s/2-(o.bb.x0+o.bb.x1)/2*c,f=r/2+(o.bb.y0+o.bb.y1)/2*c,g=x=>d+x*c,_=x=>f-x*c,m=(()=>{let x=40/c,v=Math.pow(10,Math.floor(Math.log10(x))),P=x/v;return(P<1.5?1:P<3.5?2:P<7.5?5:10)*v})();n.strokeStyle="#162838",n.fillStyle="#6f869c",n.font="10px Helvetica, Arial",n.textAlign="left";for(let x=Math.floor(-d/c/m)*m;g(x)<s;x+=m)n.beginPath(),n.moveTo(g(x),0),n.lineTo(g(x),r),n.stroke();for(let x=Math.floor((f-r)/c/m)*m;_(x)>0;x+=m)n.beginPath(),n.moveTo(0,_(x)),n.lineTo(s,_(x)),n.stroke();n.fillText(`Raster ${m} m`,6,r-6),n.fillStyle=bt.bad,n.fillText("N \u2191",s-28,14),n.lineWidth=2;for(let x=1;x<a.length;x++)n.strokeStyle=Ze[t.steps[a[x].i]?.t]?.color||"#9aa7b8",n.beginPath(),n.moveTo(g(a[x-1].x),_(a[x-1].y)),n.lineTo(g(a[x].x),_(a[x].y)),n.stroke();n.fillStyle=bt.ok,n.beginPath(),n.arc(g(0),_(0),4,0,7),n.fill();let p=a[a.length-1];n.fillStyle=bt.bad,n.beginPath(),n.arc(g(p.x),_(p.y),4,0,7),n.fill();let E=a.find(x=>x.t>=e)||p;n.strokeStyle="#e0a93b",n.lineWidth=2,n.beginPath(),n.arc(g(E.x),_(E.y),7,0,7),n.stroke(),n.save(),n.translate(g(E.x),_(E.y)),n.rotate(E.h*Math.PI/180),n.fillStyle="#e0a93b",n.beginPath(),n.moveTo(0,-11),n.lineTo(-4,-4),n.lineTo(4,-4),n.fill(),n.restore()}function Bu(){let i=On.get("mission",null);i=Array.isArray(i)&&i.length?i:io("Pool Funktionstest");let t=null,e=0,n=!1,s=10,r=0,a=-1,o=On.get("h0",0),l=On.get("pmax",25),h=On.get("capwh",6.3),u=A("div",{class:"steps-list"}),c=A("div",{class:"warns"}),d=A("div",{class:"view3d"}),f={dur:$t("Dauer"),dist:$t("Strecke","m"),dep:$t("Max Tiefe","m"),box:$t("Bahn B \xD7 L","m"),end:$t("Ende zu Start","m"),en:$t("Energie","Wh"),bat:$t("Akku Bedarf","%"),spd:$t("\xD8 Fahrt","m/s")},g=A("canvas",{width:1e3,height:300,class:"cv"}),_=A("canvas",{width:600,height:300,class:"cv"}),m=A("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+m.value,n=!1,x(),V()}}),p=A("div",{class:"hud"}),E=ke("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),n=!n,r=performance.now(),x())},"play"),x=()=>{E.textContent=n?"\u275A\u275A":"\u25B6"},v=new qa(d),P=A("select",{class:"in sm",onchange:()=>{s=+P.value}},[1,5,10,30,100].map(q=>A("option",{value:q,selected:q===s},`${q}\xD7`))),S=A("select",{class:"in sm",onchange:()=>{v.color=S.value,U()}},A("option",{value:"step"},"Farbe: Schritt"),A("option",{value:"depth"},"Farbe: Tiefe")),T=A("input",{type:"checkbox",onchange:()=>{v.follow=T.checked,v.at(e)}}),R=A("select",{class:"in sm",onchange:()=>{v.boat.scale.setScalar(+R.value||v.boatScale),v.dirty=!0}},A("option",{value:0},"Boot: Auto"),A("option",{value:1},"Boot: 1:1"),A("option",{value:5},"Boot: 5\xD7"),A("option",{value:20},"Boot: 20\xD7")),M=()=>or(q=>X.par[q]),y=()=>{let q=M();t=cr(i,q,{h0:o,pMax:l}),t.steps=i;let gt=t.stats;m.max=gt.dur,e=Math.min(e,gt.dur),f.dur.set(As(gt.dur)),f.dist.set(mt(gt.dist,1)),f.dep.set(mt(gt.maxDepth,2),gt.maxDepth>q.depthMax?"bad":""),f.box.set(`${mt(gt.w,1)} \xD7 ${mt(gt.l,1)}`),f.end.set(mt(gt.endDist,1)),f.en.set(mt(gt.wh,2));let It=gt.wh/h*100;f.bat.set(mt(It,0),It>60?"bad":It>40?"warn":""),f.spd.set(mt(gt.avgV,2)),c.innerHTML="",[...lr(i,q),...t.notes.map(D=>({i:D.i,m:D.m}))].forEach(D=>c.append(A("div",{class:"w"},(D.i>=0?`Schritt ${D.i+1}: `:"")+D.m))),On.set("mission",i),U(),V()},I=null,B=()=>{clearTimeout(I),I=setTimeout(y,120)},U=()=>{t&&v.setPlan(t,{depthLimit:M().depthMax,boatScale:+R.value||void 0})},V=()=>{if(!t)return;m.value=e;let q=v.at(e);R_(g,t,e,M().depthMax),C_(_,t,e),q&&(p.innerHTML="",[["t",As(q.t)],["Tiefe",mt(q.z,2)+" m"],["Kurs",mt((q.h%360+360)%360,0)+"\xB0"],["Nick",mt(q.p,0)+"\xB0"],["Fahrt",mt(q.v,2)+" m/s"],["Ballast",mt(q.f,0)+" %"],["Schritt",q.i>=0?`${q.i+1} ${Ze[i[q.i]?.t]?.label||""}`:"Start"]].forEach(([gt,It])=>p.append(A("span",null,gt,A("b",null,It)))),a=q.i,Y())},Y=()=>{[...u.children].forEach((q,gt)=>q.classList.toggle("sel",gt===a))},k=()=>{u.innerHTML="",i.forEach((q,gt)=>{let It=Ze[q.t],Gt=lr(i,M()).some(xt=>xt.i===gt),D=A("select",{class:"in sm",onchange:()=>{let xt=q.v;i[gt]=ar(D.value),k(),B()}},eo.map(xt=>A("option",{value:xt,selected:xt===q.t},Ze[xt].label))),de=It.f.map((xt,St)=>{let ne=A("input",{class:"in num",type:"number",step:xt[5],min:xt[3],max:xt[4],value:q.v[St],onchange:()=>{q.v[St]=ei(+ne.value,xt[3],xt[4]),ne.value=q.v[St],B()}});return A("label",{class:"fld"},A("span",null,xt[0],xt[1]?` (${xt[1]})`:""),ne)}),Wt=xt=>()=>{let St=gt+xt;St<0||St>=i.length||([i[gt],i[St]]=[i[St],i[gt]],k(),y())};u.append(A("div",{class:"step"+(Gt?" warn":""),onclick:()=>{let xt=t.pts.find(St=>St.i===gt);xt&&(e=xt.t,n=!1,x(),V())}},A("div",{class:"sh"},A("i",{style:{background:It.color}}),A("b",null,gt+1),D,A("span",{class:"sp"}),A("button",{class:"ib",title:"hoch",onclick:xt=>{xt.stopPropagation(),Wt(-1)()}},"\u2191"),A("button",{class:"ib",title:"runter",onclick:xt=>{xt.stopPropagation(),Wt(1)()}},"\u2193"),A("button",{class:"ib",title:"duplizieren",onclick:xt=>{xt.stopPropagation(),i.splice(gt+1,0,JSON.parse(JSON.stringify(q))),k(),y()}},"\u29C9"),A("button",{class:"ib del",title:"l\xF6schen",onclick:xt=>{xt.stopPropagation(),i.splice(gt,1),k(),y()}},"\u2715")),de.length?A("div",{class:"flds"},de):A("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),Y()},Q=A("select",{class:"in"},eo.map(q=>A("option",{value:q},Ze[q].label))),z=()=>{if(i.length>=rr)return Jt("Maximal 64 Schritte","warn");i.push(ar(Q.value)),k(),y(),u.scrollTop=u.scrollHeight},et=A("select",{class:"in",onchange:()=>{et.value&&((!i.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(i=io(et.value),e=0,k(),y()),et.value="")}},A("option",{value:""},"Vorlage laden \u2026"),Object.keys(no).map(q=>A("option",{value:q},q))),rt=A("dialog",{class:"dlg"}),ct={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},Ut=(q,gt,It,Gt=.1)=>A("label",{class:"fld"},A("span",null,`${q} (${It})`),A("input",{class:"in num",type:"number",step:Gt,value:ct[gt],onchange:D=>{ct[gt]=+D.target.value}}));rt.append(A("h3",null,"Yo Yo Profil erzeugen"),A("div",{class:"flds"},Ut("Flachste Tiefe","lo","m"),Ut("Tiefste Tiefe","hi","m"),Ut("Zyklen","n","x",1),Ut("Fahrt","spd","%",1),Ut("Max Sinkrate","rate","m/s",.01),Ut("Max Nick","pit","deg",1)),A("div",{class:"row"},ke("Anh\xE4ngen",()=>{let q=i.length;i.push({t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.hi,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]}),ct.n>1&&i.push({t:"REPEAT",v:[ct.n-1,q+1,0,0]}),rt.close(),k(),y()},"primary"),ke("Abbrechen",()=>rt.close())));let Xt=A("span",{class:"dim"}),$=async q=>{if(!X.connected)return Jt("Nicht verbunden","bad");let gt=X.info?.maxsteps||64;if(i.length>gt)return Jt(`Boot speichert nur ${gt} Schritte`,"bad");if(lr(i,M()).filter(D=>D.m.includes("R\xFCcksprung")).length)return Jt("R\xFCcksprung Schritt pr\xFCfen","bad");let Gt=await me("MIS CLEAR");if(!(!Gt||!Gt.ok)){for(let D=0;D<i.length;D++)if(Xt.textContent=`\xDCbertrage ${D+1}/${i.length}`,Gt=await me(Cc([i[D]])[0].replace(/^/,"")),!Gt||!Gt.ok){Xt.textContent="";return}q&&await me("MIS SAVE"),Xt.textContent="",Jt(`Mission mit ${i.length} Schritten ${q?"gespeichert":"\xFCbertragen"}`,"ok"),mi(`Mission \xFCbertragen (${i.length} Schritte)`)}},nt=async()=>{let q=await me("MIS GET");q&&q.ok&&Array.isArray(q.data)&&(i=hr(q.data),e=0,k(),y(),Jt(`${i.length} Schritte vom Boot gelesen`,"ok"))},Mt=async()=>{if(!X.connected)return Jt("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await me("MIS START","Mission l\xE4uft")},ot=(q,gt,It,Gt)=>A("label",{class:"fld"},A("span",null,`${q} (${Gt})`),A("input",{class:"in num",type:"number",value:gt,step:"any",onchange:D=>It(+D.target.value)})),Pt=A("div",{class:"page mis"},A("div",{class:"toolbar"},et,ke("Neu",()=>{confirm("Mission leeren?")&&(i=[],e=0,k(),y())}),ke("Laden",async()=>{let q=await nr(".json");if(q)try{i=JSON.parse(q).steps,e=0,k(),y()}catch{Jt("Datei ung\xFCltig","bad")}}),ke("Speichern",()=>gi("mission.json",JSON.stringify({app:"FATHOM",steps:i},null,1))),ke("Yo Yo \u2026",()=>rt.showModal()),A("span",{class:"sp"}),Xt,ke("Zum Boot senden",()=>$(!1),"primary"),ke("Senden + im Boot speichern",()=>$(!0)),ke("Vom Boot lesen",nt),ke("START",Mt,"go"),ke("STOP",()=>me("MIS STOP","Mission gestoppt"),"stop")),A("div",{class:"stats mstats"},Object.values(f).map(q=>q.el)),A("div",{class:"mgrid"},A("div",{class:"left"},u,A("div",{class:"addrow"},Q,ke("+ Schritt",z,"primary")),c,A("details",{class:"opt"},A("summary",null,"Annahmen f\xFCr die Vorschau"),ot("Startkurs",o,q=>{o=q,On.set("h0",q),y()},"deg"),ot("Leistung bei 100 % Gas",l,q=>{l=q,On.set("pmax",q),y()},"W"),ot("Akku Energie (2S 850 mAh)",h,q=>{h=q,On.set("capwh",q),y()},"Wh"),A("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),A("div",{class:"right"},A("div",{class:"vwrap"},d,p,A("div",{class:"vtools"},ke("Iso",()=>v.view("iso")),ke("Oben",()=>v.view("top")),ke("Seite",()=>v.view("side")),S,R,A("label",{class:"chk"},T," Kamera folgt"))),A("div",{class:"tlbar"},E,m,P),A("div",{class:"grid2c"},A("div",{class:"card tight"},A("h3",null,"Tiefenprofil"),g),A("div",{class:"card tight"},A("h3",null,"Draufsicht"),_)))),rt),lt=()=>{if(requestAnimationFrame(lt),!n||!t)return;let q=performance.now();e+=(q-r)/1e3*s,r=q,e>=t.stats.dur&&(e=t.stats.dur,n=!1,x()),V()};return lt(),xe.on("par",()=>{X.tab==="mission"&&B()}),{el:Pt,show(){v.setActive(!0),k(),y()},hide(){v.setActive(!1),n=!1,x()},update(q){q.mis.run&&(a=q.mis.i,Y())},sim:v,setTime(q){e=q,V()},get plan(){return t}}}var zu=Math.PI/180,Fi=(i,t,e)=>({x:(e-i.lon)*111200*Math.cos(i.lat*zu),y:(t-i.lat)*111200}),ku=i=>{let t=Math.pow(10,Math.floor(Math.log10(i))),e=i/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function xc(i,t){let e=window.devicePixelRatio||1,n=i.clientWidth||600,s=i.clientHeight||400;(i.width!==n*e||i.height!==s*e)&&(i.width=n*e,i.height=s*e);let r=i.getContext("2d");r.setTransform(e,0,0,e,0,0),r.clearRect(0,0,n,s),r.fillStyle=bt.bg,r.fillRect(0,0,n,s);let a=[...t.pts];if(t.home&&a.push(t.home),t.boat&&a.push(t.boat),!a.length){r.fillStyle=bt.dim,r.font="13px Helvetica, Arial, sans-serif",r.textAlign="center",r.fillText(t.empty||"Noch keine Position",n/2,s/2);return}let o=t.home||a[0],l=a.map(T=>Fi(o,T.lat,T.lon)),h=Math.min(...l.map(T=>T.x)),u=Math.max(...l.map(T=>T.x)),c=Math.min(...l.map(T=>T.y)),d=Math.max(...l.map(T=>T.y)),f=16;if(u-h<f){let T=(h+u)/2;h=T-f/2,u=T+f/2}if(d-c<f){let T=(c+d)/2;c=T-f/2,d=T+f/2}let g=36,_=Math.min((n-2*g)/(u-h),(s-2*g)/(d-c)),m=(h+u)/2,p=(c+d)/2,E=T=>n/2+(T-m)*_,x=T=>s/2-(T-p)*_,v=ku(60/_);r.strokeStyle=bt.grid,r.lineWidth=1,r.fillStyle=bt.dim,r.font="10px Helvetica, Arial, sans-serif",r.textAlign="left";for(let T=Math.ceil((m-n/2/_)/v)*v;T<m+n/2/_;T+=v)r.beginPath(),r.moveTo(E(T),0),r.lineTo(E(T),s),r.stroke();for(let T=Math.ceil((p-s/2/_)/v)*v;T<p+s/2/_;T+=v)r.beginPath(),r.moveTo(0,x(T)),r.lineTo(n,x(T)),r.stroke();r.lineWidth=2,r.lineJoin="round",r.lineCap="round";for(let T=1;T<t.pts.length;T++){let R=Fi(o,t.pts[T-1].lat,t.pts[T-1].lon),M=Fi(o,t.pts[T].lat,t.pts[T].lon);r.strokeStyle=t.pts[T].c||bt.acc,r.beginPath(),r.moveTo(E(R.x),x(R.y)),r.lineTo(E(M.x),x(M.y)),r.stroke()}if(t.home&&t.boat){let T=Fi(o,t.boat.lat,t.boat.lon);r.setLineDash([5,5]),r.strokeStyle=bt.warn,r.lineWidth=1,r.beginPath(),r.moveTo(E(T.x),x(T.y)),r.lineTo(E(0),x(0)),r.stroke(),r.setLineDash([])}if(t.home&&(r.strokeStyle=bt.ok,r.fillStyle=bt.bg,r.lineWidth=2,r.beginPath(),r.arc(E(0),x(0),8,0,7),r.fill(),r.stroke(),r.fillStyle=bt.ok,r.font="bold 10px Helvetica, Arial, sans-serif",r.textAlign="center",r.fillText("H",E(0),x(0)+3.5)),t.cursor){let T=Fi(o,t.cursor.lat,t.cursor.lon);r.fillStyle=bt.txt,r.beginPath(),r.arc(E(T.x),x(T.y),5,0,7),r.fill()}if(t.boat){let T=Fi(o,t.boat.lat,t.boat.lon);r.save(),r.translate(E(T.x),x(T.y)),r.rotate((t.boat.h||0)*zu),r.fillStyle=bt.txt,r.beginPath(),r.moveTo(0,-10),r.lineTo(6,8),r.lineTo(0,4),r.lineTo(-6,8),r.closePath(),r.fill(),r.restore()}let P=ku(100/_),S=P*_;r.strokeStyle=bt.txt,r.lineWidth=2,r.beginPath(),r.moveTo(14,s-16),r.lineTo(14+S,s-16),r.moveTo(14,s-20),r.lineTo(14,s-12),r.moveTo(14+S,s-20),r.lineTo(14+S,s-12),r.stroke(),r.fillStyle=bt.txt,r.textAlign="left",r.font="11px Helvetica, Arial, sans-serif",r.fillText(P>=1e3?P/1e3+" km":P+" m",14,s-24),r.textAlign="center",r.fillText("N",n-20,22),r.strokeStyle=bt.dim,r.beginPath(),r.moveTo(n-20,40),r.lineTo(n-20,28),r.stroke()}function Hu(){let i=[],t=null,e=null,n=A("canvas",{class:"map"}),s={fix:$t("GPS",""),sat:$t("Satelliten",""),hd:$t("HDOP",""),spd:$t("Fahrt","m/s"),dist:$t("Distanz Home","m"),brg:$t("Peilung","\xB0")},r={gps:Xe("GPS"),home:Xe("Home"),rth:Xe("RTH")},a=A("p",{class:"note"},"Die Karte arbeitet ohne Internet: Norden oben, Raster in Metern. Das GPS funktioniert nur an der Oberfl\xE4che, unter Wasser bleibt der letzte Fix stehen."),o=["aus","taucht auf","wartet auf GPS","f\xE4hrt zu Home","angekommen"],l=A("div",{class:"page"},A("div",{class:"chips"},Object.values(r).map(c=>c.el)),A("div",{class:"stats"},Object.values(s).map(c=>c.el)),A("div",{class:"toolbar"},A("button",{class:"btn",onclick:async()=>{let c=await me("HOME SET","Home gesetzt");c&&c.ok&&h()}},"Home hier setzen"),A("button",{class:"btn primary",onclick:()=>me("MODE RTH","Heimfahrt gestartet")},"Heimfahrt (RTH)"),A("button",{class:"btn",onclick:()=>me("MODE DEPTH","RTH beendet")},"RTH beenden"),A("span",{class:"sp"}),A("button",{class:"btn",onclick:()=>{i.length=0,e=null,u()}},"Spur l\xF6schen")),A("div",{class:"mapwrap"},n),a);async function h(){if(!X.connected)return;let c=await X.link.cmd("HOME");c.ok&&c.data&&c.data.set?t={lat:c.data.lat,lon:c.data.lon}:t=null,u()}function u(){xc(n,{pts:i,home:t,boat:e?{lat:e.lat,lon:e.lon,h:e.h}:null,empty:"Noch kein GPS Fix. Boot an die Oberfl\xE4che mit freier Sicht zum Himmel."})}return xe.on("conn",()=>{X.connected||(t=null,e=null)}),{el:l,show(){h(),setTimeout(u,30)},update(c){let d=c.gps;if(d){if(s.fix.set(d.ok?"Fix":"kein Fix",d.ok?"":"warn"),s.sat.set(String(d.sat)),s.hd.set(mt(d.hd,1)),s.spd.set(mt(d.spd,1)),s.dist.set(d.home?mt(d.dist,0):"\u2013"),s.brg.set(d.home?mt(d.brg,0):"\u2013"),r.gps.set(d.ok?`GPS ${d.sat} Sat`:"GPS kein Fix",d.ok?"ok":"warn"),r.home.set(d.home?"Home gesetzt":"Home fehlt",d.home?"ok":"warn"),r.rth.set(c.m==="RTH"?"RTH "+o[d.ph]:"RTH aus",c.m==="RTH"?"acc":""),d.ok){e={lat:d.lat,lon:d.lon,h:c.att[2]};let f=i[i.length-1];(!f||Math.hypot(...Object.values(Fi(f,d.lat,d.lon)))>.5)&&(i.push({lat:d.lat,lon:d.lon,c:c.m==="RTH"?bt.warn:bt.acc}),i.length>5e3&&i.shift())}else e&&(e.h=c.att[2]);d.home&&!t&&h(),u()}}}}var Vu=["MANUAL","STAB","DEPTH","MISSION","FAILSAFE","RTH"],P_=[bt.dim,"#5f7fa6",bt.acc,"#9a86d6",bt.bad,bt.warn],$a=36,Ka=16,I_="#9a86d6";function L_(i){if(i.length<Ka||String.fromCharCode(...i.slice(0,4))!=="FBB1")throw new Error("Keine FATHOM Blackbox Datei");let t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=t.getUint16(4,!0),n=t.getUint16(6,!0);if(e!==$a)throw new Error("Datensatzgr\xF6\xDFe "+e+" wird nicht unterst\xFCtzt");let s=Math.floor((i.length-Ka)/$a),r=[];for(let a=0;a<s;a++){let o=Ka+a*$a;r.push({t:t.getUint32(o,!0)/1e3,depth:t.getInt16(o+4,!0)/100,tgt:t.getInt16(o+6,!0)/100,roll:t.getInt16(o+8,!0)/10,pitch:t.getInt16(o+10,!0)/10,yaw:t.getUint16(o+12,!0)/10,vbat:t.getUint16(o+14,!0)/100,leak:t.getUint8(o+16)/255,mode:t.getUint8(o+17),flags:t.getUint8(o+18),fill:t.getUint8(o+19),thr:t.getInt8(o+20),pump:t.getInt8(o+21),rud:t.getInt8(o+22),stern:t.getInt8(o+23),bow:t.getInt8(o+24),lat:t.getInt32(o+25,!0)/1e7,lon:t.getInt32(o+29,!0)/1e7,sats:t.getUint8(o+33),rssi:t.getInt8(o+34)})}return{hz:n,recs:r}}var D_=i=>`t_s,tiefe_m,ziel_m,roll,nick,kurs,akku_v,leck,modus,flags,ballast,gas,pumpe,ruder,heck,bug,lat,lon,sat,rssi
`+i.recs.map(t=>[t.t,t.depth,t.tgt,t.roll,t.pitch,t.yaw,t.vbat,t.leak.toFixed(3),Vu[t.mode]||t.mode,t.flags,t.fill,t.thr,t.pump,t.rud,t.stern,t.bow,t.lat,t.lon,t.sats,t.rssi].join(",")).join(`
`),Za=[{name:"Tiefe",unit:"m",inv:!0,min:0,s:[{k:"depth",n:"Tiefe",c:bt.acc},{k:"tgt",n:"Ziel",c:bt.warn,dash:1}]},{name:"Lage",unit:"\xB0",s:[{k:"pitch",n:"Nick",c:bt.acc},{k:"roll",n:"Roll",c:bt.warn}]},{name:"Kurs",unit:"\xB0",min:0,max:360,s:[{k:"yaw",n:"Kurs",c:bt.ok}]},{name:"Antrieb und Ballast",unit:"%",s:[{k:"thr",n:"Gas",c:bt.acc},{k:"pump",n:"Pumpe",c:bt.warn},{k:"fill",n:"Ballast",c:I_}]},{name:"Ruder",unit:"\xB0",s:[{k:"rud",n:"Seite",c:bt.ok},{k:"stern",n:"Heck",c:bt.acc},{k:"bow",n:"Bug",c:bt.warn}]},{name:"Akku",unit:"V",s:[{k:"vbat",n:"Akku",c:bt.ok}],dec:2},{name:"Leckage",unit:"",min:0,max:1,s:[{k:"leak",n:"Leck",c:bt.bad}],dec:2}],bs=104,Bi=18,Tn=46;function U_(i){let t=A("canvas",{class:"logcv"}),e=null,n=0,s=1,r=null,a=null,o=()=>window.devicePixelRatio||1,l=()=>Za.length*bs+Bi+22;function h(f){let g=e.recs,_=0,m=g.length-1;for(;_<m;){let p=_+m>>1;g[p].t<f?_=p+1:m=p}return _}function u(){let f=t.clientWidth||800,g=l(),_=o();(t.height!==g*_||t.width!==f*_)&&(t.width=f*_,t.height=g*_,t.style.height=g+"px");let m=t.getContext("2d");if(m.setTransform(_,0,0,_,0,0),m.fillStyle=bt.bg,m.fillRect(0,0,f,g),!e)return;let p=e.recs,E=R=>Tn+(R-n)/(s-n)*(f-Tn-10),x=Math.max(0,h(n)-1),v=Math.min(p.length-1,h(s)+1);m.font="10px Helvetica, Arial, sans-serif";for(let R=x;R<v;R++){let M=E(p[R].t),y=E(p[R+1].t);m.fillStyle=P_[p[R].mode]||bt.dim,m.fillRect(M,0,Math.max(1,y-M+.5),Bi-4)}let P=-1;m.fillStyle=bt.txt,m.textAlign="left";for(let R=x;R<=v;R++)if(p[R].mode!==P){P=p[R].mode;let M=E(p[R].t);M>Tn-2&&M<f-60&&m.fillText(Vu[P]||"?",M+3,10)}Za.forEach((R,M)=>{let y=Bi+M*bs,I=y+bs-14,B=R.min,U=R.max;if(B===void 0||U===void 0){let Y=1e9,k=-1e9;for(let z=x;z<=v;z++)R.s.forEach(et=>{let rt=p[z][et.k];et.k==="tgt"&&rt===0&&!(p[z].mode===2||p[z].mode===3)||(Y=Math.min(Y,rt),k=Math.max(k,rt))});Y>k&&(Y=0,k=1);let Q=(k-Y)*.12||.5;B===void 0&&(B=Y-Q),U===void 0&&(U=k+Q)}R.k0===void 0&&R.min===0&&B<0&&(B=0);let V=Y=>R.inv?y+6+(Y-B)/(U-B||1)*(I-y-6):I-(Y-B)/(U-B||1)*(I-y-6);m.strokeStyle=bt.grid,m.lineWidth=1,m.fillStyle=bt.dim,m.textAlign="right";for(let Y=0;Y<=2;Y++){let k=B+(U-B)*Y/2,Q=V(k);m.beginPath(),m.moveTo(Tn,Q),m.lineTo(f-10,Q),m.stroke(),m.fillText(k.toFixed(R.dec??(Math.abs(U-B)<5?1:0)),Tn-5,Q+3)}if(m.textAlign="left",m.fillStyle=bt.txt,m.font="600 11px Helvetica, Arial, sans-serif",m.fillText(R.name+(R.unit?" ("+R.unit+")":""),Tn+6,y+12),m.font="10px Helvetica, Arial, sans-serif",m.save(),m.beginPath(),m.rect(Tn,y,f-Tn-10,bs-12),m.clip(),R.s.forEach(Y=>{m.strokeStyle=Y.c,m.lineWidth=Y.dash?1.2:1.6,m.setLineDash(Y.dash?[4,3]:[]),m.beginPath();let k=!1,Q=-9;for(let z=x;z<=v;z++){let et=E(p[z].t);if(et-Q<.6&&z<v)continue;Q=et;let rt=p[z][Y.k];if(Y.k==="tgt"&&!(p[z].mode===2||p[z].mode===3)){k=!1;continue}let ct=V(rt);k?m.lineTo(et,ct):(m.moveTo(et,ct),k=!0)}m.stroke(),m.setLineDash([])}),m.restore(),r!==null){let Y=p[h(r)],k=f-14;m.textAlign="right";for(let Q=R.s.length-1;Q>=0;Q--){let z=R.s[Q],et=z.n+" "+Y[z.k].toFixed(R.dec??1);m.fillStyle=z.c,m.fillText(et,k,y+12),k-=m.measureText(et).width+12}}});let S=s-n,T=[1,2,5,10,15,30,60,120,300,600,1800].find(R=>S/R<12)||3600;m.fillStyle=bt.dim,m.textAlign="center",m.strokeStyle=bt.grid;for(let R=Math.ceil(n/T)*T;R<s;R+=T){let M=E(R);m.beginPath(),m.moveTo(M,Bi),m.lineTo(M,Bi+Za.length*bs-14),m.stroke(),m.fillText(R>=60?`${Math.floor(R/60)}:${String(Math.round(R%60)).padStart(2,"0")}`:R+" s",M,g-4)}if(r!==null){let R=E(r);m.strokeStyle=bt.txt,m.lineWidth=1,m.beginPath(),m.moveTo(R,Bi-2),m.lineTo(R,Bi+Za.length*bs-14),m.stroke()}}let c=f=>{let g=t.getBoundingClientRect();return n+(f.clientX-g.left-Tn)/(g.width-Tn-10)*(s-n)};t.addEventListener("mousemove",f=>{if(!e)return;let g=ei(c(f),e.recs[0].t,e.recs[e.recs.length-1].t);if(a){let _=(a.x-f.clientX)/(t.clientWidth-Tn)*(a.v1-a.v0);n=a.v0+_,s=a.v1+_,d()}r=g,i(e.recs[h(g)]),u()}),t.addEventListener("mouseleave",()=>{r=null,i(null),u()}),t.addEventListener("mousedown",f=>{a={x:f.clientX,v0:n,v1:s}}),window.addEventListener("mouseup",()=>{a=null}),t.addEventListener("dblclick",()=>{e&&(n=e.recs[0].t,s=e.recs[e.recs.length-1].t,u())}),t.addEventListener("wheel",f=>{if(!e)return;f.preventDefault();let g=c(f),_=f.deltaY>0?1.25:.8;n=g-(g-n)*_,s=g+(s-g)*_,d(),u()},{passive:!1});function d(){let f=e.recs[0].t,g=e.recs[e.recs.length-1].t;s-n>g-f&&(n=f,s=g),n<f&&(s+=f-n,n=f),s>g&&(n-=s-g,s=g)}return window.addEventListener("resize",()=>u()),{el:t,set(f){e=f,n=f.recs[0].t,s=f.recs[f.recs.length-1].t,s<=n&&(s=n+1),r=null,u()},draw:u}}function Gu(){let i=null,t="",e=A("div",{class:"bblist"}),n=A("div",{class:"bar-t",style:{display:"none"}},A("div",{class:"bar-fill"})),s=A("div",{class:"stats"}),r=A("canvas",{class:"map small"}),a=A("p",{class:"note"}),o=U_(x=>{l=x,E()}),l=null,h=!1,u=A("p",{class:"note"},"Noch keine Aufzeichnung geladen. Die Blackbox schreibt im ARM Zustand. Zum Auslesen DISARM, dann hier laden (USB oder WLAN)."),c=A("div",{style:{display:"none"}},s,A("section",{class:"card tight"},o.el,A("p",{class:"note"},"Mausrad zoomt, ziehen verschiebt, Doppelklick zeigt alles.")),A("section",{class:"card"},A("h3",null,"Spur (GPS Fixes an der Oberfl\xE4che)"),A("div",{class:"mapwrap"},r),a)),d=A("div",{class:"toolbar"},A("button",{class:"btn",onclick:()=>_()},"Liste aktualisieren"),A("button",{class:"btn",onclick:async()=>{let x=await g();x&&p(x.u8,x.name)}},"Datei \xF6ffnen"),A("span",{class:"sp"}),A("button",{class:"btn",onclick:()=>gi(t.replace(/\.bin$/,"")+".csv",D_(i),"text/csv"),id:"bbcsv",disabled:!0},"CSV exportieren"),A("button",{class:"btn warnb",onclick:async()=>{confirm("Alle Blackbox Dateien im Boot l\xF6schen?")&&((await X.link.cmd("BB CLEAR",8e3)).ok&&Jt("Gel\xF6scht","ok"),_())}},"Boot Speicher leeren")),f=A("div",{class:"page"},d,A("section",{class:"card"},A("h3",null,"Aufzeichnungen im Boot"),e,n),u,c);async function g(){return new Promise(x=>{let v=A("input",{type:"file",accept:".bin"});v.onchange=async()=>{let P=v.files[0];if(!P)return x(null);x({name:P.name,u8:new Uint8Array(await P.arrayBuffer())})},v.click()})}async function _(){if(e.innerHTML="",!X.connected){e.append(A("p",{class:"note"},"Nicht verbunden."));return}let[x,v]=[await X.link.cmd("BB INFO"),await X.link.cmd("BB LIST",4e3)];if(!v.ok||!Array.isArray(v.data)){e.append(A("p",{class:"note"},v.text.includes("DISARM")?"Erst DISARM, dann l\xE4sst sich die Blackbox auslesen.":"Keine Antwort: "+v.text));return}x.ok&&x.data&&e.append(A("p",{class:"note"},`Frei: ${(x.data.free/1024).toFixed(0)} von ${(x.data.total/1024).toFixed(0)} kB`)),v.data.length||e.append(A("p",{class:"note"},"Keine Aufzeichnungen.")),v.data.forEach(P=>{let S=parseInt((/bb_(\d+)/.exec(P.f)||[])[1]||0,10),T=Math.max(0,Math.floor((P.n-Ka)/$a));e.append(A("div",{class:"bbrow"},A("b",null,P.f),A("span",{class:"dim"},`${(P.n/1024).toFixed(1)} kB, ${T} Datens\xE4tze`),A("span",{class:"sp"}),A("button",{class:"btn primary",disabled:h,onclick:()=>m(S,P.f,!1)},"Laden und anzeigen"),A("button",{class:"btn",disabled:h,onclick:()=>m(S,P.f,!0)},"Als .bin sichern")))})}async function m(x,v,P){if(h)return;h=!0,n.style.display="";let S=n.firstChild;S.style.width="0",S.style.left="0";let T=Number((await X.link.cmd("BB LIST",4e3)).data?.find(M=>M.f===v)?.n)||1,R=await X.link.dump(x,M=>{S.style.width=Math.min(100,M/T*100)+"%"});if(h=!1,n.style.display="none",_(),!R.ok){Jt(R.text,"bad",6e3);return}P&&(gi(v,R.bytes,"application/octet-stream"),Jt("Gespeichert: "+v,"ok")),p(R.bytes,v)}function p(x,v){try{i=L_(x)}catch(U){Jt(U.message,"bad",6e3);return}if(!i.recs.length){Jt("Die Datei enth\xE4lt keine Datens\xE4tze","warn");return}t=v,u.style.display="none",c.style.display="",f.querySelector("#bbcsv").disabled=!1;let P=i.recs,S=P[P.length-1].t-P[0].t,T=0,R=99,M=0,y=0,I=0,B=null;P.forEach((U,V)=>{T=Math.max(T,U.depth),U.vbat>0&&(R=Math.min(R,U.vbat)),M=Math.max(M,Math.abs(U.pitch)),V&&U.mode===4&&P[V-1].mode!==4&&I++,U.flags&4&&U.sats&&(B&&(y+=Math.hypot((U.lat-B.lat)*111200,(U.lon-B.lon)*75900)),B=U)}),s.innerHTML="",[["Datei",v],["Dauer",As(S)],["Rate",i.hz+" Hz"],["Max Tiefe",mt(T,2)+" m"],["Min Akku",mt(R,2)+" V"],["Max Nick",mt(M,0)+" \xB0"],["GPS Strecke",mt(y,0)+" m"],["Failsafe",String(I)]].forEach(([U,V])=>s.append(A("div",{class:"stat"},A("span",null,U),A("div",null,A("b",{style:{fontSize:U==="Datei"?"14px":""}},V))))),o.set(i),setTimeout(E,30)}function E(){if(!i)return;let x=i.recs.filter(S=>S.flags&4&&S.sats&&S.lat);a.textContent=x.length?`${x.length} Fixes. Der Cursor im Diagramm wandert auf die n\xE4chste bekannte Position.`:"Kein GPS Fix in dieser Aufzeichnung.";let v=x.map(S=>({lat:S.lat,lon:S.lon,c:S.mode===5?bt.warn:bt.acc})),P=null;if(l&&x.length){let S=x[0];x.forEach(T=>{Math.abs(T.t-l.t)<Math.abs(S.t-l.t)&&(S=T)}),P={lat:S.lat,lon:S.lon}}xc(r,{pts:v,home:v.length?{lat:v[0].lat,lon:v[0].lon}:null,cursor:P,empty:"Kein GPS Fix in dieser Aufzeichnung"})}return{el:f,show(){_(),i&&(o.draw(),E())},update(){}}}var N_='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',O_=/(^|\.)underpressure\.ch$/.test(location.hostname);function F_(){let i=A("dialog",{class:"dlg"},A("h2",null,"Per WLAN verbinden"),A("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),A("ol",null,A("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),A("li",null,"Mit dem WLAN ",A("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),A("li",null,"Im Browser ",A("code",null,"http://192.168.4.1")," \xF6ffnen."),A("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),A("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten, Missionsstart und Bootloader gehen nur per Crossfire oder USB."),A("div",{class:"row"},A("button",{class:"btn primary",onclick:()=>i.close()},"Verstanden")));i.addEventListener("close",()=>i.remove()),document.body.append(i),i.showModal()}var B_=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["nav","Navigation","M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["bb","Blackbox","M5 4h14v16H5zM9 4v6h6V4M8 15h8M8 18h5"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ae={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,mission:null,nav:null,bb:null,term:null},Es={async connect(){if(X.connected)return;if(!Cs.supported())return Jt("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let i=new Cs;try{await i.connect()}catch(t){t.name!=="NotFoundError"&&Jt("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}vc(i,!1)},async wifi(i,t=1){if(X.connected)return;if(location.protocol==="https:")return F_();let e=new ur(i||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?X.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(n){if(t>1){setTimeout(()=>Es.wifi(i,t-1),2e3);return}Jt("WLAN Verbindung fehlgeschlagen: "+n.message,"bad",7e3);return}X.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!X.demo&&(Jt("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>Es.wifi(e.host,15),2500))}),vc(e,!1)},async demo(){X.connected&&await X.link.disconnect();let i=new dr;await i.connect(),vc(i,!0)},async disconnect(){X.link&&await X.link.disconnect()}};async function vc(i,t){if(X.link=i,X.demo=t,X.connected=!0,X.wifi=!!i.wifi,i.on("rx",r=>xe.emit("rx",r)),i.on("tx",r=>xe.emit("tx",r)),i.on("ev",r=>mi(r,/ERR|FAILSAFE|LECK/i.test(r)?"bad":"info")),i.on("tel",r=>{X.tel=r,X.lastTel=performance.now()}),i.on("close",()=>{X.link===i&&(X.connected=!1,X.tel=null,xe.emit("conn"),yc(),mi("Verbindung getrennt","warn"),Jt("Verbindung getrennt","warn"))}),i.on("error",r=>mi("Fehler: "+(r.message||r),"bad")),xe.emit("conn"),yc(),!(await i.cmd("PING",1500)).ok){Jt("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await i.disconnect();return}let n=await i.cmd("INFO");n.ok&&(X.info=n.data),await Ps();let s=await i.cmd("MIS GET");X.boatMis=s.data,await i.cmd(i.wifi?"STREAM 10":"STREAM 20"),mi(`Verbunden mit ${X.info?.fw} ${X.info?.ver}`,"ok"),Jt(t?"Demo Boot verbunden":"Boot verbunden","ok"),Qs(X.tab==="setup"?"dash":X.tab)}var Wu,Ja,Xu;function yc(){let i=X.tel,t=An("#conn");t&&(t.className="conn "+(X.connected?"on":""),t.textContent=X.connected?X.demo?"DEMO":X.wifi?"WLAN":"USB":"GETRENNT");let e=An("#armbtn");e&&(e.disabled=!X.connected||X.wifi,e.title=X.wifi?"Scharfschalten nur per Crossfire oder USB":"",e.textContent=i&&i.arm?"DISARM":"ARM",e.className="btn "+(i&&i.arm?"stop":"warnb"));let n=An("#modesel");n&&(n.disabled=!X.connected,i&&document.activeElement!==n&&(n.value=i.m));let s=An("#disc");s&&(s.style.display=X.connected?"":"none")}function Qs(i){let t=Ae[X.tab];t&&t.hide&&t.hide(),X.tab=i,Ja.innerHTML="";let e=Ae[i];Ja.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(n=>n.classList.toggle("on",n.dataset.k===i)),xe.emit("tab",i),location.hash=i}xe.on("goto",Qs);function k_(){let i=An("#app");Wu=A("header",{class:"top"},A("div",{class:"brand",html:N_}),A("div",{class:"bt"},A("b",null,"FATHOM"),A("span",null,"Under Pressure \xB7 U-Boote")),A("span",{class:"sp"}),A("span",{id:"conn",class:"conn"},"GETRENNT"),A("select",{id:"modesel",class:"in sm",disabled:!0,onchange:r=>me("MODE "+r.target.value)},["MANUAL","STAB","DEPTH","MISSION","RTH"].map(r=>A("option",{value:r},r)),A("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),A("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>me(X.tel&&X.tel.arm?"DISARM":"ARM")},"ARM"),A("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>Es.disconnect()},"Trennen"));let t=A("nav",{class:"nav"},B_.map(([r,a,o])=>A("button",{"data-k":r,onclick:()=>Qs(r),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${o}"/></svg><span>${a}</span>`})),A("span",{class:"sp"}),A("div",{class:"navfoot"},O_?A("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Ja=A("main",{class:"content"}),Xu=A("footer",{class:"status"},A("span",{id:"sb1"},"bereit"),A("span",{class:"sp"}),A("span",{id:"sb2"},"FATHOM Konfigurator 0.4")),i.append(Wu,A("div",{class:"body"},t,Ja),Xu),Ae.setup=Fc(Es),Ae.dash=Bc(),Ae.sensors=kc(),Ae.calib=Hc(),Ae.tests=Vc(),Ae.params=Gc(),Ae.mission=Bu(),Ae.nav=Hu(),Ae.bb=Gu(),Ae.term=Wc(),Rn.forEach(r=>{X.par[r.k]=r.d}),xe.on("ev",()=>{let r=X.events[X.events.length-1];r&&(An("#sb1").textContent=r.m)});let e=0,n=r=>{if(requestAnimationFrame(n),X.connected&&X.tel&&X.lastTel!==e){Ae.nav&&X.tab!=="nav"&&Ae.nav.update(X.tel),e=X.lastTel;let a=Ae[X.tab];a&&a.update&&a.update(X.tel),yc(),X.tab!=="tests"&&Ae.tests.update}X.connected&&performance.now()-X.lastTel>2e3&&X.lastTel?An("#sb2").textContent="keine Telemetrie":X.connected&&(An("#sb2").textContent=X.demo?"Demo":X.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(n);let s=location.hash.slice(1);Qs(Ae[s]?s:"setup"),new URLSearchParams(location.search).has("demo")&&Es.demo(),window.addEventListener("beforeunload",()=>{if(X.connected)try{X.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&X.connected&&X.tel&&X.tel.tst&&Ae.tests.stopAll()}),window.__fathom={S:X,pages:Ae,api:Es,setTab:Qs}}k_();})();
