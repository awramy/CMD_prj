class UserService {
  constructor() {
    this.userId = null;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}

export default new UserService();