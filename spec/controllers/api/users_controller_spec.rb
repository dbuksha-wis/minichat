RSpec.describe Api::UsersController do
  before(:each) { post :create, params: user_params }

  context 'authorize success' do
    let(:user_params) { { user: { username: 'username', password: 'password' } } }

    it { expect(response).to have_http_status(:success) }
    it { expect(json[:data][:attributes]).to have_key(:token) }
  end

  context 'authorize error' do
    let(:user) { create(:user) }
    let(:user_params) { { user: { username: user.username, password: 'password' } } }

    it { expect(response).to have_http_status(:unprocessable_entity) }
  end
end
