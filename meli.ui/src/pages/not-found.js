import SadnessImage from './../assets/SADNESS.png';
import { Link } from '@reach/router';
import Page from "../components/page";
import './../styles/errors.scss'

export default function NotFound() {
    return (
        <Page title="No Encontrado" description="Error not found" classes={["error"]} >
            <img src={SadnessImage} alt="Not found" />
            <div className="text-container">
                <span>No encontramos lo que buscabas</span>
                <span>Intentalo nuevamente</span>
                <span>o ve a la <Link to="/"> Home</Link> </span>
            </div>
        </Page>
    )
}