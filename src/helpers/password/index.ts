import BcryptReactNative from 'bcrypt-react-native';

export const hashPassword = async (password: string) => {
  try {
    const salt = await BcryptReactNative.getSalt(10);

    // Hash password
    const hashedPassword = await BcryptReactNative.hash(salt, password);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
) => {
  try {
    // Compare password with hashed password
    const isMatch = await BcryptReactNative.compareSync(
      plainPassword,
      hashedPassword,
    );
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};
