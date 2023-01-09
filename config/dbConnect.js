import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joaoCurtarelli:Jv99300152@alura.dn2uxdd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;