var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': ' Albert Einstein', 
     'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
    },
    {'author': 'Dr. Seuss', 
     'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams"
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];




function display() {

 var show = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);

  document.querySelector('#quote').textContent = `\"${arrayOfQuotes[show].quote}\"`;
  document.querySelector('#author').textContent = `--${arrayOfQuotes[show].author}`;

}
