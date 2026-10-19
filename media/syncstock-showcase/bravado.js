import {attachShowcaseControls} from './showcase-controls.js';
import { storyboard } from './story-data.js';
const clamp = (v, a=0, b=1) => Math.max(a, Math.min(b, v));
const ease = v => 1 - Math.pow(1-clamp(v), 3);
const progress = (t, a, b) => ease((t-a)/(b-a));
const mark = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m24 5 17 10v19L24 44 7 34V15L24 5Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="m7 15 17 10 17-10M24 25v19M15 10l18 10" stroke="currentColor" stroke-width="2.5"/></svg>`;
const parcel = `<div class="ss-parcel"><span class="ss-parcel-mark">${mark}</span><div><small>INVENTORY / 024</small><strong>Field Bottle</strong><span>FB-024 <i>100 units</i></span><div class="ss-barcode"></div></div></div>`;
const frame = (eyebrow, content) => `<div class="ss-paper"><div class="ss-paper-top"><span>${eyebrow}</span><span class="ss-window-dots">● ● ●</span></div>${content}</div>`;
const panels = [
`<div class="ss-opening"><div class="ss-orbit ss-orbit-a">Warehouse A <span>↗</span></div><div class="ss-orbit ss-orbit-b">Shop B <span>↙</span></div>${parcel}<div class="ss-cross ss-cross-a">+</div><div class="ss-cross ss-cross-b">+</div></div>`,
frame('Company workspace',`<div class="ss-company"><div class="ss-company-icon">${mark}</div><strong>Northline Supply</strong><p>Join with a company code</p><div class="ss-code"><small>Company code</small><b><span>6adf</span><span>…</span><span>e024</span></b></div><div class="ss-members"><span>NS</span><span>AM</span><span>JL</span><small>Company members</small></div></div>`),
frame('Inventory record',`<div class="ss-record"><div class="ss-record-title"><span class="ss-tiny-mark">${mark}</span><div><strong>Field Bottle</strong><small>SKU · FB-024</small></div></div><div class="ss-fields"><div class="ss-field"><small>Category</small><b class="ss-category">Drinkware</b></div><div class="ss-field"><small>Location</small><b class="ss-location">Warehouse A</b></div><div class="ss-field ss-quantity"><small>Quantity</small><b>100 <em>units</em></b></div></div></div>`),
frame('Current Inventory',`<div class="ss-stock"><div class="ss-filters"><span class="ss-location-filter">Location · Warehouse A</span><span class="ss-zero-toggle">✓ Hide zero stock</span></div><div class="ss-row ss-row-feature"><span class="ss-row-icon">${mark}</span><strong>Field Bottle</strong><small>FB-024</small><b>100 <em>units</em></b></div><div class="ss-row"><span class="ss-row-icon">${mark}</span><strong>Canvas Tote</strong><small>CT-016</small><b>40 <em>units</em></b></div><div class="ss-row ss-zero-row"><span class="ss-row-icon">${mark}</span><strong>Desk Cup</strong><small>DC-008</small><b>0 <em>units</em></b></div></div>`),
frame('Stock adjustment',`<div class="ss-adjust"><div class="ss-adjust-label">Field Bottle · Warehouse A</div><div class="ss-adjust-main"><div class="ss-count"><b data-count>100</b><span>units remaining</span><i class="ss-delta">−5</i></div><div class="ss-reason"><span>Damage</span><strong>5 units</strong><small>Reason · Broken in storage</small></div></div><div class="ss-blocks">${Array.from({length:100},(_,i)=>`<span class="${i>=95?'ss-remove':''}"></span>`).join('')}</div></div>`),
frame('Stock transfer',`<div class="ss-transfer"><small>Field Bottle · FB-024</small><div class="ss-stations"><div class="ss-station"><span>Warehouse A</span><strong data-source>95</strong><small>units</small></div><div class="ss-route"><div class="ss-track"></div><div class="ss-moving-box">${mark}<b>20 units</b></div><span>→</span></div><div class="ss-station ss-destination"><span>Shop B</span><strong data-destination>0</strong><small>units</small></div></div></div>`),
frame('Inventory analytics',`<div class="ss-analytics"><div class="ss-chart-meta"><span>Current units by inventory date</span><b>Monthly</b></div><div class="ss-chart">${[42,68,55,95].map((n,i)=>`<div class="ss-column"><div class="ss-bar" style="--bar:${n}%"><b>${n}</b></div><span>${['Jan','Feb','Mar','Apr'][i]}</span></div>`).join('')}</div><small class="ss-dataset">Example dataset</small></div>`),
`<div class="ss-ending"><div class="ss-end-mark">${mark}</div><strong>SyncStock</strong><span>Organize · Adjust · Transfer · Understand</span><div class="ss-end-rule"></div></div>`
];

/** Mount one isolated, dependency-free SyncStock showcase. */
function mountOriginalBravado(container, options={}) {
  if (!(container instanceof Element)) throw new TypeError('A container Element is required');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root=document.createElement('section'); root.className='ss-bravado';
  root.setAttribute('aria-label','SyncStock animated project showcase');
  root.style.setProperty('--ss-ratio', options.aspectRatio || '16 / 10');
  root.innerHTML=`<div class="ss-stage" role="img" aria-label="Illustrated SyncStock inventory workflow with fictional records"><div class="ss-grid"></div><header class="ss-brand"><span class="ss-brand-icon">${mark}</span><b>SyncStock</b><span class="ss-edition">INVENTORY, IN PERSPECTIVE</span></header><div class="ss-scene-header"><span class="ss-chapter"></span><h2></h2><p></p></div><div class="ss-visual"></div><footer class="ss-stage-footer"><span>Illustrated demo · fictional data</span><b class="ss-scene-number"></b></footer></div><div class="ss-controls"><button type="button" data-action="play">Play</button><button type="button" data-action="replay" aria-label="Replay from beginning">↺</button><button type="button" data-action="previous" aria-label="Previous scene">‹</button><input type="range" min="0" max="60000" step="10" value="0" aria-label="Showcase timeline"><button type="button" data-action="next" aria-label="Next scene">›</button><output>0:00 / 1:00</output></div><p class="ss-reduced" hidden>Reduced motion: explore the settled scenes with Previous and Next.</p><details class="ss-transcript"><summary>Story &amp; demo notes</summary><p>Source-based illustrations with fictional data; application runtime acceptance is pending. Inventory form writes and some chart types have known endpoint issues.</p><ol><li>Stock moves. Keep the details with it.</li><li>Company members join Northline Supply using a company code.</li><li>Field Bottle, SKU FB-024: Drinkware, Warehouse A, 100 units. Existing record illustration.</li><li>Filter the current list by location and hide zero-stock records.</li><li>Create a damage adjustment of 5: 100 becomes 95.</li><li>Create a transfer of 20: Warehouse A becomes 75 and Shop B becomes 20. This illustrates create-time behavior only.</li><li>Inventory analytics groups current quantities by inventory date. A separate example dataset shows 42, 68, 55, 95; these are not historical balances.</li><li>Every item. A clearer picture.</li></ol></details>`;
  container.append(root);
  const $=s=>root.querySelector(s), $$=s=>[...root.querySelectorAll(s)];
  const visual=$('.ss-visual'), heading=$('h2'), sub=$('.ss-scene-header p'), slider=$('input'), playButton=$('[data-action="play"]');
  const scenes=storyboard.scenes, duration=storyboard.targetDurationMs;
  let time=clamp(Number.isFinite(options.initialTimeMs)?options.initialTimeMs:2500,0,duration), playing=false, destroyed=false, raf=0, last=0, index=-1, offscreen=false;
  const indexAt=t=>Math.min(scenes.length-1,scenes.findIndex(s=>t<s.startMs+s.durationMs) < 0 ? scenes.length-1 : scenes.findIndex(s=>t<s.startMs+s.durationMs));
  const style=(s,props)=>$$(s).forEach(el=>Object.assign(el.style,props));
  const move=(s,x=0,y=0,r=0,scale=1,opacity=1)=>style(s,{transform:`translate(${x}%,${y}%) rotate(${r}deg) scale(${scale})`,opacity:String(opacity)});
  function render(){
    if(destroyed)return;
    const i=indexAt(time), scene=scenes[i], t=time-scene.startMs;
    if(i!==index){index=i;visual.innerHTML=panels[i];heading.textContent=scene.onScreenText[0];sub.textContent=scene.onScreenText[1]||'';$('.ss-chapter').textContent=['THE EVERYDAY','THE CONTEXT','THE RECORD','THE FOCUS','THE REASON','THE MOVEMENT','THE PERSPECTIVE','SYNCSTOCK'][i];$('.ss-scene-number').textContent=`0${i+1} / 08`;}
    root.dataset.scene=scene.id;
    const enter=reduced.matches?1:progress(t,0,350), exit=reduced.matches||i===7?0:progress(t,scene.durationMs-500,scene.durationMs);
    visual.style.opacity=String(enter*(1-exit));visual.style.transform=`translateY(${(1-enter)*3-exit*3}cqw)`;
    $('.ss-scene-header').style.opacity=String(1-exit);
    if(i===0){const p=reduced.matches?1:progress(t,0,2500);move('.ss-parcel',0,(1-p)*25,(1-p)*-12,.9+.1*p);move('.ss-orbit-a',(1-p)*-25,(1-p)*-20,(1-p)*-10);move('.ss-orbit-b',(1-p)*25,(1-p)*20,(1-p)*12);}
    if(i===1){const p=reduced.matches?1:progress(t,500,2300);$$('.ss-code b span').forEach((el,n)=>el.style.opacity=String(reduced.matches?1:progress(t,600+n*450,1200+n*450)));$$('.ss-members > span').forEach((el,n)=>{const a=reduced.matches?1:progress(t,2000+n*300,3400+n*300);el.style.transform=`translate(${(1-a)*(n-1)*120}%,${(1-a)*70}%)`;el.style.opacity=String(a);});move('.ss-company-icon',0,(1-p)*-20,0,.85+.15*p);}
    if(i===2){move('.ss-record-title',0,0,0,.94+.06*(reduced.matches?1:progress(t,200,1400)));['.ss-category','.ss-location','.ss-quantity'].forEach((s,n)=>{const p=reduced.matches?1:progress(t,900+n*800,2700+n*800);move(s,(1-p)*(n===1?30:-30),0,0,1,p);});}
    if(i===3){const p=reduced.matches?1:progress(t,1700,3500);style('.ss-zero-row',{opacity:String(1-p),height:`${(1-p)*5}cqw`,paddingTop:`${(1-p)*.8}cqw`,paddingBottom:`${(1-p)*.8}cqw`,borderWidth:p===1?'0':'1px'});style('.ss-zero-toggle',{background:p>0?'#dbeafe':'#f3f4f6',color:p>0?'#1d4ed8':'#6b7280'});style('.ss-location-filter',{boxShadow:`0 0 0 ${reduced.matches?0:Math.sin(progress(t,300,1700)*Math.PI)*3}px #93c5fd`});}
    if(i===4){const p=reduced.matches?1:progress(t,1900,4500);$('[data-count]').textContent=String(100-Math.round(5*p));move('.ss-reason',(1-(reduced.matches?1:progress(t,500,1900)))*25,0,0,1,reduced.matches?1:progress(t,500,1900));$$('.ss-remove').forEach((el,n)=>{const a=reduced.matches?1:progress(t,1900+n*200,3500+n*250);el.style.transform=`translateY(${a*180}%) rotate(${a*12}deg)`;el.style.opacity=String(1-a);el.style.background='#f97316';});move('.ss-delta',0,(1-p)*-100,0,1,p);}
    if(i===5){const p=reduced.matches?1:progress(t,1300,5000);const box=$('.ss-moving-box'),route=$('.ss-route');box.style.transform=`translate(${p*(route.clientWidth-box.clientWidth)}px,${-Math.sin(p*Math.PI)*35}%)`;$('[data-source]').textContent=String(95-Math.round(20*p));$('[data-destination]').textContent=String(Math.round(20*p));style('.ss-track',{background:`linear-gradient(to right,#2563eb ${p*100}%,#dbeafe ${p*100}%)`});}
    if(i===6){$$('.ss-bar').forEach((el,n)=>{const p=reduced.matches?1:progress(t,700+n*400,3200+n*600);el.style.transform=`scaleY(${p})`;el.querySelector('b').style.opacity=String(reduced.matches?1:progress(t,3500,5000));});}
    if(i===7){const p=reduced.matches?1:progress(t,0,2000);move('.ss-end-mark',0,0,(1-p)*-90,.55+.45*p);style('.ss-ending > strong,.ss-ending > span,.ss-end-rule',{opacity:String(p)});}
    slider.value=String(time);$('output').textContent=`${Math.floor(time/60000)}:${String(Math.floor(time/1000)%60).padStart(2,'0')} / 1:00`;
    slider.setAttribute('aria-valuetext',`${scene.headline} ${Math.floor(time/1000)} seconds`);
    playButton.textContent=playing?'Pause':time===duration?'Play again':'Play';
  }
  function tick(now){raf=0;if(!playing||destroyed||offscreen||document.hidden)return;time=clamp(time+Math.min(now-last,100),0,duration);last=now;if(time===duration)playing=false;render();schedule();}
  function schedule(){if(playing&&!destroyed&&!offscreen&&!document.hidden&&!raf){last=performance.now();raf=requestAnimationFrame(tick);}}
  function stopFrame(){cancelAnimationFrame(raf);raf=0;}
  const api={play(){if(destroyed||reduced.matches)return;if(time===duration)time=0;playing=true;render();schedule();},pause(){if(destroyed)return;playing=false;stopFrame();render();},replay(){if(destroyed)return;time=reduced.matches?2500:0;api.play();render();},seek(ms){if(destroyed||!Number.isFinite(ms))return;time=clamp(ms,0,duration);if(time===duration){playing=false;stopFrame();}render();},getState(){return{timeMs:time,durationMs:duration,playing};},destroy(){if(destroyed)return;destroyed=true;playing=false;stopFrame();observer.disconnect();document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',motion);root.removeEventListener('click',click);slider.removeEventListener('input',input);root.remove();}};
  function navigate(delta){api.pause();const target=scenes[clamp(index+delta,0,scenes.length-1)];api.seek(target.startMs+target.motion.settleStartMs);}
  function click(e){const action=e.target.closest('[data-action]')?.dataset.action;if(action==='play')playing?api.pause():api.play();if(action==='replay')api.replay();if(action==='previous')navigate(-1);if(action==='next')navigate(1);}
  function input(){api.seek(Number(slider.value));}
  function visibility(){if(document.hidden)stopFrame();else schedule();}
  function motion(){if(reduced.matches){api.pause();api.seek(scenes[indexAt(time)].startMs+scenes[indexAt(time)].motion.settleStartMs);}playButton.disabled=reduced.matches;$('[data-action="replay"]').disabled=reduced.matches;$('.ss-reduced').hidden=!reduced.matches;}
  root.addEventListener('click',click);slider.addEventListener('input',input);document.addEventListener('visibilitychange',visibility);reduced.addEventListener('change',motion);
  const observer=new IntersectionObserver(entries=>{offscreen=!entries[0].isIntersecting;if(offscreen)stopFrame();else schedule();});observer.observe(root);
  if(options.controls===false)$('.ss-controls').hidden=true;
  render();motion();if(options.autoplay&&!reduced.matches)api.play();return api;
}

// Normalize controls only; the project scene renderer above remains independent.
export function mountBravado(container,options={}){
 const initial=options.initialTimeMs??options.initialTime??0;
 const controller=mountOriginalBravado(container,{...options,initialTimeMs:initial,initialTime:initial,autoplay:false,controls:false,showControls:false});
 return attachShowcaseControls(container,controller,{title:'SyncStock',root:'.ss-bravado',stage:'.ss-stage',controls:'.ss-controls',hide:'.ss-transcript,.ss-reduced',playAttribute:'data-action',scenes:storyboard.scenes.map(s=>({startMs:s.startMs,settledMs:s.startMs+s.motion.settleStartMs}))},options);
}
