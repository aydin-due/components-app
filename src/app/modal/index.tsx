import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
    return (
        <ThemedView>
            <Link asChild href='/modal/modal-window' className='mx-4'>
                <Text>
                    open modal
                </Text>
            </Link>

            <ThemedButton onPress={() => router.push('/modal/modal-window')}>open modal</ThemedButton>
        </ThemedView>
    );
};
export default ModalScreen;
