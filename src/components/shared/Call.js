import React from 'react';
import { FaPhone } from "react-icons/fa6";
const Call = () => {
    return (
        <div className='flex gap-2'>
            <FaPhone style={{ backgroundColor: "#ff006e",border:'#ff006e' }} className="text-sm text-white p-1 h-10 w-10 border rounded-full"/>
            <p style={{ color: "#ff006e" }} className='text-xl mt-2 font-semibold'>16247</p>
        </div>
    );
};

export default Call;