import SearchBar from '@entities/SearchBar/SearchBar'
import style from './CorpusSearchBar.module.scss'


const CorpusSearchBar = ({ data }) => {
  return <SearchBar placeholder={'Группа/Преподаватель/Кабинет...'} data={data} classes={style.searchBar} />
}

export default CorpusSearchBar

