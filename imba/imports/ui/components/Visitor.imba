import { Auth, ResetPassword } from '../pages'

export default tag Visitor

	<self>

		if router.path.startsWith "/reset-password"
			<ResetPassword route="/reset-password/:token">
		else
			<Auth allowSignup=true>