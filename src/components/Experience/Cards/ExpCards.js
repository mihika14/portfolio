import React from 'react';
import "./ExpCard.css";

const ExpCard = () => {
  const details = [
    {
      title: "REACT DEVELOPER",
      organization: "SIMMI FOUNDATION",
      body: "As an intern at Simmi Foundation for three months, I gained practical experience in React.js, HTML, and CSS, while working collaboratively in a team environment. During my internship, I worked on various websites, honing my skills and gaining exposure to web development best practices"
    },
    {
      title: "CORE COUNCIL",
      organization: "VIDYUT",
      body: "I was an active core committee member in Vidyut-Electronics Society of Shaheed Rajguru College of Applied Sciences for women and successfully organized multiple events, leveraging my skills in event management, teamwork, and leadership."
    },
    {
      title: "HOCKEY PLAYER",
      organization: "2014-2019",
      body: "I have achieved the status of a national-level hockey player, demonstrating my dedication, perseverance, and hard work in the sport"
    }
  ]

  const Card = ({ title, organization, body }) => {
    return (
      <div className="card">
        <div className='card2'>
        <h2 className='cardTitle'>{title}</h2>
        <h3 className='organization'>{organization}</h3>
        <p className='cardBody'>{body}</p>
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
            body={detail.body}
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