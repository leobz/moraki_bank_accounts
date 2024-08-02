FactoryBot.define do
  factory :account do
    transient do
      currency { Currency.find_or_create_by(code: "USD", country_code: "US", symbol: "$") }
    end

    customer        { create(:customer) }
    name            { "Primary Account"}
    balance         { 1000 }
    currency_id     { currency.id ? currency.id : create(:currency).id }
    status          { "active" }
    account_number  { SecureRandom.uuid }
  end
end