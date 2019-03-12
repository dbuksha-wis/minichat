module Api
  class MessagesController < BaseController
    include Mixins::ChannelName

    before_action :set_room, only: [:create]

    def index
      render json: MessageSerializer.new(Message.last(10), include: [:user])
    end

    def create
      msg = @current_user.messages.new(message_params)

      if msg.save
        ActionCable.server.broadcast(
          chat_channel(@room),
          MessageSerializer.new(msg, include: [:user])
        )

        head :ok
      else
        render json: { error: msg.errors }, status: :unprocessable_entity
      end

    end

    private

    def message_params
      params.require(:message).permit(:text)
    end

    def set_room
      @room = params['room']
      return if @room.present?

      render json: { error: { room: 'Room does not exist' } }, status: :unprocessable_entity
    end
  end
end
