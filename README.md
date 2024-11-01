# Quiz Application

Welcome to the Quiz Application! This app is a timed question-and-answer game with interactive instructions, multiple-choice questions, and a results display.

Live Demo: You can try the Quiz Application [from this link.](https://quiet-semifreddo-98e5bc.netlify.app/)

## Project Overview

The Quiz Application is a web-based quiz game developed using React. It has an interactive and user-friendly interface with timed questions and a structured flow:

1. Introduction Screen with instructions.
2. Question Screen that handles multiple-choice questions with a timer.
3. Results Screen showing correct, incorrect, and unanswered question counts.

## Features

- Timed Questions: Each question displays for 30 seconds.
- Delayed Answer Options: Options appear after 4 seconds to prevent instant answering.
- Automatic Progression: Automatically moves to the next question after an answer or timeout.
- Results Summary: Summary of correct, wrong, and unanswered questions at the end.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yasarcandamli/QuestionAppProject
```

2. Navigate to the project directory:

```bash
cd questionApp
```

3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm run dev
```

## Usage

1. Launch the app by starting the server.
2. Review the instructions on the Introduction Screen and click "Start Test" to begin.
3. Answer each question before the timer runs out or leave it unanswered to proceed automatically.
4. The Results Screen will display a summary at the end of the quiz.

## Components Overview

### Dashboard.js

The Dashboard component manages the application flow:

- Controls whether the quiz has started.
- Renders the Introduction or Question component based on the isStarted state.

### Introduction.js

The Introduction component shows instructions and has a "Teste Başla" button to begin the quiz.

### Question.js

The Question component:

- Loads questions from questions data and tracks the timer.
- Handles answer selection and progression to the next question.
- Displays options with a delay, moves automatically after 30 seconds, and tracks correct, wrong, and unanswered counts.

### Results.js

The Results component displays the final quiz results, including counts of correct, wrong, and unanswered questions.
