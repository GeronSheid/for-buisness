import { useAppSelector } from "../../../../shared/utils/hooks/reduxHooks";

export const useViewer = () => {
    return useAppSelector(state => state.auth)
}

export const useAuth = () => {
    const { isAuth } = useViewer();
    return isAuth;
}