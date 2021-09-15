import { Meteor } from 'meteor/meteor'
import auth from '../../stores/auth'

export default tag Auth
	
	prop allowSignup = true
	
	name = ""
	email = ""
	password = ""
	
	def focusInput
		setTimeout(&,400) do
			$formEl.querySelector('input').focus!
	
	def switchMode
		const nextMode = auth.mode === "login" ? "signup" : "login"
		auth.setMode nextMode
		focusInput!
			
	def handleSubmit
		auth.mode === "signup" ? auth.signup! : auth.mode === "reset" ? auth.sendReset! : auth.login!
	
	def setMode mode
		auth.setMode mode
		focusInput!
	
	def mount
		focusInput!
	
	get title
		return "Login to your account" if auth.mode === "login"
		return "Create your account" if auth.mode === "signup"
		return "Reset your password" if auth.mode === "reset"
		""
	
	get buttonText
		return "Login" if auth.mode === "login"
		return "Create account" if auth.mode === "signup"
		return "Reset password" if auth.mode === "reset"
	
	get switchText
		return "Need an account?" if auth.mode === "login"
		return "Already have an account?"
	
	css self bg:gray2 w:100vw h:100vh d:flex jc:center ai:center
	css main p:10 bg:white rd:md w:30rem
	css h2 c:gray8 fw:600 ta:center mb:8
	
	<self>
		
		<main>
			
			<h2> title

			<app-message status="success" [mt:-2]> auth.success if auth.success
			<app-message status="warning" [mt:-2]> auth.error if auth.error

			<form$formEl @submit.prevent=handleSubmit>
				
				<form-items>

					if auth.mode === "signup"
						<form-item label="Your name" ease [y@in:20px y@out:-20px]>
							<input$nameEl bind=auth.name>	
					
					<form-item label="Your email address">
						<input$emailEl bind=auth.email>

					unless auth.mode === "reset"
						<form-item label="Your password">
							<password-input bind:value=auth.password newPassword=(auth.mode==="signup")>
				
				<submit-button loading=auth.loading [mt:8]> buttonText

			<div.button-links [mt:3]>
				
				if auth.mode !== "reset" && allowSignup
					<button.link @click=switchMode> switchText
				
				if auth.mode === "reset"
					<button.link @click=setMode("login")> "Remembered your password?"
				else
					<button.link @click=setMode("reset")> "Forgotten your password?"