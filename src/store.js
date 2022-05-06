import create from 'zustand'

const useStore = create(set => ({
  dictionary: [],
  filter: "",
  selectedEntry: null,
  translateInput: "",
  translateOutput: "",

  setDictionary: (dictionary) => set(state => ({
      ...state,
      dictionary
  })),
  setFilter: (filter) => set(state => ({
    ...state,
    filter
  })),
  setSelectedEntry: (selectedEntry) => set(state => ({
    ...state,
    selectedEntry
  })),

  setTranslateInput: (translateInput) => set(state => ({
    ...state,
    translateInput
  })), 

  setTranslateOutput: (translateOutput) =>set(state => ({
    ...state,
    translateOutput
  }))

}));

export default useStore;