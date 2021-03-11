puts 'Criar 30 Filmes'
30.times do
  Filme.create!(
    titulo: Faker::Movie.title,
    anoLancamento: rand(1970..2020),
    sinopse: Faker::Lorem.sentence(word_count: 30, supplemental: true, random_words_to_add: 20),
    direcao: Faker::Name.name_with_middle,
    avaliacao: rand(1..5),
  )
end
puts 'Criando 30 Filmes [OK]'
