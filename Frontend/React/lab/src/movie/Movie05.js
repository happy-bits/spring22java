/*

Skriv ut text
- describeChoice: ny funktion

*/

import { useState } from 'react'
import './Movie.css'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie() {

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

    return (

        <article className="movie">

            <img className="poster" src={poster} />

            <div className="rating">
                <img src={selectStarImageFor(1)} onClick={()=>clickStar(1)} onMouseEnter={()=>hoverStar(1)} onMouseOut={()=>leftStar()} />
                <img src={selectStarImageFor(2)} onClick={()=>clickStar(2)} onMouseEnter={()=>hoverStar(2)} onMouseOut={()=>leftStar()} />
                <img src={selectStarImageFor(3)} onClick={()=>clickStar(3)} onMouseEnter={()=>hoverStar(3)} onMouseOut={()=>leftStar()} />
                <img src={selectStarImageFor(4)} onClick={()=>clickStar(4)} onMouseEnter={()=>hoverStar(4)} onMouseOut={()=>leftStar()} />
                <img src={selectStarImageFor(5)} onClick={()=>clickStar(5)} onMouseEnter={()=>hoverStar(5)} onMouseOut={()=>leftStar()} />
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
