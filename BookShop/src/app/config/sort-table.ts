
// It's used for sorting in catalog page;
// The props here are values from option elements in select element ( catalog template );
// In catalog component they are matched and send to the angularfire SDK as sort property where they are applied; 
export const SORT_TABLE = {
    fromAtoZ: {sortByParam: 'title', sortOrder: 'asc'},
    highestPrice: {sortByParam: 'price', sortOrder: 'desc'},
    lowestPrice: {sortByParam: 'price', sortOrder: 'asc'},
    discount: {sortByParam: 'discount', sortOrder: 'desc'},
  }