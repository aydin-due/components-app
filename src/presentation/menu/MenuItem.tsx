import { Ionicons } from '@react-native-vector-icons/ionicons'
import { Href, router, useTheme } from 'expo-router'
import { ComponentProps } from 'react'
import { Pressable, View } from 'react-native'
import ThemedText from '../shared/ThemedText'

type IoniconsName = ComponentProps<typeof Ionicons>['name']

interface Props {
    title: string
    icon: IoniconsName
    name: string
    isFirst?: boolean
    isLast?: boolean
}

const MenuItem = ({
    title, icon, name, isFirst, isLast
}: Props) => {

    const [routeName] = name.split('/')
    const primaryColor = useTheme().colors.primary

    return (
        <Pressable
            className='bg-white dark:bg-black/15 px-5 py-2'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10
                })
            }}
            onPress={() => router.push(routeName as Href)}
        >
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} />
                <ThemedText type='h2' className='ml-5'>{title}</ThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem