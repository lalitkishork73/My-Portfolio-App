import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white flex flex-col items-center p-3'>
        <div>
          <h1 className="font-signature text-4xl font-bold">
            <span className="text-yellow-500">L</span>alit
          </h1>
        </div>
        <div>
          <p>Copyright © 2022 Lalit Portfolio, Inc.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer