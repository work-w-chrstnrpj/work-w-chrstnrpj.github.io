import {attachShowcaseControls} from './showcase-controls.js';
/* LuminaStudio / Bravado — deterministic native-browser timeline. No dependencies. */
export const durationMs = 62000;
export const beats = [
  {id:'shot', start:0, duration:6000, settle:2200, title:'You took the shot.', accent:'Now make it yours.', label:'01 / A moment worth making'},
  {id:'light', start:6000, duration:9000, settle:4600, title:'Bring out what you felt.', label:'02 / Shape the light'},
  {id:'looks', start:15000, duration:8000, settle:4200, title:'Same moment. Different mood.', label:'03 / Find your look'},
  {id:'signature', start:23000, duration:12000, settle:7400, title:'Frame it. Say it.', label:'04 / Make your mark'},
  {id:'recipe', start:35000, duration:8000, settle:4500, title:'Keep the look. Create again.', label:'05 / Save the recipe'},
  {id:'second-look', start:43000, duration:10000, settle:5200, title:'Some faces deserve a second look.', label:'06 / Optional cloud intelligence'},
  {id:'yours', start:53000, duration:9000, settle:3800, title:'Give the moment your signature.', label:'07 / Make it yours'}
];
const photo = new URL('./assets/moment.jpg', import.meta.url).href;
const logo = new URL('./assets/ls-logo.png', import.meta.url).href;
const clamp = (v,min=0,max=1) => Math.min(max, Math.max(min,v));
const ease = v => {v=clamp(v); return v*v*(3-2*v);};
const progress = (t,a,b) => ease((t-a)/(b-a));
const lerp = (a,b,t) => a+(b-a)*t;
const formatTime = ms => `${Math.floor(ms/60000)}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}`;
const imageMarkup = extra => `<div class="lsb-photo ${extra||''}"><img src="${photo}" alt="Red sandstone cliffs around a winding road"><div class="lsb-shade"></div><div class="lsb-poster-text">Take the<br>long way.</div><div class="lsb-crop"><i></i><i></i><i></i><i></i></div></div>`;
const portrait = `<svg viewBox="0 0 180 200" aria-hidden="true"><path fill="#29213e" d="M5 200c4-55 41-64 85-64s81 9 85 64"/><path fill="#b9a1e8" d="M73 112h34v43c-8 14-25 14-34 0"/><path fill="#d8c2f7" d="M41 57c0-55 98-55 98 0v39c0 31-24 49-49 49S41 127 41 96"/><path fill="#211932" d="M36 78C22 13 68-9 108 5c45 0 48 43 35 83l-14-36C95 63 76 45 65 35L47 83Z"/><path d="M62 85h12m32 0h12M78 119q12 8 25 0" stroke="#4e346a" stroke-width="4" stroke-linecap="round" fill="none"/><path d="m90 89-3 15h7" stroke="#a587c2" stroke-width="3" fill="none"/></svg>`;
const templates = {
shot: `${imageMarkup()}<div class="lsb-upload"><span>↗</span><div><b>road-trip.jpg</b><small>JPEG · PNG · WebP <em>Up to 10 MB</em></small></div><strong>✓</strong></div>`,
light: `${imageMarkup()}<div class="lsb-adjust lsb-panel"><b>Light & color</b>${['Exposure','Contrast','Temperature'].map((v,i)=>`<div class="lsb-slider"><div><span>${v}</span><strong data-value="${i}">0</strong></div><div class="lsb-track"><i data-fill="${i}"></i><b data-knob="${i}"></b></div></div>`).join('')}<div class="lsb-compare"><span data-before>Before</span><span data-after>After</span></div></div>`,
looks: `${imageMarkup()}<div class="lsb-filterrail">${['Warm','Black & White','Vivid'].map((v,i)=>`<div class="lsb-filter" data-filter="${i}"><img src="${photo}" alt=""><span>${v}</span></div>`).join('')}</div><div class="lsb-pill lsb-filtercount">17 built-in filters</div>`,
signature: `${imageMarkup()}<div class="lsb-toolrail">${['Rotate','Flip','Crop 4:5','Text'].map((v,i)=>`<span data-tool="${i}"><b>${['↶','⇆','⌗','T'][i]}</b>${v}</span>`).join('')}</div>`,
recipe: `${imageMarkup()}<div class="lsb-preset lsb-panel"><div class="lsb-panel-eyebrow">Preset Manager</div><b>Desert signature</b><div class="lsb-recipelines"><span>Light & color</span><span>Vivid · Crop 4:5</span><span>Text overlay</span></div><div class="lsb-save">Save preset</div><small>Sign in to save</small><div class="lsb-json-label">Import / Export JSON</div></div><div class="lsb-json">{ }<small>JSON</small></div><div class="lsb-second"><img src="${photo}" alt="Second example using the same photo"><span>Settings, not image files</span></div>`,
'second-look': `<div class="lsb-ai-portrait"><div>${portrait}</div><span>AI Restore</span></div><div class="lsb-ai-path">${['Your Hugging Face token','CodeFormer','Back to editor'].map((v,i)=>`<div class="lsb-step" data-step="${i}"><i>${['⌁','✧','↙'][i]}</i><span>${v}</span></div>`).join('')}<div class="lsb-trace"><i></i></div></div><div class="lsb-ai-receipt"><span>✓</span><div>Restore history · metadata only<small>Optional encrypted token storage</small></div></div><div class="lsb-ai-note">Simulated AI workflow<small>Provider availability and quota apply</small></div>`,
yours: `${imageMarkup()}<div class="lsb-endbrand"><img src="${logo}" alt=""><b>LuminaStudio Web</b><small>Browser-first photo editing</small></div><div class="lsb-download"><span>↓</span><div><b>Export PNG</b><small>LS-Web-261019-road-trip.png</small></div><strong>PNG</strong></div>`
};
// Same light/color formula used by the source editor; fixture settings are illustrative.
function treatment(exposure=18, contrast=24, temperature=22, saturation=0) {
 return `brightness(${(1+exposure*.006).toFixed(3)}) contrast(${(1+contrast*.007).toFixed(3)}) saturate(${1+saturation/100}) sepia(${temperature/100*.22}) hue-rotate(${temperature*-.14}deg)`;
}
const looks=[treatment(26,24,57,10),treatment(18,42,22,-100),treatment(23,52,22,38)];

function mountOriginalBravado(container, options={}) {
 if (!(container instanceof Element)) throw new TypeError('mountBravado needs a DOM element');
 const root=document.createElement('section'); root.className='lsb';
 root.setAttribute('aria-label','LuminaStudio Web animated project showcase');
 root.style.setProperty('--lsb-ratio',options.aspectRatio || '16 / 10');
 root.innerHTML=`<div class="lsb-stage"><div class="lsb-scene" aria-hidden="true"></div><div class="lsb-brand" aria-hidden="true"><img src="${logo}" alt=""><span>LuminaStudio</span><i>WEB</i></div><div class="lsb-topnote" aria-hidden="true">Guest editor</div><div class="lsb-copy" aria-hidden="true"><p></p><h2></h2><div></div></div><div class="lsb-scene-index" aria-hidden="true"></div><div class="lsb-demo" aria-hidden="true">Reconstructed product demo</div></div><div class="lsb-controls"><button type="button" data-play aria-label="Play showcase">Play</button><button type="button" data-replay aria-label="Replay showcase">↺</button><button type="button" data-prev aria-label="Previous scene">‹</button><button type="button" data-next aria-label="Next scene">›</button><input type="range" min="0" max="62000" step="10" value="0" aria-label="Showcase timeline"><output>0:00 / 1:02</output></div><details class="lsb-transcript"><summary>Showcase transcript</summary><p>You took the shot. Now make it yours. Shape light and color, compare Before and After, explore 17 filters, crop, rotate, flip and position text. Save presets when signed in, or import and export settings as JSON. Optional CodeFormer face restoration uses your Hugging Face token; accounts can save it encrypted. Restoration history contains metadata. Finish with a browser-rendered PNG. All screens are reconstructed, with fictional settings. AI workflow and file movements are simulated; no provider call or product export occurs here.</p></details>`;
 container.append(root);
 const $=s=>root.querySelector(s), scene=$('.lsb-scene'), copy=$('.lsb-copy'), title=$('h2'), eyebrow=$('.lsb-copy p'), accent=$('.lsb-copy > div'), playBtn=$('[data-play]'), range=$('input'), output=$('output');
 if(options.controls===false) $('.lsb-controls').hidden=true;
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 let reduced=media.matches, time=clamp(Number(options.initialTimeMs)||0,0,durationMs), intent=false, offscreen=false, destroyed=false, frame=0, last=0, current=-1;
 const disposers=[];
 const listen=(el,type,fn)=>{el.addEventListener(type,fn);disposers.push(()=>el.removeEventListener(type,fn));};
 const active=()=>intent&&!document.hidden&&!offscreen&&!reduced&&!destroyed;
 const state=()=>({timeMs:time,durationMs,playing:active()});
 function render(){
  if(destroyed)return;
  const ix=Math.max(0,beats.findLastIndex(b=>time>=b.start)); const beat=beats[ix];
  const t=time-beat.start;
  if(ix!==current){
   current=ix; scene.innerHTML=templates[beat.id]; root.dataset.scene=beat.id;
   eyebrow.textContent=beat.label; title.textContent=beat.title; accent.textContent=beat.accent||'';
   $('.lsb-scene-index').textContent=`${String(ix+1).padStart(2,'0')} / 07`;
   $('.lsb-topnote').textContent=beat.id==='shot'?'Guest editor':beat.id==='second-look'?'Optional AI Restore':beat.id==='recipe'?'Account presets':'Browser editing';
  }
  accent.style.opacity='1';
  const enter=progress(t,0,650); const exit=beat.id==='yours'?0:progress(t,beat.duration-500,beat.duration);
  copy.style.opacity=String(lerp(.25,1,enter)*(1-exit*.35)); copy.style.transform=`translateY(${(1-enter)*10}px)`;
  scene.style.opacity=String(1-exit*.18);
  const pic=$('.lsb-photo'), img=pic?.querySelector('img'), text=pic?.querySelector('.lsb-poster-text'), crop=pic?.querySelector('.lsb-crop');
  if(pic){
   // Fully reset every mutable property on every render for backward seeking.
   for(const el of [pic,img,text,crop])el.style.cssText='';
   pic.style.transform='none'; pic.style.clipPath='none'; img.style.transform='none'; img.style.filter=treatment();
   if(['signature','recipe','yours'].includes(beat.id))img.style.filter=looks[2];
   text.style.opacity='0'; text.style.transform='none'; text.style.outlineColor='transparent'; crop.style.opacity='0';
  }
  if(beat.id==='shot'){
   const p=progress(t,0,2200); pic.style.transform=`scale(${lerp(1.12,1,p)}) rotate(${lerp(-2,0,p)}deg)`; img.style.filter='none';
   $('.lsb-upload').style.opacity=String(progress(t,650,1600));
   accent.style.opacity=String(progress(t,650,1500));
  }
  if(beat.id==='light'){
   const vals=[18*progress(t,300,1600),24*progress(t,650,2000),22*progress(t,1100,2400)];
   vals.forEach((v,i)=>{ $(`[data-value="${i}"]`).textContent=`+${Math.round(v)}`; $(`[data-fill="${i}"]`).style.width=`${50+v*.75}%`; $(`[data-knob="${i}"]`).style.left=`${50+v*.75}%`; });
   const before=t>=2600&&t<3500;
   img.style.filter=before?'none':treatment(...vals);
   $('[data-before]').classList.toggle('is-active',before); $('[data-after]').classList.toggle('is-active',!before);
  }
  if(beat.id==='looks'){
   const selected=t<1500?0:t<2850?1:2;
   img.style.filter=looks[selected];
   root.querySelectorAll('[data-filter]').forEach((el,i)=>{el.classList.toggle('is-active',i===selected);el.querySelector('img').style.filter=looks[i];});
   $('.lsb-filterrail').style.transform=`translateY(${(1-progress(t,0,700))*45}px)`;
  }
  if(beat.id==='signature'){
   const rotation=90*(progress(t,200,800)-progress(t,850,1450));
   const flip=1-2*(progress(t,1500,1900)-progress(t,2150,2700));
   img.style.transform=`rotate(${rotation}deg) scaleX(${flip})`;
   const c=progress(t,2700,4200); pic.style.clipPath=`inset(0 ${lerp(0,12,c)}% round 4px)`;
   crop.style.opacity=String(c*(1-progress(t,6500,7400)));
   const ty=progress(t,4200,5100), drag=progress(t,5200,6600);
   text.style.opacity=String(ty); text.style.transform=`translate(${lerp(12,0,drag)}%,${lerp(-100,0,drag)}%)`;
   text.style.outlineColor=t>=5100&&t<7000?'#c5b5ff':'transparent';
   root.querySelectorAll('[data-tool]').forEach((el,i)=>el.classList.toggle('is-active',i===(t<1450?0:t<2700?1:t<4200?2:3)));
  }
  if(beat.id==='recipe'){
   text.style.opacity='1';
   const saved=t>=1900; $('.lsb-save').textContent=saved?'✓ Preset saved':'Save preset';
   $('.lsb-save').classList.toggle('is-saved',saved);
   const p=progress(t,2200,4200); $('.lsb-json').style.transform=`translate(${p*115}%,${p*40}%) rotate(${lerp(-8,6,p)}deg)`; $('.lsb-json').style.opacity=String(progress(t,1800,2300)*(1-progress(t,4200,4500)));
   $('.lsb-second img').style.filter=treatment(23*p,52*p,22*p,38*p);
  }
  if(beat.id==='second-look'){
   const p=progress(t,1000,4700);
   root.querySelectorAll('[data-step]').forEach((el,i)=>el.classList.toggle('is-active',p>=i/3));
   $('.lsb-trace i').style.width=`${p*100}%`;
   $('.lsb-ai-receipt').style.opacity=String(progress(t,4500,5200)); $('.lsb-ai-receipt').style.transform=`translateY(${(1-progress(t,4500,5200))*12}px)`;
  }
  if(beat.id==='yours'){
   text.style.opacity='1';
   const p=progress(t,800,3800); pic.style.transform=`translateY(${-p*2}%) rotate(${p*3}deg)`;
   $('.lsb-download').style.opacity=String(progress(t,500,1800)); $('.lsb-download').style.transform=`translate(${lerp(15,0,p)}%,${lerp(-10,0,p)}%)`;
   $('.lsb-download b').textContent=t>=2500?'PNG ready':'Export PNG';
  }
  // The same image changes composition inside the outgoing scene window.
  if(pic&&exit>0){
   const compact=root.clientWidth<=560;
   const geometry=compact?[[0,0,100,100],[6,36,51,50],[6,36,88,39],[44,25,53,59],[6,36,29.4,49],[7,43,23,36],[57,22,32.4,54]]:[[0,0,100,100],[6,38,57,49],[6,35,88,42],[48,17,46,72],[6,35,28,56],[7,41,20,31],[55,14,35.5,71]];
   const from=geometry[ix],to=geometry[ix+1];
   if(to) ['left','top','width','height'].forEach((prop,i)=>pic.style[prop]=`${lerp(from[i],to[i],exit)}%`);
   if(beat.id==='recipe')pic.style.opacity=String(1-exit);
  } else if(pic)pic.style.opacity='1';
  range.value=String(Math.round(time)); range.setAttribute('aria-valuetext',`${formatTime(time)} of 1:02; ${beat.title}`);
  output.textContent=`${formatTime(time)} / 1:02`;
  playBtn.textContent=reduced?'Manual':active()?'Pause':'Play'; playBtn.disabled=reduced;
  playBtn.setAttribute('aria-label',reduced?'Reduced motion: use previous and next scene':active()?'Pause showcase':'Play showcase');
 }
 function tick(now){frame=0;if(!active())return;if(last)time=Math.min(durationMs,time+now-last);last=now;if(time>=durationMs)intent=false;render();if(active())frame=requestAnimationFrame(tick);}
 function sync(){cancelAnimationFrame(frame);frame=0;last=0;render();if(active())frame=requestAnimationFrame(tick);}
 const controller={
  play(){if(destroyed||reduced)return;if(time>=durationMs)time=0;intent=true;sync();},
  pause(){if(destroyed)return;intent=false;sync();},
  replay(){if(destroyed)return;time=reduced?beats[0].settle:0;intent=!reduced;sync();},
  seek(ms){if(destroyed)return;const n=Number(ms);time=Number.isFinite(n)?clamp(n,0,durationMs):0;if(time>=durationMs)intent=false;sync();},
  getState:state,
  destroy(){if(destroyed)return;destroyed=true;intent=false;cancelAnimationFrame(frame);observer?.disconnect();disposers.forEach(fn=>fn());root.remove();}
 };
 listen(playBtn,'click',()=>active()?controller.pause():controller.play());
 listen($('[data-replay]'),'click',()=>controller.replay());
 const navigate=delta=>{intent=false;const ix=clamp(current+delta,0,beats.length-1);time=beats[ix].start+beats[ix].settle;sync();};
 listen($('[data-prev]'),'click',()=>navigate(-1));listen($('[data-next]'),'click',()=>navigate(1));
 listen(range,'input',()=>controller.seek(range.value));
 listen(document,'visibilitychange',sync);
 listen(media,'change',()=>{reduced=media.matches;intent=false;if(reduced)time=beats[current<0?0:current].start+beats[current<0?0:current].settle;sync();});
 const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{offscreen=!entries[0].isIntersecting;sync();},{threshold:0});
 observer?.observe(root);
 if(reduced)time=beats[0].settle;
 render();
 return controller;
}

// Normalize controls only; the project scene renderer above remains independent.
export function mountBravado(container,options={}){
 const initial=options.initialTimeMs??options.initialTime??0;
 const controller=mountOriginalBravado(container,{...options,initialTimeMs:initial,initialTime:initial,autoplay:false,controls:false,showControls:false});
 return attachShowcaseControls(container,controller,{title:'LuminaStudio',root:'.lsb',stage:'.lsb-stage',controls:'.lsb-controls',hide:'.lsb-transcript',playAttribute:'data-play',scenes:beats.map(b=>({startMs:b.start,settledMs:b.start+b.settle}))},options);
}
