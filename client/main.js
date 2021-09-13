const ΨbeforeReconcile = Symbol.for('#beforeReconcile'), ΨΨup = Symbol.for('##up'), ΨafterVisit = Symbol.for('#afterVisit'), ΨplaceChild = Symbol.for('#placeChild'), ΨafterReconcile = Symbol.for('#afterReconcile');
var εself = Symbol(), εAuthenticated = Symbol(), εAuth = Symbol(), ε0ι = Symbol(), τapp, ϲτ = (imba_renderContext.context||{}), εapp = Symbol(), ιapp, Δapp;
import {styles as imba_styles, ImbaElement as imba_ImbaElement, createComponent as imba_createComponent, defineTag as imba_defineTag, renderContext as imba_renderContext, mount as imba_mount} from 'imba'/*$path$*/;

/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;
import {Auth} from '../imports/ui/pages'/*$path$*/;
import {Authenticated} from '../imports/ui/components'/*$path$*/;

import '../imports/ui/elements/forms'/*$path$*/;
import '../imports/ui/elements/messages'/*$path$*/;
import '../imports/ui/styles'/*$path$*/;

class AppComponent extends imba_ImbaElement {
	
	
	render(){
		var τ0if, τself, ιself, Δself, φ = this._ns_ || '', ιAuthenticated, ΔAuthenticated, ιAuth, ΔAuth;
		
		
		τself=this;
		τself[ΨbeforeReconcile]();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		τ0if = null;
		if (Meteor.user()) {
			
			(ιAuthenticated=ΔAuthenticated=1,τ0if=τself[εAuthenticated]) || (ιAuthenticated=ΔAuthenticated=0,τself[εAuthenticated]=τ0if=imba_createComponent(Authenticated,null,`${φ}`,null));
			ιAuthenticated||(τ0if[ΨΨup]=τself);
			ιAuthenticated || !τ0if.setup || τ0if.setup(ΔAuthenticated);
			τ0if[ΨafterVisit](ΔAuthenticated);
		} else {
			
			(ιAuth=ΔAuth=1,τ0if=τself[εAuth]) || (ιAuth=ΔAuth=0,τself[εAuth]=τ0if=imba_createComponent(Auth,null,`${φ}`,null));
			ιAuth||(τ0if[ΨΨup]=τself);
			ιAuth || (τ0if.allowSignup=true);
			ιAuth || !τ0if.setup || τ0if.setup(ΔAuth);
			τ0if[ΨafterVisit](ΔAuth);
		};
		(τself[ε0ι] = τself[ΨplaceChild](τ0if,0,τself[ε0ι]));
		τself[ΨafterReconcile](Δself);
		return τself;
	}
}; imba_defineTag('app',AppComponent,{});
imba_mount(((ιapp=Δapp=1,τapp=ϲτ[εapp]) || (ιapp=Δapp=0,ϲτ[εapp]=τapp=imba_createComponent('app',null,null,null)),
ιapp || (τapp[ΨΨup]=ϲτ._),
ιapp || !τapp.setup || τapp.setup(Δapp),
τapp[ΨafterVisit](Δapp),
τapp));

imba_styles.register('xaytmz',`app-tag { display:block; }`);