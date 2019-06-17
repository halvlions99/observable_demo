import { Action } from '@ngrx/store';
import { AvailableTable } from './available-tables.interface';

export enum ActionTypes {
  ADD_TABLE = '[Available Tables] Add Table',
  REMOVE_TABLE = '[Available Tables] Remove Table',
  UPDATE_TABLE = '[Available Tables] Update Table',
  CLEAR_ALL = '[Available Tables] Clear All'
}

export class AddTable implements Action {
  readonly type = ActionTypes.ADD_TABLE;
  constructor(public payload: AvailableTable) {}
}

export class RemoveTable implements Action {
  readonly type = ActionTypes.REMOVE_TABLE;
  constructor(public payload: string) {}
}

export class UpdateTable implements Action {
  readonly type = ActionTypes.UPDATE_TABLE;
  constructor(public payload: AvailableTable) {}
}

export type Actions = AddTable | RemoveTable | UpdateTable;
