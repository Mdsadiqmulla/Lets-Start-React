import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, location: 'New York' },
    { id: 'e2', title: 'Phone Bill', amount: 87.53, location: 'San Francisco' },
    { id: 'e3', title: 'Groceries', amount: 132.12, location: 'Los Angeles' },
    { id: 'e4', title: 'Internet Bill', amount: 66.54, location: 'Seattle' },
  ];

  return (
    <div>
      <h2>Lets get started</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={new Date(2023, 4, 15)}
        />
      ))}
    </div>
  );
}

export default App;


