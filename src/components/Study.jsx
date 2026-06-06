import { useState } from 'react'
import { articles } from '../data/articles'
import { CATEGORY_LABELS } from '../data/categories'
import ArticleView from './ArticleView'

const CATEGORY_META = {
  ohm:        { icon: '⚡', desc: 'V = IR, calculating voltage, current, and resistance' },
  power:      { icon: '🔋', desc: 'P = IV, P = I²R, watts, joules, and energy' },
  series:     { icon: '🔗', desc: 'Single-path circuits, current and voltage rules' },
  parallel:   { icon: '⑂',  desc: 'Multi-path circuits, parallel resistance and voltage' },
  history:    { icon: '📚', desc: 'The scientists who shaped electrical science' },
  conductors: { icon: '🔌', desc: 'Conductors, insulators, semiconductors, and diodes' },
  magnets:    { icon: '🧲', desc: 'Electromagnets, induction, motors, and generators' },
  diagrams:   { icon: '📐', desc: 'Reading and drawing circuit schematics' },
  safety:     { icon: '🛡', desc: 'Fuses, breakers, short circuits, and grounding' },
  concepts:   { icon: '💡', desc: 'Voltage, current, charge, AC/DC, and Kirchhoff\'s laws' },
}

export default function Study({ onHome }) {
  const [activeKey, setActiveKey] = useState(null)

  if (activeKey) {
    return (
      <ArticleView
        article={{ ...articles[activeKey], categoryLabel: CATEGORY_LABELS[activeKey] }}
        onBack={() => setActiveKey(null)}
      />
    )
  }

  return (
    <div className="study">
      <div className="study-header">
        <div className="study-header-top">
          <button
            className="btn btn-ghost"
            style={{ padding: '8px 16px', fontSize: '13px' }}
            onClick={onHome}
          >
            ← Home
          </button>
        </div>
        <div className="study-header-text">
          <div className="badge" style={{ marginBottom: '12px' }}>Study Guide</div>
          <h1 className="study-title">Electricity & Circuits</h1>
          <p className="study-desc">
            Ten textbook-style readings with interactive example questions. Read a topic, then test yourself before taking the quiz.
          </p>
        </div>
      </div>

      <div className="study-grid">
        {Object.keys(articles).map(key => {
          const meta = CATEGORY_META[key]
          return (
            <button key={key} className="study-card" onClick={() => setActiveKey(key)}>
              <div className="study-card-icon">{meta.icon}</div>
              <div className="study-card-body">
                <div className="study-card-title">{CATEGORY_LABELS[key]}</div>
                <div className="study-card-desc">{meta.desc}</div>
              </div>
              <div className="study-card-arrow">→</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
