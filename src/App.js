import React, { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [query, setQuery] = useState("");

  const getQueryFromInput = (data) => {
    setQuery(data);
  };

  return (
    <>
      <Searchbar giveDataToApp={getQueryFromInput} />
      <ImageGallery query={query} />
    </>
  );
}

export default App;
