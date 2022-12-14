import { Search, Notification } from "../../assets/images/icons";
import Profil from "../../../src/assets/images/photo.png";

export const Header = () => {
	return (
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
	);
};
