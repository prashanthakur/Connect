import React ,{useState} from 'react'

const CssQuiz = () => {

    const questions = [
        {
          "question": "Which of the following CSS selectors selects an element by its class?",
          "options": [
            "id",
            "class",
            "tag",
            "attribute"
          ],
          "answer": 1
        },
        {
          "question": "Which property is used to change the background color of an element?",
          "options": [
            "background-color",
            "color",
            "background",
            "bgcolor"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to specify the font of an element?",
          "options": [
            "text-style",
            "font-family",
            "font-style",
            "font-size"
          ],
          "answer": 1
        },
        {
          "question": "Which property is used to add space between the border and content of an element?",
          "options": [
            "margin",
            "padding",
            "border",
            "spacing"
          ],
          "answer": 1
        },
        {
          "question": "Which CSS property is used to set the text alignment within an element?",
          "options": [
            "text-align",
            "align",
            "align-text",
            "text-position"
          ],
          "answer": 0
        },
        {
          "question": "Which of the following CSS values is used to make an element disappear?",
          "options": [
            "hidden",
            "display: none",
            "visibility: hidden",
            "opacity: 0"
          ],
          "answer": 1
        },
        {
          "question": "Which CSS property is used to create rounded corners on an element?",
          "options": [
            "corner-radius",
            "border-round",
            "border-radius",
            "round-corner"
          ],
          "answer": 2
        },
        {
          "question": "Which property is used to specify the amount of space between the letters in a text?",
          "options": [
            "letter-spacing",
            "word-spacing",
            "line-height",
            "text-spacing"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to control the order of flexible items?",
          "options": [
            "order",
            "flex-direction",
            "flex-flow",
            "flex-order"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to set the width of an element relative to its parent?",
          "options": [
            "width",
            "height",
            "max-width",
            "flex-basis"
          ],
          "answer": 3
        },
        {
          "question": "Which property is used to control the stacking order of elements?",
          "options": [
            "z-index",
            "stacking-order",
            "layer",
            "order"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to create shadows around an element?",
          "options": [
            "shadow",
            "box-shadow",
            "text-shadow",
            "drop-shadow"
          ],
          "answer": 1
        },
        {
          "question": "Which property is used to align text vertically within an element?",
          "options": [
            "vertical-align",
            "text-align",
            "align-items",
            "line-align"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to set the style of the top border of an element?",
          "options": [
            "border-top",
            "border-style",
            "border-width",
            "border-color"
          ],
          "answer": 0
        },
        {
          "question": "Which property is used to specify the minimum width of a flexible item?",
          "options": [
            "min-width",
            "max-width",
            "flex-min",
            "flex-basis"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to control the appearance of an element on printed pages?",
          "options": [
            "print-style",
            "page-style",
            "print-appearance",
            "display: print"
          ],
          "answer": 3
        },
        {
          "question": "Which property is used to create space between table cells?",
          "options": [
            "table-gap",
            "cell-gap",
            "border-spacing",
            "cell-spacing"
          ],
          "answer": 2
        },
        {
          "question": "Which CSS property is used to set the style of the right border of an element?",
          "options": [
            "border-right",
            "border-style",
            "border-width",
            "border-color"
          ],
          "answer": 0
        },
        {
          "question": "Which property is used to control the flow and wrapping of flexible items?",
          "options": [
            "flex-wrap",
            "flex-flow",
            "flex-direction",
            "flex-layout"
          ],
          "answer": 0
        },
        {
          "question": "Which CSS property is used to set the style of the bottom border of an element?",
          "options": [
            "border-bottom",
            "border-style",
            "border-width",
            "border-color"
          ],
          "answer": 0
        },
        {
          "question": "Which property is used to set the space between lines of text within an element?",
          "options": [
            "line-spacing",
            "line-height",
            "text-line",
            "spacing-line"
          ],
          "answer": 1
        }
      ]
      

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleOptionSelect = (optionIndex) => {
      setSelectedOption(optionIndex);
    };
  
    const handleNextQuestion = () => {
      if (selectedOption !== null) {
        if (selectedOption === questions[currentQuestion].answer) {
          setScore(score + 1);
        }
        setSelectedOption(null);
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
    const handleFinishQuiz = () => {
      if (selectedOption !== null) {
        if (selectedOption === questions[currentQuestion].answer) {
          setScore(score + 1);
        }
        setShowScore(true);
      }
    };
  
    const renderOptions = (options) => {
      return options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption === index ? 'selected' : ''}`}
          onClick={() => handleOptionSelect(index)}
        >
          {option}
        </div>
      ));
    };
  
    if (showScore) {
      return (
        <div className="quiz-container">
          <h2>Quiz Complete!</h2>
          <p className='quiz-complete'>Your Score: {score}/{questions.length}</p>
          {/* <button>Retest </button> */}
        </div>
      );
    }
  
    if (!questions || questions.length === 0) {
      return <div className="quiz-container">No questions available.</div>;
    }
  
    return (
      <div className="quiz-container" style={{marginTop:100}}>
        <h2>Question {currentQuestion + 1}</h2>
        <p className='question-text'>{questions[currentQuestion].question}</p>
        <div className="options-container">{renderOptions(questions[currentQuestion].options)}</div>
        {currentQuestion < questions.length - 1 ? (
          <button className="next-button" onClick={handleNextQuestion}>
            Next
          </button>
        ) : (
          <button className="finish-button" onClick={handleFinishQuiz}>
            Finish
          </button>
        )}
      </div>
    );
}

export default CssQuiz