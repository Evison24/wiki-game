import gameCardStyles from '../styles/GameCard.module.css'
import Image from 'next/image'
import myLogo from '../images/mylogo.png'


const GameCard = ({data}) => {
  return (
    <div className={gameCardStyles.gameCardContainer}>
      
      <Image
        src={myLogo}
        alt="Wiki-Game logo"
        height={200}
        width={300} 
      />
      <h2>Name: {data.name}</h2>
      <h3>Released: {data.released}</h3>
      <h3>Rating: {data.rating}</h3>

    </div>
  )
}

export default GameCard
