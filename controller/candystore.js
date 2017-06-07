/*  **********  private scope   ***********/
let store = [
  { id:1, name: 'Chewing Gum', color: 'Red' },
  { id:2, name: 'Pez',         color: 'Green' },
  { id:3, name: 'Marshmallow', color: 'Pink' },
  { id:4, name: 'Candy Stick', color: 'Blue' }
];

/*  **********  public scope   ***********/
//  Jens: exports mirrors 'this' function/var scope in js. e.g.
//  this.listCandy = ()=>{}
exports.list = () => {
  return store;
};

/*
 *  create candy (Crud)
 */
exports.create = (candy) => {
  store.push(candy);
  return candy;
};

 /*
  *  get candy (Crud)
  */
exports.get = (candyId) => {
  return store.find((elem) => {
    return elem.id === parseInt(candyId, 0);
  });
};

  /*
   *  update candy (Crud)
   */
exports.update = (candy) => {
  const itm = exports.get(candy.id);
  if (itm !== null) {
    store[store.indexOf(itm)] = candy;
    return candy;
  }
  return false;
};

/*
*  delete candy (Crud)
*/
exports.delete = (candyId) => {
  const cid = parseInt(candyId, 0);
  let indxToDel = -1;

  store.forEach((elem, indx) => {
    if (elem.id === cid) {
      indxToDel = indx;
    }
  });
  if (indxToDel !== -1) {
    store.splice(indxToDel, 1);
    return true;
  }
  return false;
};
