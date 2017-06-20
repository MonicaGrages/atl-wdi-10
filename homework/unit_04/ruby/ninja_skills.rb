#CHALLENGE 1
# a = true
# b = false
# # puts a == b
# puts a != b

#CHALLENGE 2
# some_variable = nil
# puts some_variable
# puts "#{some_variable} nil was here"
# print some_variable
# puts some_variable.class

#CHALLENGE 3
# Fixnum is deprecated
# d = Fixnum
# puts d
# e = Integer
# puts e
# f = 5
# puts 4.class
# g = 5.0
# puts g.class
# f = g
# puts f

#CHALLENGE 4
# christine = "Hi, I'm Christine"
# likes_to = "long walks on the beach, kinda"
# puts "#{christine} and I like #{likes_to}"
#
# g = "2"
# g_to_number = 2
# puts g
# puts g_to_number
# puts g_to_number + g
# puts g + g_to_number
# puts g_to_number + g.to_i

#CHALLENGE 5
# puts "Enter a number"
# number_user_typed = gets.chomp
# puts number_user_typed.to_i * 2
#
# puts "What is your name?"
# name_user_typed = gets.chomp
# puts "What do you like to do for fun?"
# activity_user_typed = gets.chomp
# puts "#{name_user_typed} likes to #{activity_user_typed}"

#CHALLENGE 6
# my_first_array = []
# my_first_array = ["hello", "hi", "what's up?", "hey", "another string", 4, 9, 7, 0]
# puts my_first_array.last
# puts my_first_array.first
# my_first_array[1] = "Joe"
# my_first_array[2] = 3
# puts my_first_array.to_s
# my_first_array.push(true)
# puts my_first_array[3].class

#CHALLENGE 7
# my_favorite_animals = {
#   "Edgar": "Donkey",
#   "Fisher": "Dog",
#   "Arthur": "Cat",
#   "Captain": "Bird",
#   "Georgie": "Three legged dog"
# }
# puts my_favorite_animals
# my_favorite_animals[:Edgar] = "Bear"
# puts my_favorite_animals
# favorite_movie = {}
# favorite_movie[:movie] = "Forgetting Sarah Marshall"
# puts favorite_movie

#CHALLENGE 8
# first_range = 1..10
# first_range.to_a
# puts first_range
# puts first_range.to_a
# second_range = 1...1000
# second_range = second_range.to_a
# first_range.each do |num|
#   num = "some string"
#   puts num
# end
# first_range.to_a.each do |num|
#   num = "other string"
#   puts num
# end
# x = 0
# while x < 50
#   puts second_range[x]
#   x += 1
# end
# new_array = []
# I couldn't figure out how to do this next part with just .each so I used some info from this stack overflow question
# https://stackoverflow.com/questions/4689186/how-do-you-select-every-nth-item-in-an-array
# new_array = first_range.drop(1).each_slice(2).map(&:first)
# new_array.map! do|num|
#   num = num * 2
# end
# first_range.map do |num|
#   if num.even?
#     num = num.to_s
#   else
#     num = num
#   end
# end

# CHALLENGE 9
# sum_count = 0
# current_number = 1
# while current_number < 1000 do
#   if current_number % 3 == 0 || current_number % 5 == 0
#     sum_count += current_number
#   end
#   current_number += 1
# end
# puts sum_count
# puts current_number

#PRIME NUMBERS CHALLENGE
# This was confusing
# https://stackoverflow.com/questions/11762043/how-can-i-test-if-a-value-is-a-prime-number-in-ruby-both-the-easy-and-the-hard
# require 'prime'
# def check_prime number_to_check
#   if Prime.prime?(number_to_check)
#     puts true
#     return true
#   else
#     puts false
#     return false
#   end
# end
# check_prime 9

# From Ruby Prime docs
# def get_primes max_number
#   Prime.each(max_number) do |prime|
#     puts prime
#   end
# end
# get_primes 100

# def reverseVowelsOfString(s)
#     array_of_vowels = []
#     array_of_vowel_indices = []
#     s.each_char do |letter|
#         if letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
#             array_of_vowels.push letter
#             array_of_vowel_indices.push s.index letter
#         end
#     end
#     array_of_vowel_indices.reverse!
#     array_of_vowel_indices.each do  |index_where_vowel_is|
#         s[index_where_vowel_is] = array_of_vowels[array_of_vowel_indices.index(index_where_vowel_is)]
#       end
#     puts s
#     return s
# end
# reverseVowelsOfString "Hello World"










