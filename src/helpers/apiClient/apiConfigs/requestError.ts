import {AxiosError} from 'axios';
import {ErrorType} from '../../../constants/enum';
import {Error} from '../../../constants/type';

export const requestError = (error: AxiosError) => {
  if (error.code) {
    const errorRes: Error = {
      type: ErrorType.TIMEOUT,
      errorMessage: 'REQUEST TIMEOUT',
    };

    throw errorRes;
  }
};
