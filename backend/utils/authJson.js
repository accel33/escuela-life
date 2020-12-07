import generateToken from "./generateToken.js";

const authJson = (user) => {
	return {
		_id: user._id,
		username: user.username,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
		token: generateToken(user._id),
	};
};

export default authJson;
