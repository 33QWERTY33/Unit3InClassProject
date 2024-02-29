import React, { useState } from 'react';

const Forms = () => {
    const [inputText, setInputText] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type something"
            />
            <p>{inputText}</p>

            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <p>{isChecked ? 'Checked' : 'Not checked'}</p>
        </div>
    );
};

export default Forms;