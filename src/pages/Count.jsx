// import { useState } from 'react';
// import React from "react";

// export default function Count() {
//   const [age, setAge] = useState(23);

//   function increment() {
//     setAge(age + 1);
//   }

//   return (
//     <div className='flex flex-col items-center '>
//       <h1>My Age: {age}</h1>
//       <div className=' space-x-7'>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>

//       <button onClick={() => { increment(); }}>+1</button>
//       </div>
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import React from "react";

// export default function Count() {
//   const [age, setAge] = useState(23);

//   function increment() {
//   setAge(prev => prev + 1);
// ;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">My Age: {age}</h1>
//       <div className="space-x-6">
//         <button 
//           onClick={() => { increment();increment(); increment();  }}
//           className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//         >
//           +3
//         </button>

//         <button 
//           onClick={() => { increment(); }}
//           className="px-6 py-3 cursor-pointer bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
//         >
//           +1
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(  pending + 1);
    await delay(3000);
    setPending(  pending => pending - 1);
    setCompleted( completed=> completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
