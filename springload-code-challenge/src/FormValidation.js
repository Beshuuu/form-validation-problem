// Using null check on each validation rule as an override for default state
// Would prefer to use something like Redux forms to trigger validation on submission using form state

export const validateEmail = email => {
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === null || email.match(validRegex)) {
        return true;
    }
    return false;
};

export const validatePassword = password => {
    return password === null || password.trim().length > 8
};

export const validateField = fieldValue => {
    return fieldValue === null || !!fieldValue.trim();
};
