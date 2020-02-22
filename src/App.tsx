import React, { useState } from 'react';
import './App.css';
import ImageList from './Containers/ImageList';
import { appTitle } from './Constants';
import "./Containers/SearchBoxStyle.css"
function App() {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (item: string) => {
    setSearchText(item);
  }
  return (
    <div className="App container-fluid">
      <div className="HeaderWrapper">
        <p className="HeaderTitle">{appTitle}</p>
        <input
          className=""
          type="text"
          placeholder="Search anything"
          value={searchText}
          onChange={(e: any) => onChangeHandler(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="row">
          <ImageList text={searchText}/>
        </div>
      </div>
    </div>
  );
}

export default App;
