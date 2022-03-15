/*

Koppla in event och logga när något händer
- klickar på stjärna
- för musen över stjärna
- lämnar en stjärna

*/

import './Movie.css'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie() {

    const clickStar = (number)=>{
        console.log("Clicked star", number)
    }

    const hoverStar = (number)=>{
        console.log("Hovered star", number)
    }

    const leftStar = () => {
        console.log("Left a star")
    }

    return (

        <article className="movie">

            <img className="poster" src={poster} />

            <div className="rating">
                <img src={starGray} onClick={()=>clickStar(1)} onMouseEnter={()=>hoverStar(1)} onMouseOut={()=>leftStar()} />
                <img src={starGray} onClick={()=>clickStar(2)} onMouseEnter={()=>hoverStar(2)} onMouseOut={()=>leftStar()} />
                <img src={starGray} onClick={()=>clickStar(3)} onMouseEnter={()=>hoverStar(3)} onMouseOut={()=>leftStar()} />
                <img src={starGray} onClick={()=>clickStar(4)} onMouseEnter={()=>hoverStar(4)} onMouseOut={()=>leftStar()} />
                <img src={starGray} onClick={()=>clickStar(5)} onMouseEnter={()=>hoverStar(5)} onMouseOut={()=>leftStar()} />
            </div>

            <section className="result">
                &nbsp;
            </section>

        </article>

    )
}

export default Movie
