import { Meteor } from 'meteor/meteor'
import auth from '../../stores/auth'

export default tag Auth
	
	prop allowSignup = true
	
	name = ""
	email = ""
	password = ""
	
	def switchMode
		auth.toggleMode!
		setTimeout(&,200) do auth.signupMode ? $nameEl.focus! : $emailEl.focus!
	
	def handleSubmit
		auth.signupMode ? auth.signup! : auth.login!
	
	css self bg:gray2 w:100vw h:100vh d:flex jc:center ai:center
	css main p:10 bg:white rd:md w:30rem
	css h2 c:gray8 fw:600 ta:center mb:8
	
	<self>
		
		<main>
			
			<h2> auth.signupMode ? "Create your account" : "Login to your account"

			<app-message status="warning" [mt:-2]> auth.error if auth.error

			<form @submit.prevent=handleSubmit>
				
				<form-items>

					if auth.signupMode
						<form-item label="Your name" ease [y@in:20px y@out:-20px]>
							<input$nameEl bind=auth.name>	
					
					<form-item label="Your email address">
						<input$emailEl bind=auth.email>

					<form-item label="Your password">
						<input bind=auth.password type="password">
				
				<submit-button loading=auth.loading [mt:8]> 
					auth.signupMode ? "Create account" : "Login"

			<div.button-links [mt:3]>
				<button.link @click=switchMode> auth.signupMode ? "Have an account" : "Need an account" if allowSignup
				<button.link> "Forgotten your password?"