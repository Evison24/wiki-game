import GameCard from "./GameCard"
import { useState,useEffect } from 'react'
import mainPageStyles from '../styles/MainPage.module.css'
import { Pagination } from 'antd';

const GameList = () => {
  const [gameData, setGameData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const allGames = async (page) => {
    const res = await fetch(`https://api.rawg.io/api/games?key=d9424cd9a0354016a97da721f3bf5dc0&page=${page}`);
    const data = await res.json();
    return data.results;
    
  }

  useEffect(() => {
    allGames(currentPage).then( data => {
      setGameData(data);
    });
  }, [currentPage]);

  return (
    <>
      {gameData ? <div className={mainPageStyles.mainPageContent} >{gameData.map((game, index) =>(
      <GameCard  data={game} key={index}/>
      ))}</div> : "Loading..."}

      
       <Pagination className={mainPageStyles.pagination}
      showSizeChanger
      defaultCurrent={1}
      onChange={e => setCurrentPage(e)}
      total={100}
    />
    
    </>
  
  )
}


export default GameList


