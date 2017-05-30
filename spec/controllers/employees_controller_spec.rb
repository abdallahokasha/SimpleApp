require 'rails_helper'

RSpec.describe EmployeesController, type: :controller do
# list all employees
# /employees
   describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @employees" do
      employee1, employee2 = Employee.create!, Employee.create!
      get :index

      expect(assigns(:employees)).to match_array([employee1, employee2])
    end
  end

# list all companies 
# /employee/:id/list_companies
describe "GET #list_companies" do
    it "responds successfully with an HTTP 200 status code" do
      get :list_companies
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :list_companies
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @employees" do
      employee1, employee2 = Employee.create!, Employee.create!
      get :list_companies

      expect(assigns(:employees)).to match_array([employee1, employee2])
    end
  end
# apply to a specific company
# /employees/:id/apply?company_id=
describe "GET #apply" do
    it "responds successfully with an HTTP 200 status code" do
      get :apply
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :apply
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @employees" do
      employee1, employee2 = Employee.create!, Employee.create!
      get :apply

      expect(assigns(:employees)).to match_array([employee1, employee2])
    end
  end
end 