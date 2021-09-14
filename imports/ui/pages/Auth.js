const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit'), ΨappendChild = Symbol.for('#appendChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), εmain = Symbol(), εh2ι = Symbol(), ε0ι = Symbol(), εappmessage = Symbol(), εi = Symbol(), ε = Symbol(), ε0ι2 = Symbol(), εformitems = Symbol(), εformitem = Symbol(), εinput = Symbol(), bcφ = Symbol(), ε0ι3 = Symbol(), εformitem2 = Symbol(), εinput2 = Symbol(), bfφ = Symbol(), εformitem3 = Symbol(), εinput3 = Symbol(), bhφ = Symbol(), εsubmitbutton = Symbol(), bjφ = Symbol(), ε0ι4 = Symbol(), εdiv = Symbol(), εbutton = Symbol(), blφ = Symbol(), ε0ι5 = Symbol(), ε0ι6 = Symbol();
import {use_events as imba_use_events, use_dom_transitions as imba_use_dom_transitions, use_dom_bind as imba_use_dom_bind, transitions as imba_transitions, styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba'/*$path$*/;
(imba_use_events(),imba_use_dom_transitions(),imba_use_dom_bind());
imba_transitions.addSelectors([".az375p-am"]);
/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;
import auth from '../../stores/auth'/*$path$*/;

export default class Auth extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ;
		super[Ψ__init__](...arguments);
		this.allowSignup = ($$ && (vφ = $$.allowSignup) !== undefined) ? (vφ) : true;
		this.name = ($$ && (vφ = $$.name) !== undefined) ? (vφ) : "";
		this.email = ($$ && (vφ = $$.email) !== undefined) ? (vφ) : "";
		this.password = ($$ && (vφ = $$.password) !== undefined) ? (vφ) : "";
		
	}
	switchMode(){
		var self = this;
		
		auth.toggleMode();
		return setTimeout(function() { return auth.signupMode ? self.$nameEl.focus() : self.$emailEl.focus(); },200);
	}
	
	handleSubmit(){
		
		return auth.signupMode ? auth.signup() : auth.login();
	}
	
	render(){
		var self = this, τ0if, τ0if2, τ0if3, τ0if4, τ0if6, τ0if5, τself, ιself, Δself, φ = this._ns_ || '', τmain, τh2ι, ιappmessage, Δappmessage, τaxS, υappmessage, τform, τformitems, ιformitems, Δformitems, τbaS, ιformitem, Δformitem, τbbS, τinput, ιinput, Δinput, υinput, τformitem, ιformitem2, Δformitem2, τbeS, τinput2, ιinput2, Δinput2, υinput2, τformitem2, ιformitem3, Δformitem3, τbgS, τinput3, ιinput3, Δinput3, υinput3, τsubmitbutton, ιsubmitbutton, Δsubmitbutton, τbiS, υsubmitbutton, τdiv, ιbutton, Δbutton, υbutton, τbutton;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		(τmain = τself[εmain]) || (τself[εmain]=τmain=imba_createElement('main',τself,`${φ}`,null));
		(τh2ι = τself[εh2ι]) || (τself[εh2ι]=τh2ι=imba_createElement('h2',τmain,`${φ}`,null));
		τ0if = null;
		auth.signupMode ? ((τ0if="Create your account")) : ((τ0if="Login to your account"));
		(τself[ε0ι] = τh2ι[ΨplaceChild](τ0if,0,τself[ε0ι]));
		τ0if2 = null;
		if (auth.error) { (ιappmessage=Δappmessage=1,τ0if2=τself[εappmessage]) || (ιappmessage=Δappmessage=0,τself[εappmessage]=τ0if2=imba_createComponent('app-message',null,`az375p-aj ${φ}`,null));
		ιappmessage||(τ0if2[ΨΨup]=τmain);
		τaxS = τ0if2.slot$('__',τ0if2);
		ιappmessage || (τ0if2.status="warning");
		(υappmessage=auth.error,(υappmessage===τ0if2[ε]&&ιappmessage) || (τ0if2[εi] = τaxS[ΨplaceChild](τ0if2[ε]=υappmessage,384,τ0if2[εi])));
		ιappmessage || !τ0if2.setup || τ0if2.setup(Δappmessage);
		τ0if2[ΨafterVisit](Δappmessage) };
		(τself[ε0ι2] = τmain[ΨplaceChild](τ0if2,0,τself[ε0ι2]));
		ιself || (τform=imba_createElement('form',τmain,`${φ}`,null));
		ιself || (τform.on$(`submit`,{prevent: true,$_: [function(e,$$) {
			return self.handleSubmit(e);
		}]},this));
		(ιformitems=Δformitems=1,τformitems=τself[εformitems]) || (ιformitems=Δformitems=0,τself[εformitems]=τformitems=imba_createComponent('form-items',τform,`${φ}`,null));
		τbaS = τformitems.slot$('__',τself);
		τ0if3 = null;
		if (auth.signupMode) {
			
			(ιformitem=Δformitem=1,τ0if3=τself[εformitem]) || (ιformitem=Δformitem=0,τself[εformitem]=τ0if3=imba_createComponent('form-item',null,`az375p-am ${φ}`,null));
			ιformitem||(τ0if3[ΨΨup]=τbaS);
			τbbS = τ0if3.slot$('__',τ0if3);
			ιformitem || (τ0if3.label="Your name");
			ιformitem || (τ0if3.ease='ease');
			(ιinput=Δinput=1,τinput=τ0if3[εinput]) || (ιinput=Δinput=0,τ0if3[εinput]=τinput=this.$nameEl = imba_createElement('input',τbbS,`${φ} nameEl ref--nameEl`,null));
			υinput=τ0if3[bcφ] || (τ0if3[bcφ]=τinput.bind$('data',[null,'name']));
			υinput[0]=auth;
			ιinput || !τinput.setup || τinput.setup(Δinput);
			τinput[ΨafterVisit](Δinput);
			ιformitem || !τ0if3.setup || τ0if3.setup(Δformitem);
			τ0if3[ΨafterVisit](Δformitem);
		};
		(τself[ε0ι3] = τbaS[ΨplaceChild](τ0if3,0,τself[ε0ι3]));
		(ιformitem2=Δformitem2=1,τformitem=τself[εformitem2]) || (ιformitem2=Δformitem2=0,τself[εformitem2]=τformitem=imba_createComponent('form-item',τbaS,`${φ}`,null));
		τbeS = τformitem.slot$('__',τself);
		ιformitem2 || (τformitem.label="Your email address");
		(ιinput2=Δinput2=1,τinput2=τself[εinput2]) || (ιinput2=Δinput2=0,τself[εinput2]=τinput2=this.$emailEl = imba_createElement('input',τbeS,`${φ} emailEl ref--emailEl`,null));
		υinput2=τself[bfφ] || (τself[bfφ]=τinput2.bind$('data',[null,'email']));
		υinput2[0]=auth;
		ιinput2 || !τinput2.setup || τinput2.setup(Δinput2);
		τinput2[ΨafterVisit](Δinput2);
		ιformitem2 || !τformitem.setup || τformitem.setup(Δformitem2);
		τformitem[ΨafterVisit](Δformitem2);
		ιformitem2 || τbaS[ΨappendChild](τformitem);
		(ιformitem3=Δformitem3=1,τformitem2=τself[εformitem3]) || (ιformitem3=Δformitem3=0,τself[εformitem3]=τformitem2=imba_createComponent('form-item',τbaS,`${φ}`,null));
		τbgS = τformitem2.slot$('__',τself);
		ιformitem3 || (τformitem2.label="Your password");
		(ιinput3=Δinput3=1,τinput3=τself[εinput3]) || (ιinput3=Δinput3=0,τself[εinput3]=τinput3=imba_createElement('input',τbgS,`${φ}`,null));
		υinput3=τself[bhφ] || (τself[bhφ]=τinput3.bind$('data',[null,'password']));
		υinput3[0]=auth;
		ιinput3 || (τinput3.type="password");
		ιinput3 || !τinput3.setup || τinput3.setup(Δinput3);
		τinput3[ΨafterVisit](Δinput3);
		ιformitem3 || !τformitem2.setup || τformitem2.setup(Δformitem3);
		τformitem2[ΨafterVisit](Δformitem3);
		ιformitem3 || τbaS[ΨappendChild](τformitem2);
		ιformitems || !τformitems.setup || τformitems.setup(Δformitems);
		τformitems[ΨafterVisit](Δformitems);
		ιformitems || τform[ΨappendChild](τformitems);
		(ιsubmitbutton=Δsubmitbutton=1,τsubmitbutton=τself[εsubmitbutton]) || (ιsubmitbutton=Δsubmitbutton=0,τself[εsubmitbutton]=τsubmitbutton=imba_createComponent('submit-button',τform,`az375p-as ${φ}`,null));
		τbiS = τsubmitbutton.slot$('__',τself);
		(υsubmitbutton=auth.loading,υsubmitbutton===τself[bjφ] || (τsubmitbutton.loading=τself[bjφ]=υsubmitbutton));
		τ0if4 = null;
		auth.signupMode ? ((τ0if4="Create account")) : ((τ0if4="Login"));
		(τself[ε0ι4] = τbiS[ΨplaceChild](τ0if4,0,τself[ε0ι4]));
		ιsubmitbutton || !τsubmitbutton.setup || τsubmitbutton.setup(Δsubmitbutton);
		τsubmitbutton[ΨafterVisit](Δsubmitbutton);
		ιsubmitbutton || τform[ΨappendChild](τsubmitbutton);
		(τdiv = τself[εdiv]) || (τself[εdiv]=τdiv=imba_createElement('div',τmain,`az375p-at button-links ${φ}`,null));
		τ0if5 = null;
		if (self.allowSignup) { (ιbutton=Δbutton=1,τ0if5=τself[εbutton]) || (ιbutton=Δbutton=0,τself[εbutton]=τ0if5=imba_createElement('button',null,`link ${φ}`,null));
		ιbutton||(τ0if5[ΨΨup]=τdiv);
		υbutton = τ0if5[blφ] || (τ0if5[blφ]={$_: [function(e,$$,_2) {
			return _2.switchMode(e);
		},null]});
		υbutton.$_[1]=self;
		ιbutton || τ0if5.on$(`click`,υbutton,this);
		τ0if6 = null;
		auth.signupMode ? ((τ0if6="Have an account")) : ((τ0if6="Need an account"));
		(τ0if5[ε0ι5] = τ0if5[ΨplaceChild](τ0if6,0,τ0if5[ε0ι5])) };
		(τself[ε0ι6] = τdiv[ΨplaceChild](τ0if5,0,τself[ε0ι6]));
		ιself || (τbutton=imba_createElement('button',τdiv,`link ${φ}`,"Forgotten your password?"));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('auth-az375p-av',Auth,{ns: 'az375p_af'});

imba_styles.register('az375p',`:root {--e_d:0ms;--e_f:ease-in-out;--e_w:0ms}

._easing_ {--e_d:300ms;}

._ease_, .az375p-am {
transition:      all var(--e_d) var(--e_f) var(--e_w),
	       transform var(--e_dt,var(--e_d)) var(--e_ft,var(--e_f)) var(--e_wt,var(--e_w)),
	           color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	background-color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	         opacity var(--e_do,var(--e_d)) var(--e_fo,var(--e_f)) var(--e_wo,var(--e_w));
}

.az375p-am._in_, .az375p-am._out_ {
--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;
--t_scale:1;--t_scale-x:1;--t_scale-y:1;
--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z))
           rotate(var(--t_rotate))
           skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) 
           scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
}

.az375p_af_.az375p_af:not(#_) {background: hsla(240.00,5.88%,90.00%,100%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;}

main.az375p_af:not(#_) {padding: 2.5rem;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
width: 30rem;}

h2.az375p_af:not(#_) {color: hsla(240.00,3.70%,15.88%,100%);
font-weight: 600;
text-align: center;
margin-bottom: 2rem;}

.az375p-aj:not(#_):not(#_) {margin-top: -0.5rem;}


.az375p-am._in_:not(#_):not(#_) {--t_y: 20px !important;}
.az375p-am._out_:not(#_):not(#_) {--t_y: -20px !important;}

.az375p-as:not(#_):not(#_) {margin-top: 2rem;}

.az375p-at:not(#_):not(#_) {margin-top: 0.75rem;}

auth-az375p-av { display:block; }`);