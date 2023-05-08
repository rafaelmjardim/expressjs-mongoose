import { Router } from "express";
import { ExpenseModel, ExpenseType } from "../models/expense";

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const expenses: ExpenseType[] = await ExpenseModel.find().exec();
        return res.json(expenses);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error! '});
    }
})

export default routes;