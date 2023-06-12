import {connectDB} from "./db/db.js"
import {post} from "./models/post.model.js"

const testDoAll = async() =>{
    await connectDB()
    const posts = await post.find().limit(3).populate("userId", "name")
    console.log(posts)
}

testDoAll()