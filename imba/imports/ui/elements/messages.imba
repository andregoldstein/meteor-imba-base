tag app-message

	prop icon
	prop status = "info"
	
	css px:3 py:2 rd:md fs:sm- mb:6
	css i mr:2
	
	css .info bg:yellow1 c:yellow9 bd:yellow2
	css .success bg:green1 c:green9 bd:green2
	css .warning bg:red1 c:red9 bd:red2
	
	get iconClass
		return false if icon == false
		return icon if icon
		return "info-circle" if status == "info"
		return "check-circle" if status == "success"
		return "exclamation-circle" if status == "warning"
		
	<self .{status}> 
		<i.fal.fa-{iconClass}>
		<slot>