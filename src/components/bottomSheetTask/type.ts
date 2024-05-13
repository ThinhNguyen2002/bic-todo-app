export enum BottomSheetAction {
  PRESENCE = 'PRESENCE',
}

export type AddNewTaskFormType = {
  title: string;
  note: string;
  isImportance: boolean;
  isCompleted?: boolean;
};
