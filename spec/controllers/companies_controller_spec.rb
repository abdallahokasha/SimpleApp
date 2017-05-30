require 'rails_helper'

RSpec.describe CompaniesController, type: :controller do
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