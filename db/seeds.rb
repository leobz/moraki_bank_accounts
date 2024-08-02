# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ActiveRecord::Base.transaction do
  puts "Seeding data..."

  default_customer = Customer.find_or_create_by(first_name: "Super", last_name: "Tux")

  currencies = Currency.create!([
    { code: 'USD', country_code: 'US', symbol: '$', description: 'United States Dollar' },
    { code: 'EUR', country_code: 'EU', symbol: '€', description: 'Euro' },
    { code: 'JPY', country_code: 'JP', symbol: '¥', description: 'Japanese Yen' },
    { code: 'GBP', country_code: 'GB', symbol: '£', description: 'British Pound' },
    { code: 'AUD', country_code: 'AU', symbol: 'A$', description: 'Australian Dollar' },
    { code: 'CAD', country_code: 'CA', symbol: 'C$', description: 'Canadian Dollar' },
    { code: 'CHF', country_code: 'CH', symbol: 'Fr.', description: 'Swiss Franc' },
    { code: 'CNY', country_code: 'CN', symbol: '¥', description: 'Chinese Yuan' },
    { code: 'SEK', country_code: 'SE', symbol: 'kr', description: 'Swedish Krona' },
    { code: 'ARS', country_code: 'AR', symbol: '$', description: 'Argentine Peso' },
    { code: 'UYU', country_code: 'UY', symbol: '$', description: 'Uruguayan Peso' }
  ])

  accounts = [
    { name: "Primary Account USD", balance: 1000, currency_code: 'USD' },
    { name: "Savings Account EUR", balance: 5000, currency_code: 'EUR' },
    { name: "Investment Account UYU", balance: 10000, currency_code: 'UYU' },
    { name: "Business Account GBP", balance: 2000, currency_code: 'GBP' },
    { name: "Personal Account ARS", balance: 3000, currency_code: 'ARS' }
  ]

  accounts.each do |account_attrs|
    currency = currencies.find { |c| c.code == account_attrs[:currency_code] }
    Account.create!(
      name: account_attrs[:name],
      balance: account_attrs[:balance],
      status: 'active',
      currency: currency,
      customer: default_customer,
      account_number: SecureRandom.uuid
    )
  end

  puts "Seed data created."
end