const Ψ__init__ = Symbol.for('#__init__'), ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit'), ΨappendChild = Symbol.for('#appendChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), εmain = Symbol(), εh4ι = Symbol(), ε0ι = Symbol(), εappmessage = Symbol(), εi = Symbol(), ε = Symbol(), ε0ι2 = Symbol(), εformitems = Symbol(), εformitem = Symbol(), εinput = Symbol(), baφ = Symbol(), εformitem2 = Symbol(), εinput2 = Symbol(), bcφ = Symbol(), εsubmitbutton = Symbol(), beφ = Symbol(), ε0ι3 = Symbol(), εdiv = Symbol(), εbutton = Symbol(), ε0ι4 = Symbol(), ε0ι5 = Symbol();
import {use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba'/*$path$*/;
(imba_use_events(),imba_use_dom_bind());

/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;
import auth from '../../stores/auth'/*$path$*/;

export default class Auth extends imba_ImbaElement {
	[Ψ__init__]($$ = null){
		var vφ;
		super[Ψ__init__](...arguments);
		this.allowSignup = ($$ && (vφ = $$.allowSignup) !== undefined) ? (vφ) : true;
		this.email = ($$ && (vφ = $$.email) !== undefined) ? (vφ) : "";
		this.password = ($$ && (vφ = $$.password) !== undefined) ? (vφ) : "";
		
	}
	handleSubmit(){
		
		return auth.signupMode ? auth.signup(this.email,this.password) : auth.login(this.email,this.password);
	}
	
	render(){
		var self = this, τ0if, τ0if2, τ0if3, τ0if5, τ0if4, τself, ιself, Δself, φ = this._ns_ || '', τmain, τh4ι, ιappmessage, Δappmessage, τavS, υappmessage, τform, τformitems, ιformitems, Δformitems, τayS, τformitem, ιformitem, Δformitem, τazS, τinput, ιinput, Δinput, υinput, τformitem2, ιformitem2, Δformitem2, τbbS, τinput2, ιinput2, Δinput2, υinput2, τsubmitbutton, ιsubmitbutton, Δsubmitbutton, τbdS, υsubmitbutton, τdiv, ιbutton, Δbutton, τbutton;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		(τmain = τself[εmain]) || (τself[εmain]=τmain=imba_createElement('main',τself,`${φ}`,null));
		(τh4ι = τself[εh4ι]) || (τself[εh4ι]=τh4ι=imba_createElement('h4',τmain,`${φ}`,null));
		τ0if = null;
		auth.signupMode ? ((τ0if="Créez votre compte")) : ((τ0if="Connectez-vous à votre compte"));
		(τself[ε0ι] = τh4ι[ΨplaceChild](τ0if,0,τself[ε0ι]));
		τ0if2 = null;
		if (auth.error) { (ιappmessage=Δappmessage=1,τ0if2=τself[εappmessage]) || (ιappmessage=Δappmessage=0,τself[εappmessage]=τ0if2=imba_createComponent('app-message',null,`az375p-aj ${φ}`,null));
		ιappmessage||(τ0if2[ΨΨup]=τmain);
		τavS = τ0if2.slot$('__',τ0if2);
		ιappmessage || (τ0if2.status="warning");
		(υappmessage=auth.error,(υappmessage===τ0if2[ε]&&ιappmessage) || (τ0if2[εi] = τavS[ΨplaceChild](τ0if2[ε]=υappmessage,384,τ0if2[εi])));
		ιappmessage || !τ0if2.setup || τ0if2.setup(Δappmessage);
		τ0if2[ΨafterVisit](Δappmessage) };
		(τself[ε0ι2] = τmain[ΨplaceChild](τ0if2,0,τself[ε0ι2]));
		ιself || (τform=imba_createElement('form',τmain,`${φ}`,null));
		ιself || (τform.on$(`submit`,{prevent: true,$_: [function(e,$$) {
			return self.handleSubmit(e);
		}]},this));
		(ιformitems=Δformitems=1,τformitems=τself[εformitems]) || (ιformitems=Δformitems=0,τself[εformitems]=τformitems=imba_createComponent('form-items',τform,`${φ}`,null));
		τayS = τformitems.slot$('__',τself);
		(ιformitem=Δformitem=1,τformitem=τself[εformitem]) || (ιformitem=Δformitem=0,τself[εformitem]=τformitem=imba_createComponent('form-item',τayS,`${φ}`,null));
		τazS = τformitem.slot$('__',τself);
		ιformitem || (τformitem.label="Your email address");
		(ιinput=Δinput=1,τinput=τself[εinput]) || (ιinput=Δinput=0,τself[εinput]=τinput=imba_createElement('input',τazS,`${φ}`,null));
		υinput=τself[baφ] || (τself[baφ]=τinput.bind$('data',[null,'email']));
		υinput[0]=self;
		ιinput || !τinput.setup || τinput.setup(Δinput);
		τinput[ΨafterVisit](Δinput);
		ιformitem || !τformitem.setup || τformitem.setup(Δformitem);
		τformitem[ΨafterVisit](Δformitem);
		ιformitem || τayS[ΨappendChild](τformitem);
		(ιformitem2=Δformitem2=1,τformitem2=τself[εformitem2]) || (ιformitem2=Δformitem2=0,τself[εformitem2]=τformitem2=imba_createComponent('form-item',τayS,`${φ}`,null));
		τbbS = τformitem2.slot$('__',τself);
		ιformitem2 || (τformitem2.label="Your password");
		(ιinput2=Δinput2=1,τinput2=τself[εinput2]) || (ιinput2=Δinput2=0,τself[εinput2]=τinput2=imba_createElement('input',τbbS,`${φ}`,null));
		υinput2=τself[bcφ] || (τself[bcφ]=τinput2.bind$('data',[null,'password']));
		υinput2[0]=self;
		ιinput2 || (τinput2.type="password");
		ιinput2 || !τinput2.setup || τinput2.setup(Δinput2);
		τinput2[ΨafterVisit](Δinput2);
		ιformitem2 || !τformitem2.setup || τformitem2.setup(Δformitem2);
		τformitem2[ΨafterVisit](Δformitem2);
		ιformitem2 || τayS[ΨappendChild](τformitem2);
		ιformitems || !τformitems.setup || τformitems.setup(Δformitems);
		τformitems[ΨafterVisit](Δformitems);
		ιformitems || τform[ΨappendChild](τformitems);
		(ιsubmitbutton=Δsubmitbutton=1,τsubmitbutton=τself[εsubmitbutton]) || (ιsubmitbutton=Δsubmitbutton=0,τself[εsubmitbutton]=τsubmitbutton=imba_createComponent('submit-button',τform,`az375p-aq ${φ}`,null));
		τbdS = τsubmitbutton.slot$('__',τself);
		(υsubmitbutton=auth.loading,υsubmitbutton===τself[beφ] || (τsubmitbutton.loading=τself[beφ]=υsubmitbutton));
		τ0if3 = null;
		auth.signupMode ? ((τ0if3="Créez votre compte")) : ((τ0if3="Connectez-vous"));
		(τself[ε0ι3] = τbdS[ΨplaceChild](τ0if3,0,τself[ε0ι3]));
		ιsubmitbutton || !τsubmitbutton.setup || τsubmitbutton.setup(Δsubmitbutton);
		τsubmitbutton[ΨafterVisit](Δsubmitbutton);
		ιsubmitbutton || τform[ΨappendChild](τsubmitbutton);
		(τdiv = τself[εdiv]) || (τself[εdiv]=τdiv=imba_createElement('div',τmain,`az375p-ar button-links ${φ}`,null));
		τ0if4 = null;
		if (self.allowSignup) { (ιbutton=Δbutton=1,τ0if4=τself[εbutton]) || (ιbutton=Δbutton=0,τself[εbutton]=τ0if4=imba_createElement('button',null,`link ${φ}`,null));
		ιbutton||(τ0if4[ΨΨup]=τdiv);
		ιbutton || (τ0if4.on$(`click`,{$_: [function(e,$$) {
			return auth.toggleMode(e);
		}]},this));
		τ0if5 = null;
		auth.signupMode ? ((τ0if5="Have an account")) : ((τ0if5="Need an account"));
		(τ0if4[ε0ι4] = τ0if4[ΨplaceChild](τ0if5,0,τ0if4[ε0ι4])) };
		(τself[ε0ι5] = τdiv[ΨplaceChild](τ0if4,0,τself[ε0ι5]));
		ιself || (τbutton=imba_createElement('button',τdiv,`link ${φ}`,"Oublié votre mot de passe?"));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('auth-az375p-at',Auth,{ns: 'az375p_af'});

imba_styles.register('az375p',`.az375p_af_.az375p_af:not(#_) {background: hsla(172.46,66.01%,50.39%,100%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;}

main.az375p_af:not(#_) {padding: 2.5rem;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
width: 30rem;}

h4.az375p_af:not(#_) {color: hsla(173.41,80.39%,40.00%,100%);
font-weight: 600;
text-align: center;
margin-bottom: 2rem;}

.az375p-aj:not(#_):not(#_) {margin-top: -0.5rem;}

.az375p-aq:not(#_):not(#_) {margin-top: 2rem;}

.az375p-ar:not(#_):not(#_) {margin-top: 0.75rem;}

auth-az375p-at { display:block; }`);