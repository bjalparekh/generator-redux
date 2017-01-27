import * as types from '../constants/actionTypes';

import { grades } from '../data';

//Grades
export const fetchGrades = () => {
	return {
		type: types.FETCH_GRADES,
		grades: grades,
	}
}