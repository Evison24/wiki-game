// import { useEffect, useState } from "react";

// const Games = () => {
//   const [gameData, setGameData] = useState(null)

//   const allGames = async () => {
//     const res = await fetch(`https://api.rawg.io/api/games?key=d9424cd9a0354016a97da721f3bf5dc0`);
//     const gameData = await res.json();

//     setGameData(gameData);
//     // console.log(gameData.results);
//   }

//   useEffect(() => {
//     allGames();
//   }, [])

  
//   return (
//     <div>
//       <h1>All games</h1>
//       {/* <h3>{JSON.stringify(gameData,null,2)}</h3> */}
//       <ul>
//         Name:{gameData.results.map((game) =>(
//            <li key={game.id}>{game.name}</li>
//          ))}
//       </ul>
      
//     </div>
//   );
// }


// export default Games;