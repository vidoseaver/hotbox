Rails.application.routes.draw do


  get 'hotbox/index'

  root to: "hotbox#index"




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
