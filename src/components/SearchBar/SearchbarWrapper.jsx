import styles from './SearchBar.module.css';

const SearchbarWrapper = ({children}) => {
	return (
		<div id="searchbar_content" className={styles.content}>
			{children}
			<img id="try_plus_ad" src={require('../../assets/images/plus-tag.png').default} alt='' />
		</div>
	)
}

export default SearchbarWrapper
