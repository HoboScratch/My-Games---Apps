import Header from "./components/Header"
import Library from "./components/Library"
import Games from "./components/Games"
import newData from "./newData"
import List from "./components/List"


export default function App() {

const gameList = newData.map(games => {
    return (
      <List 
          key={games.id}
          games={games}
      />
    )
})


  return (
    <>
      <Header />
      <Library />
      <Games />
      {gameList}
    </>
  )
}