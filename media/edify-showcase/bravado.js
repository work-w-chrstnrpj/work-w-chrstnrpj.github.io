import {attachShowcaseControls} from './showcase-controls.js';
const DUR=48000, STARTS=[0,6000,14000,21000,31000,41000], ENDS=[6000,14000,21000,31000,41000,48000], HOLDS=[3500,4500,3500,6000,5000,2500];
const MESSAGE='Meet me at noon.', CODE1=";==} s= 0} 8''8d", CODE2='yUycyces c^yc Ooes j^QgQgj^*n';
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const ease=x=>1-Math.pow(1-clamp(x),3);
const ramp=(t,start,duration)=>ease((t-start)/duration);
const top=n=>`<div class="ed-top"><span class="ed-logo">E<i>/</i>Dify</span><span>CHROME EXTENSION</span><span class="ed-number">0${n} / 06</span></div>`;
const foot=(a,b)=>`<div class="ed-foot"><span>${a}</span><span>${b}</span></div>`;
function popup(decode=false){return `<div class="ed-tool ed-paper"><div class="ed-tabs"><span class="ed-tab ${decode?'':'active'}">Encrypt</span><span class="ed-tab ${decode?'active':''}">Decrypt</span></div><span class="ed-label">Seed-Multiplier</span><div class="ed-field">${decode?'17-2':'17-1'}</div><span class="ed-label">Message</span><div class="ed-field ed-input">${decode?CODE2:MESSAGE}</div><div class="ed-process">Process <span>↗</span></div><span class="ed-label">Output</span><div class="ed-field ed-output"></div><div class="ed-actions"><span>Copy</span><span>Export .txt ↗</span></div></div><div class="ed-pointer"></div>`}
const markup=`<div class="ed-root"><div class="ed-stage" role="img" aria-label="Animated E/Dify demonstration: encode a message, change its pattern, process a file, copy or export, then decode with the matching seed and multiplier.">
<section class="ed-scene ed-hook">${top(1)}<h2 class="ed-head"><span>Same message.</span><span>Different language.</span></h2><div class="ed-hook-strip ed-strip ed-paper"><span class="ed-original">Meet me at noon.</span><span class="ed-changing"></span></div>${foot('01 — THE OTHER SIDE OF A SENTENCE','TEXT ↔ CODE')}</section>
<section class="ed-scene ed-encode">${top(2)}<h2 class="ed-head">Words in. Code out.</h2><div class="ed-side"><div class="ed-big-slash">/</div><span>One message.<br>Another form.</span></div>${popup()}<div class="ed-bridge">17-1 → a seeded pattern</div>${foot('02 — TYPE. SET. PROCESS.','ENCODE')}</section>
<section class="ed-scene ed-pattern">${top(3)}<h2 class="ed-head">Change the pattern.</h2><div class="ed-dials"><div class="ed-dial"><small>Seed</small><div class="ed-digit">17</div></div><div class="ed-times">/</div><div class="ed-dial"><small>Multiplier</small><div class="ed-digit ed-multiplier">1</div></div></div><div class="ed-pattern-note">Seed-Multiplier<br><b class="ed-pattern-key">17-1</b><br>Same words · new pattern</div><div class="ed-pattern-code ed-paper ed-strip"></div>${foot('03 — MEET ME AT NOON.','YOUR PATTERN')}</section>
<section class="ed-scene ed-files">${top(4)}<h2 class="ed-head">A note. A file. A way out.</h2><div class="ed-flow"><div class="ed-file-card ed-file-in"><div class="ed-file-icon">≡</div><div class="ed-filename">note.txt</div><div class="ed-file-content">Meet me<br>at noon.</div></div><div class="ed-flow-line"></div><div class="ed-machine"><span class="ed-kicker">Text / JSON input</span><div class="ed-process">Process ↗</div><span class="ed-label">Output</span><div class="ed-machine-output"></div><span class="ed-pill ed-copy">Copy</span> <span class="ed-pill ed-export">Export .txt</span></div><div class="ed-flow-line"></div><div class="ed-file-card ed-file-out"><div class="ed-file-icon">↧</div><div class="ed-filename">e_msg.txt</div><div class="ed-file-content">${CODE2}</div></div></div><div class="ed-copy-flight">Output → clipboard</div>${foot('04 — FROM FILE TO REUSABLE OUTPUT','COPY / EXPORT')}</section>
<section class="ed-scene ed-decode">${top(5)}<h2 class="ed-head">Bring it back to words.</h2><div class="ed-side"><div class="ed-big-slash">/</div><span>Same pattern.<br>Original meaning.</span></div>${popup(true)}<div class="ed-bridge">17-2 → matching pattern</div>${foot('05 — THE SENTENCE RETURNS','DECODE')}</section>
<section class="ed-scene ed-finish">${top(6)}<div class="ed-end-message">Meet me at noon.</div><div class="ed-end-word">E/Dify</div><div class="ed-end-copy">A little popup.<br>A different way<br>to say it.</div><div class="ed-end-tag">Encode. Decode.<br>Take it with you.</div></section></div>
<div class="ed-controls" aria-label="Showcase playback"><button class="ed-play" type="button">Play</button><button class="ed-replay" type="button" aria-label="Replay showcase">↺</button><button class="ed-prev" type="button" aria-label="Previous scene">←</button><button class="ed-next" type="button" aria-label="Next scene">→</button><input class="ed-seek" type="range" min="0" max="48000" step="100" value="0" aria-label="Showcase position in milliseconds"><span class="ed-time">0:00 / 0:48</span><span class="ed-reduced">Manual scenes</span></div><details class="ed-summary"><summary>About this demonstration</summary><p>E/Dify is a Chrome extension for seeded text encoding and decoding. This reconstructed demonstration uses fictional text and real precomputed algorithm output. It shows typed input, seed-multiplier patterns, text/JSON file input, copying, TXT export, and light/dark modes. It makes no cryptographic security claim. Use the arrow buttons to explore each scene.</p></details></div>`;
function mountOriginalBravado(container,options={}){
 if(!(container instanceof Element))throw new TypeError('A container element is required.');
 const shell=document.createElement('div'); container.append(shell);const shadow=shell.attachShadow({mode:'open'});
 if(options.cssText){const s=document.createElement('style');s.textContent=options.cssText;shadow.append(s)}else{const link=document.createElement('link');link.rel='stylesheet';link.href=new URL('./bravado.css',import.meta.url).href;shadow.append(link)}
 const template=document.createElement('template');template.innerHTML=markup;shadow.append(template.content.cloneNode(true));
 const q=s=>shadow.querySelector(s), root=q('.ed-root'), stage=q('.ed-stage'), scenes=[...shadow.querySelectorAll('.ed-scene')];
 stage.style.setProperty('--ed-ratio',options.aspectRatio||'16 / 10');if(options.controls===false)q('.ed-controls').hidden=true;
 const media=matchMedia('(prefers-reduced-motion: reduce)');let reduced=media.matches,time=clamp(Number(options.initialTime)||0,0,DUR),playing=false,dead=false,raf=0,last=0,suspended=false,inView=true;
 const on=(el,event,fn)=>{el.addEventListener(event,fn);cleanups.push(()=>el.removeEventListener(event,fn))};const cleanups=[];
 const visible=(el,p)=>{el.style.opacity=clamp(p);};
 const translate=(el,x,y,rot=0,scale=1)=>{el.style.transform=`translate(${x}%,${y}%) rotate(${rot}deg) scale(${scale})`};
 function render(){
  let index=STARTS.findLastIndex(x=>time>=x);index=Math.max(0,index);const local=time-STARTS[index],span=ENDS[index]-STARTS[index],t=reduced?HOLDS[index]:local;
  root.dataset.reduced=String(reduced);
  for(let i=0;i<scenes.length;i++){scenes[i].hidden=i!==index;scenes[i].style.opacity=i===index?(reduced?1:Math.min(index===0?1:clamp(local/400),index===5?1:clamp((span-local)/500))):0}
  const s=scenes[index],sq=x=>s.querySelector(x);
  if(index===0){const p=ramp(t,1100,1900);const text=[...MESSAGE].map((c,i)=>i/MESSAGE.length<p?CODE1[i]:c).join('');sq('.ed-changing').textContent=text;translate(sq('.ed-hook-strip'),0,18*(1-ramp(t,400,1000)),-4+4*ramp(t,2500,1000));sq('.ed-changing').style.letterSpacing=`${-.06+.1*Math.sin(p*Math.PI)}em`;}
  if(index===1||index===4){
   const decode=index===4, processAt=decode?2500:2100,revealAt=decode?3100:2700,result=decode?MESSAGE:CODE1;
   translate(sq('.ed-tool'),12*(1-ramp(t,400,900)),10*(1-ramp(t,400,900)),2*(1-ramp(t,400,1500)));
   const p=ramp(t,revealAt,decode?1400:1400);sq('.ed-output').textContent=result.slice(0,Math.ceil(result.length*p));sq('.ed-output').style.boxShadow=p>=1?'0 0 0 1px #bc754d':'none';
   const press=clamp(1-Math.abs(t-(processAt+180))/180);sq('.ed-process').style.transform=`scale(${1-press*.05})`;
   const move=ramp(t,1000,processAt-1000);translate(sq('.ed-pointer'),-100*(1-move),260*move);visible(sq('.ed-pointer'),t<processAt+650?1:1-ramp(t,processAt+650,400));
   visible(sq('.ed-bridge'),ramp(t,decode?4000:3300,600));translate(sq('.ed-bridge'),0,20*(1-ramp(t,decode?4000:3300,600)));
   if(decode)s.style.clipPath=`inset(0 ${100*(1-ramp(t,0,800))}% 0 0)`;
  }
  if(index===2){const p=ramp(t,1500,1500);sq('.ed-multiplier').textContent=t<2100?'1':'2';sq('.ed-pattern-key').textContent=t<2100?'17-1':'17-2';sq('.ed-pattern-code').textContent=t<2100?CODE1:CODE2;translate(sq('.ed-pattern-code'),0,10*(1-ramp(t,2400,1000)),0,.88+.12*p);translate(sq('.ed-dials'),0,12*(1-ramp(t,400,800)));sq('.ed-multiplier').style.color=t<2100?'#191b1e':'#b7462e';}
  if(index===3){const a=ramp(t,400,1300),b=ramp(t,2400,1000),c=ramp(t,4600,1400);translate(sq('.ed-file-in'),-25*(1-a),-15*(1-a),-8*(1-a));sq('.ed-machine-output').textContent=CODE2.slice(0,Math.ceil(CODE2.length*b));sq('.ed-copy').textContent=t>=4000?'Copied':'Copy';sq('.ed-copy').style.background=t>=4000?'#48563f':'transparent';visible(sq('.ed-copy-flight'),ramp(t,3500,350)*(1-ramp(t,5200,600)));translate(sq('.ed-copy-flight'),0,30*ramp(t,3500,1000));visible(sq('.ed-file-out'),c);translate(sq('.ed-file-out'),-50*(1-c),15*(1-c),8*(1-c));sq('.ed-export').style.background=t>=4600?'#7d3d2e':'transparent';}
  if(index===5){translate(sq('.ed-end-word'),0,10*(1-ramp(t,400,1200)),0,.85+.15*ramp(t,400,1200));translate(sq('.ed-end-message'),0,20*(1-ramp(t,1200,1000)),-4);visible(sq('.ed-end-tag'),ramp(t,1800,700));}
  q('.ed-seek').value=String(time);q('.ed-time').textContent=`0:${String(Math.floor(time/1000)).padStart(2,'0')} / 0:48`;q('.ed-play').textContent=playing?'Pause':'Play';
 }
 function tick(now){if(dead||!playing)return;time=Math.min(DUR,time+now-last);last=now;if(time>=DUR)playing=false;render();if(playing)raf=requestAnimationFrame(tick)}
 function pause(){playing=false;suspended=false;cancelAnimationFrame(raf);render()}
 function play(){if(dead||reduced)return;if(time>=DUR)time=0;if(document.hidden||!inView){suspended=true;return}if(playing)return;playing=true;suspended=false;last=performance.now();render();raf=requestAnimationFrame(tick)}
 function seek(ms){if(dead)return;time=clamp(Number(ms)||0,0,DUR);last=performance.now();if(time===DUR){playing=false;cancelAnimationFrame(raf)}render()}
 function replay(){if(dead)return;seek(0);play()}
 function navigate(delta){const i=Math.max(0,STARTS.findLastIndex(x=>time>=x));pause();seek(STARTS[clamp(i+delta,0,5)]+HOLDS[clamp(i+delta,0,5)])}
 function suspension(){const hidden=document.hidden||!inView;if(hidden&&playing){suspended=true;playing=false;cancelAnimationFrame(raf);render()}else if(!hidden&&suspended){suspended=false;play()}}
 on(q('.ed-play'),'click',()=>playing||suspended?pause():play());on(q('.ed-replay'),'click',replay);on(q('.ed-prev'),'click',()=>navigate(-1));on(q('.ed-next'),'click',()=>navigate(1));on(q('.ed-seek'),'input',e=>seek(e.target.value));on(document,'visibilitychange',suspension);
 on(media,'change',()=>{reduced=media.matches;if(reduced)pause();render()});
 const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;suspension()});observer.observe(shell);
 render();return {play,pause,replay,seek,getState:()=>({timeMs:time,durationMs:DUR,playing}),destroy(){if(dead)return;dead=true;cancelAnimationFrame(raf);observer.disconnect();cleanups.forEach(fn=>fn());shell.remove()}};
}

// Normalize controls only; the project scene renderer above remains independent.
export function mountBravado(container,options={}){
 const initial=options.initialTimeMs??options.initialTime??0;
 const controller=mountOriginalBravado(container,{...options,initialTimeMs:initial,initialTime:initial,autoplay:false,controls:false,showControls:false});
 return attachShowcaseControls(container,controller,{title:'E/Dify',root:'.ed-root',stage:'.ed-stage',controls:'.ed-controls',hide:'.ed-summary',timeClass:'ed-time',scenes:STARTS.map((startMs,i)=>({startMs,settledMs:startMs+HOLDS[i]}))},options);
}
