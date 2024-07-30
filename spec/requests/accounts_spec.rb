require 'rails_helper'

RSpec.describe "Accounts", type: :request do
  let!(:customer) { create(:customer) }
  let!(:a1)       { create(:account, customer: customer, name: "Account 1") }
  let!(:a2)       { create(:account, customer: customer, name: "Account 2") }
  
  describe "#index", inertia: true do
 
    it "returns a list of accounts" do
      get accounts_url

      # check the component
      expect_inertia.to render_component 'Accounts/Index'

      # check inertia props
      account1, account2 = inertia.props[:accounts]
      expect(account1.name).to eq("Account 1")
      expect(account2.name).to eq("Account 2")
    end
  end
end