const express = require("express");
const cors = require("cors");
const User = require('./models/registers');

const app = express();
const port = process.env.PORT || 2000;
require("./db/conn");
app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// const loginRoute = require("./login.js");/

// app.use("/api/login", loginRoute);
const login = async (req, res) => {
	console.log("called")
	// console.log(req)

	const { email, password } = req.body;
    console.log(req.body)
    console.log(email,password)

	if (!email || !password) {
		return res.json({ msg: "fail" });
	}
	const user = await User.findOne({ email });


	if (!user) {
		return res.json({ msg: "fail" });
	}
	const isPasswordCorrect = await user.comparePassword(password);

	if (!isPasswordCorrect) {
		return res.json({ msg: "fail" });
	}

	res.json({ msg: "success" });
};


app.get("/", (req, res) => {
    res.send("Hello from me !")
});
app.post("/api/login",login)
app.listen(port, () => {
    console.log(`Server is running at port number ${port}`)
});



const register = async (req, res) => {
	console.log("called")
	// console.log(req)

	const {name,email,password} = req.body;
    console.log(name,email,password)

	if (!email || !password) {
		return res.json({ msg: "fail" });
	}
	const user = await User.findOne({ email });

	if(user){
		res.status(404).json({ msg:"Failed" });
	}
	
	if (!user) {
		User.create({
			name,email,password
		})
	}
	res.json({ msg: "success" });
};

app.post("/api/register",register)