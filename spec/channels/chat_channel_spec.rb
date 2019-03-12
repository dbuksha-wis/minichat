RSpec.describe ChatChannel, type: :channel do
  before do
    # initialize connection with identifiers
    stub_connection user_id: user.id
  end

  let(:user) { create(:user) }
  let(:room) { 'public' }

  it 'no room' do
    subscribe
    expect(subscription).to be_rejected
  end

  it 'room is provided' do
    subscribe(room: room)

    expect(subscription).to be_confirmed
    expect(streams).to include("chat_#{room}_channel")
  end
end
