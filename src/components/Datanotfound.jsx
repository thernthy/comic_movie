import React, { useState } from 'react';

const DataNotFoundLoading = ({message}) => {
  const [iconSrc, setIconSrc] = useState("https://cdn.lordicon.com/snnbetlb.json");
  const [trigger, setTrigger] = useState("loop");
  const [delay, setDelay] = useState("500");
  const [colors, setColors] = useState("primary:#e83a30,secondary:#e83a30,tertiary:#d1e3fa");
  const [style, setStyle] = useState({
    width: '250px',
    height: '250px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Move the element to the center
  });
  return (
    <lord-icon
      src={iconSrc}
      trigger={trigger}
      delay={delay}
      colors={colors}
      style={style}
    />
  );
};

export default DataNotFoundLoading;