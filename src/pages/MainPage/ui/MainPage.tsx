import { CardsList } from "../../../entities/project/ui/CardsList/CardsList";
import { useAppSelector } from "../../../shared/utils/hooks/reduxHooks";

function MainPage() {
  const list = useAppSelector(state => state.project.projectsList);
  return (
    <div className="container"> 
        <CardsList projectsList={list} />
    </div>
  )
}

export default MainPage;