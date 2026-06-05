import { useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Review from './components/Review'
import { questions, QUIZ_TITLE, QUIZ_DESCRIPTION } from './data/questions'

function App() {
  const [screen, setScreen] = useState('home')
  const [questionCount, setQuestionCount] = useState(10)
  const [activeQuestions, setActiveQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState({})
  const [instantFeedback, setInstantFeedback] = useState(false)

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setActiveQuestions(shuffled.slice(0, questionCount))
    setUserAnswers({})
    setScreen('quiz')
  }

  const finishQuiz = (answers) => {
    setUserAnswers(answers)
    setScreen('results')
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <Home
          title={QUIZ_TITLE}
          description={QUIZ_DESCRIPTION}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          onStart={startQuiz}
          totalQuestions={questions.length}
          instantFeedback={instantFeedback}
          setInstantFeedback={setInstantFeedback}
        />
      )}
      {screen === 'quiz' && (
        <Quiz
          questions={activeQuestions}
          onFinish={finishQuiz}
          onHome={() => setScreen('home')}
          instantFeedback={instantFeedback}
        />
      )}
      {screen === 'results' && (
        <Results
          questions={activeQuestions}
          userAnswers={userAnswers}
          onReview={() => setScreen('review')}
          onHome={() => setScreen('home')}
          onRetry={startQuiz}
        />
      )}
      {screen === 'review' && (
        <Review
          questions={activeQuestions}
          userAnswers={userAnswers}
          allQuestions={questions}
          onHome={() => setScreen('home')}
        />
      )}
    </div>
  )
}

export default App
