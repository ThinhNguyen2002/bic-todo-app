import {AxiosError} from 'axios';

export const responseError = async (error: AxiosError) => {
  if (error.code === 'ERR_CANCELED') {
    //Error handling when unable to connect to the Internet
    throw error;
  } else if (error.response) {
    const {status, config} = error.response;

    switch (status) {
      case 400:
        if (!config.url) {
          //TODO: Handle error 400
        }
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
};
