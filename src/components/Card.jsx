import { ThemeContext, themes } from "../context/ThemeContext";

import { useContext } from "react";

const Card = ({ children, style }) => {
  const context = useContext(ThemeContext);
  const theme = context?.theme || themes.light;
  return (
      <div className="card" style={{backgroundColor: theme.background, color:  theme.foreground}}>
        <div className="card-container" style={style}>
          {children}
        </div>
      </div>
  );
};

export default Card;
