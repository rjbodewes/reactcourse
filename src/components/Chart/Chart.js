import ChartBar from './Chartbar'; 
import './Chart.css';

const Chart = props => {
    let barFillHeight = '0%';


    return (
    <div className="chart">
        {props.dataPoints.map(
        dataPoint => <ChartBar 
            value={dataPoint.value} 
            maxValue={null} 
            label={dataPoint.label}
            key={dataPoint.id}/>)}
    </div>
    )
};


export default Chart; 