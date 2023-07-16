import { ReactComponent as Filmbody } from '../assets/images/film_body.svg'
import styles from '../css/filmsection.module.css'

function FilmContainer() {
	return (
		<div className={styles.filmcontainer}>
			<Filmbody>
			</Filmbody>
		</div>
	)
}

export default FilmContainer
