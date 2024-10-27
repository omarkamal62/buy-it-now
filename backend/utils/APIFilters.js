class APIFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removedFields = ["keyword", "page"];

    removedFields.forEach((el) => {
      delete queryCopy[el];
    });

    let output = {};

    for (let key in queryCopy) {
      // Handle custom minPrice and maxPrice filters for price range
      if (key === "minPrice") {
        if (!output.price) output.price = {};
        output.price.$gte = Number(queryCopy[key]); // Apply the minimum price as $gte
      } else if (key === "maxPrice") {
        if (!output.price) output.price = {};
        output.price.$lte = Number(queryCopy[key]); // Apply the maximum price as $lte
      } else {
        // Directly add other fields without transformation
        output[key] = queryCopy[key];
      }
    }

    this.query = this.query.find(output);
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFilters;
