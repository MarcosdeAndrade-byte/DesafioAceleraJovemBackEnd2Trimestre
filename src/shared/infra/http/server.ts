import express from "express";
import { openDb } from "../../../../configDB";
const app = express();

openDb();

const PORT = 3000;
app.listen(PORT, () => { console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`) });