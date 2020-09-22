import mongoose from 'mongoose';

const connect = async (callback: () => void): Promise<void> => {
  const mongoUrl = process.env.MONGO_URL || `mongodb://127.0.0.1:27017/mern`;

  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);

  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  callback();
};

export default connect;
