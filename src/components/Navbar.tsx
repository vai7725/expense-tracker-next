import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" dropdown-content rounded-box z-[1] mt-3 flex w-52 flex-col items-start justify-between  bg-base-100 py-2 text-primary shadow"
          >
            <li className=" my-1 w-full px-3 py-1 active:bg-gray-300">
              <Link href={`/`}>Expense</Link>
            </li>

            <li className=" my-1 w-full px-3 py-1 active:bg-gray-300">
              <Link href={`/records`}>Records</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl normal-case">
          Expense Tracker
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center justify-between px-1">
          <li className="mx-4 hover:cursor-pointer hover:text-gray-400">
            <Link href={`/`}>Expense</Link>
          </li>

          <li className="mx-4 hover:cursor-pointer hover:text-gray-400">
            <Link href={`/records`}>Records</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
