require 'rails_helper'

RSpec.describe CompaniesController, type: :controller do
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
# list all companies
# /companies
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "Returns all created companies" do
      get :index
      expect(assigns(:companies)).to match_array([@company1, @company2, @company3, @company4])
    end
  end
# list employees 
# companies/list_employees 
  describe "GET #list_employees" do
    it "responds successfully with an HTTP 200 status code" do
      get :list_employees, {params: {id: @company2.id}}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "List all employees applied to a specific company" do
      # employee-1 applied for company-2 
      @company2.employees << @employee1
      get :list_employees, {params: {id: @company2.id}}
      expect(assigns(:employees)).to match_array([@employee1])
    end
  end
# assign 
# companies/:id/assign?employee_id=
  describe "GET #assign" do
    it "responds successfully with an HTTP 200 status code" do
      get :assign, {params: {id: @employee2.id, company_id: @company1.id}}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "assigne employee1 to company2 and test" do
      get :assign, {params: {id: @company2.id, employee_id: @employee1.id}}
      expect(assigns(:employees)).to match_array([@employee1])
    end
  end
end