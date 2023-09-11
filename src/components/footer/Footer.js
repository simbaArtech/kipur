import React, { useState } from "react";
import logos from "../../assets/pictures/logos.png";
import {
  FooterContainer,
  Contact,
  Logos,
  CardFooterContainer,
} from "./footerStyle";
import SecBanner from "./banner/SecBanner";

export default function Footer({ card }) {
  const [textPop, setTextPop] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
    marginTop: "0",
    fontWeight: "bold",
    fontSize: "0.7rem",
    padding: "2rem 0.5rem",
  };
  const unselectedStyle = {
    margin: "auto",
    borderRadius: "9px",
    marginLeft: "10px",
    marginRight: "10px",
    width: "4.8rem",
    padding: "2px 0px",
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "1px solid #657c54",
  };
  const labels = [
    {
      name: "אודות",
      icon: require("../../assets/pictures/odot.svg"),
      title: `ברוכים הבאים לפורטל מורשת אמ"ן במלחמת יום הכיפורים`,
      text: (
        <>
          עמוד דיגיטלי זה הופק על-ידי ארטק, בית טכנולוגיות הלמידה של מערך ההדרכה
          באגף המודיעין.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          מטרתו להוות מקור ידע אודות האירועים והדמויות המרכזיות, שאפיינו את
          התנהלות אגף המודיעין בהקשרי מלחמת יום הכיפורים – המלחמה שאנו מציינים
          בימים אלה יובל להתרחשותה.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          התוכן המובא בדף זה – '50 אירועים ואנשים לציון שנת ה-50' - נכתב במשולב
          על-ידי חניכי תכנית המצוינות 'חבצלות', אנשי מערך ההדרכה ומערך המשא"ן של
          אמ"ן ורע"ן המורשת החילי, סא"ל במיל' גדעון מיטשניק.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          עמוד זה אינו מחליף עיון והעמקה במקורות רבים נוספים שעוסקים בקורות
          המלחמה, ובסיפורי האנשים שהיו מעורבים בה.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          אנו מצדיעים לאנשי אגף המודיעין וקהילת המודיעין בני ובנות דור המלחמה
          שנשאו על כתפיהם את עול המלחמה והיו עמוד תווך איתן להשגת הניצחון.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          עיון מועיל!
        </>
      ),
    },
  ];

  return (
    <>
      {card ? (
        ""
      ) : (
        <FooterContainer>
          <Logos src={logos} />
          פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
          <div
            style={{ direction: "rtl", display: "flex", alignItems: "stretch" }}
          >
            <img
              src={require("../../assets/pictures/email.png")}
              style={{ width: "15px", height: "15px", marginLeft: "5px" }}
            />
            צרו קשר{" "}
            <a
              style={{
                marginRight: "5px",
                textDecoration: "none",
                color: "white",
              }}
              href="mailto:artechb15@gmail.com"
            >
              artechb15@gmail.com
            </a>
          </div>
          <div style={containerStyle}>
            {labels.map((label) => (
              <div
                key={label}
                style={unselectedStyle}
                onClick={() => {
                  setShowPopUp(true);
                  setTextPop(label);
                }}
              >
                <img
                  src={label.icon}
                  style={{ width: "15px", height: "15px" }}
                ></img>
                {label.name}
              </div>
            ))}
          </div>
        </FooterContainer>
      )}
      {showPopUp && <SecBanner setShowPopUp={setShowPopUp} label={textPop} />}
    </>
  );
}
