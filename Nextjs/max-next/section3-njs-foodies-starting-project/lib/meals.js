import sql from "better-sqlite3";

const db = sql("meals.db");

// fetch meals from the database
// what async does is that it wraps the function into a promise
// even though this code will not return a promise
export async function getMeals () {

    // arbitrary delay simulation
    await new Promise((resolve)=> setTimeout(resolve, 2000));

    return db.prepare("SELECT * FROM meals").all();    
    // run() if inserting, all() if fetching, fetching all rows, or get() if fetching a single row
}