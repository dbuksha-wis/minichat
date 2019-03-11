class AuthorizeRequest
  prepend SimpleCommand

  attr_reader :payload

  def initialize(payload = {})
    @payload = payload
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
    return payload if payload.is_a?(String)

    if payload['Authorization'].present?
      return payload['Authorization'].split(' ').last
    else
      errors.add(:token, 'Token is not provided')
    end
    nil
  end
end
