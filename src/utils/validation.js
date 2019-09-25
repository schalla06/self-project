const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const required = () => value => (value ? undefined : 'Required');

export {
    composeValidators,
    required
};