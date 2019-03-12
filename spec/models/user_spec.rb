require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user) }

  it { should have_many(:messages) }
  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username).ignoring_case_sensitivity }
end
