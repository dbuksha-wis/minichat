class ChatChannel < ApplicationCable::Channel
  def subscribed
    room_id = params[:room]
    stream_from chat_id(room_id) if room_id.present?
  end

  def send_message(params)
    room_id   = params['room']
    msg_text   = params['message']

    raise 'No message!' if msg_text.blank?

    msg = Message.new(text: msg_text, user: current_user)

    if msg.save
      ActionCable.server.broadcast(
        chat_id(room_id),
        msg.as_json(only: [:text, :created_at], methods: [:user])
      )
    else
      # TODO: broadcast to user about failure
    end
  end

  def unsubscribed
  end

  private

  def chat_id(room)
    "chat_#{room}_channel"
  end
end
