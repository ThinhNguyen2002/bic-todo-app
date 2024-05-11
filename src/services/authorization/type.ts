export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
  username: string;
  fullName: string;
};

export type DataStorageResponse = Omit<SignUpRequest, 'password'> & {
  password?: string;
};
