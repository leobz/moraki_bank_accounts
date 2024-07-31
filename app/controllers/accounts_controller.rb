class AccountsController < ApplicationController
  before_action :set_account, only: %i[ show edit update destroy ]

  # TODO: Refactor actions with 'use_inertia_instance_props' method
  # More info: https://github.com/inertiajs/inertia-rails?tab=readme-ov-file#rails-component-and-instance-props

  # GET /accounts
  def index
    render inertia: 'Accounts/Index', props: {
      accounts: Account.all
    }
  end

  # GET /accounts/1
  def show
    render inertia: 'Accounts/Show', props: {
      account: @account
    }
  end

  # GET /accounts/new
  def new
    @account = Account.new
    render inertia: 'Accounts/New', props: {
      account: @account
    }
  end

  # GET /accounts/1/edit
  def edit
    render inertia: 'Accounts/Edit', props: {
      account: @account
    }
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)

    if @account.save
      Customer.update(default_account_id: @account.id) if is_default_account?

      redirect_to account_url(@account), notice: "Account was successfully created."
    else
      redirect_to new_account_url, inertia: { errors: @account.errors }
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      Customer.update(default_account_id: @account.id) if is_default_account?

      redirect_to account_url(@account), notice: "Account was successfully updated."
    else
      redirect_to edit_account_url, inertia: { errors: @account.errors }
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy

    redirect_to accounts_url, notice: "Account was successfully deleted."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:name, :balance, :currency, :status, :customer_id)
    end

    def is_default_account?
      params["account"]["is_default"] == "true"
    end
end