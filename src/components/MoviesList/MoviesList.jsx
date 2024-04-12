import React from 'react'
import ListItem from '../ListItem/ListItem'
import css from './styles.module.css'
const MoviesList = ({data}) => {
  return (
    <ul className={css.movieList}>
     {data.map(el=><ListItem  key={el._id} item={el}/>)} 
    </ul>
  )
}

export default MoviesList
