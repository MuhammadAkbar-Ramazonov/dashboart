import "./main.css";
import {
	Logo,
	Overview,
	Tickets,
	Ideas,
	Contacts,
	Agents,
	Articles,
	Settings,
	Subscription,
	Search,
	Notification,
} from "../src/assets/images/icons/icons";
import { Items } from "./components/Items/Items";
import Profil from "../src/assets/images/photo.png";
import { MainItems } from "./components/MainItem/MainItem";
function App() {
	const navigation = [
		{
			id: 1,
			img: <Overview />,
			text: "Overview",
		},
		{
			id: 2,
			img: <Tickets />,
			text: "Tickets",
		},
		{
			id: 3,
			img: <Ideas />,
			text: "Ideas",
		},
		{
			id: 4,
			img: <Contacts />,
			text: "Contacts",
		},
		{
			id: 5,
			img: <Agents />,
			text: "Agents",
		},
		{
			id: 6,
			img: <Articles />,
			text: "Articles",
		},
		{
			id: 7,
			img: <Settings />,
			text: "Settings",
		},
		{
			id: 8,
			img: <Subscription />,
			text: "Subscription",
		},
	];
	const arr = [
		{
			title: "Unresolved",
			num: 60,
		},
		{
			title: "Overdue",
			num: 16,
		},
		{
			title: "Open",
			num: 43,
		},
		{
			title: "On hold",
			num: 64,
		},
	];

	return (
		<div className='App'>
			<div className='site-wrapper d-flex'>
				<div className='navigation'>
					<div className='d-flex slign-items-center logo-wrapper'>
						<Logo />
						<p className='logo-title'>Dashboard Kit</p>
					</div>
					<nav>
						<ul className='list-unstyled site-nav-list'>
							<Items obg={navigation}></Items>
						</ul>
					</nav>
				</div>
				<div className='site-overview flex-grow-1'>
					<div className='overview-inner d-flex justify-content-between'>
						<h2 className='site-top-title'>Overview</h2>
						<div className='d-flex align-items-start'>
							<div className='search-img-wrapper d-flex align-items-center'>
								<Search />
								<span className='search-img'></span>
								<Notification />
							</div>
							<div className='d-flex align-items-center'>
								<p className='mb-0 me-3'>Jones Ferdinand</p>
								<img src={Profil} alt='' />
							</div>
						</div>
					</div>
					<ul className='list-unstyled d-flex align-items-center justify-content-between'>
						<MainItems obg={arr} />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
