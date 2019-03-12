module Api
  class AuthController < BaseController
    include Authenticatable

    skip_before_action :authenticate_user, only: [:create]

    def show
      render json: UserSerializer.new(@current_user)
    end

    def create
      command = AuthenticateUser.call(params[:username], params[:password])

      if command.success?
        user = command.result
        render_user_credentials(user)
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end
  end
end
