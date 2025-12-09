import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google.png/320px-Google.png",
      companyName: "Google",
      datePosted: "3 days ago",
      position: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 72,
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      position: "Software Development Engineer I",
      tag1: "Full-time",
      tag2: "Junior",
      payPerHour: 65,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      position: "UI Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 80,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/240px-Meta_Platforms_Inc._logo.svg.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      position: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 78,
      location: "Gurugram, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/240px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      position: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 75,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2000px-Netflix_2015_logo.svg.png",
      companyName: "Netflix",
      datePosted: "2 days ago",
      position: "Senior Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      payPerHour: 95,
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/2000px-Tesla_Motors_Logo.svg.png",
      companyName: "Tesla",
      datePosted: "3 weeks ago",
      position: "Product Designer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 70,
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png",
      companyName: "Adobe",
      datePosted: "6 days ago",
      position: "Frontend Engineer",
      tag1: "Part-time",
      tag2: "Senior",
      payPerHour: 85,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
      companyName: "IBM",
      datePosted: "4 weeks ago",
      position: "Associate Developer",
      tag1: "Full-time",
      tag2: "Junior",
      payPerHour: 55,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/800px-Oracle_logo.svg.png",
      companyName: "Oracle",
      datePosted: "1 day ago",
      position: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 68,
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        console.log(elem.companyName);

        return (
          <div key={idx}>
            <Card
              logo={elem.brandLogo}
              company={elem.companyName}
              date={elem.datePosted}
              role={elem.position}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.payPerHour}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
