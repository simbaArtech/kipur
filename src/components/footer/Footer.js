import React from "react";
import { LocalPostOffice as EmailIcon } from "@mui/icons-material";
import logos from "../../assets/pictures/logos.png";
import {
  FooterContainer,
  Contact,
  Logos,
  CardFooterContainer,
  Kishur,
} from "./footerStyle";

export default function Footer({ card }) {
  return (
    <>
      {card ? (
        <CardFooterContainer>
          <Logos src={logos} />
          <Kishur href="https://go.idf.il/e5y8w4e6q2"> לאתר צה"ל </Kishur>
          <Kishur href="https://yomkipurwar.mod.gov.il/Pages/default.aspx">
            לאתר כלים חינוכיים של אמ"ן
          </Kishur>
          פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
          <Contact>
            צרו קשר
            <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
          </Contact>
        </CardFooterContainer>
      ) : (
        <FooterContainer>
          <Logos src={logos} />
          <Kishur href="https://go.idf.il/e5y8w4e6q2">לאתר צה"ל</Kishur>
          <Kishur href="https://yomkipurwar.mod.gov.il/Pages/default.aspx">
            לאתר כלים חינוכיים של אמ"ן
          </Kishur>
          פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
          <Contact>
            צרו קשר
            <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
          </Contact>
        </FooterContainer>
      )}
    </>
  );
}
