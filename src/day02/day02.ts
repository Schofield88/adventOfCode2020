import { passwordReducer, updatedPasswordReducer } from './reducers/reducers';

interface PasswordValidator {
  (passwords: string[]): number;
}

const validatePasswordInformation: PasswordValidator = passwords => {
  return passwords.reduce(passwordReducer, 0);
};

const updatedValidatePasswordPolicy: PasswordValidator = passwords => {
  return passwords.reduce(updatedPasswordReducer, 0);
};

export { updatedValidatePasswordPolicy, validatePasswordInformation };
