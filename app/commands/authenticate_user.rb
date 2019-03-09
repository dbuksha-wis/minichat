class AuthenticateUser
  prepend SimpleCommand

  attr_accessor :username, :password

  def initialize(username, password)
    @username = username
    @password = password
  end

  def call
    user = User.find_by_username(username)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'Invalid username or password'
  end
end
