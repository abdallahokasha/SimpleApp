require 'rails_helper'

RSpec.describe EmployeesController, type: :controller do
# list all employees
# /employees
  before(:all) do 
   @employee1 = Employee.create(name:"Ahmed", address:"Elharam", age:"25", Gender:"Male")
   @employee2 = Employee.create(name:"Ali", address:"Dokki_Giza", age:"29", Gender:"Male")
   @employee3 = Employee.create(name:"Mona", address:"Ocotber", age:"22", Gender:"Female")
   @employee4 = Employee.create(name:"Ibrahim", address:"Mokkattam", age:"43", Gender:"Male")

   @company1 = Company.create(name:"Vodafone", address:"Maadi")
   @company2 = Company.create(name:"IBM", address:"Smart_Village")
   @company3 = Company.create(name:"Oracle", address:"Giza")
   @company4 = Company.create(name:"Microsoft", address:"Alex")
  end 

  after(:all) do
   Employee.delete_all
   Company.delete_all
  end

   # employees
   describe "GET- list all employees" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "loads all of the posts into @employees" do
      get :index
      expect(assigns(:employees)).to match_array([@employee1, @employee2, @employee3, @employee4])
    end
  end

# list all companies 
# /employee/:id/list_companies
describe "GET- list all companies i have applied in" do
    it "responds successfully with an HTTP 200 status code" do
      #puts Employee.all.inspect
      get :list_companies, {params: {id: @employee2.id}}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "list all companies i have applied in, Company-1 in this case" do
      # we should assign company-1 to employee2 manually 
      @employee2.companies << @company1
      get :list_companies, {params: {id: @employee2.id}}
      expect(assigns(:companies)).to match_array([@company1])
    end

  end

# apply to a specific company
# /employees/:id/apply?company_id=
describe "GET- Employee can apply for a specific company" do
    it "responds successfully with an HTTP 200 status code" do
      get :apply, {params: {id: @employee2.id, company_id: @company1.id}}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "Show the company you recently applied in" do
      get :apply, {params: {id: @employee2.id, company_id: @company1.id}}
      expect(assigns(:companies)).to match_array([@company1])
    end
  end
end   