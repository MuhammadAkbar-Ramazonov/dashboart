import "./item.css";

export function Items(arr) {
	// console.log(arr.arr.text)
	return (
		<>
				{arr.arr.img}
				<p className='mb-0 ms-4 site-nav-text'>{arr.arr.text}</p>
		</>
	);
}
