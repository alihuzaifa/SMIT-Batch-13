import bcrypt from "bcrypt";
const users = [];

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = users.find((obj) => obj.email === email);
  if (isUserExist) {
    return res.send({
      message: `User already exists against this ${email}`,
    });
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const userObj = {
    name,
    email,
    password: hashedPassword,
    id: Date.now(),
    token: "",
  };
  users.push(userObj);
  return res.send({
    message: `User created successfully`,
    user: userObj,
  });
};

const signinUser = (req, res) => {};

export { createUser, signinUser };
