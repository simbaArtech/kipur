import Header from "../components/header/Header";
import articlepic from "../assets/pictures/cardImage.jpg";
import Carousel from "../components/carousel/Carousel";
import { AccountCircle, CalendarMonth } from '@mui/icons-material';
import Footer from "../components/Footer";
import { SemiTitle, Container, ArticleDetailsContainer, ArticleTextContainer, ArticleContainer, ArticlePic, ArticleTitle, ArticleDetail } from "./recommendedStyle";
export default function Recommended() {
    return (
        <>
            <Header />
            <Container>
                <Carousel />
                <SemiTitle>כותרת</SemiTitle>
                <ArticleContainer>
                    <ArticlePic src={articlepic} />
                    <ArticleTextContainer>
                        <ArticleTitle>כותרת ארוכה מאוד אבל מאוד ארוכה ממש שצריך לרדת שורה</ArticleTitle>
                        <ArticleDetailsContainer>
                            <ArticleDetail>
                                שם כותב המאמר
                                <AccountCircle sx={{ height: "14px" }} />
                            </ArticleDetail>
                            <ArticleDetail>
                                תאריך כתיבה
                                <CalendarMonth sx={{ height: "14px" }} />
                            </ArticleDetail>
                        </ArticleDetailsContainer>
                    </ArticleTextContainer>
                </ArticleContainer>
                <ArticleContainer>
                    <ArticlePic src={articlepic} />
                    <ArticleTextContainer>
                        <ArticleTitle>כותרת יחסית קצרה</ArticleTitle>
                        <ArticleDetailsContainer>
                            <ArticleDetail>
                                שם כותב המאמר
                                <AccountCircle sx={{ height: "14px" }} />
                            </ArticleDetail>
                            <ArticleDetail>
                                תאריך כתיבה
                                <CalendarMonth sx={{ height: "14px" }} />
                            </ArticleDetail>
                        </ArticleDetailsContainer>
                    </ArticleTextContainer>
                </ArticleContainer>
                <ArticleContainer>
                    <ArticlePic src={articlepic} />
                    <ArticleTextContainer>
                        <ArticleTitle>כותרת יחסית קצרה</ArticleTitle>
                        <ArticleDetailsContainer>
                            <ArticleDetail>
                                כאן יהיה טקסט
                            </ArticleDetail>
                        </ArticleDetailsContainer>
                    </ArticleTextContainer>
                </ArticleContainer>
                <Footer />
            </Container>
        </>
    )
}