Rails.application.routes.draw do
  namespace :api do
    post 'sign_in', to: 'auth#create'
    post 'sign_up', to: 'users#create'
  end

  root to: 'spa#index'
  get '/*path', to: 'spa#index', format: false
end
