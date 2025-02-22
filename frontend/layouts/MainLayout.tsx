import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

import styles from "./styles.module.scss"


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className={styles.center}>
				{children}
			</Container >
			<Player />
		</>
	)
}

export default MainLayout;