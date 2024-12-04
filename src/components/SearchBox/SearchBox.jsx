import styles from './SearchBox.module.css'
import clsx from 'clsx'

const SearchBox = ({ handleSearch }) => {

  const onChange = (event) => {
    const value = event.target.value
    handleSearch(value)
  }

  return (
    <label className={clsx('controller border', styles.searchbox)}>
      Find contacts by name
      <input name='search' onChange={onChange} />
    </label>
  )
}

export default SearchBox
