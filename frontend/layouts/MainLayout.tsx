import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container style={{ margin: '90px 0' }}>
				{children}
			</Container>
		</>
	)
}

export default MainLayout;