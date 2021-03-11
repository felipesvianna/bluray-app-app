require 'rails_helper'

RSpec.describe Filme, type: :model do
  let(:filme) { build(:filme) }
  
  it { should validate_length_of(:titulo).is_at_least(2) }
end
