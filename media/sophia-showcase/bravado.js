import {attachShowcaseControls} from './showcase-controls.js';
// Sophia Scriptura / Bravado v0.2.0. Native deterministic choreography; no runtime dependencies.
export const durationMs = 59000;
const starts = [0,5000,12000,19000,26000,32000,39000,46000,52000];
const lengths = [5000,7000,7000,7000,6000,7000,7000,6000,7000];
const labels = ['A beginning','Scripture + Pencil','Four ways to write','Contextual study','Quiz Me','Collections','Reading habits','Appearance + narration','One workspace'];
const clamp = (x,a=0,b=1) => Math.max(a,Math.min(b,x));
const ease = x => 1 - (1-clamp(x))**3;
const mix = (a,b,x) => a+(b-a)*x;
const verse = 'Your word is a lamp to my feet, and a light for my path.';
const icon = new URL('./assets/sophia-icon.png',import.meta.url).href;
const stroke = (d,cls='') => `<path class="ss-stroke ${cls}" d="${d}" pathLength="1"/>`;
const book = `<div class="ss-book-label">PSALM 119 · WEB</div><p class="ss-scripture"><sup>105</sup> Your word is a <em>lamp</em> to my feet,<br>and a light for my path.</p>`;
const topbar = (title,tail='') => `<div class="ss-appbar"><span>${title}</span><span>${tail}</span></div>`;
const ref = `<span class="ss-ref">↗ &nbsp; Psalm 119:105 · WEB</span>`;
const dock = active => `<div class="ss-dock">${['Scripture','Collections','Notes','Companion','Activity'].map(x=>`<span class="${x===active?'ss-current':''}">${x}</span>`).join('')}</div>`;
function mountOriginalBravado(container,{aspectRatio='16 / 9',initialTimeMs=0,controls=true,displayMode='detail'}={}){
 if(!(container instanceof HTMLElement))throw new TypeError('A container element is required');
 const root=document.createElement('section');root.className='ss-root';root.dataset.mode=displayMode;
 root.setAttribute('aria-label','Sophia Scriptura — A verse is only the beginning');root.style.setProperty('--ss-ratio',aspectRatio);
 // Trusted, fixed presentation template; no arbitrary user input is interpolated.
 root.innerHTML=`<div class="ss-stage">
 <div class="ss-grain" aria-hidden="true"></div><div class="ss-brand"><span class="ss-mark">σ⁺</span> SOPHIA SCRIPTURA</div><div class="ss-series">A PERSONAL STUDY WORKSPACE</div>
 <div class="ss-scene ss-opening" data-scene="0">
  <span class="ss-overline">READ · REFLECT · REMEMBER</span><h2>A verse is only<br>the <i>beginning.</i></h2>
  <div class="ss-opening-verse"><span>Your word is</span><strong>a lamp to my feet,</strong><span>and a light for my path.</span></div>
  <svg class="ss-opening-line" viewBox="0 0 800 80" fill="none" aria-hidden="true">${stroke('M20 45 C180 45 170 10 340 35 S600 65 780 25')}</svg>
 </div>
 <div class="ss-scene ss-reading" data-scene="1">
  <div class="ss-caption"><span class="ss-overline">01 / SCRIPTURE + APPLE PENCIL</span><h2>Read between<br>your own lines.</h2><p>A passage. Your attention.<br>Room in the margins.</p></div>
  <div class="ss-reader ss-window">${topbar('Scripture','Psalm 119 ⌄ &nbsp; WEB ⌄')}<div class="ss-tools"><span>Layers &nbsp; ▱</span><b>Draw</b><span>⌁ &nbsp; ↶ &nbsp; ↷</span></div><div class="ss-reader-page">${book}<p class="ss-verse-next"><sup>106</sup> I have sworn, and have confirmed it,<br>that I will obey your righteous ordinances.</p><span class="ss-margin-note">the next<br>faithful step</span><svg class="ss-ink" viewBox="0 0 560 300" fill="none" aria-hidden="true">${stroke('M76 125 Q220 130 351 124')}${stroke('M262 88 C237 65 308 65 315 88 C320 108 250 110 252 87')}${stroke('M350 153 Q425 135 451 172 M441 155 L453 174 L430 172')}</svg><div class="ss-pencil" aria-hidden="true"></div></div>${dock('Scripture')}</div>
 </div>
 <div class="ss-scene ss-writing" data-scene="2">
  <div class="ss-heading"><span class="ss-overline">02 / NOTES</span><h2>Give a thought room to grow.</h2></div>
  <div class="ss-canvas ss-window">${topbar('Walking in wisdom','Canvas &nbsp; ⌁ &nbsp; ↶ &nbsp; ＋')}<div class="ss-canvas-grid"></div>
   <div class="ss-quote-object ss-object"><small>SCRIPTURE QUOTE</small><blockquote class="ss-full-quote">${verse}</blockquote><blockquote class="ss-compact-quote">Your word is a lamp…</blockquote>${ref}</div>
   <div class="ss-note-object ss-object"><small>PERSONAL REFLECTION</small><h3>The next faithful step.</h3><p>I may not see the whole road.<br>I can attend to the step in front of me.</p><div class="ss-object-handle"></div></div>
   <svg class="ss-canvas-ink" viewBox="0 0 900 330" fill="none" aria-hidden="true">${stroke('M360 145 C430 60 470 55 535 118 M519 92 L538 122 L508 118')}</svg>
   <div class="ss-handwritten">a thought worth keeping</div>
  </div><div class="ss-formats"><span class="ss-format-active">Canvas <small>Arrange freely</small></span><span>Page <small>Write at length</small></span><span>Prayer <small>Keep your prayers</small></span><span>Journal <small>Reflect personally</small></span></div>
 </div>
 <div class="ss-scene ss-asking" data-scene="3">
  <div class="ss-caption"><span class="ss-overline">03 / COMPANION</span><h2>Let a question<br>open a door.</h2><div class="ss-passage-mini">${book}</div><p>Selected context.<br>Your question.</p></div>
  <div class="ss-chat ss-window">${topbar('Companion','Biblical Studies')}<div class="ss-chat-body"><div class="ss-attachment">▤ &nbsp; Psalm 119:105 · WEB</div><div class="ss-question"><span>What does the lamp image emphasize?</span></div><div class="ss-answer"><small>STUDY COMPANION</small><h3>Light for the next step.</h3><p>Reflect on how the image connects guidance with walking.</p><div class="ss-response-ref">Psalm 119:105</div></div><div class="ss-chat-disclosure">Illustrative response · BYOK online</div></div><div class="ss-composer">Ask a follow-up question <b>↑</b></div></div>
 </div>
 <div class="ss-scene ss-reviewing" data-scene="4">
  <div class="ss-heading"><span class="ss-overline">04 / QUIZ ME</span><h2>Make room for remembering.</h2></div>
  <div class="ss-quiz ss-window">${topbar('Quiz Me','Bible or False · Question 1')}<div class="ss-quiz-content"><span class="ss-quiz-label">TRUE OR FALSE</span><h3>Psalm 119:105 calls<br>God’s word a lamp.</h3><div class="ss-choices"><div class="ss-choice ss-true">True <span>✓</span></div><div class="ss-choice">False</div></div><div class="ss-submit">Submit answer <span>→</span></div><div class="ss-feedback"><b>✓ &nbsp; Correct</b><span>Psalm 119:105 · WEB</span></div></div></div>
 </div>
 <div class="ss-scene ss-collecting" data-scene="5">
  <div class="ss-caption"><span class="ss-overline">05 / COLLECTIONS</span><h2>Keep the<br>connections.</h2><p>A passage, a thought,<br>a conversation.<br>One place to return.</p></div>
  <div class="ss-collection-space"><div class="ss-folder"><span>▱</span><div><small>COLLECTION</small><h3>Walking in wisdom</h3></div><b>3 items</b></div><span class="ss-assign">Assign to collection &nbsp; ✓</span>
   <div class="ss-file ss-file-verse"><span class="ss-file-icon">▤</span><div><small>SCRIPTURE</small><h3>A lamp to my feet</h3><p>Psalm 119:105 · WEB</p></div></div>
   <div class="ss-file ss-file-note"><span class="ss-file-icon">⌁</span><div><small>NOTE · CANVAS</small><h3>The next faithful step</h3><p>Your reflection, preserved</p></div></div>
   <div class="ss-file ss-file-chat"><span class="ss-file-icon">☷</span><div><small>CONVERSATION</small><h3>The lamp image</h3><p>Context and question, together</p></div></div>
  </div>
 </div>
 <div class="ss-scene ss-habits" data-scene="6">
  <div class="ss-heading"><span class="ss-overline">06 / ACTIVITY</span><h2>A little time. A lasting rhythm.</h2></div>
  <div class="ss-timer-area"><svg class="ss-ring" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="88" class="ss-ring-bg"/><circle cx="100" cy="100" r="88" pathLength="1" class="ss-ring-fill"/></svg><div class="ss-timer-center"><small>READING</small><strong>14:58</strong><span class="ss-timer-state">Finish session →</span></div></div>
  <div class="ss-analytics ss-window">${topbar('Your study rhythm','This week')}<div class="ss-chart">${[.35,.62,.46,.78,.52,.85,1].map((v,i)=>`<div><i data-bar="${i}" style="--ss-bar:${v}"></i><span>${['M','T','W','T','F','S','S'][i]}</span></div>`).join('')}</div><div class="ss-saved-session"><b>✓ &nbsp; Reading · Psalm 119</b><span>15 min · Saved</span></div><p class="ss-history-disclosure">Illustrative study history · time condensed</p></div>
 </div>
 <div class="ss-scene ss-atmosphere" data-scene="7">
  <div class="ss-caption"><span class="ss-overline">07 / MAKE IT YOURS</span><h2>Find your<br>kind of quiet.</h2><p>Paper. Type. Atmosphere.</p><div class="ss-swatches"><i></i><i></i><i></i></div><span class="ss-preset-name">Quiet Sage</span></div>
  <div class="ss-theme-reader ss-window">${topbar('Scripture','Psalm 119 · WEB')}<div class="ss-theme-paper">${book}</div><div class="ss-audio"><span class="ss-audio-icon">Ⅱ</span><div><b>Psalm 119</b><span>Narration where available</span><div class="ss-audio-track"><i></i></div></div><span class="ss-audio-options">1× &nbsp; ◷</span></div></div>
 </div>
 <div class="ss-scene ss-finale" data-scene="8">
  <div class="ss-finale-surfaces"><div class="ss-finale-card ss-finale-scripture"><small>SCRIPTURE</small><p>Your word is a lamp<br>to my feet.</p></div><div class="ss-finale-card ss-finale-note"><small>NOTES</small><p>The next<br>faithful step.</p></div><div class="ss-finale-card ss-finale-collection"><small>COLLECTIONS</small><p>Walking<br>in wisdom.</p></div></div>
  <div class="ss-end-brand"><img src="${icon}" alt="" width="64" height="64"><span>Sophia Scriptura</span></div><h2>Read with attention.<br><i>Return with purpose.</i></h2><p>A personal Bible study workspace for iPad.</p><div class="ss-end-features">Scripture · Pencil · Notes · Companion · Quiz Me · Collections · Activity</div>
 </div>
 <div class="ss-continuity"><span>PSALM 119:105</span><i></i><span data-label>A beginning</span></div><div class="ss-progress"></div>
 </div>
 <div class="ss-controls" ${controls?'':'hidden'}><button data-play aria-label="Play showcase">Play</button><button data-replay>Replay</button><input type="range" min="0" max="59000" step="1" value="0" aria-label="Showcase position"><span class="ss-time">0:00 / 0:59</span><button data-full>Expand ↗</button></div>
 <div class="ss-manual" hidden><span>Reduced motion · choose a scene</span>${labels.map((l,i)=>`<button data-jump="${i}">${i+1}</button>`).join('')}</div>
 <p class="ss-summary">A verse becomes handwriting, a note, a study question, a quiz and a connected collection. Activity, appearance and available narration support the session. Reconstructed interface; fictional examples; silent presentation.</p>`;
 container.replaceChildren(root);
 const find=s=>root.querySelector(s), all=s=>[...root.querySelectorAll(s)];
 const sceneEls=all('.ss-scene'), media=matchMedia('(prefers-reduced-motion: reduce)');
 const stage=find('.ss-stage'), playBtn=find('[data-play]'), seekInput=find('input'), timeLabel=find('.ss-time');
 const cleanup=[];let time=clamp(Number.isFinite(initialTimeMs)?initialTimeMs:0,0,durationMs),wanted=false,dead=false,raf=0,last=0,dialog=null;
 const suspended=new Set(document.hidden?['hidden']:[]), home=document.createComment('sophia-showcase-home');container.insertBefore(home,root);
 const on=(el,event,fn)=>{el.addEventListener(event,fn);cleanup.push(()=>el.removeEventListener(event,fn));};
 const amount=(local,start,duration)=>media.matches?1:ease((local-start)/duration);
 const set=(el,props)=>{for(const [k,v] of Object.entries(props))el.style[k]=v;};
 const active=()=>wanted&&!dead&&!media.matches&&!suspended.size;
 function render(){
  const index=starts.findLastIndex(t=>time>=t),i=Math.max(0,index),l=time-starts[i],d=lengths[i],reduced=media.matches;
  root.dataset.activeScene=String(i);
  sceneEls.forEach((el,j)=>{
   el.hidden=i!==j;if(i!==j)return;
   const entry=reduced||i===0?1:ease(l/650),exit=reduced||i===8?1:clamp((d-l)/500);
   set(el,{opacity:String(entry*exit),transform:`translateY(${(1-entry)*12}px) scale(${mix(.985,1,entry)})`});
  });
  const sc=sceneEls[i],q=s=>sc.querySelector(s),qa=s=>[...sc.querySelectorAll(s)];
  switch(i){
   case 0:{
    qa('.ss-opening-verse>*').forEach((el,j)=>{const a=amount(l,200+j*350,1300);set(el,{opacity:String(a),transform:`translate(${(1-a)*(j===1?-90:80)}px,${(1-a)*30}px)`});});
    q('.ss-opening-line path').style.strokeDashoffset=String(1-amount(l,400,2200));
    break;
   }
   case 1:{
    const a=amount(l,0,900);set(q('.ss-reader'),{transform:`perspective(1000px) rotateY(${mix(-14,0,a)}deg) rotateZ(${mix(5,0,a)}deg) translateX(${mix(80,0,a)}px)`});
    qa('.ss-ink path').forEach((el,j)=>el.style.strokeDashoffset=String(1-amount(l,900+j*730,800)));
    const n=amount(l,2800,700);set(q('.ss-margin-note'),{clipPath:`inset(0 ${100*(1-n)}% 0 0)`});
    const p=clamp((l-900)/2300);set(q('.ss-pencil'),{left:`${mix(17,80,p)}%`,top:`${42+Math.sin(p*7)*8}%`,opacity:String(reduced?0:clamp((l-500)/300)*clamp((3500-l)/300))});
    break;
   }
   case 2:{
    const a=amount(l,0,1100),b=amount(l,900,1500);set(q('.ss-quote-object'),{transform:`translate(${mix(90,0,a)}%,${mix(35,0,a)}%) rotate(${mix(7,-3,a)}deg)`});
    set(q('.ss-note-object'),{opacity:String(b),transform:`translate(${mix(-65,0,b)}%,${mix(-15,0,b)}%) rotate(${mix(-9,2,b)}deg)`});
    q('.ss-canvas-ink path').style.strokeDashoffset=String(1-amount(l,2400,1000));
    q('.ss-handwritten').style.opacity=String(amount(l,2700,700));
    qa('.ss-formats>span').forEach((el,j)=>{const a=amount(l,2400+j*140,550);set(el,{opacity:String(a),transform:`translateY(${(1-a)*20}px)`});});break;
   }
   case 3:{
    const a=amount(l,0,900);set(q('.ss-attachment'),{transform:`translate(${mix(-130,0,a)}%,${mix(40,0,a)}px)`,opacity:String(a)});
    q('.ss-question span').style.clipPath=`inset(0 ${100*(1-amount(l,900,1300))}% 0 0)`;
    const b=amount(l,2300,1300);set(q('.ss-answer'),{opacity:String(b),transform:`translateY(${(1-b)*35}px)`,clipPath:`inset(0 0 ${100*(1-b)}% 0)`});
    q('.ss-chat-disclosure').style.opacity=String(b);break;
   }
   case 4:{
    const a=amount(l,0,900);set(q('.ss-quiz'),{transform:`perspective(900px) rotateX(${mix(12,0,a)}deg) scale(${mix(.9,1,a)})`});
    const chosen=reduced||l>=1650,answered=reduced||l>=2600;
    q('.ss-true').classList.toggle('ss-chosen',chosen);q('.ss-true span').style.opacity=chosen?'1':'0';
    q('.ss-submit').style.opacity=answered?'0':'1';const b=amount(l,2200,800);set(q('.ss-feedback'),{opacity:String(b),transform:`translateY(${(1-b)*20}px)`});break;
   }
   case 5:{
    const gather=amount(l,1100,1600),enter=amount(l,0,1100);
    qa('.ss-file').forEach((el,j)=>{set(el,{opacity:String(enter),transform:`translate(${(1-gather)*[-18,32,-12][j]}%,${(1-gather)*[-15,-35,24][j]}%) rotate(${(1-gather)*[-9,11,-4][j]}deg)`});});
    const folder=amount(l,1700,1300);set(q('.ss-folder'),{opacity:String(folder),transform:`translateY(${(1-folder)*-30}px)`});
    q('.ss-assign').style.opacity=String(amount(l,400,500)*(1-amount(l,2600,700)));break;
   }
   case 6:{
    const a=amount(l,0,1100),b=amount(l,2300,1100);q('.ss-ring-fill').style.strokeDashoffset=String(1-mix(.72,1,a));
    q('.ss-timer-center strong').textContent=reduced||l>=1100?'15:00':l>=550?'14:59':'14:58';
    const saved=reduced||l>=2200;q('.ss-timer-state').textContent=saved?'✓ Session saved':'Finish session →';
    qa('[data-bar]').forEach((el,j)=>el.style.transform=`scaleY(${amount(l,2300+j*85,600)})`);
    q('.ss-saved-session').style.opacity=String(amount(l,1400,800));q('.ss-history-disclosure').style.opacity=String(b);break;
   }
   case 7:{
    const preset=reduced||l>=2200?2:l>=1100?1:0;const themes=[['#e9f0ee','#253535','#287066','SophiaLora','Quiet Sage'],['#f5e5c6','#382b1d','#9f5317','SophiaEB','Sepia Notes'],['#202633','#eff1f4','#bac6d4','SophiaCormorant','Firmament’s Library']];
    const t=themes[preset],r=q('.ss-theme-reader');r.style.setProperty('--ss-paper',t[0]);r.style.setProperty('--ss-ink',t[1]);r.style.setProperty('--ss-accent',t[2]);r.style.setProperty('--ss-reading',t[3]);q('.ss-preset-name').textContent=t[4];qa('.ss-swatches i').forEach((el,j)=>el.classList.toggle('ss-selected-swatch',j===preset));
    q('.ss-audio-track i').style.transform=`scaleX(${mix(.2,.56,amount(l,2200,1000))})`;break;
   }
   case 8:{
    const a=amount(l,0,1300),b=amount(l,1600,1500);
    qa('.ss-finale-card').forEach((el,j)=>set(el,{transform:`translate(${mix((j-1)*-65,(j-1)*8,a)}%,${(1-a)*50}px) rotate(${(j-1)*mix(0,8,a)}deg)`,opacity:String(mix(0,.16,a)*(1-b))}));
    set(q('.ss-end-brand'),{opacity:String(b),transform:`translateY(${(1-b)*-25}px)`});
    set(q('h2'),{transform:`translateY(${mix(-12,0,b)}px)`});q('.ss-end-features').style.opacity=String(b);break;
   }
  }
  find('[data-label]').textContent=labels[i];find('.ss-progress').style.transform=`scaleX(${time/durationMs})`;seekInput.value=String(Math.round(time));
  timeLabel.textContent=`0:${String(Math.floor(time/1000)).padStart(2,'0')} / 0:59`;
  playBtn.textContent=wanted?'Pause':'Play';playBtn.setAttribute('aria-label',wanted?'Pause showcase':'Play showcase');
  playBtn.disabled=reduced;find('[data-replay]').disabled=reduced;find('.ss-manual').hidden=!reduced;
  all('[data-jump]').forEach((el,j)=>el.setAttribute('aria-pressed',String(i===j)));
 }
 function stopFrame(){cancelAnimationFrame(raf);raf=0;last=0;}
 function schedule(){if(active()&&!raf)raf=requestAnimationFrame(tick);}
 function tick(now){raf=0;if(!active()){last=0;return;}if(last)time=Math.min(durationMs,time+now-last);last=now;if(time>=durationMs){wanted=false;last=0;}render();schedule();}
 function suspend(reason,yes){yes?suspended.add(reason):suspended.delete(reason);stopFrame();schedule();}
 const observer=new IntersectionObserver(entries=>suspend('offscreen',!entries[0].isIntersecting));
 const controller={
  play(){if(dead||media.matches)return;if(time>=durationMs)time=0;wanted=true;last=0;render();schedule();},
  pause(){if(dead)return;wanted=false;stopFrame();render();},
  replay(){if(dead||media.matches)return;time=0;controller.play();},
  seek(ms){if(dead)return;if(!Number.isFinite(ms))throw new TypeError('Seek time must be finite');time=clamp(ms,0,durationMs);last=0;if(time===durationMs)wanted=false;render();},
  getState(){return{timeMs:time,durationMs,playing:active()};},
  destroy(){if(dead)return;dead=true;wanted=false;stopFrame();observer.disconnect();cleanup.forEach(fn=>fn());if(dialog?.open)dialog.close();dialog?.remove();root.remove();home.remove();}
 };
 on(playBtn,'click',()=>wanted?controller.pause():controller.play());on(find('[data-replay]'),'click',()=>controller.replay());on(seekInput,'input',()=>controller.seek(Number(seekInput.value)));
 on(document,'visibilitychange',()=>suspend('hidden',document.hidden));on(media,'change',()=>{if(media.matches){controller.pause();time=56000;}render();});
 all('[data-jump]').forEach(el=>on(el,'click',()=>controller.seek(starts[Number(el.dataset.jump)]+lengths[Number(el.dataset.jump)]-1000)));
 const expand=find('[data-full]');
 on(expand,'click',()=>{
  if(!dialog){dialog=document.createElement('dialog');dialog.className='ss-dialog';dialog.setAttribute('aria-label','Expanded Sophia Scriptura showcase');dialog.innerHTML='<div class="ss-dialog-head"><span>SOPHIA SCRIPTURA</span><button autofocus>Close ✕</button></div><div class="ss-dialog-host"></div>';document.body.append(dialog);on(dialog.querySelector('button'),'click',()=>dialog.close());on(dialog,'close',()=>{if(dead)return;home.after(root);expand.hidden=false;expand.focus();});}
  dialog.querySelector('.ss-dialog-host').append(root);expand.hidden=true;dialog.showModal();
 });
 observer.observe(root);if(media.matches)time=56000;render();return controller;
}

// Normalize controls only; the project scene renderer above remains independent.
export function mountBravado(container,options={}){
 const initial=options.initialTimeMs??options.initialTime??0;
 const controller=mountOriginalBravado(container,{...options,initialTimeMs:initial,initialTime:initial,autoplay:false,controls:false,showControls:false});
 return attachShowcaseControls(container,controller,{title:'Sophia Scriptura',root:'.ss-root',stage:'.ss-stage',controls:'.ss-controls',hide:'.ss-summary,.ss-manual',timeClass:'ss-time',scenes:starts.map((startMs,i)=>({startMs,settledMs:startMs+lengths[i]-1000}))},options);
}
