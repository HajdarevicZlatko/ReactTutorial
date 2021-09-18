import ChartBar from "./ChartBar";
import './Chart.css';



const Chart = props =>
{

const maximunValue = Math.max(...props.dataPoint.map(item => item.value))
return (
    <div className="chart">
        {props.dataPoint.map(element => {
        return <ChartBar key={element.label} value={element.value} label={element.label} maxValue={maximunValue}></ChartBar>
        })
        }
        
    </div>
)

}
export default Chart;