class ProjectsController < ApplicationController
  def index
    @projects = Project.all

    #@project_1 = Project.find(1)
    #@project_2 = Project.find(2)
  end
end
