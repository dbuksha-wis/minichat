class ChatChannel < ApplicationCable::Channel
  include Mixins::ChannelName

  def subscribed
    room_id = params[:room]
    stream_from chat_channel(room_id) if room_id.present?
  end

  def unsubscribed
  end

end
