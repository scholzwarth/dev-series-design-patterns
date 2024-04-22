import { create } from 'zustand'
import { toast } from 'react-toastify';
import { BeerManager } from '../lib/beerManager';

const beerStore = create((set, get) => ({
  allBreweries: [],
  myBreweries: [],
  beerManager: null,

  setAllBreweries: (breweries) => set({ allBreweries: breweries }),
  addBreweryToMyBreweries: (brewery) => {
    if (get().myBreweries.some(b => b.id === brewery.id)) {
      return toast.error('Brewery already in My Breweries');
    }
    if (get().myBreweries.length >= 5) {
      return toast.error('Youre an alcoholic, stop adding breweries.....');
    }
    if (get().beerManager) {
      get().addBeerGraphic(brewery);
    }
    set({ myBreweries: [...get().myBreweries, brewery] })
  },
  removeBreweryFromMyBreweries: (brewery) => {
    if (get().beerManager) {
      get().beerManager?.removeBeerGraphic(brewery.id);
    }
    set({ myBreweries: get().myBreweries.filter(b => b.id !== brewery.id) }); 
  },
  setMapContainer: async (container) => {
    if (container) {
      // Create map manager if it doesn't exist
      if (!get().beerManager) {

        const manager = new BeerManager();
        manager.loadLayers();

        // Update state
        set({ beerManager: manager });
      }
      // Initialize map manager - creates the map view and mounts to DOM
      get().beerManager?.initialize(container);
    }
  },
  addBeerGraphic: async (brewery) => {
    if (brewery.latitude === null || brewery.longitude === null) return;
    const geometry = {
      type: 'point',
      longitude: brewery.longitude,
      latitude: brewery.latitude, 
    }
    get().beerManager?.addBeerGraphic(geometry, brewery.id);
  }, 
  clearAllGraphics: () => {
    get().beerManager?.clearAllGraphics();
  }
})); 

export default beerStore; 