import bcrypt from "bcryptjs";

const users = [
	{
		username: "admin",
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		username: "accel",
		name: "accel",
		email: "accel@hola.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		username: "jhon",
		name: "John Doe",
		email: "john@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		username: "jane",
		name: "Jane Doe",
		email: "jane@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
