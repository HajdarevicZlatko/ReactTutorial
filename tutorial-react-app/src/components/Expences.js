import ExpenseItem from "./ExpenseItem";
function Expences({expenses} = {expenses}) {
    let ex = expenses;
    return (
        <div className="expenses">
            <ExpenseItem title={ex[0].title} amount={ex[0].amount} date={ex[0].date}></ExpenseItem>
            <ExpenseItem title={ex[1].title} amount={ex[1].amount} date={ex[1].date}></ExpenseItem>
        </div>
        );
}
export default Expences;