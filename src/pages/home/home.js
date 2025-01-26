import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const handleNavigation = () => {
        navigate("/portfolio");
    };

    return (
        <Container 
            className="Home ms-auto"
            // onClick={handleNavigation}
        >
            <Container
                onClick={handleNavigation}
            >
                <h1>{t('welcome')}</h1>
            </Container>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
        </Container>
    );
};

export default Home;