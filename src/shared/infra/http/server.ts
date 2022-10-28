import express, { Request, Response } from "express";
import { router } from "../../routes";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => { console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`) });