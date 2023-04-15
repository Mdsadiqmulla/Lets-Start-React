import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2023, 4, 15);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const locationOfExpenditure = props.location;

    return (
        <div>
            <div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2 className="expense-item ">{expenseTitle}</h2>
                    <div className="expense-item__price">{expenseAmount} </div>
                    <div className="expense-item__location">{locationOfExpenditure}</div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;

