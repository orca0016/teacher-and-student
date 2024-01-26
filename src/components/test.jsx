import { useState } from "react";

const Apps= () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
    const filterEvenNumbers = () => {
      const evenNumbers = numbers.filter(number => number % 2 === 0);
      setNumbers(evenNumbers);
    };
  
    return (
      <div>
        <h1>Numbers: {numbers.join(', ')}</h1>
        <button onClick={filterEvenNumbers}>Filter Even Numbers</button>
      </div>
    );
  };
  export default Apps