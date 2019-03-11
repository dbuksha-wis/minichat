class Auth
  ALGORITHM = 'HS256'.freeze

  class << self
    def encode(payload)
      # set token expired time
      payload[:exp] = 22.hours.from_now.to_i

      JWT.encode payload, jwt_secret, ALGORITHM
    end

    def decode(token)
      payload = JWT.decode(token, jwt_secret, true, { algorithm: ALGORITHM }).first
      HashWithIndifferentAccess.new  payload
    end

    private

    def jwt_secret
      Rails.application.credentials.jwt[:token]
    end
  end
end
