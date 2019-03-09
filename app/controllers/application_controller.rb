class ApplicationController < ActionController::Base
  # turn off ActionController::InvalidAuthenticityToken
  skip_before_action :verify_authenticity_token
end
