import GameCard from "./GameCard"
import { useState,useEffect } from 'react'
import mainPageStyles from '../styles/MainPage.module.css'


const GameList = () => {
  const [gameData, setGameData] = useState(null)

  const allGames = async () => {
    const res = await fetch(`https://api.rawg.io/api/games?key=d9424cd9a0354016a97da721f3bf5dc0`);
    const data = await res.json();

    return data.results;
    
  }

  useEffect(() => {
    allGames().then( data => {
      setGameData(data);
    });
  }, [])

  return (
    <div>
      {gameData ? <div className={mainPageStyles.mainPageContent} >{gameData.map((game) =>(
      <GameCard  data={game}/>
      ))}</div> : "Loading..."}
      
    </div>
  
  )
}


export default GameList


