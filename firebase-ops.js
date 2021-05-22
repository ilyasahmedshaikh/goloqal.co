// -------------------------- save - Add new record --------------------------

let data = {
  name: this.programForm.value.categoryName
}

this.firestore.collection("categories").doc().set(data)
.then(() => {
  this.programForm.reset();
})
.catch((error) => {
  alert("Error adding document: " + error);
});


// -------------------------- GET ALL --------------------------

this.firestore.collection(this.config.collections.categories_table).get().subscribe((res) => {
  res.docs.forEach((doc) => {
    this.data.push(doc.data());
  });
});

// -------------------------- GET ALL - mapped with doc Id --------------------------

this.firestore.collection(this.config.collections.categories_table).get().subscribe((res) => {
  res.docs.forEach((doc) => {
    this.data.push({
      id: doc.id,
      ...doc.data() as {}
    });
  });
});

// -------------------------- GET Single --------------------------

this.firestore.collection(collection).doc(id).get().subscribe(res => {
  console.log(res.data());
},
error => {
  alert(error);
})

// -------------------------- PUT --------------------------

this.firestore.collection(collection).doc(id).update(data)
.then(() => {
  console.log('updated successfully')
})
.catch((error) => {
  alert(error);
});

// -------------------------- DELETE --------------------------

this.api.delete(this.config.collections.categories_table, id)
.then(() => {
  console.log('deleted successfully')
})
.catch((error) => {
  alert(error);
});
