const expect = require ('expect');
const {Users} = require('./users');

describe('Users', () => {
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Test'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'Test2'
    },
    {
      id: '3',
      name: 'Julie',
      room: 'Test'
    }]
  });
  
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Vadim',
      room: 'Test'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
  
  it('should remove a user', () => {
    var userList = users.removeUser('1');
    
    expect(userList.id).toBe('1');
    expect(users.users.length).toBe(2);
  });
  
  it('should not remove a user', () => {
    var userList = users.removeUser('99');

    expect(userList).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    
    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });
  
  it('should return names for test course', () => {
    var userList = users.getUserList('Test');
    
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for test2 course', () => {
    var userList = users.getUserList('Test2');

    expect(userList).toEqual(['Jen']);
  });
  
});