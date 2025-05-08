import { ThemeContext, themes } from "../context/ThemeContext";
import { useContext } from "react";

const Button = ({ label, onClick}) => {
  const context = useContext(ThemeContext);
  const theme = context?.theme || themes.light;

  return (
    <div className="button" onClick={onClick} style={{color: theme.foreground}}>
      {label}
    </div>
  );
};

export default Button;
