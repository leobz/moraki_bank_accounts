FactoryBot.define do
  factory :account do
    customer        { create(:customer) }
    name            { "Primary Account"}
    balance         { 1000 }
    currency        { Currency.find_or_create_by(code: "USD", country_code: "US", symbol: "$") }
    status          { "active" }
    account_number  { SecureRandom.uuid }
  end
end