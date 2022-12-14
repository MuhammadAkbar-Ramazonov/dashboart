import "./main.css";
import {
	Overview,
	Tickets,
	Ideas,
	Contacts,
	Agents,
	Articles,
	Settings,
	Subscription,
} from "../src/assets/images/icons";
import { MainItems } from "./components/MainItem";
import { DiogramCard, DiogramChildCardsList } from "./components/DiogramBody";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
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
				<Nav obg={navigation} />
				<div className='site-overview flex-grow-1'>
					<Header/>
					<ul className='list-unstyled d-flex align-items-center justify-content-between'>
						<MainItems obg={arr} />
					</ul>
					<DiogramCard />
					<DiogramChildCardsList />
				</div>
			</div>
		</div>
	);
}

export default App;
