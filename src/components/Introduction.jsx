function Introduction({ startTest }) {

    const handleClick = () => {
        startTest(true); // Triggers the parent component (Dashboard) to start the quiz.
    }
    return (
        <>
            <div className="Introduction">
                <h1 className="introduction-title">QUESTION APP'E HOŞGELDİNİZ</h1>
                <h2 className="introduction-subtitle">Talimatlar</h2>
                <ul className="introduction-list">
                    <li className="introduction-list-item">10 sorudan oluşmaktadır.</li>
                    <li className="introduction-list-item">Her soru ekranda en fazla 30sn kalmaktadır.</li>
                    <li className="introduction-list-item">İlk 4 saniye cevap şıkları görünmeyecektir.</li>
                    <li className="introduction-list-item">Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçilecektir.</li>
                    <li className="introduction-list-item">Geçmiş sorulara dönülemeyecektir.</li>
                    <li className="introduction-list-item">Test bitiminde her soruya verilen yanıt ile doğru ve yanlış sayıları kullanıcı ile paylaşılacaktır.</li>
                </ul>
                {/* Button to start the quiz */}
                <button id="start" onClick={handleClick}>Teste Başla</button>
            </div>
        </>
    );
}

export default Introduction;