import { createRoutineCreator } from 'redux-saga-routines';
import { DEFAULT_STAGES } from '../../utils/routines';
import { DEFAULT } from './constants';

const testActionRoutines = createRoutineCreator([
  ...DEFAULT_STAGES,
  ...['TRIGGER_TO_SAGA', 'SUCCESS_REDUCER', 'SUCCESS_SAGA'],
]);

export const testActions = testActionRoutines(DEFAULT);
