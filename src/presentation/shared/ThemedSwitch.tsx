import { useTheme } from '@/hooks/use-theme'
import { Platform, Pressable, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import ThemedText from './ThemedText'

interface Props {
    text?: string
    value: boolean
    className?: string
    onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
    const activeColor = useTheme().primary
    return (
        <Pressable
            className={`flex flex-row items-center justify-between mx-2 active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? activeColor : ''}
                // ios_backgroundColor={value ? 'green' : 'red'}
                trackColor={{
                    false: 'red',
                    true: activeColor,
                }}
            />
        </Pressable>
    )
}

export default ThemedSwitch