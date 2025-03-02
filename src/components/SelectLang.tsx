import { useTranslation } from 'react-i18next'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import IDFlags from '../assets/icons/id.png'
import USFlags from '../assets/icons/us.png'

export default function SelectLang() {
    const { t, i18n } = useTranslation();
    return (
        <Select onValueChange={(value) => i18n.changeLanguage(value)} defaultValue={i18n.language}>
            <SelectTrigger className="w-[90px] ring-0 outline-none">
                <div className='flex flex-row-reverse items-center justify-center gap-1.5'>
                    <SelectValue placeholder={i18n.language === 'en' ? 'English' : 'Indonesian'} />
                    {i18n.language === 'en' ? (
                        <img src={USFlags} alt='Us Flag' className='size-5' />
                    ) : (
                        <img src={IDFlags} alt='Indonesian Flag' className='size-5' />
                    )}
                </div>
            </SelectTrigger>
            <SelectContent className='w-fit'>
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
            </SelectContent>
        </Select>

    )
}

export function SelectLangMobile() {
    const { t, i18n } = useTranslation();
    return (
        <Select onValueChange={(value) => i18n.changeLanguage(value)} defaultValue={i18n.language}>
            <SelectTrigger className="w-2/3 ring-0 outline-none h-16 text-2xl">
                <div className='flex flex-row-reverse items-center justify-center gap-3'>
                    <SelectValue placeholder={i18n.language === 'en' ? t('languages.eng') : t('languages.indo')} className='text-2xl' />
                    {i18n.language === 'en' ? (
                        <img src={USFlags} alt='Us Flag' className='size-7' />
                    ) : (
                        <img src={IDFlags} alt='Indonesian Flag' className='size-7' />
                    )}
                </div>
            </SelectTrigger>
            <SelectContent className='w-fit'>
                <SelectItem value="id" className='text-2xl'>{t('languages.indo')}</SelectItem>
                <SelectItem value="en" className='text-2xl'>{t('languages.eng')}</SelectItem>
            </SelectContent>
        </Select>

    )
}