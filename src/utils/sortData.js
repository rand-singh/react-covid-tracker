/**
 * Sort data
 * 
 * @param {object} data 
 */
export const sortData = (data) => {
    console.log(typeof data);
    const sortedData = [...data];
    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1);
}