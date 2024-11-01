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
        if (currentQuestionIndex < questions.length) {
            setCurrentQuestion(questions[currentQuestionIndex]);

            const hideOptionsTimeout = setTimeout(() => {
                setShowOptions(true);
            }, 4000);

            const questionTimeout = setTimeout(() => {
                if (!answerSelected) {
                    handleAnswerClick(null); // Yanıt verilmediğinde null ekle
                }
            }, 30000);

            const timerInterval = setInterval(() => {
                setTimer((previous) => previous - 1);
            }, 1000);

            return () => {
                clearTimeout(hideOptionsTimeout);
                clearTimeout(questionTimeout);
                clearInterval(timerInterval);
            };
        } else {
            setShowResults(true);
        }
    }, [currentQuestionIndex]);

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
        if (currentQuestionIndex >= questions.length) return;
        setUserAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers, selectedOption]; // Stores the selected answer.

            // Calculates correct, wrong, and empty answers.
            const correct = updatedAnswers.filter((answer, index) => questions[index] && answer === questions[index].answer).length;
            const wrong = updatedAnswers.filter((answer, index) => questions[index] && answer !== null && answer !== questions[index].answer).length;
            const empty = updatedAnswers.filter((answer) => answer === null).length;

            setCorrectAnswersCount(correct); // Updates the correct answers count.
            setWrongAnswersCount(wrong); // Updates the wrong answers count.
            setEmptyAnswersCount(empty); // Updates the empty answers count.

            console.log(updatedAnswers); // Logs the answers for debugging.
            console.log('Correct Answwers:', correct);
            console.log('Wrong Answwers:', wrong);
            console.log('Empty Answwers:', empty);


            return updatedAnswers;
        });

        setAnswerSelected(true); // Marks that an answer has been selected.
        goToNextQuestion(); // Proceeds to the next question.
    };

    if (!currentQuestion) {
        // Displays a loading message if the question data is not ready.
        return <h2>Soru Yükleniyor...</h2>;
    }

    return (
        <>
            {showResults ? (
                <Results
                    correctAnswersCount={correctAnswersCount} // Passes the correct answer count to Results.
                    wrongAnswersCount={wrongAnswersCount} // Passes the wrong answer count to Results.
                    emptyAnswersCount={emptyAnswersCount} // Passes the empty answer count to Results.
                    userAnswers={userAnswers} // User's anwers sending to the Result component
                    correctAnswers={questions.map((question) => question.answer)}
                />
            ) : (
                <div className="Question">
                    {/* Displays the remaining time. */}
                    <p className="timer">Kalan Süre: {timer} saniye</p>
                    <div className="img-area">
                        {/* Displays an image for the question. */}
                        <img className="question-img" src={`/${currentQuestion.media}`} alt="Question Image" />
                    </div>
                    <div className="question-area">
                        {/* Displays the current question. */}
                        <h2 className="question">{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                    </div>
                    {showOptions ? (
                        <div className="options-area">
                            {currentQuestion.options.map((option, index) => (
                                // Renders answer options.
                                <button className="option-btn" key={index} onClick={() => handleAnswerClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        // Displays a loading message before options appear.
                        <p className="loading">Şıklar yükleniyor...</p>
                    )}
                </div>
            )}
        </>
    );
}

export default Question;