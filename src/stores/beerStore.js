import { create } from 'zustand'
import { toast } from 'react-toastify';

const beerStore = create((set, get) => ({
  allBreweries: [],
  myBreweries: [],

  setAllBreweries: (breweries) => set({ allBreweries: breweries }),
  addBreweryToMyBreweries: (brewery) => {
    if (get().myBreweries.some(b => b.id === brewery.id)) {
      return toast.error('Brewery already in My Breweries');
    }
    if (get().myBreweries.length >= 5) {
      return toast.error('Youre an alcoholic, stop adding breweries.....');
    }
    set({ myBreweries: [...get().myBreweries, brewery] })
  },
  removeBreweryFromMyBreweries: (brewery) => set({ myBreweries: get().myBreweries.filter(b => b.id !== brewery.id) }),
})); 

export default beerStore; 