import './App.css';
import {useState} from "react";

export default function App() {
  
     const movies =[
       {
       name:"Soorarai Pottru", 
       rating:"9.1" ,
       summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest." ,
       poster:"https://moviegalleri.net/wp-content/uploads/2020/01/Hero-Suriya-Soorarai-Pottru-Movie-Teaser-Release-Jan-7th-Poster-HD.jpg"
    },
    {
      name:"Anjaan", 
      rating:"5.3" ,
      summary:"Krishna, who comes to Mumbai in search of his missing brother, learns that he was a dreaded gangster known as Raju Bhai. Later, an interesting twist unfolds when Krishna meets his brother's enemies." ,
      poster:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/df4fd318873133.562d0c6720176.png"
   },
   {
    name:"Baba", 
    rating:"5.3" ,
    summary:"Baba is an atheist who always questions the higher power. A turn of events bestows Baba with divine powers and he takes it as an opportunity to help the people in his state." ,
    poster:"https://m.media-amazon.com/images/M/MV5BNDJhNWRjMjgtNzg1NS00YjBjLThlZjUtYTViNjdjOGZmNmQ2XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg"
 },
 {
  name:"Maanaadu", 
  rating:"8" ,
  summary:"On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop." ,
  poster:"https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UX1000_.jpg"
},
{
  name:"Jai Bhim", 
  rating:"9.5" ,
  summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them." ,
  poster:"https://www.thehindu.com/entertainment/movies/z5lmd3/article35738194.ece/BINARY/jai"
},
{
  name:"Podaa Podi", 
  rating:"5.5" ,
  summary:"Arjun and Nisha happily marry as they are madly in love with each other. However, trouble brews in their lives when they realize that they have to make a lot of sacrifices to make their marriage work." ,
  poster:"https://flxt.tmsimg.com/assets/p9573233_p_v10_aa.jpg"
},
     ];
  return (
    <div className="App">
      {/*Passing value to the props*/}
      
         {/*map used to transforming - Array of string to Array of JSX */}
          
      
        {/*<section className="movie-list">
         {movies.map((mv)=>(<Movie 
         name={mv.name} 
         rating={mv.rating} 
         summary= {mv.summary}
         poster={mv.poster}
         />
         ))}
         </section>*/}
          {/*The above and below are same code, the below is destructures */}
         {/*The below is object destructuring */}
          {/* <section className="movie-list">
         {movies.map(({name, rating, summary, poster})=>(<Movie 
         name={name} 
         rating={rating} 
         summary= {summary}
         poster={poster}
         />
         ))}
        </section>
      */} 
      <MovieList movies={movies}/>
      {/*<Counter/>*/}
    </div>
  );
}
//import {useState} from "react";(it should be in top of the page)
//Hook - Hook is a function - starts with "use"
function Counter(){
  //const  Like = 10;
  //const [state, setState] = useState(initialValue);
  //State - current scenario (current data)
  // state is a vere vere important variable
  //setState -setState will inform react state is changed - re-render(update)
  //render - showing on the screen

  //button click- Onclick -> SetLike -> informs react like is changed -> react will re-render the view
   const [like, setLike] = useState(0);
   const [dislike, setDisLike] = useState(0);
  return(
    <div className="counter-container">
      <button className="likes-dislikes"
        onClick={()=>{
        //like = like + 1; // react doesn't know like is changed
        //setLike(1000);// informs react like is changed, onClick this will show 1000
        setLike(like + 1); //informs react like is changed
        }}>👍
        {like}</button>
        <button className="likes-dislikes" onClick={()=>{setDisLike(dislike - 1)}}>👎{dislike}</button>
        
      {/*<p>{like}</p>*/}
    </div>
  );
}

function MovieList({movies}){
  return(
    <section className="movie-list">
         {movies.map(({name, rating, summary, poster})=>(<Movie 
         name={name} 
         rating={rating} 
         summary= {summary}
         poster={poster}
         />
         ))}
        </section>
        );
}

function Movie({name, rating, summary, poster}){
  // conditional styling
  const [show, setShow] = useState(true);
  const styles = {color: rating < 8 ? "crimson" : "green", fontWeight: "bold"};
  const summaryStyles = {
    display: show ? "block" : "none"
  };
  return(
    <div className="movie-container">
    <img src={poster} 
    alt={name} className="movie-poster" />
    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating" style={styles}> ⭐ {rating}</p>
    </div>
    <Counter/>
    <button onClick={() => setShow(!show)} className="movie-show-button"> {show ? "Hide" : "show"} Description</button>
    {/*conditional rendering*/}
    {/*show ? <p className="movie-summary">{summary}</p> : ""*/}
    {/*or above*/}
    <p style={summaryStyles} className="movie-summary">{summary}</p>
    
    </div>
  )

  
}

