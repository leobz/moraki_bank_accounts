class CreateCurrencies < ActiveRecord::Migration[7.0]
  def change
    create_table :currencies do |t|
      t.string :code, null: false, index: { unique: true }
      t.string :country_code, null: false, index: { unique: true }
      t.string :symbol, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_reference :accounts, :currency, null: false, foreign_key: true
  end
end
