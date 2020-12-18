import numeral from "numeral";
/**
 * Format numbers
 * 
 * @param {*} stat 
 */
export const prettyPrintStat = (stat) => stat ? `${numeral(stat).format("0,0")}` : "0";