import React, { useState } from 'react';
import { MyInput } from './utils/Inputs';

export function DificultWindow({ onDifficultySelect }) {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const inputs = [
        { title: 'Iniciante', type: 'radio', id: "difficulty-iniciante", name: "dificulty", time: 7 },
        { title: 'Médio', type: 'radio', id: "difficulty-medio", name: "dificulty", time: 5 },
        { title: 'Difícil', type: 'radio', id: "difficulty-dificil", name: "dificulty", time: 3 }
    ];

    const handleDifficultyChange = (event) => {
        const selectedTime = parseInt(event.target.value, 10);
        setSelectedDifficulty(selectedTime);
        onDifficultySelect(selectedTime);
    };

    return (
        <div className='dificulty-container'>
            <h3>Dificuldade</h3>
            <div className='inputs-container'>
                {inputs.map((input, index) => (
                    <label key={index}>
                        <MyInput
                            inputType={input.type}
                            inputId={input.id}
                            inputClass="difficulty-input"
                            inputName={input.name}
                            inputTime={input.time}
                            inputTitle={input.title}
                            onChange={handleDifficultyChange}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}
