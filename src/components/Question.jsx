import questions from "../assets/questions";
import { useState, useEffect } from "react";
import Results from "./Results";

function Question() {
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0); // Tracks the index of the current question.
    const [currentQuestion, setCurrentQuestion] = useState(null); // Stores the current question data.
    const [showOptions, setShowOptions] = useState(false); // Controls whether answer options are displayed.
    const [timer, setTimer] = useState(30); // Sets a 30-second timer for each question.
    const [userAnswers, setUserAnswers] = useState([]); // Stores the user's selected answers.
    const [showResults, setShowResults] = useState(false); // Controls whether the results page is shown.
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Tracks the number of correct answers.
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0); // Tracks the number of wrong answers.
    const [emptyAnswersCount, setEmptyAnswersCount] = useState(0); // Tracks the number of unanswered questions.
    const [answerSelected, setAnswerSelected] = useState(false); // Tracks whether an answer has been selected.

    useEffect(() => {
        setCurrentQuestion(questions[currentQuestionIndex]); // Loads the current question based on the index.

        const hideOptionsTimeout = setTimeout(() => {
            // Displays the answer options after 4 seconds.
            setShowOptions(true);
        }, 4000);

        const questionTimeout = setTimeout(() => {
            // Automatically proceeds if no answer is selected within 30 seconds.
            if (!answerSelected) {
                handleAnswerClick(null);
            }
        }, 30000);

        const timerInterval = setInterval(() => {
            // Decreases the timer every second.
            setTimer((previous) => previous - 1);
        }, 1000);

        return () => {
            // Clears timeouts and intervals on component unmount.
            clearTimeout(hideOptionsTimeout);
            clearTimeout(questionTimeout);
            clearInterval(timerInterval);
        };
    }, [currentQuestionIndex]); // Re-runs effect when the current question index changes.

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setcurrentQuestionIndex(currentQuestionIndex + 1); // Moves to the next question.
            setShowOptions(false); // Hides the options for the next question.
            setTimer(30); // Resets the timer for the next question.
            setAnswerSelected(false); // Resets the answer selection state.
        } else {
            setShowResults(true); // Displays the results if it's the last question.
        }
    };

    const handleAnswerClick = (selectedOption) => {
        setUserAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers, selectedOption];

            const correct = updatedAnswers.filter((answer, index) => answer === questions[index].answer).length;
            const wrong = updatedAnswers.filter((answer, index) => answer !== null && answer !== questions[index].answer).length;
            const empty = updatedAnswers.filter((answer, index) => answer === null).length;

            setCorrectAnswersCount(correct);
            setWrongAnswersCount(wrong);
            setEmptyAnswersCount(empty);

            console.log(updatedAnswers);
            console.log(correct);
            console.log(wrong);
            console.log(empty);


            return updatedAnswers;
        });

        setAnswerSelected(true);
        goToNextQuestion();
    };

    if (!currentQuestion) {
        return <h2>Soru Yükleniyor...</h2>;
    }

    return (
        <>
            {showResults ? (
                <Results
                    correctAnswersCount={correctAnswersCount}
                    wrongAnswersCount={wrongAnswersCount}
                    emptyAnswersCount={emptyAnswersCount}
                />
            ) : (
                <div className="Question">
                    <p className="timer">Kalan Süre: {timer} saniye</p>
                    <div className="img-area">
                        <img className="question-img" src={`/${currentQuestion.media}`} alt="Question Image" />
                    </div>
                    <div className="question-area">
                        <h2 className="question">{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                    </div>
                    {showOptions ? (
                        <div className="options-area">
                            {currentQuestion.options.map((option, index) => (
                                <button className="option-btn" key={index} onClick={() => handleAnswerClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="loading">Şıklar yükleniyor...</p>
                    )}
                </div>
            )}
        </>
    );
}

export default Question;