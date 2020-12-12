/**
 * Given the data from https://disease.sh/v3/covid-19/historical/all?lastdays=120
 * This will calculate the difference in the number of cases day to day
 * 
 * @param {object} data 
 */
export const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {        
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};
