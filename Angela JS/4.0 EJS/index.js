import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date  = new Date();
    let today = date.getDay();
    var dayType = "";
    let advice = "";

    if (today === 0 || today === 6) {
        dayType = "the Weekend";
        advice = "Play Hard";
    }
    else {
        dayType = "a Weekday";
        advice = "Work Hard";
    }

    res.render("index.ejs", {dayType: dayType, advice: advice})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

