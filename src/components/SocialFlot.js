import React from 'react'
import links from '../Data/SocialFlotData'

const SocialFlot = () => {
  return (
    <>
    <div className=" lg:flex flex-col top-[35%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-90px] hover:rounded-md duration-300 bg-gray-500/30" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default SocialFlot