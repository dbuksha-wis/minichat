class BaseSerializer
  include FastJsonapi::ObjectSerializer

  class << self
    def from_object(object)
      new(OpenStruct.new({ id: 0 }.merge(object)))
    end
  end
end
