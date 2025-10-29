// // 2. Define a Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password:{type: String, required: true},
  age: Number,
});

// // 3. Create a Model
const User = mongoose.model('User', userSchema);

// // 4. Perform CRUD operations
async function runMongooseExample() {
  try {
    // Create a new user
    const newUser = await User.create({ name: 'RENATO ALVES SOARES', email: 'renato@example.com', age: 54 });
    console.log('New user created:', newUser);

    // Find all users
    const allUsers = await User.find({});
    console.log('All users:', allUsers);

//     // Find a user by email
    const foundUser = await User.findOne({ email: 'renato@example.com' });
    console.log('Found user:', foundUser);

//     // Update a user
    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      { age: 31 },
      { new: true } // Return the updated document
    );
    console.log('Updated user:', updatedUser);

//     // Delete a user
    await User.findByIdAndDelete(newUser._id);
    console.log('User deleted.');
  } catch (error) {
    console.error('Mongoose error:', error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}

runMongooseExample();

module.exports = mongoose;