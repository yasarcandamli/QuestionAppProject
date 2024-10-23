import Introduction from "./Introduction";
import { useState } from "react";
import Question from "./Question";

function Dashboard() {
    const [isStarted, setIsStarted] = useState(false); // Tracks whether the quiz has started (initially false).

    const handleStarted = (startData) => {
        setIsStarted(startData) // Updates the state when the quiz starts.
    }
    return (
        <>
            <div className="Dashboard">
                {isStarted ?
                    (
                        // Conditional rendering based on whether the quiz has started.
                        <Question />
                    )
                    :
                    (
                        // Renders the Question component if the quiz has started.
                        <Introduction startTest={handleStarted} />
                    )
                }
            </div>
        </>
    );
}

export default Dashboard;