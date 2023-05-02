import Footer from "../../components/Footer";
import { ArticleDetailsContainer, ArticleTextContainer, ArticleContainer, ArticlePic, ArticleTitle, ArticleDetail } from "../../components/general";
import { SemiTitle, PersonalContainer, TitleLabel, PersonalCircle, PersonalName, PersonalitiesContainer, SeeAll } from "./peopleStyle";
export default function People() {

    const personalities = [
        {
            name: "גולדה מאיר",
            pic: require("../../assets/pictures/goldameir.jpg")
        },
        {
            name: "משה דיין",
            pic: require("../../assets/pictures/moshedayan.jpg")
        },
        {
            name: "דוד בן גוריון",
            pic: require("../../assets/pictures/gurion.jpg")
        },
        {
            name: "משה דיין",
            pic: require("../../assets/pictures/moshedayan.jpg")
        }
    ];

    const casualties = [
        {
            name: 'סר"ן גדעון אבידב ז"ל',
            years: "1952-1973",
            unit: 'חיל המודיעין, סיירת מטכ"ל',
            pic: require("../../assets/pictures/gurion.jpg")
        },
        {
            name: 'סר"ן גדעון אבידב ז"ל',
            years: "1952-1973",
            unit: 'חיל המודיעין, סיירת מטכ"ל',
            pic: require("../../assets/pictures/moshedayan.jpg")
        }
    ]

    return (
        <>
            <TitleLabel>
                <SemiTitle>אישים</SemiTitle>
                <SeeAll>ראה הכל</SeeAll>
            </TitleLabel>
            <PersonalitiesContainer>
                {personalities.map(person => {
                    return (
                        <PersonalContainer>
                            <PersonalCircle src={person.pic} />
                            <PersonalName>{person.name}</PersonalName>
                        </PersonalContainer>
                    )
                })}
            </PersonalitiesContainer>
            <TitleLabel>
                <SemiTitle>חללים</SemiTitle>
                <SeeAll>ראה הכל</SeeAll>
            </TitleLabel>
            {casualties.map(casualty =>
                <ArticleContainer>
                    <ArticlePic src={casualty.pic} />
                    <ArticleTextContainer>
                        <ArticleTitle>{casualty.name}</ArticleTitle>
                        <ArticleTitle>{casualty.years}</ArticleTitle>
                        <ArticleDetailsContainer>
                            <ArticleDetail>{casualty.unit}</ArticleDetail>
                        </ArticleDetailsContainer>
                    </ArticleTextContainer>
                </ArticleContainer>
            )}
        </>
    )
}