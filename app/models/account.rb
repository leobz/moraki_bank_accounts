class Account < ApplicationRecord
  belongs_to :customer

  before_validation :set_default_customer

  validates :name, :status, :currency, :balance, presence: true
  validates :name, uniqueness: { scope: :customer_id }
  validates :balance, numericality: { greater_than_or_equal_to: 0 }

  private

  # Hardcoded customer for demo purposes
  def set_default_customer
    self.customer = Customer.find(1) if self.customer.blank?
  end
end