# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_08_01_222512) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.bigint "customer_id"
    t.string "name", null: false
    t.uuid "account_number", default: -> { "gen_random_uuid()" }, null: false
    t.uuid "uuid", default: -> { "gen_random_uuid()" }, null: false
    t.integer "status", default: 0, null: false
    t.decimal "balance", precision: 8, scale: 2, default: "0.0", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "currency_id", null: false
    t.index ["currency_id"], name: "index_accounts_on_currency_id"
    t.index ["customer_id"], name: "index_accounts_on_customer_id"
  end

  create_table "currencies", force: :cascade do |t|
    t.string "code", null: false
    t.string "country_code", null: false
    t.string "symbol", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["code"], name: "index_currencies_on_code", unique: true
    t.index ["country_code"], name: "index_currencies_on_country_code", unique: true
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "default_account_id"
    t.index ["default_account_id"], name: "index_customers_on_default_account_id"
  end

  add_foreign_key "accounts", "currencies"
  add_foreign_key "accounts", "customers"
end
