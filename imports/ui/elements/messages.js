const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), ajφ = Symbol(), akφ = Symbol(), εi = Symbol(), alφ = Symbol(), amφ = Symbol(), εslot = Symbol();
import {styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createElement as imba_createElement, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag} from 'imba'/*$path$*/;

/*body*/
class AppMessageComponent extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ;
		super[Ψ__init__](...arguments);
		this.icon = $$ ? $$.icon : undefined;
		this.status = ($$ && (vφ = $$.status) !== undefined) ? (vφ) : "info";
		
	}
	get iconClass(){
		
		if (this.icon == false) { return false };
		if (this.icon) { return this.icon };
		if (this.status == "info") { return "info-circle" };
		if (this.status == "success") { return "check-circle" };
		if (this.status == "warning") { return "exclamation-circle" };
		
	}
	render(){
		var τself, ιself, Δself, υself, φ = this._ns_ || '', τi, ιi, Δi, υi, τslot;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		(υself=this.status,υself===τself[akφ]||(Δself|=2,τself[akφ]=υself));
		((!ιself||Δself&2) && τself.flagSelf$((τself[akφ]||'')));
		(ιi=Δi=1,τi=τself[εi]) || (ιi=Δi=0,τself[εi]=τi=imba_createElement('i',τself,`fal ${φ}`,null));
		(υi=`fa-${this.iconClass}`,υi===τself[amφ]||(Δi|=2,τself[amφ]=υi));
		(Δi&2 && τi.flag$(`fal ${φ}`+' '+(τself[amφ]||'')));
		τslot=τself.__slots.__;
		(τself[εslot] = τself[ΨplaceChild](τslot,256,τself[εslot]));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('app-message',AppMessageComponent,{ns: 'tk2trf_af'});

imba_styles.register('tk2trf',`.tk2trf_af_.tk2trf_af:not(#_) {padding-left: 0.75rem;
padding-right: 0.75rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
border-radius: 4px;
font-size: 13px;
line-height: 20px;
--u_lh: 20px;
margin-bottom: 1.5rem;}

i.tk2trf_af:not(#_) {margin-right: 0.5rem;}

.info.tk2trf_af:not(#_) {background: hsla(54.92,96.72%,88.04%,100%);
color: hsla(28.42,72.52%,25.69%,100%);
border: 1px solid hsla(52.76,98.31%,76.86%,100%);}

.success.tk2trf_af:not(#_) {background: hsla(140.62,84.21%,92.55%,100%);
color: hsla(143.81,61.17%,20.20%,100%);
border: 1px solid hsla(141.00,78.95%,85.10%,100%);}

.warning.tk2trf_af:not(#_) {background: hsla(0.00,93.33%,94.12%,100%);
color: hsla(0.00,62.82%,30.59%,100%);
border: 1px solid hsla(0.00,96.30%,89.41%,100%);}

app-message { display:block; }`);