import { Auth } from "../../../features/Auth/AuthByEmail"
import { AuthorizationWindow } from "../../../widgets/AuthorizationWindow"


function AuthPage() {

  return (
    <div className="container">
      <AuthorizationWindow/>
    </div>
  )
}

export default AuthPage