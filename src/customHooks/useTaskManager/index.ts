import {useAppDispatch} from 'store';
import {setListTaskData} from 'store/slices/userSlice';
import {getListTask} from 'services/task';

export function useTaskManager() {
  const dispatch = useAppDispatch();

  const getAllTask = async () => {
    const allTaskData = await getListTask();
    if (allTaskData.length > 0) {
      dispatch(setListTaskData(allTaskData));

      return;
    }

    dispatch(setListTaskData([]));
  };

  return {
    getAllTask,
  };
}
