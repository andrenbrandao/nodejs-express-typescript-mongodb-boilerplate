import { connect, disconnect, clearDatabase } from './mongodb/connection';

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await disconnect();
});
