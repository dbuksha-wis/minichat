module Api
  class UsersController < ApplicationController
    include Authenticatable

    def create
      user = User.new(users_params)

      if user.save
        render_user_credentials(user)
      else
        render json: { error: user.errors }, status: :unprocessable_entity
      end
    end

    private

    def users_params
      params.require(:user).permit(:username, :password)
    end
  end
end
