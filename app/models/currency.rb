class Currency < ActiveRecord::Base
  validates :code, :country_code, :symbol, :description, presence: true
  validates :code, :country_code, uniqueness: true

  # I'm using the 2-letter standard for country codes as specified by ISO 3166-1 alpha-2 (e.g., US, GB)
  # Reference: https://www.iban.com/country-codes
  validates_format_of :country_code, with: /\A[A-Z]{2}\z/, message: 'must be exactly 2 uppercase letters (ISO 3166-1 alpha-2). Example: US'

  # I'm using the 3-letter standard for currency codes as specified by ISO 4217 (e.g., USD, EUR)
  # Reference: https://www.iban.com/currency-codes
  validates_format_of :code, with: /\A[A-Z]{3}\z/, message: 'must be exactly 3 uppercase letters (ISO 4217). Example: USD'
end