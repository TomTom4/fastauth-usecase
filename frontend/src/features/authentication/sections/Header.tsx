import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Link to="/">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </Link>
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
}
