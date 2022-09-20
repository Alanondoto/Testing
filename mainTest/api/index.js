import express from "express";
const app = express();
import cors from "cors";
import {Users} from './users.js'; 

app.use(cors());

app.get("/", (req, res) => { 
    const q = req.query.q;

    const keys = ['username', 'action', 'action_createad_at']

    const search = (data) => {
        return data.filter(
        (item) => 
            keys.some(key => item[key].toLowerCase().includes(q))
        )
    }

    res.json(search(Users)); 
});

app.listen(5500, () => console.log("API is working"));