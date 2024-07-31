FactoryBot.define do
  factory :account do
    customer        { create(:customer) }
    name            { "Primary Account"}
    balance         { 1000 }
    currency        { "USD" }
    status  { "active" }
    account_number  { SecureRandom.uuid }
  end
end