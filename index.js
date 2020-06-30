class ScoreReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }
  onRunComplete(contexts, results) {
    let totalScore = 0
    for (let $1testResult of results.testResults) {
      for (let $2testResult of $1testResult.testResults) {
        totalScore += parseCorrectScenarioScore($2testResult)
        totalScore -= parseWrongScenarioScore($2testResult)
      }
    }
    console.log(`${colorScore(totalScore)}Score: ${totalScore}`, '\u001b[0m')
  }
}

const parseCorrectScenarioScore = test => {
  if (test.status === 'passed') {
    let score
    const matches = test.title.matchAll(/\((\d+\.?\d?)\)/g)
    for (let match of matches) {
      score = Number(match[1])
    }
    return score || 0
  } else {
    return 0
  }
}
const parseWrongScenarioScore = test => {
  if (test.status === 'failed') {
    let score
    const matches = test.title.matchAll(/\[(\d+\.?\d?)\]/g)
    for (let match of matches) {
      score = Number(match[1])
    }
    return score || 0
  } else {
    return 0
  }
}
const colorScore = score => {
  if (score < 50) return '\u001b[31m'
  if (score < 70) return '\u001b[33m'
  return '\u001b[32m'
}

module.exports = ScoreReporter