import React from 'react'

const TextConvert = ({ text}) => {
    const processedText = text.split('**').map((part, index) => {
        if (index % 2 === 1) {
          // Si el índice es impar, el texto debe estar en negrita
          return <strong key={index}>{part}</strong>;
        }
        return part;
      });
    
  return (
    <div>
      <p>{processedText}</p>
    </div>
  )
}

export default TextConvert
