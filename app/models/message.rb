# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint(8)
#
# Indexes
#
#  index_messages_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

class Message < ApplicationRecord
  belongs_to :user

  validates :text, presence: true
end
