import React from 'react';
import "./ExpCard.css";

const ExpCard = () => {
  const details = [
    {
      title: "REACT DEVELOPER",
      organization: "Simmi Foundation",
      date:"(Sept 2022-Dec 2022)",
      body: "During my three-month internship at Simmi Foundation, I had the opportunity to work with a team of developers and gain practical experience in React.js, JavaScript, HTML, and CSS . Worked on various websites , providing me with hands-on experience and exposure to Front-end web development best practices.",
      link: "https://drive.google.com/drive/folders/1Cc6YIGhz8BsYNDIQ8EiSPD5CG0Nygtr8?usp=sharing"
      
    },
    {
      title: "CORE COUNCIL",
      organization: "Vidyut",
      body: "As a core committee member of the Vidyut-Electronics Society at SRCASW, I leveraged my skills in event management,teamwork,and leadership to successfully organize and execute multiple events.Through effective coordination, communication,I ensured the smooth functioning and played a vital role in their overall success.",
      link: "https://www.instagram.com/vidyut.srcasw/?hl=en"
    },
    {
      title: "MODERN REACT WITH REDUX",
      organization: "Udemy",
      body: "This course provided me with a solid understanding of how to create complex and dynamic user interfaces using React.The course also covered state management in depth, which is crucial for building complex React applications. And how to use more advanced state management libraries such as Redux to handle complex state.",
    },
    {
      title: "AUTHENICATION SERVER",
      organization: "Devtown",
      body: "In a seven-day workshop, I was able to develop a secure and reliable authentication server using MongoDB and Node.js . During this project, I learned how to integrate MongoDB, with Node.js. This project provided me with hands-on experience in building a secure and scalable authentication system using MongoDB and Node.js.",
      link:"https://drive.google.com/file/d/1P_XCKgmGgM0EDWYNPfWHhAQ10LLoKkTY/view?usp=sharing"
    }
  ]

  const Card = ({ title, organization, date ,body, link }) => {
    const handleClick = () => {
      window.open(link, '_blank');
    }

    return (
      <div className="card">
        <div className='card2'>
          <h2 className='cardTitle'>{title}</h2>
          <h3 className='organization'>{organization}</h3>
          <h3 className="date">{date}</h3>
          <p className='cardBody'>{body}</p>
          <button className='box' onClick={handleClick}>
            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
              <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
            </svg></button>
        </div>
      </div>
    );
  };


  const CardList = ({ details }) => {
    return (
      <div className="cardList">
        {details.map((detail, index) => (
          <Card
            key={index}
            title={detail.title}
            organization={detail.organization}
            date={detail.date}
            body={detail.body}
            link={detail.link}
          />
        ))}
      </div>
    );
  };


  return (
    <div>
      <CardList details={details} />
    </div>

  )
}
export default ExpCard;
