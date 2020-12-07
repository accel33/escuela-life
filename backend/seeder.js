import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

// Inicializar dotenv
dotenv.config();

// conectar a la base de datos a travez de el modulo connectDB
connectDB();

const importData = async () => {
	try {
		// Intentamos borrar de la base de datos MongoDB, las collecciones
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		// Importamos toda la data en nuestro arhcivo dentro la colleccion Usuarios
		const createdUsers = await User.insertMany(users);

		// Sacamos el primer usuario
		const adminUser = createdUsers[0]._id;

		// Obtenemos los productos y a cada uno le agregamos el Usuario Administrador
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

// Borrar la base de datos
const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
