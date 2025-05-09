// components/HeatMap.js
import HeatMap from 'react-heatmap-grid';

export default function MyHeatMap() {
    const xLabels = new Array(5).fill(0).map((_, i) => `${i}`);
    const yLabels = ['Sun', 'Mon', 'Tue'];
    const data = new Array(yLabels.length)
        .fill(0)
        .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

    return <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} />;
}
