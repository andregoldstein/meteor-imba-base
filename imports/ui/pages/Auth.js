const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit'), ΨappendChild = Symbol.for('#appendChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), εmain = Symbol(), εh2ι = Symbol(), εi = Symbol(), ε = Symbol(), εappmessage = Symbol(), εi2 = Symbol(), ε2 = Symbol(), ε0ι = Symbol(), εformitems = Symbol(), εformitem = Symbol(), εinput = Symbol(), bdφ = Symbol(), ε0ι2 = Symbol(), εformitem2 = Symbol(), εinput2 = Symbol(), bgφ = Symbol(), εformitem3 = Symbol(), εpasswordinput = Symbol(), biφ = Symbol(), bjφ = Symbol(), ε0ι3 = Symbol(), εsubmitbutton = Symbol(), bmφ = Symbol(), εi3 = Symbol(), ε3 = Symbol(), εdiv = Symbol(), εbutton = Symbol(), boφ = Symbol(), εi4 = Symbol(), ε4 = Symbol(), ε0ι4 = Symbol(), εbutton2 = Symbol(), brφ = Symbol(), εbutton3 = Symbol(), bsφ = Symbol(), ε0ι5 = Symbol();
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
	focusInput(){
		var self = this;
		
		return setTimeout(function() {
			
			return self.$formEl.querySelector('input').focus();
		},400);
	}
	
	switchMode(){
		
		const nextMode = (auth.mode === "login") ? "signup" : "login";
		auth.setMode(nextMode);
		return this.focusInput();
		
	}
	handleSubmit(){
		
		return ((auth.mode === "signup") ? auth.signup() : (auth.mode === "reset")) ? auth.reset() : auth.login();
	}
	
	setMode(mode){
		
		auth.setMode(mode);
		return this.focusInput();
	}
	
	mount(){
		
		return this.focusInput();
	}
	
	get title(){
		
		if (auth.mode === "login") { return "Login to your account" };
		if (auth.mode === "signup") { return "Create your account" };
		if (auth.mode === "reset") { return "Reset your password" };
		return "";
	}
	
	get buttonText(){
		
		if (auth.mode === "login") { return "Login" };
		if (auth.mode === "signup") { return "Create account" };
		if (auth.mode === "reset") { return "Reset password" };
	}
	
	get switchText(){
		
		if (auth.mode === "login") { return "Need an account?" };
		return "Already have an account?";
	}
	
	render(){
		var self = this, τ0if, τ0if2, τ0if3, τ0if4, τ0if5, τself, ιself, Δself, φ = this._ns_ || '', τmain, τh2ι, υh2ι, ιappmessage, Δappmessage, τayS, υappmessage, τform, τformitems, ιformitems, Δformitems, τbbS, ιformitem, Δformitem, τbcS, τinput, ιinput, Δinput, υinput, τformitem, ιformitem2, Δformitem2, τbfS, τinput2, ιinput2, Δinput2, υinput2, ιformitem3, Δformitem3, τbhS, τpasswordinput, ιpasswordinput, Δpasswordinput, υpasswordinput, τsubmitbutton, ιsubmitbutton, Δsubmitbutton, τblS, υsubmitbutton, τdiv, ιbutton, Δbutton, υbutton, ιbutton2, Δbutton2, υbutton2, ιbutton3, Δbutton3, υbutton3;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		(τmain = τself[εmain]) || (τself[εmain]=τmain=imba_createElement('main',τself,`${φ}`,null));
		(τh2ι = τself[εh2ι]) || (τself[εh2ι]=τh2ι=imba_createElement('h2',τmain,`${φ}`,null));
		(υh2ι=this.title,(υh2ι===τself[ε]&&ιself) || (τself[εi] = τh2ι[ΨplaceChild](τself[ε]=υh2ι,384,τself[εi])));
		τ0if = null;
		if (auth.error) { (ιappmessage=Δappmessage=1,τ0if=τself[εappmessage]) || (ιappmessage=Δappmessage=0,τself[εappmessage]=τ0if=imba_createComponent('app-message',null,`az375p-aj ${φ}`,null));
		ιappmessage||(τ0if[ΨΨup]=τmain);
		τayS = τ0if.slot$('__',τ0if);
		ιappmessage || (τ0if.status="warning");
		(υappmessage=auth.error,(υappmessage===τ0if[ε2]&&ιappmessage) || (τ0if[εi2] = τayS[ΨplaceChild](τ0if[ε2]=υappmessage,384,τ0if[εi2])));
		ιappmessage || !τ0if.setup || τ0if.setup(Δappmessage);
		τ0if[ΨafterVisit](Δappmessage) };
		(τself[ε0ι] = τmain[ΨplaceChild](τ0if,0,τself[ε0ι]));
		ιself || (τform=this.$formEl = imba_createElement('form',τmain,`${φ} formEl ref--formEl`,null));
		ιself || (τform.on$(`submit`,{prevent: true,$_: [function(e,$$) {
			return self.handleSubmit(e);
		}]},this));
		(ιformitems=Δformitems=1,τformitems=τself[εformitems]) || (ιformitems=Δformitems=0,τself[εformitems]=τformitems=imba_createComponent('form-items',τform,`${φ}`,null));
		τbbS = τformitems.slot$('__',τself);
		τ0if2 = null;
		if (auth.mode === "signup") {
			
			(ιformitem=Δformitem=1,τ0if2=τself[εformitem]) || (ιformitem=Δformitem=0,τself[εformitem]=τ0if2=imba_createComponent('form-item',null,`az375p-am ${φ}`,null));
			ιformitem||(τ0if2[ΨΨup]=τbbS);
			τbcS = τ0if2.slot$('__',τ0if2);
			ιformitem || (τ0if2.label="Your name");
			ιformitem || (τ0if2.ease='ease');
			(ιinput=Δinput=1,τinput=τ0if2[εinput]) || (ιinput=Δinput=0,τ0if2[εinput]=τinput=this.$nameEl = imba_createElement('input',τbcS,`${φ} nameEl ref--nameEl`,null));
			υinput=τ0if2[bdφ] || (τ0if2[bdφ]=τinput.bind$('data',[null,'name']));
			υinput[0]=auth;
			ιinput || !τinput.setup || τinput.setup(Δinput);
			τinput[ΨafterVisit](Δinput);
			ιformitem || !τ0if2.setup || τ0if2.setup(Δformitem);
			τ0if2[ΨafterVisit](Δformitem);
		};
		(τself[ε0ι2] = τbbS[ΨplaceChild](τ0if2,0,τself[ε0ι2]));
		(ιformitem2=Δformitem2=1,τformitem=τself[εformitem2]) || (ιformitem2=Δformitem2=0,τself[εformitem2]=τformitem=imba_createComponent('form-item',τbbS,`${φ}`,null));
		τbfS = τformitem.slot$('__',τself);
		ιformitem2 || (τformitem.label="Your email address");
		(ιinput2=Δinput2=1,τinput2=τself[εinput2]) || (ιinput2=Δinput2=0,τself[εinput2]=τinput2=this.$emailEl = imba_createElement('input',τbfS,`${φ} emailEl ref--emailEl`,null));
		υinput2=τself[bgφ] || (τself[bgφ]=τinput2.bind$('data',[null,'email']));
		υinput2[0]=auth;
		ιinput2 || !τinput2.setup || τinput2.setup(Δinput2);
		τinput2[ΨafterVisit](Δinput2);
		ιformitem2 || !τformitem.setup || τformitem.setup(Δformitem2);
		τformitem[ΨafterVisit](Δformitem2);
		ιformitem2 || τbbS[ΨappendChild](τformitem);
		τ0if3 = null;
		if (auth.mode !== "reset") {
			
			(ιformitem3=Δformitem3=1,τ0if3=τself[εformitem3]) || (ιformitem3=Δformitem3=0,τself[εformitem3]=τ0if3=imba_createComponent('form-item',null,`${φ}`,null));
			ιformitem3||(τ0if3[ΨΨup]=τbbS);
			τbhS = τ0if3.slot$('__',τ0if3);
			ιformitem3 || (τ0if3.label="Your password");
			(ιpasswordinput=Δpasswordinput=1,τpasswordinput=τ0if3[εpasswordinput]) || (ιpasswordinput=Δpasswordinput=0,τ0if3[εpasswordinput]=τpasswordinput=imba_createComponent('password-input',τbhS,`${φ}`,null));
			υpasswordinput=τ0if3[biφ] || (τ0if3[biφ]=τpasswordinput.bind$('value',[null,'password']));
			υpasswordinput[0]=auth;
			(υpasswordinput=auth.mode === "signup",υpasswordinput===τ0if3[bjφ] || (τpasswordinput.newPassword=τ0if3[bjφ]=υpasswordinput));
			ιpasswordinput || !τpasswordinput.setup || τpasswordinput.setup(Δpasswordinput);
			τpasswordinput[ΨafterVisit](Δpasswordinput);
			ιpasswordinput || τbhS[ΨappendChild](τpasswordinput);
			ιformitem3 || !τ0if3.setup || τ0if3.setup(Δformitem3);
			τ0if3[ΨafterVisit](Δformitem3);
		};
		(τself[ε0ι3] = τbbS[ΨplaceChild](τ0if3,0,τself[ε0ι3]));
		ιformitems || !τformitems.setup || τformitems.setup(Δformitems);
		τformitems[ΨafterVisit](Δformitems);
		ιformitems || τform[ΨappendChild](τformitems);
		(ιsubmitbutton=Δsubmitbutton=1,τsubmitbutton=τself[εsubmitbutton]) || (ιsubmitbutton=Δsubmitbutton=0,τself[εsubmitbutton]=τsubmitbutton=imba_createComponent('submit-button',τform,`az375p-as ${φ}`,null));
		τblS = τsubmitbutton.slot$('__',τself);
		(υsubmitbutton=auth.loading,υsubmitbutton===τself[bmφ] || (τsubmitbutton.loading=τself[bmφ]=υsubmitbutton));
		(υsubmitbutton=self.buttonText,(υsubmitbutton===τself[ε3]&&ιsubmitbutton) || (τself[εi3] = τblS[ΨplaceChild](τself[ε3]=υsubmitbutton,384,τself[εi3])));
		ιsubmitbutton || !τsubmitbutton.setup || τsubmitbutton.setup(Δsubmitbutton);
		τsubmitbutton[ΨafterVisit](Δsubmitbutton);
		ιsubmitbutton || τform[ΨappendChild](τsubmitbutton);
		(τdiv = τself[εdiv]) || (τself[εdiv]=τdiv=imba_createElement('div',τmain,`az375p-at button-links ${φ}`,null));
		τ0if4 = null;
		if (auth.mode !== "reset" && self.allowSignup) {
			
			(ιbutton=Δbutton=1,τ0if4=τself[εbutton]) || (ιbutton=Δbutton=0,τself[εbutton]=τ0if4=imba_createElement('button',null,`link ${φ}`,null));
			ιbutton||(τ0if4[ΨΨup]=τdiv);
			υbutton = τ0if4[boφ] || (τ0if4[boφ]={$_: [function(e,$$,_2) {
				return _2.switchMode(e);
			},null]});
			υbutton.$_[1]=self;
			ιbutton || τ0if4.on$(`click`,υbutton,this);
			(υbutton=self.switchText,(υbutton===τ0if4[ε4]&&ιbutton) || (τ0if4[εi4] = τ0if4[ΨplaceChild](τ0if4[ε4]=υbutton,384,τ0if4[εi4])));
		};
		(τself[ε0ι4] = τdiv[ΨplaceChild](τ0if4,0,τself[ε0ι4]));
		τ0if5 = null;
		if (auth.mode === "reset") {
			
			(ιbutton2=Δbutton2=1,τ0if5=τself[εbutton2]) || (ιbutton2=Δbutton2=0,τself[εbutton2]=τ0if5=imba_createElement('button',null,`link ${φ}`,"Remembered your password?"));
			ιbutton2||(τ0if5[ΨΨup]=τdiv);
			υbutton2 = τ0if5[brφ] || (τ0if5[brφ]={$_: [function(e,$$,_2) {
				return _2.setMode("login");
			},null]});
			υbutton2.$_[1]=self;
			ιbutton2 || τ0if5.on$(`click`,υbutton2,this);
		} else {
			
			(ιbutton3=Δbutton3=1,τ0if5=τself[εbutton3]) || (ιbutton3=Δbutton3=0,τself[εbutton3]=τ0if5=imba_createElement('button',null,`link ${φ}`,"Forgotten your password?"));
			ιbutton3||(τ0if5[ΨΨup]=τdiv);
			υbutton3 = τ0if5[bsφ] || (τ0if5[bsφ]={$_: [function(e,$$,_2) {
				return _2.setMode("reset");
			},null]});
			υbutton3.$_[1]=self;
			ιbutton3 || τ0if5.on$(`click`,υbutton3,this);
		};
		(τself[ε0ι5] = τdiv[ΨplaceChild](τ0if5,0,τself[ε0ι5]));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('auth-az375p-aw',Auth,{ns: 'az375p_af'});

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

auth-az375p-aw { display:block; }`);