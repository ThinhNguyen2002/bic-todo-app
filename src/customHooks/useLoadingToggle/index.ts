import {useCallback, useState} from 'react';
import {useAppDispatch} from 'store';
import {
  setIsShowLoading,
  setIsShowLoadingWithIcon,
} from 'store/slices/appSlice';

export function useLoadingToggle(defaultValue = false) {
  const [isLoading, setIsLoading] = useState(defaultValue);
  const [isLoadingWithIcon, setIsLoadingWithIcon] = useState(false);
  const dispatch = useAppDispatch();

  const showLoading = useCallback(
    (status: boolean) => {
      setIsLoading(status);
      dispatch(setIsShowLoading(status));
    },
    [dispatch],
  );

  const showLoadingWithIcon = useCallback(
    (status: boolean) => {
      setIsLoadingWithIcon(status);
      dispatch(setIsShowLoadingWithIcon(status));
    },
    [dispatch],
  );

  const showLocalLoading = useCallback((status: boolean) => {
    setIsLoading(status);
  }, []);

  return {
    isLoading,
    isLoadingWithIcon,
    showLoading,
    showLoadingWithIcon,
    showLocalLoading,
  };
}
