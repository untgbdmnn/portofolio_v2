import SelectLang from '@/components/SelectLang'
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Sidebar from './Sidebar';
import { useState } from 'react';
import SwitchDarkMode from '@/components/SwitchTheme';
import { ThemeAnimationType } from '@/lib/theme';
import { useTheme } from '@/components/theme-provider';


export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuItem = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
    { name: 'skills', link: '/skills' },
    { name: 'portofolio', link: '/portofolio' },
    { name: 'contact', link: '/contact' },
  ]

  const { theme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  const handleDarkModeChange = (isDark: boolean) => {
    setIsDarkMode(isDark)
  }

  return (
    <div className='w-full fixed z-[9999]'>
      <div className='backdrop-blur-md py-2 rounded-sm px-5'>
        <div className='flex items-center justify-between @container'>
          <Link to="/" className='text-lg font-black logo flex items-center justify-center'>Untung Budiman</Link>
          <div className='flex items-center @sm:hidden @md:hidden @xs:hidden @xl:flex'>
            {menuItem.map((item, index) => {
              return (
                <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? "nav-link border-b-2 border-third" : "nav-link"} >{t('menu.' + item.name)}</NavLink>
              )
            })}
          </div>
          <div className='flex items-center justify-center gap-1 @sm:hidden @md:hidden @xs:hidden @xl:flex'>
            <SelectLang />
            <SwitchDarkMode
              animationType={ThemeAnimationType.CIRCLE}
              styleId="circle-animation"
              isDarkMode={isDarkMode}
              onDarkModeChange={handleDarkModeChange}
            />
          </div>

          <div className='@xl:hidden @md:hidden @sm:block @xs:block'>
            <Button className='' variant="outline" onClick={() => setOpen(true)}>
              <HiOutlineMenuAlt2 className='size-4' />
            </Button>
          </div>

          <Sidebar isOpen={open} onClose={() => setOpen(!open)} />

        </div>
      </div>
    </div>
  )
}
