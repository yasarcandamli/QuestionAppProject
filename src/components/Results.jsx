function Results({ correctAnswersCount, wrongAnswersCount, emptyAnswersCount }) {
    return (
        <>
            <div className="Results">
                <h1 className="result-title">Test Tamamlandı!</h1>
                <p className="result">Doğru Sayısı: {correctAnswersCount}</p>
                <p className="result">Yanlış Sayısı: {wrongAnswersCount}</p>
                <p className="result">Boş Sayısı: {emptyAnswersCount}</p>
            </div>
        </>
    );
}

export default Results;