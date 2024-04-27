import { IProject } from "../../../entities/project/types/projectTypes"
import { CardsList } from "../../../entities/project/ui/CardsList/CardsList"

const list: IProject[] = [{id: 'id1', name: 'Бизнес приложуха', description: 'Верняк тема', profit: 1000, expectedProfit: 10000}]

function MainPage() {
  return (
    <div className="container">
        <h1>Главная</h1>
        <CardsList projectsList={list} />
    </div>
  )
}

export default MainPage