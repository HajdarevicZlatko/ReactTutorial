
const NewExpenseButton =  (props) =>
{
    let onButtonClick = (event)=>
    {
        event.preventDefault();
        props.setShowExp('true');
    }
    return(
<button onClick={onButtonClick}>Add new expense</button>
    )
}
export default NewExpenseButton;