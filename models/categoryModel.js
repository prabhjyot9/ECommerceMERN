import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

<<<<<<< HEAD
export default mongoose.model("Category", categorySchema);
=======
export default mongoose.model("Category", categorySchema);
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
