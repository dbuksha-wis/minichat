class ChatChannel < ApplicationCable::Channel
  include Mixins::ChannelName

  def subscribed
    room_id = params[:room]
    reject unless room_id.present?

    stream_from chat_channel(room_id)
  end

  def unsubscribed
  end
end
