import ExpenseItem from "./ExpenseItem";
function Expences({expenses} = {expenses}) {

    return (
        <div className="expenses">
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        </div>
        );
}
export default Expences;