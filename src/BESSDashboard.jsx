import { useState } from "react";

const C = {
  ink:"0D1B2A",navy:"1B2A4A",teal:"#0D7C7B",tealLt:"#12A09F",gold:"#D4901A",goldLt:"#F5C842",
  rust:"#B84A2F",sage:"#2D6A4F",slate:"#3D5A80",cream:"#F5F1EA",offwhite:"#FAFAF7",
  gray1:"#E8EDF3",gray2:"#B0BDC8",gray3:"#6B7C8D",white:"#FFFFFF",
  navy_:"#1B2A4A",ink_:"#0D1B2A",
};

const MUNIS = [
  {id:"chelsea",name:"Chelsea",county:"Suffolk",pop:40787,medIncome:62000,pctMinority:80,pctEJ:100,ejClass:"Very High",ejScore:25,gridScore:23,zonScore:20,physScore:21,revScore:24,hostCap:"High",interconnRisk:"Low",utility:"Eversource",maxMW:12,bestDur:"4hr",permit:"8–10 mo",setback:50,zoningClass:"I-1/I-2 Industrial",brownfield:true,activeProject:"250 MW Energizar (permitted Oct 2024)",energyBurden:8.1,asthma:"2× state avg",lmpPrem:1.4,zone:"SENE"},
  {id:"everett",name:"Everett",county:"Middlesex",pop:49075,medIncome:79658,pctMinority:62,pctEJ:100,ejClass:"Very High",ejScore:25,gridScore:25,zonScore:22,physScore:24,revScore:23,hostCap:"Very High",interconnRisk:"Very Low",utility:"Eversource",maxMW:700,bestDur:"8hr",permit:"7–9 mo",setback:50,zoningClass:"I-2 Heavy Industrial",brownfield:true,activeProject:"700 MW Trimount ESS (EFSB approved Feb 2025)",energyBurden:7.8,asthma:"High",lmpPrem:1.4,zone:"SENE"},
  {id:"lowell",name:"Lowell",county:"Middlesex",pop:115554,medIncome:76000,pctMinority:56,pctEJ:96,ejClass:"High",ejScore:22,gridScore:19,zonScore:22,physScore:23,revScore:19,hostCap:"High",interconnRisk:"Low-Med",utility:"National Grid",maxMW:16,bestDur:"4hr",permit:"9–11 mo",setback:75,zoningClass:"Industrial / Mill Reuse",brownfield:true,activeProject:"None confirmed",energyBurden:7.4,asthma:"High",lmpPrem:1.3,zone:"NEMA"},
  {id:"eastboston",name:"East Boston",county:"Suffolk",pop:44000,medIncome:55000,pctMinority:71,pctEJ:100,ejClass:"Very High",ejScore:24,gridScore:21,zonScore:16,physScore:18,revScore:25,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:7,bestDur:"2hr",permit:"10–13 mo",setback:60,zoningClass:"IA/NB Commercial",brownfield:false,activeProject:"None confirmed",energyBurden:9.2,asthma:"2× state avg",lmpPrem:1.5,zone:"SENE"},
  {id:"malden",name:"Malden",county:"Middlesex",pop:66263,medIncome:98000,pctMinority:58,pctEJ:100,ejClass:"High",ejScore:22,gridScore:20,zonScore:18,physScore:20,revScore:21,hostCap:"High",interconnRisk:"Low",utility:"Eversource",maxMW:15,bestDur:"4hr",permit:"9–11 mo",setback:50,zoningClass:"Industrial/Commercial",brownfield:false,activeProject:"None",energyBurden:6.1,asthma:"Elevated",lmpPrem:1.3,zone:"SENE"},
  {id:"boston",name:"Boston",county:"Suffolk",pop:675647,medIncome:82000,pctMinority:53,pctEJ:84,ejClass:"High",ejScore:18,gridScore:20,zonScore:15,physScore:14,revScore:24,hostCap:"Medium",interconnRisk:"Med-High",utility:"Eversource",maxMW:10,bestDur:"4hr",permit:"12–15 mo",setback:60,zoningClass:"No BESS-specific zoning",brownfield:true,activeProject:"185 MW Electric Ave (Brighton, in dev)",energyBurden:5.8,asthma:"Elevated",lmpPrem:1.3,zone:"SENE"},
  {id:"framingham",name:"Framingham",county:"Middlesex",pop:72362,medIncome:88000,pctMinority:40,pctEJ:87,ejClass:"High",ejScore:20,gridScore:18,zonScore:19,physScore:21,revScore:18,hostCap:"High",interconnRisk:"Low-Med",utility:"National Grid",maxMW:18,bestDur:"4hr",permit:"10–12 mo",setback:75,zoningClass:"Industrial (Route 9 Corridor)",brownfield:false,activeProject:"None",energyBurden:5.6,asthma:"Elevated",lmpPrem:1.2,zone:"NEMA"},
  {id:"cambridge",name:"Cambridge",county:"Middlesex",pop:118403,medIncome:105000,pctMinority:40,pctEJ:95,ejClass:"High",ejScore:20,gridScore:18,zonScore:13,physScore:10,revScore:23,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:6,bestDur:"2hr",permit:"13–16 mo",setback:75,zoningClass:"Business/Mixed-Use",brownfield:false,activeProject:"None",energyBurden:4.8,asthma:"Average",lmpPrem:1.4,zone:"SENE"},
  {id:"revere",name:"Revere",county:"Suffolk",pop:62186,medIncome:87000,pctMinority:50,pctEJ:100,ejClass:"High",ejScore:21,gridScore:19,zonScore:14,physScore:17,revScore:22,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:5,bestDur:"2hr",permit:"11–14 mo",setback:75,zoningClass:"Hwy Business (amendment proposed)",brownfield:false,activeProject:"Zoning amendment in progress (Sept 2025)",energyBurden:6.4,asthma:"Elevated",lmpPrem:1.2,zone:"SENE"},
  {id:"somerville",name:"Somerville",county:"Middlesex",pop:81045,medIncome:95000,pctMinority:35,pctEJ:73,ejClass:"Moderate",ejScore:17,gridScore:17,zonScore:14,physScore:12,revScore:21,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:5,bestDur:"2hr",permit:"13–16 mo",setback:75,zoningClass:"Commercial/Mixed-Use",brownfield:false,activeProject:"None",energyBurden:5.2,asthma:"Average",lmpPrem:1.3,zone:"SENE"},
  {id:"medford",name:"Medford",county:"Middlesex",pop:59659,medIncome:122000,pctMinority:33,pctEJ:73,ejClass:"Moderate",ejScore:16,gridScore:16,zonScore:15,physScore:15,revScore:19,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:6,bestDur:"4hr",permit:"12–15 mo",setback:75,zoningClass:"Industrial/Commercial",brownfield:false,activeProject:"None",energyBurden:4.3,asthma:"Average",lmpPrem:1.2,zone:"SENE"},
  {id:"waltham",name:"Waltham",county:"Middlesex",pop:62227,medIncome:95000,pctMinority:37,pctEJ:74,ejClass:"Moderate",ejScore:17,gridScore:17,zonScore:16,physScore:16,revScore:19,hostCap:"Medium",interconnRisk:"Medium",utility:"Eversource",maxMW:8,bestDur:"4hr",permit:"12–14 mo",setback:75,zoningClass:"Industrial Zones",brownfield:false,activeProject:"None",energyBurden:4.9,asthma:"Average",lmpPrem:1.2,zone:"SENE"},
  {id:"winthrop",name:"Winthrop",county:"Suffolk",pop:19316,medIncome:85000,pctMinority:20,pctEJ:44,ejClass:"Moderate",ejScore:10,gridScore:12,zonScore:10,physScore:8,revScore:16,hostCap:"Low",interconnRisk:"High",utility:"Eversource",maxMW:2,bestDur:"2hr",permit:"14–18 mo",setback:100,zoningClass:"Residential-dominant",brownfield:false,activeProject:"None",energyBurden:4.2,asthma:"Average",lmpPrem:1.1,zone:"SENE"},
];

const total = m => m.ejScore+m.gridScore+m.zonScore+m.physScore+m.revScore;
const EJC = {"Very High":"#B84A2F","High":"#D4901A","Moderate":"#0D7C7B","Low":"#6B7C8D"};
const CC = {Suffolk:"#3D5A80",Middlesex:"#0D7C7B"};

const FCA=[
  {a:"FCA 14",p:"2023–24",sene:2.001,rop:2.001},
  {a:"FCA 15",p:"2024–25",sene:3.980,rop:2.611},
  {a:"FCA 16",p:"2025–26",sene:2.639,rop:2.591},
  {a:"FCA 17",p:"2026–27",sene:2.590,rop:2.590},
  {a:"FCA 18",p:"2027–28",sene:3.580,rop:3.580},
];
const REV=[
  {s:"Energy Arbitrage",lo:40,hi:80,c:"#0D7C7B"},
  {s:"Capacity Market (FCM)",lo:31,hi:48,c:"#3D5A80"},
  {s:"Clean Peak Certificates",lo:15,hi:65,c:"#D4901A"},
  {s:"Ancillary Services",lo:2,hi:10,c:"#2D6A4F"},
  {s:"SMART Adder",lo:10,hi:25,c:"#7C3AED"},
];

function Bar({v,max=25,color,h=6}){
  return <div style={{height:h,background:"#E8EDF3",borderRadius:3,overflow:"hidden",flex:1}}>
    <div style={{height:"100%",width:`${Math.min(100,(v/max)*100)}%`,background:color,borderRadius:3,transition:"width .4s"}}/>
  </div>;
}
function Tag({label,color}){
  return <span style={{background:color+"22",color,border:`1px solid ${color}44`,borderRadius:4,padding:"2px 8px",fontSize:10,fontWeight:700,letterSpacing:1}}>{label}</span>;
}

// ── TABS ──────────────────────────────────────────────────────────────────
const TABS=[
  {id:"dash",label:"📊 Dashboard"},
  {id:"explorer",label:"🏙 City Explorer"},
  {id:"ej",label:"⚖️ EJ & Community"},
  {id:"grid",label:"⚡ Grid & Revenue"},
  {id:"zoning",label:"🏗 Zoning & Law"},
  {id:"pipeline",label:"🔋 Project Pipeline"},
];

// ── DASHBOARD ─────────────────────────────────────────────────────────────
function Dashboard(){
  const top=[...MUNIS].sort((a,b)=>total(b)-total(a)).slice(0,5);
  const installed=644,target=5000,permitted=1285;
  return <div>
    {/* hero stats */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12,marginBottom:20}}>
      {[
        {l:"2030 MW Goal",v:"5,000 MW",c:"#1B2A4A"},
        {l:"Installed (statewide)",v:"644 MWh",c:"#B84A2F"},
        {l:"Permitted in S+M",v:"1,285 MW",c:"#0D7C7B"},
        {l:"NEMA Peak LMP '25",v:"$53.31/MWh",c:"#D4901A"},
        {l:"Max Fed ITC",v:"Up to 70%",c:"#2D6A4F"},
      ].map(s=><div key={s.l} style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:"14px 12px",borderTop:`3px solid ${s.c}`,textAlign:"center"}}>
        <div style={{fontSize:22,fontWeight:800,color:s.c,lineHeight:1}}>{s.v}</div>
        <div style={{fontSize:10,color:"#6B7C8D",marginTop:6,letterSpacing:.5}}>{s.l}</div>
      </div>)}
    </div>

    {/* goal bar */}
    <div style={{background:"#1B2A4A",borderRadius:8,padding:"16px 22px",marginBottom:20}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
        <span style={{color:"#fff",fontWeight:700,fontSize:13}}>Massachusetts 5,000 MW Storage Goal — Progress Tracker</span>
        <span style={{color:"#F5C842",fontSize:12,fontWeight:700}}>Installed: {((installed/target)*100).toFixed(1)}% · Permitted (S+M): {((permitted/target)*100).toFixed(1)}%</span>
      </div>
      <div style={{height:14,background:"rgba(255,255,255,.1)",borderRadius:7,overflow:"hidden",position:"relative"}}>
        <div style={{position:"absolute",height:"100%",width:`${(permitted/target)*100}%`,background:"#12A09F",borderRadius:7}}/>
        <div style={{position:"absolute",height:"100%",width:`${(installed/target)*100}%`,background:"#D4901A",borderRadius:7}}/>
      </div>
      <div style={{display:"flex",gap:20,marginTop:8}}>
        {[{l:"Installed (statewide)",c:"#D4901A"},{l:"Permitted S+M",c:"#12A09F"},{l:"Statewide pipeline: 12,932 MWh",c:"#6B7C8D"}].map(x=>(
          <span key={x.l} style={{fontSize:11,color:x.c}}>● {x.l}</span>
        ))}
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:18}}>
      {/* top 5 */}
      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Top 5 Municipalities — Composite Score (max 125)</div>
        {top.map((m,i)=><div key={m.id} style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{width:24,height:24,borderRadius:12,background:CC[m.county],color:"#fff",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</div>
          <div style={{flex:1}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
              <span style={{fontSize:13,fontWeight:700,color:"#0D1B2A"}}>{m.name}</span>
              <span style={{fontSize:13,fontWeight:800,color:CC[m.county]}}>{total(m)}/125</span>
            </div>
            <Bar v={total(m)} max={125} color={CC[m.county]} h={8}/>
          </div>
          <Tag label={m.county} color={CC[m.county]}/>
        </div>)}
      </div>

      <div>
        {/* unique value */}
        <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:16,marginBottom:12}}>
          <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Unique Value vs. Worcester Analyses</div>
          {[
            {n:"①",t:"Five-Layer MCE",b:"EJ + Grid + Zoning + Physical + Revenue — not single-factor"},
            {n:"②",t:"CIA-First Design",b:"33-indicator CIA embedded before site selection (mandatory March 2026)"},
            {n:"③",t:"ISO-NE NEMA Economics",b:"SENE FCM separation, Pay-for-Performance spikes, seasonal LMP modeled"},
            {n:"④",t:"Community Layer",b:"Energy burden, health data & engagement tools for residents, not just developers"},
          ].map(v=><div key={v.n} style={{display:"flex",gap:8,marginBottom:9}}>
            <div style={{width:20,height:20,borderRadius:10,background:"#0D7C7B",color:"#fff",fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{v.n}</div>
            <div><div style={{fontSize:11,fontWeight:700,color:"#0D1B2A"}}>{v.t}</div><div style={{fontSize:10,color:"#6B7C8D",lineHeight:1.4}}>{v.b}</div></div>
          </div>)}
        </div>
        {/* alert */}
        <div style={{background:"#FFF7ED",border:"1px solid #D4901A",borderRadius:8,padding:12}}>
          <div style={{fontSize:11,fontWeight:700,color:"#92400E",marginBottom:6}}>📅 Key Regulatory Milestones</div>
          <div style={{fontSize:11,color:"#78350F",lineHeight:1.7}}>
            <b>July 1, 2026</b> — EFSB sole jurisdiction ≥100 MWh (15-mo auto-approve)<br/>
            <b>March 2026</b> — CIA mandatory for all new BESS in EJ communities<br/>
            <b>Oct 2025</b> — DOER Model BESS Bylaw published (3-tier framework)
          </div>
        </div>
      </div>
    </div>
  </div>;
}

// ── CITY EXPLORER ─────────────────────────────────────────────────────────
function Explorer(){
  const [sel,setSel]=useState(MUNIS[1]);
  const [sort,setSort]=useState("total");
  const [county,setCounty]=useState("All");

  const list=[...MUNIS]
    .filter(m=>county==="All"||m.county===county)
    .sort((a,b)=>sort==="total"?total(b)-total(a):sort==="ej"?b.ejScore-a.ejScore:sort==="grid"?b.gridScore-a.gridScore:b.revScore-a.revScore);

  const dims=[
    {k:"ejScore",l:"EJ",c:"#B84A2F"},{k:"gridScore",l:"Grid",c:"#0D7C7B"},
    {k:"zonScore",l:"Zoning",c:"#3D5A80"},{k:"physScore",l:"Physical",c:"#2D6A4F"},
    {k:"revScore",l:"Revenue",c:"#D4901A"},
  ];

  return <div style={{display:"grid",gridTemplateColumns:"270px 1fr",gap:16}}>
    <div>
      <div style={{display:"flex",gap:5,marginBottom:8,flexWrap:"wrap"}}>
        {["All","Suffolk","Middlesex"].map(f=><button key={f} onClick={()=>setCounty(f)} style={{padding:"3px 9px",borderRadius:4,border:`1px solid ${county===f?"#0D7C7B":"#E8EDF3"}`,background:county===f?"#0D7C7B":"#fff",color:county===f?"#fff":"#0D1B2A",fontSize:11,cursor:"pointer",fontWeight:600}}>{f}</button>)}
        <select onChange={e=>setSort(e.target.value)} value={sort} style={{marginLeft:"auto",fontSize:10,padding:"3px 5px",borderRadius:4,border:"1px solid #E8EDF3",cursor:"pointer"}}>
          <option value="total">Total</option><option value="ej">EJ</option><option value="grid">Grid</option><option value="rev">Revenue</option>
        </select>
      </div>
      <div style={{maxHeight:510,overflowY:"auto"}}>
        {list.map(m=><div key={m.id} onClick={()=>setSel(m)} style={{padding:"9px 11px",marginBottom:5,borderRadius:6,cursor:"pointer",border:`1px solid ${sel.id===m.id?CC[m.county]:"#E8EDF3"}`,background:sel.id===m.id?CC[m.county]+"11":"#fff",transition:"all .2s"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <span style={{fontSize:13,fontWeight:700,color:"#0D1B2A"}}>{m.name}</span>
            <span style={{fontSize:12,fontWeight:800,color:CC[m.county]}}>{total(m)}</span>
          </div>
          <div style={{fontSize:10,color:"#6B7C8D"}}>{m.county} · {m.pctEJ}% EJ · {m.maxMW} MW max</div>
          <div style={{display:"flex",gap:3,marginTop:5}}>
            {dims.map(d=><div key={d.k} style={{flex:1,height:3,background:"#E8EDF3",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:`${(m[d.k]/25)*100}%`,background:d.c}}/></div>)}
          </div>
        </div>)}
      </div>
    </div>

    <div>
      <div style={{background:"#1B2A4A",borderRadius:8,padding:"16px 20px",marginBottom:12,color:"#fff"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:20,fontWeight:800}}>{sel.name}</div>
            <div style={{fontSize:11,color:"#B0BDC8"}}>{sel.county} County · Pop {sel.pop.toLocaleString()} · {sel.utility}</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:26,fontWeight:800,color:"#F5C842"}}>{total(sel)}/125</div>
            <div style={{fontSize:9,color:"#B0BDC8"}}>Composite Score</div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginTop:14}}>
          {dims.map(d=><div key={d.k} style={{textAlign:"center"}}>
            <div style={{fontSize:10,color:"#B0BDC8",marginBottom:3}}>{d.l}</div>
            <div style={{fontSize:18,fontWeight:800,color:d.c}}>{sel[d.k]}</div>
            <div style={{height:4,background:"rgba(255,255,255,.1)",borderRadius:2,marginTop:4}}><div style={{height:"100%",width:`${(sel[d.k]/25)*100}%`,background:d.c,borderRadius:2}}/></div>
          </div>)}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:14}}>
          <div style={{fontSize:11,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:9}}>Demographics & EJ</div>
          {[["Median HH Income",`$${sel.medIncome.toLocaleString()}`],["% Minority",`${sel.pctMinority}%`],["EJ Designated Blocks",`${sel.pctEJ}%`],["CIA Classification",sel.ejClass],["Energy Burden",`${sel.energyBurden}% of income`],["Asthma Rate",sel.asthma]].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid #E8EDF3"}}>
              <span style={{fontSize:11,color:"#6B7C8D"}}>{k}</span>
              <span style={{fontSize:11,fontWeight:700,color:"#0D1B2A"}}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:14}}>
          <div style={{fontSize:11,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:9}}>Grid & Siting</div>
          {[["ISO-NE Zone",sel.zone],["LMP Premium",`+${sel.lmpPrem}%`],["Hosting Capacity",sel.hostCap],["Interconnect Risk",sel.interconnRisk],["Max Feasible MW",`${sel.maxMW} MW`],["Best Duration",sel.bestDur+" BESS"],["Setback",`${sel.setback} ft`],["Zoning",sel.zoningClass],["Permitting",sel.permit]].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid #E8EDF3"}}>
              <span style={{fontSize:11,color:"#6B7C8D"}}>{k}</span>
              <span style={{fontSize:11,fontWeight:700,color:"#0D1B2A"}}>{v}</span>
            </div>
          ))}
        </div>
      </div>
      {sel.activeProject!=="None"&&sel.activeProject!=="None confirmed"&&<div style={{background:"#F0FDF4",border:"1px solid #2D6A4F",borderRadius:8,padding:10,marginTop:10}}>
        <span style={{fontSize:11,fontWeight:700,color:"#2D6A4F"}}>✅ Active Project: </span>
        <span style={{fontSize:11,color:"#166534"}}>{sel.activeProject}</span>
      </div>}
    </div>
  </div>;
}

// ── EJ & COMMUNITY ────────────────────────────────────────────────────────
function EJTab(){
  const sorted=[...MUNIS].sort((a,b)=>b.ejScore-a.ejScore);
  return <div>
    <div style={{background:"#FFF7ED",border:"1px solid #D4901A",borderRadius:8,padding:14,marginBottom:18}}>
      <div style={{fontWeight:700,fontSize:13,color:"#92400E",marginBottom:8}}>⚖️ MA Cumulative Impact Analysis (CIA) — Mandatory March 2026 — 33 Indicators</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
        {[{cat:"Pollution Burden",items:["Air quality (PM2.5, NOx)","Diesel PM exposure","Toxic sites proximity","Traffic density"]},{cat:"Health Outcomes",items:["Asthma hospitalization","Cardiovascular disease","Low birth weight","Life expectancy"]},{cat:"Socioeconomic",items:["Poverty / income","Linguistic isolation","Educational attainment","Housing cost burden"]}].map(g=>(
          <div key={g.cat} style={{background:"#FFFBEB",borderRadius:6,padding:10}}>
            <div style={{fontSize:11,fontWeight:700,color:"#92400E",marginBottom:5}}>{g.cat}</div>
            {g.items.map(i=><div key={i} style={{fontSize:10,color:"#78350F",marginBottom:2}}>• {i}</div>)}
          </div>
        ))}
      </div>
    </div>

    <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,overflow:"hidden",marginBottom:18}}>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr style={{background:"#1B2A4A"}}>
          {["Municipality","County","% EJ","CIA Level","Energy Burden","Asthma","EJ Score"].map(h=><th key={h} style={{padding:"9px 12px",textAlign:"left",fontSize:10,color:"#B0BDC8",letterSpacing:.8,textTransform:"uppercase",fontWeight:600}}>{h}</th>)}
        </tr></thead>
        <tbody>{sorted.map((m,i)=><tr key={m.id} style={{background:i%2===0?"#fff":"#FAFAF7"}}>
          <td style={{padding:"8px 12px",fontSize:12,fontWeight:700,color:"#0D1B2A"}}>{m.name}</td>
          <td style={{padding:"8px 12px"}}><Tag label={m.county} color={CC[m.county]}/></td>
          <td style={{padding:"8px 12px",fontSize:12,fontWeight:700,color:m.pctEJ===100?"#B84A2F":m.pctEJ>80?"#D4901A":"#6B7C8D"}}>{m.pctEJ}%</td>
          <td style={{padding:"8px 12px"}}><Tag label={m.ejClass} color={EJC[m.ejClass]||"#6B7C8D"}/></td>
          <td style={{padding:"8px 12px",fontSize:12,color:m.energyBurden>7?"#B84A2F":"#0D1B2A",fontWeight:m.energyBurden>7?700:400}}>{m.energyBurden}%</td>
          <td style={{padding:"8px 12px",fontSize:12,color:"#0D1B2A"}}>{m.asthma}</td>
          <td style={{padding:"8px 12px"}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:14,fontWeight:800,color:EJC[m.ejClass]||"#6B7C8D"}}>{m.ejScore}</span>
              <Bar v={m.ejScore} max={25} color={EJC[m.ejClass]||"#6B7C8D"} h={6}/>
            </div>
          </td>
        </tr>)}</tbody>
      </table>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:16}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Community Rights Under MA EJ Law</div>
        {["Mandatory public comment before approval in EJ communities","Translated notices where ≥5% speak same non-English language","Environmental Impact Report must include CIA (33 indicators)","Host Community Agreements required for large projects","Right to independent CIA technical review at developer expense","EFSB proceedings are public — residents may intervene as parties"].map((r,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
            <div style={{width:16,height:16,borderRadius:8,background:"#0D7C7B",color:"#fff",fontSize:9,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>✓</div>
            <span style={{fontSize:11,color:"#334",lineHeight:1.5}}>{r}</span>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:16}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Energy Burden — % of Household Income</div>
        {sorted.map(m=>(
          <div key={m.id} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
            <div style={{width:78,fontSize:11,color:"#0D1B2A",fontWeight:600}}>{m.name}</div>
            <div style={{flex:1,height:10,background:"#E8EDF3",borderRadius:5,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${(m.energyBurden/15)*100}%`,background:m.energyBurden>8?"#B84A2F":m.energyBurden>6?"#D4901A":"#0D7C7B",borderRadius:5}}/>
            </div>
            <div style={{width:36,fontSize:11,color:m.energyBurden>8?"#B84A2F":m.energyBurden>6?"#D4901A":"#0D7C7B",fontWeight:700,textAlign:"right"}}>{m.energyBurden}%</div>
          </div>
        ))}
        <div style={{fontSize:9,color:"#6B7C8D",marginTop:6}}>Source: MA Household Economic Burden Index · US avg ~3%; low-income MA ~10%</div>
      </div>
    </div>
  </div>;
}

// ── GRID & REVENUE ────────────────────────────────────────────────────────
function GridTab(){
  return <div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:18}}>
      <div style={{background:"#1B2A4A",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#F5C842",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>ISO-NE NEMA/SENE Zone — Key Prices</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["Hub DA LMP 2024","$41.47/MWh","#12A09F"],["NEMA DA LMP 2024","$42.09/MWh","#F5C842"],["NEMA Summer 2025","$53.31/MWh","#D4901A"],["Hub Winter 2024","$48.66/MWh","#3D5A80"],["Peak Event Jun '25","$1,600/MWh","#B84A2F"],["Pay-for-Performance",">$9,300/MWh","#B84A2F"]].map(([k,v,c])=>(
            <div key={k} style={{background:"rgba(255,255,255,.07)",borderRadius:6,padding:9}}>
              <div style={{fontSize:9,color:"#B0BDC8",marginBottom:2}}>{k}</div>
              <div style={{fontSize:14,fontWeight:800,color:c}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:12,padding:10,background:"rgba(184,74,47,.15)",borderRadius:6,border:"1px solid #B84A2F44"}}>
          <div style={{fontSize:10,color:"#B84A2F",fontWeight:700}}>⚡ Cranberry Point BESS (150 MW, Carver MA)</div>
          <div style={{fontSize:10,color:"#B0BDC8",marginTop:3}}>Earned ~$1,110/MWh during June 24, 2025 scarcity event — first major demonstration of ISO-NE BESS value</div>
        </div>
      </div>

      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Forward Capacity Auctions — SENE Zone</div>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr style={{background:"#E8EDF3"}}>
            {["Auction","Period","SENE $/kW-mo","RoP $/kW-mo"].map(h=><th key={h} style={{padding:"6px 9px",textAlign:"left",fontSize:9,color:"#6B7C8D",textTransform:"uppercase"}}>{h}</th>)}
          </tr></thead>
          <tbody>{FCA.map((f,i)=><tr key={f.a} style={{background:i%2===0?"#fff":"#FAFAF7"}}>
            <td style={{padding:"6px 9px",fontSize:12,fontWeight:700,color:"#0D1B2A"}}>{f.a}</td>
            <td style={{padding:"6px 9px",fontSize:11,color:"#6B7C8D"}}>{f.p}</td>
            <td style={{padding:"6px 9px",fontSize:13,fontWeight:800,color:f.sene>3?"#B84A2F":"#0D7C7B"}}>${f.sene.toFixed(3)}</td>
            <td style={{padding:"6px 9px",fontSize:12,color:"#0D1B2A"}}>${f.rop.toFixed(3)}</td>
          </tr>)}</tbody>
        </table>
        <div style={{fontSize:9,color:"#6B7C8D",marginTop:8}}>FCA 15 SENE premium: 52% above rest-of-pool. FCA 19 transitioning to prompt/seasonal model.</div>
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>4hr BESS Revenue Stack — NEMA Zone</div>
        {REV.map(r=><div key={r.s} style={{marginBottom:11}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
            <span style={{fontSize:12,color:"#0D1B2A",fontWeight:600}}>{r.s}</span>
            <span style={{fontSize:12,color:r.c,fontWeight:700}}>${r.lo}–${r.hi}/kW-yr</span>
          </div>
          <div style={{height:8,background:"#E8EDF3",borderRadius:4,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${(r.hi/90)*100}%`,background:r.c,borderRadius:4}}/>
          </div>
        </div>)}
        <div style={{borderTop:"2px solid #0D7C7B",paddingTop:8,marginTop:4,display:"flex",justifyContent:"space-between"}}>
          <span style={{fontSize:12,fontWeight:700,color:"#0D1B2A"}}>Total Estimated Stack</span>
          <span style={{fontSize:15,fontWeight:800,color:"#0D7C7B"}}>$90–170+/kW-yr</span>
        </div>
      </div>

      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Federal ITC Stacking (OBBBA July 2025)</div>
        {[["Base ITC","6%","#6B7C8D"],["With Prevailing Wage & Apprenticeship","30%","#0D7C7B"],["+ Domestic Content Bonus","40%","#2D6A4F"],["+ Energy Community (brownfield)","50%","#D4901A"],["+ Low-Income Community Bonus","Up to 70%","#B84A2F"]].map(([k,v,c])=>(
          <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #E8EDF3"}}>
            <span style={{fontSize:11,color:"#334"}}>{k}</span>
            <span style={{fontSize:14,fontWeight:800,color:c}}>{v}</span>
          </div>
        ))}
        <div style={{marginTop:12,padding:10,background:"#F0FDF4",borderRadius:6,border:"1px solid #2D6A4F"}}>
          <div style={{fontSize:11,color:"#2D6A4F",fontWeight:700}}>NREL 2025: Installed cost $334/kWh (2024) → $177/kWh by 2030</div>
          <div style={{fontSize:10,color:"#166534",marginTop:2}}>O&M: 2.5% of CAPEX/yr · 15-year system lifetime</div>
        </div>
      </div>
    </div>
  </div>;
}

// ── ZONING & LAW ──────────────────────────────────────────────────────────
function ZoningTab(){
  return <div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>DOER Model Bylaw — 3 Tiers (Oct 2025)</div>
        {[{tier:"Tier 1",cap:"< 250 kWh",ind:"By-Right",com:"By-Right",res:"By-Right",c:"#2D6A4F"},{tier:"Tier 2",cap:"250 kWh – 10 MWh",ind:"By-Right",com:"Site Plan Review",res:"Special Permit",c:"#0D7C7B"},{tier:"Tier 3",cap:"10 MWh – 100 MWh",ind:"Site Plan Review",com:"Special Permit",res:"Special Permit",c:"#D4901A"}].map(t=>(
          <div key={t.tier} style={{borderLeft:`3px solid ${t.c}`,paddingLeft:10,marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:"#0D1B2A",marginBottom:5}}>{t.tier}: {t.cap}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
              {[["Industrial",t.ind],["Commercial",t.com],["Residential",t.res]].map(([z,r])=>(
                <div key={z} style={{background:"#F5F1EA",borderRadius:4,padding:"4px 6px"}}>
                  <div style={{fontSize:9,color:"#6B7C8D",textTransform:"uppercase"}}>{z}</div>
                  <div style={{fontSize:9,fontWeight:700,color:r==="By-Right"?"#2D6A4F":r==="Site Plan Review"?"#0D7C7B":"#B84A2F"}}>{r}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{background:"#F0FDF4",borderRadius:6,padding:10,border:"1px solid #2D6A4F"}}>
          <div style={{fontSize:11,color:"#2D6A4F",fontWeight:700}}>≥100 MWh → EFSB sole jurisdiction (July 1, 2026)</div>
          <div style={{fontSize:10,color:"#166534",marginTop:2}}>15-month consolidated permit; auto-approval if deadline missed. No local veto.</div>
        </div>
      </div>

      <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:18}}>
        <div style={{fontSize:12,fontWeight:700,color:"#0D7C7B",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Legal Framework & Key Precedents</div>
        {[
          {t:"2024 Climate Act (Ch.239, Nov 2024)",b:"EFSB sole jurisdiction ≥100 MWh from July 2026; 5,000 MW mandate by July 2030; 3-tier procurement."},
          {t:"Dover Amendment (M.G.L. c.40A §3)",b:"Protects standalone BESS from arbitrary municipal prohibition. Upheld: Duxbury Energy Storage v. Town of Duxbury ZBA (MA Land Court, June 2025)."},
          {t:"AGO Moratorium Rejections",b:"Every MA municipal BESS moratorium rejected: Carver, Wendell, Shutesbury, Sherborn, Blandford. Suffolk/Middlesex: ZERO moratoriums."},
          {t:"527 CMR 1.00 / NFPA 855",b:"All BESS must comply with MA Fire Code ch.52 for Li-ion >20 kWh. UL 9540 listing required. Fire dept permit mandatory at all scales."},
          {t:"225 CMR 29.00 (Feb 27, 2026)",b:"DOER implementing regulations for small clean energy facility siting."},
        ].map(l=><div key={l.t} style={{marginBottom:10,paddingBottom:8,borderBottom:"1px solid #E8EDF3"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#0D1B2A",marginBottom:2}}>{l.t}</div>
          <div style={{fontSize:10,color:"#6B7C8D",lineHeight:1.5}}>{l.b}</div>
        </div>)}
      </div>
    </div>

    <div style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,overflow:"hidden"}}>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr style={{background:"#1B2A4A"}}>
          {["Municipality","County","Utility","Zoning Class","Setback","Permitting","Brownfield","Active Project"].map(h=><th key={h} style={{padding:"8px 11px",textAlign:"left",fontSize:9,color:"#B0BDC8",letterSpacing:.8,textTransform:"uppercase",fontWeight:600}}>{h}</th>)}
        </tr></thead>
        <tbody>{[...MUNIS].sort((a,b)=>total(b)-total(a)).map((m,i)=><tr key={m.id} style={{background:i%2===0?"#fff":"#FAFAF7"}}>
          <td style={{padding:"7px 11px",fontSize:12,fontWeight:700,color:"#0D1B2A"}}>{m.name}</td>
          <td style={{padding:"7px 11px"}}><Tag label={m.county} color={CC[m.county]}/></td>
          <td style={{padding:"7px 11px",fontSize:10,color:"#6B7C8D"}}>{m.utility}</td>
          <td style={{padding:"7px 11px",fontSize:10,color:"#0D1B2A"}}>{m.zoningClass}</td>
          <td style={{padding:"7px 11px",fontSize:11,color:"#0D1B2A"}}>{m.setback} ft</td>
          <td style={{padding:"7px 11px",fontSize:11,color:parseInt(m.permit)<10?"#2D6A4F":parseInt(m.permit)<12?"#0D7C7B":"#D4901A"}}>{m.permit}</td>
          <td style={{padding:"7px 11px",fontSize:11,color:m.brownfield?"#2D6A4F":"#6B7C8D"}}>{m.brownfield?"✅ Yes":"—"}</td>
          <td style={{padding:"7px 11px",fontSize:10,color:m.activeProject!=="None"&&m.activeProject!=="None confirmed"?"#2D6A4F":"#6B7C8D"}}>{m.activeProject.split("(")[0].trim()||"—"}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </div>;
}

// ── PROJECT PIPELINE ──────────────────────────────────────────────────────
function Pipeline(){
  const projects=[
    {name:"Trimount ESS",muni:"Everett, Middlesex",mw:700,mwh:2800,dev:"Jupiter Power (BlackRock)",status:"EFSB Approved Feb 2025 · 83E Rd1 Selected",note:"Former ExxonMobil terminal, 20.75 ac · defers $2.2B transmission upgrades · Hithium LFP",cost:"$500M–$1B+",c:"#0D7C7B"},
    {name:"Energizar",muni:"Chelsea, Suffolk",mw:250,mwh:1000,dev:"Flatiron Energy",status:"ZBA Permitted Oct 2024 · 83E Rd1 Selected",note:"284 Eastern Ave · $1.5M/yr PILOT + $550K HCA · Q2 2027 operations target",cost:"~$120M est.",c:"#B84A2F"},
    {name:"Electric Ave",muni:"Brighton (Boston), Suffolk",mw:185,mwh:740,dev:"Flatiron/CME/Hecate",status:"In Development · ISO-NE interconnect ≥ June 2027",note:"Indoor BESS · Community engagement ongoing",cost:"Est. $90M+",c:"#3D5A80"},
    {name:"River Mill",muni:"Tyngsborough, Middlesex",mw:150,mwh:600,dev:"Rhynland Energy",status:"83E Round 1 Selected · Details TBD",note:"Merrimack River corridor · Capacity unconfirmed publicly",cost:"Undisclosed",c:"#D4901A"},
  ];

  return <div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:18}}>
      {[{l:"Section 83E Rd1 Awarded",v:"1,268 MW",c:"#0D7C7B"},{l:"Combined S+M Permitted",v:"1,285 MW",c:"#1B2A4A"},{l:"Combined MWh",v:"~5,140 MWh",c:"#D4901A"},{l:"Remaining to 2030 Goal",v:"~3,715 MW",c:"#B84A2F"}].map(s=>(
        <div key={s.l} style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:"14px",textAlign:"center",borderTop:`3px solid ${s.c}`}}>
          <div style={{fontSize:20,fontWeight:800,color:s.c}}>{s.v}</div>
          <div style={{fontSize:10,color:"#6B7C8D",marginTop:4}}>{s.l}</div>
        </div>
      ))}
    </div>

    {projects.map(p=><div key={p.name} style={{background:"#fff",border:"1px solid #E8EDF3",borderRadius:8,padding:16,marginBottom:12,borderLeft:`4px solid ${p.c}`}}>
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <div>
          <div style={{fontSize:16,fontWeight:800,color:"#0D1B2A"}}>{p.name} <Tag label={p.muni} color={p.c}/></div>
          <div style={{fontSize:11,color:"#6B7C8D",marginTop:2}}>{p.dev} · {p.cost}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:18,fontWeight:800,color:p.c}}>{p.mw} MW / {p.mwh.toLocaleString()} MWh</div>
        </div>
      </div>
      <div style={{display:"inline-block",background:"#F0FDF4",border:"1px solid #2D6A4F",borderRadius:4,padding:"3px 10px",fontSize:10,color:"#2D6A4F",fontWeight:600,margin:"8px 0"}}>{p.status}</div>
      <div style={{fontSize:11,color:"#6B7C8D",lineHeight:1.6}}>{p.note}</div>
    </div>)}

    <div style={{background:"#1B2A4A",borderRadius:8,padding:18}}>
      <div style={{fontSize:12,fontWeight:700,color:"#F5C842",textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Section 83E Long-Term Procurement Schedule</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
        {[{r:"Round 1",d:"Dec 2025",mw:"1,268 MW",n:"4 projects from 13 bids; 20-yr CPEC contracts"},{r:"Round 2",d:"2026",mw:"~1,200 MW",n:"Mid-duration focus (4–10 hr)"},{r:"Round 3",d:"2027",mw:"~1,200 MW",n:"Long-duration (10–24 hr)"},{r:"Round 4",d:"2028",mw:"~1,300 MW",n:"Multi-day (>24 hr) if feasible"}].map(r=>(
          <div key={r.r} style={{background:"rgba(255,255,255,.07)",borderRadius:6,padding:12}}>
            <div style={{fontSize:12,fontWeight:700,color:"#F5C842"}}>{r.r}</div>
            <div style={{fontSize:10,color:"#B0BDC8",marginTop:1}}>{r.d}</div>
            <div style={{fontSize:13,fontWeight:700,color:"#fff",marginTop:4}}>{r.mw}</div>
            <div style={{fontSize:10,color:"#B0BDC8",marginTop:2}}>{r.n}</div>
          </div>
        ))}
      </div>
    </div>
  </div>;
}

// ── APP ───────────────────────────────────────────────────────────────────
export default function App(){
  const [tab,setTab]=useState("dash");
  const views={dash:<Dashboard/>,explorer:<Explorer/>,ej:<EJTab/>,grid:<GridTab/>,zoning:<ZoningTab/>,pipeline:<Pipeline/>};
  return (
    <div style={{fontFamily:"Georgia, serif",background:"#F5F1EA",minHeight:"100vh",color:"#0D1B2A"}}>
      <div style={{background:"#0D1B2A",padding:"18px 26px",borderBottom:"3px solid #0D7C7B"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
          <div>
            <div style={{fontSize:9,color:"#0D7C7B",letterSpacing:2,textTransform:"uppercase",fontFamily:"monospace",marginBottom:4}}>MassDOER × TPS · Next-Generation BESS Siting Tool v2.0</div>
            <h1 style={{margin:0,fontSize:18,color:"#fff",fontWeight:800,letterSpacing:-.5}}>Battery Energy Storage Siting Dashboard</h1>
            <div style={{fontSize:11,color:"#B0BDC8",marginTop:2}}>Suffolk & Middlesex Counties · ISO-NE NEMA/SENE Zone · EJ-First Framework · 5,000 MW 2030 Goal</div>
          </div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {[{l:"Municipalities",v:"13"},{l:"Max Combined MW",v:"880+"},{l:"EJ Designated",v:"13/13"}].map(s=>(
              <div key={s.l} style={{background:"rgba(255,255,255,.07)",borderRadius:6,padding:"7px 12px",textAlign:"center",border:"1px solid rgba(255,255,255,.12)"}}>
                <div style={{fontSize:16,fontWeight:800,color:"#F5C842"}}>{s.v}</div>
                <div style={{fontSize:9,color:"#B0BDC8",textTransform:"uppercase",letterSpacing:.7,marginTop:1}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:"flex",gap:3,marginTop:14,flexWrap:"wrap"}}>
          {TABS.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"6px 14px",border:"none",borderRadius:4,cursor:"pointer",fontSize:11,fontWeight:600,letterSpacing:.2,transition:"all .2s",background:tab===t.id?"#0D7C7B":"transparent",color:tab===t.id?"#fff":"#B0BDC8"}}>{t.label}</button>)}
        </div>
      </div>
      <div style={{padding:"24px 26px",maxWidth:1140,margin:"0 auto"}}>{views[tab]}</div>
      <div style={{background:"#1B2A4A",padding:"10px 26px",borderTop:"2px solid #0D7C7B",marginTop:20}}>
        <div style={{fontSize:9,color:"#6B7C8D"}}>Sources: ISO-NE · Eversource Hosting Capacity Map · National Grid SDP · MassGIS OEJE 2020 · NREL ATB 2025 · DOER Model Bylaw · Mass.gov · Pierce Atwood · pv magazine USA</div>
      </div>
    </div>
  );
}