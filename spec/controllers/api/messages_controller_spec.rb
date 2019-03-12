RSpec.describe Api::MessagesController do
  before(:each) { authenticated_header(request, { user_id: user.id }) }

  let(:user) { create(:user) }
  let(:message_params) { { message: { text: 'text' }, room: 'public' } }

  context 'rest' do
    before(:each) { post :create, params: message_params }

    context 'success' do
      it { expect(response).to have_http_status(:success) }
    end

    context 'error' do
      let(:message_params) { { message: { text: 'text' } } }

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  context 'action cable' do
    it 'send message' do
      expect { post :create, params: message_params }.to have_broadcasted_to( "chat_#{message_params[:room]}_channel")
    end
  end
end
