import { useState } from 'react';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
};



export default function UserInput(props) {


    const [userInput, setUserInput] = useState(initialUserInput);


    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    const handleReset = () => {
        setUserInput(initialUserInput)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <div className='input-group'>
                    <p>
                        <lable htmlFor="current-savings">Current Savings ($)</lable>
                        <input type="number" id="current-savings" onChange={(event) => {
                            inputChangeHandler('current-savings', event.target.value)
                        }}
                            value={userInput['current-savings']}


                        />
                    </p>
                    <p>
                        <lable htmlFor="yearly-contribution">Yearly Contribution ($)</lable>
                        <input type="number" id="yearly-contribution" onChange={(event) => {
                            inputChangeHandler('yearly-contribution', event.target.value)
                        }}
                            value={userInput['yearlt-contribution']}
                        />
                    </p>
                </div>
                <div className='input-group'>
                    <p>
                        <lable htmlFor="expected-return">Expected Interest (%, per year)</lable>
                        <input type="number" id="expected-return" onChange={(event) => {
                            inputChangeHandler('expected-return', event.target.value)
                        }}
                            value={userInput['expected-return']}
                        />
                    </p>
                    <p>
                        <lable htmlFor="duration">Investment Duration (years)</lable>
                        <input type="number" id="duration" onChange={(event) => {
                            inputChangeHandler('duration', event.target.value)
                        }}
                            value={userInput['duration']}
                        />
                    </p>
                </div>

                <p className='actions'>
                    <button onClick={handleReset} type='reset'>Reset</button>
                    <button type='submit'>Calculate</button>
                </p>

            </form>
        </div>
    );
}

