class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  sort(breweries) {
    return this.strategy.sort(breweries);
  }
}

const alphabeticalStrategy = {
  name: 'Alphabetical Strategy',
  sort(breweries) {
    return breweries.sort((a, b) => a.name.localeCompare(b.name));
  }
};

const typeStrategy = {
  name: 'Type Strategy',
  sort(breweries) {
    return breweries.sort((a, b) => a.brewery_type.localeCompare(b.brewery_type));
  }
};

export { Context, alphabeticalStrategy, typeStrategy };