import { useTheme } from '@/components/theme-provider';
import TextPressure from '@/components/ui/TextPressure'

export default function HeroText() {
    const { theme } = useTheme();
    return (
        <div className='relative h-fit w-fit flex items-center justify-center'>
            {/* Desktop */}
            <div className="hidden lg:block ">
                <TextPressure
                    text="Untung Budiman"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor={theme === 'light' ? "#2c2a4a" : "#74c69d"}
                    minFontSize={145}
                />
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
                <TextPressure
                    text="Untung"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor={theme === 'light' ? "#2c2a4a" : "#74c69d"}
                    minFontSize={70}
                />
                <TextPressure
                    text="Budiman"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor={theme === 'light' ? "#2c2a4a" : "#74c69d"}
                    minFontSize={70}
                />
            </div>
        </div>
    )
}
