export default function Drawer({ expenseData }) {
  const months = Array.from(
    new Set(
      expenseData.map((data) => data.createdAt.toDateString().split(" ")[1]),
    ),
  );

  const days = Array.from(
    new Set(
      expenseData.map((data) => data.createdAt.toDateString().split(" ")[2]),
    ),
  );

  const mode = Array.from(new Set(expenseData.map((data) => data.mode)));
  const paymentMethod = Array.from(
    new Set(expenseData.map((data) => data.paymentMethod)),
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Month</div>

            <div className="collapse-content ">
              {months.map((month, i) => (
                <div key={i} className="flex items-center justify-start mb-2">
                  <input
                    type="radio"
                    name="month"
                    id={month}
                    className="radio radio-secondary mr-2"
                  />
                  <label htmlFor={month} className="text-lg">
                    {month}
                  </label>
                </div>
              ))}
              {/* <input
                type="radio"
                name="month"
                id="month"
                className="radio radio-secondary mr-2"
              />
              <label htmlFor="month" className="text-lg"></label> */}
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Day</div>
            <div className="collapse-content ">
              {days.map((day, i) => (
                <div key={i} className="flex items-center justify-start mb-2">
                  <input
                    type="radio"
                    name="day"
                    id={day}
                    className="radio radio-secondary mr-2"
                  />
                  <label htmlFor={day} className="text-lg">
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Mode</div>
            <div className="collapse-content ">
              {mode.map((mode, i) => (
                <div key={i} className="flex items-center justify-start mb-2">
                  <input
                    type="radio"
                    name="mode"
                    id={mode}
                    className="radio radio-secondary mr-2"
                  />
                  <label htmlFor={mode} className="text-lg">
                    {mode}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Payment method
            </div>
            <div className="collapse-content ">
              {paymentMethod.map((method, i) => (
                <div key={i} className="flex items-center justify-start mb-2">
                  <input
                    type="radio"
                    name="method"
                    id={method}
                    className="radio radio-secondary mr-2"
                  />
                  <label htmlFor={method} className="text-lg">
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
