import { LocalPostOffice as EmailIcon } from '@mui/icons-material';
import logos from "../../assets/pictures/logos.png";
import { FooterContainer, Contact, Logos, CardFooterContainer } from './footerStyle';

export default function Footer({ card }) {
    return (
        <>
            {card ?
                <CardFooterContainer>
                    <Logos src={logos} />
                    פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
                    <Contact>
                        צרו קשר
                        <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
                    </Contact>
                </CardFooterContainer>
                :
                <FooterContainer>
                    <Logos src={logos} />
                    פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
                    <Contact>
                        צרו קשר
                        <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
                    </Contact>
                </FooterContainer >
            }
        </>
    )
}