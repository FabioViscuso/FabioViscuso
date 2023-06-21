// import translation function
import { useTranslation } from 'next-i18next';

export default function Footer() {
    const { t } = useTranslation()
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-lg z-40 flex justify-center items-center'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <h1>Just a sec!</h1>
        </div>
    )
}
