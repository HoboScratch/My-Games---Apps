
export default function List(props) {

    return (
        <main className='games'>
            <div className='game-titles'>
                <img src={props.games.coverImg} alt={props.games.alt} className='game-img' />
                <p className='game-name'>{props.games.name}</p>
            </div>
        </main>
    )
}