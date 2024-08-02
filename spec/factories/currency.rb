FactoryBot.define do
  factory :currency do
    code          { "USD" }
    country_code  { "US" }
    symbol        { "$" }
    description   { "United States Dollar" }
  end
end