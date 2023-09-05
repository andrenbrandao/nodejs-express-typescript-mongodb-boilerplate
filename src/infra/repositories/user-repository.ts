import type User from '../../domain/user';
import UserModel from '../mongodb/user.mongoose';

class UserRepository {
  async create(user: User): Promise<User['id']> {
    const response = await UserModel.create(user.toJson());
    return response.id;
  }
}

export default UserRepository;
