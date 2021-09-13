import { Meteor } from 'meteor/meteor'
import auth from '../../stores/auth'

export default tag Auth
	
	prop allowSignup = true
	
	email = ""
	password = ""
	
	def handleSubmit
		auth.signupMode ? auth.signup(email, password) : auth.login(email, password)
	
	css bg:teal4 w:100vw h:100vh d:flex jc:center ai:center
	css main p:10 bg:white rd:md w:30rem
	css h4 c:teal5 fw:600 ta:center mb:8
	
	<self>
		
		<main>
			
			<h4> auth.signupMode ? "Créez votre compte" : "Connectez-vous à votre compte"

			<app-message status="warning" [mt:-2]> auth.error if auth.error

			<form @submit.prevent=handleSubmit>
				
				<form-items>
				
					<form-item label="Your email address">
						<input bind=email>

					<form-item label="Your password">
						<input bind=password type="password">
				
				<submit-button loading=auth.loading [mt:8]> 
					auth.signupMode ? "Créez votre compte" : "Connectez-vous"

			<div.button-links [mt:3]>
				<button.link @click=auth.toggleMode> auth.signupMode ? "Have an account" : "Need an account" if allowSignup
				<button.link> "Oublié votre mot de passe?"