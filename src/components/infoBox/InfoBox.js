import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import './InfoBox.scss';
import { prettyPrintStat } from '../../utils/prettyPrintStat';

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infoBox__cases">{prettyPrintStat(cases)} <small>today</small></h2>

                <Typography className="infoBox__total">
                    {prettyPrintStat(total)} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
