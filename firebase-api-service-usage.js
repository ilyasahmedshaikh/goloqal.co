// POST

createCategory() {
  let data = {
    name: this.programForm.value.categoryName
  }

  let request = this.api.post(this.config.collections.categories_table, data);

  request.then(() => {
    this.programForm.reset();
  })
  .catch((error) => {
    alert(error);
  });
}

// GET ALL

getCategories() {
  let data = this.api.getAll(this.config.collections.categories_table);
}


// GET Single
getCategory(id) {
  this.api.getSingle(this.config.collections.categories_table, id).subscribe(res => {
    console.log(res.data());
  },
  error => {
    alert(error);
  })
}

// update

updateCategory(id) {
  let data = {
    name: "My Place/Community"
  }

  let request = this.api.put(this.config.collections.categories_table, id, data);

  request.then(() => {
    console.log('updated successfully')
  })
  .catch((error) => {
    alert(error);
  });
}


// delete

deleteCategory(id) {
  let request = this.api.delete(this.config.collections.categories_table, id);

  request.then(() => {
    console.log('deleted successfully')
  })
  .catch((error) => {
    alert(error);
  });
}
