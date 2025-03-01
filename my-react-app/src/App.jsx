import React from "react";
import "./App.css";

const events = [
  { 
    title: "React Workshop", 
    date: "March 5", 
    description: "Learn React basics.", 
    link: "https://react.dev/",
    image: "https://source.unsplash.com/300x200/?technology"
  },
  { 
    title: "Career Fair", 
    date: "March 10", 
    description: "Meet top tech recruiters.", 
    link: "https://codepath.org/",
    image: "https://source.unsplash.com/300x200/?business"
  },
  { 
    title: "Hackathon", 
    date: "March 15", 
    description: "Compete in coding challenges.", 
    link: "https://hackathon.com/",
    image: "https://source.unsplash.com/300x200/?coding"
  },
  { 
    title: "Tech Talk", 
    date: "March 20", 
    description: "Guest speaker from Google.", 
    link: "https://google.com/",
    image: "https://source.unsplash.com/300x200/?conference"
  },
  { 
    title: "Resume Review", 
    date: "March 25", 
    description: "Get feedback on your resume.", 
    link: "https://resume.io/",
    image: "https://source.unsplash.com/300x200/?resume"
  },
  { 
    title: "Alumni Meetup", 
    date: "March 30", 
    description: "Network with UNC alumni.", 
    link: "https://unc.edu/",
    image: "https://source.unsplash.com/300x200/?students"
  },
  { 
    title: "Coding Bootcamp", 
    date: "April 5", 
    description: "Crash course on web dev.", 
    link: "https://codingbootcamp.com/",
    image: "https://source.unsplash.com/300x200/?programming"
  },
  { 
    title: "Startup Pitch Night", 
    date: "April 10", 
    description: "Watch startup pitches.", 
    link: "https://startup.com/",
    image: "https://source.unsplash.com/300x200/?startup"
  },
  { 
    title: "LinkedIn Workshop", 
    date: "April 15", 
    description: "Optimize your LinkedIn profile.", 
    link: "https://linkedin.com/",
    image: "https://source.unsplash.com/300x200/?linkedin"
  },
  { 
    title: "Tech Networking Event", 
    date: "April 20", 
    description: "Meet professionals in tech.", 
    link: "https://networkingevent.com/",
    image: "https://source.unsplash.com/300x200/?networking"
  }
];


function EventCard({ title, date, description, link, image }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <h1>Community Board</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default App;
