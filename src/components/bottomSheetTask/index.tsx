import {
  View,
  StyleSheet,
  Pressable as PressBtn,
  Keyboard,
  Alert,
} from 'react-native';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from 'store';
import {AddNewTaskFormType, BottomSheetAction} from './type';
import {setBottomSheetAction} from 'store/slices/bottomSheet';
import TextTranslation from 'components/textTranslation';
import InputTextCustom from 'components/inputText';
import {themeStyles} from 'themes';
import {useFormik} from 'formik';
import {validateAddNewTaskForm} from 'helpers/validation';
import {COLORS} from 'constants/colors';
import CheckboxIcon from 'components/svg/checkboxIcon';
import ButtonCustom from 'components/buttonCustom';
import {useLoadingToggle} from 'customHooks/useLoadingToggle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createNewTask} from 'services/task';
import {updateListTask} from 'store/slices/userSlice';

const BottomSheetTask: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {isLoading, showLoading} = useLoadingToggle();

  const bottomSheetActions = useAppSelector(state => state.bottomSheet.action);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const snapPoints = useRef<(number | string)[]>([1, '50%', '80%']);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => {
        bottomSheetRef.current?.snapToIndex(2);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        bottomSheetRef.current?.snapToIndex(1);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleConfirm = useCallback(
    async (data: AddNewTaskFormType) => {
      showLoading(true);
      const dataToCreate = {
        ...data,
        isCompleted: false,
        id: Date.now().toString(),
      };
      const isCreateSuccess = await createNewTask(dataToCreate);

      if (isCreateSuccess) {
        bottomSheetRef.current?.close();

        dispatch(updateListTask(dataToCreate));
      } else {
        Alert.alert('Error', 'Create task failed');
      }

      showLoading(false);
    },
    [dispatch, showLoading],
  );

  const initialValuesForm: AddNewTaskFormType = {
    title: '',
    note: '',
    isImportance: false,
    isCompleted: false,
  };

  const {
    errors,
    values,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldError,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValuesForm,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validateAddNewTaskForm,
    onSubmit: handleConfirm,
  });

  useEffect(() => {
    if (bottomSheetActions === BottomSheetAction.PRESENCE) {
      resetForm();
      bottomSheetRef.current?.snapToIndex(1);

      dispatch(setBottomSheetAction());
    }
  }, [bottomSheetActions, dispatch, resetForm]);

  const renderInputTitleTask = useMemo(() => {
    const onFocusTitle = () => {
      setFieldError('title', '');
    };
    return (
      <View style={styles.inputBox}>
        <TextTranslation text="addTaskScreen.title" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="addTaskScreen.titlePlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('title')}
          onChangeText={handleChange('title')}
          onFocus={onFocusTitle}
          value={values.title}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
        />
        {errors.title && touched.title && (
          <TextTranslation text={errors.title} style={styles.txtError} />
        )}
      </View>
    );
  }, [
    errors.title,
    handleBlur,
    handleChange,
    setFieldError,
    touched.title,
    values.title,
  ]);

  const renderInputNoteTask = useMemo(() => {
    const onFocusNote = () => {
      setFieldError('note', '');
    };
    return (
      <View style={styles.inputBox}>
        <TextTranslation text="addTaskScreen.note" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={{
            ...themeStyles.primaryInput.inputRequiredView,
            ...styles.inputViewNote,
          }}
          placeholder="addTaskScreen.notePlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('note')}
          onChangeText={handleChange('note')}
          onFocus={onFocusNote}
          value={values.note}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
          numberOfLines={3}
          multiline
        />
        {errors.note && touched.note && (
          <TextTranslation text={errors.note} style={styles.txtError} />
        )}
      </View>
    );
  }, [
    errors.note,
    handleBlur,
    handleChange,
    setFieldError,
    touched.note,
    values.note,
  ]);

  const renderCheckboxView = useMemo(() => {
    const handleSelect = () => {
      setFieldValue('isImportance', !values.isImportance);
    };

    return (
      <View style={styles.checkboxView}>
        <PressBtn style={styles.checkboxIcon} onPress={handleSelect}>
          <CheckboxIcon isBorder={values.isImportance} />
        </PressBtn>
        <TextTranslation
          text="addTaskScreen.importance"
          style={themeStyles.primaryText.textNormal}
        />
      </View>
    );
  }, [setFieldValue, values.isImportance]);

  const renderButtonAddTask = useMemo(() => {
    const handlePress = () => {
      handleSubmit();
    };

    return (
      <ButtonCustom
        textBtn="addTaskScreen.addTaskBtn"
        onPress={handlePress}
        buttonStyle={styles.buttonView}
        textStyle={styles.textDesc}
        isShowLoading={isLoading}
        canSubmit={isValid && dirty}
      />
    );
  }, [dirty, handleSubmit, isLoading, isValid]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      index === 0 && resetForm();
    },
    [resetForm],
  );

  return (
    <>
      {currentIndex >= 1 && (
        <View style={[styles.container, StyleSheet.absoluteFill]} />
      )}
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints.current}>
        <BottomSheetView style={styles.contentContainer}>
          <KeyboardAwareScrollView>
            <TextTranslation
              text="addTaskScreen.addTask"
              style={styles.title}
            />
            {renderInputTitleTask}
            {renderInputNoteTask}
            {renderCheckboxView}
            {renderButtonAddTask}
          </KeyboardAwareScrollView>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default BottomSheetTask;
