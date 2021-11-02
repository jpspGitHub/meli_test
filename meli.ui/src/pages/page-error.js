import AngerImage from './../assets/ANGER.png';
import { Link } from '@reach/router';
import Page from "../components/page";
import './../styles/errors.scss'

export default function PageError() {
    return (
        <Page title="Error" description="Error not found" classes={["error"]} >
            <img src={AngerImage} alt="Error" />
            <div className="text-container">
                <span>Algo malo paso</span>
                <span>Pero estamos trabajando para solucionarlo</span>
                <span>Ir a la <Link to="/"> Home</Link> </span>
            </div>
        </Page>
    )
}