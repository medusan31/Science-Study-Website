import { useState } from 'react'

export default function Home({ title, description, questionCount, setQuestionCount, onStart, totalQuestions }) {
  const max = totalQuestions
  const min = 1

  const handleSlider = (e) => {
    setQuestionCount(Number(e.target.value))
  }

  const handleInput = (e) => {
    const val = Math.min(max, Math.max(min, Number(e.target.value) || min))
    setQuestionCount(val)
  }

  return (
    <div className="home">
      <div className="home-header">
        <div className="badge">Quiz</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="home-stats">
        <div className="stat">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Questions</div>
        </div>
        <div className="stat">
          <div className="stat-value">4</div>
          <div className="stat-label">Choices each</div>
        </div>
        <div className="stat">
          <div className="stat-value">∞</div>
          <div className="stat-label">Attempts</div>
        </div>
      </div>

      <div className="home-config">
        <label>How many questions?</label>
        <div className="count-control">
          <input
            type="range"
            min={min}
            max={max}
            value={questionCount}
            onChange={handleSlider}
          />
          <div className="count-display">
            <input
              type="number"
              min={min}
              max={max}
              value={questionCount}
              onChange={handleInput}
            />
            <span>/ {max}</span>
          </div>
        </div>
      </div>

      <div className="home-start">
        <button className="btn btn-primary" onClick={onStart}>
          Start Quiz
        </button>
        <span className="hint">{questionCount} random questions from the full bank</span>
      </div>
    </div>
  )
}
