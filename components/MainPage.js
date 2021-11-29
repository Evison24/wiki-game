import mainPageStyles from '../styles/MainPage.module.css'
import GameCard from './GameCard'
import GameList from './GameList'

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPageContainer}>
      <div className={mainPageStyles.mainPageContainer.title}>
        <h1>Welcome to <span className={mainPageStyles.wiki}>WIKI</span> <span>GAME</span></h1>
      </div>
      <div >
        <GameList />
      </div>
    </div>
  )
}

export default MainPage
