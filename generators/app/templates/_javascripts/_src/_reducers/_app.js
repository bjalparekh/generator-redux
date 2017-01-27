import { createReducer, updateObjState } from './helper';

const appInitialState = {
	grades: []
}

// export function setgrades(state, action) {
// 	return updateObjState(state, { grades: action.grades });
// }

export const app = createReducer(appInitialState, {
	// 'FETCH_GRADES': setgrades,
})
