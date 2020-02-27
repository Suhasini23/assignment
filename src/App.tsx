import React, { useState } from 'react';
import './App.css';
import ImageList from './Containers/ImageList';
import { appTitle } from './Constants';
import "./Containers/SearchBoxStyle.css"
function App() {
  const [searchText, setSearchText] = useState("decent random");

  const onChangeHandler = (item: string) => {
    if (item.length > 0) {
      setSearchText(item);
    } else {
      setSearchText("decent random");
    }
  }
  return (
    <div className="App container-fluid">
      <div className="HeaderWrapper">
        <p className="HeaderTitle">{appTitle}</p>
        <input
          className=""
          type="text"
          placeholder="Search anything"
          onChange={(e: any) => onChangeHandler(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="row">
          <ImageList text={searchText} />
        </div>
      </div>
    </div>
  );
}

export default App;
