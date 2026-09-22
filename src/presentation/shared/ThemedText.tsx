import { Text, TextProps } from 'react-native'

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

interface Props extends TextProps {
    className?: string
    type?: TextType
    color?: string
}

const ThemedText = ({ type, className, color, ...rest }: Props) => {
    var fontStyle = ''
    switch (type) {
        case 'normal':
            fontStyle = 'font-normal'
            break;
        case 'h1':
            fontStyle = 'text-3xl'
            break
        case 'h2':
            fontStyle = 'text-xl'
            break
        case 'semi-bold':
            fontStyle = 'font-bold'
            break
        case 'link':
            fontStyle = 'font-normal underline'
            break

    }
    return (
        <Text
            className={[
                'text-light-text dark:text-dark-text',
                className,
                fontStyle
            ].join(' ')}
            {...rest} />
    )
}

export default ThemedText