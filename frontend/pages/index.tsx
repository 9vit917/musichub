
import MainLayout from '../layouts/MainLayout'
import styles from "./styles.module.scss"

export default function Main() {
	return (
		<>
			<MainLayout>
				<div className={styles.center}>
					<h1>Welcome</h1>
					<h3>There are best tracks here from all the world!</h3>
				</div>
			</MainLayout>

		</>
	)
}
