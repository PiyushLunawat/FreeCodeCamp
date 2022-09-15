import express from 'express';
import mongoose, { model } from 'mongoose';
import cors from 'cors';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



mongoose.connect('mongodb+srv://piyush:piyush@cluster0.ts0ct9r.mongodb.net/login?retryWrites=true&w=majority', () => {
    console.log("DB connected")
})

mongoose.connection.on('error', err => console.log(err))
mongoose.connection.on('connected', () => console.log('connected'))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


const CourseSchema  = mongoose.Schema({
    title: {type:String},
    duration: {type:String}
});

const Course = mongoose.model('course',CourseSchema);

/*const sayHi = (req, res) => {
    res.send("Hi!");
  };
  
  app.get("/", sayHi);*/

const User = new mongoose.model("User", userSchema)

app.get("/",(req,res)=>{
    res.send("this is a text")
})
app.get("/courses",async(req,res)=>{
    console.log("hello")
    
    let courses=await Course.find({});
    res.json(courses)
})
app.post('/signup',(req,res)=>{
    const { name, email, password}=req.body
     User.findOne({email: email}, (err, user) =>{
        if(user){
            {alert("Email id already exists")}
        } else{
            const user  = new User({   
        name:name,
        email:email,
        password:password
      });
    
    user.save( err =>{
        if(err){
            res.send(err)
        } else{
            res.send('Succesfully Registered!')
        }
    });
        }
     })    
}) 

app.listen(8000,(err)=>{
    console.log("Host working on 3001")
})