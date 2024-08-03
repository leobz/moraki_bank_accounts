class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')

    create_table :accounts do |t|
      t.belongs_to :customer, foreign_key: true

      t.string    :name, null: false
      t.string    :account_number, null: false, index: { unique: true }
      t.string    :balance, null: false
      t.integer   :status, null: false, default: 0

      t.timestamps
    end
  end
end
