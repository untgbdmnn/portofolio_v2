import { useTranslation } from "react-i18next";

export function AboutMe() {
    const { t } = useTranslation();
    return (
        <div className="h-[350px] lg:h-52">
            <div className="text-sm font-normal flex flex-col gap-2.5">
                <p className="">{t('description.aboutme')}</p>
                <p>{t('description.currentwork')}</p>
            </div>
        </div>
    )
}

export function Educate() {
    const { t } = useTranslation();
    return (
        <div className="h-[350px] lg:h-52">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 hidden lg:block flex-none bg-secondary rounded-full border-4 border-third" />
                <div className="flex items-start justify-start flex-col">
                    <h1 className="text-sm font-medium text-third">2021 - 2024</h1>
                    <h1 className="text-secondary font-black text-lg">SMK N 2 Pengasih, Kulon Progo</h1>
                    <p className="text-sm">{t('description.tjkt')}</p>
                </div>
            </div>
            <div className="pt-3 lg:px-7 px-0">
                <p className="text-sm">{t('description.educatedesc')}</p>
            </div>
        </div>
    )
}

export function Experience() {
    const { t } = useTranslation();
    return (
        <div className="h-[350px] lg:h-52">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 hidden lg:block flex-none bg-secondary rounded-full border-4 border-third" />
                <div className="flex items-start justify-start flex-col">
                    <h1 className="text-sm font-medium text-third">2024 - {t('sekarang')}</h1>
                    <h1 className="text-secondary font-black text-lg">PT Belanja Pasti Indonesia</h1>
                    <p className="text-sm">{t('description.webdev')}</p>
                </div>
            </div>
            <div className="pt-3 lg:px-7 px-0">
                <p className="text-sm">{t('description.webdevdesc')}</p>
            </div>
        </div>
    )
}
