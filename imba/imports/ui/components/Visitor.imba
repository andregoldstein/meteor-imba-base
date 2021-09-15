import { Auth, ResetPassword } from '/imports/ui/pages'

export default tag Visitor

	<self>

		if router.path.startsWith "/reset-password"
			<ResetPassword route="/reset-password/:token">
		else
			<Auth allowSignup=true>