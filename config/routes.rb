Rails.application.routes.draw do
  get 'pages/about'
  get 'pages/contact'
  get 'pages/bye'
  resources :projects, only: [:index]
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
