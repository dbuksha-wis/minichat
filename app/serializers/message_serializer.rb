class MessageSerializer < BaseSerializer
  attributes :text, :created_at

  belongs_to :user
end
