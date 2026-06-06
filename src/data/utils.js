export function checkShortAnswer(q, answer) {
  if (!answer || !answer.trim()) return false
  const lower = answer.trim().toLowerCase()
  return q.keywords.some(kw => lower.includes(kw.toLowerCase()))
}
