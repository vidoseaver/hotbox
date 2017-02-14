require "rails_helper"

RSpec.feature "When you visit root" do
  describe "You see a some text" do
    it "and realize the root_path works" do
      visit root_path

      expect(page).to have_content("Welcome to Hotbox")
    end
  end
end
