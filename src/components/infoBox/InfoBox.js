import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import './InfoBox.scss';
import { prettyPrintStat } from '../../utils/prettyPrintStat';

function InfoBox({ title, cases, isRed, active, total }) {    
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red' } `}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{prettyPrintStat(cases)}</h2>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
