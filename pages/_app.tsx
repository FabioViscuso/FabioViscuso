import { appWithTranslation } from 'next-i18next'
import Layout from '../components/ui/Layout'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Layout>
                <Component{...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(App)
