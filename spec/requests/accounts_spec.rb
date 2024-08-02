require 'rails_helper'

RSpec.describe "Accounts", type: :request do
  let!(:customer) { create(:customer) }

  describe "#index", inertia: true do
    let!(:a1)  { create(:account, customer: customer, name: "Account 1") }
    let!(:a2)  { create(:account, customer: customer, name: "Account 2") }

    it "returns a list of accounts" do
      get accounts_url
      expect(response).to be_successful

      # check the component
      expect_inertia.to render_component 'Accounts/Index'

      # check inertia props
      account1, account2 = inertia.props[:accounts]

      expect(account1[:name]).to eq("Account 1")
      expect(account2[:name]).to eq("Account 2")
    end
  end

  describe "#show", inertia: true do
    let!(:account)  { create(:account, customer: customer) }

    it "returns an account" do
      get account_url(account)
      expect(response).to be_successful

      # check the component
      expect_inertia.to render_component 'Accounts/Show'

      # check inertia props
      account.reload

      expect(inertia.props[:account][:id]).to eq(account.id)
      expect(inertia.props[:account][:customer_id]).to eq(account.customer_id)
      expect(inertia.props[:account][:uuid]).to eq(account.uuid)
      expect(inertia.props[:account][:name]).to eq(account.name)
      expect(inertia.props[:account][:currency][:code]).to eq(account.currency.code)
      expect(inertia.props[:account][:status]).to eq(account.status)
    end
  end

  describe "#create" do
    let!(:account)            { create(:account, customer: customer) }
    let!(:valid_attributes)   {{customer_id: customer.id, name: "My new account", balance: 0, currency_id: account.currency.id, status: "active"}}

    it "creates a new account" do
      expect {
        post accounts_url, params: {account: valid_attributes.merge({is_default: true})}
      }.to change(Account, :count).by(1)

      # check the record
      expect(Account.last.name).to  eq("My new account")
      expect(Account.last.id).to    eq(customer.reload.default_account_id)

      # check redirection
      assert_redirected_to account_url(Account.last)
    end

    it "fails with invalid params", inertia: true do
      #***************************  Name already exists   ***************************
      invalid_params = valid_attributes.merge(name: account.name)

      expect {
        post accounts_url, params: {account:  invalid_params}
      }.not_to change(Account, :count)

      # check inertia errors
      assert_redirected_to new_account_url

      follow_redirect!
      expect(inertia.props[:errors]).to eq({name: ["has already been taken"]})


      #***************************  Negative balance   ***************************
      invalid_params = valid_attributes.merge(balance: -10)

      expect {
        post accounts_url, params: {account:  invalid_params}
      }.not_to change(Account, :count)

      # check inertia errors
      assert_redirected_to new_account_url
      follow_redirect!

      expect(inertia.props[:errors]).to eq({balance: ["must be greater than or equal to 0"]})
    end
  end

  describe "#update" do
    let!(:account)            { create(:account, customer: customer, name: "Old account") }
    let!(:valid_attributes)   { {customer_id: customer.id, name: "My new account", balance: 0, currency_id: account.currency.id, status: "active"} }

    it "updates an Account" do
      expect {
        put account_url(account), params: {account: valid_attributes}
      }.not_to change(Account, :count)

      # check the record
      expect(Account.last.name).to eq("My new account")

      # check redirection
      assert_redirected_to account_url(Account.last)
    end


    it "fails with invalid params", inertia: true do
      #***************************  Name is blank   ***************************
      invalid_attributes = valid_attributes.merge(name: "")
      put account_url(account), params: {account: invalid_attributes}

      # check the record
      expect(Account.last.name).to eq("Old account")

      # check inertia errors
      assert_redirected_to edit_account_url(account)

      follow_redirect!
      expect(inertia.props[:errors]).to eq({name: ["can't be blank"]})
    end

    it "updates customer default_account", inertia: true do
      new_account = create(:account, customer: customer)

      # validate customer default_account
      expect(customer.reload.default_account_id).not_to eq(new_account.id)

      # do request
      put account_url(new_account), params: {account: valid_attributes.merge(is_default: true)}

      # validate customer default_account
      expect(customer.reload.default_account_id).to eq(new_account.id)
    end
  end

  describe "DELETE #destroy" do
    let!(:account)  { create(:account, customer: customer) }

    it "destroys an Account" do
      expect { delete account_url(account) }.to change(Account, :count).by(-1)

      # check redirection
      assert_redirected_to accounts_url
    end
  end
end