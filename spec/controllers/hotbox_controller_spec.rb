require 'rails_helper'

RSpec.describe HotboxController, type: :controller do

  describe "GET #index" do
    it "returns https success" do
      get :index
      expect(response).to have_https_status(:success)
    end
  end

end
