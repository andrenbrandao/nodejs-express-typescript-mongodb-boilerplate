/* eslint-disable import/no-extraneous-dependencies */
import mongoose, { type ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { getConnection } from '../../infra/mongodb/connection';

jest.mock('../../infra/mongodb/connection');
const mockedGetConnection = getConnection as jest.MockedFunction<
  typeof getConnection
>;

let mongoServer: MongoMemoryServer;
const opts: ConnectOptions = {
  autoIndex: true,
  bufferCommands: false, // Disable mongoose buffering
};
mongoose.set('strictQuery', false);

const connect = async (): Promise<void> => {
  mongoServer = await MongoMemoryServer.create({
    instance: { dbName: 'mongodb-test' },
  });
  const mongoUri = mongoServer.getUri();
  try {
    await mongoose.connect(mongoUri, opts);

    mockedGetConnection.mockResolvedValue(mongoose.connection);
  } catch (err) {
    console.error(err);
  }
};

const disconnect = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

const clearDatabase = async (): Promise<void> => {
  const { collections } = mongoose.connection;

  const promises = Object.values(collections).map(
    async (collection) => await collection.deleteMany({}),
  );

  await Promise.all(promises);
};

export { connect, disconnect, clearDatabase };
