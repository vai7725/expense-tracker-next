import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      trim: true,
    },
    mode: {
      type: String,
      required: [true, "Mode is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Expense =
  mongoose.models.expenses || mongoose.model("expenses", expenseSchema);

export default Expense;
