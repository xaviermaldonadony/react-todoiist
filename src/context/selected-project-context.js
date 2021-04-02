import React, { createContext, useContext, useState } from 'react';
import { useProjects } from '../hooks';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
	const [selectedProject, setSelectedProject] = useState('INBOX');

	return (
		<SelectedProjectContext.Provider
			value={{ selectedProject, setSelectedProject }}
		>
			{children}
		</SelectedProjectContext.Provider>
	);
};

// we have acces to the values by calling USPV
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
