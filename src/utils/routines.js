import { createRoutineCreator } from 'redux-saga-routines';

export const DEFAULT_STAGES = [
  'TRIGGER',
  'SUCCESS',
  'FAILURE',
  'LOADING',
  'ERROR',
  'ERRORS',
  'CLEAN',
  'MODAL_VISIBLE',
  'GET',
  'ADD',
  'PUSH',
  'UPDATE',
  'REMOVE',
];

export const createRoutine = createRoutineCreator(DEFAULT_STAGES);
