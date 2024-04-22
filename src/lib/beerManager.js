import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer.js';
import Graphic from '@arcgis/core/Graphic.js';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol.js';
export class BeerManager {
  webmap = null;
  view = null;
  graphicsLayer = null;

  constructor() {
    this.webmap = new ArcGISMap({
      basemap: 'streets-vector',
    });


    this.view = new MapView({
      map: this.webmap,
      center: [37.4211, -77.5106],
      extent: {
        xmin: -77.6763,
        ymin: 37.2,
        xmax: -77.3449,
        ymax: 37.6422
      },
      ui: {
        components: [],
      },
    });
  }

  /**
   * Wrapper around addMany with some safety.
   */
  addLayers(layers) {
    if (this.webmap) {
      this.webmap.addMany(layers);
    }
  }


  /**
   * Loads the layers for the map.  This is called after the map is initialized
   * and the view is ready.
   * @param {function} onLayerViewReady - callback function to call when the layer view is ready
   * @param {function} onLayerViewUpdated - callback function to call when the layer view is updated
   */
  loadLayers() {
    if (!this.view) return;

    this.view.when(async () => {
      // Create layers
      this.graphicsLayer = new GraphicsLayer({
        id: 'beer-graphic',
        graphics: [],
        visible: true,
      });

      // Add layers to map
      this.addLayers([
        this.graphicsLayer
      ]);
    });
  }

  /**
   * Sets the container for the map view
   * @param {HTMLElement} container - the container element
   */
  initialize(container) {
    if (this.view && container) this.view.container = container;
  }

  /**
   * Register event view updated handler
   * @param {function} onViewUpdatedHandler
   */
  onViewUpdated(onViewUpdatedHandler) {
    if (!this.view) return;
    this.view.watch('updating', (val) => {
      if (!val) {
        if (onViewUpdatedHandler) onViewUpdatedHandler(this.coreLayerView);
      }
    });
  }

  /**
   * Register event click handler
   * @param {function} onClickHandler
   */
  onViewClick(onClickHandler) {
    if (!this.view) return;
    this.view.on('click', (event) => {
      if (!onClickHandler) return;

      this.view?.hitTest(event).then(async (response) => {
        const { graphic, layer } = response?.results?.[0] || {};
        onClickHandler(graphic, layer);
      });
    });
  }

  addBeerGraphic(geometry, id) {
    const pictureSymbol = new PictureMarkerSymbol({
      id: id,
      url: `${window.location.origin}/beer-mug.png`,
      width: '54px',
      height: '54px', 
      yoffset: 20,
    });
     const pointSymbol = new SimpleMarkerSymbol({
        color: [255, 0, 0], // Red color (RGB)
        size: 10,
        style: 'circle' // Other options: 'square', 'cross', 'diamond', 'triangle', 'x'
     });
    
    var graphic = new Graphic({
      attributes: { id: id },
      geometry: geometry,
      symbol: pictureSymbol 
    });

    this.graphicsLayer.add(graphic);
  }
  removeBeerGraphic(id) {
    const graphic = this.graphicsLayer.graphics.find(g => g.attributes.id === id);
    if (graphic) {
      this.graphicsLayer.remove(graphic);
    }
  }
  clearAllGraphics() {
    this.graphicsLayer?.removeAll();
  }
}
