// * /api data only test with insomnia, not the browser

const { Router } = require("express");
const User = require("../../models/User");

const userRouter = Router();

userRouter.get("/all", async (req, res, next) => {
  console.log("GET all Users...", req.session);
  try {
    // * awaiting for users to be found, sequlize returns a promise so we have to await it in async function
    const users = await User.findAll({});

    if (!users) {
      res.status(400).json({ message: "Cannot GET /api/users: no users found!" });
    }

    console.log({ users });

    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // ? optional finally block code will always run regardless if err is caught
    console.info("GET /api/users endpoint was pinged!");
    next();
  }
});

userRouter.post("/register", async (req, res, next) => {
  console.info("POST new user", req.session);
  const { email, password, confirmPassword } = req?.body;
  try {
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
