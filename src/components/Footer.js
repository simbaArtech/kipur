import { LocalPostOffice as EmailIcon } from '@mui/icons-material';

export default function Footer() {
    return (
        <>
            <div style={{ color: "white", padding: "3rem", fontSize: "0.7rem" }}>
                פותח ועוצב ע"י תחום ארטק במערך ההדרכה שבחיל המודיעין
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    צרו קשר
                    <EmailIcon style={{ width: "18px", paddingLeft: "4px" }} />
                </div>
            </div>
        </>
    )
}