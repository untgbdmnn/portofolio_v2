import ButtonTheme from '@/components/ButtonTheme'
import SelectLang from '@/components/SelectLang'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  const { t } = useTranslation();
  const menuItem = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
    { name: 'skills', link: '/skills' },
    { name: 'portofolio', link: '/portofolio' },
    { name: 'contact', link: '/contact' },
  ]
  return (
    <div className='w-full py-2'>
      <div className='bg-background py-2 rounded-sm px-5'>
        <div className='flex items-center justify-between'>
          <Link to="/" className='text-lg font-black'>Untung Budiman</Link>
          <div className='flex items-center'>
            {menuItem.map((item, index) => {
              return (
                <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? "nav-link border-b-2 border-primary" : "nav-link"} >{t('menu.'+item.name)}</NavLink>
              )
            })}
          </div>
          <div className='flex items-center justify-center gap-1'>
            <SelectLang />
            <ButtonTheme className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}
