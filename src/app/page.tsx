import { handleExpenseForm } from "@/actions/expenseActions";
import ExpenseForm from "@/components/ExpenseForm";
import FormSubmitButton from "@/components/FormSubmitButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
        Track your expenses
      </h1>
      <ExpenseForm />
    </div>
  );
}
