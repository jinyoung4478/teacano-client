import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-20 gap-4">
      <p className="text-2xl font-bold">Page Not Found</p>
      <p className="text-2xl mb-4">( ᵕ ̯ ᵕ̩̩ )</p>
      <Link
        to={"/"}
        className="text-blue-300 hover:text-blue-600 hover:underline"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
