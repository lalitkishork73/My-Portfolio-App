import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-transparent text-white flex flex-col items-center p-3 ">
        <div>
          <h1 className="font-signature text-4xl font-bold mt-5">
            <span className="text-yellow-500">L</span>alit
          </h1>
        </div>
        <div className="mt-5">
          <p>Copyright © 2022 Lalit Portfolio, Inc.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer