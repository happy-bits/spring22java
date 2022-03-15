/*

Uppgift

- Ta in parametrar title och maxstars
- Om maxstars inte skickas in så använd 5 stjärnor

Komponenten ska kunna anropas:

<Movie title="Ghostbusters" poster={ghostbusters} maxstars={3}/>

*/

import { useState } from 'react'
import './Movie.css'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'


function Movie(param) {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const clickStar = (number)=>{
        setChosenStars(number)
    }

    const hoverStar = (number)=>{
        setHoveredStar(number)
    }

    const leftStar = () => {
        setHoveredStar(null)
    }

    const selectStarImageFor = (number) => {
        if (hoveredStar!=null){

            if (hoveredStar >= number){
                return star
            } else {
                return starGray
            }    
        }

        if (chosenStars >= number){
            return star
        } else {
            return starGray
        }
    }

    const oneToMaxStars = () => {
        let x=[]
        for(let i=1; i<=maxstars; i++) {
            x.push(i)
        }
        return x
    }

    return (

        <article className="movie">

            <img className="poster" src={param.poster} />

            <div className="rating">
                {oneToMaxStars().map(n=>
                    <img key={n} src={selectStarImageFor(n)} onClick={()=>clickStar(n)} onMouseEnter={()=>hoverStar(n)} onMouseOut={()=>leftStar()} />
                    )}
            </div>

            <section className="result" onClick={()=>clickStar(0)}>
                {chosenStars == 0 ? <>&nbsp;</> :
                
                    <>You rated {chosenStars} stars!</>
                }
            </section>

        </article>

    )
}

export default Movie
