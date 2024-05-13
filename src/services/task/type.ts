import {TaskItemType} from 'models/task';

export type CreateTaskRequest = TaskItemType;

export type DataTaskResponse = {
  email: string;
  data: CreateTaskRequest[];
};
