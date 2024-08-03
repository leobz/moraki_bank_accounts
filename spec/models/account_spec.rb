require 'rails_helper'

RSpec.describe Account, type: :model do
  let!(:customer) { create(:customer) }
  let!(:currency) { create(:currency) }
  let!(:valid_attributes) {{
    customer_id: customer.id,
    name: "Sample Account",
    balance: 100.12,
    currency_id: currency.id,
    status: "active",
    account_number: SecureRandom.uuid
  }}

  describe 'encryptions' do
    it 'encrypts and parse balance' do
      account = Account.create(valid_attributes.merge(balance: 10.1234))

      expect(account.encrypted_attribute?(:balance)).to eq(true)
      expect(account.balance).to be_a(BigDecimal)
      expect(account.balance).to eq(10.12)
    end
  end

  describe 'validations' do
    it 'validates balance' do
      instantiate_and_expect_error(:balance, nil, "can't be blank")
      instantiate_and_expect_error(:balance, 999999999999999999, "must be less than or equal to 1000000000")
      instantiate_and_expect_error(:balance, -1, "must be greater than or equal to 0")
    end

    it 'validates name' do
      instantiate_and_expect_error(:name, '', "can't be blank")

      existing_account = create(:account, valid_attributes)
      instantiate_and_expect_error(:name, existing_account.name, 'has already been taken')
    end
  
    it 'validates status' do
      instantiate_and_expect_error(:status, nil, "can't be blank")

      expect {
        Account.new(valid_attributes.merge(status: 'non_existent'))
      }.to raise_error(ArgumentError, "'non_existent' is not a valid status")
    end
  
    it 'validates currency' do
      instantiate_and_expect_error(:currency, nil, "can't be blank")
    end
  
    it 'validates account_number' do
      instantiate_and_expect_error(:account_number, '', "can't be blank")

      existing_account = create(:account, valid_attributes)
      instantiate_and_expect_error(:account_number, existing_account.account_number, 'has already been taken')
    end
  end

  #
  # Helper methods
  #

  # Helper method to instantiate an account with an invalid attribute and expect an error message
  def instantiate_and_expect_error(attribute, value, message)
    account = Account.new(valid_attributes.merge(attribute.to_sym => value))

    expect(account).not_to be_valid
    expect(account.errors[attribute.to_sym]).to include(message)
  end
end