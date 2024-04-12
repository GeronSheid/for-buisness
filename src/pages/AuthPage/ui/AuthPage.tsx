// import { useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../../shared/utils/hooks/reduxHooks";

import { Auth } from "../../../features/Auth/Auth"


function AuthPage() {

  // const dispatch = useAppDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const fromPage = location?.state?.from ? location.state.from.pathname : '/auth';



  return (
    <div className="container">
      <Auth />
    </div>
  )
}

export default AuthPage