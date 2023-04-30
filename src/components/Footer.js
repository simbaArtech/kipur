import { LocalPostOffice as EmailIcon } from '@mui/icons-material';
import logos from "../assets/pictures/logos.png";
import { FooterContainer, Contact, Logos } from './footerStyle';

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <Logos src={logos} />
                פותח ועוצב ע"י תחום ארטק במערך ההדרכה שבחיל המודיעין
                <Contact>
                    צרו קשר
                    <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
                </Contact>
            </FooterContainer >
        </>
    )
}