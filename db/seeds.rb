# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

if Customer.exists?
  puts "Skipping seed data. Customer records already exist."
else
  puts "Seeding data..."

  default_customer = Customer.create(first_name: "John", last_name: "Doe")

  Account.create(
    customer: default_customer,
    name: "Primary Account",
    balance: 1000,
    currency: "USD",
    status: "active",
    account_number: SecureRandom.uuid,
  )

  puts "Seed data created."
end