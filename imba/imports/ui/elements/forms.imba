tag form-items
	<self[d:hflex jc:space-between flw:wrap]> <slot>

tag form-item
	
	prop label = ""
	prop half = false

	css w:100% mb@not-last:1.4rem
	css >>> input, textarea w:100%
	
	<self [w@lg:48%]=half>
		<label> label if label
		<slot>

tag submit-button
	prop loading = false
	prop disabled = false

	css mt:6
	css span position:relative
	css i position:absolute
	css .hidden mt:-999rem
	
	def render
		<self>
			<button.submit disabled=(disabled || loading) [d:flex jc:center ai:center]> 
				<i.fal.fa-spinner-third.fa-spin[fs:md] .hidden=!loading>
				<span .hidden=loading> <slot> "Valider"

tag text-area

	prop value = ""
	prop placeholder = ""
	prop autosize = false
	prop width = "auto"
	
	# Credit: https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
	def handleInput e
		return unless autosize
		const offset = $el.offsetHeight - $el.clientHeight
		$el.style.height = "auto"
		$el.style.height = $el.scrollHeight + offset + "px"
	
	<self [w:{width}]>
		<textarea$el @input=handleInput placeholder=placeholder bind=value [w:{width}]>

tag password-input < input

	prop visible = false
	prop value = ""
	prop newPassword = false

	get buttonText do visible ? "Hide" : "Show"
	
	get autocomplete do newPassword ? "new-password" : "current-password"
	
	css pos:relative d:hflex ai:center
	css div pos:absolute t:0 r:0.2rem fs:sm- h:100% d:flex ai:center
	css button h:80%
	
	def render
		<self>
			<input bind=value type=(visible ? "text" : "password") autocomplete=autocomplete>
			<div> <button type="button" @click=(visible = !visible)> buttonText