const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨafterReconcile = Symbol.for('#afterReconcile'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit');
var εself = Symbol(), εslot = Symbol(), εself2 = Symbol(), ayφ = Symbol(), azφ = Symbol(), εlabel = Symbol(), εi = Symbol(), ε = Symbol(), ε0ι = Symbol(), εslot2 = Symbol(), εself3 = Symbol(), εbutton = Symbol(), bcφ = Symbol(), εi2 = Symbol(), bdφ = Symbol(), beφ = Symbol(), εspan = Symbol(), bfφ = Symbol(), bgφ = Symbol(), εslot3 = Symbol(), εslot_ = Symbol(), εslot__ = Symbol(), εself4 = Symbol(), bhφ = Symbol(), εtextarea = Symbol(), biφ = Symbol(), bjφ = Symbol(), bkφ = Symbol();
import {use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag, createElement as imba_createElement, use_styles as imba_use_styles} from 'imba'/*$path$*/;
(imba_use_events(),imba_use_dom_bind(),imba_use_styles());

/*body*/
class FormItemsComponent extends imba_ImbaElement {
	
	render(){
		var τself, ιself, Δself, φ = this._ns_ || '', τslot;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		((!ιself||Δself&2) && τself.flagSelf$('gdq7d5-af'));
		τslot=τself.__slots.__;
		(τself[εslot] = τself[ΨplaceChild](τslot,384,τself[εslot]));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('form-items',FormItemsComponent,{});

class FormItemComponent extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ;
		super[Ψ__init__](...arguments);
		this.label = ($$ && (vφ = $$.label) !== undefined) ? (vφ) : "";
		this.half = ($$ && (vφ = $$.half) !== undefined) ? (vφ) : false;
		
	}
	render(){
		var τ0if, τself2, ιself2, Δself2, υself, φ2 = this._ns_ || '', ιlabel, Δlabel, υlabel, τslot2;
		τself2=this;
		τself2[ΨbeforeReconcile]();
		(ιself2=Δself2=1,τself2[εself2] === 1) || (ιself2=Δself2=0,τself2[εself2]=1);
		(υself=(this.half||undefined),υself===τself2[azφ]||(Δself2|=2,τself2[azφ]=υself));
		((!ιself2||Δself2&2) && τself2.flagSelf$((τself2[azφ] ? 'gdq7d5_aiaj' : '')));
		τ0if = null;
		if (this.label) { (ιlabel=Δlabel=1,τ0if=τself2[εlabel]) || (ιlabel=Δlabel=0,τself2[εlabel]=τ0if=imba_createElement('label',null,`${φ2}`,null));
		ιlabel||(τ0if[ΨΨup]=τself2);
		(υlabel=this.label,(υlabel===τ0if[ε]&&ιlabel) || (τ0if[εi] = τ0if[ΨplaceChild](τ0if[ε]=υlabel,384,τ0if[εi]))) };
		(τself2[ε0ι] = τself2[ΨplaceChild](τ0if,0,τself2[ε0ι]));
		τslot2=τself2.__slots.__;
		(τself2[εslot2] = τself2[ΨplaceChild](τslot2,256,τself2[εslot2]));
		τself2[ΨafterReconcile](Δself2);
		return τself2;
	}
}; imba_defineTag('form-item',FormItemComponent,{ns: 'gdq7d5_ai'});

class SubmitButtonComponent extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ2;
		super[Ψ__init__](...arguments);
		this.loading = ($$ && (vφ2 = $$.loading) !== undefined) ? (vφ2) : false;
		this.disabled = ($$ && (vφ2 = $$.disabled) !== undefined) ? (vφ2) : false;
		
	}
	render(){
		var τself3, ιself3, Δself3, φ3 = this._ns_ || '', τbutton, ιbutton, Δbutton, υbutton, τi, ιi, Δi, υi, τspan, ιspan, Δspan, υspan, τslot3;
		
		τself3=this;
		τself3[ΨbeforeReconcile]();
		(ιself3=Δself3=1,τself3[εself3] === 1) || (ιself3=Δself3=0,τself3[εself3]=1);
		(ιbutton=Δbutton=1,τbutton=τself3[εbutton]) || (ιbutton=Δbutton=0,τself3[εbutton]=τbutton=imba_createElement('button',τself3,`gdq7d5-ap submit ${φ3}`,null));
		(υbutton=this.disabled || this.loading,υbutton===τself3[bcφ] || (τbutton.disabled=τself3[bcφ]=υbutton));
		(ιi=Δi=1,τi=τself3[εi2]) || (ιi=Δi=0,τself3[εi2]=τi=imba_createElement('i',τbutton,`gdq7d5-aq fal fa-spinner-third fa-spin ${φ3}`,null));
		(υi=(!(this.loading)||undefined),υi===τself3[beφ]||(Δi|=2,τself3[beφ]=υi));
		(Δi&2 && τi.flag$(`gdq7d5-aq fal fa-spinner-third fa-spin ${φ3}`+' '+(τself3[beφ] ? `hidden` : '')));
		(ιspan=Δspan=1,τspan=τself3[εspan]) || (ιspan=Δspan=0,τself3[εspan]=τspan=imba_createElement('span',τbutton,`${φ3}`,null));
		(υspan=(this.loading||undefined),υspan===τself3[bgφ]||(Δspan|=2,τself3[bgφ]=υspan));
		(Δspan&2 && τspan.flag$(`${φ3}`+' '+(τself3[bgφ] ? `hidden` : '')));
		τslot3=τself3.__slots.__;
		if(!τslot3 || !τslot3.hasChildNodes()){
		(τslot3="Valider")
		}
		τslot3===τself3[εslot__] || (τself3[εslot_] = τspan[ΨplaceChild](τself3[εslot__]=τslot3,384,τself3[εslot_]));
		τself3[ΨafterReconcile](Δself3);
		return τself3;
	}
}; imba_defineTag('submit-button',SubmitButtonComponent,{ns: 'gdq7d5_an'});

class TextAreaComponent extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ3;
		super[Ψ__init__](...arguments);
		this.value = ($$ && (vφ3 = $$.value) !== undefined) ? (vφ3) : "";
		this.placeholder = ($$ && (vφ3 = $$.placeholder) !== undefined) ? (vφ3) : "";
		this.autosize = ($$ && (vφ3 = $$.autosize) !== undefined) ? (vφ3) : false;
		this.width = ($$ && (vφ3 = $$.width) !== undefined) ? (vφ3) : "auto";
		
	}
	
	
	// Credit: https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
	handleInput(e){
		
		if (!(this.autosize)) { return };
		const offset = this.$el.offsetHeight - this.$el.clientHeight;
		this.$el.style.height = "auto";
		return this.$el.style.height = this.$el.scrollHeight + offset + "px";
	}
	
	render(){
		var self = this, τself4, ιself4, Δself4, υself2, φ4 = this._ns_ || '', τtextarea, ιtextarea, Δtextarea, υtextarea;
		τself4=this;
		τself4[ΨbeforeReconcile]();
		(ιself4=Δself4=1,τself4[εself4] === 1) || (ιself4=Δself4=0,τself4[εself4]=1);
		(υself2=this.width,υself2===τself4[bhφ] || (τself4.css$var('--gdq7d5_au',τself4[bhφ]=υself2,null,'w')));
		((!ιself4||Δself4&2) && τself4.flagSelf$('gdq7d5-at'));
		(ιtextarea=Δtextarea=1,τtextarea=τself4[εtextarea]) || (ιtextarea=Δtextarea=0,τself4[εtextarea]=τtextarea=this.$el = imba_createElement('textarea',τself4,`gdq7d5-aw ${φ4} el ref--el`,null));
		ιtextarea || (τtextarea.on$(`input`,{$_: [function(e,$$) {
			return self.handleInput(e);
		}]},this));
		(υtextarea=self.placeholder,υtextarea===τself4[biφ] || (τtextarea.placeholder=τself4[biφ]=υtextarea));
		υtextarea=τself4[bjφ] || (τself4[bjφ]=τtextarea.bind$('data',[null,'value']));
		υtextarea[0]=self;
		(υtextarea=self.width,υtextarea===τself4[bkφ] || (τtextarea.css$var('--gdq7d5_ax',τself4[bkφ]=υtextarea,null,'w')));
		ιtextarea || !τtextarea.setup || τtextarea.setup(Δtextarea);
		τtextarea[ΨafterVisit](Δtextarea);
		τself4[ΨafterReconcile](Δself4);
		return τself4;
	}
}; imba_defineTag('text-area',TextAreaComponent,{});

imba_styles.register('gdq7d5',`.gdq7d5-af:not(#_):not(#_) {display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;}

form-items { display:block; }

.gdq7d5_ai_.gdq7d5_ai:not(#_) {width: 100%;}
.gdq7d5_ai_.gdq7d5_ai:not(#_):not(:last-child) {margin-bottom: 1.4rem;}

.gdq7d5_ai_.gdq7d5_ai input:not(#_),textarea.gdq7d5_ai:not(#_) {width: 100%;}


@media (min-width: 1024px){
.gdq7d5_aiaj:not(#_):not(#_) {width: 48%;}
}

form-item { display:block; }

.gdq7d5_an_.gdq7d5_an:not(#_) {margin-top: 1.5rem;}

span.gdq7d5_an:not(#_) {position: relative;}

i.gdq7d5_an:not(#_) {position: absolute;}

.hidden.gdq7d5_an:not(#_) {margin-top: -999rem;}

.gdq7d5-ap:not(#_):not(#_) {display: flex;
justify-content: center;
align-items: center;}

.gdq7d5-aq:not(#_):not(#_) {font-size: 16px;
line-height: 24px;
--u_lh: 24px;}

submit-button { display:block; }

.gdq7d5-at:not(#_):not(#_) {width: var(--gdq7d5_au);}

.gdq7d5-aw:not(#_):not(#_) {width: var(--gdq7d5_ax);}

text-area { display:block; }`);