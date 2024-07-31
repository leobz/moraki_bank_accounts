class Customer < ApplicationRecord
  has_many  :accounts
  # has_one   :default_account, :class_name => "Account"
end