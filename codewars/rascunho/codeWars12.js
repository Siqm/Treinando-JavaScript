function filter_list(l) {
    return l.filter(filtering);
  }
  
  function filtering(value) {
      return Number.isInteger(value);
  }