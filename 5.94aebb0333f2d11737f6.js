(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{KgRm:function(t,e,i){"use strict";i.r(e),i.d(e,"SettingModule",function(){return N});var o=i("3Pt+"),n=i("ofXK"),a=i("tyNb"),s=i("fXoL"),c=i("CTL+"),r=i("bTqV"),m=i("NFeN"),l=i("Wp6s"),b=i("wZkO");function d(t,e){if(1&t&&(s.Tb(0,"a",4),s.yc(1),s.Sb()),2&t){const t=e.$implicit,i=s.ec();s.jc("routerLink",t.route)("active",i.router.url==t.route),s.Bb(1),s.Ac(" ",t.label," ")}}let u=(()=>{class t{constructor(t){this.router=t,this.links=[{route:"/setting/audio",label:"\xc1udio"},{route:"/setting/video",label:"V\xeddeo"}]}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(a.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["speek-setting"]],decls:10,vars:2,consts:[["routerLink","/","aria-label","Home","mat-icon-button",""],[1,"brand-name"],["mat-tab-nav-bar","","mat-stretch-tabs","","dynamicHeight","",3,"backgroundColor"],["mat-tab-link","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","",3,"routerLink","active"]],template:function(t,e){1&t&&(s.Tb(0,"speek-toolbar"),s.Tb(1,"a",0),s.Tb(2,"mat-icon"),s.yc(3,"arrow_backward"),s.Sb(),s.Sb(),s.Tb(4,"span",1),s.yc(5," configura\xe7\xf5es "),s.Sb(),s.Sb(),s.Tb(6,"mat-card"),s.Tb(7,"nav",2),s.wc(8,d,2,3,"a",3),s.Sb(),s.Ob(9,"router-outlet"),s.Sb()),2&t&&(s.Bb(7),s.jc("backgroundColor","primary"),s.Bb(1),s.jc("ngForOf",e.links))},directives:[c.a,a.c,r.a,m.a,l.a,b.b,n.j,a.e,b.a],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   .mat-card[_ngcontent-%COMP%]{border:2px dotted #464646;transition:height .5s ease-in-out}"]}),t})();var h=i("mrSG"),p=i("7+mf"),v=i("0Z/k"),f=i("GhD8"),g=i("XNiG"),O=i("2Vo4"),S=i("1G5W"),C=i("f0Cb"),_=i("MutI"),y=i("5RNC"),M=i("kmnG"),P=i("d3UM"),T=i("FKr1");const w=["canvas"];function j(t,e){if(1&t&&(s.Tb(0,"mat-option",8),s.yc(1),s.Sb()),2&t){const t=e.$implicit;s.jc("value",t),s.Bb(1),s.Ac(" ",t.label," ")}}let x=(()=>{class t{constructor(t){this.userSetup=t,this._destroy=new g.a,this.form=new p.o,this._devices=new O.a([]),this.devices$=this._devices.asObservable()}ngOnInit(){const t=this.userSetup.getStoredValue();this.form.patchValue(t||{})}ngAfterViewInit(){this.form.getDevices("audioinput").then(t=>{this._devices.next(t.map(t=>t.toJSON())),!this.form.audio.value&&this.form.pitch.enabled&&this.form.pitch.disable(),this.form.audio.value&&this.getStream(this.form.audio.value)}),this.form.valueChanges.pipe(Object(S.a)(this._destroy)).subscribe(({pitch:t})=>{this.form.valid&&(this.voice.setPitchOffset(t),this.userSetup.update(this.form.value))})}onDeviceChange(t){t&&(this.getStream(t),this.form.pitch.disabled&&this.form.pitch.enable())}getStream({deviceId:t}){return Object(h.a)(this,void 0,void 0,function*(){return Object(v.b)(this.stream),navigator.mediaDevices.getUserMedia({audio:{deviceId:t,echoCancellation:!0,noiseSuppression:!0}}).then(t=>this.gotStream(t))})}gotStream(t){this.stream=t;const e=new AudioContext,i=e.createMediaStreamSource(t),o=e.createAnalyser(),n=e.createDelay();n.delayTime.value=0,i.connect(n),this.voice=new v.a(e);const{value:a}=this.form.pitch;this.voice.setPitchOffset(a),n.connect(this.voice.input),this.voice.output.connect(e.destination),this.voice.output.connect(o),Object(p.q)(this.canvas.nativeElement,o),this.voice.setPitchOffset(this.form.pitch.value)}compareFn(t,e){return t&&e?t.deviceId===e.deviceId:t===e}ngOnDestroy(){this.stream&&Object(v.b)(this.stream),this._destroy.next(),this._destroy.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(f.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["speek-audio"]],viewQuery:function(t,e){if(1&t&&s.Bc(w,1),2&t){let t;s.nc(t=s.bc())&&(e.canvas=t.first)}},decls:27,vars:5,consts:[[3,"formGroup"],["canvas",""],["mat-subheader",""],["min","-1.2","max","1.2","step","0.2","thumbLabel","","formControlName","pitch"],["color","accent","appearance","outline"],["placeholder","Selecione um dispositivo","formControlName","audio",3,"compareWith","selectionChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(s.Tb(0,"form",0),s.Ob(1,"canvas",null,1),s.Ob(3,"mat-divider"),s.Tb(4,"mat-list"),s.Tb(5,"h3",2),s.yc(6,"Arraste para ajustar o tom da sua voz"),s.Sb(),s.Sb(),s.Tb(7,"section"),s.Tb(8,"span"),s.yc(9,"-1.2"),s.Sb(),s.Ob(10,"mat-slider",3),s.Tb(11,"span"),s.yc(12,"1.2"),s.Sb(),s.Sb(),s.Tb(13,"mat-list"),s.Tb(14,"h3",2),s.yc(15,"Sua voz \xe9 normalizada fica em 0 (zero)"),s.Sb(),s.Sb(),s.Ob(16,"mat-divider"),s.Tb(17,"mat-form-field",4),s.Tb(18,"mat-select",5),s.ac("selectionChange",function(t){return e.onDeviceChange(t.value)}),s.Tb(19,"mat-option",6),s.yc(20," Selecione um dispositivo "),s.Sb(),s.wc(21,j,2,2,"mat-option",7),s.fc(22,"async"),s.Sb(),s.Tb(23,"mat-hint"),s.yc(24,"Este ser\xe1 seu microfone"),s.Sb(),s.Tb(25,"mat-error"),s.yc(26,"Selecione um dispositivo"),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.jc("formGroup",e.form),s.Bb(18),s.jc("compareWith",e.compareFn),s.Bb(3),s.jc("ngForOf",s.gc(22,3,e.devices$)))},directives:[o.q,o.m,o.h,C.a,_.a,_.e,y.a,o.l,o.f,M.c,P.a,T.j,n.j,M.f,M.b],pipes:[n.b],styles:["[_nghost-%COMP%]{height:390px}[_nghost-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%]{position:unset}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .mat-list.mat-list-base[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 10px}[_nghost-%COMP%]   form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{letter-spacing:2px;display:inline-flex}[_nghost-%COMP%]   form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]   .mat-slider[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%] + .mat-list[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{margin-top:-20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{bottom:0;width:300px;margin:10px}"]}),t})();const k=["video"];function F(t,e){if(1&t&&(s.Tb(0,"mat-option",11),s.yc(1),s.Sb()),2&t){const t=e.$implicit;s.jc("value",t),s.Bb(1),s.Ac(" ",t.label," ")}}let B=(()=>{class t{constructor(t){this.userSetup=t,this.form=new p.o,this._devices=new O.a([]),this.devices$=this._devices.asObservable()}ngOnInit(){const t=this.userSetup.getStoredValue();this.form.patchValue(t||{})}ngAfterViewInit(){this.form.getDevices("videoinput").then(t=>{this._devices.next(t.map(t=>t.toJSON()))})}onDeviceChange(t){t&&this.getStream(t),this.form.valid&&this.userSetup.update(this.form.value)}getStream({deviceId:t}){return Object(h.a)(this,void 0,void 0,function*(){return navigator.mediaDevices.getUserMedia({video:{deviceId:t}}).then(t=>this.gotStream(this.video,t))})}gotStream({nativeElement:t},e){t.srcObject=e,this.stream=e}toggleVideo(){var t;(null===(t=this.stream)||void 0===t?void 0:t.active)?(Object(v.b)(this.stream),this.stopVideo(this.video)):this.getStream(this.form.video.value)}stopVideo({nativeElement:t}){t.srcObject=null}compareFn(t,e){return t&&e?t.deviceId===e.deviceId:t===e}ngOnDestroy(){this.stream&&Object(v.b)(this.stream)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(f.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["speek-video"]],viewQuery:function(t,e){if(1&t&&s.Bc(k,1),2&t){let t;s.nc(t=s.bc())&&(e.video=t.first)}},decls:27,vars:7,consts:[["muted","","autoplay","","playsinline","","poster","/assets/images/speek-light.svg"],["video",""],["mat-subheader",""],["mat-list-icon",""],["mat-line",""],["type","button","mat-icon-button","",3,"disabled","click"],[3,"formGroup"],["color","accent","appearance","outline"],["placeholder","Selecione um dispositivo","formControlName","video",3,"compareWith","selectionChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(s.Tb(0,"section"),s.Ob(1,"video",0,1),s.Sb(),s.Ob(3,"mat-divider"),s.Tb(4,"mat-list"),s.Tb(5,"h3",2),s.yc(6,"Ative ou desative o preview de v\xeddeo"),s.Sb(),s.Tb(7,"mat-list-item"),s.Tb(8,"mat-icon",3),s.yc(9,"video_settings"),s.Sb(),s.Tb(10,"h3",4),s.yc(11,"V\xeddeo"),s.Sb(),s.Tb(12,"button",5),s.ac("click",function(){return e.toggleVideo()}),s.Tb(13,"mat-icon"),s.yc(14),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Ob(15,"mat-divider"),s.Tb(16,"form",6),s.Tb(17,"mat-form-field",7),s.Tb(18,"mat-select",8),s.ac("selectionChange",function(t){return e.onDeviceChange(t.value)}),s.Tb(19,"mat-option",9),s.yc(20," Selecione um dispositivo "),s.Sb(),s.wc(21,F,2,2,"mat-option",10),s.fc(22,"async"),s.Sb(),s.Tb(23,"mat-hint"),s.yc(24,"Esta ser\xe1 sua c\xe2mera"),s.Sb(),s.Tb(25,"mat-error"),s.yc(26,"Selecione um dispositivo"),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Bb(12),s.jc("disabled",!e.form.video.value),s.Bb(2),s.Ac(" ",null!=e.stream&&e.stream.active?"videocam":"videocam_off"," "),s.Bb(2),s.jc("formGroup",e.form),s.Bb(2),s.jc("compareWith",e.compareFn),s.Bb(3),s.jc("ngForOf",s.gc(22,5,e.devices$)))},directives:[C.a,_.a,_.e,_.c,m.a,_.b,T.h,r.b,o.q,o.m,o.h,M.c,P.a,o.l,o.f,T.j,n.j,M.f,M.b],pipes:[n.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:390px}[_nghost-%COMP%]   .mat-list.mat-list-base[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   .mat-divider[_ngcontent-%COMP%]{position:unset}[_nghost-%COMP%] > section[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;height:0}[_nghost-%COMP%] > section[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{bottom:0;width:300px;margin:10px}"]}),t})();var V=i("W5dm");const I=[{path:"",component:u,children:[{path:"",redirectTo:"audio"},{path:"audio",component:x},{path:"video",component:B}]}];let N=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,p.m,V.a,o.o,a.d.forChild(I)]]}),t})()}}]);