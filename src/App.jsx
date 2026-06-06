import { useState } from 'react'
import Auth from './components/Auth'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Review from './components/Review'
import Study from './components/Study'
import { questions, QUIZ_TITLE, QUIZ_DESCRIPTION } from './data/questions'

const USERS_KEY = 'squa_users'
const CURRENT_KEY = 'squa_current_user'

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '{}') } catch { return {} }
}
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)) }
function loadCurrentUser() { return localStorage.getItem(CURRENT_KEY) || null }
function saveCurrentUser(u) { u ? localStorage.setItem(CURRENT_KEY, u) : localStorage.removeItem(CURRENT_KEY) }

function calcScore(qs, answers) {
  return qs.filter(q => {
    const a = answers[q.id]
    if (a == null) return false
    if (q.type === 'calculation') {
      if (typeof a !== 'object' || !a.value) return false
      if (a.unit !== q.unit) return false
      const val = parseFloat(a.value)
      if (isNaN(val)) return false
      const tol = Math.max(Math.abs(q.answer) * 0.02, 0.01)
      return Math.abs(val - q.answer) <= tol
    }
    return a === q.options?.find(o => o.correct)?.id
  }).length
}

function App() {
  const [currentUser, setCurrentUser] = useState(loadCurrentUser)
  const [userMastered, setUserMastered] = useState(() => {
    const u = loadCurrentUser()
    if (!u) return new Set()
    return new Set(loadUsers()[u]?.masteredArticles || [])
  })
  const [quizHistory, setQuizHistory] = useState(() => {
    const u = loadCurrentUser()
    if (!u) return []
    return loadUsers()[u]?.quizHistory || []
  })

  const [screen, setScreen] = useState('home')
  const [questionCount, setQuestionCount] = useState(10)
  const [activeQuestions, setActiveQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState({})
  const [instantFeedback, setInstantFeedback] = useState(false)

  const handleLogin = (username, password) => {
    const users = loadUsers()
    if (!users[username] || users[username].password !== password) return 'Invalid username or password'
    setCurrentUser(username)
    saveCurrentUser(username)
    setUserMastered(new Set(users[username].masteredArticles || []))
    setQuizHistory(users[username].quizHistory || [])
    return null
  }

  const handleSignup = (username, password) => {
    const users = loadUsers()
    if (users[username]) return 'Username already taken'
    users[username] = { password, masteredArticles: [], quizHistory: [] }
    saveUsers(users)
    setCurrentUser(username)
    saveCurrentUser(username)
    setUserMastered(new Set())
    setQuizHistory([])
    return null
  }

  const handleLogout = () => {
    saveCurrentUser(null)
    setCurrentUser(null)
    setUserMastered(new Set())
    setQuizHistory([])
    setScreen('home')
  }

  const handleMastered = (key) => {
    const next = new Set([...userMastered, key])
    setUserMastered(next)
    const users = loadUsers()
    if (users[currentUser]) {
      users[currentUser].masteredArticles = [...next]
      saveUsers(users)
    }
  }

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setActiveQuestions(shuffled.slice(0, questionCount))
    setUserAnswers({})
    setScreen('quiz')
  }

  const retryWrong = (wrongQuestions) => {
    setActiveQuestions(wrongQuestions)
    setUserAnswers({})
    setScreen('quiz')
  }

  const finishQuiz = (answers) => {
    setUserAnswers(answers)
    const correct = calcScore(activeQuestions, answers)
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      questionIds: activeQuestions.map(q => q.id),
      answers,
      correct,
      total: activeQuestions.length,
    }
    const newHistory = [entry, ...quizHistory].slice(0, 3)
    setQuizHistory(newHistory)
    const users = loadUsers()
    if (users[currentUser]) {
      users[currentUser].quizHistory = newHistory
      saveUsers(users)
    }
    setScreen('results')
  }

  const reviewPast = (entry) => {
    const qs = entry.questionIds.map(id => questions.find(q => q.id === id)).filter(Boolean)
    setActiveQuestions(qs)
    setUserAnswers(entry.answers)
    setScreen('review')
  }

  if (!currentUser) {
    return (
      <div className="app">
        <Auth onLogin={handleLogin} onSignup={handleSignup} />
      </div>
    )
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
          onStudy={() => setScreen('study')}
          totalQuestions={questions.length}
          instantFeedback={instantFeedback}
          setInstantFeedback={setInstantFeedback}
          currentUser={currentUser}
          onLogout={handleLogout}
          quizHistory={quizHistory}
          onReviewPast={reviewPast}
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
          onRetryWrong={retryWrong}
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
      {screen === 'study' && (
        <Study
          onHome={() => setScreen('home')}
          mastered={userMastered}
          onMastered={handleMastered}
        />
      )}
    </div>
  )
}

export default App
