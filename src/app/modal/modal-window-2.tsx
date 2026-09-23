import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'



const ModalWindow = () => {
    return (
        <ThemedView
            className='justify-center items-center flex-1'
        >
            <ThemedText>hi im a modal</ThemedText>
            <ThemedButton onPress={() => router.dismiss()}>close</ThemedButton>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ThemedView>
    )
}

export default ModalWindow