import { Logo } from "../../assets/images/icons";
import { Items } from "../Items";
console.log(<Items/>);
export const Nav = (arr) => {
	return <div className='navigation'>
		<div className='d-flex slign-items-center logo-wrapper'>
			<Logo />
			<p className='logo-title'>Dashboard Kit</p>
		</div>
		<nav>
			<ul className='list-unstyled site-nav-list'>
				<Items obg={arr.obg}/>
			</ul>
		</nav>
	</div>
};
