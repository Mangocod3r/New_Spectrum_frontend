// authUtils.js

export const getTokenFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    return userData ? userData.token : null;
};
