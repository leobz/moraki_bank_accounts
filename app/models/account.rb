class Account < ApplicationRecord
  belongs_to :customer

  before_validation :set_default_customer

  private

  def set_default_customer
    self.customer = Customer.find(1) if self.customer.blank?
  end
end