const login = ({ accessToken }: { accessToken: string }) => {
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem(accessToken, 'accessToken');
}

export default login;