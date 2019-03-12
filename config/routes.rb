Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  namespace :api do
    post 'sign_in', to: 'auth#create'
    post 'sign_up', to: 'users#create'
    get 'current_user', to: 'auth#show'

    resources :messages, only: [:index, :create]
  end

  root to: 'spa#index'
  get '/*path', to: 'spa#index', format: false
end
