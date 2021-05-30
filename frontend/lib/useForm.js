import { isLeafType } from 'graphql';
import { useState } from 'react';

export default function useForm(initial = {}) {
  // Create a state object for our inputs

  const [inputs, setInputs] = useState(initial);

  //   {
  //     name: 'Black Sunglasses',
  //     price: 100,
  //     description: 'Looks super cool.',
  //   }

  function handleChange(e) {
    let { type, name, value } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      // copy the  existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    console.log(blankState);
    setInputs({
      ...blankState,
    });
  }

  // return the things we want to surface from this "Custom Hook"
  return { inputs, handleChange, resetForm, clearForm };
}
