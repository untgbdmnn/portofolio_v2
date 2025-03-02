import { Button } from './ui/button'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils';

export default function ButtonTheme({ className}: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const isLight = theme === 'light';

    const handleToggle = () => {
        setTheme(isLight ? 'dark' : 'light');
    }
    return (
        <Button type='button' size="icon" variant="outline" onClick={handleToggle} className={cn(className)}>
            {isLight ? <Sun className='text-amber-500 size-6' /> : <MoonStar className='text-blue-500 size-6' />}
        </Button>
    )
}
