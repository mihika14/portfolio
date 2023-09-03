import React from "react";
import "./Education.css"; // Assuming your CSS for .bg and .blob is defined here

const Education = () => {
  const educationData = [
    {
      type: "College",
      timeline: [
        {
          year: "2020-2023",
          title: "Bsc(Hons.) Electronics",
          institution: "Delhi University , 8.29 CGPA",
        },
      ],
    },
    {
      type: "School",
      timeline: [
        {
          year: "2019-2020",
          title: "PCM , Class 12",
          institution: "DMA Rampur , 87.00%",
        },
      ],
    },
    {
      type: "School",
      timeline: [
        {
          year: "2017-2018",
          title: "Class 10",
          institution: "DMA Rampur , 92.6%",
        },
      ],
    },
  ];

  return (
    <div className="education-extracurii">
      <div className="education">
        <h1 className="education-header">Education Timeline</h1>
        <ul className="timeline">
          {educationData.map((educationItem, index) => (
            <li
              className="event"
              key={index}
              data-date={educationItem.timeline[0].year}
            >
              <h3 className="education-title">
                {educationItem.timeline[0].title}
              </h3>
              <p className="education-inst">
                {educationItem.timeline[0].institution}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="extracurricular">
        <h1 className="education-header">Extracurricular Engagements</h1>
        <div className="extracurricular-container">
          <div class="extracurricular-item">
            <h2>National-Level Hockey Player (2014-2019):</h2>
            <hr />
            <p>
              <ul>
                <li>
                  During my school years, I was an integral part of the
                  national-level hockey team for five years, participating in
                  prestigious championships and tournaments
                </li>
                <br />{" "}
                <li>
                  This experience honed my teamwork, discipline, and
                  perseverance, enabling me to excel on and off the field
                </li>
              </ul>
            </p>
          </div>
          <br />
          <div class="extracurricular-item">
            <h2>Departmental Council (College):</h2>
            <hr />
            <p>
              <ul>
                <li>
                  In college, I actively engaged with the academic community as
                  a dedicated member of the departmental council.
                </li>
                <br />
                <li>
                  {" "}
                  I undertook various responsibilities, including organizing
                  events and improving student-faculty communication.
                </li>
                <br />
                <li>
                  {" "}
                  My leadership, communication, and problem-solving skills
                  flourished through this involvement.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
