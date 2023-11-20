import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import UserInput from './Components/UserInput';
import Header from './Components/Header';
import Results from './Components/Results';

export default function App() {

  const [userInput, setUserInput] = useState(null);
  
  const calculateHandler = (userInput) =>{
    //yearly calculation
    setUserInput(userInput);
  };
  
  
  const yearlyData = []; //Pay year data

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
      }
    }
    
  
  return (

    <div>
      <Header />
      <UserInput onCalculate={calculateHandler}/>
      
      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <Results data={yearlyData} initialInvestment={userInput['current-savings']} />}

      
    </div>
  );
}


