import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  const date=new Date()
  return (
    <>
      <footer className="bg-transparent text-white flex flex-col items-center p-3 ">
        <div>
          <Link to='/'> <h1 className="font-signature text-4xl font-bold mt-5">
            <span className="text-yellow-500">L</span>alit
          </h1>
          </Link>
        </div>
        <div className="mt-5 text-sm">
          <p>Copyright © {date.getFullYear()} Lalit Portfolio, Inc.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer