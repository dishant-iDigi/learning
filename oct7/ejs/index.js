import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    
//   const date = new Date("June 24, 2023 11:33:00");
  const date = new Date();
  const day = date.getDay();
  
  let type = "Week Day .";
  let adv = " work hard !";

    if(day === 0 || day ===6){
     type = "Weekend .";
     adv = "funday !";
    }

    
    res.render("index.ejs",{
        DayType : type,
        advice : adv,    
    });
})

app.listen(port, (req, res) => {
    console.log(`listening to the port ${port} !! `);
})