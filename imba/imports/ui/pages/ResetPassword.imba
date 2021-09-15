import auth from '/imports/stores/auth'

export default tag ResetPassword

	css self bg:gray2 w:100vw h:100vh d:flex jc:center ai:center
	css main p:10 bg:white rd:md w:30rem
	css h2 c:gray8 fw:600 ta:center mb:8
	
	password = ""
	
	def handleReset
		auth.reset route.params.token, password
	
	<self>

		<main>

			<h2> "Reset your password"

			<app-message status="warning" [mt:-2]> auth.error if auth.error

			<form @submit.prevent=handleReset>
				
				<form-items>
					<form-item label="New password">
						<password-input bind:value=password newPassword>
				
				<submit-button loading=auth.loading [mt:8]> "Change password"
			
			<div.button-links [mt:3]>
				
				<button.link @click=router.go("/")> "Remembered your password?"
