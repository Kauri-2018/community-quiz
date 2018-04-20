import request from 'superagent'

const rootUrl = '/api/v1/questions/'

export function getQuestion () {
  return request.get(rootUrl + 'random')
    .then(res => {
      return res.body
    })
}

export function addQuestion (question) {
  return request.get(`${rootUrl}/make`)
    .then(res => {
      return res.body
    })
}

export function submitAnswer (id, userAnswer) {
  const answ = userAnswer.toString()
  return request.get(`${rootUrl}/${id}?answer=${answ}`)
    .then(res => {
      return res.body === 'true'
    })
}
