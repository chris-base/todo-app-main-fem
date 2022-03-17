import "../Styles/TitleDarkLightStyles.css";

import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

const TitleDarkLightComponent = ({ theme, setTheme }) => {
  return (
    <div id='titleContainer'>
      <h1 id='titleText'>TODO</h1>

      <div
        id='darkLightIcon'
        onClick={() => setTheme(!theme)}
        style={theme ? { backgroundImage: "url(" + iconMoon + ")" } : { backgroundImage: "url(" + iconSun + ")" }}
      />
    </div>
  );
};

export default TitleDarkLightComponent;
