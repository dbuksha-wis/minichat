FactoryBot.define do
  sequence :user_username do |n|
    "user_#{n}"
  end

  factory :user do
    username { generate(:user_username) }
    password { Faker::Internet.password }
  end
end
