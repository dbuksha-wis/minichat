module Mixins
  module ChannelName
    def chat_channel(room)
      "chat_#{room}_channel"
    end
  end
end
