import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = props =>
{
return (
    <div className="chart">
        {props.dataPoint.map(element => {
        return <ChartBar key={element.label} value={element.value} label={element.label} ></ChartBar>
        })
        }
        
    </div>
)

}
export default Chart;