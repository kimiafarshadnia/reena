import Header from '../components/Header';
import Footer from '../components/Footer';
const Layout = ({ children }) => {
	return (
		<div className='bg-hero'>
			<div className='w-full h-full'>
				<Header />
				<div>{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
