import React from "react";
import Card from "./components/card/Card.jsx";

const App = () => {
    const jobData = [
        {
            id: 1,
            img: "https://logoapi.sh/google.com.svg",
            company: "Google",
            job: "Frontend Developer",
            type: ["Full Time", "Mid Level"],
            tag1: "Remote",
            tag2: "Engineering",
            price: 45,
            adrs: "Mountain View, CA"
        },
        {
            id: 2,
            img: "https://logoapi.sh/microsoft.com.svg",
            company: "Microsoft",
            job: "React Developer",
            type: ["Full Time", "Senior Level"],
            tag1: "Hybrid",
            tag2: "Frontend",
            price: 55,
            adrs: "Redmond, WA"
        },
        {
            id: 3,
            img: "https://logoapi.sh/amazon.com.svg",
            company: "Amazon",
            job: "UI/UX Designer",
            type: ["Part Time", "Entry Level"],
            tag1: "Remote",
            tag2: "Design",
            price: 40,
            adrs: "Seattle, WA"
        },
        {
            id: 4,
            img: "https://logoapi.sh/netflix.com.svg",
            company: "Netflix",
            job: "Backend Developer",
            type: ["Full Time", "Senior Level"],
            tag1: "On-site",
            tag2: "Backend",
            price: 60,
            adrs: "Los Gatos, CA"
        },
        {
            id: 5,
            img: "https://logoapi.sh/spotify.com.svg",
            company: "Spotify",
            job: "Product Designer",
            type: ["Part Time", "Mid Level"],
            tag1: "Remote",
            tag2: "Creative",
            price: 42,
            adrs: "New York, NY"
        },
        {
            id: 6,
            img: "https://logoapi.sh/adobe.com.svg",
            company: "Adobe",
            job: "Full Stack Developer",
            type: ["Full Time", "Mid Level"],
            tag1: "Hybrid",
            tag2: "Engineering",
            price: 50,
            adrs: "San Jose, CA"
        },
        {
            id: 7,
            img: "https://logoapi.sh/uber.com.svg",
            company: "Uber",
            job: "Software Engineer",
            type: ["Full Time", "Entry Level"],
            tag1: "Remote",
            tag2: "Software",
            price: 48,
            adrs: "San Francisco, CA"
        },
        {
            id: 8,
            img: "https://logoapi.sh/airbnb.com.svg",
            company: "Airbnb",
            job: "Mobile App Developer",
            type: ["Part Time", "Internship"],
            tag1: "Hybrid",
            tag2: "Mobile",
            price: 46,
            adrs: "San Francisco, CA"
        },
        {
            id: 9,
            img: "https://logoapi.sh/figma.com.svg",
            company: "Figma",
            job: "Web Designer",
            type: ["Full Time", "Mid Level"],
            tag1: "Remote",
            tag2: "Design",
            price: 38,
            adrs: "New York, NY"
        },
        {
            id: 10,
            img: "https://logoapi.sh/tesla.com.svg",
            company: "Tesla",
            job: "Python Developer",
            type: ["Full Time", "Entry Level"],
            tag1: "On-site",
            tag2: "Engineering",
            price: 52,
            adrs: "Austin, TX"
        }
    ];

    // function(ele) {} .
    // (ele) => {} → Arrow function.
    // (ele) => () → Arrow function with implicit return (useful for JSX).
    return (
        <div className="parent">
            {jobData.map(function (ele) {
                // console.log(ele.id);  
                return <div key = {ele.id}>
                    <Card
                        img={ele.img} company={ele.company} job={ele.job} tag1={ele.tag1} tag2={ele.tag2} price={ele.price} adrs={ele.adrs}
                    />
                </div>
            })
            }
        </div>
    );
};

export default App;