const mongoose = require('mongoose');
const validateMongodbID =(id => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error('this id is not valid or not Found');
});

module.exports = {validateMongodbID};