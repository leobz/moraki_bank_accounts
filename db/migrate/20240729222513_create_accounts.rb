class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')

    create_table :accounts do |t|
      t.belongs_to :customer, foreign_key: true

      t.string  :name, null: false
      t.uuid    :account_number, :uuid, null: false, default: 'gen_random_uuid()'
      t.string  :account_status, null: false, default: 'active'
      t.string  :currency, null: false, default: 'USD'
      t.decimal :balance, null: false, precision: 8, scale: 2, default: 0.0

      t.timestamps
    end
  end
end
