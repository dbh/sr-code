import create from 'zustand'

const useStore = create(set => ({
  dictionary: [],
  filter: "",
  selectedEntry: null,
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
}));

export default useStore;