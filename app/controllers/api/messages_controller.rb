module Api
  class MessagesController < BaseController
    include Mixins::ChannelName

    def index
      render json: MessageSerializer.new(Message.last(10), include: [:user])
    end

    def create
      msg = @current_user.messages.new(message_params)

      if msg.save
        ActionCable.server.broadcast(
          chat_channel( params['room']),
          msg.as_json(only: [:text, :created_at], methods: [:user])
        )

        head :ok
      else
        render json: { error: msg.error }, status: :unprocessable_entity
      end
    end

    private

    def message_params
      params.require(:message).permit(:text)
    end
  end
end
