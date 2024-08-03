class Account < ApplicationRecord
  belongs_to  :customer
  belongs_to  :currency

  attribute :account_number, :string, default: -> { SecureRandom.uuid }
  attribute :balance, :decimal, default: -> { 0.0 }
  enum status: { active: 0 }, _default: :active

  #****************************   Encryption   *******************************
  # Deterministic encryption to allow searches by account number, which will be a common use case.
  encrypts :account_number, deterministic: true

  # Non-deterministic encryption for increased security on balances, as we won't be using queries to search by balance.
  encrypts :balance, deterministic: false

  #****************************   Validations  *******************************
  before_validation :set_default_customer
  validates :name, :status, :currency, :balance, :account_number, presence: true
  validates :name, uniqueness: { scope: :customer_id }
  validates :account_number, uniqueness: true
  validates :balance, numericality: { greater_than_or_equal_to: 0 }


  def is_default?
    self.customer.default_account_id == self.id
  end

  private

  # Assign a hard-coded customer for demo purposes
  def set_default_customer
    self.customer = Customer.find(1) if Rails.env.development? && self.customer.nil?
  end
end