import React from "react";
import "./Achievements.css";

const Achievements = () => {

    const options = [
    {
        Achievementtitle:"HOCKEY PLAYER",
        Achievementbody:"I exemplify hard work, dedication, and teamwork as a national-level hockey player, with skill, passion, and pride.",
        Achievementdate:"2014-2019"
    },
    {
        Achievementtitle:"TCS NQT",
        Achievementbody:"Click on the arrow below to check the score",
        Achievementlink:"https://drive.google.com/file/d/1Kcb5B5jqMUwUje2l82W73dDgfR_60brP/view?usp=share_link"
    },
    ]

    return (
            <div className="ui achievement">
              <h1 className="header4">ACHIEVEMENTS</h1>
              <div className="ui achievementcard">
              {options.map((option) => (
                <div className="cardachievement">
                  <h3 className="card__titleachievement">{option.Achievementtitle}</h3>
                  <p className="card__contentachievement">{option.Achievementbody}</p>
                  <div className="card__dateachievement">{option.Achievementdate}</div>
                  {option.Achievementtitle === "TCS NQT" && (
                    <a href={option.Achievementlink} className="card__arrowachievement">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
              </div>
            </div>
          );
          
    
}

export default Achievements;