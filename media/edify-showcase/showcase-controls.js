/** Shared player behavior. Project modules retain their own scene rendering and theme. */
export function attachShowcaseControls(container,controller,theme,options={}){
 const element=container.lastElementChild;
 const surface=element.shadowRoot?.querySelector(theme.root)||element;
 const oldControls=surface.querySelector(theme.controls);
 const hidden=[oldControls,...surface.querySelectorAll(theme.hide)];
 for(const node of hidden){if(!node)continue;node.hidden=true;node.inert=true;node.setAttribute('aria-hidden','true');node.style.setProperty('display','none','important');}
 const styles=document.createElement('style');
 styles.textContent=`
 [data-bv-controls]{display:grid!important;grid-template-columns:repeat(4,32px) minmax(20px,1fr) max-content 32px!important;align-items:center;gap:4px!important;padding:8px 6px!important;box-sizing:border-box;width:100%;max-width:100%}
 [data-bv-controls] button{min-height:44px!important;height:44px!important;min-width:0!important;width:100%!important;padding:0!important;display:grid;place-items:center;cursor:pointer;box-sizing:border-box}
 [data-bv-controls] button svg{display:block;width:18px;height:18px;pointer-events:none}
 [data-bv-controls] input{min-width:0!important;width:100%!important;max-width:100%;min-height:44px;margin:0;box-sizing:border-box}
 [data-bv-controls] output{display:inline-block!important;white-space:nowrap;font-size:10px!important;line-height:1.2;letter-spacing:0}
 [data-bv-controls] :focus-visible{outline:2px solid currentColor;outline-offset:2px}
 @container(max-width:420px){[data-bv-controls]{grid-template-columns:repeat(4,28px) minmax(20px,1fr) max-content 28px!important;gap:3px!important;padding-left:4px!important;padding-right:4px!important}}
 `;
 surface.append(styles);
 const controls=document.createElement('div');controls.className=oldControls?.className||'';controls.dataset.bvControls='';controls.setAttribute('role','group');controls.setAttribute('aria-label','Showcase playback');
 const icons={
  play:'<path d="m9 5 11 7-11 7Z"/>',pause:'<path d="M8 5v14M16 5v14"/>',
  replay:'<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>',
  previous:'<path d="M6 5v14M18 5l-8 7 8 7"/>',next:'<path d="M18 5v14M6 5l8 7-8 7"/>',
  expand:'<path d="M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>'
 };
 const icon=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name]}</svg>`;
 const button=(name,label)=>`<button type="button" data-bv="${name}" aria-label="${label} showcase" title="${label}">${icon(name)}</button>`;
 controls.innerHTML=button('play','Play')+button('replay','Replay')+
  `<button type="button" data-bv="previous" aria-label="Previous scene" title="Previous scene">${icon('previous')}</button><button type="button" data-bv="next" aria-label="Next scene" title="Next scene">${icon('next')}</button><input type="range" min="0" step="1" value="0" aria-label="Showcase position"><output class="bv-time"></output>`+button('expand','Expand');
 if(options.controls===false||options.showControls===false)controls.style.setProperty('display','none','important');
 surface.append(controls);
 const play=controls.querySelector('[data-bv=play]'),replay=controls.querySelector('[data-bv=replay]'),range=controls.querySelector('input'),time=controls.querySelector('output'),expand=controls.querySelector('[data-bv=expand]');
 if(theme.timeClass)time.classList.add(theme.timeClass);
 // Retain each project's primary button treatment without invoking its original handlers.
 if(theme.playAttribute)play.setAttribute(theme.playAttribute,'play');
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const scope=element.getRootNode();
 const presentation=scope instanceof ShadowRoot?scope.host:element;
 const marker=document.createComment('showcase placement');presentation.before(marker);
 const format=ms=>`${Math.floor(ms/60000)}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}`;
 let dead=false,wanted=false,inView=true,dialog,last='',started=false,manuallyPaused=false;
 const state=()=>{const s=controller.getState();return{...s,playing:!!s.playing&&inView&&!document.hidden&&!motion.matches&&!dead};};
 const scenes=theme.scenes;
 function indexAt(ms){return Math.max(0,scenes.findLastIndex(scene=>ms>=scene.startMs));}
 function draw(){
  if(dead)return;const s=state();if(s.timeMs>=s.durationMs)wanted=false;
  const snapshot=`${Math.round(s.timeMs)}:${wanted}:${motion.matches}:${!!dialog?.open}`;
  if(snapshot===last)return;last=snapshot;
  play.innerHTML=icon(wanted?'pause':'play');play.setAttribute('aria-label',wanted?'Pause showcase':'Play showcase');play.title=wanted?'Pause':'Play';
  play.disabled=motion.matches;replay.disabled=motion.matches;
  range.max=String(s.durationMs);range.value=String(s.timeMs);range.setAttribute('aria-valuetext',`${format(s.timeMs)} of ${format(s.durationMs)}`);
  time.textContent=`${format(s.timeMs)} / ${format(s.durationMs)}`;
  expand.innerHTML=icon(dialog?.open?'close':'expand');expand.setAttribute('aria-label',dialog?.open?'Close showcase':'Expand showcase');expand.title=dialog?.open?'Close':'Expand';
 }
 const api={
  play(){if(dead||motion.matches)return;wanted=true;started=true;manuallyPaused=false;controller.play();draw();},
  pause(){if(dead)return;wanted=false;manuallyPaused=true;controller.pause();draw();},
  replay(){if(dead||motion.matches)return;wanted=true;started=true;manuallyPaused=false;controller.replay();draw();},
  seek(ms){if(dead||!Number.isFinite(ms))return;controller.seek(Math.min(controller.getState().durationMs,Math.max(0,ms)));draw();},
  getState:state,
  destroy(){if(dead)return;dead=true;wanted=false;clearInterval(timer);observer.disconnect();motion.removeEventListener('change',motionChange);controls.removeEventListener('click',click);range.removeEventListener('input',seek);dialog?.removeEventListener('close',closed);if(dialog?.contains(presentation))marker.after(presentation);dialog?.remove();controller.destroy();marker.remove();}
 };
 function navigate(delta){api.pause();const scene=scenes[Math.min(scenes.length-1,Math.max(0,indexAt(state().timeMs)+delta))];api.seek(scene.settledMs);}
 function closed(){if(dead)return;controller.pause();marker.after(presentation);if(wanted&&!motion.matches)controller.play();draw();expand.focus();}
 function toggleExpanded(){
  if(dialog?.open){dialog.close();return;}
  if(!dialog){
   dialog=document.createElement('dialog');dialog.setAttribute('aria-label',`${theme.title} expanded showcase`);
   Object.assign(dialog.style,{width:'min(1200px,96vw)',maxWidth:'96vw',maxHeight:'94vh',padding:'12px',boxSizing:'border-box',border:'1px solid',borderRadius:'8px',overflow:'auto'});
   const look=getComputedStyle(oldControls||surface),buttonLook=getComputedStyle(play);
   dialog.style.background=look.backgroundColor==='rgba(0, 0, 0, 0)'?getComputedStyle(surface.querySelector(theme.stage)||surface).backgroundColor:look.backgroundColor;
   dialog.style.color=look.color;dialog.style.borderColor=buttonLook.borderColor;
   document.body.append(dialog);dialog.addEventListener('close',closed);
  }
  controller.pause();dialog.append(presentation);dialog.showModal();if(wanted&&!motion.matches)controller.play();draw();expand.focus();
 }
 function click(event){const action=event.target.closest('[data-bv]')?.dataset.bv;if(!action)return;event.stopPropagation();if(action==='play')wanted?api.pause():api.play();if(action==='replay')api.replay();if(action==='previous')navigate(-1);if(action==='next')navigate(1);if(action==='expand')toggleExpanded();}
 function seek(event){event.stopPropagation();api.seek(Number(range.value));}
 function motionChange(){if(motion.matches){api.pause();api.seek(scenes[indexAt(state().timeMs)].settledMs);}draw();}
 controls.addEventListener('click',click);range.addEventListener('input',seek);motion.addEventListener('change',motionChange);
 const observer=new IntersectionObserver(entries=>{
  const entry=entries[0];inView=entry.isIntersecting&&entry.intersectionRatio>=0.35;
  if(options.autoplay){
   if(!inView)controller.pause();
   else if(!motion.matches&&!manuallyPaused&&controller.getState().timeMs<controller.getState().durationMs&&(wanted||!started)){
    wanted=true;started=true;controller.play();
   }
   draw();
  }
 },{threshold:[0,0.35]});observer.observe(element);
 controller.pause();if(motion.matches){const initial=options.initialTimeMs??options.initialTime??0;controller.seek(scenes[indexAt(initial)].settledMs);}
 const timer=setInterval(draw,100);draw();return api;
}
