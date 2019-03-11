class ChatChannel < ApplicationCable::Channel
  def subscribed
    room_id = params[:room]

    stream_from "chat_#{room_id}_channel" if room_id.present?
  end

  def send_message(params)
    room_id   = params['room']
    msg_text   = params['message']

    raise 'No message!' if msg_text.blank?

    msg = Message.new(text: msg_text, user: current_user)

    if msg.save
      payload = {
        sender: msg.user,
        message: msg.text
      }

      ActionCable.server.broadcast("chat_#{room_id}_channel", payload)
      # ActionCable.server.broadcast("chat_#{room_id}_channel", msg.as_json(only: [:user, :text]))

    else
      ActionCable.server.broadcast(current_user, msg.errors)
      # TODO: broadcast to user about failure
    end
  end

  def unsubscribed
    room_id = params['room']

    # Any cleanup needed when channel is unsubscribed
  end
end
