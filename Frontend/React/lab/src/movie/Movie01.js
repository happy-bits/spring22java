/*

Kopiera in HTML
class => className

bilderna

*/
import './Movie.css'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie() {

    return (

        <article className="movie">

            <img className="poster" src={poster} />

            <div className="rating">
                <img src={starGray}/>
                <img src={starGray}/>
                <img src={starGray}/>
                <img src={starGray}/>
                <img src={starGray}/>
            </div>

            <section className="result">
                &nbsp;
            </section>

        </article>

    )
}

export default Movie