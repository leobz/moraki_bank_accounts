class Account < ApplicationRecord
  belongs_to  :customer
  belongs_to  :currency

  before_validation :set_default_customer

  validates :name, :status, :currency, :balance, presence: true
  validates :name, uniqueness: { scope: :customer_id }
  validates :balance, numericality: { greater_than_or_equal_to: 0 }

  # Add more statuses as needed
  enum status: { active: 0 }, _default: :active

  def is_default?
    self.customer.default_account_id == self.id
  end

  private

  # Hardcoded customer for demo purposes
  def set_default_customer
    self.customer = Customer.find(1) if Rails.env.development? && self.customer.nil?
  end

end