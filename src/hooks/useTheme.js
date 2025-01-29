
function useTheme() {
    const changeTheme = () => {

        if (localStorage.theme === 'light') return localStorage.theme = 'dark'
        return localStorage.theme = 'light'
    }

    return changeTheme
}

export default useTheme
