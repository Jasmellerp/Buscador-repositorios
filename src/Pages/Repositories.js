
import React from 'react'
import SearchList from '../Components/Searchfield/SearchList';
import ThemeIcon from '../Components/ThemeIcon';
import useTheme from '../hooks/useTheme';

const repositories = () => {
  const changeTheme = useTheme()
  const handleChangeThemeClick = (event) => {
    event.preventDefault()
    changeTheme()
    window.location.reload()
  }

  return (
    <div>
      <div className="repositories-header">
        <button onClick={handleChangeThemeClick} className="theme-button outline">
          <ThemeIcon className="theme-icon" />
        </button>
      </div>
      <SearchList />
    </div>
  )
}

export default repositories;
