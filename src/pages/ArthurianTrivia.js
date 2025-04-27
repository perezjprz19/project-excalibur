import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import './ArthurianTrivia.css'; 

const triviaQuestions = [
  {
    question: 'What is the name of King Arthur’s legendary sword?',
    choices: ['Excalibur', 'Anduril', 'Glamdring', 'Stormbringer'],
    answer: 'Excalibur'
  },
  {
    question: 'Who was the wizard advisor to King Arthur?',
    choices: ['Merlin', 'Gandalf', 'Saruman', 'Radagast'],
    answer: 'Merlin'
  },
  {
    question: 'What was the name of Arthur’s kingdom?',
    choices: ['Avalon', 'Gondor', 'Camelot', 'Narnia'],
    answer: 'Camelot'
  },
  {
    question: 'Who was King Arthur’s queen?',
    choices: ['Morgana', 'Arwen', 'Guinevere', 'Eowyn'],
    answer: 'Guinevere'
  },
  {
    question: 'What item did the knights of the Round Table seek?',
    choices: ['Sword of Truth', 'Philosopher’s Stone', 'The Holy Grail', 'Crystal Skull'],
    answer: 'The Holy Grail'
  },
  {
    question: 'Which knight is known for slaying a dragon and finding the Holy Grail?',
    choices: ['Sir Gawain', 'Sir Percival', 'Sir Galahad', 'Sir Tristan'],
    answer: 'Sir Galahad'
  },
  {
    question: 'Which knight betrayed King Arthur by having an affair with Queen Guinevere?',
    choices: ['Sir Gawain', 'Sir Lancelot', 'Sir Kay', 'Sir Bors'],
    answer: 'Sir Lancelot'
  },
  {
    question: 'Who is Arthur’s half-sister and a powerful enchantress?',
    choices: ['Guinevere', 'Morgana le Fay', 'Vivian', 'Elaine'],
    answer: 'Morgana le Fay'
  },
  {
    question: 'Who raised King Arthur as a child?',
    choices: ['Merlin', 'Sir Ector', 'Uther Pendragon', 'Lancelot'],
    answer: 'Sir Ector'
  },
  {
    question: 'Which knight is known for his strength and loyalty, often associated with a tragic love for Isolde?',
    choices: ['Sir Gawain', 'Sir Tristan', 'Sir Bors', 'Sir Bedivere'],
    answer: 'Sir Tristan'
  },
  {
    question: 'What is the name of King Arthur’s father?',
    choices: ['Uther Pendragon', 'Vortigern', 'Leodegrance', 'King Lot'],
    answer: 'Uther Pendragon'
  },
  {
    question: 'Which lady gave King Arthur his sword?',
    choices: ['Lady of the Lake', 'Guinevere', 'Morgan le Fay', 'Elaine'],
    answer: 'Lady of the Lake'
  },
  {
    question: 'Who was the last knight to return Excalibur to the lake?',
    choices: ['Sir Bedivere', 'Sir Galahad', 'Sir Lancelot', 'Sir Gawain'],
    answer: 'Sir Bedivere'
  },
  {
    question: 'What structure did the Knights of the Round Table sit at?',
    choices: ['Square Table', 'Oval Table', 'Round Table', 'King’s Throne'],
    answer: 'Round Table'
  },
  {
    question: 'What was Merlin trapped in by the Lady of the Lake?',
    choices: ['A Tower', 'A Tree', 'A Cave', 'A Crystal Tomb'],
    answer: 'A Crystal Tomb'
  }
];

export default function ArthurianTrivia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState('');

  const current = triviaQuestions[currentIndex];

  const handleAnswer = (choice) => {
    setSelected(choice);
    if (choice === current.answer) {
      setScore(prev => prev + 1);
      setMessage('Correct!');
    }else {
        setMessage('Incorrect!');
    }
    setTimeout(() => {
      setSelected(null);
      setMessage('');
      if (currentIndex + 1 < triviaQuestions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    setMessage('');
  };

  return (
    <div className="app-container">
      <h1 className="title">Arthurian Legends Trivia</h1>

      {finished ? (
        <Card className="card">
          <div className="card-content">
            <p className="result-text">You scored {score} out of {triviaQuestions.length}</p>
            {score / triviaQuestions.length >= 0.7 ? (
              <p className="message correct">Your Arthurian name is: Morgana Shellenhamer</p>
            ) : (
              <p className="message incorrect">Try again to unlock your Arthurian name!</p>
            )}
            <Button className="button" onClick={reset}>Play Again</Button>
          </div>
        </Card>
      ) : (
        <Card className="card">
          <div className="card-content">
            <p className="question">{current.question}</p>
            <div className="choices">
              {current.choices.map((choice, idx) => (
                <Button
                  key={idx}
                  disabled={selected !== null}
                  className={
                    selected === choice
                      ? choice === current.answer
                        ? 'button correct'
                        : 'button incorrect'
                      : 'button'
                  }
                  onClick={() => handleAnswer(choice)}
                >
                  {choice}
                </Button>
              ))}
            </div>
            {selected && (
                <div className={`message ${selected === current.answer ? 'correct' : 'incorrect'}`}>
                {message}
                </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
