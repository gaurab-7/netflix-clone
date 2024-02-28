const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gaurabgh7:gEDYzvQXqaUotAsU@cluster0.yvlc3mf.mongodb.net/Netflix?retryWrites=true&w=majority').then(()=> {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`, e);
})