require 'rails_helper'

RSpec.describe "Accounts", type: :request do
  let!(:customer)         { create(:customer) }
  let!(:a1)               { create(:account, customer: customer, name: "Account 1") }
  let!(:a2)               { create(:account, customer: customer, name: "Account 2") }
  let(:valid_attributes)  {{customer_id: customer.id, name: "My new account", balance: 0, currency: "USD", status: "active"}}

  describe "#index", inertia: true do
    it "returns a list of accounts" do
      get accounts_url
      expect(response).to be_successful

      # check the component
      expect_inertia.to render_component 'Accounts/Index'

      # check inertia props
      account1, account2 = inertia.props[:accounts]
      expect(account1.name).to eq("Account 1")
      expect(account2.name).to eq("Account 2")
    end
  end

  describe "#show", inertia: true do
    it "returns a account" do
      get account_url(a1)
      expect(response).to be_successful

      # check the component
      expect_inertia.to render_component 'Accounts/Show'

      # check inertia props
      expect(inertia.props[:account]).to eq(a1)
    end
  end

  describe "#create" do
    it "creates a new account" do
      expect {
        post accounts_url, params: {account: valid_attributes}
      }.to change(Account, :count).by(1)

      # check the record
      expect(Account.last.name).to  eq("My new account")
      
      # check redirection
      assert_redirected_to account_url(Account.last)
    end

    it "fails with invalid params" do
      # TODO: implement this
     end
  end

  describe "PUT #update" do
    it "updates a Account" do
      account = create(:account, name: "Old account")
      put account_url(account), params: {account: valid_attributes}

      # check the record
      expect(Account.last.name).to eq("My new account")

      # check redirection
      assert_redirected_to account_url(Account.last)
    end
  end

  describe "DELETE #destroy" do
    it "destroys a Account" do
      account = create(:account)
      expect { delete account_url(account) }.to change(Account, :count).by(-1)

      # check redirection
      assert_redirected_to accounts_url
    end
  end
end