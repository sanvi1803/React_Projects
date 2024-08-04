import React from 'react'

function Navigation() {
    return (
        <div >
            <nav className='flex justify-between w-[80vw] mx-auto p-2 items-center'>
                <div>
                    <img src="/images/brand_logo.png" alt="" />
                </div>
                <ul className='uppercase flex gap-3'>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className='bg-[#cf2f3a] rounded-md py-2 px-2 text-center text-white'>Login</button>
            </nav>
        </div>
    )
}

export default Navigation
