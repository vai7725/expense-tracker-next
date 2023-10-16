"use client";

import { handleExpenseForm } from "@/actions/expenseActions";
import React, { useRef } from "react";
import FormSubmitButton from "./FormSubmitButton";
import toast from "react-hot-toast";

export default function ExpenseForm() {
  const ref = useRef<HTMLFormElement>(null);

  const handleForm = async (formData: FormData) => {
    const res = await handleExpenseForm(formData);
    console.log(res);
    if (res?.error) {
      toast.error("Something went wrong");
    } else {
      toast.success("Expense saved successfully");
      ref.current?.reset();
    }
  };
  return (
    <form ref={ref} action={handleForm} className="my-8 w-full max-w-lg ">
      <div className="flex flex-col ">
        <label htmlFor="amount" className="mb-2 font-semibold text-gray-600">
          Amount
        </label>
        <input
          name="amount"
          type="number"
          id="amount"
          className="input input-primary mb-4"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="mode" className="mb-2 font-semibold text-gray-600">
          Mode
        </label>
        <select id="mode" name="mode" className="input input-primary mb-4">
          <option value="">--Select mode--</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="description"
          className="mb-2 font-semibold text-gray-600"
        >
          Description
        </label>
        <input
          name="description"
          type="text"
          id="description"
          className="input input-primary mb-4"
        />
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="paymentMethod"
          className="mb-2 font-semibold text-gray-600"
        >
          Payment method
        </label>
        <select
          name="paymentMethod"
          id="paymentMethod"
          className="input input-primary mb-4"
        >
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      <FormSubmitButton className={"btn btn-secondary mt-2 w-full text-white"}>
        Save
      </FormSubmitButton>
    </form>
  );
}
