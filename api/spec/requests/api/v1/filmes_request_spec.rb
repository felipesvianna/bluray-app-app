require 'rails_helper'

RSpec.describe 'Filme', type: :request do
    let(:params) do
      {
        filme: {
            titulo: Faker::Movie.title,
            anoLancamento: rand(1970..2020),
            sinopse: Faker::Lorem.sentence(word_count: 30, supplemental: true, random_words_to_add: 20),
            direcao: Faker::Name.name_with_middle,
            avaliacao: rand(1..5)
        }
      }
    end 
    
    let(:filme) { create(:filme) }
    
    describe 'GET /filmes' do

      before { get api_v1_filmes_path }    
      
      it 'testa se request retorna status 200' do
        expect(response).to have_http_status(200)
      end

    end 
    
    describe 'GET /filmes/:id' do

        context 'caso filme seja encontrado' do
            before { get api_v1_filme_path(filme.id) }
            
            it 'testa se request retorna status 200' do
                expect(response).to have_http_status(200)
            end
            
            it 'testa se os dados estao no formato correto' do
                response_body = JSON.parse(response.body)
                expect(response_body.fetch('titulo')).to be_kind_of(String)
                expect(response_body.fetch('anoLancamento')).to be_kind_of(String)
                expect(response_body.fetch('direcao')).to be_kind_of(String)
                expect(response_body.fetch('sinopse')).to be_kind_of(String)
                expect(response_body.fetch('avaliacao')).to be_kind_of(String)
            end
        end   
      
        context 'caso filme seja encontrado' do
            it 'testa se retorna RecordNotFound quando nao encontrado' do
                expect { get api_v1_filme_path(0) }.to raise_error(ActiveRecord::RecordNotFound)
            end
        end
    end 
    
    describe 'POST /filmes' do

      let(:created_filme) { Filme.last }
      
      context 'quando o campo nome e valido' do
        let(:json) { JSON.parse(response.body, symbolize_names: true) }

        before { post api_v1_filmes_path, params: params }
        
        it 'testa se retorna http status 201 se o registro de filme foi criado' do
          expect(response).to have_http_status(201)
        end      
        
        it 'testa se o registro de filme foi criado' do
          expect(created_filme.titulo).to eq(json.dig(:titulo))
        end
      end   
      
      context 'quando o campo nome e invalido' do

        it 'testa se retorna codigo 422 com titulo invalido' do
          post api_v1_filmes_path, params: { filme: { titulo: 't' } }
          expect(response).to have_http_status(422)
        end
        
        it 'testa se registro de filme nao foi criado' do
          expect { created_filme.titulo }.to raise_error(NoMethodError)
        end

      end
    end 
    
    describe 'PUT /filmes/:id' do
      context 'quando um filme existe' do        
        it 'testa se retorna http status 200 ao inserir filme com nome valido' do
          put api_v1_filme_path(filme.id), params: { filme: { titulo: 'titulo_valido' } }
          expect(response).to have_http_status(200)
        end   
        
        it 'testa se retorna http status 422 ao inserir filme com nome invalido' do
          put api_v1_filme_path(filme.id), params: { filme: { titulo: 't' } }
          expect(response).to have_http_status(422)
        end      
      end    
      
      context 'quando um filme nao e encontrado' do
        it 'testa se retorna RecordNotFound quando nao encontrado' do
          expect { put api_v1_filme_path(Filme.find(0)), params: params }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end
    end

    describe 'GET search filme' do
      context 'quando um encotra um filme que existe' do
        it 'testa se retorna http status 200 ao buscar um filme' do
          get api_v1_search_filmes_path('le')
          expect(response).to have_http_status(200)
        end
      end
    end
    
    describe 'DELETE' do
      context 'quando um filme existe' do

        it 'testa se retorna http status 200 ao remover um filme' do
          delete api_v1_filme_path(filme.id)
          expect(response).to have_http_status(204)
         end
      end    
      
      context 'quando um filme nao existe' do
        it 'testa se retorna RecordNotFound quando nao encontrado' do
          expect { delete api_v1_filme_path(Filme.find(0)) }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end
    end
  end
