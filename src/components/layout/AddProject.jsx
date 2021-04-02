import React, { useState } from 'react';
import { firebase } from '../../firebase';
// generatePushId
import { generatePushId } from '../../helpers';
import { useProjectsValue } from '../../context';

export const AddProject = ({ shouldShow = false }) => {
	const [show, setShow] = useState(shouldShow);
	const [projectName, setProjectName] = useState('');

	const projectId = generatePushId();
	const { setProjects } = useProjectsValue();

	const addProject = () => {
		projectName &&
			firebase
				.firestore()
				.collection('projects')
				.add({
					projectId,
					name: projectName,
					userId: 'ee5c67df-6725-4f57-bbd6-600a2d51987b',
				})
				.then(() => {
					// call firebase to refetch Projects, empty array just to call it
					setProjects([]);
					setProjectName('');
					setShow(false);
				});
	};
	return (
		<div className='add-project' data-testid='add-project'>
			{show ? (
				<div className='add-project__input'>
					<input
						value={projectName}
						onChange={(e) => setProjectName(e.target.value)}
						className='add-project__name'
						data-testid='project-name'
						type='text'
						placeholder='Name your project'
					/>
					<button
						className='add-project__submit'
						type='button'
						onClick={() => addProject()}
						data-testid='add-project-submit'
					>
						Add Project
					</button>
					<span
						data-testid='hide-project-overlay'
						className='add-project__cancel'
						onclick={() => setShow(false)}
					>
						Cancel
					</span>
				</div>
			) : null}
			<span className='add-project__plus'>+</span>
			<span
				className='add-project__text'
				data-testid='add-project-action'
				onClick={() => setShow(!show)}
			>
				Add Project
			</span>
		</div>
	);
};
