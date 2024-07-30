FactoryBot.define do
  factory :account do
    customer        { create(:customer) }
    name            { "Primary Account"}
    balance         { 1000 }
    currency        { "USD" }
    account_status  { "active" }
    account_number  { SecureRandom.uuid }
  end
end