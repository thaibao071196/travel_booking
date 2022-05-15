import { createRoutineCreator } from 'redux-saga-routines';
import { DEFAULT_STAGES } from '../../utils/routines';
import { LOGIN } from './constants';

const loginActionRoutines = createRoutineCreator([...DEFAULT_STAGES]);

export const loginActions = loginActionRoutines(LOGIN);
