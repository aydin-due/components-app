import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        <ThemedSwitch
          text='active'
          onValueChange={(val) => setState({ ...state, isActive: val })}
          value={state.isActive}
          className='mb-5'
        />
        <ThemedSwitch
          text='hungry'
          onValueChange={(val) => setState({ ...state, isHungry: val })}
          value={state.isHungry}
          className='mb-5'
        />
        <ThemedSwitch
          text='happy'
          onValueChange={(val) => setState({ ...state, isHappy: val })}
          value={state.isHappy}
          className='mb-5'
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
