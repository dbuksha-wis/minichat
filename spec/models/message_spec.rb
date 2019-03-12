require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:message) }

  it { should belong_to(:user) }
  it { should validate_presence_of(:text) }
end

