import mainPageStyles from '../styles/MainPage.module.css'
import GameList from './GameList'

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPageContainer}>
      <div>
        <h1>Welcome to <span className={mainPageStyles.wiki}>WIKI</span>
         <span className={mainPageStyles.game}>GAME</span></h1>
      </div>
      <div>
        <GameList />
      </div>
    </div>
  )
}

export default MainPage
