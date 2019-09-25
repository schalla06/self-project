import { composeValidators, required } from '../../utils/validation';

export const initialState = {
    firstName: {
        value: '',
        error: false,
        errorMessage: '',
        disableButton: true,
        validators: composeValidators(required())
    },
    lastName: {
        value: '',
        error: false,
        errorMessage: '',
        disableButton: true,
        validators: composeValidators(required())
    },
    address1: {
        value: '',
        error: false,
        errorMessage: '',
        disableButton: true,
        validators: composeValidators(required())
    },
    address2: {
        value: '',
        error: false,
        errorMessage: '',
        disableButton: true,
        validators: composeValidators()
    }
}