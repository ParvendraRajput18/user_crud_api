const express = require("express")
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json")
const fs = require("fs")

// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//below 2 fucntions are middleware concepts
app.use((req, res, next) => {
   next();
})
app.use((req, res, next) => {
   next()
})



//Html doxument rendering 
app.get("/getUsers", (req, res) => {
   const html = `
  <ul>
  ${users.map((users) => `<li>${users.first_name}</li>`).join(" ")}
  <ul/>
  `;
   res.send(html)

})


// Routes
app.get("/api/getUsers", (req, res) => {

   res.json(users);
})

app.post("/api/user", (req, res) => {
   //create user 

   const body = req.body;
   users.push({ ...body, id: users.length + 1 });
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success generated id", id: users.length });


   })


})



app.route("/api/getUsers/:id")
   .get((req, res) => {
      // get the user with id 

      const id = Number(req.params.id);
      const user = users.find((oneUser) => oneUser.id === id)
      return res.send(user)
   })

   .patch((req, res) => {
      //edit the user with id 
      try {
         const id = Number(req.params.id);
         const index = users.findIndex((oneUser) => oneUser.id === id);
         if (index === -1) {
            return res.status(404).json({ status: "can't edit the used who doesn't exist" });
         }
         else {
            const body = req.body;
            users.push({ ...body, id: users.length + 1 });
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
               return res.json({ status: "success editing the user with id ", id: users.length });
            })

         }

      } catch (err) {
         return res.json({ status: "Error in Editing the user" })

      }


   })

   .delete((req, res) => {
      // delete the user with id 

      const id = Number(req.params.id);
      const index = users.findIndex((oneUser) => oneUser.id === id);
      if (index === -1) {
         return res.status(404).json({ status: "can't delete the used who doesn't exist" });
      }
      users.splice(index, 1);
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
         if (err) {
            return res.status(500).json({ status: "Error writing file" });
         }
         return res.json({ status: "Deleted the ID: " + id });
      });




   })














app.get("/", (req, res) => {

   res.send("<h1>I Home page </h1>")
})

app.listen(PORT, () => {
   console.log("App running on port", PORT);
})