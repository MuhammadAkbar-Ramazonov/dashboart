import { DiogramTaskItem } from "./DiogramTaskItem/DiogramTaskItem";
import { Status } from "./Status/Status";

export const DiogramTaskList = () => {
	return (
		<>
			<ul className='mb-0 list-unstyled'>
				<form>
					<div className='d-flex align-items-center justify-content-between py-3 mx-32'>
						<input
							className='diogram-task-input w-100 bg-transparent border-0'
							type='text'
							aria-label='Create new task'
							placeholder='Create new task'
						/>
						<button className='diogram-task-btn rounded-2 border-0'></button>
					</div>
				</form>
				<DiogramTaskItem>
					<div className='d-flex align-items-center'>
						<label >
							<input
								className='diogram-task-checkbox visually-hidden'
								type='checkbox'
							/>
							<span className='diogram-task-checkbox-box'></span>
						</label>
						<h3 className='diogram-tickets-title mb-0'>Finish ticket update</h3>
					</div>
					<Status className='status rounded-2 status-urgent'>urgent</Status>
				</DiogramTaskItem>
				<DiogramTaskItem>
					<div className='d-flex align-items-center'>
						<label >
							<input
								className='diogram-task-checkbox visually-hidden'
								type='checkbox'
							/>
							<span className='diogram-task-checkbox-box'></span>
						</label>
						<h3 className='diogram-tickets-title mb-0'>
							Create new ticket example
						</h3>
					</div>
					<Status className='status rounded-2 status-new'>new</Status>
				</DiogramTaskItem>
				<DiogramTaskItem>
					<div className='d-flex align-items-center'>
						<label >
							<input
								className='diogram-task-checkbox visually-hidden'
								type='checkbox'
							/>
							<span className='diogram-task-checkbox-box'></span>
						</label>
						<h3 className='diogram-tickets-title mb-0'>Update ticket report</h3>
					</div>
					<Status className='status rounded-2 status-default'>default</Status>
				</DiogramTaskItem>
			</ul>
		</>
	);
};
