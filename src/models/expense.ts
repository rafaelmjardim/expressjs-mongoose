import { model, Schema, Document } from 'mongoose';

interface ExpenseType extends Document {
    name: string
    value: number
}

const ExpenseSchema = new Schema({
    name: {
        Type: String
    },
    value: {
        type: Number
    },
});

const ExpenseModel = model<ExpenseType>('expense', ExpenseSchema);

export { ExpenseModel, ExpenseType};