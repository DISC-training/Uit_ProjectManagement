const express = require('express');
const app = express();
const port = 5000;
app.get('/api',(req,res)=>{
    res.json(
        [
            {name:'Tony Stark',char:'Iron Man'},
        ]
    )
});
app.get('*', (req, res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
