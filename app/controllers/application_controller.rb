class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  respond_to :html, :json
  protect_from_forgery with: :exception, unless: -> { request.format.json? }
  before_action :authenticate_user!
end
