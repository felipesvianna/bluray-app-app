module Api
    module V1
      class FilmesController < ApplicationController
        before_action :set_filme, only: %i[show update destroy]
        
        def index
          @filmes = Filme.order(:titulo)
          render json: @filmes
        end
        
        def show
          render json: @filme
        end      
        
        def create
          @filme = Filme.new(filme_params)        
          
          if @filme.save
            render json: @filme, status: :created
          else
            render json: @filme.errors, status: :unprocessable_entity
          end
        end
        
        def update
          if @filme.update(filme_params)
            render json: @filme
          else
            render json: @filme.errors, status: :unprocessable_entity
          end
        end

        def search
            @parameter = params[:search].downcase
            render json: Filme.all.where("lower(titulo) LIKE :search COLLATE NOCASE", search: "%#{@parameter}%")
        end
        
        def destroy
            @filme.destroy
        end      
        
        private def set_filme
            @filme = Filme.find(params[:id])
        end      
        
        def filme_params
            params.require(:filme).permit(:titulo, :anoLancamento, :direcao, :sinopse, :avaliacao)
        end
      end
    end
  end