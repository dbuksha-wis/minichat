module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private

    def find_verified_user
      command = AuthorizeRequest.call(request.query_parameters['accessToken'])
      command.success? ? command.result : reject_unauthorized_connection
    end
  end
end
