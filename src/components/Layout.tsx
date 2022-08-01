import { ReactElement } from 'react';
import Footer from './footer';





interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
		
			{children}
			<Footer/>
		</>
	);
}