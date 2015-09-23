expertSite.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ prompt: factory.questionPrompt, id: factory.questions.length + 1, answers: [] });
    factory.questionPrompt = null;
  };

  return factory;
})
