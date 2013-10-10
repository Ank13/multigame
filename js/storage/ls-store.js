var LocalStorageStore = function() {

  // retrieve questions from local storage
  var questions = JSON.parse(window.localStorage.getItem("savedQuestions"))
  // determine number of questions retrieved
  var numberOfQuestions = questions.length


  this.getRandomQuestion = function(){
    // get random integer less number of questions
    var randomInt = Math.floor(Math.random() * (numberOfQuestions) )
    // return the corresponding question object
    return questions[randomInt]
  }

  this.getNextQuestion = function(previousQuestionID){
    // if on last question, return first question...
    if (previousQuestionID === numberOfQuestions) {
      return questions[0]
    }
    // ...else return next question from the array
    else { return questions[previousQuestionID] }
  }

  var questionsToSave = [
    {"id": 1, "question": "Capital of MA", "answer": "Boston"},
    {"id": 2, "question": "Capital of NY", "answer": "Albany"},
    {"id": 3, "question": "Capital of CT", "answer": "Hartford"},
    {"id": 4, "question": "Capital of IL", "answer": "Springfield"},
  ]

  // save the questions to HTML5 local storage to enable offline access
  window.localStorage.setItem("savedQuestions", JSON.stringify(questionsToSave))

  // Driver code for testing
  var firstQuestion = this.getRandomQuestion()
  console.log(firstQuestion.question)
  console.log(firstQuestion.answer)
  console.log('----------')
  nextQuestion = this.getNextQuestion(firstQuestion.id)
  console.log(nextQuestion.question)

}
