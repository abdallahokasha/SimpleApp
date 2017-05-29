class CreateCompaniesEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :companies_employees, id: false do |t|
      t.references :employee, index:true, foreign_key: true
      t.references :company, index:true, foreign_key: true
    end
  end
end
