import { ReactElement } from 'react';
import Footer from './footer';
import { Nav } from './Nav';






interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
		    <Nav/>
			{children}
			<Footer/>
		</>
	);
}