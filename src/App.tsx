import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./Bottons";
import {InputComp} from "./Inputs";


function App() {
    const [value, setValue] = useState<number>(0)
    const minValue: number = 0;
    const maxValue: number = 5;

    const incButton = () => {
        if (minValue <= value && value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetButton = () => {
        setValue(minValue)
    }
    const disabledIncButton = (value: number) =>!!(value===maxValue)

    const disabledResetButton = (value: number) =>!!(value===0)

    return (
        <div className={s.App}>
            <h1>Counter</h1>
            <div className={s.body}>
            <InputComp
                value={value}
                maxValue={maxValue}
            />

            <div className={s.Button}>
            <ButtonComp
                clickOnButton={incButton}
                title={'inc'}
                value={value}
                disabledButton={disabledIncButton}
            />
            <ButtonComp
                clickOnButton={resetButton}
                title={'reset'}
                value={value}
                disabledButton={disabledResetButton}
            />
            </div>
            </div>
        </div>
    );

}

export default App;
