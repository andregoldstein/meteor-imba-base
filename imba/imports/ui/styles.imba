import 'imba/preflight.css'

global css
	* ff:sans
	
	body m:0 p:0 c:gray8 ff:sans fs:md c:cooler8
		$brand: #2abdac $brand-dark: #1DB09F $bg: #fcfafb
	
	# Buttons
	button 
		px:3 py:0.4rem h:2.2rem min-width:2rem bg:cooler1 bg@hover:cooler2 
		d:hflex cg:2 ai:center
		bd:1px solid cooler2 rd:md fs:xs c:gray9 fw:500 cursor:pointer
		&.green bg:transparent c:$brand-dark bc:$brand-dark
		&.submit bg:teal5 bg@hover:teal6 c:white fw:400 ls:0.2px tween:all 0.15s ease
			&:disabled bg@hover:teal6
		&.unstyled p:0 bg:white bd:none min-width:auto
		&.link p:0 bg:transparent bd:none c:gray5 td@hover:underline fw:400
			&:disabled bg:teal5 c:white o:1 bg@hover:teal5
		&:disabled cursor:not-allowed o:0.7 bg@hover:gray2
	.button-links d:flex cg:1
		.link @focus outline:none
		.link@not-last@after content: "|" mr:1
	
	# Forms
	label d:block c:gray5 fs:sm mb:1
	input, textarea px:4 h:2.5rem min-width:6rem bd:cooler2 rd:md fs:sm- outline:none 
		@focus bc:blue5 bxs:rgb(49, 130, 206) 0px 0px 0px 1px
		&::placeholder fs:sm
		&.typing 
			@focus bd:2px solid $brand-dark bxs:none
	textarea w:100% h:8rem px:3 py:2