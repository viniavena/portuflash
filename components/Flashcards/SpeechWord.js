import React, { useState } from 'react';
import { FiVolume1 } from 'react-icons/fi';

const SpeechWord = text => {
  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(
    'speechSynthesis' in window
  );

  const handleSpeak = text => {
    if (isSpeechSynthesisSupported) {
      const synthesis = window.speechSynthesis;

      const utterance = new SpeechSynthesisUtterance(text.text);

      const voices = synthesis.getVoices();
      const portugueseVoice = voices.find(voice => voice.lang === 'pt-BR');
      utterance.voice = portugueseVoice;

      utterance.rate = 0.7;

      synthesis.speak(utterance);
    }
  };

  return (
    isSpeechSynthesisSupported && (
      <button onClick={() => handleSpeak(text)}>
        <FiVolume1 size={20} />
      </button>
    )
  );
};

export default SpeechWord;
