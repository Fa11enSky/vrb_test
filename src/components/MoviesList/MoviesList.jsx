import React from 'react'
import ListItem from '../ListItem/ListItem'
import css from './styles.module.css'
const MoviesList = ({data,toDelete}) => {
  return (
    <ul className={css.movieList}>
     {data.map(el=><ListItem toDelete={toDelete}  key={el._id} item={el}/>)} 
    </ul>
  )
}

export default MoviesList
