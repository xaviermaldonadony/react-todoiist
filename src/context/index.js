import {
	ProjectsContext,
	ProjectsProvider,
	useProjectsValue,
} from './projects-context';

import {
	SelectedProjectContext,
	SelectedProjectProvider,
	useSelectedProjectValue,
} from './selected-project-context';

// we dont really need use export Context
// Since Provider has acces to them already
export {
	ProjectsContext,
	ProjectsProvider,
	useProjectsValue,
	SelectedProjectContext,
	SelectedProjectProvider,
	useSelectedProjectValue,
};
