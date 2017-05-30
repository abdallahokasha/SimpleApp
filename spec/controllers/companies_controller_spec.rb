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

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @posts" do
      post1, post2 = Post.create!, Post.create!
      get :index

      expect(assigns(:posts)).to match_array([post1, post2])
    end
  end
# list employees 
# companies/list_employees 
  describe "GET #list_employees" do
    it "responds successfully with an HTTP 200 status code" do
      get :list_employees
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :list_employees
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @posts" do
      post1, post2 = Post.create!, Post.create!
      get :list_employees

      expect(assigns(:posts)).to match_array([post1, post2])
    end
  end
# assign 
# companies/:id/assign?employee_id=
  describe "GET #assign" do
    it "responds successfully with an HTTP 200 status code" do
      get :assign
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :assign
      expect(response).to render_template("index")
    end

    it "loads all of the posts into @posts" do
      post1, post2 = Post.create!, Post.create!
      get :assign

      expect(assigns(:posts)).to match_array([post1, post2])
    end
  end
end