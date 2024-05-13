import {
  View,
  SectionList,
  SectionListRenderItem,
  SectionListData,
  Image,
  Pressable as PressBtn,
  Alert,
} from 'react-native';
import React, {FunctionComponent, useCallback, useEffect, useMemo} from 'react';
import SafeAreaViewCustom from 'components/safeAreaViewCustom';
import {styles} from './styles';
import {HomeScreenProps, TaskDataList} from './type';
import {TaskItemType} from 'models/task';
import TextTranslation from 'components/textTranslation';
import CheckboxCircleSvg from 'components/svg/checkboxCircleIcon';
import StarIcon from 'components/svg/starIcon';
import {LOGO} from 'constants/image';
import SearchIcon from 'components/svg/searchIcon';
import PlusIcon from 'components/svg/plusIcon';
import {useAppDispatch, useAppSelector} from 'store';
import {setBottomSheetAction} from 'store/slices/bottomSheet';
import {BottomSheetAction} from 'components/bottomSheetTask/type';
import {updateTask} from 'services/task';
import {updateItemInListTask} from 'store/slices/userSlice';
import {useLoadingToggle} from 'customHooks/useLoadingToggle';
import {useTaskManager} from 'customHooks/useTaskManager';

// const todoList: TaskDataList[] = [
//   {
//     title: '',
//     data: [
//       {id: 1, title: 'Task 1', completed: false, note: 'Note 1'},
//       {id: 2, title: 'Task 2', completed: false},
//       {id: 3, title: 'Task 3', completed: false},
//       {id: 4, title: 'Task 4', completed: false},
//       {id: 5, title: 'Task 5', completed: false},
//     ],
//   },
//   {
//     title: 'Completed',
//     data: [
//       {id: 6, title: 'Task 6', completed: true},
//       {id: 7, title: 'Task 7', completed: true, note: 'Hihi'},
//       {id: 8, title: 'Task 8', completed: true},
//       {id: 9, title: 'Task 9', completed: true},
//       {id: 10, title: 'Task 10', completed: true},
//     ],
//   },
// ];

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const {showLoadingWithIcon} = useLoadingToggle();
  const {listTask} = useAppSelector(state => state.user);
  const {getAllTask} = useTaskManager();

  const [todoList, setTodoList] = React.useState<TaskDataList[]>([]);

  // Handle get all task when open screen
  useEffect(() => {
    const handleAllTask = async () => {
      showLoadingWithIcon(true);
      await getAllTask();
      showLoadingWithIcon(false);
    };

    handleAllTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (listTask) {
      const todoListData = listTask.reduce<TaskDataList[]>(
        (acc, item) => {
          const index = item.isCompleted ? 1 : 0;
          acc[index].data.push(item);

          return acc;
        },
        [
          {title: '', data: []},
          {title: 'Completed', data: []},
        ],
      );

      setTodoList(todoListData);
    }
  }, [listTask]);

  const handleAddTask = useCallback(() => {
    dispatch(setBottomSheetAction(BottomSheetAction.PRESENCE));
  }, [dispatch]);

  const renderListHeaderComponent = useMemo(() => {
    return (
      <View style={styles.header}>
        <Image source={LOGO} style={styles.logo} />
        <TextTranslation text="appName" style={styles.appName} />
        <SearchIcon />
      </View>
    );
  }, []);

  const handleChangeImportance = useCallback(
    (item: TaskItemType) => async () => {
      showLoadingWithIcon(true);
      const dataToUpdate = {
        ...item,
        isImportance: !item.isImportance,
      };

      const isUpdated = await updateTask(dataToUpdate);

      if (isUpdated) {
        dispatch(updateItemInListTask(dataToUpdate));
      } else {
        Alert.alert('Error', 'Update task failed');
      }

      showLoadingWithIcon(false);
    },
    [dispatch, showLoadingWithIcon],
  );

  const handleChangeComplete = useCallback(
    (item: TaskItemType) => async () => {
      showLoadingWithIcon(true);
      const dataToUpdate = {
        ...item,
        isCompleted: !item.isCompleted,
      };

      const isUpdated = await updateTask(dataToUpdate);

      if (isUpdated) {
        dispatch(updateItemInListTask(dataToUpdate));
      } else {
        Alert.alert('Error', 'Update task failed');
      }

      showLoadingWithIcon(false);
    },
    [dispatch, showLoadingWithIcon],
  );

  const renderItem: SectionListRenderItem<TaskItemType, TaskDataList> = ({
    item,
  }) => {
    return (
      <View style={styles.item}>
        <PressBtn onPress={handleChangeComplete(item)}>
          <CheckboxCircleSvg isBorder={!item.isCompleted} />
        </PressBtn>
        <View style={styles.wrapTextItem}>
          <TextTranslation
            style={[
              styles.textItem,
              item.isCompleted && styles.textItemCompleted,
            ]}
            text={item.title}
            ignoreTranslate
            numberOfLines={1}
          />
          {item.note && (
            <TextTranslation
              style={styles.textItemNote}
              text={item.note}
              ignoreTranslate
              numberOfLines={1}
            />
          )}
        </View>
        <PressBtn onPress={handleChangeImportance(item)}>
          <StarIcon isBorder={!item.isImportance} />
        </PressBtn>
      </View>
    );
  };

  const renderSectionHeader = ({
    section: {title, data},
  }: {
    section: SectionListData<TaskItemType, TaskDataList>;
  }) => {
    if (!title || !data.length) {
      return null;
    }

    return (
      <View style={styles.wrapTextTitle}>
        <TextTranslation text={title} style={styles.title} />
      </View>
    );
  };

  const renderListEmptyComponent = useMemo(() => {
    return (
      <View style={styles.empty}>
        <TextTranslation text="emptyTask" style={styles.emptyText} />
      </View>
    );
  }, []);

  return (
    <SafeAreaViewCustom
      style={styles.flexOne}
      contentContainerStyle={styles.flexOne}>
      <SectionList
        contentContainerStyle={styles.container}
        sections={todoList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={renderListHeaderComponent}
        ListEmptyComponent={renderListEmptyComponent}
      />
      <PressBtn style={styles.addIcon} onPress={handleAddTask}>
        <PlusIcon />
      </PressBtn>
    </SafeAreaViewCustom>
  );
};

export default HomeScreen;
