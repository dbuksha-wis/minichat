module Authenticatable
  extend ActiveSupport::Concern

  def render_user_credentials(user)
    token = Auth.encode(user_id: user.id, username: user.username)

    render json: CredentialsSerializer.from_object(token: token)
  end
end
