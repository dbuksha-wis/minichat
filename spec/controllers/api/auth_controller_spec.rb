RSpec.describe Api::AuthController do
  context 'show' do
    before(:each) { authenticated_header(request, payload) }
    before(:each) { get :show }

    let (:user) {create(:user)}

    context 'success' do
      let(:payload) { { user_id: user.id, exp: 1.hour.from_now.to_i } }

      it { expect(response).to have_http_status(:success) }
      it { expect(json[:data][:attributes]).to have_key(:username) }
    end

    context 'error' do
      let(:payload) { { user_id: user.id, exp: 1.hour.before.to_i} }

      it { expect(response).to have_http_status(401) }
      it { expect(json[:error]).to eql({ 'token' => 'Token is expired' }) }
    end
  end

  context 'create' do
    before(:each) { post :create, params: { username: user.username, password: user.password } }

    context 'success' do
      let(:user) { create(:user) }

      it { expect(response).to have_http_status(:success) }
      it { expect(json[:data][:attributes]).to have_key(:token) }
    end

    context 'error' do
      let(:user) { OpenStruct.new(username: 'username', password: 'password') }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
