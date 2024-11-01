function Results({ correctAnswersCount, wrongAnswersCount, emptyAnswersCount, userAnswers, correctAnswers }) {
    return (
        <>
            <div className="Results">
                <h1 className="result-title">Test Tamamlandı!</h1>
                <p className="result">Doğru Sayısı: {correctAnswersCount}</p>
                <p className="result">Yanlış Sayısı: {wrongAnswersCount}</p>
                <p className="result">Boş Sayısı: {emptyAnswersCount}</p>
                <div className="answers-list">
                    <h2>Cevaplarınız ve Doğru Cevaplar</h2>
                    {userAnswers.map((answer, index) => (
                        <div key={index} className="answer-comparison">
                            <p><strong>Soru {index + 1}:</strong></p>
                            <p>Verilen Cevap: {answer !== null ? answer : "Boş"}</p>
                            <p>Doğru Cevap: {correctAnswers[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Results;