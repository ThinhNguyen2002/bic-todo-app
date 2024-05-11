export const REGEX_VALIDATION = {
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  DIGIT: /\d/,
  SPECIAL_CHARACTER: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  NO_WHITE_SPACE: /^[^\s].*[^\s]$/,
};
