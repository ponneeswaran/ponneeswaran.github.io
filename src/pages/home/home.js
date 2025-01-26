import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/portfolio");
    };

    return (
        <Container 
            className="Home ms-auto"
            onClick={handleNavigation}
        >
            <h1>Hi, I'm Ponneeswaran.</h1>
        </Container>
    );
};

export default Home;