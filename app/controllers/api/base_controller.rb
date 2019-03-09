module Api
  class  BaseController < ApplicationController
    before_action :authenticate_user

    private

    def authenticate_user
      command = AuthorizeRequest.call(request.headers)

      if command.success?
        @current_user = command.result
      else
        render json: { error: command.errors }, status: :unauthorized
      end

    rescue JWT::ExpiredSignature
      render json: { error: { token: 'Token is expired' } }, status: 401

    rescue JWT::DecodeError
      render json: { error: { token: 'Token is invalid' } }, status: 401
    end
  end
end
