Rails.application.routes.draw do
  root to: 'spa#index'

  namespace :api do
    post 'sign_in', to: 'auth#create'
    post 'sign_up', to: 'users#create'
  end
end
