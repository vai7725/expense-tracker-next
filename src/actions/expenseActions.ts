"use server";

import { connect } from "@/config/config";
import Expense from "@/models/expenseModel";
import { revalidatePath } from "next/cache";

connect();
export const handleExpenseForm = async (formData: FormData) => {
  const amount = formData.get("amount");
  const mode = formData.get("mode");
  const description = formData.get("description");
  const paymentMethod = formData.get("paymentMethod");

  try {
    await Expense.create({
      amount,
      mode,
      description,
      paymentMethod,
    });
  } catch (error) {
    return { error };
  }
};

export const getExpenseRecords = async ({ ...filters }) => {
  try {
    const data = await Expense.find();
    revalidatePath("/records");
    return data;
  } catch (error) {
    return error;
  }
};
