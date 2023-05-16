// Security
require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')
const date = require(__dirname + "/date.js")

const day = date.getDate()
const year = date.getYear()

const app = express()
const port = process.env.PORT || 3001

let items = [
  "Wake up and stretch/exercise for 10-15 minutes",
  "Hydrate with a glass of water",
  "Practice mindfulness/meditation for 5-10 minutes",
  "Set intentions for the day by writing down your top priorities/goals",
  "Eat a healthy breakfast to fuel your body and brain"
]
let workItems = []

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }))

// Serve static files from the "public" directory
app.use(express.static("public"))

app.get('/favicon.ico', (req, res) => {
  res.redirect('/')
})


app.get('/', (req, res) => {
  // res.send('Hello World!')
  // res.sendFile(__dirname + '/index.html')

  // return day
  res.render("list", {
    listTitle: day,
    listYear: year,
    colorTheme: "daily",
    newListItems: items,
  });

})


app.get('/work', (req, res) => {
  res.render("list", {
    listTitle: "Work",
    listYear: year,
    colorTheme: "work",
    newListItems: workItems
  })
})


app.get('/about', (req, res) => {
  res.render("about",
    {
      listTitle: "About To Do List ",
      listYear: year
    })
})


app.post('/', (req, res) => {

  if (req.body.list === 'Work') {
    let item = req.body.newItem;
    if (item.trim() === '') {
      console.error('Error: String is empty!');
    } else {
      workItems.push(item);
      res.redirect("/work")
      // console.log(item)
      // console.log(req.body)
    }
  }
  else {
    let item = req.body.newItem;
    if (item.trim() === '') {
      console.error('Error: String is empty!');
    }
    else {
      items.push(item);
      res.redirect("/")
      // console.log(item)
      // console.log(req.body)
    }
  }


})



app.listen(port, () => {
  console.log(`----------------------------------------\n`
    + path.basename(__filename)
    + ` listening on port ${port}`
    + `\n----------------------------------------`)
})
// app.listen(port, () => console.log(`${path.basename(__filename)} listening [${port}]`))




// app.post('/', (req, res) => {
//   var num1 = +req.body.num1;
//   var num2 = +req.body.num2;
//   var result = num1 + num2;
//  console.log(result)
//     // console.log(req.body.num1)
//     res.send("thanks for posting that and sum is " + result)
// })


// var today = new Date()
// var currentDay = today.getDay()
// if (currentDay === 6 || currentDay === 0) {
//   // Send an HTML response to the client
//   res.type('html')
//   res.write("<h1>Yayyyyyyyy</h1>")
//   res.write("It's the weekend!")
//   res.send()
// } else {
//   res.type('html')
//   res.write("<h1>Work time!</h1>")
//   res.write("Boo! I have to work! ")
//   res.send()
// }





  // // var currentDay = 0
  // switch (currentDay) {
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   case 7:
  //     day = "Sunday";
  //     break;
  //   default:
  //     console.log("Error: current day is equal to:" + currentDay)
  // }
