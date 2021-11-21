import React, { useState } from 'react';
import './Tooltip.css';

interface IProps {
  children: React.ReactNode;
  textInfo: string;
}

const Tooltip = ({ children, textInfo }: IProps) => {
  const [hovered, setHovered] = useState(false as boolean);

  const mouseOver = (e: React.SyntheticEvent): void => {
    setHovered(true);
    e.stopPropagation();
  };

  const mouseOut = (e: React.SyntheticEvent): void => {
    setHovered(false);
    e.stopPropagation();
  };

  return (
  // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div className="tooltip" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {
        hovered && (
          <div className="tooltip__info">
            {textInfo}
          </div>
        )
      }
      {children}
    </div>
  );
};

export default Tooltip;
