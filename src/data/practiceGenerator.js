function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function round(n) { return parseFloat(n.toFixed(2)) }

const TEMPLATES = {
  I_from_VR: () => {
    const R = pick([2, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50])
    const V = pick([6, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 120])
    return { type: 'calculation', question: `A circuit has a voltage of ${V} V and a resistance of ${R} Ω. What is the current?`, answer: round(V / R), unit: 'A', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
  V_from_IR: () => {
    const I = pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10])
    const R = pick([2, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30])
    return { type: 'calculation', question: `A circuit has a current of ${I} A and a resistance of ${R} Ω. What is the voltage?`, answer: round(I * R), unit: 'V', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
  R_from_VI: () => {
    const V = pick([6, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 120])
    const I = pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10])
    return { type: 'calculation', question: `A circuit has a voltage of ${V} V and a current of ${I} A. What is the resistance?`, answer: round(V / I), unit: 'Ω', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
  P_from_VI: () => {
    const V = pick([6, 9, 10, 12, 15, 20, 24, 30, 36, 40, 60, 120])
    const I = pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10])
    return { type: 'calculation', question: `A device operates at ${V} V with a current of ${I} A flowing through it. What is the power?`, answer: round(V * I), unit: 'W', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
  P_from_IR: () => {
    const I = pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5])
    const R = pick([2, 4, 5, 6, 8, 10, 12, 15, 20])
    return { type: 'calculation', question: `A current of ${I} A flows through a ${R} Ω resistor. What is the power dissipated?`, answer: round(I * I * R), unit: 'W', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
  P_from_VR: () => {
    const V = pick([6, 9, 10, 12, 15, 20, 24, 30])
    const R = pick([2, 3, 4, 5, 6, 8, 10, 12, 15, 20])
    return { type: 'calculation', question: `A ${V} V source is connected across a ${R} Ω resistor. What is the power?`, answer: round(V * V / R), unit: 'W', allowedUnits: ['A', 'V', 'Ω', 'W'] }
  },
}

function detectFormula(q) {
  if (q.unit === 'A') return 'I_from_VR'
  if (q.unit === 'V') return 'V_from_IR'
  if (q.unit === 'Ω') return 'R_from_VI'
  if (q.unit === 'W') {
    const t = q.question.toLowerCase()
    const hasResistor = /\bresistance\b|\bresistor\b/.test(t)
    const hasCurrent = /\b\d+\.?\d*\s*a\b/.test(t)
    const hasVoltage = /\b\d+\.?\d*\s*v\b/.test(t)
    if (hasResistor && hasCurrent && !hasVoltage) return 'P_from_IR'
    if (hasResistor && hasVoltage && !hasCurrent) return 'P_from_VR'
    return 'P_from_VI'
  }
  return 'I_from_VR'
}

export function generateSimilarQuestion(q, allQuestions, excludeIds = []) {
  if (q.type === 'calculation') {
    return { ...TEMPLATES[detectFormula(q)](), id: `practice-${Date.now()}` }
  }
  let pool = allQuestions.filter(s => s.type !== 'calculation' && !excludeIds.includes(s.id) && s.id !== q.id)
  if (!pool.length) pool = allQuestions.filter(s => s.type !== 'calculation' && s.id !== q.id)
  if (!pool.length) return null
  return pool[Math.floor(Math.random() * pool.length)]
}
