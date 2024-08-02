require 'rails_helper'

RSpec.describe Currency, type: :model do
  let!(:valid_attributes) do
    {
      country_code: 'US',
      code: 'USD',
      symbol: '$'
    }
  end

  describe 'validations' do
    it 'validates presence of attributes' do
      currency = Currency.new(valid_attributes.merge(country_code: nil, code: nil, symbol: nil))

      expect(currency).not_to be_valid
      expect(currency.errors[:country_code]).to include("can't be blank")
      expect(currency.errors[:code]).to include("can't be blank")
      expect(currency.errors[:symbol]).to include("can't be blank")
    end

    it 'validates the uniqueness of attributes' do
      _existing_currency = Currency.create(valid_attributes)
      new_currency = Currency.create(valid_attributes)

      expect(new_currency).not_to be_valid
      expect(new_currency.errors[:code]).to include("has already been taken")
      expect(new_currency.errors[:country_code]).to include("has already been taken")
    end

    it 'validates correct format' do
      currency = Currency.create(valid_attributes.merge(country_code: 'USA', code: 'usd'))

      expect(currency).not_to be_valid
      expect(currency.errors[:code]).to include("must be exactly 3 uppercase letters (ISO 4217). Example: USD")
      expect(currency.errors[:country_code]).to include("must be exactly 2 uppercase letters (ISO 3166-1 alpha-2). Example: US")
    end
  end
end