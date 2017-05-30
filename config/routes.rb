Rails.application.routes.draw do
  resources :companies do
    #defaults: {format: :json}
  	get :assign, on: :member
  	get :list_employees, on: :member
    get :index, on: :collection
  end

  # resources :companies do
  #   get :list_employees on: :memeber
  # end
  
  resources :employees do
  	get :apply, on: :member
    get :list_companies, on: :member
    get :index, on: :collection
  end  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
