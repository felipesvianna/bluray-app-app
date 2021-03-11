class CreateFilmes < ActiveRecord::Migration[6.1]
  def change
    create_table :filmes do |t|
      t.string :titulo
      t.string :anoLancamento
      t.string :direcao
      t.string :sinopse
      t.string :avaliacao

      t.timestamps
    end
  end
end
