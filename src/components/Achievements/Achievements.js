import React from "react";
import "./Achievements.css";

const Achievements = () => {

  const options = [
    {
      Achievementtitle: "HOCKEY PLAYER",
      Achievementbody: "Achieved national recognition in hockey tournaments organized by CBSE.",
      Achievementdate: "2014-2019"
    },
    {
      Achievementtitle: "TCS NQT",
      Achievementbody: "TCS National Qualifier Test",
      Achievementlink: "https://drive.google.com/file/d/1Kcb5B5jqMUwUje2l82W73dDgfR_60brP/view?usp=share_link"
    },
  ]

  return (
    <div className="ui achievement">
      <h1 className="header4">ACHIEVEMENTS</h1>
      <div className="ui achievementcard">
        {options.map((option) => (
          <div className="cardachievement">
            <h3 className="card__titleachievement">{option.Achievementtitle}</h3>
            <div className="card__contentachievement">{option.Achievementbody}</div>
            {option.Achievementtitle === "TCS NQT" && (
              <a className = "card_link" href="https://drive.google.com/file/d/1Kcb5B5jqMUwUje2l82W73dDgfR_60brP/view?usp=share_link">CLICK HERE TO CHECK SCORE
              </a>
            )}
            <div className="card__dateachievement">{option.Achievementdate}</div>
          </div>
        ))}
      </div>
    </div>
  );


}

export default Achievements;