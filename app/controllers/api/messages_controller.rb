module Api
  class MessagesController < BaseController
    def index
      render json: MessageSerializer.new(Message.last(10), include: [:user])
    end

    def create

    end
  end
end
