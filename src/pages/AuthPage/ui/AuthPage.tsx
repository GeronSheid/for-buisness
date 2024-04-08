import { useLocation, useNavigate } from "react-router-dom";
import { authorize } from "../../../app/store/authSlice";
import { useAppDispatch } from "../../../shared/utils/hooks/reduxHooks"

function AuthPage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location?.state?.from ? location.state.from.pathname : '/auth'

  const handleAuth = () => {
    dispatch(authorize())
    navigate(fromPage, {replace: true})
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <button onClick={() => handleAuth()}>Авторизоваться</button>
    </div>
  )
}

export default AuthPage