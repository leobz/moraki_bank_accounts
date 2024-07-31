class AddDefaultAccountToCustomers < ActiveRecord::Migration[7.0]
  def change
    add_reference :customers, :default_account, references: :accounts, index: true
  end
end
