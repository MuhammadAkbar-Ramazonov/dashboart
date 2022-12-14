export function Items(children) {
	return children.obg.map((item) => (
		<li className='d-flex site-nav-item align-items-center'>
			{item.img}
			<p className='mb-0 ms-4 site-nav-text'>{item.text}</p>
		</li>
	));
}
