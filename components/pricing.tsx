import React from 'react'

type Props = {}

export default function Pricing({}: Props) {
  return (
    <main className='flex justify-around items-center mb-10'>
        <div className="bg-white w-60 p-5 pt-2 pb-5 rounded-lg border-b-4 border-black shadow-lg font-poppins">
    <h2 className="mb-4 text-2xl font-semibold">
      Business
      <span className="block -mt-1 text-gray-500 text-xs font-normal">For business services</span>
    </h2>
    <div className="relative bg-yellow-500 w-[14.46rem] -ml-2.5 px-5 py-1 rounded-l-md">
      <p className="m-0 pt-1 flex text-[1.9rem] font-medium">
        $254.99
        <span className="ml-1 text-sm font-light">/ handle</span>
      </p>
      <div className="absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] border-t-[#c58102] border-b-[10px] border-b-transparent border-r-[13px] border-r-transparent z-[-6]"></div>
    </div>
    <div className="mt-4">
      <ul className="p-0 text-sm">
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Analysis</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Consulting</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Facilitate</span>
        </li>
      </ul>
    </div>
    <div className="flex justify-center mt-5">
      <a href="#" className="flex justify-center items-center bg-black text-white px-4 py-2 rounded-md text-xs tracking-wide font-medium transition-transform duration-300 ease-in-out hover:translate-y-[-3%] hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-[.9rem] fill-current">
          <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
        </svg>
        Read More
      </a>
    </div>
  </div><div className="bg-white w-60 p-5 pt-2 pb-5 rounded-lg border-b-4 border-black shadow-lg font-poppins">
    <h2 className="mb-4 text-2xl font-semibold">
      Business
      <span className="block -mt-1 text-gray-500 text-xs font-normal">For business services</span>
    </h2>
    <div className="relative bg-yellow-500 w-[14.46rem] -ml-2.5 px-5 py-1 rounded-l-md">
      <p className="m-0 pt-1 flex text-[1.9rem] font-medium">
        $254.99
        <span className="ml-1 text-sm font-light">/ handle</span>
      </p>
      <div className="absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] border-t-[#c58102] border-b-[10px] border-b-transparent border-r-[13px] border-r-transparent z-[-6]"></div>
    </div>
    <div className="mt-4">
      <ul className="p-0 text-sm">
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Analysis</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Consulting</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Facilitate</span>
        </li>
      </ul>
    </div>
    <div className="flex justify-center mt-5">
      <a href="#" className="flex justify-center items-center bg-black text-white px-4 py-2 rounded-md text-xs tracking-wide font-medium transition-transform duration-300 ease-in-out hover:translate-y-[-3%] hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-[.9rem] fill-current">
          <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
        </svg>
        Read More
      </a>
    </div>
  </div><div className="bg-white w-60 p-5 pt-2 pb-5 rounded-lg border-b-4 border-black shadow-lg font-poppins">
    <h2 className="mb-4 text-2xl font-semibold">
      Business
      <span className="block -mt-1 text-gray-500 text-xs font-normal">For business services</span>
    </h2>
    <div className="relative bg-yellow-500 w-[14.46rem] -ml-2.5 px-5 py-1 rounded-l-md">
      <p className="m-0 pt-1 flex text-[1.9rem] font-medium">
        $254.99
        <span className="ml-1 text-sm font-light">/ handle</span>
      </p>
      <div className="absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] border-t-[#c58102] border-b-[10px] border-b-transparent border-r-[13px] border-r-transparent z-[-6]"></div>
    </div>
    <div className="mt-4">
      <ul className="p-0 text-sm">
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Analysis</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Consulting</span>
        </li>
        <li className="text-gray-500 list-none mb-1 flex items-center gap-2">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[.9rem] fill-current">
            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
          </svg>
          <span className="font-light">Facilitate</span>
        </li>
      </ul>
    </div>
    <div className="flex justify-center mt-5">
      <a href="#" className="flex justify-center items-center bg-black text-white px-4 py-2 rounded-md text-xs tracking-wide font-medium transition-transform duration-300 ease-in-out hover:translate-y-[-3%] hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-[.9rem] fill-current">
          <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
        </svg>
        Read More
      </a>
    </div>
  </div>
    </main>
    
  )
}