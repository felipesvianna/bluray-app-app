class Filme < ApplicationRecord
    validates_length_of :titulo, minimum: 2
end
