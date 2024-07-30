class AccountsController < ApplicationController
  before_action :set_account, only: %i[ show update destroy ]

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
  end

  # GET /accounts/1/edit
  def edit
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)

    respond_to do |format|
      if @account.save
        format.html { redirect_to account_url(@account), notice: successful_message(:account, :created) }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accounts/1
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.html { redirect_to account_url(@account), notice: successful_message(:account, :updated) }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy

    respond_to do |format|
      format.html { redirect_to accounts_url, notice: successful_message(:account, :deleted) }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:name)
    end
end