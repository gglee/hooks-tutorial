import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('black');
function ContextSample() {
  const theme = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme
  };
  return <div style={style} />;
}

export default ContextSample;
