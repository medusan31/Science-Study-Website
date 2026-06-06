import { useState, useMemo } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

function renderInline(text) {
  const parts = []
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let last = 0
  let m
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1] !== undefined) parts.push(<strong key={m.index}>{m[1]}</strong>)
    else parts.push(<em key={m.index}>{m[2]}</em>)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts
}

function ArticleTable({ lines }) {
  const dataRows = lines.filter(l => !/^\|[\s|:-]+\|$/.test(l))
  const [header, ...rows] = dataRows
  if (!header) return null
  const parseCells = line => line.replace(/^\||\|$/g, '').split('|').map(c => c.trim())
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr>{parseCells(header).map((c, i) => <th key={i}>{renderInline(c)}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{parseCells(row).map((c, j) => <td key={j}>{renderInline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExamplesBlock({ examples }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({})   // qi -> optionId (pending, pre-submit)
  const [revealed, setRevealed] = useState({})   // qi -> optionId (submitted)

  const select = (qi, id) => {
    if (revealed[qi] !== undefined) return
    setSelected(prev => ({ ...prev, [qi]: id === prev[qi] ? undefined : id }))
  }

  const submit = (qi) => {
    if (selected[qi] === undefined) return
    setRevealed(prev => ({ ...prev, [qi]: selected[qi] }))
  }

  const revealedCount = Object.keys(revealed).length
  const correctCount = Object.keys(revealed).filter(qi =>
    examples[qi]?.options.find(o => o.id === revealed[qi])?.correct
  ).length

  return (
    <div className="examples-wrapper">
      <button
        className={`examples-trigger${open ? ' examples-trigger-open' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        <span className="examples-trigger-icon">◈</span>
        <span>Example Questions</span>
        <span className="examples-trigger-count">{examples.length} questions</span>
        {revealedCount > 0 && open && (
          <span className="examples-trigger-score">{correctCount}/{revealedCount} correct</span>
        )}
        <span className="examples-trigger-chevron">{open ? '↑' : '↓'}</span>
      </button>

      {open && (
        <>
          <div className="examples-connector" />
          <div className="examples-panel">
            <div className="examples-panel-header">
              <span className="examples-panel-label">EXAMPLE QUESTIONS</span>
              <button className="examples-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="examples-questions">
              {examples.map((ex, qi) => {
                const chosen = selected[qi]
                const submittedId = revealed[qi]
                const isRevealed = submittedId !== undefined
                const isCorrect = ex.options.find(o => o.id === submittedId)?.correct

                return (
                  <div key={qi} className="example-question">
                    <div className="example-q-num">Q{qi + 1}</div>
                    <div className="example-q-text">{ex.question}</div>
                    <div className="example-options">
                      {ex.options.map((opt, oi) => {
                        let cls = 'option-btn'
                        if (isRevealed) {
                          if (opt.correct) cls += ' revealed-correct'
                          else if (opt.id === submittedId) cls += ' revealed-wrong'
                        } else if (chosen === opt.id) {
                          cls += ' selected'
                        }
                        return (
                          <button
                            key={opt.id}
                            className={cls}
                            onClick={() => select(qi, opt.id)}
                            disabled={isRevealed}
                          >
                            <span className="option-letter">{LETTERS[oi]}</span>
                            <span className="option-text">{opt.text}</span>
                          </button>
                        )
                      })}
                    </div>
                    {!isRevealed && (
                      <div className="example-submit-row">
                        <button
                          className="btn btn-primary example-submit-btn"
                          onClick={() => submit(qi)}
                          disabled={chosen === undefined}
                        >
                          Submit
                        </button>
                      </div>
                    )}
                    {isRevealed && (
                      <div className={`example-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                        <div className="example-feedback-title">
                          {isCorrect
                            ? 'Correct!'
                            : `Incorrect — correct answer: ${ex.options.find(o => o.correct)?.text}`}
                        </div>
                        <div className="example-feedback-body">{ex.explanation}</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {revealedCount === examples.length && (
              <div className="examples-panel-footer">
                <span className="examples-final-score">
                  {correctCount === examples.length
                    ? `All ${examples.length} correct`
                    : `${correctCount} of ${examples.length} correct`}
                </span>
                <button
                  className="btn btn-ghost examples-reset-btn"
                  onClick={() => { setSelected({}); setRevealed({}) }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function parseBody(body, examples) {
  const lines = body.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const t = lines[i].trim()

    if (t === '') { i++; continue }

    if (t === '[[examples]]') {
      elements.push(<ExamplesBlock key={`ex-${i}`} examples={examples} />)
      i++; continue
    }

    if (t.startsWith('## ')) {
      elements.push(<h2 key={i} className="article-h2">{renderInline(t.slice(3))}</h2>)
      i++; continue
    }

    if (t.startsWith('### ')) {
      elements.push(<h3 key={i} className="article-h3">{renderInline(t.slice(4))}</h3>)
      i++; continue
    }

    if (t === '---') {
      elements.push(<hr key={i} className="article-hr" />)
      i++; continue
    }

    if (t.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="article-blockquote">
          {renderInline(t.slice(2))}
        </blockquote>
      )
      i++; continue
    }

    if (t.startsWith('|')) {
      const tableLines = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      elements.push(<ArticleTable key={`tbl-${elements.length}`} lines={tableLines} />)
      continue
    }

    if (t.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${elements.length}`} className="article-list">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ul>
      )
      continue
    }

    elements.push(<p key={`p-${elements.length}`} className="article-p">{renderInline(t)}</p>)
    i++
  }

  return elements
}

export default function ArticleView({ article, onBack }) {
  const bodyElements = useMemo(
    () => parseBody(article.body, article.examples),
    [article]
  )

  return (
    <div className="article-view">
      <div className="article-nav">
        <button className="btn btn-ghost article-back-btn" onClick={onBack}>
          ← Study Guide
        </button>
      </div>
      <div className="article-card">
        <div className="article-header">
          <div className="article-category-badge">{article.categoryLabel}</div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>
        </div>
        <div className="article-body">
          {bodyElements}
        </div>
      </div>
    </div>
  )
}
