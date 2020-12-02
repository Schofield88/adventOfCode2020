import {
  PasswordReducer,
  passwordReducer,
  updatedPasswordReducer,
} from './reducers/reducers';

interface PasswordValidator {
  (passwords: string[]): number;
}

const makeValidatorWith = (
  reducer: PasswordReducer,
): PasswordValidator => passwords => passwords.reduce(reducer, 0);

const validatePasswordInformation = makeValidatorWith(passwordReducer);

const updatedValidatePasswordPolicy = makeValidatorWith(updatedPasswordReducer);

export { updatedValidatePasswordPolicy, validatePasswordInformation };
