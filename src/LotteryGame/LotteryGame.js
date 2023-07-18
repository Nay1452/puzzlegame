import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './styles.css';

const initialState = {
  game1: {
    selectedNumbers: [],
  },
  game2: {
    selectedNumbers: [],
  },
  game3: {
    selectedNumbers: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NUMBER':
      const { number, game } = action.payload;
      const isSelected = state[game].selectedNumbers.includes(number);
      const updatedNumbers = [...state[game].selectedNumbers];

      if (isSelected) {
        const index = updatedNumbers.indexOf(number);
        updatedNumbers.splice(index, 1);
      } else {
        if (updatedNumbers.length < 6) {
          updatedNumbers.push(number);
        }
      }

      return {
        ...state,
        [game]: {
          ...state[game],
          selectedNumbers: updatedNumbers,
        },
      };
    case 'CLEAR_NUMBERS':
      const { game: gameToClear } = action.payload;
      return {
        ...state,
        [gameToClear]: {
          ...state[gameToClear],
          selectedNumbers: [],
        },
      };
    case 'ADD_RANDOM_NUMBERS':
      const { game: gameToAddRandom } = action.payload;
      const availableNumbers = [...Array(49)].map((_, index) => index + 1);
      const randomNumbers = [];

      while (randomNumbers.length < 6 && availableNumbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const randomNumber = availableNumbers[randomIndex];
        randomNumbers.push(randomNumber);
        availableNumbers.splice(randomIndex, 1);
      }

      return {
        ...state,
        [gameToAddRandom]: {
          ...state[gameToAddRandom],
          selectedNumbers: randomNumbers,
        },
      };
    default:
      return state;
  }
};

const LotteryGame = ({ game }) => {
  const selectedNumbers = useSelector((state) => state[game].selectedNumbers);
  const dispatch = useDispatch();

  const handleToggleNumber = (number) => {
    dispatch({ type: 'TOGGLE_NUMBER', payload: { number, game } });
  };

  const handleAddRandomNumbers = () => {
    dispatch({ type: 'ADD_RANDOM_NUMBERS', payload: { game } });
  };

  const numberButtons = [...Array(49)].map((_, index) => {
    const number = index + 1;
    const isSelected = selectedNumbers.includes(number);
    const classNames = `number-button ${isSelected ? 'selected' : ''}`;
    return (
      <button
        key={number}
        className={classNames}
        onClick={() => handleToggleNumber(number)}
        disabled={selectedNumbers.length === 6 && !isSelected}
      >
        {number}
      </button>
    );
  });

  return (
    <div className="lottery-game">
      <div className="number-buttons">{numberButtons}</div>
      <div className="buttons-container">
        <button className="clear-button" onClick={() => dispatch({ type: 'CLEAR_NUMBERS', payload: { game } })}>
          Clear
        </button>
        <button className="add-random-button" onClick={handleAddRandomNumbers}>
          Quick Pick
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const store = createStore(reducer);

  return (
    <div className="outer-container">
      <div className="container1">
        <Provider store={store}>
          <LotteryGame game="game1" />
        </Provider>
      </div>
      <div className="container2">
        <Provider store={store}>
          <LotteryGame game="game2" />
        </Provider>
      </div>
      <div className="container3">
        <Provider store={store}>
          <LotteryGame game="game3" />
        </Provider>
      </div>
    </div>
  );
};

export default App;
