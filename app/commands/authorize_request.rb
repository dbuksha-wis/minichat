class AuthorizeRequest
  prepend SimpleCommand

  attr_reader :headers

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  def user
    @user ||= User.find(decoded_token[:user_id])
    @user ||= errors.add(:token, 'Invalid token') && nil
  end

  def decoded_token
    @decoded_token ||= Auth.decode(auth_header)
  end

  def auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    else
      errors.add(:token, 'Token is not provided')
    end
    nil
  end
end
