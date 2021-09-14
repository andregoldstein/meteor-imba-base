function extendTag$__(el,cls){
	Object.defineProperties(el,Object.getOwnPropertyDescriptors(cls.prototype));
	return el;
};
const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨafterReconcile = Symbol.for('#afterReconcile'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit');
var εself = Symbol(), εslot = Symbol(), εself2 = Symbol(), bdφ = Symbol(), beφ = Symbol(), εlabel = Symbol(), εi = Symbol(), ε = Symbol(), ε0ι = Symbol(), εslot2 = Symbol(), εself3 = Symbol(), εbutton = Symbol(), bhφ = Symbol(), εi2 = Symbol(), biφ = Symbol(), bjφ = Symbol(), εspan = Symbol(), bkφ = Symbol(), blφ = Symbol(), εslot3 = Symbol(), εslot_ = Symbol(), εslot__ = Symbol(), εself4 = Symbol(), bmφ = Symbol(), εtextarea = Symbol(), bnφ = Symbol(), boφ = Symbol(), bpφ = Symbol(), εself5 = Symbol(), εinput = Symbol(), bqφ = Symbol(), brφ = Symbol(), bsφ = Symbol(), εbutton2 = Symbol(), btφ = Symbol(), εi3 = Symbol(), ε2 = Symbol();
import {use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, get_document as imba_get_document, styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag, createElement as imba_createElement, use_styles as imba_use_styles, getSuperTagType as imba_getSuperTagType} from 'imba'/*$path$*/;
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
		(υself=(this.half||undefined),υself===τself2[beφ]||(Δself2|=2,τself2[beφ]=υself));
		((!ιself2||Δself2&2) && τself2.flagSelf$((τself2[beφ] ? 'gdq7d5_aiaj' : '')));
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
		(υbutton=this.disabled || this.loading,υbutton===τself3[bhφ] || (τbutton.disabled=τself3[bhφ]=υbutton));
		(ιi=Δi=1,τi=τself3[εi2]) || (ιi=Δi=0,τself3[εi2]=τi=imba_createElement('i',τbutton,`gdq7d5-aq fal fa-spinner-third fa-spin ${φ3}`,null));
		(υi=(!(this.loading)||undefined),υi===τself3[bjφ]||(Δi|=2,τself3[bjφ]=υi));
		(Δi&2 && τi.flag$(`gdq7d5-aq fal fa-spinner-third fa-spin ${φ3}`+' '+(τself3[bjφ] ? `hidden` : '')));
		(ιspan=Δspan=1,τspan=τself3[εspan]) || (ιspan=Δspan=0,τself3[εspan]=τspan=imba_createElement('span',τbutton,`${φ3}`,null));
		(υspan=(this.loading||undefined),υspan===τself3[blφ]||(Δspan|=2,τself3[blφ]=υspan));
		(Δspan&2 && τspan.flag$(`${φ3}`+' '+(τself3[blφ] ? `hidden` : '')));
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
		(υself2=this.width,υself2===τself4[bmφ] || (τself4.css$var('--gdq7d5_au',τself4[bmφ]=υself2,null,'w')));
		((!ιself4||Δself4&2) && τself4.flagSelf$('gdq7d5-at'));
		(ιtextarea=Δtextarea=1,τtextarea=τself4[εtextarea]) || (ιtextarea=Δtextarea=0,τself4[εtextarea]=τtextarea=this.$el = imba_createElement('textarea',τself4,`gdq7d5-aw ${φ4} el ref--el`,null));
		ιtextarea || (τtextarea.on$(`input`,{$_: [function(e,$$) {
			return self.handleInput(e);
		}]},this));
		(υtextarea=self.placeholder,υtextarea===τself4[bnφ] || (τtextarea.placeholder=τself4[bnφ]=υtextarea));
		υtextarea=τself4[boφ] || (τself4[boφ]=τtextarea.bind$('data',[null,'value']));
		υtextarea[0]=self;
		(υtextarea=self.width,υtextarea===τself4[bpφ] || (τtextarea.css$var('--gdq7d5_ax',τself4[bpφ]=υtextarea,null,'w')));
		ιtextarea || !τtextarea.setup || τtextarea.setup(Δtextarea);
		τtextarea[ΨafterVisit](Δtextarea);
		τself4[ΨafterReconcile](Δself4);
		return τself4;
	}
}; imba_defineTag('text-area',TextAreaComponent,{});

class PasswordInputComponent extends imba_getSuperTagType('input','HTMLInputElement',imba_ImbaElement) {
	static create$(){
		return extendTag$__(imba_get_document().createElement('input'),this);
	}
	[Ψ__init__]($$ = null){
		var vφ4;
		super[Ψ__init__] && super[Ψ__init__](...arguments);
		this.visible = ($$ && (vφ4 = $$.visible) !== undefined) ? (vφ4) : false;
		this.value = ($$ && (vφ4 = $$.value) !== undefined) ? (vφ4) : "";
		this.newPassword = ($$ && (vφ4 = $$.newPassword) !== undefined) ? (vφ4) : false;
		
	}
	get buttonText(){
		return this.visible ? "Hide" : "Show";
	}
	
	get autocomplete(){
		return this.newPassword ? "new-password" : "current-password";
	}
	
	render(){
		var self = this, τself5, ιself5, Δself5, φ5 = this._ns_ || '', τinput, ιinput, Δinput, υinput, τdiv, τbutton2, ιbutton2, Δbutton2, υbutton2;
		
		τself5=this;
		τself5[ΨbeforeReconcile]();
		(ιself5=Δself5=1,τself5[εself5] === 1) || (ιself5=Δself5=0,τself5[εself5]=1);
		(ιinput=Δinput=1,τinput=τself5[εinput]) || (ιinput=Δinput=0,τself5[εinput]=τinput=imba_createElement('input',τself5,`${φ5}`,null));
		υinput=τself5[bqφ] || (τself5[bqφ]=τinput.bind$('data',[null,'value']));
		υinput[0]=this;
		(υinput=this.visible ? "text" : "password",υinput===τself5[brφ] || (τinput.type=τself5[brφ]=υinput));
		(υinput=this.autocomplete,υinput===τself5[bsφ] || (τinput.set$('autocomplete',τself5[bsφ]=υinput)));
		ιinput || !τinput.setup || τinput.setup(Δinput);
		τinput[ΨafterVisit](Δinput);
		ιself5 || (τdiv=imba_createElement('div',τself5,`${φ5}`,null));
		(ιbutton2=Δbutton2=1,τbutton2=τself5[εbutton2]) || (ιbutton2=Δbutton2=0,τself5[εbutton2]=τbutton2=imba_createElement('button',τdiv,`${φ5}`,null));
		ιbutton2 || (τbutton2.type="button");
		υbutton2 = τself5[btφ] || (τself5[btφ]={$_: [function(e,$$,_2) {
			return _2.visible = !(self.visible);
		},null]});
		υbutton2.$_[1]=self;
		ιbutton2 || τbutton2.on$(`click`,υbutton2,this);
		(υbutton2=self.buttonText,(υbutton2===τself5[ε2]&&ιbutton2) || (τself5[εi3] = τbutton2[ΨplaceChild](τself5[ε2]=υbutton2,384,τself5[εi3])));
		τself5[ΨafterReconcile](Δself5);
		return τself5;
	}
}; imba_defineTag('password-input',PasswordInputComponent,{extends: 'input',ns: 'gdq7d5_ay'});

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

text-area { display:block; }

.gdq7d5_ay_.gdq7d5_ay:not(#_) {position: relative;
display: flex;
flex-direction: row;
align-items: center;}

div.gdq7d5_ay:not(#_) {position: absolute;
top: 0rem;
right: 0.2rem;
font-size: 13px;
line-height: 20px;
--u_lh: 20px;
height: 100%;
display: flex;
align-items: center;}

button.gdq7d5_ay:not(#_) {height: 80%;}

password-input { display:block; }`);