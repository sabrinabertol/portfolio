class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :year
      t.string :title
      t.text :description
      t.text :technologies
      t.string :location

      t.timestamps
    end
  end
end
