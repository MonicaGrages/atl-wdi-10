# #RUBY SANDBOX

# #Always start a class name with a capital letter
# # require "pry"

# # class User

# #   def initialize(firstname, lastname)
# #     puts "I'm a new User named #{firstname} #{lastname}"
# #   end

# #   def set_name_to(some_string)
# #     @name = some_string
# #   end

# #   def get_name
# #     # Ruby has implicit returns. So saying @name here is the same as saying return @name. It returns the last line of code
# #     # @ denotes an instance variable - instance variables are only available within the method in which they are defined, not outside, unless we add attr_accessor
# #     return @name
# #   end

# #   def greet
# #     puts "Hi! My name is #{@name}!"
# #   end

# # end

# # binding.pry

# # puts "this won't execute until we leave pry"




# require "pry"

# class Group
#   attr_accessor :people

#   def initialize initial_people = []
#     @people = initial_people
#   end

#   def add_person person
#     @people.push person
#   end

#   def everyone_hello
#     @people.each do |person|
#       person.say_name
#     end
#   end

#   def count
#     @count = @people.length
#   end

#   def compare_ages person_1, person_2
#     if person_1.age > person_2.age
#       return person_1
#     end
#     return person_2
#   end


# end


# class Person
#   attr_accessor :name, :age
#   #Using class variables is not the best practice. What you want instead is to have a parent class
#   @@count = 0

#   def initialize (name:, age:)
#     @name = name
#     @age = age
#     @@count += 1
#   end

#   def say_name
#     puts "Hello, my name is #{@name}"
#   end

#   def self.count
#     @@count
#   end

#   def check_voting_age?
#     @age >= 18
#   end

# end

# binding.pry


require "pry"

class Person
  attr_accessor :name
  attr_reader :age
  @@people = []

  def initialize(initial_name, initial_age)
    @name = initial_name
    @age = initial_age
    @@people.push(self)
  end

  def say_name
    puts "Hi, my name is " + @name + "."
  end

  def say_age
    puts "I am #{@age} years old."
  end

  def self.get_people
    return @@people
  end
end



class LoudPerson < Person

  def say_name
    puts "HI, MY NAME IS #{@name.upcase}!"
  end

end



binding.pry









