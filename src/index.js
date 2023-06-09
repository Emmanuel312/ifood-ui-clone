import React from "react";
import StatusBar from "@emmanuel312/react-native-statusbar";

import Routes from "./routes";

const Source = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Routes />
    </>
  );
};


export default Source;
