//jshint ignore: start

const $ = require( 'jquery' );

const QUESTIONS = [ {
  text: 'Question 1',
  answers: [
    '0815',
    '2B',
    'BAM128',
    'Barely'
  ],
  correct: 0
}, {
  text: 'Question 2',
  answers: [
    '0815',
    '2B',
    'BAM128',
    'Barely'
  ],
  correct: 1
}, {
  text: 'Question 3',
  answers: [
    '0815',
    '2B',
    'BAM128',
    'Barely'
  ],
  correct: 2
}, {
  text: 'Question 4',
  answers: [
    '0815',
    '2B',
    'BAM128',
    'Barely'
  ],
  correct: 3
} ];

const questionsPageElement = $( '.questions-page' );
const questionCurrentElement = $( '.question-current' );
const questionsTotalElement = $( '.questions-total' );
const questionElement = $( '.question' );
const answersElement = $( '.answers' );

const resultsPageElement = $( '.results-page' );
const scoreElement = $( '.score' );
const restartButtonElement = $( '.restart-button' );

const showResults = function() {
  questionsPageElement.hide();
  resultsPageElement.show();
};

const showQuestions = function() {
  resultsPageElement.hide();
  questionsPageElement.show();
};

const resetScore = function() {
  scoreElement.text( 0 );
};

const increaseScore = function() {
  let score = parseInt( scoreElement.text(), 10 );
  scoreElement.text( score + 1 );
};

const setQuestion = function( questionIndex ) {
  let question = QUESTIONS[ questionIndex ];
  questionCurrentElement.text( questionIndex );
  questionElement.text( question.text );
  answersElement.empty();
  for ( let i = 0; i < question.answers.length; i++ ) {
    let answer = question.answers[ i ];
    answersElement.append( '<li><button type="button">' + answer + '</button></li>' );
  }
};

answersElement.on( 'click', 'button', function() {
  let choice = $( this ).parent().index();
  let questionIndex = parseInt( questionCurrentElement.text(), 10 );
  let question = QUESTIONS[ questionIndex ];
  if ( question.correct === choice ) {
    increaseScore();
  }

  if ( questionIndex + 1 < QUESTIONS.length ) {
    setQuestion( questionIndex + 1 );
  } else {
    showResults();
  }
} );

restartButtonElement.click( function() {
  setQuestion( 0 );
  resetScore();
  showQuestions();
} );

$( document ).ready( function() {
  questionsTotalElement.text( QUESTIONS.length );
  setQuestion( 0 );
} );
