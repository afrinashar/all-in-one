import React, { useState } from 'react';
import translate from 'google-translate-api';

const Translator = () => {
    const [textToTranslate, setTextToTranslate] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [error, setError] = useState('');

    const handleTextChange = (e) => {
        setTextToTranslate(e.target.value);
    };

    const translateText = async () => {
        try {
            const res = await translate(textToTranslate, { to: 'en' }); // Translate to English
            setTranslatedText(res.text);
        } catch (err) {
            setError('Translation error. Please try again.');
        }
    };

    return (
        <div>
            <h2>Translator</h2>
            <textarea value={textToTranslate} onChange={handleTextChange} />
            <button onClick={translateText}>Translate</button>
            {error && <p>{error}</p>}
            {translatedText && (
                <div>
                    <h3>Translated Text:</h3>
                    <p>{translatedText}</p>
                </div>
            )}
        </div>
    );
};

export default Translator;
