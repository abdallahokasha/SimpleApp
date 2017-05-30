Rails.application.routes.draw do
  resources :companies do
  	get :assign, on: :member
  	get :list_employees, on: :member
  end

  # resources :companies do
  #   get :list_employees on: :memeber
  # end
  
  resources :employees do
  	get :apply, on: :member
  end  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
