const ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨplaceChild = Symbol.for('#placeChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), εp = Symbol(), εi = Symbol(), ε$ = Symbol(), ε = Symbol();
import {use_events as imba_use_events, styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, createElement as imba_createElement, renderContext as imba_renderContext, defineTag as imba_defineTag} from 'imba'/*$path$*/;
(imba_use_events());

/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;
import auth from '../../stores/auth'/*$path$*/;
export default class Authenticated extends imba_ImbaElement {
	
	
	get user(){
		return Meteor.user();
	}
	
	render(){
		var τself, ιself, Δself, φ = this._ns_ || '', τh1ι, τp, υp, τbutton;
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		ιself || (τh1ι=imba_createElement('h1',τself,`${φ}`,"Welcome back"));
		(τp = τself[εp]) || (τself[εp]=τp=imba_createElement('p',τself,`${φ}`,null));
		(imba_renderContext.context=(τself[ε$] || (τself[ε$]={_:τp})),υp=JSON.stringify(this.user),imba_renderContext.context=null,(υp===τself[ε]&&ιself) || (τself[εi] = τp[ΨplaceChild](τself[ε]=υp,384,τself[εi])));
		ιself || (τbutton=imba_createElement('button',τself,`${φ}`,"Logout"));
		ιself || (τbutton.on$(`click`,{$_: [function(e,$$) {
			return auth.logout(e);
		}]},this));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('authenticated-vjfgz2-aj',Authenticated,{});

imba_styles.register('vjfgz2',`authenticated-vjfgz2-aj { display:block; }`);