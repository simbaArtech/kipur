import React from 'react';
import { Back, Container, Top, Title, Information } from './badResolutionStyle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
export default function BadResolution() {
    return (
        <Back>
            <Container>
                <Top>
                    <PhoneIphoneIcon sx={{ color: "white", width: "3rem", height: "3rem", position: "relative", top: "12px", right: "43%" }} />
                    <Title>האתר נתמך בטלפונים בלבד!</Title>
                    <Information>מתנצלים, אתר זה נתמך על גבי טלפונים בלבד. מוזמנים להכנס.</Information>
                </Top>
            </Container>
        </Back>
    )
}
