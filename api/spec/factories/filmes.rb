FactoryBot.define do
  factory :filme do
    titulo { Faker::Movie.title }
    anoLancamento { rand(1970..2020) }
    direcao { Faker::Name.name_with_middle }
    sinopse { Faker::Lorem.sentence(word_count: 30, supplemental: true, random_words_to_add: 20) }
    avaliacao { rand(1..5) }
  end
end