const express = require("express");

const router = express.Router();




const login = async (req, res) => {
	console.log("called")
	const { email, password } = req.body;

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

router.post('/login', login);
module.exports = router;
