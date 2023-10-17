import { getExpenseRecords } from "@/actions/expenseActions";
import Expense from "@/models/expenseModel";
import Drawer from "./Drawer";

export default async function Records() {
  const expenseData = await getExpenseRecords({});
  const totals = expenseData.reduce(
    (accumulator, currentValue) => {
      if (currentValue.mode === "credit") {
        accumulator.totalCredits += +currentValue.amount;
      } else if (currentValue.mode === "debit") {
        accumulator.totalDebits += +currentValue.amount;
      }
      return accumulator;
    },
    { totalCredits: 0, totalDebits: 0 },
  );

  const cashFlowPositive = totals.totalCredits > totals.totalDebits;

  return (
    <>
      {/* drawer btn */}
      <div className="drawer-content flex justify-end my-4">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </label>
      </div>

      <div className="overflow-x-auto">
        {/* table */}
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-300 text-primary ">
            <tr>
              <th></th>
              <th className="min-w-[120px]">Amount</th>
              <th className="min-w-[100px]">Mode</th>
              <th className="min-w-[150px]">Description</th>
              <th className="min-w-[150px]">Payment Method</th>
              <th className="min-w-[160px]">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((row, i) => {
              return (
                <tr
                  key={row._id}
                  className={` ${
                    row.mode === "credit"
                      ? "hover:bg-green-100"
                      : "hover:bg-red-100"
                  }`}
                >
                  <th>{i}</th>
                  <td
                    className={`font-semibold ${
                      row.mode === "credit" ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {row.amount}
                  </td>
                  <td>{row.mode}</td>
                  <td>{row.description}</td>
                  <td>{row.paymentMethod}</td>
                  <td>{row.createdAt.toDateString()}</td>
                </tr>
              );
            })}
            <tr>
              <th colSpan={3}>Total credits</th>
              <td className="font-semibold text-green-800" colSpan={3}>
                {totals.totalCredits}
              </td>
            </tr>

            <tr>
              <th colSpan={3}>Total debits</th>
              <td className="font-semibold text-red-800" colSpan={3}>
                {totals.totalDebits}
              </td>
            </tr>

            <tr>
              <th colSpan={3}>Cashflow</th>
              <td
                className={`font-semibold ${
                  cashFlowPositive ? "text-green-700" : "text-red-800"
                }`}
                colSpan={3}
              >
                {cashFlowPositive ? "Positive" : "Negative"}
              </td>
            </tr>
          </tbody>
        </table>
        <Drawer expenseData={expenseData} />
      </div>
    </>
  );
}
