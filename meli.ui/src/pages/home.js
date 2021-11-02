import { useEffect } from "react"
import Brand from './../assets/Mercado-Libre.jpg'
import Page from "./../components/page"
import './../styles/home.scss'

export default function Home({ setBreadcrumb }) {
    useEffect(() => {
        setBreadcrumb([]);
    }, [setBreadcrumb])
    return (
        <Page title="Home" description="Home Mercado Libre" classes={['home']}>
            <img src={Brand} alt="Mercado libre"></img>
        </Page>
    )
}